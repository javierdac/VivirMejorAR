// Control de enlaces caídos: pide cada enlace externo de libro/, los textos largos en español de
// docs/ y el README, y reporta los que no abren.
//
//   node tools/check-links.mjs              # todo; salida por consola y, en GitHub Actions, en el resumen del job
//   node tools/check-links.mjs --limit 50   # solo los primeros 50, para probar
//
// Solo informa: el código de salida es siempre 0. Hay sitios oficiales que desde servidores de
// otros países a veces responden y a veces no, y frenar el build por eso no sirve.
// Tres grupos: «caídos seguro» (404, 410 y DOI inexistente en doi.org), que hay que arreglar;
// «no conectó» (tiempo agotado, 403, 5xx), que solo vale la pena mirar si se repite varias semanas;
// y «TLS incompatible» (sitios viejos que Node rechaza y el navegador abre).
//
// Los DOI no se abren en la editorial (muchas devuelven 403 a cualquier robot): se consulta la API
// de doi.org, que solo responde si el DOI existe.
import { readFileSync, appendFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { ROOT, GH_USER, listChapters, listDocs } from './lib/book.mjs';
const limitArg = process.argv.indexOf('--limit');
const LIMIT = limitArg > 0 ? Number(process.argv[limitArg + 1]) : Infinity;
const CONCURRENCY = 8;
const TIMEOUT = 20000;
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36';

// De dónde salen los enlaces: libro/, textos largos en español de docs/ y el README.
const files = [
  ...listChapters().map(f => `libro/${f}`),
  ...listDocs().map(f => `docs/${f}`),
  'README.md',
];

// url -> primer lugar donde aparece
const where = new Map();
for (const f of files) {
  readFileSync(resolve(ROOT, f), 'utf8').split(/\r?\n/).forEach((line, i) => {
    // En Fuentes los enlaces van como <url>: se toma todo lo de adentro, incluidos los paréntesis de
    // algunos DOI (10.1016/S0140-6736(15)01225-8). Los enlaces sueltos se cortan en espacios y
    // puntuación, y se les saca un paréntesis de cierre final que no tenga pareja.
    const found = [...line.matchAll(/<(https?:\/\/[^>\s]+)>/g)].map(m => m[1]);
    const rest = line.replace(/<https?:\/\/[^>\s]+>/g, '');
    for (const m of rest.matchAll(/https?:\/\/[^\s<>（）「」，。；、«»"'`\]]+/g)) {
      let url = m[0].replace(/[.,;:]+$/, '');
      while (url.endsWith(')') && (url.match(/\(/g) ?? []).length < (url.match(/\)/g) ?? []).length) url = url.slice(0, -1);
      found.push(url);
    }
    for (const url of found) if (!where.has(url)) where.set(url, `${f}:${i + 1}`);
  });
}
// No se revisan insignias, el propio sitio, las descargas de releases ni los enlaces al repo del
// fork (pueden no existir todavía): no son fuentes.
const SKIP = new RegExp(`img\\.shields\\.io|${GH_USER}\\.github\\.io|github\\.com/${GH_USER}/|/releases/download/|localhost`);
// Algunos sitios oficiales usan cifrados viejos o cadenas de certificados incompletas: Node falla
// y el navegador abre. Van en un grupo aparte.
const TLS = /^(ERR_SSL_|UNABLE_TO_VERIFY|CERT_|SELF_SIGNED|DEPTH_ZERO)/;
const urls = [...where.keys()].filter(u => !SKIP.test(u)).slice(0, LIMIT);

const withTimeout = (p, ms) => Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error('tiempo agotado')), ms))]);

async function checkDoi(doi) {
  const r = await withTimeout(fetch(`https://doi.org/api/handles/${encodeURIComponent(doi)}`), TIMEOUT);
  if (r.status === 404) return { dead: true, why: 'doi.org: el DOI no existe' };
  if (!r.ok) return { dead: false, why: `doi.org respondió ${r.status}` };
  return null;
}

async function checkUrl(url) {
  const doi = /^https?:\/\/(?:dx\.)?doi\.org\/(.+)$/i.exec(url);
  if (doi) return checkDoi(decodeURIComponent(doi[1]));
  // GET y no HEAD: hay sitios que responden 403 a HEAD y 200 a GET.
  const r = await withTimeout(fetch(url, { redirect: 'follow', headers: { 'User-Agent': UA, Accept: 'text/html,*/*' } }), TIMEOUT);
  r.body?.cancel().catch(() => {});
  if ([404, 410].includes(r.status)) return { dead: true, why: `${r.status}` };
  if (!r.ok) return { dead: false, why: `${r.status}` };
  return null;
}

const dead = [];
const flaky = [];
const tls = [];
let next = 0;
async function worker() {
  while (next < urls.length) {
    const url = urls[next++];
    try {
      const res = await checkUrl(url);
      if (res) (res.dead ? dead : flaky).push({ url, why: res.why, at: where.get(url) });
    } catch (e) {
      const why = e.cause?.code ?? e.message;
      (TLS.test(why) ? tls : flaky).push({ url, why, at: where.get(url) });
    }
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));

const sortAt = a => a.sort((x, y) => x.at.localeCompare(y.at, 'es'));
const lines = [
  `## Enlaces caídos`,
  ``,
  `Se revisaron ${urls.length} enlaces: ${dead.length} caídos seguro, ${flaky.length} que no conectaron y ${tls.length} con TLS incompatible.`,
  ``,
  `### Caídos seguro (404, 410, DOI inexistente)`,
  ``,
  ...(dead.length ? sortAt(dead).map(d => `- ${d.at}　${d.why}　${d.url}`) : ['Ninguno']),
  ``,
  `### No conectaron (tiempo agotado, 403, 5xx; mirarlos solo si se repiten varias semanas)`,
  ``,
  ...(flaky.length ? sortAt(flaky).map(d => `- ${d.at}　${d.why}　${d.url}`) : ['Ninguno']),
  ``,
  `### TLS incompatible (Node no acepta el cifrado del sitio; en el navegador suelen abrir)`,
  ``,
  ...(tls.length ? sortAt(tls).map(d => `- ${d.at}　${d.why}　${d.url}`) : ['Ninguno']),
  ``,
];
console.log(lines.join('\n'));
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, lines.join('\n') + '\n');

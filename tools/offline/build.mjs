// Arma un HTML autocontenido con index.html + README + libro/*.md: se abre con doble clic, sin
// servidor y sin internet.
// Uso: node tools/offline/build.mjs [salida]   por defecto dist/VivirMejorAR.html
// El texto va embebido en window.__CORPUS__; el init() de index.html lo detecta y no hace pedidos.
// Los enlaces relativos del sitio se cambian por direcciones en línea; el resto no se toca.
import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { ROOT, REPO, SITE, FILE_BASE, read, gitCommit, buildStamp } from '../lib/book.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? `dist/${FILE_BASE}.html`);
const STAMP = buildStamp();
const COMMIT = gitCommit();

// ---------- Texto ----------
const readme = read('README.md');
const files = [...new Set([...readme.matchAll(/\]\((libro\/[^)]+\.md)\)/g)].map(m => m[1]))].sort();
if (!files.length) throw new Error('No encontré archivos de libro/ en el README: la versión offline quedaría vacía');
// Textos largos (docs/*.md) en español: el buscador los abre en una ventana dentro de la página.
// La lista sale del README, igual que para EPUB y PDF.
const docs = [...new Set([...readme.matchAll(/\]\((docs\/[^)#/]+\.md)\)/g)].map(m => m[1]))]
  .filter(p => !/[　-鿿]/.test(p) && !/\/(referencias|CLAUDE\.original)\.md$/.test(p)).sort();
const corpus = {
  readme,
  parts: Object.fromEntries(files.map(f => [f, read(f)])),
  docs: Object.fromEntries(docs.map(f => [f, read(f)])),
};
// </script cerraría la etiqueta antes de tiempo; \/ en un string de JS es lo mismo que /
const corpusJson = JSON.stringify(corpus).replace(/<\/script/gi, '<\\/script');

// ---------- Página ----------
let html = read('index.html');
const must = (needle, label) => {
  if (!html.includes(needle)) throw new Error(`No encuentro ${label} en index.html; hay que actualizar este script: ${needle}`);
};

// Si algún día se agrega analítica entre estas marcas, la copia offline no debe llevarla.
const GA_START = '<!-- ga:start', GA_END = '<!-- ga:end -->';
if (html.includes(GA_START) && html.includes(GA_END)) {
  html = html.slice(0, html.indexOf(GA_START)) + html.slice(html.indexOf(GA_END) + GA_END.length);
}
if (/googletagmanager|google-analytics/.test(html)) throw new Error('Quedó un script de analítica: la copia offline haría pedidos externos');

// Los enlaces relativos no sirven en un archivo local: pasan a la dirección en línea
must('href="README.md"', 'el enlace a README.md');
must('href="libro/"', 'el enlace a libro/');
html = html
  .replaceAll('href="README.md"', `href="${REPO}/blob/main/README.md"`)
  .replaceAll('href="libro/"', `href="${REPO}/tree/main/libro"`)
  .replaceAll('href="ESTILO.md"', `href="${REPO}/blob/main/ESTILO.md"`)
  .replaceAll('<a class="title" href="./"', `<a class="title" href="${SITE}"`);

// Pie: qué versión es esta copia
const foot = '<div class="foot">';
must(foot, 'el pie de página');
const commitNote = COMMIT ? `, commit ${COMMIT.slice(0, 7)}` : '';
html = html.replace(foot, `${foot}Copia offline generada el ${STAMP} (hora de Buenos Aires)${commitNote}. El texto se sigue actualizando: la referencia es la <a href="${SITE}">versión en línea</a>.<br>`);

// El texto tiene que estar antes del script principal
const mainScript = '\n<script>\n/* ---------- Panel de diagnóstico';
must(mainScript, 'el comienzo del script principal');
html = html.replace(mainScript, `\n<script>window.__CORPUS__=${corpusJson}</script>${mainScript}`);

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, html);
const kb = n => (n / 1024 | 0) + ' KB';
console.log(`Generado ${OUT}: ${files.length} archivos de texto, ${docs.length} textos largos, ${kb(Buffer.byteLength(html))} (texto: ${kb(Buffer.byteLength(corpusJson))})`);

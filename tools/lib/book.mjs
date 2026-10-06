// Estructura del README y lista de archivos: la comparten los builds de EPUB (tools/epub),
// PDF (tools/pdf) y HTML offline (tools/offline), y los checks de tools/.
// No se mantiene ninguna lista de archivos a mano: se sacan del README y de libro/, así que
// agregar un capítulo o un texto largo no obliga a tocar los scripts.
import { readFileSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
// Es el único lugar de tools/ donde aparece; README.md, index.html, sitemap.xml, robots.txt,
// los workflows y la skill lo repiten (ver la lista en CLAUDE.md).
export const GH_USER = 'javierdac';
export const REPO = `https://github.com/${GH_USER}/VivirMejorAR`;
export const SITE = `https://${GH_USER}.github.io/VivirMejorAR/`;
export const TITLE = 'Guía para vivir mejor (Argentina)';
export const FILE_BASE = 'VivirMejorAR';            // dist/VivirMejorAR.{epub,pdf,html}
export const RELEASE = `${REPO}/releases/download/epub-latest`;

// Obra original (atribución CC BY 4.0)
export const UPSTREAM = 'https://github.com/eternity4719/HowToLiveBetter';
export const UPSTREAM_TITLE = '高性价比人生指南 (HowToLiveBetter)';
export const UPSTREAM_AUTHOR = 'eternity4719';
export const UPSTREAM_COMMIT = '20718ee';
export const LICENSE_URL = 'https://creativecommons.org/licenses/by/4.0/deed.es';
export const TZ = 'America/Argentina/Buenos_Aires';

// Todo se entrega con fin de línea LF: en Windows con core.autocrlf=true los archivos salen
// con CRLF y las búsquedas de texto del build offline dejarían de encontrar sus anclas.
export const read = p => readFileSync(resolve(ROOT, p), 'utf8').replace(/\r\n/g, '\n');
export const unique = arr => [...new Set(arr)];

// Capítulos de la adaptación: libro/NN-slug.md, ordenados por número.
export const listChapters = () => readdirSync(resolve(ROOT, 'libro')).filter(f => /^\d\d-.*\.md$/.test(f)).sort();

// Textos largos en español: docs/*.md en la raíz de docs/, salvo los que no son parte del libro.
// Los textos chinos del original (nombre con caracteres CJK), la tabla generada de referencias
// y el CLAUDE.md original quedan afuera.
const NOT_DOCS = new Set(['referencias.md', 'CLAUDE.original.md']);
export const isSpanishDoc = f => f.endsWith('.md') && !NOT_DOCS.has(f) && !/[　-鿿＀-￯]/.test(f);
export const listDocs = () => readdirSync(resolve(ROOT, 'docs')).filter(isSpanishDoc).sort();

export function gitCommit() {
  try {
    return execSync('git rev-parse HEAD', { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  } catch {
    return process.env.GITHUB_SHA ?? '';
  }
}

// El texto puede cambiar varias veces por día, así que la fecha va con hora y minutos.
// CI corre en UTC; se muestra siempre en hora de Buenos Aires.
export function buildStamp() {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: TZ, dateStyle: 'short', timeStyle: 'short' }).format(new Date());
}

export function stripBackLink(md) {
  return md.replace(/^\[← (?:Volver al índice|回总目录)\]\([^)]*\)\s*\n/, '');
}

// Texto legal de atribución que va en la página «Acerca de esta versión» de EPUB y PDF.
export function attributionMd() {
  return `Este libro es una **adaptación modificada** (traducción al español y adaptación a la Argentina) de «${UPSTREAM_TITLE}», de ${UPSTREAM_AUTHOR}, ${UPSTREAM}, publicada bajo la licencia [Creative Commons Atribución 4.0 Internacional (CC BY 4.0)](${LICENSE_URL}). La adaptación está sincronizada con el original hasta el commit \`${UPSTREAM_COMMIT}\`.

Esta adaptación se distribuye con la misma licencia CC BY 4.0. No implica respaldo ni aprobación del autor original. Las entradas modificadas para la Argentina lo indican con «Adaptación AR:» en sus notas.`;
}

// Parte del README entre un encabezado y el siguiente indicado
export function readBook() {
  const readme = read('README.md');
  const lines = readme.split('\n');
  const between = (from, to) => {
    const a = lines.findIndex(l => l.startsWith(from));
    const b = lines.findIndex((l, i) => i > a && l.startsWith(to));
    if (a < 0 || b < 0) throw new Error(`No encuentro en el README la parte que va de «${from}» a «${to}»`);
    return lines.slice(a, b).join('\n');
  };
  const description = between('# Guía para vivir mejor (Argentina)', '[![')
    .split('\n').slice(1).map(l => l.replace(/<[^>]+>/g, '').trim()).filter(Boolean).join(' ');
  const frontMd = between('## Estado de la adaptación', '## Índice');
  const contentsMd = between('## Índice', '## Texto completo')
    .split('\n\n').filter(p => !p.includes('index.html')).join('\n\n');
  const bookFiles = unique([...contentsMd.matchAll(/\]\((libro\/[^)#]+\.md)\)/g)].map(m => m[1]));
  const docFiles = unique([...readme.matchAll(/\]\((docs\/[^)#/]+\.md)\)/g)].map(m => m[1]))
    .filter(p => isSpanishDoc(p.slice('docs/'.length)));
  if (bookFiles.length === 0) throw new Error('No encontré archivos de libro/ en el índice del README');
  return { readme, description, frontMd, contentsMd, bookFiles, docFiles };
}

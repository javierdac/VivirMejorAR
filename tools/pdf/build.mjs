// Arma un PDF con el README, libro/*.md y los textos largos en español de docs/: pandoc pasa el
// Markdown a typst y typst diagrama.
// Uso: node tools/pdf/build.mjs [salida]   por defecto dist/VivirMejorAR.pdf
// Necesita pandoc (≥3.1, con salida typst) y typst (≥0.13) en el PATH, o las variables PANDOC y TYPST.
// El diseño está en tools/pdf/template.typ. El texto no se modifica; solo se hacen tres cosas:
// sacar «← Volver al índice», ponerle un ancla al título de cada sección y convertir los enlaces
// internos en saltos dentro del libro o en direcciones de GitHub.
import { writeFileSync, mkdirSync, statSync } from 'node:fs';
import { resolve, dirname, posix, basename } from 'node:path';
import { execFileSync } from 'node:child_process';
import { ROOT, REPO, SITE, TITLE, FILE_BASE, UPSTREAM_COMMIT, read, readBook, gitCommit, buildStamp, stripBackLink, attributionMd } from '../lib/book.mjs';

const OUT = resolve(ROOT, process.argv[2] ?? `dist/${FILE_BASE}.pdf`);
const WORK = resolve(ROOT, 'dist/pdf-build.md');
const PANDOC = process.env.PANDOC ?? 'pandoc';
const TYPST = process.env.TYPST ?? 'typst';
const STAMP = buildStamp();          // «(hora de Buenos Aires)» va en la plantilla; a pandoc se le pasa ASCII
const COMMIT = gitCommit();

const { description, frontMd, contentsMd, bookFiles, docFiles } = readBook();

// ---------- Páginas (un título de nivel 1 por página; en typst cada uno empieza página nueva) ----------
const anchorOf = new Map();
bookFiles.forEach(f => anchorOf.set(f, 'sec-' + (basename(f).match(/^\d+/)?.[0] ?? anchorOf.size + 1)));
docFiles.forEach((f, i) => anchorOf.set(f, `doc-${i + 1}`));

const pages = [
  { src: 'README.md', md: `# Presentación\n\n${description}\n\n${frontMd}`, anchor: 'front' },
  { src: 'README.md', md: contentsMd.replace(/^## Índice/, '# Índice de secciones'), anchor: 'contents' },
  ...[...bookFiles, ...docFiles].map(src => ({ src, md: stripBackLink(read(src)), anchor: anchorOf.get(src) })),
  { src: 'README.md', md: aboutMd(), anchor: 'about' },
];

function aboutMd() {
  const commitLine = COMMIT ? `- Commit: ${COMMIT.slice(0, 7)}\n` : '';
  return `# Acerca de esta versión

Este PDF se arma automáticamente a partir del Markdown del repositorio cada vez que cambia el texto. Esta copia es la siguiente versión:

- Generado: ${STAMP} (hora de Buenos Aires)
${commitLine}- Original sincronizado hasta el commit ${UPSTREAM_COMMIT}
- Última versión, buscador y sugerencias: ${REPO}
- Buscador en línea (por palabra, sección, nivel de evidencia y costo; también se puede guardar como archivo único): ${SITE}

Los enlaces a otras secciones se convirtieron en saltos dentro del libro; los que apuntan a archivos que no están en el libro (el original chino, licencias) llevan a GitHub.

## Licencia y atribución

${attributionMd()}`;
}

// ---------- Enlaces: los del libro pasan a anclas, el resto a direcciones absolutas ----------
function rewriteLinks(md, src) {
  return md.replace(/\]\(([^)\s]+)(\s+"[^"]*")?\)/g, (all, href, title) => {
    if (/^(https?:|mailto:)/.test(href)) return all;
    // Las anclas del README a sí mismo (#índice) no existen en el libro: apuntan al README en GitHub
    if (href.startsWith('#')) return `](${REPO}/blob/main/README.md${href}${title ?? ''})`;
    const [path] = href.split('#');
    const target = posix.normalize(posix.join(posix.dirname(src), path));
    const anchor = anchorOf.get(target);
    if (anchor) return `](#${anchor}${title ?? ''})`;
    const kind = target.endsWith('/') ? 'tree' : 'blob';
    return `](${REPO}/${kind}/main/${target}${title ?? ''})`;
  });
}

const body = pages.map(p => {
  const md = rewriteLinks(p.md, p.src)
    .replace(/<!--[\s\S]*?-->/g, '')                       // los comentarios HTML (etiquetas de costo) no van al PDF
    .replace(/^(# .+?)\s*$/m, `$1 {#${p.anchor}}`);        // ancla en el título de nivel 1 de la página
  if (!md.includes(`{#${p.anchor}}`)) throw new Error(`${p.src} no tiene título de nivel 1 para el ancla`);
  return md.trim();
}).join('\n\n');

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(WORK, body);

// ---------- pandoc → typst → pdf ----------
const run = (cmd, args) => {
  try {
    return execFileSync(cmd, args, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (err) {
    if (err.code === 'ENOENT') throw new Error(`No encuentro ${cmd}: instalalo o indicá el ejecutable con la variable ${cmd === PANDOC ? 'PANDOC' : 'TYPST'}`);
    throw new Error(`Falló ${cmd}:\n${err.stderr || err.stdout || err.message}`);
  }
};

const typFile = resolve(ROOT, 'dist/pdf-build.typ');
run(PANDOC, [
  '--from=gfm+attributes', '--to=typst', '--wrap=none',
  `--template=${resolve(ROOT, 'tools/pdf/template.typ')}`,
  '-V', `booktitle=${TITLE}`, '-V', `subtitle=${description}`,
  '-V', `builddate=${STAMP}`, '-V', `commit=${COMMIT.slice(0, 7) || 'desconocido'}`, '-V', `upstream=${UPSTREAM_COMMIT}`,
  '-V', `site=${SITE}`, '-V', `repo=${REPO}`,
  '-o', typFile, WORK,
]);
const log = run(TYPST, ['compile', typFile, OUT, '--root', ROOT]);
if (log.trim()) console.log(log.trim());

const entries = pages.filter(p => bookFiles.includes(p.src))
  .reduce((n, p) => n + p.md.split('\n').filter(l => l.startsWith('### ')).length, 0);
console.log(`Generado ${OUT}: ${bookFiles.length} secciones, ${entries} entradas, ${docFiles.length} textos largos, ${(statSync(OUT).size / 1048576).toFixed(1)} MB`);

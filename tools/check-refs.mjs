// Tabla de referencias cruzadas: resuelve cada referencia del texto («ver sección 8, entrada 17»,
// «ver entrada 3», «entradas 11 a 14») al título de la entrada a la que apunta y la escribe en
// docs/referencias.md. Ese archivo se versiona: si al insertar o borrar una entrada una referencia
// pasa a apuntar a otra cosa, el `git diff` lo muestra (mismo número, otro título = referencia corrida).
//
//   node tools/check-refs.mjs            # regenera docs/referencias.md (sync-stats.mjs lo llama)
//   node tools/check-refs.mjs --check    # solo verifica, no escribe; sale con código 1 si hay problemas (CI)
//   node tools/check-refs.mjs --suspect  # además lista las referencias sin ancla
//
// Formatos reconocidos (mayúsculas o minúsculas, con o sin «ver» adelante):
//   sección N, entrada M            → otra sección
//   sección N, entradas M, K y J    → otra sección, varias entradas («a» indica rango: «entradas 11 a 14»)
//   entrada N / entradas N, M y K / entradas N a M   → misma sección
//   sección N / secciones N y M     → sección completa (solo se verifica que exista)
// «artículo N» (leyes) nunca es referencia: no usa las palabras «entrada» ni «sección».
//
// Dónde se buscan: en libro/ dentro de las entradas, en los campos Costo, En simple, Beneficio y
// Notas (las referencias a otra sección también en Fuentes); fuera de las entradas (introducción y
// bloques de temas del encabezado del capítulo), en cualquier línea. En los textos largos de docs/
// solo cuentan las referencias con «sección N, entrada M», porque ahí no existe «esta sección».
//
// Ancla: cada referencia tiene que llevar cerca alguna palabra del título de la entrada a la que
// apunta, para que si un día queda corrida se note. Regla (simple a propósito):
//   - se normaliza (minúsculas, sin tildes) y se toman las palabras de 4 letras o más que no estén
//     en la lista STOP (para, como, entrada, sección…), más las siglas y números de 2+ caracteres;
//   - dos palabras coinciden si son iguales o si comparten las primeras 5 letras
//     («vacunas» ~ «vacunate», «celular» ~ «celulares»); si una tiene 4 letras, tiene que ser
//     el comienzo de la otra («fija» ~ «fijar»);
//   - la ventana es el tramo de la oración donde está la referencia: el pedazo desde la última coma
//     y el pedazo anterior (dos tramos separados por comas, sin pasar de un punto, punto y coma o
//     dos puntos; si ahí no hay ninguna palabra útil, como en «Presión y glucemia: ver sección 1,
//     entrada 7», se toma lo que está antes de los dos puntos), más lo que sigue a la referencia
//     hasta el cierre del paréntesis o el fin de la frase.
//   Si no hay coincidencia en esa ventana pero sí en la oración entera, la referencia es «débil».
//   Sin ancla y débiles fallan en --check: se arreglan agregando el ancla, p. ej.
//   «(ver entrada 16: pagarés y garantías)». Los rangos («entradas 11 a 14») y las referencias a
//   capítulos todavía pendientes de adaptación no se verifican.
//
// Las líneas se cortan con /\r?\n/: en JS el . no matchea \r y una línea con CRLF no pasaría
// /^### (\d+)\. (.*)$/.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, basename } from 'node:path';
import { ROOT, listChapters, listDocs } from './lib/book.mjs';

const CHECK_ONLY = process.argv.includes('--check');
const SUSPECT = process.argv.includes('--suspect');
const OUT = 'docs/referencias.md';

const FIELDS = /^- (Costo|En simple|Beneficio|Notas): /;
const CROSS_FIELDS = /^- (Costo|En simple|Beneficio|Notas|Fuentes): /;

const files = listChapters();
const docs = listDocs();

// sections: número → { file, titles: Map(número de entrada → título) }
const sections = new Map();
for (const f of files) {
  const titles = new Map();
  for (const line of readFileSync(resolve(ROOT, 'libro', f), 'utf8').split(/\r?\n/)) {
    const m = /^### (\d+)\. (.*)$/.exec(line);
    if (m) titles.set(Number(m[1]), m[2].trim());
  }
  sections.set(Number(f.slice(0, 2)), { file: f, titles });
}
const isPending = n => sections.has(n) && sections.get(n).titles.size === 0;

// ---------- Expresiones ----------
const W = '(?<![\\p{L}\\p{N}])';                       // inicio de palabra (funciona con tildes)
const LIST = '\\d+(?:\\s*(?:,|\\by\\b|\\bo\\b|\\ba\\b)\\s*\\d+)*';
const ENTRY = `(?:entrada\\s+(\\d+)(?!\\d)(?![,.]\\d)|entradas\\s+(${LIST}))`;
const XREF = new RegExp(
  `${W}secci[oó]n\\s+(\\d+)\\s*,\\s*${ENTRY}` +            // 1 sección, 2 entrada, 3 lista
  `|${W}(?:entrada\\s+(\\d+)(?!\\d)(?![,.]\\d)|entradas\\s+(${LIST}))` + // 4 entrada, 5 lista (misma sección)
  `|${W}secci(?:[oó]n|ones)\\s+(${LIST})`,                 // 6 sección(es) completa(s)
  'giu');
const RELATIVE = /(?<![\p{L}])(entrada (?:anterior|siguiente|previa|de arriba|de abajo)|(?:anterior|siguiente|próxima|proxima) entrada)/giu;

// «3, 5 y 7» → [3,5,7]; «11 a 14» → [11..14] marcados como rango (no se les exige ancla)
function nums(spec) {
  const out = [];
  for (const part of String(spec).split(/\s*(?:,|\by\b|\bo\b)\s*/)) {
    const r = /^(\d+)\s*a\s*(\d+)$/.exec(part.trim());
    if (r) {
      const [a, b] = [Number(r[1]), Number(r[2])];
      if (b >= a && b - a <= 40) for (let i = a; i <= b; i++) out.push([i, true]);
      continue;
    }
    if (/^\d+$/.test(part.trim())) out.push([Number(part), false]);
  }
  return out;
}

// ---------- Anclas ----------
const STOP = new Set(('para como pero porque cuando donde desde hasta sobre entre tiene tienen tenes tener hace hacen hacer ' +
  'esta este esto estas estos esos esas otra otro otras otros cada todo toda todos todas mismo misma tambien ' +
  'ademas entrada entradas seccion secciones puede pueden podes sino segun aunque antes despues mientras dentro fuera ' +
  'cual cuales quien quienes algo alguien nada nadie siempre nunca aqui alli alla entonces luego tras contra durante ' +
  'mediante veces estar sera sido haber habia tanto tanta mucho mucha muchos muchas poco pocos poca pocas').split(' '));
const norm = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
function keys(text) {
  const out = new Set();
  for (const w of norm(text).match(/[a-z]+/g) ?? []) if (w.length >= 4 && !STOP.has(w)) out.add(w);
  // siglas y números (RCP, VIH, 911, 135): en el texto original, 2+ caracteres
  for (const t of text.match(/\b(?:[A-ZÁÉÍÓÚÑ]{2,}|\d{2,})\b/g) ?? []) out.add('#' + t);
  return out;
}
// Iguales, o con el mismo comienzo: 5 letras si las dos palabras tienen 5 o más; si una tiene 4,
// esas 4 letras tienen que ser el comienzo de la otra («fija» ~ «fijar»).
const same = (a, b) => {
  if (a === b) return true;
  if (a.startsWith('#') || b.startsWith('#')) return false;
  const n = Math.min(5, a.length, b.length);
  return a.slice(0, n) === b.slice(0, n);
};
const anchored = (text, title) => {
  const t = [...keys(title)];
  for (const w of keys(text)) if (t.some(x => same(w, x))) return true;
  return false;
};

// Ventanas de contexto alrededor de una referencia
const SENT = /[.;!?]/;
function sentenceBefore(line, idx) {
  const before = line.slice(0, idx);
  let start = -1;
  for (let i = before.length - 1; i >= 0; i--) if (SENT.test(before[i]) && !/\d/.test(before[i + 1] ?? '')) { start = i; break; }
  return before.slice(start + 1);
}
function clauseBefore(line, idx) {
  const parts = sentenceBefore(line, idx).split(':');
  const seg = parts.pop();
  const clauses = seg.split(',');
  const tail = clauses.pop();
  const prev = clauses.pop();
  const near = (prev !== undefined ? prev + ',' : '') + tail;
  // «Presión, glucemia y hepatitis B: ver sección 1, entrada 7»: después de los dos puntos no hay
  // palabras útiles, así que el ancla es lo que está antes de los dos puntos.
  if (!keys(near).size && parts.length) return parts.pop() + ':' + near;
  return near;
}
function afterOf(line, end) {
  const before = line.slice(0, end);
  const inParen = (before.match(/\(/g) ?? []).length > (before.match(/\)/g) ?? []).length;
  const rest = line.slice(end);
  let depth = 0, i = 0;
  for (; i < rest.length && i < 160; i++) {
    const c = rest[i];
    if (c === '(') depth++;
    else if (c === ')') { if (depth === 0) break; depth--; }
    else if (depth === 0 && /[;!?]/.test(c)) break;
    else if (depth === 0 && c === '.' && !/\d/.test(rest[i + 1] ?? '') && !/[A-Z]/.test(rest[i - 1] ?? '')) break;
    else if (depth === 0 && !inParen && c === ',') break;
  }
  return rest.slice(0, i);
}
const cell = s => s.replace(/\|/g, '¦').replace(/\s+/g, ' ').trim();

// ---------- Recorrido ----------
const out = [];
const problems = [];
const suspects = [];
const weak = [];
let total = 0;

const targets = [
  ...files.map(f => ({ f, dir: 'libro', isDoc: false })),
  ...docs.map(f => ({ f, dir: 'docs', isDoc: true })),
];

for (const { f, dir, isDoc } of targets) {
  const num = isDoc ? 0 : Number(f.slice(0, 2));
  const self = isDoc ? null : sections.get(num);
  const lines = readFileSync(resolve(ROOT, dir, f), 'utf8').split(/\r?\n/);
  const rows = [];
  let cur = 0;                                   // entrada actual (0 = encabezado del capítulo)
  let unit = isDoc ? 'inicio' : 'encabezado';

  lines.forEach((line, i) => {
    if (isDoc) {
      const h = /^#{1,6}\s+(.+?)\s*$/.exec(line);
      if (h) { unit = h[1].slice(0, 40); return; }
    } else {
      const t = /^### (\d+)\. (.*)$/.exec(line);
      if (t) { cur = Number(t[1]); unit = `entrada ${cur}`; return; }
      if (/^#/.test(line) || /^\[← /.test(line)) return;
    }
    if (/^\s*<!--/.test(line)) return;
    const inEntry = !isDoc && cur > 0;
    if (inEntry ? !CROSS_FIELDS.test(line) : !line.trim()) return;
    const sameAllowed = !isDoc && (!inEntry || FIELDS.test(line));

    for (const m of line.matchAll(RELATIVE)) {
      problems.push(`${dir}/${f}:${i + 1} ${unit}: referencia relativa «${m[1]}»; cambiala por «entrada N (ancla)»`);
    }

    for (const m of line.matchAll(XREF)) {
      const end = m.index + m[0].length;
      const ctx = sentenceBefore(line, m.index);
      const narrow = clauseBefore(line, m.index);
      const after = afterOf(line, end);
      const base = { from: unit, line: i + 1, ctx: cell(ctx).slice(-90), wide: ctx + ' ' + after, narrow: narrow + ' ' + after };

      if (m[6] !== undefined) {                           // sección completa
        if (isDoc && !/secci/i.test(m[0])) continue;
        for (const [s] of nums(m[6])) {
          if (!sections.has(s)) problems.push(`${dir}/${f}:${i + 1} ${unit}: «sección ${s}» no existe`);
        }
        continue;
      }
      let sec, spec;
      if (m[1] !== undefined) { sec = Number(m[1]); spec = m[2] ?? m[3]; }
      else {
        if (!sameAllowed) continue;
        sec = num; spec = m[4] ?? m[5];
      }
      const target = sections.get(sec);
      for (const [x, range] of nums(spec)) {
        const ref = m[1] !== undefined ? `sección ${sec}, entrada ${x}` : `entrada ${x}`;
        if (!target) {
          problems.push(`${dir}/${f}:${i + 1} ${unit}: «${ref}», la sección ${sec} no existe`);
          rows.push({ ...base, ref, title: null, pending: false, range });
          continue;
        }
        if (isPending(sec)) { rows.push({ ...base, ref, title: null, pending: true, range }); continue; }
        const title = target.titles.get(x);
        rows.push({ ...base, ref, title, pending: false, range });
        if (!title) problems.push(`${dir}/${f}:${i + 1} ${unit}: «${ref}», la sección ${sec} no tiene la entrada ${x} (tiene ${target.titles.size})`);
        if (!isDoc && inEntry && !range && sec === num && x === cur) problems.push(`${dir}/${f}:${i + 1} la entrada ${cur} se cita a sí misma`);
      }
    }
  });

  for (const r of rows) {
    if (!r.title || r.range || r.pending) continue;
    if (anchored(r.narrow, r.title)) continue;
    const list = anchored(r.wide, r.title) ? weak : suspects;
    list.push(`${dir}/${f}:${r.line} ${r.from} → «${r.ref}» ${r.title.slice(0, 50)}…　…${r.ctx}【${r.ref}】`);
  }

  if (!rows.length) continue;
  total += rows.length;
  out.push(`## ${dir}/${basename(f, '.md')}\n`);
  out.push('| Origen | Referencia | Entrada a la que apunta | Contexto |');
  out.push('| --- | --- | --- | --- |');
  for (const r of rows) {
    const title = r.pending ? '_(capítulo pendiente de adaptación)_' : r.title ? cell(r.title) : '**apunta a una entrada que no existe**';
    out.push(`| ${r.from} | ${r.ref} | ${title} | …${r.ctx}… |`);
  }
  out.push('');
}

const body = [
  '# Tabla de referencias cruzadas',
  '',
  'Archivo generado por `node tools/check-refs.mjs`. No lo edites a mano.',
  '',
  'Las referencias del texto («ver sección 8, entrada 17», «ver entrada 3») guardan solo el número,',
  'no el contenido. Si se inserta o se borra una entrada, las referencias pueden quedar corridas y',
  'seguir dentro del rango, así que un control de rango no alcanza. Por eso acá se escribe a qué',
  '**título** apunta cada referencia y el archivo se versiona: después de cambiar entradas se',
  'regenera y, en el `git diff`, toda fila con el mismo número y otro título es una referencia corrida.',
  '',
  'Alcance: `libro/` (encabezado de cada capítulo y campos de las entradas) y los textos largos en',
  'español de `docs/`. Las referencias a capítulos todavía pendientes de adaptación se listan pero no',
  'se pueden verificar.',
  '',
  'Además, cada referencia tiene que llevar un **ancla**: alguna palabra del título de destino cerca',
  '(«vacuna antigripal (ver entrada 20)» o «(ver entrada 16: pagarés y garantías)»). Con',
  '`node tools/check-refs.mjs --check`, una referencia sin ancla falla: si un día queda corrida, nadie',
  'lo notaría. Los rangos («entradas 11 a 14») no necesitan ancla. La regla exacta está en el',
  'encabezado de `tools/check-refs.mjs`.',
  '',
  `Total: ${total} referencias.`,
  '',
  ...out,
].join('\n');

if (problems.length && !CHECK_ONLY) {
  console.log('Para revisar:');
  for (const p of problems) console.log('  ' + p);
  console.log('');
}
if (SUSPECT && suspects.length) {
  console.log(`Referencias sin ancla (${suspects.length}):`);
  for (const s of suspects) console.log('  ' + s);
  console.log('');
}
if (SUSPECT && weak.length) {
  console.log(`Referencias con ancla débil, solo fuera de su frase (${weak.length}):`);
  for (const s of weak) console.log('  ' + s);
  console.log('');
}

if (CHECK_ONLY) {
  for (const p of problems) console.log('  ' + p);
  if (suspects.length) {
    console.log(`${suspects.length} referencias sin ancla; agregá una palabra del título de destino (--suspect muestra la lista):`);
    for (const s of suspects.slice(0, 10)) console.log('  ' + s.split('　')[0]);
    if (suspects.length > 10) console.log(`  …y ${suspects.length - 10} más`);
  }
  if (weak.length) {
    console.log(`${weak.length} referencias con ancla débil (la palabra coincide pero fuera de la frase de la referencia):`);
    for (const s of weak.slice(0, 10)) console.log('  ' + s.split('　')[0]);
    if (weak.length > 10) console.log(`  …y ${weak.length - 10} más`);
  }
  const bad = problems.length + suspects.length + weak.length;
  console.log(bad ? `Hay ${bad} problemas` : `Referencias OK: ${total} referencias, todas apuntan a una entrada existente y tienen ancla`);
  process.exit(bad ? 1 : 0);
}

writeFileSync(resolve(ROOT, OUT), body, 'utf8');
console.log(`Escrito ${OUT}: ${total} referencias`);

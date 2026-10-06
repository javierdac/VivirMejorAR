// Control de «En simple»: es la línea más visible de cada tarjeta del buscador y mucha gente lee
// solo esa. Tiene que poder entenderse de una, sin jerga estadística (ver ESTILO.md).
//
//   node tools/check-plain.mjs            # lista los «En simple» que no cumplen; código 1 si hay (CI)
//   node tools/check-plain.mjs --stat     # solo cuenta por regla
//   node tools/check-plain.mjs --numbers  # suma la regla ③, para revisión manual
//
// Por defecto revisa ①②④; la ③ solo con --numbers porque da muchos falsos positivos (teléfonos
// como 911 o 135, montos de ejemplo en entradas de plata o de leyes) y por eso no va en CI.
// ① Largo: 220 caracteres como máximo (contando espacios).
// ② Jerga de estudios: siglas estadísticas (RR, HR, OR, IC), diseño del estudio («metaanálisis»,
//    «cohorte», «ensayo aleatorizado») y tamaño de muestra («n =», «participantes»).
// ③ Números nuevos: cada número del «En simple» tiene que aparecer en el título, Costo o Beneficio
//    de la misma entrada (o salir de redondear uno de ellos, o de pasar 0,72 a «28 % menos»).
// ④ Frases vacías que obligan a traducir de nuevo; la lista VAGUE es corta a propósito: mejor
//    que se escape alguna que llenar el reporte de falsos positivos.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { ROOT, listChapters } from './lib/book.mjs';

const STAT = process.argv.includes('--stat');
const NUMBERS = process.argv.includes('--numbers');
const MAX = 220;

const JARGON = [
  [/(?<![\p{L}\p{N}])(RR|HR|OR|IC)(?![\p{L}\p{N}])/u, 'sigla estadística'],
  [/meta-?an[aá]lisis|metan[aá]lisis|cohorte|ensayos? (cl[ií]nicos? )?aleatorizados?/iu, 'diseño del estudio'],
  [/(?<![\p{L}])n\s*=\s*\d|participantes/iu, 'tamaño de muestra'],
];
const VAGUE = ['en el fondo', 'dicho de otro modo', 'en otras palabras', 'al fin y al cabo', 'a fin de cuentas'];

// Números por valor, con formato argentino: «20.995» = 20995, «0,88» = 0.88, «1,5 millones».
function numbers(s) {
  return [...s.replace(/(\d)\.(\d{3})(?!\d)/g, '$1$2').matchAll(/(\d+(?:,\d+)?)\s*(mil(?:lones?)?)?/g)]
    .map(m => Number(m[1].replace(',', '.')) * (m[2] === 'mil' ? 1e3 : m[2] ? 1e6 : 1));
}
// ¿El número n del «En simple» sale del número p del Beneficio? Redondeo (45,6 → 46) o razón de
// riesgo pasada a porcentaje (0,72 → 28 % menos). Tolerancia: 5 %.
function derived(n, p) {
  const near = (a, b) => a === b || Math.abs(a - b) <= 0.05 * Math.max(Math.abs(a), Math.abs(b));
  return near(n, p) || near(n / 100, p) || (p < 1 && near(n / 100, 1 - p)) || (p > 1 && p < 100 && near(n, 100 - p));
}

const bad = [];
const count = { largo: 0, jerga: 0, 'números nuevos': 0, 'frases vacías': 0 };
let total = 0;

for (const f of listChapters()) {
  const sec = Number(f.slice(0, 2));
  const lines = readFileSync(resolve(ROOT, 'libro', f), 'utf8').split(/\r?\n/);
  let no = 0, title = '', fields = {};
  const flush = () => {
    const plain = fields['En simple'];
    if (!no || plain == null) return;
    total++;
    const problems = [];
    const len = [...plain.trim()].length;
    if (len > MAX) { problems.push(`${len} caracteres (máximo ${MAX})`); count.largo++; }
    const jar = JARGON.filter(([re]) => re.test(plain)).map(([re, name]) => `${name} «${plain.match(re)[0]}»`);
    if (jar.length) { problems.push(...jar); count.jerga++; }
    if (NUMBERS) {
      const pool = numbers([title, fields.Costo ?? '', fields.Beneficio ?? ''].join(' '));
      const fresh = [...new Set(numbers(plain))].filter(n => !pool.some(p => derived(n, p)));
      if (fresh.length) { problems.push(`números que no están en Beneficio/Costo/título: ${fresh.join(', ')}`); count['números nuevos']++; }
    }
    const vague = VAGUE.filter(w => plain.toLowerCase().includes(w));
    if (vague.length) { problems.push(`frase vacía «${vague.join('», «')}»`); count['frases vacías']++; }
    if (problems.length) bad.push(`libro/${f}  sección ${sec}, entrada ${no}: ${problems.join('; ')}`);
  };
  for (const line of lines) {
    const h = line.match(/^### (\d+)\. (.*)$/);
    if (h) { flush(); no = Number(h[1]); title = h[2]; fields = {}; continue; }
    const m = line.match(/^- (En simple|Costo|Beneficio): (.*)$/);
    if (m && no) fields[m[1]] = m[2];
  }
  flush();
}

if (!STAT) for (const b of bad) console.log(b);
console.log(`\n«En simple»: ${total} en total, ${bad.length} con problemas (` +
  Object.entries(count).map(([k, v]) => `${k} ${v}`).join(', ') + ')');
if (bad.length && !STAT) process.exit(1);

// Estadísticas: correr después de cambiar entradas. Hace, en orden:
// ① recalcula los números de libro/ y los reescribe en README.md e index.html;
// ② llama a check-refs.mjs para regenerar docs/referencias.md;
// ③ llama a check-plain.mjs para revisar los «En simple» (avisa, no corta).
//
//   node tools/sync-stats.mjs           # todo
//   node tools/sync-stats.mjs --check   # solo compara ①, no escribe; código 1 si hay números viejos (CI)
//
// ① solo reemplaza los números, no toca el resto del texto. Cómo se cuenta:
// entradas = títulos «### » en libro/*.md; secciones = archivos de libro/; adaptadas = secciones con
// al menos una entrada; A/B/C = primera letra de «- Nivel de evidencia: » (con o sin «(controvertido)»);
// controvertidas = «- Notas: » que empieza con «Controvertido»; a verificar = líneas con
// «VERIFICAR-AR» o «TODO»; enlaces = cantidad de http(s) en las líneas «- Fuentes: » y «- Notas: »;
// relación costo-beneficio = misma regla que index.html (COST_W y e.ratio).
// (No hay imagen og.png por ahora; si se agrega, se puede volver a sumar un paso de captura.)
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT, listChapters } from './lib/book.mjs';

const CHECK = process.argv.includes('--check');
const read = f => readFileSync(join(ROOT, f), 'utf8');

// La regla de niveles tiene que coincidir con las líneas COST_W y e.ratio de index.html; si alguien
// las cambia allá, este script se niega a seguir hasta que se actualice acá también.
const indexText = read('index.html');
const COST_W_LINE = "const COST_W = { money:{'0':0,'少':1,'多':2}, time:{'少':0,'中':1,'多':2}, will:{'否':0,'些':1,'是':2} };";
const RATIO_LINE = "e.ratio = e.level === '大' ? (e.cs === 0 ? '极高' : (e.cs <= 2 ? '高' : '一般'))";
if (!indexText.includes(COST_W_LINE)) throw new Error('Cambió la línea COST_W de index.html: actualizá los pesos en este script');
if (!indexText.includes(RATIO_LINE)) throw new Error('Cambió la línea e.ratio de index.html: actualizá la regla en este script');

const W = {
  money: { '0': 0, '少': 1, '多': 2 },
  time: { '少': 0, '中': 1, '多': 2 },
  will: { '否': 0, '些': 1, '是': 2 },
};
function ratioOf(cost, level) {
  if (level === '大') return cost === 0 ? '极高' : cost <= 2 ? '高' : '一般';
  return level === '中' && cost === 0 ? '高' : '一般';
}

const files = listChapters();
const sections = files.length;
let entries = 0, adapted = 0, dispute = 0, todo = 0, links = 0;
const grade = { A: 0, B: 0, C: 0 };
const ratio = { '极高': 0, '高': 0, '一般': 0 };

for (const f of files) {
  let here = 0;
  for (const line of read(join('libro', f)).split(/\r?\n/)) {
    if (line.startsWith('### ')) { entries++; here++; }
    const g = line.match(/^- Nivel de evidencia: ([ABC])/);
    if (g) grade[g[1]]++;
    if (line.startsWith('- Notas: Controvertido')) dispute++;
    if (/VERIFICAR-AR|TODO/.test(line)) todo++;
    if (/^- (Fuentes|Notas): /.test(line)) links += (line.match(/https?:\/\//g) ?? []).length;
    const t = line.match(/<!--\s*成本标签:\s*钱=(\S+)\s+时间=(\S+)\s+毅力=(\S+)\s+收益=(\S+)\s+口径=/);
    if (t) ratio[ratioOf(W.money[t[1]] + W.time[t[2]] + W.will[t[3]], t[4])]++;
  }
  if (here) adapted++;
}

const tagged = ratio['极高'] + ratio['高'] + ratio['一般'];
if (tagged !== entries) console.warn(`Aviso: ${entries - tagged} entradas sin etiqueta de costo; los niveles no suman el total`);
if (grade.A + grade.B + grade.C !== entries) console.warn('Aviso: la cantidad de «Nivel de evidencia» no coincide con la de entradas');

// Porcentajes por resto mayor, para que sumen exactamente 100 (con 0 entradas, todo en 0).
const ORDER = ['极高', '高', '一般'];
const pct = {}, rem = {};
for (const k of ORDER) {
  const exact = entries ? ratio[k] * 100 / entries : 0;
  pct[k] = Math.floor(exact);
  rem[k] = exact - pct[k];
}
const short = entries ? 100 - ORDER.reduce((s, k) => s + pct[k], 0) : 0;
for (const k of [...ORDER].sort((a, b) => rem[b] - rem[a]).slice(0, Math.max(short, 0))) pct[k]++;

console.log(`Entradas ${entries} | secciones ${sections} (adaptadas ${adapted}) | A ${grade.A} B ${grade.B} C ${grade.C} | controvertidas ${dispute} | a verificar ${todo} | enlaces ${links}`);
console.log(`Costo-beneficio: muy alta ${ratio['极高']} (${pct['极高']} %), alta ${ratio['高']} (${pct['高']} %), regular ${ratio['一般']} (${pct['一般']} %)`);
console.log('');

const EDITS = [
  ['README.md', 'cantidad de entradas', /(\d+) entradas adaptadas/g, `${entries} entradas adaptadas`],
  ['README.md', 'secciones adaptadas', /(\d+) de \d+ secciones adaptadas/g, `${adapted} de ${sections} secciones adaptadas`],
  ['README.md', 'insignia de entradas', /entradas_adaptadas-(\d+)-/g, `entradas_adaptadas-${entries}-`],
  ['README.md', 'insignia de evidencia', /evidencia-A%20(\d+)%20%C2%B7%20B%20\d+%20%C2%B7%20C%20\d+-/g,
    `evidencia-A%20${grade.A}%20%C2%B7%20B%20${grade.B}%20%C2%B7%20C%20${grade.C}-`],
  ['README.md', 'párrafo de niveles de evidencia',
    /De las (\d+) entradas ya adaptadas, \d+ son de nivel A, \d+ de nivel B y \d+ de nivel C; \d+ están marcadas como controvertidas y \d+ tienen datos pendientes de verificar/g,
    `De las ${entries} entradas ya adaptadas, ${grade.A} son de nivel A, ${grade.B} de nivel B y ${grade.C} de nivel C; ${dispute} están marcadas como controvertidas y ${todo} tienen datos pendientes de verificar`],
  ['README.md', 'párrafo de costo-beneficio',
    /De las (\d+) entradas ya adaptadas, \d+ tienen relación costo-beneficio muy alta \(\d+ %\), \d+ alta \(\d+ %\) y \d+ regular \(\d+ %\)/g,
    `De las ${entries} entradas ya adaptadas, ${ratio['极高']} tienen relación costo-beneficio muy alta (${pct['极高']} %), ${ratio['高']} alta (${pct['高']} %) y ${ratio['一般']} regular (${pct['一般']} %)`],
  ['README.md', 'enlaces a fuentes', /(\d+) enlaces a fuentes/g, `${links} enlaces a fuentes`],
  ['README.md', 'cantidad de archivos', /dividido en (\d+) archivos/g, `dividido en ${sections} archivos`],
  ['index.html', 'descripciones', /(\d+) entradas adaptadas/g, `${entries} entradas adaptadas`],
  ['index.html', 'numberOfPages', /numberOfPages":(\d+)/g, `numberOfPages":${entries}`],
  ['index.html', 'secciones adaptadas', /(\d+) de \d+ secciones adaptadas/g, `${adapted} de ${sections} secciones adaptadas`],
  ['index.html', 'archivos de libro/', /los (\d+) archivos de/g, `los ${sections} archivos de`],
];

const texts = new Map();
const stale = [];
for (const [file, label, pattern, repl] of EDITS) {
  const text = texts.get(file) ?? read(file);
  const found = [...text.matchAll(pattern)];
  if (found.length === 0) throw new Error(`No encuentro «${label}» en ${file} (patrón ${pattern})`);
  const old = found[0][1];
  const updated = text.replace(pattern, () => repl);    // función: que los $ del reemplazo no se interpreten
  texts.set(file, updated);
  if (updated === text) { console.log(`  ${file} ${label}: ${old} (sin cambios)`); continue; }
  stale.push(`${file} ${label}`);
  console.log(`  ${file} ${label}: ${old} -> ${CHECK ? 'desactualizado' : `actualizado (${found.length} lugares)`}`);
}

if (CHECK) {
  if (!stale.length) { console.log('\nEstadísticas al día'); process.exit(0); }
  console.log(`\nHay ${stale.length} números desactualizados. Corré node tools/sync-stats.mjs y commiteá el resultado.`);
  process.exit(1);
}

for (const [file, text] of texts) if (text !== read(file)) writeFileSync(join(ROOT, file), text);

// ② Tabla de referencias: va antes que nada más porque es lo que permite ver, en el diff, si una
// referencia quedó corrida al insertar o borrar entradas.
const runTool = name => spawnSync(process.execPath, [join(ROOT, 'tools', name)], { stdio: 'inherit' }).status;
console.log('');
if (runTool('check-refs.mjs') !== 0) throw new Error('falló check-refs.mjs');
console.log('Antes de commitear, mirá el diff de docs/referencias.md: mismo número y otro título = referencia corrida.');

// ③ Solo avisa: los números ya quedaron actualizados. En CI este control sí falla.
console.log('');
if (runTool('check-plain.mjs') !== 0) console.log('Hay «En simple» para corregir (reglas al comienzo de tools/check-plain.mjs).');

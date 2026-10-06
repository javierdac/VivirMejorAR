# Guía de formato y estilo — VivirMejorAR

Reglas para todo lo que se escribe en `libro/`. Son obligatorias: el buscador (`index.html`)
y las herramientas de `tools/` parsean el texto tal como se describe acá.

## Origen y estructura del repo

- `book/` contiene el **original en chino** de [HowToLiveBetter](https://github.com/eternity4719/HowToLiveBetter)
  (CC BY 4.0). **No se edita nunca**: queda intacto para poder traer cambios de upstream con
  `git fetch upstream && git merge upstream/main` y ver con `git diff` qué cambió en el original.
- `libro/` contiene la **adaptación argentina** en español. Un archivo por sección, mismo número
  que el original: `libro/NN-slug.md`.
- Cada capítulo de `libro/` sigue al original **entrada por entrada, con la misma numeración**
  (la entrada 7 de `libro/01-…` corresponde a la entrada 7 de `book/01-…`). Eso permite
  sincronizar. No se reordenan, fusionan ni eliminan entradas; si una entrada no aplica a
  Argentina, se adapta o se deja marcada (ver más abajo).

## Idioma

- Español rioplatense, **con voseo** («fijate», «tomá», «si tenés»). Claro, directo, sin jerga.
- Decimales con **coma** y miles con **punto**, como en Argentina: `0,88`, `20.995 personas`,
  `12 %`. Los valores estadísticos se copian tal cual (solo cambia el separador): `RR 0,88`,
  `IC 95 % 0,50 a 0,68`.
- Abreviaturas: HR, RR, OR se dejan igual; «95% CI» → «IC 95 %».
- Unidades del sistema métrico; mmHg, mg, etc. igual que el original.

## Formato de cada entrada

```markdown
### 5. Cambiá la sal de mesa por sal baja en sodio (sal de potasio)
<!-- 成本标签: 钱=少 时间=少 毅力=否 收益=中 口径=死亡率 -->
- Costo: …
- En simple: …
- Beneficio: …
- Nivel de evidencia: A
- Fuentes: …
- Notas: …
```

- Título: `### N. ` + frase que **empieza con un verbo** (imperativo con voseo: «Usá», «No compres»,
  «Revisá»). Mismo número N que el original.
- La línea `<!-- 成本标签: … -->` se copia **byte por byte del original, en chino**. Es un
  comentario invisible que el buscador usa para los filtros (钱/时间/毅力/收益/口径).
  No traducir ni modificar. Si la entrada no tiene esa línea en el original, no se agrega.
- Etiquetas de campo, exactamente así (guion, espacio, etiqueta, dos puntos, espacio):
  `- Costo: ` · `- En simple: ` · `- Beneficio: ` · `- Nivel de evidencia: ` · `- Fuentes: ` · `- Notas: `
  (originales: 成本 · 说人话 · 收益 · 证据等级 · 来源 · 备注). Todo el contenido de cada campo
  va **en la misma línea** que la etiqueta. Mismo orden que el original.
- `Nivel de evidencia:` empieza con la letra (A, B o C) y conserva sufijos, p. ej. `B (争议)` →
  `B (controvertido)`. Si el original de `Notas` empieza con «争议», la traducción empieza con «Controvertido.».
- **En simple** es la línea más importante: es lo único que lee mucha gente. Máximo ~200
  caracteres, sin jerga estadística (nada de RR/HR/IC, ni tamaños de muestra, ni diseño de
  estudio). No puede contener números que no estén en Beneficio, Costo o el título.

## Fuentes

- Las citas del original (autores, revista, año, DOI, URL) se copian **sin cambios**. Separador
  entre citas: ` ; ` como en el original.
- Fuentes chinas que solo respaldan datos de China (leyes, estadísticas, tarifas chinas) se
  reemplazan por la fuente argentina equivalente cuando se adapta el dato. Si el dato chino se
  conserva como contexto, su fuente también.
- Fuentes argentinas aceptadas: solo oficiales o académicas — boletín oficial / InfoLEG /
  SAIJ, argentina.gob.ar, Ministerio de Salud (incl. Calendario Nacional de Vacunación,
  Guías de práctica clínica), ANMAT, INDEC, ANSES, SRT, BCRA, ARCA (ex AFIP), legislaturas y
  ministerios provinciales, Defensoría del Pueblo, sociedades científicas argentinas
  (SAC, SAP, FASGO, etc.), y revistas con referato (p. ej. Revista Argentina de Salud Pública,
  Medicina (Buenos Aires)). Nada de blogs, notas de prensa sin fuente ni sitios comerciales.
- Formato de cita argentina: `Organismo (año). Título. <URL>` — p. ej.
  `Ministerio de Salud de la Nación (2024). Calendario Nacional de Vacunación. <https://www.argentina.gob.ar/salud/vacunas>`.

## Adaptación a Argentina

Prioridad: **exactitud por encima de completitud**. Un dato argentino inventado o mal
recordado es peor que no tenerlo.

1. **Evidencia internacional** (ensayos, metaanálisis, OMS, Cochrane, NHTSA…): se traduce fiel.
   Los números no se tocan.
2. **Datos específicos de China** (estadísticas chinas, precios en yuanes, teléfonos 120/110/119,
   instituciones, leyes, trámites, marcas o productos del mercado chino):
   - Si existe el equivalente argentino **y lo verificaste en una fuente oficial** (con
     WebSearch/WebFetch), reemplazalo y citá esa fuente en `Fuentes`.
   - Si no pudiste verificarlo, sacá el detalle chino, dejá la afirmación general y agregá un
     comentario `<!-- VERIFICAR-AR: qué falta confirmar -->` en la línea siguiente al campo.
     Nunca completes con memoria.
   - Si el dato chino sirve igual como ilustración (p. ej. «en China murieron X personas»), podés
     conservarlo aclarando que es de China.
3. **Plata**: la inflación hace inútiles los montos en pesos. Para costos usá descripciones
   relativas («gratis», «el precio de un par de cafés», «menos que una salida a comer») o, si
   hace falta un número, dólares aproximados con año: «unos USD 20 (2026)». Los yuanes del
   original no se convierten al tipo de cambio: se describen con ese criterio.
4. **Teléfonos y servicios útiles en Argentina** (verificá igual antes de usarlos):
   emergencias 911 (en la mayoría de las jurisdicciones), SAME 107, bomberos 100, policía 101,
   Centro de Asistencia al Suicida 135 (CABA y GBA) / (011) 5275-1135 o 0800-345-1435,
   Línea 144 (violencia de género), Línea 102 (niñez), Centros de Toxicología (p. ej. Hospital
   de Niños R. Gutiérrez 0800-444-8694, Hospital Posadas 0800-333-0160).
5. **Sistema de salud**: el original habla del sistema chino (医保, hospitales de tercer nivel).
   En Argentina: sistema público (gratuito, hospitales y CAPS/centros de salud), obras
   sociales, PAMI y prepagas. Usá esos términos cuando corresponda.
6. Marcá en `Notas` lo que se adaptó, con el prefijo **«Adaptación AR:»** al final de la nota
   (p. ej. «Adaptación AR: se reemplazó el dato de China por el de la DEIS 2022.»). Eso cumple
   el requisito de CC BY de indicar cambios a nivel de entrada.

## Referencias cruzadas

- El original escribe «见第 8 节第 17 条», «见第 17 条», «第 3、10 条». En español:
  `(ver sección 8, entrada 17)`, `(ver entrada 17)` (misma sección), `(ver entradas 3 y 10)`,
  `(ver entradas 11 a 14)`. Siempre con esas palabras exactas: «sección N», «entrada N»,
  «entradas N, M y K», «entradas N a M». Los números son los del original (las numeraciones
  coinciden). Si el original agrega el título entre paréntesis, traducilo.
- Los artículos de leyes **no** usan la palabra «entrada»: «artículo 108 del Código Penal».

## Encabezado del capítulo

```markdown
[← Volver al índice](../README.md)

# 1. No morirse antes de tiempo

> Adaptación argentina de [book/01-不要早死.md](../book/01-不要早死.md) («高性价比人生指南», CC BY 4.0).
> Sincronizado con upstream `<commit corto>`.

(introducción traducida, incluidos los bloques que listan entradas por tema)
```

## Capítulos pendientes

Los capítulos que todavía no se adaptaron tienen un archivo en `libro/` con el encabezado, un
aviso «Capítulo pendiente de adaptación» y el link al original. No llevan entradas `###`.

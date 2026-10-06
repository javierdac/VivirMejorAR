# VivirMejorAR · reglas del proyecto

Estas reglas valen para todo el trabajo en este repositorio.

## Qué es

- Adaptación argentina, en español rioplatense con voseo, de «高性价比人生指南» (HowToLiveBetter, de eternity4719, CC BY 4.0): una guía ordenada por costo-beneficio. Cada entrada responde qué cuesta (plata, tiempo, energía, voluntad) y qué se gana (años de vida, tiempo y energía, plata, libertad). Las cuatro cosas se cuentan por separado y no se convierten entre sí.
- `book/` es el **original chino y no se edita nunca** (sirve para traer cambios de upstream). `docs/` en chino tampoco se toca; el `CLAUDE.md` original quedó en `docs/CLAUDE.original.md` como referencia.
- `libro/NN-slug.md` es la adaptación: lo que leen el buscador (`index.html`), los builds y los controles. Mismo número de sección y de entrada que el original. Los capítulos sin adaptar tienen solo un aviso «Capítulo pendiente de adaptación» y no llevan entradas `###`.
- Original sincronizado hasta el commit `20718ee` (2026-10-06); el valor vive en `UPSTREAM_COMMIT` de `tools/lib/book.mjs`.

## Formato

**Todo el formato está en [ESTILO.md](ESTILO.md)** y es obligatorio: etiquetas de campo (`- Costo: `, `- En simple: `, `- Beneficio: `, `- Nivel de evidencia: `, `- Fuentes: `, `- Notas: `), línea `<!-- 成本标签: … -->` copiada sin cambios del original, referencias cruzadas («ver sección N, entrada M», «ver entrada N», «entradas N a M»), encabezado de capítulo, idioma, montos y fuentes argentinas aceptadas. Los parsers dependen de ese formato exacto.

## Evidencia y citas (resumen de las reglas del original)

- **Niveles:** A = número concreto y verificable de metaanálisis, cohorte grande o ensayo aleatorizado (HR, RR, porcentaje); en leyes y trámites, texto oficial citado. B = hay estudios pero sin número preciso, o un solo estudio o muestra chica. C = experiencia o consenso, sin estudios directos. Las entradas A o B discutidas llevan «Controvertido» (al comienzo de Notas, o «(controvertido)» en el nivel) y muestran la evidencia en contra.
- **Solo fuentes primarias:** artículos con DOI o PubMed, organismos oficiales (OMS, CDC, Ministerio de Salud, INDEC, InfoLEG/SAIJ, ANMAT, ANSES, SRT, BCRA, ARCA…), sociedades científicas y revistas con referato. Nada de blogs, notas sin fuente ni sitios comerciales. Las notas periodísticas solo para mostrar que un hecho ocurrió, nunca para números.
- **No inventar:** cada número tiene que estar en la fuente. Nunca escribir un DOI, título, artículo de ley o teléfono de memoria. Si no se puede verificar, se saca el detalle y se marca `<!-- VERIFICAR-AR: … -->` (o `TODO`).
- **Datos de China:** la evidencia internacional se traduce fiel, sin tocar números; los datos chinos (leyes, organismos, teléfonos, precios) se reemplazan por los argentinos verificados, o se sacan, y se indica con «Adaptación AR:» en Notas.
- **«En simple»** traduce el Beneficio a lenguaje común: sin siglas estadísticas, sin diseño de estudio ni tamaño de muestra, sin números, síntomas ni afirmaciones que no estén en Beneficio, Costo o el título. Tiene que entenderse sola, sin leer el resto.
- **Tono:** claro y sobrio. Sin alarmismo, sin sermones, sin signos de exclamación. Una idea por oración. Los términos técnicos se explican en el momento.
- **Cuando la ley «te da la razón»**, decir también el costo del camino: si hace falta juicio, cuánto tarda y quién paga el abogado.
- **A quién le toca el beneficio:** vos > pareja y familia directa > amigos y compañeros > desconocidos. Al hablar de desconocidos, beneficio y riesgos juntos.
- **Referencias con ancla:** toda referencia lleva cerca una palabra del título de destino («(ver entrada 16: pagarés y garantías)»). Nada de «la entrada anterior/siguiente».
- No duplicar entradas: si el tema ya existe, se suma a esa entrada.

## Controles

```bash
node tools/check-refs.mjs --check   # referencias cruzadas (CI); sin --check regenera docs/referencias.md
node tools/check-plain.mjs          # «En simple» (CI)
node tools/sync-stats.mjs           # recalcula estadísticas en README e index.html y regenera docs/referencias.md
node tools/sync-stats.mjs --check   # solo verifica (CI)
cd tools/epub && npm ci && npm run build; node tools/offline/build.mjs; node tools/pdf/build.mjs   # descargas en dist/
```

Después de agregar o borrar entradas, mirá el diff de `docs/referencias.md`: mismo número y otro título = referencia corrida.

## Trabajo con subagentes

- Un subagente por archivo de `libro/`. Prohibido: comandos que cambien el estado de git, correr `sync-stats.mjs` o `check-refs.mjs` sin `--check` (reescriben archivos compartidos), editar README, index.html, tools/ u otros capítulos. Autocontrol: solo `check-plain.mjs` y `check-refs.mjs --check`.
- El agente principal revisa, corre `sync-stats.mjs` y hace los commits.

## Pendiente: usuario de GitHub

El repo está en https://github.com/javierdac/VivirMejorAR y el sitio en https://javierdac.github.io/VivirMejorAR/ (el usuario está definido en `tools/lib/book.mjs`, `GH_USER`).

## Commits

Sin el trailer `Co-Authored-By` de Claude ni la línea «Generated with Claude Code».

$--
$-- Plantilla typst para pandoc (solo usa $body$ y algunas variables -V). No usa el conf() de pandoc
$-- porque deja fija la configuración de página y no permite cambiar encabezados y pies.
$-- Lo que va desde el comienzo hasta «divider» son definiciones auxiliares que necesita el texto
$-- generado por pandoc, copiadas de `pandoc -D typst`: no borrar.
$--
#set terms(hanging-indent: 1.5em)

#set table(inset: 6pt, stroke: none)
// pandoc pone las tablas dentro de align(center); las celdas se leen mejor alineadas a la izquierda
#show table.cell: it => align(left, it)

#let horizontalRule = line(start: (25%, 0%), end: (75%, 0%))
#let divider = if "divider" in std { divider } else { horizontalRule }

#show figure.where(kind: table): set figure.caption(position: top)
#show figure.where(kind: image): set figure.caption(position: bottom)
// las tablas largas pueden cortarse entre páginas (si no, dejan una página en blanco)
#show figure: set block(breakable: true)
#set smartquote(enabled: false)

// ---------- Diseño ----------
#set document(title: "$booktitle$", author: ("eternity4719 (original)", "VivirMejorAR (adaptación)"))
#set text(
  // Texto en Libertinus (viene con typst); las fuentes CJK quedan de respaldo para los nombres
  // de archivo del original chino que aparecen en los capítulos pendientes.
  font: ("Libertinus Serif", "Noto Serif CJK SC", "Noto Serif SC", "Source Han Serif SC", "Noto Sans CJK SC", "Microsoft YaHei"),
  size: 10.5pt, lang: "es", region: "ar",
)
#set par(justify: false, leading: 0.78em, spacing: 0.9em)
#set list(indent: 0.6em, spacing: 0.75em)
#show raw: set text(font: ("DejaVu Sans Mono", "Noto Sans Mono CJK SC", "Consolas"), size: 9pt)
#show link: set text(fill: rgb("#1a4fb4"))
#show heading: set block(sticky: true, above: 1.5em, below: 0.65em)
#show heading.where(level: 1): set text(19pt)
#show heading.where(level: 2): set text(14pt)
#show heading.where(level: 3): set text(11.5pt)
// cada sección empieza en página nueva; weak evita una página en blanco si la anterior quedó justa
#show heading.where(level: 1): it => { pagebreak(weak: true); it }

// encabezado: título del libro a la izquierda y sección actual a la derecha; no va en la primera página de cada sección
#let running-head = context {
  let next = query(selector(heading.where(level: 1)).after(here())).at(0, default: none)
  if next != none and next.location().page() == here().page() { return }
  let seen = query(selector(heading.where(level: 1)).before(here()))
  if seen.len() == 0 { return }
  set text(8.5pt, fill: luma(120))
  grid(columns: (1fr, auto), align(left)[$booktitle$], align(right)[#seen.last().body])
  v(-7pt)
  line(length: 100%, stroke: 0.4pt + luma(215))
}

// ---------- Portada (todavía sin imagen) ----------
#set page(paper: "a4", margin: (x: 2.2cm, top: 2.2cm, bottom: 2cm), header: none, footer: none)
#align(center + horizon)[
  #text(28pt, weight: "bold")[$booktitle$]
  #v(1.2cm)
  #block(width: 80%)[#text(11.5pt, fill: luma(60))[$subtitle$]]
  #v(2cm)
  #text(10pt, fill: luma(90))[
    Generado el $builddate$ (hora de Buenos Aires) · commit $commit$ · original sincronizado hasta $upstream$ \
    El texto se sigue actualizando; la referencia es la versión en línea: $site$ \
    Buscador, EPUB y la última versión de este PDF: $repo$ \
    Adaptación de «高性价比人生指南» de eternity4719, CC BY 4.0
  ]
]

// ---------- Índice ----------
#pagebreak()
#outline(title: [Índice], depth: 1, indent: 1em)

// ---------- Texto ----------
#pagebreak(weak: true)
#set page(header: running-head, footer: context align(center, text(8.5pt, fill: luma(120))[#counter(page).at(here()).first() / #counter(page).final().first()]))
#counter(page).update(1)

$body$

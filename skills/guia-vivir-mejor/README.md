# Skill «guia-vivir-mejor»

Hace que un asistente de IA responda preguntas concretas con la «Guía para vivir mejor (Argentina)»: si conviene o no, qué elegir, qué hacer primero en una emergencia, qué se puede cobrar, si algo es delito.

Hace una sola cosa: **primero busca las entradas en `libro/` y después responde** con la misma cuenta de costo y beneficio de la guía, citando «sección N, entrada M». Si la guía no lo cubre, lo dice, y si el tema cae en un capítulo todavía pendiente de adaptación, avisa en lugar de usar el original chino.

Las reglas están en [SKILL.md](SKILL.md), un solo archivo para las dos herramientas.

## Claude Code

Dentro de este repositorio no hace falta instalar nada: `.claude/skills/guia-vivir-mejor/` ya apunta a estas reglas.

Para usarla desde cualquier carpeta, copiala a tus skills personales:

```bash
mkdir -p ~/.claude/skills/guia-vivir-mejor && curl -fsSL -o ~/.claude/skills/guia-vivir-mejor/SKILL.md "https://raw.githubusercontent.com/javierdac/VivirMejorAR/main/skills/guia-vivir-mejor/SKILL.md"
```

Después preguntá directamente («¿me conviene viajar dos horas por día?», «un amigo me pide que salga de garante, ¿firmo?») o pedí «respondé con guia-vivir-mejor».

## Codex

Dentro de este repositorio no hace falta instalar nada: `AGENTS.md` ya la indica.

Para usarla desde cualquier carpeta, copiala a `~/.agents/skills`:

```bash
mkdir -p ~/.agents/skills/guia-vivir-mejor && curl -fsSL -o ~/.agents/skills/guia-vivir-mejor/SKILL.md "https://raw.githubusercontent.com/javierdac/VivirMejorAR/main/skills/guia-vivir-mejor/SKILL.md"
```

Se activa sola según la descripción, o con `$guia-vivir-mejor` (con `$`, no con `/`). Si no aparece, reiniciá Codex.

## De dónde saca el texto

Si tenés el repositorio, lee `libro/` local; si no, lo baja:

```bash
git clone --depth 1 https://github.com/javierdac/VivirMejorAR.git "${TMPDIR:-/tmp}/vivirmejorar"
```

Sin conexión, dice que no pudo acceder al texto y no lo reemplaza con lo que recuerda.

## Para mantenerla

SKILL.md no guarda listas ni valores que cambien con el texto: la lista de secciones sale de la tabla «Qué preguntas responde» del README y la regla de costo-beneficio, de las líneas `COST_W` y `e.ratio` de `index.html`. Agregar secciones o adaptar capítulos no obliga a tocar esta carpeta.

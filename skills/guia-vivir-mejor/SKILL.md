---
name: guia-vivir-mejor
description: Responde decisiones concretas de la vida con la «Guía para vivir mejor (Argentina)» (github.com/javierdac/VivirMejorAR, adaptación de «高性价比人生指南»): si conviene o no, qué elegir, qué hacer primero en una emergencia, qué se puede cobrar, si algo es delito. Primero busca las entradas en libro/ y después responde ordenando por costo (plata, tiempo, voluntad), tamaño del beneficio y nivel de evidencia A/B/C, citando «sección N, entrada M». Activadores: ¿conviene?, ¿vale la pena?, ¿qué me conviene?, ¿qué elijo?, ¿qué hago?, ¿es delito?, ¿qué puedo cobrar?, ¿qué hago primero?, costo-beneficio.
---

# Decisiones de la vida: buscar en la guía y después responder

## Qué hace esta skill

Cuando alguien pregunta qué hacer con algo concreto de su vida, primero se buscan las entradas que correspondan en la «Guía para vivir mejor (Argentina)» y después se responde ordenándolas con la misma cuenta de costo y beneficio que usa la guía.

**Si no está en la guía, no se inventa.** Cada número, norma y conclusión de la respuesta tiene que poder señalarse en una entrada. Si no se puede, se dice que la guía no lo cubre; se puede dar una opinión de sentido común, pero aclarando que no sale de la guía. Nunca completar números, DOI, artículos de leyes ni teléfonos de memoria.

La guía separa cuatro cosas que se ganan: años de vida, tiempo y energía, plata y libertad. **Se cuentan por separado y no se convierten entre sí**: «12 % menos de mortalidad» y «ahorrar una salida por mes» no se miden con la misma vara.

## Paso 0: ¿hay que frenar y atender algo urgente?

- **Emergencia en curso** (alguien se desplomó y no respira, sangrado fuerte, incendio, ahogamiento, electrocución, intoxicación, síntomas de ACV o infarto): primero decí que llame al 911 (o al 107 del SAME en CABA, 100 bomberos) y la primera acción en el lugar, según la sección 13. El costo-beneficio viene después.
- **Ideas de suicidio o de no querer vivir:** primero el Centro de Asistencia al Suicida, 135 (CABA y GBA) o (011) 5275-1135 / 0800-345-1435, y si hay riesgo inmediato el 911. Después, lo que digan las secciones 1 y 29. Sin sermones ni juicios.
- **Un proceso legal en curso** (citación, detención, denuncia): indicá la entrada que corresponda de la sección 8 y aclará que la guía da criterios generales y que el caso concreto necesita un abogado (hay defensorías oficiales gratuitas).
- En los demás casos, seguí los pasos de abajo.

## Paso 1: conseguir el texto

**Local:** si en la carpeta actual o una superior están `README.md` y `libro/`, usalos.

**Remoto:** si no, bajalo. Un clon superficial es lo más simple:

```bash
git clone --depth 1 https://github.com/javierdac/VivirMejorAR.git "${TMPDIR:-/tmp}/vivirmejorar"
```

Sin git, archivo por archivo:

```bash
curl -fsSL "https://raw.githubusercontent.com/javierdac/VivirMejorAR/main/libro/13-emergencias.md"
```

Si nada funciona, decí que no pudiste acceder al texto. No respondas de memoria «lo que dice la guía».

## Paso 2: elegir la sección

Elegí de 1 a 3 secciones con la tabla «Qué preguntas responde» del `README.md` (una fila por sección, con la pregunta que responde y el archivo de `libro/`). Los archivos se llaman `libro/NN-slug.md`; `ls libro/` también sirve.

**Capítulos pendientes.** Varias secciones todavía no se adaptaron: el README las marca «(pendiente)» y el archivo solo tiene el aviso «Capítulo pendiente de adaptación», sin entradas `###`. Si la pregunta cae en una de ellas, **avisá que ese capítulo todavía no está adaptado a la Argentina**. No traduzcas el original chino de `book/` como si fuera la respuesta: sus leyes, organismos, montos y teléfonos son de China. Como mucho podés mencionar de qué trata y sugerir buscar la normativa argentina en fuentes oficiales.

## Paso 3: sacar las entradas

Los archivos pueden ser largos: buscá por palabra en lugar de leerlos enteros.

```bash
grep -rn '^### ' libro/ | grep -iE 'palabra1|palabra2'          # títulos de entradas
grep -rn -i -B2 -A8 'palabra' libro/08-no-meterse-en-problemas.md   # en el texto, con contexto
sed -n '/^### 16\. /,/^### 17\. /p' libro/08-no-meterse-en-problemas.md   # una entrada completa
```

**Leé cada entrada completa**, sobre todo las Notas: ahí están a quién se aplica, si es controvertida y las excepciones.

Una entrada se ve así:

```markdown
### 5. Cambiá la sal de mesa por sal baja en sodio (sal de potasio)
<!-- 成本标签: 钱=少 时间=少 毅力=否 收益=中 口径=死亡率 -->
- Costo: …
- En simple: …alrededor de un 12 % menos de probabilidad de morir…
- Beneficio: … (RR 0,88) …
- Nivel de evidencia: A
- Fuentes: Neal B et al. (2021). NEJM. <https://doi.org/10.1056/NEJMoa2105675>
- Notas: Controvertido. …
```

El comentario HTML es la etiqueta de costo, en chino porque se copia tal cual del original. Significa: 钱 = plata (0 gratis, 少 poca, 多 bastante); 时间 = tiempo (少 al pasar, 中 unas horas, 多 todos los días); 毅力 = voluntad (否 nada, 些 algo, 是 mucha); 收益 = tamaño del beneficio (大 grande, 中 mediano, 小 chico); 口径 = qué se gana (死亡率 años de vida, 金钱 plata, 时间 tiempo y energía, 自由 libertad). En la respuesta usá siempre los nombres en español.

## Paso 4: ordenar

Seguí la regla de la guía, no tu intuición:

1. La regla del nivel de costo-beneficio está en `index.html`; sacala de ahí en vez de recordarla:

   ```bash
   grep -n 'COST_W = \|e\.ratio = ' index.html
   ```

   La primera línea da el peso de cada nivel de costo (costo total = plata + tiempo + voluntad); la segunda, cómo el tamaño del beneficio y el costo total dan «muy alto» (极高), «alto» (高) o «regular» (一般).
2. Si solo bajaste capítulos sueltos y no tenés `index.html`, no informes el nivel de costo-beneficio: listá el tamaño del beneficio y los tres costos y que la persona decida.
3. Ordená primero por costo-beneficio; a igual nivel, por evidencia (A > B > C); después, por cuánto se ajusta a la situación de la persona.
4. **No mezcles tipos de beneficio.** Lo que da plata y lo que da años de vida van en listas separadas.
5. «Regular» no significa que no convenga, solo que hay que pesar el costo. El costo-beneficio es criterio del autor (nivel C según la propia guía) y no tiene que ver con el nivel de evidencia.

## Paso 5: escribir la respuesta

1. **Una oración de conclusión:** si conviene, qué elegir o cuál es el primer paso.
2. **Hacé esto primero** (de 3 a 7 entradas, en el orden de arriba). Una a tres líneas cada una: la acción (empezando con un verbo), qué cuesta, qué se gana, el nivel de evidencia y la cita como «sección 8, entrada 17 (pagarés y garantías)», con palabras del título entre paréntesis para que se pueda encontrar.
3. **Lo que no conviene o no hace falta:** lo que la guía dice que no vale la pena o tiene evidencia en contra.
4. **Lo que la guía no cubre** (incluidos los capítulos pendientes): decilo con claridad, sin rellenar con sentido común disfrazado de guía.
5. Si sirve, cuándo volver a revisar la decisión o qué señal haría cambiarla.

Al escribir:

- **A quién le toca el beneficio.** La guía distingue: ① vos; ② pareja y familia directa; ③ amigos, compañeros y otros parientes; ④ desconocidos. Cuando el tema es ④ (ayudar a un desconocido, salir de garante, prestar una cuenta), poné el beneficio y los riesgos juntos (que te reclamen, quedar involucrado en una causa, represalias), sin decir solo lo bueno ni «nunca te metas».
- **Si la ley te da la razón, decí también el costo del camino:** si hace falta un juicio, cuánto puede tardar y quién paga el abogado, según lo que diga la entrada.
- **Los números se copian tal cual** de la entrada, con su intervalo, población y año. Junto a un HR, RR u OR agregá la traducción («alrededor de un 28 % menos») sin borrar el valor. Nada de números, síntomas o mecanismos que la entrada no tenga.
- **Lenguaje simple**, para cualquier adulto. Explicá los términos técnicos en el momento; en temas legales, decí qué consecuencia hay y qué hacer. Las fuentes se dan tal como figuran.
- **Tono sobrio**, sin sermones ni signos de exclamación, en español rioplatense con voseo. Si la persona decide otra cosa, es su decisión.
- **Las normas cambian.** Montos, plazos y requisitos llevan la fecha de la entrada; recordá verificar la versión vigente en la fuente oficial.
- Si la entrada dice «Controvertido», mencioná también la evidencia en contra. Si tiene un dato marcado para verificar (VERIFICAR-AR o TODO), no lo uses como conclusión.
- Solo citá las fuentes que ya están en las entradas.

## Límites

La guía da criterios generales y no reemplaza a médicos, abogados ni contadores. En una enfermedad, un juicio o un tema impositivo concreto, usá la guía para orientar y decir a quién consultar, sin dar el diagnóstico o la opinión profesional. No des recomendaciones de inversión personalizadas.

Las opiniones y el orden por costo-beneficio son de la guía. Si alguien no está de acuerdo con una entrada, mostrale en qué se basa; no hace falta discutir.

# Tabla de referencias cruzadas

Archivo generado por `node tools/check-refs.mjs`. No lo edites a mano.

Las referencias del texto («ver sección 8, entrada 17», «ver entrada 3») guardan solo el número,
no el contenido. Si se inserta o se borra una entrada, las referencias pueden quedar corridas y
seguir dentro del rango, así que un control de rango no alcanza. Por eso acá se escribe a qué
**título** apunta cada referencia y el archivo se versiona: después de cambiar entradas se
regenera y, en el `git diff`, toda fila con el mismo número y otro título es una referencia corrida.

Alcance: `libro/` (encabezado de cada capítulo y campos de las entradas) y los textos largos en
español de `docs/`. Las referencias a capítulos todavía pendientes de adaptación se listan pero no
se pueden verificar.

Además, cada referencia tiene que llevar un **ancla**: alguna palabra del título de destino cerca
(«vacuna antigripal (ver entrada 20)» o «(ver entrada 16: pagarés y garantías)»). Con
`node tools/check-refs.mjs --check`, una referencia sin ancla falla: si un día queda corrida, nadie
lo notaría. Los rangos («entradas 11 a 14») no necesitan ancla. La regla exacta está en el
encabezado de `tools/check-refs.mjs`.

Total: 440 referencias.

## libro/01-no-morir-antes-de-tiempo

| Origen | Referencia | Entrada a la que apunta | Contexto |
| --- | --- | --- | --- |
| encabezado | entrada 1 | Abrochate el cinturón de seguridad, adelante y atrás | …**En la calle**: el cinturón de seguridad (… |
| encabezado | entrada 2 | Usá casco en la moto y en la bici eléctrica, y abrochalo bien | …**En la calle**: el cinturón de seguridad (entrada 1), el casco (… |
| encabezado | entrada 9 | No manejes rápido y no manejes después de tomar alcohol | …nturón de seguridad (entrada 1), el casco (entrada 2), no manejar rápido ni alcoholizado (… |
| encabezado | entrada 10 | Usá silla de auto para chicos menores de 4 años; no los lleves a upa | …(entrada 2), no manejar rápido ni alcoholizado (entrada 9), la silla de auto para chicos (… |
| encabezado | entrada 3 | Poné un detector de humo, y si en invierno calefaccionás con gas, leña o carbón, sumá un detector de monóxido de carbono | …**Fuego, gas y electricidad en casa**: el detector de humo (… |
| encabezado | entrada 4 | Hacé revisar los artefactos de gas por un gasista matriculado, no toques la instalación por tu cuenta y cambiá a tiempo la manguera y el regulador de la garrafa | …a**: el detector de humo (entrada 3), el gasista matriculado y la manguera de la garrafa (… |
| encabezado | entrada 6 | No dejes la bici eléctrica ni el monopatín en pasillos, escaleras o el ascensor, y no los cargues adentro sin control | …lado y la manguera de la garrafa (entrada 4), las bicis eléctricas fuera de los pasillos (… |
| encabezado | entrada 26 | Tené un matafuego, una manta ignífuga, máscaras de escape y un botiquín, y revisalos una vez por año | …a 4), las bicis eléctricas fuera de los pasillos (entrada 6), el matafuego y el botiquín (… |
| encabezado | entrada 42 | Usá la amoladora con el protector puesto, antiparras y máscara facial, agarrala con las dos manos y no le pongas una hoja de sierra para madera | …asillos (entrada 6), el matafuego y el botiquín (entrada 26), la amoladora con protector (… |
| encabezado | entrada 11 | Si hay chicos en casa, poné limitadores o redes en ventanas y balcones; el mosquitero no protege | …dentes de chicos, de personas mayores y al aire libre**: los limitadores en las ventanas (… |
| encabezado | entrada 12 | Con chicos cerca del agua, no les saques la vista de encima; para navegar o nadar en aguas abiertas, usá chaleco salvavidas | …s limitadores en las ventanas (entrada 11), los chicos cerca del agua siempre a la vista (… |
| encabezado | entrada 13 | Después de los 60, entrená el equilibrio y la fuerza de las piernas, y adaptá el baño y las escaleras de tu casa | …s chicos cerca del agua siempre a la vista (entrada 12), el equilibrio después de los 60 (… |
| encabezado | entrada 5 | No juntes, no compres y no comas hongos silvestres: ningún «método casero» sirve para distinguirlos | …a (entrada 12), el equilibrio después de los 60 (entrada 13), no comer hongos silvestres (… |
| encabezado | entrada 36 | No levantes, no desarmes y no vendas piezas de metal de origen desconocido; alejate de cualquier cosa con el símbolo del trébol de radiación | …o comer hongos silvestres (entrada 5), no levantar piezas de metal de origen desconocido (… |
| encabezado | entrada 41 | Antes de pisar hielo natural, hacé un agujero y medí el espesor: con menos de 15 centímetros no subas, y no te acerques al hielo de los ríos ni a los agujeros de pesca | … levantar piezas de metal de origen desconocido (entrada 36), medir el espesor del hielo (… |
| encabezado | entrada 14 | Hacete el análisis de hepatitis B y, si no tenés anticuerpos, vacunate | …**Vacunas**: los análisis de hepatitis B (… |
| encabezado | entrada 15 | Si te clavaste un clavo o una astilla, o la herida se ensució con tierra, hacete curar ese mismo día y preguntá si necesitás la antitetánica | …**Vacunas**: los análisis de hepatitis B (entrada 14), el tétanos y la antitetánica (… |
| encabezado | entrada 16 | Vacunate contra el VPH, cuanto antes mejor | …titis B (entrada 14), el tétanos y la antitetánica (entrada 15), la vacuna contra el VPH (… |
| encabezado | entrada 20 | Si tenés una enfermedad cardiovascular o sos una persona mayor, vacunate contra la gripe todos los años | …la antitetánica (entrada 15), la vacuna contra el VPH (entrada 16), la vacuna antigripal (… |
| encabezado | entrada 21 | Después de los 50, vacunate contra el herpes zóster | …l VPH (entrada 16), la vacuna antigripal (entrada 20), la vacuna contra el herpes zóster (… |
| encabezado | entrada 22 | Después de los 65, vacunate contra el neumococo | …trada 20), la vacuna contra el herpes zóster (entrada 21), la vacuna contra el neumococo (… |
| encabezado | entrada 7 | Tomate la presión y, si está alta, tomá la medicación hasta llegar al valor objetivo | …**Controles y estudios**: tomarse la presión (… |
| encabezado | entrada 8 | Si tenés más de 35 años y sobrepeso, hacete una glucemia en ayunas; si da normal, repetila cada tres años | …**Controles y estudios**: tomarse la presión (entrada 7), la glucemia en ayunas (… |
| encabezado | entrada 17 | Si sos mujer, hacé el control de cáncer de mama con mamografía | … la presión (entrada 7), la glucemia en ayunas (entrada 8), el control de cáncer de mama (… |
| encabezado | entrada 18 | Si tenés más de 30 años, hacé el control de cáncer de cuello uterino, preferentemente con el test de VPH | …da 8), el control de cáncer de mama (entrada 17), el control de cáncer de cuello uterino (… |
| encabezado | entrada 19 | Desde los 45 o 50 años, hacé el control de cáncer colorrectal con el test de sangre oculta en materia fecal o con una colonoscopía | …), el control de cáncer de cuello uterino (entrada 18), el control de cáncer colorrectal (… |
| encabezado | entrada 23 | Hacete el test de Helicobacter pylori y, si da positivo, tratalo hasta erradicarlo | …rino (entrada 18), el control de cáncer colorrectal (entrada 19), el Helicobacter pylori (… |
| encabezado | entrada 24 | Si fumás o fumaste mucho, hacete una tomografía de tórax de baja dosis una vez por año | … (entrada 19), el Helicobacter pylori (entrada 23), la tomografía de tórax de baja dosis (… |
| encabezado | entrada 39 | Si sos mujer y tenés más de 65 años, hacete una densitometría ósea; si ya pasaste la menopausia y tenés factores de riesgo de osteoporosis, no esperes a los 65 | …i (entrada 23), la tomografía de tórax de baja dosis (entrada 24), la densitometría ósea (… |
| encabezado | entrada 40 | Si te diagnosticaron osteoporosis, o te fracturaste con un golpe leve, pedile al médico la medicación para la osteoporosis y sostenela; el calcio solo no la reemplaza | … (entrada 24), la densitometría ósea (entrada 39), los medicamentos para la osteoporosis (… |
| encabezado | entrada 27 | Si ves sangre en la orina, aunque no duela y aunque al día siguiente ya no esté, andá a hacerte ver | …**Señales del cuerpo y salud sexual**: sangre visible en la orina (… |
| encabezado | entrada 28 | Si tenés problemas de erección, primero hacete revisar el corazón y las arterias; no lo trates como algo «solo de la cama» | …exual**: sangre visible en la orina (entrada 27), los problemas de erección y el corazón (… |
| encabezado | entrada 29 | Bajar de peso, dejar de fumar y controlar la presión y la glucemia mejoran la erección | …e erección y el corazón (entrada 28), bajar de peso y dejar de fumar mejoran la erección (… |
| encabezado | entrada 30 | Usá preservativo durante toda la relación sexual y no compartas agujas | …y dejar de fumar mejoran la erección (entrada 29), el preservativo y no compartir agujas (… |
| encabezado | entrada 31 | Si tuviste una situación de riesgo, hacete el test de VIH: es gratuito y confidencial | …rección (entrada 29), el preservativo y no compartir agujas (entrada 30), el test de VIH (… |
| encabezado | entrada 38 | Si sos un hombre que tiene sexo con hombres y tenés relaciones de riesgo, consultá por la profilaxis previa a la exposición (PrEP): tomada a horario, baja la infección más de un 70 % | …r agujas (entrada 30), el test de VIH (entrada 31), la profilaxis previa a la exposición (… |
| encabezado | entrada 25 | Si estás con depresión o tenés ideas de suicidio, llamá a una línea de ayuda, y no guardes en casa pastillas para dormir ni agroquímicos | …**Crisis emocionales**: con ideas de suicidio, llamar a una línea de ayuda (… |
| encabezado | entrada 32 | Cuando aparece una idea de suicidio, contáselo enseguida a una persona cercana y dejá en sus manos esos minutos | …, llamar a una línea de ayuda (entrada 25), contarle a una persona las ideas de suicidio (… |
| encabezado | entrada 37 | Si llegaste a pedir plata prestada para seguir apostando y el ánimo no levanta, primero llamá a una línea de ayuda y después dale a tu familia las tarjetas y las claves | …tarle a una persona las ideas de suicidio (entrada 32), endeudarse para seguir apostando (… |
| encabezado | entrada 33 | No cuentes con que «te salvan»: después de tomar un herbicida o de intoxicarte con monóxido de carbono, en la guardia te pueden salvar la vida, pero no los pulmones ni el cerebro | …r apostando (entrada 37), el costo de sobrevivir a un herbicida o al monóxido de carbono (… |
| encabezado | entrada 34 | No apuestes a que «con unos días de reposo se pasa» después de una caída de altura: la mayoría de quienes llegan a terapia intensiva sobreviven, pero el costo se cuenta en años | …cida o al monóxido de carbono (entrada 33), el costo de sobrevivir a una caída de altura (… |
| encabezado | entrada 35 | No cambies un riñón por plata pensando que «con uno alcanza»: el que queda trabaja por dos, y el 86 % de quienes vendieron uno dice que su salud empeoró | …de sobrevivir a una caída de altura (entrada 34), el costo de quedarse con un solo riñón (… |
| entrada 3 | entrada 4 | Hacé revisar los artefactos de gas por un gasista matriculado, no toques la instalación por tu cuenta y cambiá a tiempo la manguera y el regulador de la garrafa | …el detector de monóxido si tenés uno, y no usar hornallas ni horno para calefaccionar (ver… |
| entrada 12 | entrada 41 | Antes de pisar hielo natural, hacé un agujero y medí el espesor: con menos de 15 centímetros no subas, y no te acerques al hielo de los ríos ni a los agujeros de pesca | …Para jugar sobre hielo en invierno, ver… |
| entrada 13 | sección 17, entrada 9 | _(capítulo pendiente de adaptación)_ | …si las cataratas te impiden ver por dónde caminás, ver… |
| entrada 13 | entrada 39 | Si sos mujer y tenés más de 65 años, hacete una densitometría ósea; si ya pasaste la menopausia y tenés factores de riesgo de osteoporosis, no esperes a los 65 | …Si querés saber si tus huesos aguantan una caída, ver… |
| entrada 16 | entrada 18 | Si tenés más de 30 años, hacé el control de cáncer de cuello uterino, preferentemente con el test de VPH | …ual tenés que hacer el control de cáncer de cuello uterino: la vacuna no lo reemplaza (ver… |
| entrada 25 | entrada 32 | Cuando aparece una idea de suicidio, contáselo enseguida a una persona cercana y dejá en sus manos esos minutos | …sobre esa escala de tiempo, y lo que pasa a largo plazo después de un intento, están en la… |
| entrada 25 | entrada 33 | No cuentes con que «te salvan»: después de tomar un herbicida o de intoxicarte con monóxido de carbono, en la guardia te pueden salvar la vida, pero no los pulmones ni el cerebro | …Lo que puede quedar después de que te salven está en la… |
| entrada 26 | entrada 3 | Poné un detector de humo, y si en invierno calefaccionás con gas, leña o carbón, sumá un detector de monóxido de carbono | …Los detectores de humo y de monóxido de carbono están en la… |
| entrada 26 | sección 13, entrada 12 | Ante una hemorragia grave, apretá la herida con toda la fuerza; si en un brazo o una pierna no alcanza, poné un torniquete, y al mismo tiempo llamá al 107 o al 911 | …Cómo usar un torniquete está en la… |
| entrada 28 | entrada 7 | Tomate la presión y, si está alta, tomá la medicación hasta llegar al valor objetivo | …Lo que hay que controlar es lo mismo que en las… |
| entrada 28 | entrada 8 | Si tenés más de 35 años y sobrepeso, hacete una glucemia en ayunas; si da normal, repetila cada tres años | …Lo que hay que controlar es lo mismo que en las… |
| entrada 28 | entrada 29 | Bajar de peso, dejar de fumar y controlar la presión y la glucemia mejoran la erección | …Cómo mejorar está en la… |
| entrada 28 | entrada 27 | Si ves sangre en la orina, aunque no duela y aunque al día siguiente ya no esté, andá a hacerte ver | …Tampoco es «chico»: la señal de la… |
| entrada 29 | sección 2, entrada 1 | Dejá de fumar, y cuanto antes, mejor | …Estas mismas acciones sí tienen resultados duros en otras partes: dejar de fumar en la… |
| entrada 29 | sección 2, entrada 32 | Mantené el IMC entre 20 y 25; si tenés sobrepeso, bajá | …fumar en la sección 2, entrada 1 (dejar de fumar, cuanto antes mejor), bajar de peso en la… |
| entrada 29 | entrada 7 | Tomate la presión y, si está alta, tomá la medicación hasta llegar al valor objetivo | …ar de peso en la sección 2, entrada 32 (mantener el IMC entre 20 y 25), y la presión en la… |
| entrada 29 | sección 28, entrada 4 | No compres pastillas, cafés, caramelos ni «tés» para adelgazar que prometen resultados rápidos | …cómo distinguirlos está en la… |
| entrada 30 | entrada 38 | Si sos un hombre que tiene sexo con hombres y tenés relaciones de riesgo, consultá por la profilaxis previa a la exposición (PrEP): tomada a horario, baja la infección más de un 70 % | …en Argentina es gratuita (ver… |
| entrada 32 | entrada 25 | Si estás con depresión o tenés ideas de suicidio, llamá a una línea de ayuda, y no guardes en casa pastillas para dormir ni agroquímicos | …Alejar los medios letales y las líneas de ayuda están en la… |
| entrada 32 | sección 3, entrada 18 | Con el ánimo bajo, hacé primero lo que más rinde: moverte, tomar sol, dormir a horario, hablar con alguien y llamar al 0800-999-0091 | …Lo primero que conviene hacer cuando el ánimo está bajo está en la… |
| entrada 32 | entrada 33 | No cuentes con que «te salvan»: después de tomar un herbicida o de intoxicarte con monóxido de carbono, en la guardia te pueden salvar la vida, pero no los pulmones ni el cerebro | …Las secuelas después de que te salvan están en la… |
| entrada 32 | sección 8, entrada 15 | _(capítulo pendiente de adaptación)_ | …Qué podés hacer si alguien cercano muestra esta idea está en la… |
| entrada 32 | entrada 25 | Si estás con depresión o tenés ideas de suicidio, llamá a una línea de ayuda, y no guardes en casa pastillas para dormir ni agroquímicos | …Adaptación AR: se cambió la mención a la línea china 12356 por la referencia a la… |
| entrada 33 | sección 13, entrada 19 | Si suena el detector de monóxido de carbono, o varias personas de la casa tienen a la vez dolor de cabeza y náuseas, primero salí y después llamá | …Qué hacer en el momento ante una intoxicación con monóxido de carbono está en la… |
| entrada 33 | sección 13, entrada 20 | Si alguien tragó por error productos de limpieza, plaguicidas o remedios, no lo hagas vomitar: llevá el envase y andá enseguida al médico; si le salpicó en los ojos o la piel, enjuagá con mucha agua al menos 15 minutos | … tragó un agroquímico o un remedio, no lo hagas vomitar y llevá el envase al hospital (ver… |
| entrada 33 | entrada 25 | Si estás con depresión o tenés ideas de suicidio, llamá a una línea de ayuda, y no guardes en casa pastillas para dormir ni agroquímicos | …No tener agroquímicos ni pastillas para dormir en casa está en la… |
| entrada 34 | sección 17, entrada 8 | _(capítulo pendiente de adaptación)_ | …Lo que más hay que vigilar durante una internación larga en cama son las escaras (ver… |
| entrada 34 | sección 13, entrada 11 | Consultá pronto si una pierna se hincha de golpe, se pone tirante y duele al tocarla; si además te falta el aire de golpe o te duele el pecho, llamá al 107 o al 911 enseguida | …Trombosis venosa profunda y embolia pulmonar: ver… |
| entrada 34 | entrada 32 | Cuando aparece una idea de suicidio, contáselo enseguida a una persona cercana y dejá en sus manos esos minutos | …Qué hacer cuando aparece la idea: ver… |
| entrada 34 | entrada 33 | No cuentes con que «te salvan»: después de tomar un herbicida o de intoxicarte con monóxido de carbono, en la guardia te pueden salvar la vida, pero no los pulmones ni el cerebro | …Las consecuencias de una intoxicación: ver… |
| entrada 35 | sección 9, entrada 22 | _(capítulo pendiente de adaptación)_ | …Las restricciones a la donación entre familiares, las multas y las penas están en la… |
| entrada 35 | sección 16, entrada 1 | _(capítulo pendiente de adaptación)_ | …Si ya necesitás diálisis, la atención y la medicación a largo plazo están en la… |
| entrada 35 | sección 16, entrada 2 | _(capítulo pendiente de adaptación)_ | …Si ya necesitás diálisis, la atención y la medicación a largo plazo están en la… |
| entrada 37 | sección 9, entrada 13 | _(capítulo pendiente de adaptación)_ | …Los límites legales del juego están en la… |
| entrada 37 | sección 8, entrada 44 | _(capítulo pendiente de adaptación)_ | …Si un familiar tiene deudas de juego y te preguntás si te toca pagarlas, ver… |
| entrada 37 | entrada 32 | Cuando aparece una idea de suicidio, contáselo enseguida a una persona cercana y dejá en sus manos esos minutos | …Qué hacer cuando aparece una idea de suicidio: ver… |
| entrada 38 | entrada 30 | Usá preservativo durante toda la relación sexual y no compartas agujas | … sífilis, gonorrea ni otras infecciones, así que el preservativo sigue haciendo falta (ver… |
| entrada 38 | sección 13, entrada 38 | Si pudiste haber estado expuesto al VIH, andá a buscar la profilaxis dentro de las 72 horas, cuanto antes mejor | …Si ya hubo una situación de riesgo, la profilaxis posexposición está en la… |
| entrada 39 | entrada 13 | Después de los 60, entrená el equilibrio y la fuerza de las piernas, y adaptá el baño y las escaleras de tu casa | …caerse menos es la… |
| entrada 39 | entrada 40 | Si te diagnosticaron osteoporosis, o te fracturaste con un golpe leve, pedile al médico la medicación para la osteoporosis y sostenela; el calcio solo no la reemplaza | …Qué hacer si te diagnostican osteoporosis está en la… |
| entrada 40 | entrada 39 | Si sos mujer y tenés más de 65 años, hacete una densitometría ósea; si ya pasaste la menopausia y tenés factores de riesgo de osteoporosis, no esperes a los 65 | …Cómo se diagnostica la osteoporosis está en la… |
| entrada 41 | sección 13, entrada 25 | Si ves que alguien se ahoga, primero pedí ayuda a los gritos y llamá al 911 (o al 106 en ríos, lagos y costas), alcanzale un palo largo o tirale algo que flote, y no te metas al agua | …qué hacer está en la… |
| entrada 42 | sección 19, entrada 10 | _(capítulo pendiente de adaptación)_ | …lo que conviene saber sobre barbijos y protectores auditivos está en la… |
| entrada 42 | sección 13, entrada 12 | Ante una hemorragia grave, apretá la herida con toda la fuerza; si en un brazo o una pierna no alcanza, poné un torniquete, y al mismo tiempo llamá al 107 o al 911 | …Si te cortaste un vaso grande, apretá fuerte la herida con la mano (ver… |

## libro/02-no-morir-de-a-poco

| Origen | Referencia | Entrada a la que apunta | Contexto |
| --- | --- | --- | --- |
| encabezado | entrada 1 | Dejá de fumar, y cuanto antes, mejor | …**Tabaco, alcohol y nuez de betel**: dejar de fumar cuanto antes (… |
| encabezado | entrada 2 | No fumes en tu casa ni en el auto, y no dejes que las visitas fumen adentro | …nuez de betel**: dejar de fumar cuanto antes (entrada 1), no fumar en casa ni en el auto (… |
| encabezado | entrada 3 | Para dejar de fumar no te bases solo en la fuerza de voluntad: conseguí medicación y el éxito puede más que duplicarse | … en casa ni en el auto (entrada 2), para dejar de fumar, conseguir primero la medicación (… |
| encabezado | entrada 4 | Fijá un día para dejar y ese día cortá de una, sin ir bajando de a poco antes | …ara dejar de fumar, conseguir primero la medicación (entrada 3), fijar un día para dejar (… |
| encabezado | entrada 5 | Andá a un consultorio de cesación tabáquica o llamá al 0800-999-3040 | …un día para dejar (entrada 4), ir a un consultorio de cesación o llamar al 0800-999-3040 (… |
| encabezado | entrada 6 | Pensá en el cigarrillo electrónico solo si ya no podés dejar de otra forma; si no fumás, ni lo pruebes | …40 (entrada 5), pensar en el cigarrillo electrónico solo si no podés dejar de otra forma (… |
| encabezado | entrada 8 | No masques nuez de betel | …lo electrónico solo si no podés dejar de otra forma (entrada 6), no mascar nuez de betel (… |
| encabezado | entrada 19 | Tomá poco alcohol o nada | …e otra forma (entrada 6), no mascar nuez de betel (entrada 8), tomar poco alcohol o nada (… |
| encabezado | entrada 20 | Si tomás todos los días y al dejar te tiemblan las manos o se te acelera el corazón, no cortes solo | …ohol o nada (entrada 19), si te tiemblan las manos apenas dejás de tomar, no cortar solo (… |
| encabezado | entrada 21 | Si querés tomar menos, primero contá cuánto tomás por semana y después hablá unos minutos con un médico | …s apenas dejás de tomar, no cortar solo (entrada 20), contar cuánto tomaste en la semana (… |
| encabezado | entrada 7 | No tomes bebidas azucaradas; pasarte a las «sin azúcar» tampoco lo resuelve | …**Lo que conviene comer y tomar menos**: no tomar bebidas azucaradas (… |
| encabezado | entrada 18 | Comé menos carne procesada (jamón, panceta, salchichas, fiambres) | …er y tomar menos**: no tomar bebidas azucaradas (entrada 7), comer menos carne procesada (… |
| encabezado | entrada 28 | Comé menos ultraprocesados (papas fritas de paquete, fideos instantáneos, productos de pastelería, comidas listas) | …radas (entrada 7), comer menos carne procesada (entrada 18), comer menos ultraprocesados (… |
| encabezado | entrada 30 | Dejá enfriar un poco lo caliente antes de tomarlo: nada de té, sopa o café hirviendo | …trada 18), comer menos ultraprocesados (entrada 28), no tomar el té ni la sopa hirviendo (… |
| encabezado | entrada 9 | Cambiá la sal de mesa por sal baja en sodio (sal de potasio) | …**Lo que conviene cambiar o comer más**: pasarse a la sal baja en sodio (… |
| encabezado | entrada 22 | Comé un puñado de frutos secos por día | …mer más**: pasarse a la sal baja en sodio (entrada 9), un puñado de frutos secos por día (… |
| encabezado | entrada 23 | Cambiá parte de la carne roja por pescado y pollo | …, un puñado de frutos secos por día (entrada 22), cambiar carne roja por pescado y pollo (… |
| encabezado | entrada 24 | Cambiá parte del arroz blanco y la harina refinada por cereales integrales | …ado y pollo (entrada 23), cambiar arroz blanco y harina refinada por cereales integrales (… |
| encabezado | entrada 25 | Tomá té tres veces o más por semana | …rina refinada por cereales integrales (entrada 24), tomar té tres veces o más por semana (… |
| encabezado | entrada 26 | Tomá tres o cuatro tazas de café por día, sin azúcar ni crema | …4), tomar té tres veces o más por semana (entrada 25), tomar tres o cuatro cafés por día (… |
| encabezado | entrada 27 | Comé 5 porciones (unos 400 g) de frutas y verduras por día | …, tomar tres o cuatro cafés por día (entrada 26), comer 5 porciones de frutas y verduras (… |
| encabezado | entrada 33 | Comé ají picante cuatro veces o más por semana | …iones de frutas y verduras (entrada 27), comer ají picante cuatro veces o más por semana (… |
| encabezado | entrada 34 | Tomá una o dos porciones de leche o yogur por día | …e cuatro veces o más por semana (entrada 33), tomar una o dos porciones de leche por día (… |
| encabezado | entrada 35 | No hace falta dejar el huevo, pero no comas tres o cuatro por día | …), tomar una o dos porciones de leche por día (entrada 34), no hace falta dejar el huevo (… |
| encabezado | entrada 11 | Llegá a 7000–8000 pasos por día, o sumá 150–300 minutos de caminata rápida por semana | …**Actividad física y peso**: llegar a 7000–8000 pasos por día (… |
| encabezado | entrada 14 | Jugá a un deporte de raqueta tres veces por semana, 45 minutos cada vez | …ísica y peso**: llegar a 7000–8000 pasos por día (entrada 11), jugar deportes de raqueta (… |
| encabezado | entrada 15 | Sumá unos cuatro o cinco minutos por día de esfuerzos cortos, como subir escaleras o caminar apurado | …día (entrada 11), jugar deportes de raqueta (entrada 14), sumar ratos cortos de esfuerzo (… |
| encabezado | entrada 16 | Hacé 30–60 minutos de ejercicios de fuerza por semana | …entrada 14), sumar ratos cortos de esfuerzo (entrada 15), hacer fuerza todas las semanas (… |
| encabezado | entrada 17 | No te quedes sentado mucho tiempo seguido: levantate y movete cada tanto | …), hacer fuerza todas las semanas (entrada 16), no quedarse sentado mucho tiempo seguido (… |
| encabezado | entrada 32 | Mantené el IMC entre 20 y 25; si tenés sobrepeso, bajá | …6), no quedarse sentado mucho tiempo seguido (entrada 17), mantener el IMC entre 20 y 25 (… |
| encabezado | entrada 13 | Dormí unas 7 horas por noche, con horarios fijos | …**Sueño y trabajo nocturno**: dormir unas 7 horas por noche (… |
| encabezado | entrada 37 | Que la siesta dure media hora como mucho y nunca más de una hora; si necesitás dormir una o dos horas para aguantar, averiguá por qué | … nocturno**: dormir unas 7 horas por noche (entrada 13), siesta de media hora como mucho (… |
| encabezado | entrada 38 | Si trasnochaste, recuperá sueño a la noche siguiente; no lo acumules para el fin de semana | …ora como mucho (entrada 37), después de trasnochar, recuperar sueño a la noche siguiente (… |
| encabezado | entrada 39 | Cuantos más años trabajás de noche, más riesgo cardiovascular: si podés cambiar de puesto, hacelo cuanto antes | …iente (entrada 38), si trabajás de noche y podés cambiar de puesto, hacerlo cuanto antes (… |
| encabezado | entrada 29 | No cocines ni calefacciones con carbón o leña: pasate a electricidad o gas | …**Aceite y humo en la cocina**: no cocinar ni calefaccionar con carbón o leña (… |
| encabezado | entrada 40 | Comprá aceite envasado y registrado, no aceite suelto de elaboración casera sin control | …leña (entrada 29), comprar aceite envasado y registrado, no suelto de elaboración casera (… |
| encabezado | entrada 41 | Cociná con aceite vegetal en vez de grasa de cerdo o manteca; no hace falta ir cambiando de aceite por salud, y no esperes que el aceite de lino te proteja el corazón | … elaboración casera (entrada 40), usar aceite vegetal en vez de grasa de cerdo o manteca (… |
| encabezado | entrada 42 | Prendé el extractor cada vez que salteás o freís, desde que encendés el fuego hasta que terminás | …vegetal en vez de grasa de cerdo o manteca (entrada 41), prender el extractor al cocinar (… |
| encabezado | entrada 10 | Cepillate bien, limpiá entre los dientes una vez por día y reponé las piezas que te falten | …**Dientes, remedios y otros hábitos**: cepillarse bien y limpiar entre los dientes (… |
| encabezado | entrada 12 | Si tenés presión o colesterol altos, tomá la medicación como te la indicaron y no la cortes por tu cuenta | …ien y limpiar entre los dientes (entrada 10), tomar la medicación indicada sin saltearla (… |
| encabezado | entrada 31 | Salí a tomar sol de día; no pases el día entero sin ver la luz | …a 10), tomar la medicación indicada sin saltearla (entrada 12), salir a tomar sol de día (… |
| encabezado | entrada 36 | Si podés, date baños de inmersión en vez de solo ducharte | …a (entrada 12), salir a tomar sol de día (entrada 31), darse baños de inmersión si podés (… |
| entrada 1 | entrada 3 | Para dejar de fumar no te bases solo en la fuerza de voluntad: conseguí medicación y el éxito puede más que duplicarse | …Cómo dejar, en concreto, está en las cuatro entradas siguientes:… |
| entrada 1 | entrada 4 | Fijá un día para dejar y ese día cortá de una, sin ir bajando de a poco antes | …Cómo dejar, en concreto, está en las cuatro entradas siguientes: entrada 3 (medicación),… |
| entrada 1 | entrada 5 | Andá a un consultorio de cesación tabáquica o llamá al 0800-999-3040 | … está en las cuatro entradas siguientes: entrada 3 (medicación), entrada 4 (fijar un día),… |
| entrada 1 | entrada 6 | Pensá en el cigarrillo electrónico solo si ya no podés dejar de otra forma; si no fumás, ni lo pruebes | …s: entrada 3 (medicación), entrada 4 (fijar un día), entrada 5 (consultorio de cesación) y… |
| entrada 2 | entrada 1 | Dejá de fumar, y cuanto antes, mejor | …Para dejar vos, ver… |
| entrada 3 | entrada 4 | Fijá un día para dejar y ese día cortá de una, sin ir bajando de a poco antes | … resuelve las situaciones en que te dan ganas de fumar, así que conviene combinarla con la… |
| entrada 3 | entrada 5 | Andá a un consultorio de cesación tabáquica o llamá al 0800-999-3040 | …ue te dan ganas de fumar, así que conviene combinarla con la entrada 4 (fijar un día) y la… |
| entrada 5 | entrada 3 | Para dejar de fumar no te bases solo en la fuerza de voluntad: conseguí medicación y el éxito puede más que duplicarse | …Qué medicación sumar, en la… |
| entrada 6 | sección 22, entrada 4 | _(capítulo pendiente de adaptación)_ | …Por canales así también circulan líquidos adulterados con cannabinoides sintéticos (ver… |
| entrada 6 | entrada 3 | Para dejar de fumar no te bases solo en la fuerza de voluntad: conseguí medicación y el éxito puede más que duplicarse | …En orden, probá primero la… |
| entrada 10 | sección 24, entrada 12 | _(capítulo pendiente de adaptación)_ | …Cuánto sale un implante y qué cubre cada sistema, ver… |
| entrada 13 | entrada 38 | Si trasnochaste, recuperá sueño a la noche siguiente; no lo acumules para el fin de semana | …Cómo recuperar sueño después de trasnochar, ver… |
| entrada 14 | entrada 11 | Llegá a 7000–8000 pasos por día, o sumá 150–300 minutos de caminata rápida por semana | …que correr no sirve: esta sección tiene otra entrada que cuenta el total de actividad (ver… |
| entrada 19 | entrada 21 | Si querés tomar menos, primero contá cuánto tomás por semana y después hablá unos minutos con un médico | …Si querés tomar menos, ver… |
| entrada 19 | entrada 20 | Si tomás todos los días y al dejar te tiemblan las manos o se te acelera el corazón, no cortes solo | …Si tomás todos los días, no cortes solo: ver… |
| entrada 20 | entrada 19 | Tomá poco alcohol o nada | …Cuánto por semana es mucho, ver… |
| entrada 20 | entrada 21 | Si querés tomar menos, primero contá cuánto tomás por semana y después hablá unos minutos con un médico | …si querés tomar menos, ver… |
| entrada 21 | entrada 20 | Si tomás todos los días y al dejar te tiemblan las manos o se te acelera el corazón, no cortes solo | …Si ya tenés abstinencia, ver… |
| entrada 25 | entrada 30 | Dejá enfriar un poco lo caliente antes de tomarlo: nada de té, sopa o café hirviendo | …sobre la temperatura de las bebidas calientes, ver… |
| entrada 28 | entrada 7 | No tomes bebidas azucaradas; pasarte a las «sin azúcar» tampoco lo resuelve | …Dos: se superpone mucho con las bebidas azucaradas y la carne procesada (… |
| entrada 28 | entrada 18 | Comé menos carne procesada (jamón, panceta, salchichas, fiambres) | …Dos: se superpone mucho con las bebidas azucaradas y la carne procesada (… |
| entrada 28 | entrada 7 | No tomes bebidas azucaradas; pasarte a las «sin azúcar» tampoco lo resuelve | …Por eso, primero cumplí las… |
| entrada 28 | entrada 18 | Comé menos carne procesada (jamón, panceta, salchichas, fiambres) | …Por eso, primero cumplí las… |
| entrada 32 | sección 6, entrada 26 | No esperes que desayunar o hacer ayuno 16:8 te ayude a controlar el peso: elegí el horario de comidas que puedas sostener | …s de las comidas: ni el desayuno ni el ayuno intermitente 16:8 dan un beneficio extra, ver… |
| entrada 37 | sección 3, entrada 11 | Si tenés sueño a la tarde, dormí 10 minutos, no media hora | …Cómo usar una siesta corta para despejarte, ver… |
| entrada 37 | entrada 13 | Dormí unas 7 horas por noche, con horarios fijos | …Cuánto dormir de noche, ver… |
| entrada 38 | entrada 13 | Dormí unas 7 horas por noche, con horarios fijos | … fijo se llama jet lag social, y por sí mismo se asocia con enfermedad cardiovascular, ver… |
| entrada 38 | sección 3, entrada 2 | Levantate siempre a la misma hora, también el fin de semana | …La recomendación de levantarte a la misma hora también el fin de semana está en la… |
| entrada 39 | entrada 1 | Dejá de fumar, y cuanto antes, mejor | …Si ya trabajás de noche, empezá por lo que se puede cambiar: dejar de fumar, ver… |
| entrada 39 | entrada 12 | Si tenés presión o colesterol altos, tomá la medicación como te la indicaron y no la cortes por tu cuenta | …presión y colesterol, ver… |
| entrada 39 | entrada 38 | Si trasnochaste, recuperá sueño a la noche siguiente; no lo acumules para el fin de semana | …cómo recuperar sueño después del turno, ver… |
| entrada 42 | entrada 29 | No cocines ni calefacciones con carbón o leña: pasate a electricidad o gas | …Sobre no cocinar con carbón o leña, ver… |

## libro/03-no-desperdiciar-energia

| Origen | Referencia | Entrada a la que apunta | Contexto |
| --- | --- | --- | --- |
| encabezado | entrada 19 | Tratá a policías, médicos y empleados de ventanilla como gente que trabaja con reglas, no como personajes: lo que mueve un trámite son los papeles y los plazos, no las emociones | …La… |
| encabezado | entrada 15 | Tomá los pensamientos del tipo «esto seguro va a empeorar» como un síntoma, no como un hecho | …La… |
| encabezado | entrada 22 | Tomá «los demás me exigen ser perfecto» como un síntoma, no como un hecho | …La entrada 15 (tomar los pensamientos pesimistas como un síntoma) y la… |
| encabezado | entrada 1 | Apagá las notificaciones que no hacen falta y, cuando trabajás, dejá el celular fuera de la vista | …**Atención en el trabajo**: apagar las notificaciones que no hacen falta (… |
| encabezado | entrada 5 | Revisá el correo y los mensajes en tandas, unas pocas veces fijas por día | …otificaciones que no hacen falta (entrada 1), responder mensajes en tandas fijas por día (… |
| encabezado | entrada 6 | Cuando hacés un trabajo que exige pensar de corrido, frená hasta las interrupciones de unos segundos | …ensajes en tandas fijas por día (entrada 5), frenar hasta las interrupciones de segundos (… |
| encabezado | entrada 7 | Hacé una sola cosa a la vez: no contestes mensajes en medio de una reunión | …), frenar hasta las interrupciones de segundos (entrada 6), hacer una sola cosa a la vez (… |
| encabezado | entrada 12 | Si trabajás en una oficina abierta, usá tapones o buscá una sala tranquila para las tareas que exigen memoria | …entrada 6), hacer una sola cosa a la vez (entrada 7), usar tapones en la oficina abierta (… |
| encabezado | entrada 13 | No trabajes más de 49 horas por semana | … usar tapones en la oficina abierta (entrada 12), no trabajar más de 49 horas por semana (… |
| encabezado | entrada 2 | Levantate siempre a la misma hora, también el fin de semana | …**Dormir y trasnochar**: levantarte siempre a la misma hora (… |
| encabezado | entrada 3 | Dormí 7 a 8 horas cada noche y no des por suficientes 6 horas | …snochar**: levantarte siempre a la misma hora (entrada 2), dormir 7 a 8 horas cada noche (… |
| encabezado | entrada 4 | No tomes cafeína después de las dos de la tarde | …rmir 7 a 8 horas cada noche (entrada 3), no tomar cafeína después de las dos de la tarde (… |
| encabezado | entrada 8 | Nada de pantallas que emiten luz una hora antes de dormir: si querés leer, que sea en papel o en tinta electrónica | …a después de las dos de la tarde (entrada 4), nada de pantallas una hora antes de dormir (… |
| encabezado | entrada 9 | Andá a dormir a horario: no trasnoches por juegos, videos cortos ni pornografía | …rada 4), nada de pantallas una hora antes de dormir (entrada 8), irte a dormir a horario (… |
| encabezado | entrada 10 | No tomes decisiones importantes ni mandes mensajes delicados de madrugada | …da 8), irte a dormir a horario (entrada 9), no tomar decisiones importantes de madrugada (… |
| encabezado | entrada 11 | Si tenés sueño a la tarde, dormí 10 minutos, no media hora | …iones importantes de madrugada (entrada 10), dormir 10 minutos a la tarde si tenés sueño (… |
| encabezado | entrada 14 | Cuando te descubras dándole vueltas a lo mismo una y otra vez, pasá a una tarea en la que uses las manos | …**Lo que te da vueltas en la cabeza**: cambiar a una tarea manual cuando estás rumiando (… |
| encabezado | entrada 15 | Tomá los pensamientos del tipo «esto seguro va a empeorar» como un síntoma, no como un hecho | …al cuando estás rumiando (entrada 14), tomar los pensamientos pesimistas como un síntoma (… |
| encabezado | entrada 21 | Cuando sientas que «todo el mundo vio cómo hice el ridículo», dividí esa estimación por dos | …íntoma (entrada 15), dividir por dos la estimación cuando sentís que hiciste el ridículo (… |
| encabezado | entrada 22 | Tomá «los demás me exigen ser perfecto» como un síntoma, no como un hecho | …ciste el ridículo (entrada 21), tomar «los demás me exigen ser perfecto» como un síntoma (… |
| encabezado | entrada 17 | Cuando te enojás, primero andate, y tomá al otro como al mal tiempo, no como a un enemigo | …**Enojo y ánimo bajo**: irte cuando estás enojado (… |
| encabezado | entrada 18 | Con el ánimo bajo, hacé primero lo que más rinde: moverte, tomar sol, dormir a horario, hablar con alguien y llamar al 0800-999-0091 | … irte cuando estás enojado (entrada 17), lo primero que conviene hacer con el ánimo bajo (… |
| encabezado | entrada 23 | Cuando estés enojado, no te descargues rompiendo cosas, pegándole a una bolsa ni saliendo a correr: primero calmá el cuerpo | …que conviene hacer con el ánimo bajo (entrada 18), no descargar el enojo rompiendo cosas (… |
| encabezado | entrada 24 | Si algo te pesa, podés escribir lo que pensás y sentís varios días seguidos, pero no esperes que te cure | …rgar el enojo rompiendo cosas (entrada 23), escribir lo que te pesa varios días seguidos (… |
| encabezado | entrada 16 | Achicá los vínculos que te desgastan y aprendé a decir que no a lo que no querés aceptar | …**Vínculos y redes sociales**: aprender a decir que no a lo que no querés aceptar (… |
| encabezado | entrada 19 | Tratá a policías, médicos y empleados de ventanilla como gente que trabaja con reglas, no como personajes: lo que mueve un trámite son los papeles y los plazos, no las emociones | …erés aceptar (entrada 16), tratar a policías y médicos como gente que trabaja con reglas (… |
| encabezado | entrada 20 | No conviertas «cómo les va a los demás» en tu lectura diaria: limitá o cerrá las apps donde mirás la vida de gente de tu edad | … reglas (entrada 19), ponerles límite a las apps donde mirás la vida de gente de tu edad (… |
| entrada 2 | sección 2, entrada 38 | Si trasnochaste, recuperá sueño a la noche siguiente; no lo acumules para el fin de semana | …Cómo recuperarte después de trasnochar alguna vez está en la… |
| entrada 3 | sección 2, entrada 13 | Dormí unas 7 horas por noche, con horarios fijos | …La relación entre horas de sueño y riesgo de muerte se cuenta aparte, en la… |
| entrada 4 | entrada 3 | Dormí 7 a 8 horas cada noche y no des por suficientes 6 horas | …Lo que ganás al tomar menos cafeína es tiempo de sueño, y se suma a la… |
| entrada 6 | entrada 1 | Apagá las notificaciones que no hacen falta y, cuando trabajás, dejá el celular fuera de la vista | …Para las segundas, combinalo con la… |
| entrada 6 | entrada 5 | Revisá el correo y los mensajes en tandas, unas pocas veces fijas por día | …s segundas, combinalo con la entrada 1 (apagar las notificaciones que no hacen falta) y la… |
| entrada 9 | entrada 3 | Dormí 7 a 8 horas cada noche y no des por suficientes 6 horas | …Lo que cuesta trasnochar en sí está en la… |
| entrada 11 | sección 2, entrada 37 | Que la siesta dure media hora como mucho y nunca más de una hora; si necesitás dormir una o dos horas para aguantar, averiguá por qué | …ver… |
| entrada 18 | sección 22, entrada 6 | _(capítulo pendiente de adaptación)_ | …- En simple: Para la depresión, caminar rápido o trotar es lo que mejor funciona (ver… |
| entrada 18 | sección 1, entrada 25 | Si estás con depresión o tenés ideas de suicidio, llamá a una línea de ayuda, y no guardes en casa pastillas para dormir ni agroquímicos | …primero llamá al 0800-999-0091 (ver… |
| entrada 19 | sección 8, entrada 39 | _(capítulo pendiente de adaptación)_ | …El original citaba los plazos de la policía china para las denuncias, los mismos de la… |
| entrada 19 | sección 24, entrada 7 | _(capítulo pendiente de adaptación)_ | …sta: por ejemplo, en la guardia se atiende según la gravedad, no por orden de llegada (ver… |
| entrada 19 | sección 24, entrada 11 | _(capítulo pendiente de adaptación)_ | …ver… |
| entrada 19 | sección 8, entrada 40 | _(capítulo pendiente de adaptación)_ | …ver… |
| entrada 20 | sección 4, entrada 15 | Ponele un límite firme a los videos cortos y a pasar pantallas sin rumbo | …La cuenta del tiempo total de pantalla está en la… |
| entrada 20 | sección 4, entrada 16 | No mires tele ni noticias en continuado: lo que necesitás saber, miralo de una vez y en horarios fijos | …La cuenta del tiempo total de pantalla está en la… |
| entrada 20 | entrada 18 | Con el ánimo bajo, hacé primero lo que más rinde: moverte, tomar sol, dormir a horario, hablar con alguien y llamar al 0800-999-0091 | …Qué hacer primero con el ánimo bajo está en la… |
| entrada 20 | sección 6, entrada 23 | No esperes que comprar cosas te mejore el ánimo o la imagen que tenés de vos | …Comprar cosas para sentir que sos alguien está en la… |
| entrada 20 | sección 6, entrada 24 | No gastes de más en casa, auto o círculo social para «subir un escalón entre los que te rodean» | …Gastar de más para «subir un escalón» está en la… |
| entrada 22 | entrada 15 | Tomá los pensamientos del tipo «esto seguro va a empeorar» como un síntoma, no como un hecho | …Igual que las expectativas pesimistas de la… |
| entrada 22 | sección 1, entrada 25 | Si estás con depresión o tenés ideas de suicidio, llamá a una línea de ayuda, y no guardes en casa pastillas para dormir ni agroquímicos | …ver… |
| entrada 22 | sección 8, entrada 15 | _(capítulo pendiente de adaptación)_ | …Qué podés hacer si alguien cercano deja ver estas ideas está en la… |
| entrada 22 | sección 30, entrada 8 | _(capítulo pendiente de adaptación)_ | …La detección de depresión en chicos está en la… |
| entrada 23 | sección 22, entrada 8 | _(capítulo pendiente de adaptación)_ | …Lo que podés hacer en el momento está en la… |
| entrada 23 | entrada 17 | Cuando te enojás, primero andate, y tomá al otro como al mal tiempo, no como a un enemigo | …o que podés hacer en el momento está en la sección 22, entrada 8 (suspiro cíclico) y en la… |
| entrada 23 | sección 22, entrada 6 | _(capítulo pendiente de adaptación)_ | …ver… |
| entrada 23 | sección 8, entrada 43 | _(capítulo pendiente de adaptación)_ | …ver… |
| entrada 24 | sección 1, entrada 25 | Si estás con depresión o tenés ideas de suicidio, llamá a una línea de ayuda, y no guardes en casa pastillas para dormir ni agroquímicos | …ver… |

## libro/04-no-desperdiciar-tiempo

| Origen | Referencia | Entrada a la que apunta | Contexto |
| --- | --- | --- | --- |
| entrada 2 | entrada 3 | Para decidir si seguís, mirá solo lo que falta invertir y lo que vas a ganar, no lo que ya pusiste | …Para decidir, mirá solo lo que falta invertir y lo que podés ganar de acá en adelante (ver… |
| entrada 9 | entrada 1 | Escribí el «voy a hacerlo» como «a tal hora, en tal lugar, cuando pase esto, hago aquello» | …cretas son escribirlo como «a tal hora, en tal lugar, cuando pase esto, hago aquello» (ver… |
| entrada 9 | entrada 7 | Dividí las tareas grandes en partes antes de calcular el plazo y antes de empezar | …cuando pase esto, hago aquello» (ver entrada 1), dividir las tareas grandes en partes (ver… |
| entrada 9 | entrada 8 | Ponele vos una fecha a lo que no tiene fecha límite externa | …ndes en partes (ver entrada 7) y ponerle fecha a lo que no tiene fecha límite externa (ver… |
| entrada 10 | sección 3, entrada 1 | Apagá las notificaciones que no hacen falta y, cuando trabajás, dejá el celular fuera de la vista | …Dejar el celular fuera de la vista sí se midió directamente (ver… |
| entrada 11 | sección 2, entrada 3 | Para dejar de fumar no te bases solo en la fuerza de voluntad: conseguí medicación y el éxito puede más que duplicarse | …Para dejar de fumar en sí, sirven los medicamentos para dejar de fumar (ver… |
| entrada 12 | entrada 1 | Escribí el «voy a hacerlo» como «a tal hora, en tal lugar, cuando pase esto, hago aquello» | …na situación fija, como en «a tal hora, en tal lugar, cuando pase esto, hago aquello» (ver… |
| entrada 13 | entrada 10 | Poné a mano lo que necesitás y alejá lo que no querés tocar, en vez de confiar en aguantarte en el momento | …El control de estímulos es alejar lo que no querés tocar (ver… |
| entrada 13 | sección 3, entrada 18 | Con el ánimo bajo, hacé primero lo que más rinde: moverte, tomar sol, dormir a horario, hablar con alguien y llamar al 0800-999-0091 | …r en horario, hablar con alguien y pedir ayuda a una línea telefónica de salud mental (ver… |
| entrada 15 | entrada 16 | No mires tele ni noticias en continuado: lo que necesitás saber, miralo de una vez y en horarios fijos | …La tele se superpone con lo que trata otra entrada (ver… |
| entrada 15 | sección 3, entrada 20 | No conviertas «cómo les va a los demás» en tu lectura diaria: limitá o cerrá las apps donde mirás la vida de gente de tu edad | …ensayos aleatorizados que calcularon cuánto tiempo se recupera y cómo cambia el ánimo (ver… |
| entrada 16 | entrada 15 | Ponele un límite firme a los videos cortos y a pasar pantallas sin rumbo | …del INDEC la tele no aparece separada: va dentro del uso de medios de comunicación (ver la… |

## libro/06-lo-que-no-vale-la-pena

| Origen | Referencia | Entrada a la que apunta | Contexto |
| --- | --- | --- | --- |
| encabezado | entrada 1 | No tomes multivitamínicos para vivir más o prevenir enfermedades del corazón | …**Suplementos y vitaminas**: multivitamínicos (… |
| encabezado | entrada 2 | No tomes cápsulas de aceite de pescado común para prevenir enfermedades del corazón | …**Suplementos y vitaminas**: multivitamínicos (entrada 1), aceite de pescado común (… |
| encabezado | entrada 3 | No tomes vitamina D para vivir más si no te falta | …taminas**: multivitamínicos (entrada 1), aceite de pescado común (entrada 2), vitamina D (… |
| encabezado | entrada 4 | No tomes suplementos antioxidantes (betacaroteno, vitamina E, vitamina A) para prevenir el cáncer | …do común (entrada 2), vitamina D (entrada 3), suplementos antioxidantes contra el cáncer (… |
| encabezado | entrada 5 | No esperes que la glucosamina o la condroitina curen la artrosis de rodilla | …ntos antioxidantes contra el cáncer (entrada 4), condroitina para la artrosis de rodilla (… |
| encabezado | entrada 6 | No tomes vitamina C para prevenir el resfrío | …da 4), condroitina para la artrosis de rodilla (entrada 5), vitamina C contra el resfrío (… |
| encabezado | entrada 10 | No gastes fortunas en suplementos, tónicos y productos «naturales» para «equilibrar el cuerpo» | …la (entrada 5), vitamina C contra el resfrío (entrada 6), gastar fortunas en suplementos (… |
| encabezado | entrada 11 | No tomes probióticos todos los días si no tenés un problema intestinal | …río (entrada 6), gastar fortunas en suplementos (entrada 10), probióticos todos los días (… |
| encabezado | entrada 13 | No compres productos «detox», de limpieza intestinal, enzimas o agua alcalina | … en suplementos (entrada 10), probióticos todos los días (entrada 11), productos «detox» (… |
| encabezado | entrada 30 | No esperes que cargarte de calcio o tomar caldo de huesos después de una fractura haga que el hueso suelde más rápido | …(entrada 11), productos «detox» (entrada 13), cargarse de calcio después de una fractura (… |
| encabezado | entrada 7 | No te hagas un «PET-CT de cuerpo entero» ni un «panel de marcadores tumorales» si no tenés síntomas | …hequeos y hallazgos menores**: PET-CT de cuerpo entero y paneles de marcadores tumorales (… |
| encabezado | entrada 18 | No confíes en los chequeos generales en paquete para prevenir enfermedades: hacé los rastreos que tienen evidencia según tu edad y sexo | …erpo entero y paneles de marcadores tumorales (entrada 7), chequeos generales en paquete (… |
| encabezado | entrada 19 | No empieces a tomar medicación para bajar el ácido úrico si te salió alto en un chequeo pero nunca te dolió | …entrada 7), chequeos generales en paquete (entrada 18), ácido úrico alto sin dolor nunca (… |
| encabezado | entrada 20 | No te saques la vesícula de forma preventiva porque un chequeo mostró cálculos que nunca te dolieron | …cido úrico alto sin dolor nunca (entrada 19), cálculos en la vesícula que nunca dolieron (… |
| encabezado | entrada 21 | No dejes el calcio para prevenir cálculos renales | …vesícula que nunca dolieron (entrada 20), dejar el calcio para prevenir cálculos renales (… |
| encabezado | entrada 8 | No esperes que la pulsera o el reloj que mide tu actividad te haga bajar de peso | …**Mitos de salud**: la pulsera o el reloj para bajar de peso (… |
| encabezado | entrada 9 | No pagues de más por alimentos orgánicos para estar «más sano» | …os de salud**: la pulsera o el reloj para bajar de peso (entrada 8), alimentos orgánicos (… |
| encabezado | entrada 12 | No te obligues a bañarte con agua fría para «subir las defensas» | …eso (entrada 8), alimentos orgánicos (entrada 9), duchas frías para «subir las defensas» (… |
| encabezado | entrada 14 | No te obligues a tomar agua para llegar a los «8 vasos por día» | …(entrada 9), duchas frías para «subir las defensas» (entrada 12), obligarse a tomar agua (… |
| encabezado | entrada 16 | No compres anteojos con filtro de luz azul para «cuidar la vista» ni creas que «unos meses frente a la pantalla te arruinan los ojos», pero tratá como urgencia el ojo hinchado, doloroso y rojo | …nsas» (entrada 12), obligarse a tomar agua (entrada 14), anteojos con filtro de luz azul (… |
| encabezado | entrada 17 | No dones sangre como si fuera un cuidado para tu salud: no hay ensayos que respalden que «limpia, baja el colesterol o previene infartos», y donar muy seguido sí puede dejarte sin hierro | …rada 14), anteojos con filtro de luz azul (entrada 16), donar sangre como cuidado propio (… |
| encabezado | entrada 26 | No esperes que desayunar o hacer ayuno 16:8 te ayude a controlar el peso: elegí el horario de comidas que puedas sostener | …re como cuidado propio (entrada 17), desayunar o hacer ayuno 16:8 para controlar el peso (… |
| encabezado | entrada 29 | No esperes que aprender la «postura correcta para levantar peso» o hacer un curso de manejo de cargas evite el dolor de espalda: lo que hay que bajar es el peso y la cantidad de veces, y hacer ejercicio | …l peso (entrada 26), la «postura correcta» para levantar peso contra el dolor de espalda (… |
| encabezado | entrada 15 | No pagues adivinos, tarot ni horóscopos para tomar decisiones | …**Pagar por suerte y por ánimo**: adivinos, tarot y horóscopo (… |
| encabezado | entrada 22 | No compres cristales, pulseras ni amuletos para «cambiar la suerte», «atraer plata» o «mejorar la energía» | … y por ánimo**: adivinos, tarot y horóscopo (entrada 15), cristales, pulseras y amuletos (… |
| encabezado | entrada 23 | No esperes que comprar cosas te mejore el ánimo o la imagen que tenés de vos | …entrada 15), cristales, pulseras y amuletos (entrada 22), comprar para levantar el ánimo (… |
| encabezado | entrada 24 | No gastes de más en casa, auto o círculo social para «subir un escalón entre los que te rodean» | …da 22), comprar para levantar el ánimo (entrada 23), gastar de más para subir un escalón (… |
| encabezado | entrada 25 | No creas que «la fuerza de voluntad es como un músculo y se gasta con el uso» | …**Fuerza de voluntad y sexualidad**: la voluntad como un músculo que se agota (… |
| encabezado | entrada 27 | No creas que «la masturbación hace mal» ni que «hay que dejarla para estar bien»: lo que importa es si te quita sueño, trabajo o pareja | …dad**: la voluntad como un músculo que se agota (entrada 25), la masturbación «hace mal» (… |
| encabezado | entrada 28 | No pagues «terapias de conversión» ni «tratamientos para la homosexualidad», y no mandes a nadie de tu familia a hacerlas | … masturbación «hace mal» (entrada 27), las terapias para «cambiar» la orientación sexual (… |
| entrada 10 | entrada 1 | No tomes multivitamínicos para vivir más o prevenir enfermedades del corazón | …- En simple: Los ingredientes más comunes ya se revisaron en las… |
| entrada 10 | entrada 2 | No tomes cápsulas de aceite de pescado común para prevenir enfermedades del corazón | …- En simple: Los ingredientes más comunes ya se revisaron en las… |
| entrada 10 | entrada 3 | No tomes vitamina D para vivir más si no te falta | …- En simple: Los ingredientes más comunes ya se revisaron en las… |
| entrada 10 | entrada 4 | No tomes suplementos antioxidantes (betacaroteno, vitamina E, vitamina A) para prevenir el cáncer | …- En simple: Los ingredientes más comunes ya se revisaron en las… |
| entrada 10 | entrada 5 | No esperes que la glucosamina o la condroitina curen la artrosis de rodilla | …- En simple: Los ingredientes más comunes ya se revisaron en las… |
| entrada 10 | entrada 6 | No tomes vitamina C para prevenir el resfrío | …- En simple: Los ingredientes más comunes ya se revisaron en las… |
| entrada 10 | entrada 1 | No tomes multivitamínicos para vivir más o prevenir enfermedades del corazón | …Las razones están en las… |
| entrada 10 | entrada 2 | No tomes cápsulas de aceite de pescado común para prevenir enfermedades del corazón | …Las razones están en las… |
| entrada 10 | entrada 3 | No tomes vitamina D para vivir más si no te falta | …Las razones están en las… |
| entrada 10 | entrada 4 | No tomes suplementos antioxidantes (betacaroteno, vitamina E, vitamina A) para prevenir el cáncer | …Las razones están en las… |
| entrada 10 | entrada 5 | No esperes que la glucosamina o la condroitina curen la artrosis de rodilla | …Las razones están en las… |
| entrada 10 | entrada 6 | No tomes vitamina C para prevenir el resfrío | …Las razones están en las… |
| entrada 10 | sección 1, entrada 20 | Si tenés una enfermedad cardiovascular o sos una persona mayor, vacunate contra la gripe todos los años | …Acompañarlos a la vacuna antigripal de cada año (ver… |
| entrada 10 | sección 1, entrada 21 | Después de los 50, vacunate contra el herpes zóster | …La vacuna contra el herpes zóster desde los 50 años (ver… |
| entrada 10 | sección 1, entrada 22 | Después de los 65, vacunate contra el neumococo | …La vacuna contra el neumococo desde los 65 años (ver… |
| entrada 10 | sección 1, entrada 7 | Tomate la presión y, si está alta, tomá la medicación hasta llegar al valor objetivo | …os a tomar la medicación de la presión como indicó el médico hasta llegar al objetivo (ver… |
| entrada 10 | sección 1, entrada 13 | Después de los 60, entrená el equilibrio y la fuerza de las piernas, y adaptá el baño y las escaleras de tu casa | …Adaptar el baño y las escaleras y practicar con ellos equilibrio y fuerza de piernas (ver… |
| entrada 10 | sección 1, entrada 17 | Si sos mujer, hacé el control de cáncer de mama con mamografía | …Acompañarlos a los rastreos de cáncer que les tocan por edad (ver… |
| entrada 10 | sección 1, entrada 18 | Si tenés más de 30 años, hacé el control de cáncer de cuello uterino, preferentemente con el test de VPH | …Acompañarlos a los rastreos de cáncer que les tocan por edad (ver… |
| entrada 10 | sección 1, entrada 19 | Desde los 45 o 50 años, hacé el control de cáncer colorrectal con el test de sangre oculta en materia fecal o con una colonoscopía | …Acompañarlos a los rastreos de cáncer que les tocan por edad (ver… |
| entrada 10 | sección 17, entrada 7 | _(capítulo pendiente de adaptación)_ | …Si ya están postrados, la prevención de escaras y los cuidados de largo plazo están en la… |
| entrada 10 | sección 17, entrada 8 | _(capítulo pendiente de adaptación)_ | …Si ya están postrados, la prevención de escaras y los cuidados de largo plazo están en la… |
| entrada 10 | sección 17, entrada 5 | _(capítulo pendiente de adaptación)_ | … en las que primero se paga, y los productos que terminan reemplazando un medicamento (ver… |
| entrada 16 | sección 19, entrada 10 | _(capítulo pendiente de adaptación)_ | …Se previene con antiparras y máscara de soldar, no con lentes de filtro azul (ver… |
| entrada 16 | sección 13, entrada 6 | Andá a una guardia oftalmológica en el día si un ojo está hinchado, dolorido y rojo, ves un halo de colores alrededor de las luces y además te duele la cabeza y tenés náuseas | … puede dañar el nervio óptico, así que andá a una guardia oftalmológica ese mismo día (ver… |
| entrada 16 | sección 30, entrada 4 | _(capítulo pendiente de adaptación)_ | …Cómo prevenir la miopía en chicos y adolescentes está en la… |
| entrada 16 | sección 30, entrada 12 | _(capítulo pendiente de adaptación)_ | …Cómo prevenir la miopía en chicos y adolescentes está en la… |
| entrada 16 | sección 30, entrada 9 | _(capítulo pendiente de adaptación)_ | …Cómo prevenir la miopía en chicos y adolescentes está en la… |
| entrada 18 | sección 1, entrada 7 | Tomate la presión y, si está alta, tomá la medicación hasta llegar al valor objetivo | …Presión, glucemia y hepatitis B: ver… |
| entrada 18 | sección 1, entrada 8 | Si tenés más de 35 años y sobrepeso, hacete una glucemia en ayunas; si da normal, repetila cada tres años | …Presión, glucemia y hepatitis B: ver… |
| entrada 18 | sección 1, entrada 14 | Hacete el análisis de hepatitis B y, si no tenés anticuerpos, vacunate | …Presión, glucemia y hepatitis B: ver… |
| entrada 18 | sección 1, entrada 17 | Si sos mujer, hacé el control de cáncer de mama con mamografía | …Mama, cuello de útero y colon: ver… |
| entrada 18 | sección 1, entrada 18 | Si tenés más de 30 años, hacé el control de cáncer de cuello uterino, preferentemente con el test de VPH | …Mama, cuello de útero y colon: ver… |
| entrada 18 | sección 1, entrada 19 | Desde los 45 o 50 años, hacé el control de cáncer colorrectal con el test de sangre oculta en materia fecal o con una colonoscopía | …Mama, cuello de útero y colon: ver… |
| entrada 18 | sección 1, entrada 23 | Hacete el test de Helicobacter pylori y, si da positivo, tratalo hasta erradicarlo | …Helicobacter pylori y tomografía de tórax de baja dosis: ver… |
| entrada 18 | sección 1, entrada 24 | Si fumás o fumaste mucho, hacete una tomografía de tórax de baja dosis una vez por año | …Helicobacter pylori y tomografía de tórax de baja dosis: ver… |
| entrada 18 | sección 1, entrada 39 | Si sos mujer y tenés más de 65 años, hacete una densitometría ósea; si ya pasaste la menopausia y tenés factores de riesgo de osteoporosis, no esperes a los 65 | …Densitometría ósea en mujeres de 65 años o más: ver… |
| entrada 18 | sección 1, entrada 31 | Si tuviste una situación de riesgo, hacete el test de VIH: es gratuito y confidencial | …Si tuviste conductas de riesgo, hacete los análisis (ver… |
| entrada 18 | entrada 7 | No te hagas un «PET-CT de cuerpo entero» ni un «panel de marcadores tumorales» si no tenés síntomas | …a dentro de los paquetes son los marcadores tumorales y las imágenes de cuerpo entero (ver… |
| entrada 18 | entrada 19 | No empieces a tomar medicación para bajar el ácido úrico si te salió alto en un chequeo pero nunca te dolió | …úrico alto sin haber tenido nunca dolor, o cálculos en la vesícula que nunca dolieron, ver… |
| entrada 18 | entrada 20 | No te saques la vesícula de forma preventiva porque un chequeo mostró cálculos que nunca te dolieron | …lculos en la vesícula que nunca dolieron, ver entrada 19 (ácido úrico alto sin síntomas) y… |
| entrada 19 | sección 16, entrada 9 | _(capítulo pendiente de adaptación)_ | …tiene tofos o tiene erosión ósea en las radiografías sí tiene que tomar la medicación (ver… |
| entrada 19 | sección 16, entrada 9 | _(capítulo pendiente de adaptación)_ | …Si de verdad vas a empezarlo, primero hacete el estudio de esa variante (ver… |
| entrada 21 | sección 16, entrada 8 | _(capítulo pendiente de adaptación)_ | …Lo de tomar más agua está en la… |
| entrada 22 | sección 5, entrada 33 | _(capítulo pendiente de adaptación)_ | …icar materiales y certificados, y por qué no conviene comprarlo como inversión, está en la… |
| entrada 22 | sección 5, entrada 34 | _(capítulo pendiente de adaptación)_ | …icar materiales y certificados, y por qué no conviene comprarlo como inversión, está en la… |
| entrada 22 | entrada 15 | No pagues adivinos, tarot ni horóscopos para tomar decisiones | …Pagar por adivinos está en la… |
| entrada 23 | entrada 24 | No gastes de más en casa, auto o círculo social para «subir un escalón entre los que te rodean» | …Lo que se gasta de más para estar «un escalón arriba de los demás» está en la… |
| entrada 24 | entrada 23 | No esperes que comprar cosas te mejore el ánimo o la imagen que tenés de vos | …El beneficio se calificó «medio» siguiendo el mismo criterio de la… |
| entrada 24 | sección 4, entrada 18 | Al elegir dónde vivir, poné primero cuánto tardás en llegar al trabajo y acortá el viaje | …Cómo priorizar al elegir dónde vivir está en la… |
| entrada 24 | entrada 23 | No esperes que comprar cosas te mejore el ánimo o la imagen que tenés de vos | …Comprar para manejar el ánimo está en la… |
| entrada 24 | sección 3, entrada 20 | No conviertas «cómo les va a los demás» en tu lectura diaria: limitá o cerrá las apps donde mirás la vida de gente de tu edad | …Compararte todo el tiempo en internet está en la… |
| entrada 25 | sección 4, entrada 10 | Poné a mano lo que necesitás y alejá lo que no querés tocar, en vez de confiar en aguantarte en el momento | …e ensayos con grupos asignados al azar es cambiar el entorno y la forma de plantearlo: ver… |
| entrada 25 | sección 4, entrada 1 | Escribí el «voy a hacerlo» como «a tal hora, en tal lugar, cuando pase esto, hago aquello» | …torno y la forma de plantearlo: ver sección 4, entrada 10 (alejá lo que no querés tocar) y… |
| entrada 26 | sección 1, entrada 23 | Hacete el test de Helicobacter pylori y, si da positivo, tratalo hasta erradicarlo | …qué estudiar está en la… |
| entrada 26 | entrada 20 | No te saques la vesícula de forma preventiva porque un chequeo mostró cálculos que nunca te dolieron | …Si un chequeo mostró cálculos en la vesícula que nunca dolieron, ver… |
| entrada 26 | sección 2, entrada 27 | Comé 5 porciones (unos 400 g) de frutas y verduras por día | …Para controlar el peso, lo que tiene evidencia es qué comés y cuánto: ver… |
| entrada 26 | sección 2, entrada 28 | Comé menos ultraprocesados (papas fritas de paquete, fideos instantáneos, productos de pastelería, comidas listas) | …comés y cuánto: ver sección 2, entrada 27 (comé 5 porciones de frutas y verduras por día),… |
| entrada 26 | sección 2, entrada 32 | Mantené el IMC entre 20 y 25; si tenés sobrepeso, bajá | …ciones de frutas y verduras por día), sección 2, entrada 28 (comé menos ultraprocesados) y… |
| entrada 26 | sección 28, entrada 1 | No controles el peso con dietas extremas, ayunos o vómitos provocados: si querés bajar, sumá movimiento | …Las dietas extremas, los ayunos extremos y provocarse el vómito son otro tema: ver… |
| entrada 27 | sección 3, entrada 9 | Andá a dormir a horario: no trasnoches por juegos, videos cortos ni pornografía | …Trasnochar está en la… |
| entrada 27 | sección 1, entrada 28 | Si tenés problemas de erección, primero hacete revisar el corazón y las arterias; no lo trates como algo «solo de la cama» | …a que la pornografía te haya traído problemas de erección, primero hacé los estudios de la… |
| entrada 27 | sección 9, entrada 4 | _(capítulo pendiente de adaptación)_ | …Las consecuencias legales de compartir o vender ese material están en la… |
| entrada 28 | sección 30, entrada 15 | _(capítulo pendiente de adaptación)_ | …Qué hacer en la familia cuando un hijo lo cuenta está en la… |
| entrada 29 | sección 2, entrada 16 | Hacé 30–60 minutos de ejercicios de fuerza por semana | …Cómo hacer ejercicio está en la… |
| entrada 29 | sección 2, entrada 11 | Llegá a 7000–8000 pasos por día, o sumá 150–300 minutos de caminata rápida por semana | …la sección 2, entrada 16 (hacé 30 a 60 minutos de ejercicios de fuerza por semana) y en la… |
| entrada 30 | sección 1, entrada 40 | Si te diagnosticaron osteoporosis, o te fracturaste con un golpe leve, pedile al médico la medicación para la osteoporosis y sostenela; el calcio solo no la reemplaza | …agnosticada o se fractura con una caída leve necesita medicación para la osteoporosis (ver… |
| entrada 30 | entrada 3 | No tomes vitamina D para vivir más si no te falta | …Si no te falta vitamina D, tomarla mucho tiempo no tiene beneficio (ver… |
| entrada 30 | entrada 21 | No dejes el calcio para prevenir cálculos renales | …e más», no comer menos calcio: el calcio de las comidas se sigue comiendo normalmente (ver… |
| entrada 30 | sección 13, entrada 41 | Si sospechás una fractura, no muevas más esa parte: sostenela quieta, poné frío hasta 20 minutos y no intentes acomodarla vos | …Qué hacer si te caíste y sospechás una fractura está en la… |

## libro/13-emergencias

| Origen | Referencia | Entrada a la que apunta | Contexto |
| --- | --- | --- | --- |
| encabezado | sección 8, entrada 3 | _(capítulo pendiente de adaptación)_ | …Las reglas básicas contra estafas y las siete estafas más comunes están en la… |
| encabezado | sección 8, entrada 32 | _(capítulo pendiente de adaptación)_ | …Si te piden plata a cambio de no difundir fotos íntimas o videos tuyos, mirá la… |
| encabezado | sección 8, entrada 2 | _(capítulo pendiente de adaptación)_ | …Ver… |
| encabezado | entrada 1 | Si alguien se desploma y no respira, apretale el pecho fuerte enseguida y pedí que otro llame al 107 o al 911 y busque un DEA | …**RCP y atragantamiento**: alguien se desploma y no respira (… |
| encabezado | entrada 2 | Agachate, hablale y llamá al 107 o al 911 si un adulto mayor se cae o alguien se desploma, sin levantarlo enseguida; si es un desconocido, como mínimo avisá a emergencias y, si te quedás, no lo muevas | …e desploma y no respira (entrada 1), un adulto mayor que se cae, no levantarlo enseguida (… |
| encabezado | entrada 26 | Si alguien se atraganta y no puede hablar, ponete detrás y hacé 5 golpes en la espalda y 5 compresiones abdominales; si se desploma, empezá la RCP | … que se cae, no levantarlo enseguida (entrada 2), alguien se atraganta y no puede hablar (… |
| encabezado | entrada 43 | Si un bebé de menos de 1 año se atraganta y no puede llorar, ponelo boca abajo y dale 5 golpes en la espalda, dalo vuelta y hacé 5 compresiones en el pecho, alternando; no le apretes la panza | …uien se atraganta y no puede hablar (entrada 26), un bebé se atraganta y no puede llorar (… |
| encabezado | entrada 44 | Si un bebé de menos de 1 año no responde y no respira normalmente, llamá al 107 o al 911 con el altavoz y hacele RCP de bebé: 30 compresiones y 2 respiraciones | …e hablar (entrada 26), un bebé se atraganta y no puede llorar (entrada 43), RCP en bebés (… |
| encabezado | entrada 3 | Llamá al 107 o al 911 enseguida si a alguien se le tuerce la boca, se le afloja un brazo o no puede hablar bien de golpe; no esperes ni lo lleves en auto vos | …**Urgencias médicas repentinas**: la boca torcida de golpe y un lado sin fuerza (… |
| encabezado | entrada 4 | Llamá al 107 o al 911 como si fuera un ACV también si de golpe todo gira y no se puede mantener en pie, ve doble, se le oscurece un ojo o no puede tocarse la nariz con el dedo | …da de golpe y un lado sin fuerza (entrada 3), mareo intenso y no poder mantenerse en pie (… |
| encabezado | entrada 5 | Andá a la guardia en el día, como si fuera un ACV, si un ojo se oscurece de golpe como si bajaran una cortina, aunque se te pase en unos minutos | … mareo intenso y no poder mantenerse en pie (entrada 4), un ojo que se oscurece de golpe (… |
| encabezado | entrada 6 | Andá a una guardia oftalmológica en el día si un ojo está hinchado, dolorido y rojo, ves un halo de colores alrededor de las luces y además te duele la cabeza y tenés náuseas | …pie (entrada 4), un ojo que se oscurece de golpe (entrada 5), un ojo hinchado y dolorido (… |
| encabezado | entrada 7 | Llamá al 107 o al 911 si tenés el pecho apretado, oprimido o con dolor más de 15 minutos y no se pasa; no te la aguantes ni manejes vos | …de golpe (entrada 5), un ojo hinchado y dolorido (entrada 6), dolor opresivo en el pecho (… |
| encabezado | entrada 8 | Llamá al 107 o al 911 y decí que «el dolor se mueve» si de golpe sentís un dolor tremendo, como si te desgarraran, que va del pecho a la espalda y a la cintura | …ido (entrada 6), dolor opresivo en el pecho (entrada 7), un dolor como si te desgarraran (… |
| encabezado | entrada 9 | Andá enseguida a la guardia y pedí una tomografía de cabeza si de golpe tenés «el peor dolor de cabeza de tu vida» y llega al máximo en menos de una hora | …rada 7), un dolor como si te desgarraran (entrada 8), el peor dolor de cabeza de tu vida (… |
| encabezado | entrada 10 | Llevá a hacer una tomografía de cabeza al adulto mayor que, de dos o tres semanas a unos meses después de un golpe en la cabeza, camina inestable, está lento, con mucho sueño o con un lado sin fuerza | …abeza de tu vida (entrada 9), un adulto mayor más lento después de un golpe en la cabeza (… |
| encabezado | entrada 11 | Consultá pronto si una pierna se hincha de golpe, se pone tirante y duele al tocarla; si además te falta el aire de golpe o te duele el pecho, llamá al 107 o al 911 enseguida | …s lento después de un golpe en la cabeza (entrada 10), una pierna que se hincha de golpe (… |
| encabezado | entrada 15 | Ante un sarpullido en todo el cuerpo que aparece de golpe junto con falta de aire o mareo, actuá como si fuera un shock anafiláctico: llamá enseguida al 107 o al 911 y decilo con esas palabras | … cabeza (entrada 10), una pierna que se hincha de golpe (entrada 11), shock anafiláctico (… |
| encabezado | entrada 16 | Si alguien convulsiona en el piso, despejá alrededor, ponelo de costado, mirá el reloj y no le metas nada en la boca | …a de golpe (entrada 11), shock anafiláctico (entrada 15), alguien convulsiona en el piso (… |
| encabezado | entrada 17 | Si una persona con diabetes de golpe tiembla, suda frío o habla trabado, dale primero 15 gramos de azúcar y volvé a medir a los 15 minutos | …guien convulsiona en el piso (entrada 16), una persona con diabetes que tiembla de golpe (… |
| encabezado | entrada 12 | Ante una hemorragia grave, apretá la herida con toda la fuerza; si en un brazo o una pierna no alcanza, poné un torniquete, y al mismo tiempo llamá al 107 o al 911 | …**Heridas y quemaduras**: una hemorragia grave, primero apretar la herida (… |
| encabezado | entrada 13 | Si te muerde o te rasguña un perro o un gato y te lastima la piel, lavá alternando agua con jabón y agua corriente durante 15 minutos, y ese mismo día andá a vacunarte | … una hemorragia grave, primero apretar la herida (entrada 12), mordedura de perro o gato (… |
| encabezado | entrada 14 | Si te quemás, poné la quemadura enseguida bajo agua corriente fresca durante 20 minutos y no le pongas pasta de dientes ni salsa de soja | …herida (entrada 12), mordedura de perro o gato (entrada 13), una quemadura con agua fría (… |
| encabezado | entrada 40 | Si un cuchillo, un hierro o un vidrio quedó clavado en el cuerpo, apretá alrededor del objeto para parar la sangre y no lo saques | …a 13), una quemadura con agua fría (entrada 14), no sacar un objeto clavado en el cuerpo (… |
| encabezado | entrada 41 | Si sospechás una fractura, no muevas más esa parte: sostenela quieta, poné frío hasta 20 minutos y no intentes acomodarla vos | …eto clavado en el cuerpo (entrada 40), ante una posible fractura, no mover más esa parte (… |
| encabezado | entrada 18 | Si alguien se electrocuta, cortá primero la corriente y después separalo de la fuente con un palo de madera seco o algo parecido; no lo agarres con las manos | …icaciones, incendios y accidentes**: alguien se electrocuta, primero cortar la corriente (… |
| encabezado | entrada 19 | Si suena el detector de monóxido de carbono, o varias personas de la casa tienen a la vez dolor de cabeza y náuseas, primero salí y después llamá | …cuta, primero cortar la corriente (entrada 18), suena el detector de monóxido de carbono (… |
| encabezado | entrada 20 | Si alguien tragó por error productos de limpieza, plaguicidas o remedios, no lo hagas vomitar: llevá el envase y andá enseguida al médico; si le salpicó en los ojos o la piel, enjuagá con mucha agua al menos 15 minutos | …ido de carbono (entrada 19), alguien traga productos de limpieza, plaguicidas o remedios (… |
| encabezado | entrada 21 | Si un ácido, un álcali u otro químico te salpica el cuerpo, sacate enseguida la ropa manchada, enjuagá con mucha agua corriente y, en los ojos, abrí bien los párpados; no te vayas hasta haber enjuagado el tiempo suficiente | …productos de limpieza, plaguicidas o remedios (entrada 20), un químico salpica el cuerpo (… |
| encabezado | entrada 22 | Si con calor alguien se marea, tiene náuseas, deja de transpirar o está confundido, llevalo enseguida a la sombra, sacale ropa y mojalo para enfriarlo; si no está consciente, no le des agua y llamá al 107 o al 911 | …ios (entrada 20), un químico salpica el cuerpo (entrada 21), mareo con calor y sin sudar (… |
| encabezado | entrada 23 | Si la persona con golpe de calor está consciente, que tome de a poco y seguido agua fresca con un poco de sal o una bebida deportiva; que no tome de golpe, ni alcohol, ni bebidas muy azucaradas | …trada 21), mareo con calor y sin sudar (entrada 22), agua con sal para el golpe de calor (… |
| encabezado | entrada 24 | En un incendio, avanzá pegado al piso, tocá la puerta antes de abrirla y no la abras si quema; bajá por la escalera, no por el ascensor, y una vez afuera no vuelvas | …agua con sal para el golpe de calor (entrada 23), en un incendio, avanzar pegado al piso (… |
| encabezado | entrada 25 | Si ves que alguien se ahoga, primero pedí ayuda a los gritos y llamá al 911 (o al 106 en ríos, lagos y costas), alcanzale un palo largo o tirale algo que flote, y no te metas al agua | …trada 23), en un incendio, avanzar pegado al piso (entrada 24), ver que alguien se ahoga (… |
| encabezado | entrada 30 | Ante un sismo, fijate primero en qué edificio estás: en uno construido con normas sismorresistentes quedate y protegete ahí; en una casa vieja que puede derrumbarse, si la puerta está a pocos pasos, salí | … ver que alguien se ahoga (entrada 25), en un sismo, primero mirar en qué edificio estás (… |
| encabezado | entrada 27 | Quedate en el lugar o al lado del auto si te perdés o se te rompe el auto en la Puna, un desierto o una zona sin gente: primero avisá dónde estás, después buscá sombra y abrigo, ahorrá agua y no camines sin rumbo | …**Al aire libre**: si te perdés en una zona aislada, quedarte en el lugar (… |
| encabezado | entrada 28 | Si alguien tiembla, habla arrastrando las palabras y camina tambaleándose, es hipotermia: sacale la ropa mojada, envolvelo, calentá primero el tronco y dale algo caliente y dulce, nunca alcohol | …ona aislada, quedarte en el lugar (entrada 27), temblores y habla confusa por hipotermia (… |
| encabezado | entrada 29 | Si te muerde una serpiente, sentate y no te muevas, sacate anillos y reloj y andá lo antes posible a un hospital que tenga suero antiofídico; no cortes, no chupes, no ates fuerte | …abla confusa por hipotermia (entrada 28), no cortar ni chupar una mordedura de serpiente (… |
| encabezado | entrada 31 | Si te cruzás con un oso, un jabalí o una jauría de perros, no corras, no grites, no lo mires fijo y alejate despacio de costado | …ortar ni chupar una mordedura de serpiente (entrada 29), osos, jabalíes, perros salvajes (… |
| encabezado | entrada 32 | Si te agarra una tormenta eléctrica al aire libre, metete en un auto de techo rígido o en un edificio, y alejate de cumbres y filos, árboles aislados, el agua y los metales | …rada 29), osos, jabalíes, perros salvajes (entrada 31), tormenta eléctrica al aire libre (… |
| encabezado | entrada 33 | Al subir a la altura, subí de a poco según la altura a la que dormís, y si los síntomas empeoran, bajá; no te la aguantes | …(entrada 31), tormenta eléctrica al aire libre (entrada 32), subir despacio en la altura (… |
| encabezado | entrada 34 | Si se te prende una garrapata, sacala con una pinza de punta fina tomándola pegada a la piel y tirando parejo; no le pongas aceite ni la quemes | …ire libre (entrada 32), subir despacio en la altura (entrada 33), una garrapata prendida (… |
| encabezado | entrada 35 | Herví toda el agua que tomes al aire libre: con un minuto de hervor alcanza, y no hace falta hervir más por estar en la altura | …a altura (entrada 33), una garrapata prendida (entrada 34), hervir el agua al aire libre (… |
| encabezado | entrada 36 | Si en un lugar aislado un desconocido te pide plata, dásela, no pelees, fijate cómo es y, cuando estés a salvo, denuncialo | …**Peleas y después de ayudar**: te piden plata en un lugar aislado (… |
| encabezado | entrada 37 | Si te cruzás con una pelea entre varios, alejate y seguí; no te metas a separar, no te quedes mirando ni levantes nada del piso; para llamar al 911, primero ponete a una distancia segura | …*: te piden plata en un lugar aislado (entrada 36), te cruzás con una pelea entre varios (… |
| encabezado | entrada 39 | Reclamá primero a quien creó el peligro, y si hace falta a quien ayudaste, si te lastimaste o perdiste plata por ayudar a alguien | …ruzás con una pelea entre varios (entrada 37), te lastimaste o perdiste plata por ayudar (… |
| encabezado | entrada 38 | Si pudiste haber estado expuesto al VIH, andá a buscar la profilaxis dentro de las 72 horas, cuanto antes mejor | …**Violencia sexual y exposición al VIH**: una posible exposición al VIH (… |
| encabezado | entrada 42 | Después de una violación, primero ponete en un lugar seguro y pedí ayuda; si podés, antes de que te revisen no te bañes, no laves la ropa ni ordenes el lugar, y andá a un hospital dentro de las 72 horas | …xposición al VIH**: una posible exposición al VIH (entrada 38), después de una violación (… |
| entrada 1 | entrada 44 | Si un bebé de menos de 1 año no responde y no respira normalmente, llamá al 107 o al 911 con el altavoz y hacele RCP de bebé: 30 compresiones y 2 respiraciones | …- Notas: Los chicos de menos de 1 año se atienden distinto y hay que darles aire: ver… |
| entrada 2 | sección 1, entrada 13 | Después de los 60, entrená el equilibrio y la fuerza de las piernas, y adaptá el baño y las escaleras de tu casa | …Prevenir caídas: ver… |
| entrada 2 | entrada 10 | Llevá a hacer una tomografía de cabeza al adulto mayor que, de dos o tres semanas a unos meses después de un golpe en la cabeza, camina inestable, está lento, con mucho sueño o con un lado sin fuerza | …Síntomas que aparecen tarde después de un golpe en la cabeza: ver… |
| entrada 2 | entrada 39 | Reclamá primero a quien creó el peligro, y si hace falta a quien ayudaste, si te lastimaste o perdiste plata por ayudar a alguien | …Plata después de lastimarte por ayudar: ver… |
| entrada 2 | sección 8, entrada 16 | _(capítulo pendiente de adaptación)_ | …Qué hacer si te escrachan en redes: ver… |
| entrada 4 | entrada 3 | Llamá al 107 o al 911 enseguida si a alguien se le tuerce la boca, se le afloja un brazo o no puede hablar bien de golpe; no esperes ni lo lleves en auto vos | …A las tres pruebas de «cara torcida, levantar los brazos, hablar» (… |
| entrada 6 | entrada 5 | Andá a la guardia en el día, como si fuera un ACV, si un ojo se oscurece de golpe como si bajaran una cortina, aunque se te pase en unos minutos | …Un ojo que deja de ver sin dolor ni enrojecimiento es otra cosa: ver… |
| entrada 6 | sección 6, entrada 16 | No compres anteojos con filtro de luz azul para «cuidar la vista» ni creas que «unos meses frente a la pantalla te arruinan los ojos», pero tratá como urgencia el ojo hinchado, doloroso y rojo | …Si los anteojos con filtro de luz azul sirven, ver… |
| entrada 10 | sección 1, entrada 13 | Después de los 60, entrená el equilibrio y la fuerza de las piernas, y adaptá el baño y las escaleras de tu casa | …Prevenir caídas: ver… |
| entrada 16 | entrada 2 | Agachate, hablale y llamá al 107 o al 911 si un adulto mayor se cae o alguien se desploma, sin levantarlo enseguida; si es un desconocido, como mínimo avisá a emergencias y, si te quedás, no lo muevas | …lo legal con desconocidos está en la… |
| entrada 18 | entrada 1 | Si alguien se desploma y no respira, apretale el pecho fuerte enseguida y pedí que otro llame al 107 o al 911 y busque un DEA | …Si una vez separada de la corriente la persona no respira, se hace RCP como en la… |
| entrada 19 | sección 1, entrada 3 | Poné un detector de humo, y si en invierno calefaccionás con gas, leña o carbón, sumá un detector de monóxido de carbono | …Cómo instalar el detector: ver… |
| entrada 20 | entrada 19 | Si suena el detector de monóxido de carbono, o varias personas de la casa tienen a la vez dolor de cabeza y náuseas, primero salí y después llamá | …Monóxido de carbono: ver… |
| entrada 20 | entrada 14 | Si te quemás, poné la quemadura enseguida bajo agua corriente fresca durante 20 minutos y no le pongas pasta de dientes ni salsa de soja | …Quemaduras: ver… |
| entrada 20 | entrada 21 | Si un ácido, un álcali u otro químico te salpica el cuerpo, sacate enseguida la ropa manchada, enjuagá con mucha agua corriente y, en los ojos, abrí bien los párpados; no te vayas hasta haber enjuagado el tiempo suficiente | …Si un ácido o un álcali te salpica el cuerpo, cómo sacarte la ropa y cuánto enjuagar, ver… |
| entrada 21 | entrada 20 | Si alguien tragó por error productos de limpieza, plaguicidas o remedios, no lo hagas vomitar: llevá el envase y andá enseguida al médico; si le salpicó en los ojos o la piel, enjuagá con mucha agua al menos 15 minutos | …Productos de limpieza de la casa e ingestión: ver… |
| entrada 21 | sección 19, entrada 9 | _(capítulo pendiente de adaptación)_ | …Protección y controles médicos antes de empezar a trabajar: ver… |
| entrada 21 | sección 19, entrada 10 | _(capítulo pendiente de adaptación)_ | …Protección y controles médicos antes de empezar a trabajar: ver… |
| entrada 23 | entrada 22 | Si con calor alguien se marea, tiene náuseas, deja de transpirar o está confundido, llevalo enseguida a la sombra, sacale ropa y mojalo para enfriarlo; si no está consciente, no le des agua y llamá al 107 o al 911 | …La… |
| entrada 25 | sección 1, entrada 12 | Con chicos cerca del agua, no les saques la vista de encima; para navegar o nadar en aguas abiertas, usá chaleco salvavidas | …cómo prevenirlo está en la… |
| entrada 25 | sección 1, entrada 41 | Antes de pisar hielo natural, hacé un agujero y medí el espesor: con menos de 15 centímetros no subas, y no te acerques al hielo de los ríos ni a los agujeros de pesca | …cómo prevenirlo está en la… |
| entrada 26 | entrada 43 | Si un bebé de menos de 1 año se atraganta y no puede llorar, ponelo boca abajo y dale 5 golpes en la espalda, dalo vuelta y hacé 5 compresiones en el pecho, alternando; no le apretes la panza | …A los chicos de menos de 1 año no se les aprieta la panza sino el pecho: ver… |
| entrada 31 | entrada 13 | Si te muerde o te rasguña un perro o un gato y te lastima la piel, lavá alternando agua con jabón y agua corriente durante 15 minutos, y ese mismo día andá a vacunarte | …Si un perro te muerde, lavá y vacunate como en la… |
| entrada 31 | entrada 13 | Si te muerde o te rasguña un perro o un gato y te lastima la piel, lavá alternando agua con jabón y agua corriente durante 15 minutos, y ese mismo día andá a vacunarte | …Mordeduras de perro: como en la… |
| entrada 36 | sección 8, entrada 32 | _(capítulo pendiente de adaptación)_ | …ata para no difundir fotos íntimas o videos tuyos, es al revés: no hay que darle nada, ver… |
| entrada 36 | sección 9, entrada 26 | _(capítulo pendiente de adaptación)_ | …No cuentes con una cachiporra, una picana o un cuchillo para defenderte: ver… |
| entrada 37 | sección 8, entrada 10 | _(capítulo pendiente de adaptación)_ | …Si te ves metido en un conflicto, ver… |
| entrada 37 | entrada 36 | Si en un lugar aislado un desconocido te pide plata, dásela, no pelees, fijate cómo es y, cuando estés a salvo, denuncialo | …Si un desconocido te pide plata, ver… |
| entrada 37 | entrada 39 | Reclamá primero a quien creó el peligro, y si hace falta a quien ayudaste, si te lastimaste o perdiste plata por ayudar a alguien | …Plata después de lastimarte por ayudar: ver… |
| entrada 38 | sección 1, entrada 30 | Usá preservativo durante toda la relación sexual y no compartas agujas | …la prevención de todos los días y los análisis están en la… |
| entrada 38 | sección 1, entrada 31 | Si tuviste una situación de riesgo, hacete el test de VIH: es gratuito y confidencial | …la prevención de todos los días y los análisis están en la… |
| entrada 39 | sección 7, entrada 3 | _(capítulo pendiente de adaptación)_ | …Si no podés pagar un abogado, buscá patrocinio jurídico gratuito: ver… |
| entrada 39 | sección 19, entrada 14 | _(capítulo pendiente de adaptación)_ | …Indemnizaciones por accidentes de trabajo: ver… |
| entrada 39 | sección 19, entrada 15 | _(capítulo pendiente de adaptación)_ | …Indemnizaciones por accidentes de trabajo: ver… |
| entrada 40 | sección 24, entrada 7 | _(capítulo pendiente de adaptación)_ | …no te quedes en la fila de la ventanilla (ver… |
| entrada 40 | entrada 12 | Ante una hemorragia grave, apretá la herida con toda la fuerza; si en un brazo o una pierna no alcanza, poné un torniquete, y al mismo tiempo llamá al 107 o al 911 | …Cómo apretar una hemorragia grave y poner un torniquete: ver… |
| entrada 41 | sección 2, entrada 1 | Dejá de fumar, y cuanto antes, mejor | …Mientras el hueso no se suelda, no fumes: ver… |
| entrada 41 | sección 6, entrada 30 | No esperes que cargarte de calcio o tomar caldo de huesos después de una fractura haga que el hueso suelde más rápido | …No esperes que tomar mucho calcio o caldo de huesos acelere la consolidación: ver… |
| entrada 41 | entrada 2 | Agachate, hablale y llamá al 107 o al 911 si un adulto mayor se cae o alguien se desploma, sin levantarlo enseguida; si es un desconocido, como mínimo avisá a emergencias y, si te quedás, no lo muevas | …hay que hacer al mover a un adulto mayor que se cayó y puede tener una fractura está en la… |
| entrada 41 | entrada 11 | Consultá pronto si una pierna se hincha de golpe, se pone tirante y duele al tocarla; si además te falta el aire de golpe o te duele el pecho, llamá al 107 o al 911 enseguida | …Si después de un yeso o de estar en cama se hincha una pierna, pensá en un coágulo: ver… |
| entrada 41 | sección 24, entrada 9 | _(capítulo pendiente de adaptación)_ | …nto conviene una evaluación de discapacidad o tramitar el certificado de discapacidad: ver… |
| entrada 41 | sección 24, entrada 10 | _(capítulo pendiente de adaptación)_ | …nto conviene una evaluación de discapacidad o tramitar el certificado de discapacidad: ver… |
| entrada 42 | entrada 38 | Si pudiste haber estado expuesto al VIH, andá a buscar la profilaxis dentro de las 72 horas, cuanto antes mejor | …si corresponde la decide el médico: ver… |
| entrada 42 | sección 8, entrada 41 | _(capítulo pendiente de adaptación)_ | …Grabar conversaciones: ver… |
| entrada 42 | sección 8, entrada 32 | _(capítulo pendiente de adaptación)_ | …después te amenazan con fotos o con denunciarte para sacarte plata, también es delito: ver… |
| entrada 43 | entrada 26 | Si alguien se atraganta y no puede hablar, ponete detrás y hacé 5 golpes en la espalda y 5 compresiones abdominales; si se desploma, empezá la RCP | …A los chicos de más de 1 año y a los adultos se les aprieta la panza: ver… |
| entrada 43 | entrada 44 | Si un bebé de menos de 1 año no responde y no respira normalmente, llamá al 107 o al 911 con el altavoz y hacele RCP de bebé: 30 compresiones y 2 respiraciones | …Qué hacer si el bebé deja de responder: ver… |
| entrada 44 | entrada 1 | Si alguien se desploma y no respira, apretale el pecho fuerte enseguida y pedí que otro llame al 107 o al 911 y busque un DEA | …Hay tres diferencias con la… |
| entrada 44 | entrada 43 | Si un bebé de menos de 1 año se atraganta y no puede llorar, ponelo boca abajo y dale 5 golpes en la espalda, dalo vuelta y hacé 5 compresiones en el pecho, alternando; no le apretes la panza | …e por atragantamiento, antes de dar aire mirá la boca y sacá el objeto solo si lo ves: ver… |

## libro/28-no-arruinar-el-cuerpo-por-la-estetica

| Origen | Referencia | Entrada a la que apunta | Contexto |
| --- | --- | --- | --- |
| entrada 1 | sección 2, entrada 32 | Mantené el IMC entre 20 y 25; si tenés sobrepeso, bajá | …La relación entre IMC y mortalidad está en la… |
| entrada 3 | entrada 2 | Antes de una inyección, unos hilos o una cirugía estética, chequeá dos cosas: que el lugar esté habilitado por la autoridad sanitaria y que quien te atiende sea médico matriculado | …Antes de hacerte nada, revisá lo de la… |
| entrada 3 | entrada 2 | Antes de una inyección, unos hilos o una cirugía estética, chequeá dos cosas: que el lugar esté habilitado por la autoridad sanitaria y que quien te atiende sea médico matriculado | …la referencia a los requisitos chinos de habilitación remite ahora a la… |
| entrada 5 | entrada 4 | No compres pastillas, cafés, caramelos ni «tés» para adelgazar que prometen resultados rápidos | …Se reconocen igual que en la… |
| entrada 6 | entrada 5 | No uses esteroides anabólicos («inyecciones para músculo», «pastillas») para ganar masa muscular | …Los esteroides y las hormonas sexuales de las… |
| entrada 6 | entrada 7 | Usá medicamentos con hormonas sexuales solo con receta médica y controles periódicos; no los compres por internet ni subas la dosis por tu cuenta | …Los esteroides y las hormonas sexuales de las… |
| entrada 9 | entrada 2 | Antes de una inyección, unos hilos o una cirugía estética, chequeá dos cosas: que el lugar esté habilitado por la autoridad sanitaria y que quien te atiende sea médico matriculado | …Se verifica igual que en la… |
| entrada 9 | sección 24, entrada 12 | _(capítulo pendiente de adaptación)_ | …Sobre cuánto cubre la cobertura de salud en tratamientos dentales, ver… |

## libro/34-remedios-de-botiquin

| Origen | Referencia | Entrada a la que apunta | Contexto |
| --- | --- | --- | --- |
| encabezado | sección 13, entrada 20 | Si alguien tragó por error productos de limpieza, plaguicidas o remedios, no lo hagas vomitar: llevá el envase y andá enseguida al médico; si le salpicó en los ojos o la piel, enjuagá con mucha agua al menos 15 minutos | …si alguien tragó un remedio o un producto de limpieza por error está en la sección 13 (ver… |
| encabezado | sección 16, entrada 1 | _(capítulo pendiente de adaptación)_ | … los remedios de una enfermedad crónica, como indicó el médico, está en la sección 16 (ver… |
| encabezado | sección 28, entrada 6 | Si vas a tomar un medicamento para adelgazar, conseguí la receta con un médico; no lo compres en sitios que te lo mandan sin receta | …r por internet remedios que necesitan receta exige que alguien revise la receta antes (ver… |
| entrada 2 | sección 20, entrada 8 | _(capítulo pendiente de adaptación)_ | …Un bebé de menos de 3 meses con fiebre tiene que ir directo al médico (ver… |
| entrada 4 | entrada 1 | Leé la fórmula antes de tomar juntos dos antigripales o dos analgésicos: solo uno puede tener paracetamol | …fantiles también traen paracetamol, y si además le das un antifebril estás repitiendo (ver… |
| entrada 4 | sección 20, entrada 6 | _(capítulo pendiente de adaptación)_ | …ncionó mejor que el placebo, pero a un bebé de menos de 1 año no se le puede dar miel (ver… |
| entrada 5 | sección 27, entrada 5 | _(capítulo pendiente de adaptación)_ | …La aspirina en dosis baja para prevenir la preeclampsia está en otra sección (ver… |
| entrada 10 | sección 13, entrada 20 | Si alguien tragó por error productos de limpieza, plaguicidas o remedios, no lo hagas vomitar: llevá el envase y andá enseguida al médico; si le salpicó en los ojos o la piel, enjuagá con mucha agua al menos 15 minutos | … no los pases a pastilleros ni a otros frascos, y ponelos donde los chicos no lleguen (ver… |
| entrada 10 | entrada 7 | No le pidas antibióticos al médico por un resfrío común | …Tampoco tomes por tu cuenta los antibióticos que te sobraron (ver… |
| entrada 11 | entrada 1 | Leé la fórmula antes de tomar juntos dos antigripales o dos analgésicos: solo uno puede tener paracetamol | …Mientras tomes paracetamol tampoco tomes alcohol (ver… |

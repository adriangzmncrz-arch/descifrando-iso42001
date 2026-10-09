---
description: Qué es un sistema de gestión de inteligencia artificial (SGIA) según ISO/IEC 42001, en qué se distingue del gobierno de IA o de un comité de ética, cómo se organiza con el ciclo PHVA y qué cambia en el día a día.
---

# ¿Qué es un SGIA?

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-school-outline: Fundamentos</span>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: 14 min de lectura</span>
</div>

!!! abstract "En una frase"
    Un sistema de gestión de inteligencia artificial, SGIA (*AI management system*, AIMS), es la manera ordenada en que una organización decide qué quiere lograr con la IA, define reglas y responsables para lograrlo de forma responsable, comprueba que funciona y corrige lo que no, de modo que un tercero pueda verificarlo.

## Primero lo primero: ¿qué es un sistema de gestión?

La palabra "sistema" confunde a mucha gente. En ISO, un sistema de gestión **no es un software** ni una plataforma que se compra. Es la forma organizada en que una empresa fija hacia dónde va (su política y sus objetivos) y se asegura de llegar ahí (con procesos, responsables, mediciones y correcciones). Puede vivir en documentos, hojas de cálculo, actas y hábitos de trabajo; las herramientas ayudan, pero no son el sistema.

!!! tip "Analogía: la taquería que se vuelve cadena"
    Una taquería funciona de maravilla porque el dueño está ahí todos los días: prueba la salsa, revisa la carne y conoce a los proveedores. Todo vive en su cabeza. Cuando abre la quinta sucursal ya no puede estar en todas, y para que el pastor sepa igual en Satélite que en Coyoacán necesita algo más que la receta:

    - **Rumbo:** qué tipo de taquería quiere ser y qué no negocia (higiene, sabor, trato).
    - **Responsables:** quién manda en cada sucursal, quién compra, quién revisa.
    - **Procesos:** cómo se recibe la carne, cómo se marina, cómo se limpia la plancha.
    - **Metas medibles:** tiempo de servicio, mermas, quejas por cada mil órdenes.
    - **Verificación:** visitas sorpresa, cliente misterioso, revisión de bitácoras de temperatura.
    - **Corrección:** cuando una sucursal falla, se averigua por qué y se cambia el proceso, no solo se regaña al taquero.

    Eso es un sistema de gestión: nadie lo llamaría "software", y es lo que permite crecer sin perder el control. Un SGIA hace lo mismo con los sistemas de IA que la organización usa, desarrolla u ofrece.

Si vienes de ISO 27001 o ISO 9001, ya conoces la lógica: la norma no te dice *qué* política escribir ni *cuál* herramienta comprar, sino qué piezas debe tener tu sistema y cómo se conectan.

## Entonces, ¿qué es un SGIA?

Un SGIA es un sistema de gestión cuyo objeto son los **sistemas de inteligencia artificial**: los que la organización desarrolla, los que ofrece a sus clientes y los que usa para operar. ISO/IEC 42001 define los requisitos de ese sistema para que la organización pueda trabajar con IA de manera responsable, cumplir sus obligaciones y responder a lo que esperan de ella sus clientes, reguladores y la sociedad.

¿Por qué hace falta un sistema específico, si ya existen sistemas de gestión de seguridad o de calidad? Porque la IA tiene rasgos que los otros sistemas no cubren bien:

- **Aprende de datos** en lugar de seguir solo reglas escritas, así que su comportamiento depende de la calidad y representatividad de esos datos (lo explicamos en [IA para profesionales de GRC](ia-para-profesionales-grc.md)).
- **Puede cambiar con el tiempo**: un modelo que funcionaba bien al lanzarse puede degradarse cuando cambia el mundo.
- **Sus decisiones caen sobre personas** que muchas veces están fuera de la organización: a quien le niegan un crédito o el contribuyente que recibe una respuesta equivocada sobre su declaración.
- **Las responsabilidades se reparten** entre quien desarrolla el modelo, quien lo integra, quien lo despliega y quien lo usa. Por eso la norma pide desde el inicio que la organización determine sus **roles** frente a cada sistema de IA ([4.1](../clausulas/c4-contexto.md#c-4-1); profundizamos en [Roles en la IA](roles-en-la-ia.md)).

De ahí salen las piezas que distinguen a un SGIA de un SGSI: una evaluación de riesgos que mira consecuencias para la organización, las personas y la sociedad ([6.1.2](../clausulas/c6-planificacion.md#c-6-1-2)); una **evaluación de impacto del sistema de IA** (*AI system impact assessment*) separada ([6.1.4](../clausulas/c6-planificacion.md#c-6-1-4)); controles sobre el ciclo de vida y los datos; y transparencia hacia usuarios y afectados. La diferencia entre riesgo e impacto merece su propia página: [Riesgo frente a impacto](riesgo-vs-impacto.md).

!!! info "Un SGIA no certifica que tu IA sea buena"
    La certificación ISO/IEC 42001 dice que la organización tiene un sistema de gestión que cumple la norma y que funciona. No garantiza que cada modelo sea preciso, justo o legal. Es como la certificación de un sistema de calidad: no promete que nunca saldrá un producto defectuoso, sino que hay un sistema serio para prevenirlo, detectarlo y corregirlo.

## SGIA, gobierno de IA y comité de ética: parientes, no sinónimos

En las conversaciones de dirección se mezclan términos que no significan lo mismo. Esta tabla ayuda a ordenarlos:

| Concepto | Qué es | Qué aporta | Qué le falta para ser un SGIA |
|---|---|---|---|
| **Gobierno de IA** (*AI governance*) | La forma en que el consejo y la alta dirección dirigen, supervisan y rinden cuentas sobre la IA | Rumbo, apetito de riesgo, rendición de cuentas al más alto nivel | Por sí solo no baja a procesos, registros ni ciclos de verificación. El SGIA es una de las formas más sólidas de aterrizarlo |
| **Comité de ética de IA** | Un órgano colegiado que delibera sobre casos o usos sensibles | Juicio multidisciplinario y legitimidad | Sin criterios, procesos, metas, registros, auditoría ni mejora, es un foro de discusión, no un sistema |
| **Política de uso de IA generativa** | Un documento que dice qué se vale y qué no | Reglas claras para el personal | Es una pieza del sistema; si nadie mide si se cumple, se queda en papel |
| **Programa de cumplimiento regulatorio** | Inventario de obligaciones legales y su atención | Evita sanciones | Mira la ley, no necesariamente los impactos ni los objetivos propios; suele ser reactivo |
| **Marco voluntario** (p. ej., el [NIST AI RMF](../integracion/nist-ai-rmf.md)) | Guía de buenas prácticas y vocabulario común | Estructura de funciones y prácticas útiles | No es certificable ni exige un ciclo auditado de mejora |

En nuestra lectura, la relación es de capas: el **gobierno** decide el rumbo y el nivel de riesgo aceptable; el **SGIA** convierte ese rumbo en procesos, responsables y evidencia; y los **comités**, las **políticas** y los **marcos** son piezas que viven dentro del sistema. La norma ISO/IEC 38507 trata las implicaciones de la IA para el gobierno de las organizaciones y es una buena compañera de lectura (ver [La familia de normas de IA](familia-de-normas.md)).

!!! example "Caso: Monarca Crédito — el Comité de Modelos antes y después"
    La fintech Monarca Crédito ya tenía un **Comité de Modelos** que aprobaba cada nueva versión de Score Monarca. Funcionaba, pero dependía de la memoria de sus integrantes: no había criterios escritos para aprobar, las actas no registraban qué pruebas de sesgo se revisaron y nadie daba seguimiento a los acuerdos.

    Con el SGIA, el comité no desaparece: se vuelve un rol formal, con mandato escrito, criterios de aprobación ligados a los criterios de riesgo de IA, actas que sirven de evidencia y acuerdos con seguimiento.

## La estructura armonizada: un esqueleto que ya conoces

ISO/IEC 42001 usa la **estructura armonizada** (*harmonized structure*) que comparten las normas ISO de sistemas de gestión, como ISO/IEC 27001, ISO 9001 o ISO 22301: mismos capítulos, en el mismo orden. Eso permite integrar el SGIA con un SGSI o un sistema de calidad que ya tengas.

- **Cláusulas 1 a 3:** alcance de la norma, referencias normativas y términos. Ojo con la cláusula 2: ISO/IEC 22989, la norma de conceptos y terminología de IA, es **referencia normativa**, así que su vocabulario forma parte de cómo se interpretan los requisitos.
- **Cláusulas 4 a 10:** los requisitos certificables del sistema de gestión.
- **Anexos:** el **A** trae 38 controles de referencia agrupados en 9 temas; el **B** da guía de implementación para cada control; el **C** sugiere objetivos y fuentes de riesgo de IA; el **D** habla del uso del SGIA en distintos sectores y de su integración con otras normas. Los explicamos en [Anexos B, C y D](../anexos-b-c-d.md) y en el [Anexo A](../anexo-a/index.md).

Cada cláusula responde una pregunta sencilla. Así se ve con el despacho **Contadores Alameda**, de Querétaro, que solo usa IA de terceros:

| Cláusula | Pregunta que responde | Cómo se ve en Contadores Alameda |
|---|---|---|
| [4 Contexto](../clausulas/c4-contexto.md) | ¿Quiénes somos frente a la IA y qué abarca el sistema? | Usan IA de terceros; el alcance cubre sus tres sistemas desde la oficina de Querétaro |
| [5 Liderazgo](../clausulas/c5-liderazgo.md) | ¿La dirección lo respalda y quién responde? | La socia directora firma la política de IA; el gerente de TI es responsable del SGIA |
| [6 Planificación](../clausulas/c6-planificacion.md) | ¿Qué puede salir mal, a quién afecta y qué nos proponemos? | Evalúan el riesgo de que el chatbot Alma dé plazos fiscales equivocados y fijan objetivos medibles |
| [7 Apoyo](../clausulas/c7-apoyo.md) | ¿Tenemos personas, recursos, comunicación y documentos? | Capacitan a los 58 colaboradores en uso aceptable de IA generativa |
| [8 Operación](../clausulas/c8-operacion.md) | ¿Hacemos lo que planeamos, todos los días? | Cada herramienta nueva pasa por aprobación; la base de conocimiento de Alma se revisa cada mes |
| [9 Evaluación del desempeño](../clausulas/c9-evaluacion-del-desempeno.md) | ¿Funciona? ¿Cómo lo sabemos? | Miden respuestas erróneas de Alma, hacen auditoría interna y revisión por la dirección |
| [10 Mejora](../clausulas/c10-mejora.md) | ¿Qué corregimos y qué aprendemos? | Tras el incidente de la nómina pegada en un chatbot gratuito, analizan causas y cambian controles |

!!! warning "El Anexo B también está marcado como normativo"
    Mucha gente se sorprende: en la norma, el Anexo B aparece como **normativo**, aunque su contenido es guía de implementación. En la práctica, eso no te obliga a seguir cada recomendación ni a justificar en la Declaración de Aplicabilidad si la seguiste o no; puedes adaptarla o ampliarla. Lo que sí debes justificar es la inclusión o exclusión de cada **control** del Anexo A.

## El ciclo PHVA aplicado al SGIA

Todas las normas de sistemas de gestión giran alrededor del ciclo **Planificar, Hacer, Verificar, Actuar** (PHVA, *Plan-Do-Check-Act*). La norma no asigna oficialmente cada cláusula a una fase, pero la correspondencia que ves abajo es la lectura habitual de la estructura armonizada y ayuda mucho a entender el flujo.

<figure class="dx-infografia">
--8<-- "docs/assets/infografias/phva-sgia.svg"
<figcaption>Las cláusulas 4 a 10 de ISO/IEC 42001 ubicadas en el ciclo PHVA, con el liderazgo al centro. Toca una cláusula para ir a su explicación.</figcaption>
</figure>

??? note "Descripción textual de la infografía"
    La infografía muestra un anillo de cuatro segmentos que gira en el sentido de las manecillas del reloj alrededor de un círculo central con la cláusula 5, Liderazgo (alta dirección, política y roles).

    - **Planificar** (arriba a la izquierda): cláusula 4, Contexto (partes interesadas, roles y alcance); cláusula 6, Planificación (riesgos, impacto, Declaración de Aplicabilidad y objetivos); y cláusula 7, Apoyo, marcada como habilitadora de todas las fases (recursos, competencia, documentos).
    - **Hacer** (arriba a la derecha): cláusula 8, Operación, con 8.1 control operacional, 8.2 evaluación de riesgos, 8.3 tratamiento de riesgos y 8.4 evaluación de impacto.
    - **Verificar** (abajo a la derecha): cláusula 9, Evaluación del desempeño, con 9.1 seguimiento y medición, 9.2 auditoría interna y 9.3 revisión por la dirección.
    - **Actuar** (abajo a la izquierda): cláusula 10, Mejora, con 10.1 mejora continua y 10.2 no conformidad y acción correctiva.

    Arriba, una flecha indica lo que entra al ciclo: el contexto, las partes interesadas y los requisitos aplicables. Abajo, otra flecha indica lo que sale: una IA responsable y objetivos de IA cumplidos.

Veamos cada fase con Monarca Crédito, la fintech que desarrolla su propio modelo de *scoring*:

**Planificar.** Monarca entiende su contexto (es una SOFOM E.N.R. que presta 100% en app, muchos de sus solicitantes tienen poco historial crediticio y sus inversionistas piden certificación), define su rol (desarrolla Score Monarca y lo usa para decidir) y fija el alcance. Luego establece criterios de riesgo de IA, define cómo evaluará riesgos e impactos, elige controles, produce la Declaración de Aplicabilidad (*Statement of Applicability*, SoA) y fija objetivos, por ejemplo, que la diferencia en tasa de aprobación entre mujeres y hombres con perfil de riesgo similar no supere un umbral acordado. La cláusula 7 asegura que existan las personas competentes, los recursos y los documentos para todo lo demás.

**Hacer.** Se ejecuta lo planeado: evaluación de riesgos de la nueva versión del modelo ([8.2](../clausulas/c8-operacion.md#c-8-2)), plan de tratamiento ([8.3](../clausulas/c8-operacion.md#c-8-3)), evaluación de impacto sobre los solicitantes ([8.4](../clausulas/c8-operacion.md#c-8-4)) y controles del ciclo de vida, como la validación y la banda gris de revisión humana ([8.1](../clausulas/c8-operacion.md#c-8-1)).

**Verificar.** Monarca mide desempeño, deriva y equidad del modelo ([9.1](../clausulas/c9-evaluacion-del-desempeno.md#c-9-1)), hace auditorías internas con auditores que no construyeron el modelo ([9.2](../clausulas/c9-evaluacion-del-desempeno.md#c-9-2)) y lleva los resultados a la revisión por la dirección ([9.3](../clausulas/c9-evaluacion-del-desempeno.md#c-9-3)).

**Actuar.** Si la auditoría encuentra que tres versiones del modelo se liberaron sin el acta del Comité de Modelos, eso es una no conformidad: se corrige, se buscan las causas y se cambia el proceso ([10.2](../clausulas/c10-mejora.md#c-10-2)). Y más allá de los errores, el sistema mejora de forma continua ([10.1](../clausulas/c10-mejora.md#c-10-1)).

!!! tip "Planificar el método, ejecutarlo en la operación"
    Notarás que las evaluaciones de riesgo e impacto aparecen dos veces: en la cláusula 6 y en la 8. No es redundancia. En la **6** defines *cómo* se evalúa (criterios, metodología, responsables); en la **8** lo *ejecutas* a intervalos planificados y cada vez que hay cambios importantes, y conservas los resultados. Un auditor revisará ambas cosas: que el método exista y que se aplique.

## Los componentes de un SGIA

Más allá del orden de las cláusulas, un SGIA en funcionamiento se reconoce por estas piezas. La columna de la derecha indica dónde lo pide la norma (los nombres de los controles del Anexo A en esta guía son traducción libre de referencia, no el texto oficial):

| Componente | Para qué sirve | Dónde vive en la norma |
|---|---|---|
| **Alcance y contexto** | Saber qué sistemas, procesos, sedes y roles cubre el SGIA | [4.1](../clausulas/c4-contexto.md#c-4-1) a [4.4](../clausulas/c4-contexto.md#c-4-4) |
| **Política de IA** | Fijar principios y compromisos de la dirección | [5.2](../clausulas/c5-liderazgo.md#c-5-2), [A.2.2](../anexo-a/a2-politicas.md#a-2-2) |
| **Roles y responsabilidades** | Que cada sistema y cada proceso tengan un responsable con nombre | [5.3](../clausulas/c5-liderazgo.md#c-5-3), [A.3.2](../anexo-a/a3-organizacion-interna.md#a-3-2) |
| **Inventario de sistemas de IA** | Saber qué IA hay, para qué se usa, quién la provee y qué datos toca | [4.1](../clausulas/c4-contexto.md#c-4-1), [A.4.2](../anexo-a/a4-recursos.md#a-4-2) (ver nota abajo) |
| **Criterios y proceso de riesgo** | Distinguir lo aceptable de lo inaceptable y priorizar | [6.1.1](../clausulas/c6-planificacion.md#c-6-1-1) a [6.1.3](../clausulas/c6-planificacion.md#c-6-1-3), [8.2](../clausulas/c8-operacion.md#c-8-2), [8.3](../clausulas/c8-operacion.md#c-8-3) |
| **Proceso de evaluación de impacto** | Entender cómo cada sistema afecta a personas, grupos y sociedad | [6.1.4](../clausulas/c6-planificacion.md#c-6-1-4), [8.4](../clausulas/c8-operacion.md#c-8-4), [A.5.2](../anexo-a/a5-evaluacion-de-impacto.md#a-5-2) |
| **Declaración de Aplicabilidad** | Mostrar qué controles aplican, cuáles no y por qué | [6.1.3](../clausulas/c6-planificacion.md#c-6-1-3) |
| **Objetivos de IA** | Traducir la política en metas medibles con responsable y plazo | [6.2](../clausulas/c6-planificacion.md#c-6-2), [A.6.1.2](../anexo-a/a6-ciclo-de-vida.md#a-6-1-2), [A.9.3](../anexo-a/a9-uso.md#a-9-3) |
| **Ciclo de vida y datos** | Controlar cómo se diseña, prueba, despliega y opera cada sistema, y con qué datos | [8.1](../clausulas/c8-operacion.md#c-8-1), [A.6](../anexo-a/a6-ciclo-de-vida.md), [A.7](../anexo-a/a7-datos.md) |
| **Monitoreo y medición** | Saber si los sistemas y el SGIA cumplen lo que prometen | [9.1](../clausulas/c9-evaluacion-del-desempeno.md#c-9-1), [A.6.2.6](../anexo-a/a6-ciclo-de-vida.md#a-6-2-6) |
| **Auditoría interna** | Verificar con independencia que el sistema cumple y funciona | [9.2](../clausulas/c9-evaluacion-del-desempeno.md#c-9-2) |
| **Revisión por la dirección** | Que la alta dirección vea resultados y decida | [9.3](../clausulas/c9-evaluacion-del-desempeno.md#c-9-3) |
| **Mejora y acción correctiva** | Corregir causas, no solo síntomas | [10.1](../clausulas/c10-mejora.md#c-10-1), [10.2](../clausulas/c10-mejora.md#c-10-2) |

!!! note "Sobre el inventario"
    La norma no usa la palabra "inventario" como requisito explícito. Sin embargo, en nuestra lectura es muy difícil cumplir 4.1 (propósito previsto y roles por sistema), 4.3 (alcance) o documentar recursos ([A.4.2](../anexo-a/a4-recursos.md#a-4-2)) sin una lista viva de los sistemas de IA. Por eso suele ser de lo primero que pide un auditor. Tienes una plantilla en [Inventario de sistemas de IA](../plantillas/index.md#inventario-sistemas-ia).

## ¿Qué documentos "salen" del sistema?

La norma llama **información documentada** (*documented information*) a todo lo que la organización controla por escrito, en cualquier formato. Conviene distinguir tres familias:

| Familia | Ejemplos | Requisito de origen |
|---|---|---|
| **Documentos que fijan reglas** | Alcance del SGIA, política de IA, descripción del proceso de evaluación de riesgos y de tratamiento, Declaración de Aplicabilidad, objetivos de IA | 4.3, 5.2, 6.1.2, 6.1.3, 6.2 |
| **Registros que prueban que se hizo** | Resultados de evaluaciones de riesgos, de tratamiento y de impacto; evidencia de competencia; resultados de monitoreo; programa e informes de auditoría; actas de revisión por la dirección; no conformidades y acciones correctivas | 6.1.4, 7.2, 8.1, 8.2, 8.3, 8.4, 9.1, 9.2.2, 9.3.3, 10.2 |
| **Documentación por sistema de IA** | Ficha del sistema, documentación técnica, registros de eventos, descripción de los datos, información para usuarios, plan de comunicación de incidentes | Controles del Anexo A que resulten aplicables, como [A.6.2.7](../anexo-a/a6-ciclo-de-vida.md#a-6-2-7), [A.6.2.8](../anexo-a/a6-ciclo-de-vida.md#a-6-2-8), [A.7.5](../anexo-a/a7-datos.md#a-7-5), [A.8.2](../anexo-a/a8-informacion-partes-interesadas.md#a-8-2) y [A.8.4](../anexo-a/a8-informacion-partes-interesadas.md#a-8-4) |

Además, la [cláusula 7.5](../clausulas/c7-apoyo.md#c-7-5) te permite (y te pide) añadir lo que tú consideres necesario para que el sistema funcione. La lista completa, con plantillas, está en [Documentación requerida](../implementacion/documentacion-requerida.md).

!!! tip "Menos papel, más evidencia"
    Un SGIA de una PyME puede caber en una docena de documentos y una carpeta de registros bien ordenada. El auditor no premia el volumen: premia que lo escrito coincida con lo que la gente hace.

## ¿Qué cambia en el día a día?

Un SGIA bien implementado se nota en situaciones concretas:

| Situación | Sin SGIA | Con SGIA |
|---|---|---|
| Alguien quiere usar una herramienta nueva de IA | La contrata con la tarjeta corporativa y empieza a usarla | Hay una solicitud breve, una revisión de riesgos e impacto proporcional, alta en el inventario y aprobación ([A.9.2](../anexo-a/a9-uso.md#a-9-2), [A.10.3](../anexo-a/a10-terceros.md#a-10-3)) |
| Un colaborador pega una nómina en un chatbot gratuito | Nadie se entera, o se entera tarde | Existe una regla clara de uso aceptable, capacitación ([7.3](../clausulas/c7-apoyo.md#c-7-3)), un canal para reportar ([A.3.3](../anexo-a/a3-organizacion-interna.md#a-3-3)) y un análisis de causas ([10.2](../clausulas/c10-mejora.md#c-10-2)) |
| El proveedor cambia el modelo que usa por debajo | Se descubre cuando el chatbot empieza a responder raro | El contrato exige aviso, el cambio se controla ([8.1](../clausulas/c8-operacion.md#c-8-1)) y se repiten las evaluaciones ([8.2](../clausulas/c8-operacion.md#c-8-2), [8.4](../clausulas/c8-operacion.md#c-8-4)) |
| Un solicitante pregunta por qué lo rechazaron | "El sistema lo decidió" | Hay motivos comprensibles ([A.8.2](../anexo-a/a8-informacion-partes-interesadas.md#a-8-2)), revisión humana ([A.9.3](../anexo-a/a9-uso.md#a-9-3)) y un canal de reporte ([A.8.3](../anexo-a/a8-informacion-partes-interesadas.md#a-8-3)) |
| Reunión de dirección | La IA no aparece en la agenda | La IA tiene indicadores, riesgos y decisiones en la revisión por la dirección ([9.3](../clausulas/c9-evaluacion-del-desempeno.md#c-9-3)) |

El cambio cultural más importante suele ser el primero: la IA deja de entrar "por la puerta de atrás". Esa IA no autorizada, la llamada **IA en la sombra** (*shadow AI*), es hoy uno de los detonantes más comunes para iniciar un SGIA en organizaciones latinoamericanas.

## SGIA mínimo para una PyME frente al SGIA de quien desarrolla IA

Las cláusulas 4 a 10 aplican **completas** a cualquier organización, sin importar su tamaño. Lo que cambia es la profundidad con que se implementan y cuáles controles del Anexo A resultan necesarios según tus riesgos.

<div class="grid" markdown>

!!! success "SGIA mínimo para una PyME (Contadores Alameda)"
    - Alcance acotado: tres sistemas de IA de terceros en una sede.
    - Política de IA breve y política de uso aceptable de IA generativa.
    - Un responsable del SGIA (gerente de TI) y una matriz RACI sencilla.
    - Inventario en hoja de cálculo: propósito, proveedor, datos y dueño.
    - Formatos breves de riesgo e impacto por sistema.
    - SoA que justifica excluir controles de desarrollo y refuerza uso, proveedores e información a clientes.
    - Tres o cuatro objetivos medibles, auditoría interna anual y revisión por la dirección.

!!! tip "SGIA de una empresa que desarrolla IA (Monarca Crédito, Conversa Labs)"
    - Alcance que cubre el ciclo de vida completo, de los datos al monitoreo.
    - Objetivos de desarrollo responsable ligados a cada etapa ([A.6.1.2](../anexo-a/a6-ciclo-de-vida.md#a-6-1-2)).
    - Comités formales y separación entre quien construye y quien valida.
    - Inventario con modelos, versiones, conjuntos de datos y dependencias.
    - Evaluaciones de impacto profundas, con consulta a expertos y afectados.
    - SoA con casi todos los controles y otros propios adicionales.
    - Monitoreo continuo de desempeño, deriva y equidad; auditorías por proceso.

</div>

| Dimensión | PyME que usa IA de terceros | Empresa que desarrolla o provee IA |
|---|---|---|
| Esfuerzo inicial típico | Semanas a pocos meses, con una o dos personas a tiempo parcial | Varios meses, con un equipo multidisciplinario |
| Centro de gravedad | Uso responsable, proveedores, datos personales en instrucciones, información a clientes | Ciclo de vida, datos de entrenamiento, validación, monitoreo, transparencia |
| Controles del Anexo A | En nuestra lectura, varios de [A.6.2](../anexo-a/a6-ciclo-de-vida.md) pueden excluirse si no hay desarrollo; algunos organismos de certificación esperan que se apliquen a la configuración y el despliegue | Prácticamente todos aplican; se agregan controles propios |

!!! latam "En México y Latinoamérica"
    Para muchas PyMEs de la región, el primer impulso no es la certificación, sino un cliente grande (un banco, una aseguradora) que envía un cuestionario de proveedores sobre IA. Un SGIA mínimo bien hecho permite responder con evidencia en lugar de promesas, y puede ser la antesala de una certificación. Si dudas, revisa [¿Necesito ISO 42001?](../empieza-aqui/necesito-iso42001.md).

!!! warning "Errores comunes"
    - **Comprar un paquete de documentos** y creer que eso es el SGIA. Sin procesos vivos ni registros, el primer auditor lo notará.
    - **Tratarlo como un proyecto de TI.** La IA toca riesgos legales, de negocio, de reputación y de derechos de las personas; necesita a la dirección y a varias áreas.
    - **Confundirlo con el comité de ética.** El comité ayuda, pero no sustituye criterios, procesos, objetivos medibles ni auditoría.
    - **Copiar el SGSI y cambiar "información" por "IA".** Se pierden la evaluación de impacto, los roles, el ciclo de vida y la mirada hacia personas y sociedad.
    - **Inventario incompleto.** Si no cuentas la IA incrustada en tus herramientas de ofimática, de contabilidad o de atención, tu alcance tiene huecos.

## Preguntas para tu organización

- [ ] ¿Sabemos qué sistemas de IA usamos, desarrollamos o proveemos, y cuál es nuestro rol frente a cada uno?
- [ ] ¿La alta dirección ha dicho por escrito qué quiere lograr con la IA y qué no está dispuesta a aceptar?
- [ ] ¿Hay una persona responsable del SGIA con autoridad y tiempo real para ejercerla?
- [ ] ¿Distinguimos entre los riesgos para la organización y los impactos en personas y sociedad?
- [ ] ¿Alguien decide hoy, con criterios, si una herramienta nueva de IA se puede usar?
- [ ] ¿Tenemos al menos un indicador que nos diga si nuestra IA está funcionando como esperamos?
- [ ] ¿Podríamos aprovechar un sistema de gestión existente (ISO 27001, ISO 9001) en lugar de empezar de cero?

## Para seguir leyendo

<div class="grid cards" markdown>

-   :material-brain:{ .lg .middle } **IA para profesionales de GRC**

    ---

    Los conceptos técnicos que necesitas, sin matemáticas.

    [:octicons-arrow-right-24: Ir](ia-para-profesionales-grc.md)

-   :material-scale-balance:{ .lg .middle } **Riesgo frente a impacto**

    ---

    La diferencia clave entre ISO 42001 e ISO 27001.

    [:octicons-arrow-right-24: Ir](riesgo-vs-impacto.md)

-   :material-account-group-outline:{ .lg .middle } **Roles en la IA**

    ---

    Por qué tu rol cambia lo que la norma te pide.

    [:octicons-arrow-right-24: Ir](roles-en-la-ia.md)

-   :material-book-open-page-variant-outline:{ .lg .middle } **Las cláusulas, una por una**

    ---

    Los requisitos 4 a 10, con ejemplos por rol.

    [:octicons-arrow-right-24: Ir](../clausulas/index.md)

</div>

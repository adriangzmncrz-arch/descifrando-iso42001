---
description: Cuarenta preguntas reales sobre ISO/IEC 42001 con respuesta directa - obligatoriedad, alcance, los 38 controles, IA generativa, certificación en México, ISO 27001, Reglamento de IA de la UE, LFPDPPP, Perú y costos.
---

# Preguntas frecuentes

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-frequently-asked-questions: Preguntas frecuentes</span>
<span class="dx-badge dx-badge--rol-usa">:material-cloud-download-outline: Usa IA de terceros</span>
<span class="dx-badge dx-badge--rol-desarrolla">:material-code-braces: Desarrolla IA</span>
<span class="dx-badge dx-badge--rol-provee">:material-handshake-outline: Provee IA a clientes</span>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: 1 a 2 min por pregunta</span>
</div>

!!! abstract "En una frase"
    Respuestas directas a las dudas sobre ISO 42001 que más se repiten en juntas, cuestionarios de clientes y propuestas comerciales, con enlaces a la página que explica cada tema a fondo.

Abre cada pregunta para leer la respuesta: la primera frase, en negritas, es la respuesta corta; lo demás son matices y ejemplos con las empresas ficticias de los [Casos prácticos](casos-practicos/index.md). Los datos con fecha se verificaron el 9 de octubre de 2026 y llevan nota al pie; cuando la fuente no es oficial, lo decimos. Los nombres de controles son traducción libre de referencia, y nada de esto es asesoría legal (ver el [aviso legal](acerca-de.md#aviso-legal)).

## Índice

- [Lo básico](#lo-basico): qué es, si es obligatoria y si hay versión en español.
- [¿Me aplica?](#me-aplica): quién la necesita y qué cuenta como IA.
- [Alcance y roles](#alcance-y-roles): alcance, sedes, roles y responsable del SGIA.
- [Implementación](#implementacion): tiempos, controles, Anexo B, riesgo e impacto, documentos.
- [IA generativa y proveedores](#ia-generativa-y-proveedores): ChatGPT, IA en la sombra y proveedores.
- [Certificación y auditoría](#certificacion-y-auditoria): proceso, vigencia, organismos en México e ISO/IEC 42006.
- [Relación con ISO 27001 y otras normas](#relacion-con-otras-normas): SGSI, privacidad, NIST y familia de normas.
- [Leyes y regulación](#leyes-y-regulacion): la UE y su Ómnibus, México, la LFPDPPP, Perú y la región.
- [PyMEs y costos](#pymes-y-costos): cuánto cuesta y cómo escalar el SGIA.

## Lo básico { #lo-basico }

??? question "¿Qué es ISO/IEC 42001, en pocas palabras?"
    **Es la norma internacional que explica cómo montar y operar un sistema de gestión para gobernar la inteligencia artificial que una organización usa, desarrolla u ofrece, y que un tercero puede certificar.** Se publicó el 18 de diciembre de 2023 y, al 9 de octubre de 2026, seguía en su primera edición, sin enmiendas ni revisión en curso.[^1]

    A ese conjunto de políticas, roles, procesos y controles se le llama sistema de gestión de IA (SGIA; en inglés, *AI management system*). Usa la misma estructura armonizada (*harmonized structure*) que ISO 27001: las cláusulas 4 a 10 contienen los requisitos certificables; el Anexo A reúne 38 controles de referencia en 9 temas y el B, la guía para implementarlos. Ojo: se certifica el sistema de gestión, no un modelo ni un producto; decir "nuestra IA está certificada" induce a error. Empieza por [ISO 42001 en 5 minutos](empieza-aqui/iso42001-en-5-minutos.md) y [¿Qué es un SGIA?](fundamentos/que-es-un-sgia.md).

??? question "¿Es obligatoria ISO 42001?"
    **No: es una norma voluntaria, y en México no encontramos ninguna ley que obligue a adoptarla o a certificarse.** Pero puede volverse casi obligatoria por otras vías:

    - **Contratos.** Un banco o un cliente extranjero puede pedirla, o pedir evidencia equivalente, en su cuestionario de proveedores. Le pasó a Contadores Alameda.
    - **Inversión y alianzas.** Monarca Crédito la busca para respaldar una ronda de inversión y sus alianzas con bancos.
    - **Regulación que la menciona.** En Perú, el reglamento de la ley de IA pide a las entidades públicas que desarrollan IA usar la versión peruana de la norma (ver [Leyes y regulación](#leyes-y-regulacion)).

    Para saber cuánto de la norma te conviene adoptar hoy, recorre el árbol de [¿Necesito ISO 42001?](empieza-aqui/necesito-iso42001.md).

??? question "¿Existe versión oficial en español? ¿Tengo que comprar la norma?"
    **Sí hay versiones oficiales en español, como la UNE-ISO/IEC 42001:2025 de España, y sí: el texto de la norma se compra.**[^2]

    - **España.** UNE anunció en abril de 2025 la versión en español UNE-ISO/IEC 42001:2025. Revisa en su catálogo cuál es la edición vigente antes de comprar.
    - **Perú.** El reglamento peruano de IA menciona una Norma Técnica Peruana designada NTP-ISO/IEC 42001:2025.[^3] INACAL la aprobó con la R.D. N.° 000013-2025-INACAL/DN, publicada el 30 de junio de 2025.[^45]
    - **México.** No encontramos una NMX que la adopte; los organismos acreditados certifican directamente contra la norma internacional.[^4]

    Puedes comprarla en ISO, en IEC o en el organismo de normalización de tu país. Esta guía no la reproduce: la explica con otras palabras. Si dudas de una traducción, contrasta con el original en inglés.

## ¿Me aplica? { #me-aplica }

??? question "¿Me aplica si no desarrollo IA y solo la uso?"
    **Sí. La norma está pensada para cualquier organización que ofrezca o use productos o servicios con IA, sin importar su tamaño ni su giro.** No hace falta entrenar modelos.

    Quien usa IA de terceros decide para qué la usa, con qué datos la alimenta y quién revisa lo que produce. Contadores Alameda no ha entrenado un solo modelo, pero su chatbot "Alma", contratado a BotNorte, contesta sobre fechas de declaraciones: si se equivoca, la multa la paga el cliente y el reclamo llega al despacho. Incluso la IA que no decide sobre personas, como su captura automática de CFDI, puede causar daños indirectos.

    Lo que cambia con tu rol es el peso de los controles: en nuestra clasificación, a quien solo usa IA de terceros le pesan unos 24 de los 38. Descúbrelos con el [selector de rol](herramientas/selector-de-rol.md) y lee [Roles en la IA](fundamentos/roles-en-la-ia.md).

??? question "¿Cómo sé si lo que uso cuenta como «sistema de IA»?"
    **Si la herramienta usa un modelo que aprendió de datos para producir textos, imágenes, predicciones, clasificaciones o recomendaciones que influyen en tu trabajo, trátala como sistema de IA.** La norma toma su vocabulario de ISO/IEC 22989, su única referencia normativa,[^5] pero para el inventario basta un criterio práctico.

    Casi siempre entran los asistentes de IA generativa (también los de tu suite de ofimática), los chatbots, los módulos que "leen" documentos como la captura de CFDI y los modelos de puntuación o pronóstico, como Score Monarca v3. Las reglas fijas, las macros y la automatización robótica de procesos (*RPA*) sin aprendizaje en general no lo son, pero vigila las funciones "inteligentes" que llegan en actualizaciones.

    Inventaría lo dudoso con una columna "¿es IA? ¿por qué?" en la plantilla de [inventario de sistemas de IA](plantillas/index.md#inventario-sistemas-ia) y lee [Modelo frente a sistema de IA](fundamentos/ia-para-profesionales-grc.md#modelo-frente-a-sistema-de-ia).

## Alcance y roles { #alcance-y-roles }

??? question "¿Puedo certificar solo un sistema de IA?"
    **Sí. El alcance del SGIA puede limitarse a uno o varios sistemas de IA, a un proceso o a una unidad de negocio, siempre que lo definas por escrito y que sus límites tengan sentido ([4.3](clausulas/c4-contexto.md#c-4-3)).**

    Monarca Crédito podría certificar solo Score Monarca v3 y su modelo de asignación de línea. Dos matices: el certificado muestra el alcance y tus clientes lo leerán, y el alcance no puede dejar fuera lo que afecta al sistema elegido (el equipo que lo entrena, los datos de buró de crédito, el Comité de Modelos). Algunos organismos de certificación cuestionan los alcances que parecen recortados para esquivar áreas incómodas. Empezar acotado y ampliar después es una estrategia común. Más en [El alcance del certificado](auditoria/como-se-certifica.md#el-alcance-del-certificado).

??? question "¿La certificación es por sitio o por organización?"
    **Ni una ni otra en automático: se certifica el SGIA tal como lo define tu alcance, que puede abarcar toda la organización, una unidad o una o varias sedes.** El certificado indica qué actividades y ubicaciones cubre.

    Con varias sedes, el organismo decide cuáles visitar según dónde ocurre el trabajo con IA, que muchas veces vive en la nube. ISO/IEC 42006 incluye un apartado sobre auditorías remotas y un anexo normativo para calcular el tiempo de auditoría.[^6] Según fuentes secundarias, ese tiempo depende sobre todo de cuántas personas hacen trabajo relacionado con IA y del rol de la organización.[^7] Al cotizar, describe cada sede, sus sistemas y cuántas personas participan. Más en [Cómo se certifica](auditoria/como-se-certifica.md).

??? question "¿Qué rol tengo frente a la IA: proveedor, productor, cliente…?"
    **Depende de cada sistema, y lo normal es tener varios roles a la vez; la norma te pide determinarlos como parte de tu contexto ([4.1](clausulas/c4-contexto.md#c-4-1)).** Para nombrarlos remite a ISO/IEC 22989: proveedor, productor, cliente o usuario, socio y sujeto de IA, entre otros.

    | Empresa | Roles principales |
    |---|---|
    | Contadores Alameda | Cliente y usuario de IA de terceros, que la despliega frente a sus clientes |
    | Monarca Crédito | Productor y usuario de Score Monarca v3; cliente de una API antifraude; sus solicitantes son sujetos de IA |
    | Conversa Labs | Proveedor frente a sus clientes, productor de la orquestación y cliente del proveedor del modelo fundacional |

    Ojo: el Reglamento de IA de la UE usa figuras propias que no coinciden una a una con las de ISO; lo explicamos en [Los términos del Reglamento de IA de la UE](fundamentos/roles-en-la-ia.md#reglamento-ue). Prueba el [selector de rol](herramientas/selector-de-rol.md).

??? question "¿Quién debe ser el responsable del SGIA?"
    **La norma no exige un puesto concreto: pide que la alta dirección asigne a alguien la responsabilidad de que el SGIA cumpla la norma y de informar su desempeño ([5.3](clausulas/c5-liderazgo.md#c-5-3)), y que los roles de IA estén definidos ([A.3.2](anexo-a/a3-organizacion-interna.md#a-3-2)).**

    Conviene que esa persona tenga autoridad para convocar a todas las áreas, oficio en sistemas de gestión, alfabetización en IA, tiempo asignado de verdad y distancia frente a lo que supervisa. Un comité de ética no es obligatorio; si ya tienes uno con facultades de decisión, como el Comité de Modelos de Monarca Crédito, amplía su mandato.

    En la guía, Contadores Alameda nombró a su Gerente de TI y Conversa Labs, a su Responsable de Confianza y Seguridad (*Trust & Safety*). Delegar la operación no libera a la alta dirección ([cláusula 5](clausulas/c5-liderazgo.md)). Usa la plantilla [RACI de IA](plantillas/index.md#raci-ia).

## Implementación { #implementacion }

??? question "¿Por dónde empiezo?"
    **Por un patrocinador en la alta dirección y por el inventario de la IA que ya usas: casi todo lo demás depende de esas dos piezas.**

    1. Consigue el compromiso de la dirección y un responsable con tiempo.
    2. Inventaría los sistemas de IA, incluidos los que vienen dentro de herramientas que ya pagas.
    3. Determina tu rol frente a cada uno y define el alcance.
    4. Publica la política de IA y, si usas IA generativa, una política de uso aceptable.
    5. Define criterios de riesgo y evalúa riesgos e impactos, empezando por los sistemas más sensibles.
    6. Elige controles y arma la Declaración de Aplicabilidad (SoA; en inglés, *Statement of Applicability*).
    7. Opera, mide, haz una auditoría interna y una revisión por la dirección; corrige.

    El detalle está en la [hoja de ruta](implementacion/hoja-de-ruta.md), empezando por el [diagnóstico e inventario](implementacion/hoja-de-ruta.md#fase-1). Si aún no sabes qué tan lejos ir, haz el [autodiagnóstico](herramientas/autodiagnostico.md).

??? question "¿Cuánto tarda implementarla?"
    **No hay una cifra única; como referencia, la estimación del autor va de 6 a 9 meses para una PyME que solo usa IA de terceros y de 9 a 14 meses para quien desarrolla sus propios modelos.** Son plazos orientativos basados en experiencia con otros sistemas de gestión, no en un estudio.

    Lo que más mueve el plazo: tener o no un SGSI ISO 27001 del cual reutilizar procesos, tu rol, cuántos sistemas de alto impacto entran al alcance, la velocidad de aprobación de la dirección y los cambios técnicos pendientes, como el monitoreo de deriva (*drift*). Además, antes de la auditoría de certificación conviene haber completado al menos una auditoría interna y una revisión por la dirección. Revisa los [factores que alargan o acortan el proyecto](implementacion/hoja-de-ruta.md#factores).

??? question "¿Tengo que implementar los 38 controles?"
    **No. Tienes que considerarlos todos, implementar los que tus riesgos y tus requisitos externos hagan necesarios, y justificar por escrito los que excluyas en la Declaración de Aplicabilidad ([6.1.3](clausulas/c6-planificacion.md#c-6-1-3)).**

    El Anexo A funciona como lista de verificación para no olvidar nada, no como menú obligatorio, y puedes sumar controles propios. Una exclusión se sostiene cuando tu análisis de riesgos no la pide y ninguna ley ni contrato la exige. En nuestra clasificación, suelen pesar unos 24 controles si usas IA de terceros, 35 si provees IA y 37 si la desarrollas.

    Un "no aplica" sin razón es de los hallazgos más comunes, y algunos controles son casi imposibles de excluir, como la Política de IA ([A.2.2](anexo-a/a2-politicas.md#a-2-2)). Explora el [Anexo A](anexo-a/index.md) y descarga la [SoA de 38 controles](plantillas/index.md#declaracion-de-aplicabilidad).

??? question "¿Qué pasa con el Anexo B?"
    **El Anexo B es la guía de implementación de cada control y, aunque está marcado como normativo, no tienes que justificar en la SoA si sigues o no cada recomendación.**[^5] Conviene separar dos ideas:

    - **Lo que te libera:** puedes ampliar la guía, cambiarla o implementar el control a tu manera. La SoA trata de controles, no de párrafos de la guía.
    - **Lo que no debes olvidar:** [6.1.3](clausulas/c6-planificacion.md#c-6-1-3) te pide tomarla en cuenta, y es la mejor pista de la intención de cada control. Es razonable esperar que un auditor la use como referencia.

    En la práctica, si te apartas de la guía, deja una nota de cómo logras el mismo objetivo. Contadores Alameda no controla la infraestructura de "Alma"; en lugar de montar su propio registro de eventos ([A.6.2.8](anexo-a/a6-ciclo-de-vida.md#a-6-2-8)), puede pactar con BotNorte acceso periódico a las bitácoras de conversación. Más en [Anexos B, C y D](anexos-b-c-d.md).

??? question "¿Qué diferencia hay entre evaluación de riesgos y evaluación de impacto?"
    **La evaluación de riesgos ([6.1.2](clausulas/c6-planificacion.md#c-6-1-2)) parte de tus objetivos y valora consecuencias para la organización, las personas y la sociedad; la evaluación de impacto del sistema de IA (*AI system impact assessment*, [6.1.4](clausulas/c6-planificacion.md#c-6-1-4)) mira solo hacia afuera, a personas, grupos y sociedad, e incluye el uso indebido previsible.** Sus resultados alimentan la de riesgos.

    En Monarca Crédito, un **riesgo** es que Score Monarca v3 pierda precisión por un cambio económico y suba la cartera vencida. Un **impacto** es que solicitantes de ciertas entidades sean rechazados de forma sistemática porque el código postal funciona como variable sustituta, o que una persona no entienda por qué se le negó el crédito.

    La guía ISO/IEC 42005, publicada el 28 de mayo de 2025, explica cómo hacer evaluaciones de impacto.[^8] Lee [Riesgo frente a impacto](fundamentos/riesgo-vs-impacto.md) y el objetivo [A.5](anexo-a/a5-evaluacion-de-impacto.md).

??? question "¿Cada cuánto se repiten las evaluaciones de riesgos e impacto?"
    **La norma no fija una frecuencia: te pide repetirlas en los intervalos que tú planifiques y cada vez que se proponga u ocurra un cambio importante ([8.2](clausulas/c8-operacion.md#c-8-2) y [8.4](clausulas/c8-operacion.md#c-8-4)).**

    Te recomendamos combinar dos mecanismos:

    - **Calendario:** una revisión completa al menos anual es un punto de partida razonable; más seguido para sistemas de alto impacto.
    - **Detonantes escritos:** nueva versión del modelo, nueva fuente de datos, cambio de proveedor o de su modelo de base, nuevo uso o grupo de usuarios, un incidente relevante, quejas recurrentes o un cambio legal.

    Conversa Labs reevalúa cuando su proveedor del modelo fundacional anuncia una versión nueva, porque las respuestas de todos sus asistentes pueden cambiar de un día para otro. Más en la [cláusula 8](clausulas/c8-operacion.md).

??? question "¿Qué documentos son obligatorios?"
    **Los que la norma pide de forma expresa son relativamente pocos, más todo lo que tú consideres necesario para que el sistema funcione.**

    - **Para definir el sistema:** alcance ([4.3](clausulas/c4-contexto.md#c-4-3)), política de IA ([5.2](clausulas/c5-liderazgo.md#c-5-2)) y objetivos de IA ([6.2](clausulas/c6-planificacion.md#c-6-2)).
    - **Para gestionar riesgos:** acciones sobre riesgos y oportunidades y los procesos de evaluación y tratamiento ([6.1](clausulas/c6-planificacion.md#c-6-1)); la SoA y los controles necesarios ([6.1.3](clausulas/c6-planificacion.md#c-6-1-3)); resultados de evaluaciones de impacto ([6.1.4](clausulas/c6-planificacion.md#c-6-1-4) y [8.4](clausulas/c8-operacion.md#c-8-4)) y de evaluaciones y tratamientos de riesgo ([8.2](clausulas/c8-operacion.md#c-8-2) y [8.3](clausulas/c8-operacion.md#c-8-3)).
    - **Para demostrar que opera:** evidencia de competencia ([7.2](clausulas/c7-apoyo.md#c-7-2)) y la necesaria para confiar en que los procesos se ejecutan como se planearon ([8.1](clausulas/c8-operacion.md#c-8-1)).
    - **Para verificar y mejorar:** resultados de medición ([9.1](clausulas/c9-evaluacion-del-desempeno.md#c-9-1)), programa y resultados de auditoría interna ([9.2](clausulas/c9-evaluacion-del-desempeno.md#c-9-2)), resultados de la revisión por la dirección ([9.3](clausulas/c9-evaluacion-del-desempeno.md#c-9-3)) y no conformidades con sus acciones ([10.2](clausulas/c10-mejora.md#c-10-2)).

    A eso se suman los documentos que pidan los controles de tu SoA, como los de evaluaciones de impacto ([A.5.3](anexo-a/a5-evaluacion-de-impacto.md#a-5-3)). Un registro en una herramienta o un acta también cuentan como información documentada. Más en [Documentación requerida](implementacion/documentacion-requerida.md).

## IA generativa y proveedores { #ia-generativa-y-proveedores }

??? question "¿Me sirve si solo uso ChatGPT u otra IA generativa?"
    **Sí: un asistente de IA generativa es un sistema de IA que tu organización usa, e ISO 42001 te da un marco para decidir con qué datos, para qué tareas y con qué revisión humana se usa.** Que venga incluido en tu suite de ofimática no lo saca del inventario.

    Lo que más pesa en este perfil: reglas de uso responsable ([A.9.2](anexo-a/a9-uso.md#a-9-2)), usar cada herramienta dentro del propósito que declara su proveedor ([A.9.4](anexo-a/a9-uso.md#a-9-4)), revisar el contrato del proveedor ([A.10.3](anexo-a/a10-terceros.md#a-10-3)), capacitar para detectar alucinaciones y una evaluación de impacto proporcional: breve para correos internos, más seria si las respuestas llegan a clientes.

    La diferencia entre la licencia empresarial de Contadores Alameda y el chatbot gratuito donde un colaborador pegó una nómina suele estar en las condiciones contractuales sobre los datos. Si nadie te pide evidencia, empieza por una [política de uso aceptable](empieza-aqui/necesito-iso42001.md#uso-aceptable). Caso completo en [PyME que usa IA generativa](casos-practicos/pyme-usa-ia-generativa.md).

??? question "¿Cómo manejo la «IA en la sombra»?"
    **Con reglas claras, alternativas aprobadas que de verdad sirvan, capacitación, controles técnicos y un canal para reportar sin miedo; prohibir a secas casi nunca funciona.** La IA en la sombra (*shadow AI*) es el uso de herramientas de IA que la organización no aprobó o no conoce.

    1. **Descúbrela:** encuesta anónima, registros del proxy y cargos de suscripciones.
    2. **Ofrece una alternativa aprobada:** si la gente usa un chatbot gratuito, es porque le resuelve algo.
    3. **Escribe la regla:** qué datos nunca se pegan en una instrucción (*prompt*), como datos personales, información fiscal de clientes o secretos comerciales.
    4. **Apóyate en la técnica:** bloqueo de servicios no aprobados y prevención de fuga de datos (*data loss prevention*, DLP).
    5. **Abre un canal de reporte** ([A.3.3](anexo-a/a3-organizacion-interna.md#a-3-3)) y trata los casos como incidentes.

    En Contadores Alameda, la nómina pegada en un chatbot gratuito se registró como incidente, y la Coordinadora de cumplimiento y datos personales evaluó si era una vulneración en términos del art. 19 de la LFPDPPP, que prevé un aviso inmediato cuando afecta de forma significativa.[^9] Usa las plantillas de [uso aceptable de IA generativa](plantillas/index.md#uso-aceptable-ia-generativa) y de [registro de incidentes](plantillas/index.md#registro-de-incidentes).

??? question "¿Mi proveedor de LLM está certificado en ISO 42001? ¿Eso me cubre?"
    **No. Su certificado cubre su sistema de gestión dentro de su alcance; tu uso del modelo de lenguaje de gran tamaño (*large language model*), tus datos y tus decisiones siguen siendo tu responsabilidad.** Sí es buena evidencia para tu evaluación de proveedores ([A.10.3](anexo-a/a10-terceros.md#a-10-3)), siempre que revises que el alcance incluya el servicio que contratas, quién lo emitió y con qué acreditación, y que esté vigente.

    Pide además, por escrito: si usa tus datos para entrenar sus modelos y cómo impedirlo, dónde y cuánto tiempo los conserva, si te avisará antes de cambiar el modelo de base y en cuánto tiempo te notifica incidentes.

    La responsabilidad se reparte, no se transfiere ([A.10.2](anexo-a/a10-terceros.md#a-10-2)). Conversa Labs documenta tres capas: el proveedor del modelo fundacional; Conversa, con su orquestación, generación aumentada por recuperación (RAG), filtros y pruebas, y cada cliente, con su base de conocimiento y el aviso a sus usuarios. Más en [A.10](anexo-a/a10-terceros.md).

??? question "¿Tengo que avisar a la gente que está hablando con una IA?"
    **ISO 42001 no lo exige con esas palabras, pero te pide decidir qué información necesitan usuarios y demás partes interesadas ([A.8.2](anexo-a/a8-informacion-partes-interesadas.md#a-8-2) y [A.8.5](anexo-a/a8-informacion-partes-interesadas.md#a-8-5)), y en casi cualquier chatbot de atención la respuesta razonable es avisar.**

    La ley puede exigirlo por su cuenta. En la Unión Europea, las obligaciones de transparencia del art. 50 del Reglamento de IA, que incluyen informar a las personas de que interactúan con una IA, aplican desde el 2 de agosto de 2026.[^10] Conversa Labs, con un cliente en España, debe tenerlo resuelto. En México, el contenido mínimo del aviso de privacidad (art. 15 de la LFPDPPP) no menciona expresamente la IA ni las decisiones automatizadas.[^9]

    En la práctica, "Alma" se presenta en WhatsApp como asistente virtual del despacho y ofrece pasar con una persona. Es barato, evita reclamos y genera confianza.

## Certificación y auditoría { #certificacion-y-auditoria }

??? question "¿Cómo es el proceso de certificación?"
    **Un organismo de certificación acreditado audita tu SGIA en dos etapas; si todo está en orden, emite el certificado, regresa cada año a auditorías de seguimiento y recertifica al tercer año.**[^11] El esquema viene de ISO/IEC 17021-1, que ISO/IEC 42006 complementa para la IA.

    ```mermaid
    flowchart LR
      A["Etapa 1: ¿estás listo?"] --> B["Etapa 2: ¿funciona?"]
      B --> C["Decisión y certificado"]
      C --> D["Seguimiento año 1"]
      D --> E["Seguimiento año 2"]
      E --> F["Recertificación año 3"]
    ```

    En la etapa 1 se revisan documentación, alcance y SoA; en la etapa 2, que el sistema opere. Las no conformidades mayores deben cerrarse antes del certificado; para las menores suele bastar un plan de acción aceptado, y el auditor querrá ver acción correctiva ([10.2](clausulas/c10-mejora.md#c-10-2)), no solo la corrección de la muestra. Paso a paso en [El ciclo de certificación](auditoria/como-se-certifica.md#el-ciclo-de-certificacion-paso-a-paso) y [Qué pasa con las no conformidades](auditoria/como-se-certifica.md#que-pasa-con-las-no-conformidades).

??? question "¿Cuánto dura el certificado?"
    **El ciclo de certificación es de tres años, siempre que pases las auditorías de seguimiento anuales; al tercer año toca recertificar.**[^11] La "validez de tres años" que se repite en el mercado se deriva de ese ciclo, definido en ISO/IEC 17021-1.

    Según cómo citan esa norma la IAF y las certificadoras, el ciclo empieza con la decisión de certificación; hay al menos un seguimiento por año calendario, salvo el de recertificación, y el primero no puede pasar de 12 meses desde la decisión. Si no atiendes las no conformidades, el certificado puede suspenderse o retirarse antes.

    Un apunte: ISO/IEC 17021-1 entró en revisión sistemática en octubre de 2025, sin decisión publicada todavía, así que estas reglas podrían cambiar en una edición futura.[^12] Más en [Seguimiento y recertificación](auditoria/como-se-certifica.md#seguimiento-y-recertificacion).

??? question "¿Qué organismos certifican ISO 42001 en México?"
    **Busca organismos acreditados por la ema (entidad mexicana de acreditación) para ISO/IEC 42001; al 9 de octubre de 2026 su buscador público mostraba dos: NYCE (programa vigente desde el 8 de diciembre de 2024) y QSR (desde el 30 de julio de 2025).**[^13] La lista cambia: verifícala en el [buscador de la ema](https://ema.mx/saema/ConsultaPublica/Acreditados/Busqueda/OCS) antes de contratar. Nombrarlos no es una recomendación.

    Ambos están acreditados con base en ISO/IEC 17021-1:2015. Hay también certificadoras internacionales con acreditaciones para 42001 de entidades como ANAB (Estados Unidos) o UKAS (Reino Unido), según sus propios comunicados;[^14] si contratas una, pregunta quién la acreditó y si tus clientes aceptan esa acreditación.

    Ojo con el reconocimiento internacional: desde el 1 de enero de 2026, IAF e ILAC operan como una sola organización, Global ACI; ni el alcance del antiguo acuerdo de la IAF (fines de 2024) ni el del acuerdo vigente de Global ACI (versión del 5 de agosto de 2026) incluyen ISO/IEC 42001, así que una acreditación para 42001 no tiene, por ahora, reconocimiento multilateral.[^15] Más en [En México: la ema](auditoria/como-se-certifica.md#en-mexico-la-ema).

??? question "¿Qué es ISO/IEC 42006?"
    **Es la norma con los requisitos para los organismos que auditan y certifican sistemas de gestión de IA: no está dirigida a ti, sino a tu certificador.** Se publicó el 7 de julio de 2025 y complementa a ISO/IEC 17021-1 sin reemplazarla.[^16]

    Te importa porque fija requisitos de competencia técnica para quienes participan en la certificación, trae un anexo normativo para calcular los días de auditoría (que se reflejan en la cotización) y regula las auditorías remotas, el seguimiento y la recertificación.[^6] Al cotizar, pregunta si el organismo ya trabaja con 42006 y cómo calculó los días. En México, las fichas de la ema para 42001 no la mencionan, y no encontramos un plazo oficial de transición.[^13] Más en [ISO/IEC 42006, lo específico de la IA](auditoria/como-se-certifica.md#isoiec-42006-lo-especifico-de-la-ia).

??? question "¿Necesito un auditor con conocimiento de IA?"
    **Para la certificación, sí, e ISO/IEC 42006 se lo exige al organismo; para tu auditoría interna, la norma pide objetividad, imparcialidad y competencia, y en la práctica eso incluye entender lo suficiente de IA.**[^6]

    Tu auditor interno no tiene que ser científico de datos, pero sí saber preguntar cómo se validó un modelo o qué métricas se monitorean. Funciona combinar a un auditor con oficio en sistemas de gestión y a un experto técnico que no haya participado en lo auditado, como alguien de ciencia de datos de otra área de Monarca Crédito.

    Si contratas o formas auditores, revisa quién emite su certificado de persona y si ese esquema está acreditado conforme a ISO/IEC 17024, cuya edición más reciente se publicó el 31 de marzo de 2026.[^17] Más en [Auditoría interna (9.2)](clausulas/c9-evaluacion-del-desempeno.md#c-9-2) y en la [ruta para auditores](empieza-aqui/rutas-de-lectura.md#ruta-auditor).

??? question "¿Cuántas empresas están certificadas en ISO 42001?"
    **No hay una cifra oficial confiable al 9 de octubre de 2026.** Desde 2025, la encuesta anual de ISO (*ISO Survey*) se elabora con datos de IAF CertSearch, pero la información disponible llega hasta 2024 y, según fuentes secundarias, no incluye ISO/IEC 42001.[^18]

    Circulan cifras en notas de prensa que no pudimos contrastar, así que no las repetimos. Si necesitas comprobar que una empresa concreta está certificada, pide su certificado, revisa alcance y vigencia, y verifícalo con el organismo emisor o en IAF CertSearch.

## Relación con ISO 27001 y otras normas { #relacion-con-otras-normas }

??? question "¿Puedo integrarla con mi SGSI ISO 27001? ¿Necesito tenerlo antes?"
    **Sí puedes integrarlas, y es lo más eficiente si ya tienes ISO 27001, porque comparten la estructura armonizada; pero ninguna es requisito para certificar la otra.**

    Se reutilizan casi tal cual el control de documentos, la auditoría interna, la revisión por la dirección, las acciones correctivas y la gestión de competencias; con ajustes, la de proveedores e incidentes. Lo que tienes que agregar: criterios de riesgo que miren consecuencias para personas y sociedad, la evaluación de impacto ([6.1.4](clausulas/c6-planificacion.md#c-6-1-4)), los roles frente a cada sistema ([4.1](clausulas/c4-contexto.md#c-4-1)) y los controles sin equivalente: en nuestra clasificación, 17 de los 38 son nuevos, como los de datos ([A.7](anexo-a/a7-datos.md)).

    Y al revés: ISO 42001 no sustituye a tu SGSI. La seguridad de tus sistemas de IA se sigue apoyando en controles como ISO 27001 A.8.28 (codificación segura). Para una auditoría combinada, el organismo debe estar acreditado para ambas. Más en [Integración con ISO 27001](integracion/con-iso27001.md).

??? question "¿Cómo encaja con la privacidad, ISO/IEC 27701 y la EIPD?"
    **Son complementarias: la privacidad protege a los titulares de datos personales; ISO 42001 se ocupa de todas las personas a las que la IA puede afectar, traten o no sus datos.**

    ISO/IEC 27701 se publicó en segunda edición el 14 de octubre de 2025 y ahora es una norma de sistema de gestión independiente, que ya no requiere ISO 27001.[^19] La evaluación de impacto en la protección de datos (EIPD) y la del sistema de IA comparten insumos, pero responden preguntas distintas: si el tratamiento de datos es proporcionado y seguro, frente a qué consecuencias puede tener el sistema para personas y grupos, aun sin datos personales.

    En Monarca Crédito, el Oficial de Privacidad lleva la EIPD de Score Monarca y el Comité de Modelos, la evaluación de impacto con foco en sesgo y explicabilidad. Más en [Relación con la EIPD de privacidad](fundamentos/riesgo-vs-impacto.md#relacion-con-la-eipd-de-privacidad).

??? question "¿Qué relación tiene con el NIST AI RMF?"
    **El NIST AI RMF es un marco estadounidense, voluntario y no certificable, para gestionar riesgos de IA; ISO 42001 es un sistema de gestión certificable. Se complementan: uno ayuda a pensar los riesgos y la otra a gobernarlos de forma auditable.**

    La versión vigente es la AI RMF 1.0, publicada el 26 de enero de 2023; NIST indica que la está revisando como parte del plan de acción de IA de la Casa Blanca, sin versión nueva publicada.[^20] Para IA generativa existe el perfil NIST AI 600-1, del 26 de julio de 2024.[^21] La tabla de correspondencias (*crosswalk*) entre ambos que aloja NIST la elaboró Microsoft sobre el borrador final de 42001, no sobre la versión publicada, y NIST aclara que no implica su respaldo.[^22] Úsala como punto de partida. Más en [NIST AI RMF](integracion/nist-ai-rmf.md).

??? question "¿Qué otras normas de la familia conviene conocer?"
    **Para empezar, tres normas: ISO/IEC 22989 (vocabulario), ISO/IEC 23894 (gestión de riesgos de IA) e ISO/IEC 42005 (evaluación de impacto); las demás, según tu rol.** Estado al 9 de octubre de 2026:[^23]

    | Norma | Para qué sirve | Estado |
    |---|---|---|
    | ISO/IEC 22989:2022 | Conceptos y términos; referencia normativa de 42001 | Publicada; su enmienda sobre IA generativa aún no se publica |
    | ISO/IEC 23894:2023 | Gestión de riesgos de IA | Publicada |
    | ISO/IEC 42005:2025 | Evaluación de impacto | Publicada |
    | ISO/IEC 38507:2022 | La IA en el gobierno de las organizaciones | Publicada |
    | ISO/IEC 5338:2023 | Procesos del ciclo de vida de sistemas de IA | Publicada |
    | Serie ISO/IEC 5259 | Calidad de datos para aprendizaje automático | Partes 1 a 6 publicadas |
    | ISO/IEC 42003 | Guía de implementación de 42001 | En desarrollo, etapa inicial |

    En el catálogo no existen normas ISO/IEC 42002, 42004 ni 42008, y 42001 no tiene enmiendas.[^23] Si alguien te las menciona, pide la referencia exacta. Más en [La familia de normas de IA](fundamentos/familia-de-normas.md).

## Leyes y regulación (México, Latinoamérica, UE) { #leyes-y-regulacion }

!!! legal "Antes de leer"
    Estas respuestas describen el estado de las leyes al 9 de octubre de 2026, con su fuente en nota al pie. No son asesoría legal: para decisiones concretas, consulta a tu área jurídica.

??? question "¿Una certificación ISO 42001 cumple el Reglamento de IA de la UE?"
    **No. Un certificado ISO 42001 no demuestra por sí solo que cumples el Reglamento (UE) 2024/1689 ni da presunción de conformidad, aunque ayuda mucho a producir la evidencia que ese reglamento pide.**

    La **presunción de conformidad** (art. 40) solo la dan las normas armonizadas cuya referencia se publica en el Diario Oficial de la UE (DOUE).[^24] ISO 42001 se adoptó en Europa como EN ISO/IEC 42001:2026, pero esa adopción no está vinculada a ningún reglamento: no es norma armonizada.[^25] La página de la Comisión sobre normalización del Reglamento de IA ni siquiera la menciona.[^26]

    La norma pensada para ese papel es la **EN 18286** (gestión de la calidad para fines del Reglamento de IA): CEN y CENELEC la aprobaron en junio de 2026 y a finales de julio anunciaron su publicación como primera norma europea armonizada para ese reglamento.[^27] Según fuentes secundarias, al 15 de septiembre de 2026 su referencia aún no estaba en el DOUE, así que todavía no daba presunción de conformidad; no encontramos una cita posterior.[^28] Está escrita para el sistema de gestión de la calidad que el art. 17 exige a los proveedores de IA de alto riesgo, y relaciona sus cláusulas con ISO 42001 como ayuda de navegación, no como equivalencia.[^29]

    Además, el reglamento evalúa cada sistema de alto riesgo como producto, no el sistema de gestión. Detalle en [Reglamento de IA de la UE](integracion/reglamento-ia-ue.md).

??? question "¿Me aplica el Reglamento de IA de la UE si mi empresa está en México?"
    **Puede aplicarte aunque no tengas oficinas en Europa: alcanza a quienes comercialicen sistemas de IA en la UE, estén donde estén, y a proveedores y responsables del despliegue (*deployers*) de otros países cuando los resultados de sus sistemas se usen en la UE (art. 2).**[^24]

    Pregúntate si vendes o pones a disposición IA para clientes en la UE, si los resultados de tu sistema se usan allá, qué papel tienes y en qué nivel de riesgo cae el uso: prohibido, alto riesgo, transparencia o mínimo. Si un proveedor de fuera de la UE comercializa allí sistemas de alto riesgo, además debe nombrar un representante autorizado establecido en la Unión (art. 22).[^30]

    Conversa Labs tiene un cliente en España que despliega asistentes sobre su plataforma; en nuestra lectura, le pesan sobre todo las obligaciones de transparencia, aunque depende del uso que le dé cada cliente. Contadores Alameda, que atiende solo a PyMEs en México, normalmente queda fuera. Más en el caso [Empresa que desarrolla un chatbot](casos-practicos/empresa-desarrolla-chatbot.md).

??? question "¿Qué cambió con el Ómnibus digital sobre IA?"
    **Sobre todo, el calendario: el Reglamento (UE) 2026/1744 aplazó las obligaciones de alto riesgo y ajustó otras reglas, pero no las eliminó.** Se publicó en el DOUE el 24 de julio de 2026 y entró en vigor el 27 de julio de 2026.[^31]

    | Tema | Antes | Ahora |
    |---|---|---|
    | Alto riesgo del Anexo III (por ejemplo, crédito, empleo, educación) | 02/08/2026 | 02/12/2027 |
    | Alto riesgo del Anexo I (productos regulados) | 02/08/2027 | 02/08/2028 |
    | Marcado de contenido generativo (art. 50.2) de sistemas comercializados antes del 02/08/2026 | Sin plazo propio | Hasta el 02/12/2026 |
    | Prohibición de contenido íntimo no consentido y de material de abuso sexual infantil | No existía | Desde el 02/12/2026 |
    | PyMEs sin empresas asociadas o vinculadas | Sin régimen simplificado | Cumplimiento simplificado de ciertos elementos del sistema de gestión de la calidad (art. 17) |

    También se reformuló el art. 4 sobre alfabetización en IA (*AI literacy*). Siguen igual las prohibiciones vigentes desde el 2 de febrero de 2025 y la aplicación general desde el 2 de agosto de 2026, que incluye la transparencia del art. 50.[^10] Según fuentes secundarias, tampoco se aplazaron las de los modelos de IA de uso general.[^32] El aplazamiento es tiempo para madurar tu SGIA, no para pausarlo. Más en [Reglamento de IA de la UE](integracion/reglamento-ia-ue.md).

??? question "¿Hay ley de IA en México?"
    **No. Al 9 de octubre de 2026 no hay una ley general ni federal de inteligencia artificial aprobada y publicada en el DOF, ni una reforma constitucional aprobada que faculte al Congreso para legislar en la materia.**

    - **Iniciativas:** la comisión de IA del Senado aprobó en octubre de 2025 un plan de trabajo hacia una ley general,[^33] y hay varias iniciativas, como la del PAN en el Senado (septiembre de 2026).[^34] Ninguna se ha aprobado.
    - **Reformas vigentes:** desde el 14 de mayo de 2026, la Ley Federal del Trabajo y la Ley Federal del Derecho de Autor regulan, entre otras cosas, el uso de la imagen y la voz de artistas mediante IA.[^35]
    - **Guías no vinculantes:** los Principios de Chapultepec (Secihti y ATDT, 29 de enero de 2026) piden, por ejemplo, responsables humanos en toda decisión apoyada por IA.[^36]

    Que no haya ley de IA no deja a la IA sin reglas: la LFPDPPP y las normas financieras, de consumo y laborales ya aplican. Más en [México y Latinoamérica](integracion/contexto-mexico-latam.md).

??? question "¿Qué dice la nueva LFPDPPP sobre decisiones automatizadas?"
    **Da al titular el derecho de oponerse al tratamiento automatizado que, sin intervención humana, evalúa aspectos personales y le produce efectos jurídicos no deseados o lo afecta de manera significativa (art. 26, fracción II).**[^9] La ley se publicó en el DOF el 20 de marzo de 2025 y entró en vigor al día siguiente. Esa fracción permite oponerse cuando:

    > "Sus datos personales sean objeto de un tratamiento automatizado, el cual le produzca efectos jurídicos no deseados o afecte de manera significativa sus intereses, derechos o libertades, y estén destinados a evaluar, sin intervención humana, determinados aspectos personales de la misma o analizar o predecir, en particular, su rendimiento profesional, situación económica, estado de salud, preferencias sexuales, fiabilidad o comportamiento."

    No procede si el tratamiento es necesario para cumplir una obligación legal. El aviso de privacidad (art. 15) no menciona la IA, y no hay reglamento nuevo: el de 2011 pedía informar cuando se decide sin valoración humana y permitía pedir reconsideración (art. 112),[^37] pero si sigue aplicando es materia de interpretación. La autoridad ahora es la Secretaría Anticorrupción y Buen Gobierno.

    Monarca Crédito usa una banda gris de revisión humana, y su evaluación de impacto ([A.5.4](anexo-a/a5-evaluacion-de-impacto.md#a-5-4)) le ayuda a decidir qué rechazos revisar y cómo explicar los motivos ([A.8.2](anexo-a/a8-informacion-partes-interesadas.md#a-8-2)). En nuestra lectura, una revisión que solo firma lo que dice el modelo difícilmente cuenta como intervención humana. Más en el caso [Fintech con scoring crediticio](casos-practicos/fintech-scoring.md).

??? question "¿Qué pasa en Perú, donde la norma técnica se menciona en el reglamento?"
    **Perú tiene el marco vinculante más avanzado de la región: el reglamento de su ley de IA obliga a las entidades públicas que desarrollan sistemas de IA a usar la NTP-ISO/IEC 42001:2025 y promueve su uso en general.**[^3]

    - **Ley 31814** (5 de julio de 2023), con enfoque basado en riesgos.[^38]
    - **Reglamento, D.S. N.° 115-2025-PCM** (9 de septiembre de 2025), vigente a los 90 días hábiles; EY lo sitúa el 22 de enero de 2026.[^39]
    - **Arts. 28.2 y 33.1:** las entidades públicas que desarrollen IA deben usar la NTP-ISO/IEC 42001:2025, y la Secretaría de Gobierno y Transformación Digital promueve esa y otras normas, como ISO/IEC 38507.
    - **Sector privado:** riesgos de uso indebido (prohibido), alto (por ejemplo, evaluación crediticia o decisiones de contratación y despido) y aceptable, con plazos de adecuación por sector: un año para salud, educación, justicia, seguridad, economía y finanzas (10 de septiembre de 2026, según EY) y de dos a cuatro para el resto, con plazos propios para las MYPE.

    Dos matices, en nuestra lectura: "usar" la norma no equivale automáticamente a certificarse (confírmalo con la autoridad o con asesoría local), y para las empresas privadas el análisis de impacto previo es voluntario. Si Monarca Crédito operara en Perú, su score sería de riesgo alto. Más en [México y Latinoamérica](integracion/contexto-mexico-latam.md).

??? question "¿Y en el resto de Latinoamérica?"
    **En los demás países que revisamos no encontramos una ley integral de IA vigente al 9 de octubre de 2026; hay proyectos avanzados y leyes de datos personales que ya alcanzan las decisiones automatizadas.**

    | País | Situación |
    |---|---|
    | Brasil | El PL 2338/2023 pasó el Senado en diciembre de 2024 y espera dictamen en una comisión especial de la Cámara de Diputados.[^40] |
    | Chile | Proyecto de ley de IA en segundo trámite en el Senado; en mayo de 2026 el gobierno propuso una ley marco.[^41] Su nueva ley de datos (Ley 21.719), que agrega el derecho a oponerse a decisiones basadas en tratamiento automatizado, entra en plena vigencia el 1 de diciembre de 2026.[^42] |
    | Colombia | Política pública CONPES 4144 (febrero de 2025) y un proyecto de ley radicado en julio de 2026.[^43] |
    | Argentina y Uruguay | Sin ley nacional de IA (fuentes secundarias); Uruguay fue el primer país latinoamericano en firmar el Convenio Marco del Consejo de Europa sobre IA (septiembre de 2025).[^44] |

    Si operas en varios países, el SGIA da una base común: un inventario, una metodología y un registro de requisitos legales por país ([4.2](clausulas/c4-contexto.md#c-4-2)), como hace Conversa Labs con sus clientes en México, Colombia y Chile.

## PyMEs y costos { #pymes-y-costos }

??? question "¿Cuánto cuesta implementar y certificar ISO 42001?"
    **Depende del alcance, de tu rol y de tu punto de partida; no damos cifras porque varían mucho entre países y proveedores, pero sí qué mueve el costo.**

    - **Internos, casi siempre los mayores:** horas de la dirección, del responsable del SGIA y de los dueños de cada sistema; capacitación; cambios técnicos (registros, monitoreo, pruebas); auditoría interna.
    - **Externos:** el texto de la norma; consultoría, si la contratas; la certificación (etapas 1 y 2, dos seguimientos y la recertificación, más viáticos), y herramientas, si las necesitas.

    En la certificación, lo que más mueve el precio son los días de auditoría, que ISO/IEC 42006 calcula con un anexo normativo;[^6] según fuentes secundarias, pesan sobre todo cuántas personas hacen trabajo relacionado con IA y qué rol tienes.[^7] Lo que más baja el costo: un SGSI ISO 27001 y auditorías combinadas, un alcance acotado, plantillas y decisiones rápidas. La consultoría es opcional, y el organismo que te certifique no puede asesorarte en ese mismo sistema, por sus reglas de imparcialidad. Pide varias cotizaciones sobre el mismo alcance, por escrito. Tabla de rubros en [Costos y esfuerzo](empieza-aqui/necesito-iso42001.md#costos-y-esfuerzo).

??? question "¿ISO 42001 es demasiado para una PyME?"
    **No necesariamente: la norma aplica a organizaciones de cualquier tamaño, y lo que se ajusta es el alcance y la profundidad, no los requisitos.**

    Contadores Alameda, con 58 personas y tres sistemas de terceros, puede operar un SGIA a escala: una política de IA breve y otra de uso aceptable, un inventario en hoja de cálculo, evaluaciones de impacto cortas para el asistente de ofimática y la captura de CFDI y una más cuidadosa para "Alma", su Gerente de TI como responsable a tiempo parcial y una auditoría interna con apoyo externo para asegurar independencia.

    Lo que sí pesa en una PyME son los costos casi fijos de la certificación y el tiempo de la dirección; por eso muchas empiezan alineándose sin certificar. Compara en [SGIA mínimo para una PyME](fundamentos/que-es-un-sgia.md#sgia-minimo-para-una-pyme-frente-al-sgia-de-quien-desarrolla-ia) y en el caso [PyME que usa IA generativa](casos-practicos/pyme-usa-ia-generativa.md).

??? question "¿Vale la pena certificarse o basta con alinearse?"
    **Si nadie te pide el certificado y tu IA no decide sobre personas, alinearte sin certificar suele bastar por ahora; si clientes, inversionistas o reguladores te piden evidencia independiente, el certificado empieza a justificarse.**

    Alinearse es operar el SGIA sin auditoría externa: te da casi todos los beneficios internos y deja la puerta abierta. La certificación agrega la verificación independiente que valoran un banco o un fondo de inversión. Para Monarca Crédito y Conversa Labs, certificarse tiene sentido; Contadores Alameda puede alinearse primero, responder al banco con evidencia real y decidir tras un ciclo completo.

    Cuida la comunicación: "seguimos las prácticas de ISO 42001" es honesto; "cumplimos ISO 42001" sin evaluación independiente es difícil de sostener. Más en [Alinéate sin certificar, por ahora](empieza-aqui/necesito-iso42001.md#alinearte).

## ¿No encontraste tu pregunta?

Si tu duda no está aquí, o crees que una respuesta necesita otro matiz, proponla: las instrucciones están en [Cómo contribuir](acerca-de.md#como-contribuir). Las preguntas que más se repitan se incorporarán en las siguientes versiones de esta página.

[^1]: ISO, ficha de ISO/IEC 42001:2023 (publicada el 18 de diciembre de 2023; edición 1), <https://www.iso.org/standard/81230.html> (espejo oficial committee.iso.org). Fuente primaria; consultado el 9 de octubre de 2026.
[^2]: UNE, nota de prensa sobre UNE-ISO/IEC 42001:2025, <https://www.une.org/salainformaciondocumentos/NP_Estandar_UNE_ISO_IA.pdf>. Fuente primaria; consultado el 9 de octubre de 2026.
[^3]: D.S. N.° 115-2025-PCM, Reglamento de la Ley 31814, El Peruano, <https://busquedas.elperuano.pe/dispositivo/NL/2436426-1>. Fuente primaria; consultado el 9 de octubre de 2026.
[^4]: Búsqueda sin resultados en el DOF y en la página de ISO/IEC 42001 de NYCE, <https://nyce.org.mx/iso-iec-42001-sistemas-de-gestion-de-inteligencia-artificial-ia/>. Evidencia negativa, no confirmación oficial; consultado el 9 de octubre de 2026.
[^5]: IEC Webstore, vista previa oficial de ISO/IEC 42001:2023 (referencias normativas y anexos), <https://webstore.iec.ch/en/publication/90574>. Fuente primaria; consultado el 9 de octubre de 2026.
[^6]: IEC Webstore, vista previa oficial de ISO/IEC 42006:2025 (alcance e índice), <https://webstore.iec.ch/en/publication/108460>. Fuente primaria; consultado el 9 de octubre de 2026.
[^7]: Consejo de Normas de Canadá, boletín sobre la transición a ISO/IEC 42006:2025, <https://scc-ccn.ca/accreditation/bulletins/transition-isoiec-420062025-bodies-providing-audit-and-certification>; conocido por resúmenes y blogs, porque la página no abrió. Fuente secundaria; consultado el 9 de octubre de 2026.
[^8]: ISO, ficha de ISO/IEC 42005:2025, <https://www.iso.org/standard/44545.html> (espejo oficial committee.iso.org). Fuente primaria; consultado el 9 de octubre de 2026.
[^9]: LFPDPPP, texto vigente (DOF del 20 de marzo de 2025; arts. 2, 15, 19, 26 y 59), <https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf>. Fuente primaria; consultado el 9 de octubre de 2026.
[^10]: Comisión Europea, marco regulatorio de la IA, <https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai>. Fuente primaria; consultado el 9 de octubre de 2026.
[^11]: IAF, preguntas frecuentes que citan ISO/IEC 17021-1 (cláusula 9.1.3.3), <https://iaffaq.com/files/the-first-surveillan_0zydrd5kt0fbmhentfrcxb/>, y Bureau Veritas, <https://certification.bureauveritas.com/certification-process>. Fuente secundaria; consultado el 9 de octubre de 2026.
[^12]: ISO, ficha de ISO/IEC 17021-1:2015, <https://www.iso.org/standard/61651.html> (espejo oficial committee.iso.org). Fuente primaria; consultado el 9 de octubre de 2026.
[^13]: ema, buscador de organismos de certificación de sistemas (programa ISO/IEC 42001:2023), <https://ema.mx/saema/ConsultaPublica/Acreditados/Busqueda/OCS>, y fichas de NYCE (/SeleccionarOrganismo/77) y QSR (/SeleccionarOrganismo/74). Fuente primaria; consultado el 9 de octubre de 2026.
[^14]: Comunicados de SGS, <https://www.sgs.com/en/news/2025/04/sgs-achieves-ansi-anab-accreditation-for-isoiec-42001>, DQS, <https://www.dqsglobal.com/en/about/newsroom/dqs-receives-anab-accreditation-for-iso-iec-42001>, y BSI, <https://www.bsigroup.com/en-US/insights-and-media/media-center/press-releases/2026/march/bsi-secures-anab-accreditation-to-certify-isoiec-42001/> (ANAB) y <https://www.bsigroup.com/en-US/insights-and-media/media-center/press-releases/2025/november/bsi-becomes-the-first-certification-body-accredited-by-ukas-and-rva-to-deliver-certification-for-isoiec-42001/> (UKAS). Fuente secundaria (comunicados de las empresas); consultado el 9 de octubre de 2026.
[^15]: ILAC, comunicado sobre Global ACI, <https://ilac.org/wp-content/uploads/Press-Release-Global.pdf>; IAF, Anexo 1 del IAF MLA (archivado), <https://iaf.nu/en/annex-1-scope-of-the-mla-2025/>, y Global ACI, FMRA-001 versión 3.3, <https://sys.global-aci.org/uploads/documents/FMRA-001_Global_Accreditation_Cooperation_MRA_Status_v3_3_2026-09-28.pdf>. Fuente primaria; consultado el 9 de octubre de 2026.
[^16]: ISO, ficha y preguntas frecuentes de ISO/IEC 42006:2025, <https://www.iso.org/standard/44546.html> (espejo oficial committee.iso.org). Fuente primaria; consultado el 9 de octubre de 2026.
[^17]: ISO, ficha de ISO/IEC 17024:2026, <https://www.iso.org/standard/86291.html> (espejo oficial committee.iso.org). Fuente primaria; consultado el 9 de octubre de 2026.
[^18]: ISO, página de la ISO Survey, <https://committee.iso.org/the-iso-survey.html>, y soporte de IAF CertSearch, <https://support.iafcertsearch.org/certification-bodies/overview/market-intelligence/iso-survey> (fuente primaria); la ausencia de 42001 en los datos de 2024, según <https://30elevate.com/en/blog/iso-42001/> (fuente secundaria). Consultado el 9 de octubre de 2026.
[^19]: ISO, ficha y preguntas frecuentes de ISO/IEC 27701:2025, <https://www.iso.org/standard/85819.html> (espejo oficial committee.iso.org). Fuente primaria; consultado el 9 de octubre de 2026.
[^20]: NIST, AI Risk Management Framework, <https://www.nist.gov/itl/ai-risk-management-framework>. Fuente primaria; consultado el 9 de octubre de 2026.
[^21]: NIST, ficha de NIST AI 600-1, <https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence>. Fuente primaria; consultado el 9 de octubre de 2026.
[^22]: NIST AIRC, tablas de correspondencia, <https://airc.nist.gov/airmf-resources/crosswalks/>. Fuente primaria; consultado el 9 de octubre de 2026.
[^23]: Catálogo de ISO/IEC JTC 1/SC 42, <https://committee.iso.org/committee/6794475/x/catalogue/p/1/u/0/w/0/d/0>. Fuente primaria; la inexistencia de 42002, 42004 y 42008 es evidencia negativa. Consultado el 9 de octubre de 2026.
[^24]: Reglamento (UE) 2024/1689, EUR-Lex (arts. 2 y 40), <https://eur-lex.europa.eu/eli/reg/2024/1689/oj/spa>. Fuente primaria; consultado el 9 de octubre de 2026.
[^25]: EVS (organismo de normalización de Estonia, miembro de CEN), ficha de EVS-EN ISO/IEC 42001:2026 ("Directives or regulations: None"), <https://www.evs.ee/en/evs-en-iso-iec-42001-2026>. Fuente primaria; consultado el 9 de octubre de 2026.
[^26]: Comisión Europea, normalización del Reglamento de IA, <https://digital-strategy.ec.europa.eu/en/policies/ai-act-standardisation>. Fuente primaria; consultado el 9 de octubre de 2026.
[^27]: CEN-CENELEC, noticia del 30 de julio de 2026, <https://www.cencenelec.eu/news-events/news/2026/en-in-the-spotlight/2026-07-30-ai-quality-management/>. Fuente primaria; consultado el 9 de octubre de 2026.
[^28]: Krog Rules, edición del 16 de septiembre de 2026, <https://krogrules.com/news/edition-16-september-2026>. Fuente secundaria; consultado el 9 de octubre de 2026.
[^29]: Modulos, <https://docs.modulos.ai/frameworks/eu-ai-act/harmonized-standards/en-18286>, y Cloud Security Alliance, <https://labs.cloudsecurityalliance.org/research/csa-research-note-eu-ai-act-pren-18286-iso-42001-20260428-cs/>. Fuente secundaria; consultado el 9 de octubre de 2026.
[^30]: Art. 22 del Reglamento (UE) 2024/1689 reproducido en <https://artificialintelligenceact.eu/article/22/>. Fuente secundaria que reproduce el texto oficial; consultado el 9 de octubre de 2026.
[^31]: Reglamento (UE) 2026/1744, EUR-Lex, <https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng>. Fuente primaria; consultado el 9 de octubre de 2026.
[^32]: K&L Gates, <https://www.cyberlawwatch.com/2026/07/31/eu-digital-omnibus-on-ai-enters-into-force/>. Fuente secundaria; consultado el 9 de octubre de 2026.
[^33]: Senado de la República, comunicado sobre la comisión de IA, <https://comunicacionsocial.senado.gob.mx/informacion/comunicados/13261-comision-del-senado-impulsa-ley-general-para-regular-y-fomentar-el-uso-de-la-inteligencia-artificial>. Fuente primaria; consultado el 9 de octubre de 2026.
[^34]: Sistema de Información Legislativa, iniciativa del GP del PAN, <http://sil.gobernacion.gob.mx/Archivos/Documentos/2026/09/asun_5145594_20260929_1788971726.pdf>. Fuente primaria; consultado el 9 de octubre de 2026.
[^35]: Cámara de Diputados, reformas a la LFT (art. 305 Bis) y a la LFDA (arts. 87, 102, 118 y 121), DOF del 14 de mayo de 2026, <https://www.diputados.gob.mx/LeyesBiblio/ref/lft.htm> y <https://www.diputados.gob.mx/LeyesBiblio/ref/lfda.htm>. Fuente primaria; consultado el 9 de octubre de 2026.
[^36]: Secihti y ATDT, comunicado del 29 de enero de 2026, <https://www.secihti.mx/wp-content/uploads/2026/01/Comunicado_conjunto_Secihti_ATDT_IA_29012026.pdf>. Fuente primaria; consultado el 9 de octubre de 2026.
[^37]: Reglamento de la LFPDPPP (DOF del 21 de diciembre de 2011), art. 112, <https://www.diputados.gob.mx/LeyesBiblio/regley/Reg_LFPDPPP.pdf>. Fuente primaria para el texto; su aplicación bajo la ley de 2025 es una interpretación. Consultado el 9 de octubre de 2026.
[^38]: Ley 31814, El Peruano, <https://busquedas.elperuano.pe/dispositivo/NL/2192926-1>. Fuente primaria; consultado el 9 de octubre de 2026.
[^39]: EY Perú, alerta sobre el reglamento de la Ley 31814, <https://www.ey.com/es_pe/technical/tax-alert/reglamento-ley-promueve-uso-inteligencia-artificial>. Fuente secundaria; consultado el 9 de octubre de 2026.
[^40]: Cámara de Diputados de Brasil, ficha del PL 2338/2023, <https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2487262>, y Senado Federal, nota del 10 de diciembre de 2024, <https://www12.senado.leg.br/noticias/materias/2024/12/10/senado-aprova-regulamentacao-da-inteligencia-artificial-texto-vai-a-camara>. Fuente primaria; consultado el 9 de octubre de 2026.
[^41]: Senado de Chile, notas del 24 de octubre de 2025, <https://www.senado.cl/comunicaciones/noticias/proyecto-que-regula-sistemas-de-inteligencia-artificial-sera-estudiado-por>, y del 26 de mayo de 2026, <https://www.senado.cl/comunicaciones/noticias/senadores-conocen-propuesta-del-ejecutivo-para-ley-marco-de-ia>. Fuente primaria; consultado el 9 de octubre de 2026.
[^42]: Ley 21.719 (Diario Oficial de Chile, 13 de diciembre de 2024), Biblioteca del Congreso Nacional, <https://www.bcn.cl/leychile/navegar?idNorma=1209272>: artículo primero transitorio (vigencia) y art. 8° bis que incorpora a la Ley 19.628. Fuente primaria; consultado el 9 de octubre de 2026.
[^43]: DNP, CONPES 4144, <https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/4144.pdf>, y Cámara de Representantes, PL 025 de 2026, <https://www.camara.gov.co/wp-content/uploads/2026/07/proyectos-ley/documentos/proyecto-36127/P.L.025-2026SC-INTELIGENCIA-ARTIFICIAL.pdf>. Fuente primaria; consultado el 9 de octubre de 2026.
[^44]: DPL News, <https://dplnews.com/?p=311680> (Argentina) y <https://dplnews.com/?p=288384> (Uruguay). Fuente secundaria; consultado el 9 de octubre de 2026.
[^45]: INACAL, Resolución Directoral N.° 000013-2025-INACAL/DN (El Peruano, 30 de junio de 2025), <https://www.gob.pe/institucion/inacal/normas-legales/6916171-000013-2025-inacal-dn>. Fuente primaria; consultado el 9 de octubre de 2026.

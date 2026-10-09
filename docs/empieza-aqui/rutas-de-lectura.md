---
description: Rutas de lectura de Descifrando ISO 42001 según tu perfil - GRC, datos e IA, dirección, auditoría, una ruta exprés de una hora y una para estudiantes.
---

# Rutas de lectura

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-map-marker-path: Orientación</span>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: 9 min de lectura</span>
</div>

!!! abstract "En una frase"
    No tienes que leer toda la guía ni en orden: elige tu perfil, sigue la lista y termina con la herramienta o plantilla que te proponemos para pasar de leer a hacer.

Cada ruta te dice para quién es, qué ya sabes, qué te falta y qué páginas leer en orden, con un tiempo aproximado y la razón de cada parada. Los tiempos son estimaciones de lectura atenta; si vas tomando notas para tu organización, calcula el doble.

<div class="grid cards" markdown>

-   :material-shield-account-outline:{ .lg .middle } **Soy de GRC**

    ---

    Ya dominas ISO 27001 u otro sistema de gestión. Descubre qué reutilizas, qué adaptas y qué es nuevo cuando entra la IA.

    [:octicons-arrow-right-24: Ruta GRC](#ruta-grc)

-   :material-database-cog-outline:{ .lg .middle } **Soy de datos e IA**

    ---

    Construyes o integras modelos. Entiende el sistema de gestión sin burocracia: qué documentar, qué probar y por qué.

    [:octicons-arrow-right-24: Ruta de datos e IA](#ruta-datos)

-   :material-account-tie-outline:{ .lg .middle } **Soy directivo**

    ---

    ¿Te aplica? ¿Cuánto esfuerzo implica? ¿Qué ganas? Lo esencial en menos de 20 minutos.

    [:octicons-arrow-right-24: Ruta directiva](#ruta-directivo)

-   :material-clipboard-search-outline:{ .lg .middle } **Soy auditor**

    ---

    Criterios, evidencia esperada, preguntas por cláusula y control, y hallazgos bien redactados.

    [:octicons-arrow-right-24: Ruta de auditoría](#ruta-auditor)

</div>

¿Tienes solo una hora? Ve a la [ruta exprés](#ruta-expres). ¿Te preparas para un curso o un examen? Ve a la [ruta para estudiantes](#ruta-estudiantes).

## Soy de GRC {#ruta-grc}

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: Unas 4 horas en total</span>
</div>

**Para quién es.** Responsables de un SGSI, oficiales de cumplimiento, gestores de riesgo, consultores y auditores internos que ya trabajan con ISO 27001, ISO 9001 u otra norma de sistema de gestión.

**Lo que ya sabes.** La estructura armonizada, cómo se arma una Declaración de Aplicabilidad, cómo se evalúan y tratan riesgos, cómo funciona una auditoría interna y una revisión por la dirección.

**Lo que te falta.** Vocabulario técnico de IA (modelo, entrenamiento, deriva, alucinación), la noción de roles frente a cada sistema, la evaluación de impacto hacia personas y sociedad, y los controles de ciclo de vida y datos, que no tienen equivalente en tu SGSI.

1. [ISO 42001 en 5 minutos](iso42001-en-5-minutos.md) · *6 min* — El mapa completo antes de entrar al detalle.
2. [IA para profesionales de GRC](../fundamentos/ia-para-profesionales-grc.md) · *20 min* — El vocabulario técnico mínimo para conversar con los equipos de datos sin perderte.
3. [Roles en la IA](../fundamentos/roles-en-la-ia.md) · *15 min* — Tu rol frente a cada sistema define tu alcance y el peso de cada control.
4. [Riesgo frente a impacto](../fundamentos/riesgo-vs-impacto.md) · *15 min* — El mayor cambio conceptual respecto de ISO 27001.
5. [Integración con ISO 27001](../integracion/con-iso27001.md) · *20 min* — Qué reutilizas tal cual, qué adaptas y qué construyes desde cero.
6. [Cláusula 4 · Contexto](../clausulas/c4-contexto.md) · *20 min* — Cómo entran los roles y el propósito de cada sistema al contexto.
7. [Cláusula 6 · Planificación](../clausulas/c6-planificacion.md) · *30 min* — Criterios de riesgo, tratamiento, SoA y evaluación de impacto: el corazón del SGIA.
8. [Anexo A: los 38 controles](../anexo-a/index.md) · *15 min* — Filtra por la insignia "Nuevo frente a 27001" para ver dónde está tu trabajo real.
9. [A.5 · Evaluación de impactos](../anexo-a/a5-evaluacion-de-impacto.md) · *20 min* — El objetivo más nuevo para alguien que viene de seguridad.
10. [A.7 · Datos](../anexo-a/a7-datos.md) · *20 min* — Calidad, procedencia y preparación de datos, vistos como controles.
11. [A.10 · Terceros y clientes](../anexo-a/a10-terceros.md) · *15 min* — La cadena de suministro de la IA y la responsabilidad compartida.
12. [Documentación requerida](../implementacion/documentacion-requerida.md) · *15 min* — Qué documentos y registros vas a necesitar, y cuáles ya tienes.
13. [Caso: PyME que usa IA generativa](../casos-practicos/pyme-usa-ia-generativa.md) · *25 min* — Un primer proyecto típico, de punta a punta.

!!! tip "Herramienta recomendada"
    La [Declaración de Aplicabilidad de 38 controles](../plantillas/index.md#declaracion-de-aplicabilidad) en Excel o CSV. Llénala para tu organización junto al [selector de rol](../herramientas/selector-de-rol.md) y tendrás tu primer análisis de brechas.

## Soy de datos e IA {#ruta-datos}

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: Unas 4 horas en total</span>
</div>

**Para quién es.** Personas de ciencia de datos, ingeniería de aprendizaje automático, desarrollo de software, MLOps y producto que construyen, ajustan o integran sistemas de IA.

**Lo que ya sabes.** Modelos, métricas, conjuntos de datos, *pipelines*, despliegue y monitoreo técnico.

**Lo que te falta.** La lógica de un sistema de gestión (por qué documentar y quién decide), cómo se audita tu trabajo, cómo se valora el impacto en personas y sociedad, y qué evidencia tienes que poder mostrar.

1. [ISO 42001 en 5 minutos](iso42001-en-5-minutos.md) · *6 min* — Para entender en qué marco cae tu trabajo.
2. [¿Qué es un SGIA?](../fundamentos/que-es-un-sgia.md) · *12 min* — Por qué un sistema de gestión no es burocracia, sino memoria y decisiones trazables.
3. [Roles en la IA](../fundamentos/roles-en-la-ia.md) · *15 min* — Productor, proveedor, cliente: quién responde por qué.
4. [Principios de IA responsable](../fundamentos/principios-ia-responsable.md) · *15 min* — Equidad, transparencia, robustez y otros principios, aterrizados a decisiones concretas.
5. [Riesgo frente a impacto](../fundamentos/riesgo-vs-impacto.md) · *15 min* — Dos evaluaciones distintas que vas a alimentar con tus pruebas.
6. [Cláusula 6 · Planificación](../clausulas/c6-planificacion.md) · *30 min* — De dónde salen los criterios con los que se juzgará tu modelo.
7. [Cláusula 8 · Operación](../clausulas/c8-operacion.md) · *20 min* — Cuándo hay que reevaluar riesgos e impactos y qué cuenta como cambio.
8. [A.6 · Ciclo de vida](../anexo-a/a6-ciclo-de-vida.md) · *25 min* — Requisitos, verificación y validación, despliegue, monitoreo y registros.
9. [A.7 · Datos](../anexo-a/a7-datos.md) · *20 min* — Adquisición, calidad, procedencia y preparación de datos.
10. [A.4 · Recursos](../anexo-a/a4-recursos.md) · *15 min* — Documentar datos, herramientas, cómputo y personas detrás de cada sistema.
11. [A.8 · Información a partes interesadas](../anexo-a/a8-informacion-partes-interesadas.md) · *15 min* — Qué necesitan saber usuarios y clientes sobre tu sistema.
12. Un caso práctico según lo que construyes: [Fintech con *scoring* crediticio](../casos-practicos/fintech-scoring.md) si entrenas modelos, o [Empresa que desarrolla un chatbot](../casos-practicos/empresa-desarrolla-chatbot.md) si trabajas con modelos de lenguaje · *25 min* — Lo anterior aplicado a un sistema real.
13. [Preguntas del auditor](../auditoria/preguntas-del-auditor.md) · *25 min* — Lo que te van a preguntar, para que no te tome por sorpresa.

!!! tip "Herramienta recomendada"
    La [ficha del sistema de IA](../plantillas/index.md#ficha-del-sistema): la tarjeta de identidad de cada sistema, con su propósito, datos, desempeño, limitaciones y supervisión humana. Si desarrollas, complétala con el [procedimiento del ciclo de vida](../plantillas/index.md#procedimiento-ciclo-de-vida).

## Soy directivo {#ruta-directivo}

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: 17 min lo esencial · 2 horas completa</span>
</div>

**Para quién es.** Dirección general, socios, consejeros y directores de área que tienen que decidir si invertir en ISO 42001 y patrocinar el proyecto.

**Lo que ya sabes.** Tu negocio, tus clientes, la regulación de tu sector y cómo se toman decisiones de riesgo en tu organización.

**Lo que te falta.** Saber si la norma te conviene, cuánto esfuerzo implica, qué te pide a ti personalmente y qué decisiones no puedes delegar.

Los dos primeros pasos son lo esencial y suman menos de 20 minutos; el resto te da elementos para decidir con calma.

1. [ISO 42001 en 5 minutos](iso42001-en-5-minutos.md) · *6 min* — Qué es y qué no es, sin tecnicismos.
2. [¿Necesito ISO 42001?](necesito-iso42001.md) · *11 min* — Un árbol de decisión con cuatro resultados posibles y el esfuerzo de cada uno.
3. [Mitos y realidades](mitos-y-realidades.md) · *12 min* — Para no comprar promesas que la norma no cumple.
4. [Cláusula 5 · Liderazgo](../clausulas/c5-liderazgo.md) · *15 min* — Lo que la norma le pide a la alta dirección y que no se puede delegar.
5. [Riesgo frente a impacto](../fundamentos/riesgo-vs-impacto.md) · *15 min* — Las dos preguntas que tendrás que responder sobre cada sistema.
6. [Hoja de ruta](../implementacion/hoja-de-ruta.md) · *20 min* — Fases, entregables y quién participa.
7. [Cómo se certifica](../auditoria/como-se-certifica.md) · *15 min* — Qué pasa en una auditoría de certificación y cómo prepararte.
8. El caso práctico más parecido a tu organización, desde el [índice de casos](../casos-practicos/index.md) · *25 min* — Para ver decisiones concretas de una dirección como la tuya.

!!! tip "Herramienta recomendada"
    El [autodiagnóstico](../herramientas/autodiagnostico.md) para saber dónde está tu organización hoy y, si decides avanzar, la [plantilla de política de IA](../plantillas/index.md#politica-de-ia) como primer documento que vas a aprobar.

## Soy auditor {#ruta-auditor}

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: Unas 4 horas en total</span>
</div>

**Para quién es.** Auditores internos, auditores de organismos de certificación y consultores que preparan a organizaciones para una auditoría.

**Lo que ya sabes.** Técnicas de auditoría, muestreo, entrevistas, redacción de hallazgos y la lógica de la estructura armonizada.

**Lo que te falta.** Criterios propios de la IA, qué evidencia es razonable pedir según el rol de la organización, cómo leer una evaluación de impacto y dónde suelen esconderse las debilidades.

1. [ISO 42001 en 5 minutos](iso42001-en-5-minutos.md) · *6 min* — El mapa general.
2. [Cómo usar esta guía](como-usar-esta-guia.md) · *10 min* — Para entender las insignias de esfuerzo, novedad y rol que verás en cada control.
3. [Roles en la IA](../fundamentos/roles-en-la-ia.md) · *15 min* — El rol cambia qué controles son razonables y qué exclusiones se sostienen.
4. [Riesgo frente a impacto](../fundamentos/riesgo-vs-impacto.md) · *15 min* — Dos procesos distintos que conviene no confundir al revisar la evidencia.
5. [Cláusulas 4 a 10](../clausulas/index.md) · *8 min* — Vista general de los requisitos auditables.
6. [Cláusula 6 · Planificación](../clausulas/c6-planificacion.md) · *30 min* — Criterios de riesgo, SoA y evaluación de impacto: donde más hallazgos aparecen.
7. [Cláusula 8 · Operación](../clausulas/c8-operacion.md) · *20 min* — Evaluaciones periódicas y ante cambios, y control de procesos externos.
8. [Cláusula 9 · Evaluación del desempeño](../clausulas/c9-evaluacion-del-desempeno.md) · *20 min* — Diferencias finas con ISO 27001 en las entradas de la revisión por la dirección.
9. [Anexo A: los 38 controles](../anexo-a/index.md) · *15 min* — La matriz para planear el muestreo por objetivo.
10. [Anexos B, C y D](../anexos-b-c-d.md) · *15 min* — Por qué el Anexo B es normativo y qué significa eso al auditar.
11. [Preguntas del auditor](../auditoria/preguntas-del-auditor.md) · *25 min* — Preguntas por cláusula y control, listas para tu plan de auditoría.
12. [Hallazgos de ejemplo](../auditoria/hallazgos-ejemplo.md) · *20 min* — Cómo redactar no conformidades y observaciones sobre IA.
13. [Cómo se certifica](../auditoria/como-se-certifica.md) · *15 min* — El proceso de certificación visto desde ambos lados.
14. [Checklist de preparación](../auditoria/checklist-preparacion.md) · *15 min* — Lo que la organización debería tener listo antes de que llegues.

!!! tip "Herramienta recomendada"
    El [checklist de auditoría interna](../plantillas/index.md#checklist-auditoria-interna), organizado por cláusula y por control del Anexo A, para usarlo como base de tu lista de verificación.

## Ruta exprés de una hora {#ruta-expres}

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: 60 min</span>
</div>

**Para quién es.** Para cualquiera que necesite una opinión informada hoy: antes de una junta, una llamada con un cliente o una propuesta de consultoría.

**Lo que ya sabes.** Que la IA ya está en tu organización y que alguien te va a preguntar por ISO 42001.

**Lo que te falta.** Una idea clara de qué es, si te aplica y por dónde empezar.

1. [ISO 42001 en 5 minutos](iso42001-en-5-minutos.md) · *6 min* — Qué es, cómo está organizada y qué no es.
2. [¿Necesito ISO 42001?](necesito-iso42001.md) · *11 min* — Tu resultado en el árbol de decisión.
3. [Mitos y realidades](mitos-y-realidades.md) · *12 min* — Para no repetir errores frecuentes en la junta.
4. [Riesgo frente a impacto](../fundamentos/riesgo-vs-impacto.md) · *15 min* — La idea que más distingue a esta norma.
5. [Autodiagnóstico](../herramientas/autodiagnostico.md) · *15 min* — Cierra con una foto de tu preparación para compartir.

!!! tip "Herramienta recomendada"
    El mismo [autodiagnóstico](../herramientas/autodiagnostico.md): su resultado es un buen anexo para la presentación que tengas que hacer.

## Estudiantes y quienes se preparan para un curso {#ruta-estudiantes}

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: Unas 10 horas, en varias sesiones</span>
</div>

**Para quién es.** Estudiantes de licenciatura o posgrado y profesionales que se preparan para un curso de implementador líder, auditor líder o para un examen sobre gobierno de IA.

**Lo que ya sabes.** Depende de tu formación; esta ruta no da nada por sentado.

**Lo que te falta.** Una visión completa y ordenada, el vocabulario preciso y práctica aplicando la norma a casos concretos.

1. [Cómo usar esta guía](como-usar-esta-guia.md) · *10 min* — Para aprovechar insignias, pestañas y glosario desde el inicio.
2. Fundamentos completos, en orden: [¿Qué es un SGIA?](../fundamentos/que-es-un-sgia.md), [IA para profesionales de GRC](../fundamentos/ia-para-profesionales-grc.md), [Roles en la IA](../fundamentos/roles-en-la-ia.md), [La familia de normas de IA](../fundamentos/familia-de-normas.md), [Principios de IA responsable](../fundamentos/principios-ia-responsable.md) y [Riesgo frente a impacto](../fundamentos/riesgo-vs-impacto.md) · *1 h 30 min* — La base conceptual que todo curso da por sabida.
3. [Cláusulas 4 a 10](../clausulas/index.md), una por una y en orden · *2 h 30 min* — Los requisitos auditables, con ejemplos por rol.
4. [Anexo A](../anexo-a/index.md) y sus nueve páginas de objetivos · *3 h* — Los 38 controles con su intención, evidencia y versión mínima y madura.
5. [Anexos B, C y D](../anexos-b-c-d.md) · *15 min* — Una pregunta clásica de examen: qué es normativo y qué informativo.
6. Los tres casos prácticos, desde el [índice de casos](../casos-practicos/index.md) · *1 h 15 min* — La norma aplicada a tres organizaciones con roles distintos.
7. [Preguntas del auditor](../auditoria/preguntas-del-auditor.md) y [hallazgos de ejemplo](../auditoria/hallazgos-ejemplo.md) · *45 min* — Para pensar como quien evalúa.
8. [Glosario](../glosario.md) y [preguntas frecuentes](../preguntas-frecuentes.md) · *30 min* — Repaso final de términos y dudas comunes.

!!! tip "Cómo estudiar con esta guía"
    - Después de cada cláusula, explícala en voz alta en tres frases sin mirar la página.
    - Elige una de las tres empresas de los casos y contesta para ella las preguntas de la sección "Preguntas para tu organización".
    - Repasa el glosario con tarjetas: el término en una cara, tu definición en la otra.

!!! tip "Herramienta recomendada"
    Como ejercicio integrador, llena la [Declaración de Aplicabilidad de 38 controles](../plantillas/index.md#declaracion-de-aplicabilidad) para una de las empresas de los casos prácticos y justifica cada exclusión. Apóyate en el [selector de rol](../herramientas/selector-de-rol.md) para verificar tus decisiones.

## ¿Ya tienes un proyecto en marcha?

Si ya estás implementando, salta directo a la [hoja de ruta](../implementacion/hoja-de-ruta.md), los [errores frecuentes](../implementacion/errores-frecuentes.md) y las [plantillas](../plantillas/index.md). Vuelve a las rutas cuando necesites profundizar en un tema concreto.

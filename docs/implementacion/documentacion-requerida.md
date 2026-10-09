---
description: Mapa de la información documentada de un SGIA según ISO/IEC 42001 - lo que piden las cláusulas 4 a 10, lo que generan los 38 controles del Anexo A, cómo organizar el repositorio y cómo versionar modelos, datos y evaluaciones.
---

# Documentación requerida

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-map-marker-path: Implementación</span>
<span class="dx-badge dx-badge--rol-usa">:material-cloud-download-outline: Usa IA de terceros</span>
<span class="dx-badge dx-badge--rol-desarrolla">:material-code-braces: Desarrolla IA</span>
<span class="dx-badge dx-badge--rol-provee">:material-handshake-outline: Provee IA a clientes</span>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: 18 min de lectura</span>
</div>

!!! abstract "En una frase"
    ISO 42001 pide relativamente pocos documentos con nombre propio, pero espera que puedas demostrar todo lo que haces; esta página separa lo obligatorio de lo recomendable y te propone cómo organizarlo para encontrar cualquier evidencia en minutos.

La norma no habla de "manual", de "procedimientos obligatorios" ni de "registros". Usa un solo término, **información documentada** (*documented information*): cualquier información que la organización tiene que controlar, sin importar el formato. Una página de la intranet, una hoja de cálculo, un repositorio Git, un tablero de indicadores o la grabación de una capacitación cuentan, siempre que estén identificados, protegidos y bajo control de versiones ([7.5](../clausulas/c7-apoyo.md#c-7-5)).

La información documentada de un sistema de gestión de IA (SGIA) se forma en tres capas:

1. **Lo que piden las cláusulas 4 a 10** de forma explícita. Es igual para todas las organizaciones.
2. **Lo que piden los controles del Anexo A** que incluyas en tu Declaración de Aplicabilidad (*Statement of Applicability*, SoA). Depende de tu rol y de tus riesgos.
3. **Lo que tú decidas que es necesario** para que el SGIA funcione ([7.5.1](../clausulas/c7-apoyo.md#c-7-5)). Aquí cabe todo lo demás: instructivos, guías, listas de verificación.

La propia norma reconoce que el volumen varía según el tamaño de la organización, la complejidad de sus procesos y la competencia de su gente. Contadores Alameda puede operar con una carpeta compartida bien ordenada y unas pocas decenas de documentos; Monarca Crédito necesitará integrar su repositorio documental con el registro de modelos de su equipo de ciencia de datos. Los nombres de los controles que aparecen en esta página son traducción libre de referencia.

## Mantener y conservar: documentos y registros {#mantener-y-conservar}

En las normas de sistemas de gestión verás dos verbos: **mantener** y **conservar** información documentada. Las ediciones recientes, construidas sobre la estructura armonizada, a veces solo dicen que cierta información debe estar disponible como información documentada, sin aclarar cuál de los dos casos es. En nuestra lectura, la distinción útil no está en el verbo sino en la naturaleza de la información:

| | Documento (se mantiene) | Registro (se conserva) |
|---|---|---|
| **Qué es** | Dice cómo se hacen las cosas o qué reglas se decidieron | Prueba que algo ocurrió y con qué resultado |
| **¿Cambia?** | Sí: se actualiza, se revisa y se versiona | No: si tiene un error, se emite una versión nueva o una nota, pero el original no se reescribe |
| **Pregunta típica del auditor** | "¿Cómo lo hacen?" | "Muéstrame que lo hicieron" |
| **Riesgo típico** | Que esté desactualizado y nadie lo siga | Que no exista, o que se haya armado la semana anterior a la auditoría |
| **Ejemplos** | Política de IA, alcance, metodología de riesgos, procedimiento del ciclo de vida | Evaluaciones de impacto realizadas, informes de auditoría, actas, bitácoras |

!!! tip "Analogía"
    Piensa en una escuela. El plan de estudios es un documento: se revisa cada año, se mejora y siempre hay una versión vigente. Las boletas de calificaciones son registros: nadie reescribe la boleta de un alumno de hace tres ciclos, y si hubo un error se emite una corrección que deja rastro. Un buen SGIA tiene las dos cosas y sabe cuál es cuál.

Algunas piezas son híbridas. La SoA es un documento vivo, pero cada versión aprobada es también la prueba de una decisión. La matriz de riesgos se actualiza constantemente, pero la "fotografía" de cada ciclo de evaluación es un registro. Para estos casos, la solución práctica es versionar y no sobrescribir: la versión vigente sirve para operar y las anteriores sirven de evidencia.

## Lo que piden las cláusulas 4 a 10 {#clausulas}

Esta tabla reúne la información documentada que la norma menciona de forma explícita en sus requisitos. La columna "Naturaleza" es nuestra clasificación, no de la norma.

| Cláusula | Información documentada | Naturaleza | Cómo se ve en la práctica |
|---|---|---|---|
| [4.3](../clausulas/c4-contexto.md#c-4-3) | Alcance del SGIA | Documento | Enunciado breve (el del certificado) y documento de alcance con sistemas, roles, ubicaciones y exclusiones |
| [4.4](../clausulas/c4-contexto.md#c-4-4) | El propio SGIA, con sus procesos y cómo interactúan (esta cláusula pide documentarlo) | Documento | Mapa de procesos o manual breve del SGIA |
| [5.2](../clausulas/c5-liderazgo.md#c-5-2) | Política de IA | Documento | Política aprobada por la alta dirección, con referencias a otras políticas |
| [6.1.1](../clausulas/c6-planificacion.md#c-6-1-1) | Acciones emprendidas para identificar y atender riesgos y oportunidades de IA | Registro | Registro de riesgos y oportunidades del SGIA con acciones y seguimiento |
| [6.1.2](../clausulas/c6-planificacion.md#c-6-1-2) | Cómo evalúas los riesgos de IA (el proceso mismo) | Documento (en nuestra lectura) | Metodología con criterios, escalas y responsables; guarda también sus versiones anteriores |
| [6.1.3](../clausulas/c6-planificacion.md#c-6-1-3) | Proceso de tratamiento de riesgos, controles necesarios y Declaración de Aplicabilidad | Documento | Metodología de tratamiento, SoA con justificaciones y descripción de cómo opera cada control incluido |
| [6.1.4](../clausulas/c6-planificacion.md#c-6-1-4) | Lo que concluyó cada evaluación de impacto | Registro | Una evaluación fechada y aprobada por sistema |
| [6.2](../clausulas/c6-planificacion.md#c-6-2) | Objetivos de IA | Documento | Tabla de objetivos con indicador, meta, responsable y fecha |
| [7.2](../clausulas/c7-apoyo.md#c-7-2) | Evidencia de la competencia de las personas | Registro | Constancias, currículos, resultados de evaluaciones de capacitación |
| [7.5.1](../clausulas/c7-apoyo.md#c-7-5) | Lo que la organización determine necesario para la eficacia del SGIA | Ambos | Procedimientos, instructivos, fichas de sistemas, matrices |
| [8.1](../clausulas/c8-operacion.md#c-8-1) | Lo necesario para confiar en que los procesos se ejecutaron como se planificó | Registro, sobre todo | Aprobaciones de despliegue, registros de cambios, bitácoras, listas de verificación llenas |
| [8.2](../clausulas/c8-operacion.md#c-8-2) | Resultados de cada evaluación de riesgos de IA | Registro | Matriz fechada por ciclo o por cambio significativo |
| [8.3](../clausulas/c8-operacion.md#c-8-3) | Resultados de cada tratamiento de riesgos de IA | Registro | Avance del plan, evidencia de implementación y verificación de eficacia |
| [8.4](../clausulas/c8-operacion.md#c-8-4) | Resultados de cada evaluación de impacto | Registro | Evaluaciones periódicas y por cambio significativo |
| [9.1](../clausulas/c9-evaluacion-del-desempeno.md#c-9-1) | Resultados del seguimiento y la medición | Registro | Tablero de indicadores con análisis y conclusiones |
| [9.2](../clausulas/c9-evaluacion-del-desempeno.md#c-9-2) | Implementación del programa de auditoría y sus resultados (9.2.2) | Documento y registro | Programa anual; planes, informes y listas de hallazgos |
| [9.3](../clausulas/c9-evaluacion-del-desempeno.md#c-9-3) | Conclusiones y decisiones de cada revisión de la dirección (9.3.3) | Registro | Acta con decisiones, responsables y fechas |
| [10.2](../clausulas/c10-mejora.md#c-10-2) | Qué no conformidades hubo, qué se hizo y con qué resultado | Registro | Registro de no conformidades y acciones correctivas con análisis de causa y verificación de eficacia |

Dos matices que suelen pasarse por alto:

- **La SoA conecta riesgos y controles.** En la cláusula 3, la definición de Declaración de Aplicabilidad incluye una nota según la cual los riesgos identificados y los controles que los atienden quedan reflejados en ella. Por eso te recomendamos que cada fila de la SoA remita a los riesgos o requisitos externos que justifican el control.
- **La información de origen externo también se controla** ([7.5.3](../clausulas/c7-apoyo.md#c-7-5)). Contratos y términos de uso de proveedores de IA, documentación técnica de un modelo fundacional, leyes y criterios de autoridades: si los necesitas para operar el SGIA, identifícalos, guarda la versión vigente y revísalos cuando cambien.

## Lo que conviene documentar aunque no se pida con esas palabras {#recomendado}

Varios requisitos no mencionan la información documentada, pero sería muy difícil demostrar que los cumples sin dejar algo por escrito.

| Tema | Por qué documentarlo | Referencia |
|---|---|---|
| Análisis de contexto y partes interesadas | Demuestra que el alcance consideró los factores internos, externos y las expectativas de terceros | [4.1](../clausulas/c4-contexto.md#c-4-1), [4.2](../clausulas/c4-contexto.md#c-4-2) |
| Rol de la organización frente a cada sistema | La norma pide determinarlo; el auditor preguntará cómo lo hiciste | [4.1](../clausulas/c4-contexto.md#c-4-1) |
| Inventario de sistemas de IA | Es la base del alcance, de los riesgos y de los controles de recursos | [4.3](../clausulas/c4-contexto.md#c-4-3), [A.4.2](../anexo-a/a4-recursos.md#a-4-2) |
| Criterios de riesgo de IA | La norma pide establecerlos y mantenerlos; normalmente viven dentro de la metodología | [6.1.1](../clausulas/c6-planificacion.md#c-6-1-1) |
| Aprobación del plan de tratamiento y aceptación de riesgos residuales | Es obligatoria; sin firma o acta no hay forma de probarla | [6.1.3](../clausulas/c6-planificacion.md#c-6-1-3) |
| Roles, responsabilidades y autoridades | Deben asignarse y comunicarse; la matriz RACI es la evidencia natural | [5.3](../clausulas/c5-liderazgo.md#c-5-3) |
| Planificación de cambios al SGIA | Prueba que los cambios se hicieron de manera planificada | [6.3](../clausulas/c6-planificacion.md#c-6-3) |
| Toma de conciencia y comunicación | Acuses de lectura, campañas y una matriz de qué se comunica, a quién, cuándo y cómo | [7.3](../clausulas/c7-apoyo.md#c-7-3), [7.4](../clausulas/c7-apoyo.md#c-7-4) |

## Lo que generan los controles del Anexo A {#anexo-a}

Antes de la tabla, tres ideas:

1. **Todo control incluido necesita una descripción.** La cláusula [6.1.3](../clausulas/c6-planificacion.md#c-6-1-3) pide que los controles necesarios estén disponibles como información documentada. Aunque el control no hable de documentar, tiene que estar descrito en algún lado: en la SoA, en un procedimiento o en la ficha del sistema.
2. **Veinticinco de los 38 controles piden documentar algo de forma expresa,** con verbos como *documentar*, *definir y documentar* o *evaluar y documentar*. Si el control aplica, ese documento no es opcional.
3. **Tres controles producen información por naturaleza:** la documentación técnica para partes interesadas ([A.6.2.7](../anexo-a/a6-ciclo-de-vida.md#a-6-2-7)), las bitácoras de eventos ([A.6.2.8](../anexo-a/a6-ciclo-de-vida.md#a-6-2-8)) y la información para usuarios ([A.8.2](../anexo-a/a8-informacion-partes-interesadas.md#a-8-2)). No usan el verbo *documentar*, pero su resultado es información.

**Cómo leer la columna "Carácter":** *Obligatorio si aplica* significa que el texto del control pide documentar; *Obligatorio si aplica ✱* significa que el control produce información por naturaleza; *Recomendado* significa que el control no lo pide, pero sin evidencia difícilmente lo demostrarás. Si un control está excluido en tu SoA con una justificación válida, no genera documentos.

| Control | Documento o registro típico | Carácter |
|---|---|---|
| [A.2.2](../anexo-a/a2-politicas.md#a-2-2) Política de IA | Política de IA aprobada y comunicada | Obligatorio si aplica |
| [A.2.3](../anexo-a/a2-politicas.md#a-2-3) Alineación con otras políticas de la organización | Matriz de cruce entre políticas; referencias en las políticas afectadas | Recomendado |
| [A.2.4](../anexo-a/a2-politicas.md#a-2-4) Revisión de la política de IA | Historial de versiones y minuta de cada revisión | Recomendado |
| [A.3.2](../anexo-a/a3-organizacion-interna.md#a-3-2) Roles y responsabilidades de IA | Matriz RACI, nombramientos, descripciones de puesto | Recomendado |
| [A.3.3](../anexo-a/a3-organizacion-interna.md#a-3-3) Reporte de inquietudes | Procedimiento del canal; registro de reportes y su atención | Recomendado |
| [A.4.2](../anexo-a/a4-recursos.md#a-4-2) Documentación de recursos | Recursos de cada sistema por etapa del ciclo de vida | Obligatorio si aplica |
| [A.4.3](../anexo-a/a4-recursos.md#a-4-3) Recursos de datos | Fichas de los conjuntos de datos (*datasheets*) | Obligatorio si aplica |
| [A.4.4](../anexo-a/a4-recursos.md#a-4-4) Recursos de herramientas | Inventario de modelos, bibliotecas y plataformas con versiones (AI-BOM) | Obligatorio si aplica |
| [A.4.5](../anexo-a/a4-recursos.md#a-4-5) Recursos de sistema y cómputo | Inventario de infraestructura y capacidad | Obligatorio si aplica |
| [A.4.6](../anexo-a/a4-recursos.md#a-4-6) Recursos humanos | Personas y competencias requeridas en cada etapa | Obligatorio si aplica |
| [A.5.2](../anexo-a/a5-evaluacion-de-impacto.md#a-5-2) Proceso de evaluación de impacto | Procedimiento con disparadores, método y responsables | Recomendado (en la práctica, casi indispensable) |
| [A.5.3](../anexo-a/a5-evaluacion-de-impacto.md#a-5-3) Documentación de las evaluaciones de impacto | Resultados de cada evaluación y plazo de conservación definido | Obligatorio si aplica |
| [A.5.4](../anexo-a/a5-evaluacion-de-impacto.md#a-5-4) Evaluación del impacto en individuos o grupos | Sección de impactos en personas y grupos | Obligatorio si aplica |
| [A.5.5](../anexo-a/a5-evaluacion-de-impacto.md#a-5-5) Evaluación de impactos sociales | Sección de impactos en la sociedad | Obligatorio si aplica |
| [A.6.1.2](../anexo-a/a6-ciclo-de-vida.md#a-6-1-2) Objetivos para el desarrollo responsable | Objetivos y cómo se reflejan en el ciclo de desarrollo | Obligatorio si aplica |
| [A.6.1.3](../anexo-a/a6-ciclo-de-vida.md#a-6-1-3) Procesos para el diseño y desarrollo responsable | Procedimiento del ciclo de vida con puertas de aprobación | Obligatorio si aplica |
| [A.6.2.2](../anexo-a/a6-ciclo-de-vida.md#a-6-2-2) Requisitos y especificación | Documento de requisitos o caso de negocio | Obligatorio si aplica |
| [A.6.2.3](../anexo-a/a6-ciclo-de-vida.md#a-6-2-3) Documentación del diseño y desarrollo | Documento de diseño; registros de decisiones de arquitectura | Obligatorio si aplica |
| [A.6.2.4](../anexo-a/a6-ciclo-de-vida.md#a-6-2-4) Verificación y validación | Plan de pruebas con criterios; reportes de evaluación | Obligatorio si aplica |
| [A.6.2.5](../anexo-a/a6-ciclo-de-vida.md#a-6-2-5) Despliegue | Plan de despliegue; lista de verificación de salida | Obligatorio si aplica |
| [A.6.2.6](../anexo-a/a6-ciclo-de-vida.md#a-6-2-6) Operación y monitoreo | Qué se monitorea, cómo se repara, actualiza y da soporte | Obligatorio si aplica |
| [A.6.2.7](../anexo-a/a6-ciclo-de-vida.md#a-6-2-7) Documentación técnica | Ficha del modelo o del sistema; manual de operación | Obligatorio si aplica ✱ |
| [A.6.2.8](../anexo-a/a6-ciclo-de-vida.md#a-6-2-8) Registro de eventos | Bitácoras y decisión de en qué etapas se registran | Obligatorio si aplica ✱ |
| [A.7.2](../anexo-a/a7-datos.md#a-7-2) Datos para desarrollo y mejora | Procesos de gestión de datos para desarrollo | Obligatorio si aplica |
| [A.7.3](../anexo-a/a7-datos.md#a-7-3) Adquisición de datos | Registro de fuentes, criterios de selección y derechos de uso | Obligatorio si aplica |
| [A.7.4](../anexo-a/a7-datos.md#a-7-4) Calidad de los datos | Requisitos de calidad y evidencia de que se cumplen | Obligatorio si aplica |
| [A.7.5](../anexo-a/a7-datos.md#a-7-5) Procedencia de los datos | Proceso de registro de procedencia; registros de linaje | Obligatorio si aplica |
| [A.7.6](../anexo-a/a7-datos.md#a-7-6) Preparación de los datos | Criterios y métodos de preparación | Obligatorio si aplica |
| [A.8.2](../anexo-a/a8-informacion-partes-interesadas.md#a-8-2) Documentación del sistema e información para usuarios | Aviso de interacción con IA, instrucciones, límites conocidos | Obligatorio si aplica ✱ |
| [A.8.3](../anexo-a/a8-informacion-partes-interesadas.md#a-8-3) Reporte externo | Canal publicado; registro de reportes y su atención | Recomendado |
| [A.8.4](../anexo-a/a8-informacion-partes-interesadas.md#a-8-4) Comunicación de incidentes | Plan de comunicación de incidentes | Obligatorio si aplica |
| [A.8.5](../anexo-a/a8-informacion-partes-interesadas.md#a-8-5) Información para las partes interesadas | Registro de obligaciones de reporte | Obligatorio si aplica |
| [A.9.2](../anexo-a/a9-uso.md#a-9-2) Procesos para el uso responsable | Proceso de alta y aprobación de usos de IA | Obligatorio si aplica |
| [A.9.3](../anexo-a/a9-uso.md#a-9-3) Objetivos para el uso responsable | Objetivos de uso responsable | Obligatorio si aplica |
| [A.9.4](../anexo-a/a9-uso.md#a-9-4) Uso previsto del sistema de IA | Declaración de uso previsto; registros de operación y escalamientos | Recomendado |
| [A.10.2](../anexo-a/a10-terceros.md#a-10-2) Asignación de responsabilidades | Matriz de responsabilidad compartida; cláusulas contractuales | Recomendado |
| [A.10.3](../anexo-a/a10-terceros.md#a-10-3) Proveedores | Procedimiento y evaluaciones de proveedores de IA | Recomendado |
| [A.10.4](../anexo-a/a10-terceros.md#a-10-4) Clientes | Requisitos de clientes; términos de uso; documentación entregada | Recomendado |

!!! info "Si solo usas IA de terceros"
    Varios controles de recursos técnicos, de desarrollo y de datos para desarrollo suelen quedar excluidos con justificación, y entonces no generan documentos. Pero revisa con calma antes de excluir: si curas una base de conocimiento, como la de Alma en Contadores Alameda, la calidad de esos datos ([A.7.4](../anexo-a/a7-datos.md#a-7-4)) y el registro de eventos del chatbot ([A.6.2.8](../anexo-a/a6-ciclo-de-vida.md#a-6-2-8)) probablemente sí aplican.

## Estructura sugerida de un repositorio documental {#repositorio}

No necesitas una herramienta GRC para certificarte. Una carpeta compartida, un espacio de wiki o un repositorio Git funcionan si respetan cinco reglas:

- **Una sola fuente de verdad.** Cada documento vive en un solo lugar; el resto son enlaces.
- **Una lista maestra** con código, título, versión vigente, dueño, aprobador, clasificación y fecha de próxima revisión.
- **Documentos y registros separados,** porque se gestionan distinto: unos se actualizan y los otros se conservan sin cambios.
- **Enlaces, no copias, a los artefactos de ingeniería.** Los modelos, los conjuntos de datos y las canalizaciones viven en sus propias plataformas; el repositorio del SGIA apunta a ellos.
- **Permisos por clasificación.** Una evaluación de impacto puede describir vulnerabilidades de un grupo y una instrucción de sistema puede revelar cómo evadir un filtro.

Esta es una estructura de partida. Haz clic en los números para ver la explicación de cada carpeta.

``` { .yaml .annotate }
sgia/
├── 00-control-documental/           # (1)!
│   ├── lista-maestra.xlsx
│   └── procedimiento-informacion-documentada.md
├── 01-contexto-y-alcance/           # (2)!
│   ├── analisis-de-contexto.md
│   ├── partes-interesadas.xlsx
│   ├── roles-por-sistema.xlsx
│   └── alcance-sgia.md
├── 02-liderazgo/                    # (3)!
│   ├── politica-de-ia.md
│   ├── uso-aceptable-ia-generativa.md
│   ├── raci-ia.md
│   └── canal-de-inquietudes.md
├── 03-riesgo-impacto-y-soa/         # (4)!
│   ├── metodologia-riesgos-ia.md
│   ├── procedimiento-evaluacion-impacto.md
│   ├── matriz-de-riesgos-ia.xlsx
│   ├── declaracion-de-aplicabilidad.xlsx
│   ├── plan-de-tratamiento.xlsx
│   └── objetivos-de-ia.xlsx
├── 04-sistemas/                     # (5)!
│   ├── inventario-sistemas-ia.xlsx
│   └── IA-02-alma/
│       ├── ficha-del-sistema.md
│       ├── evaluaciones-de-impacto/
│       ├── evaluaciones-de-riesgo/
│       ├── proveedor/               # (6)!
│       └── cambios/
├── 05-procedimientos/               # (7)!
├── 06-apoyo/                        # (8)!
│   ├── competencias-y-capacitacion/
│   └── comunicacion/
├── 07-registros-de-operacion/       # (9)!
│   ├── indicadores/
│   ├── incidentes/
│   └── reportes-externos/
├── 08-auditoria-y-revision/         # (10)!
└── 09-mejora/                       # (11)!
```

1.  El procedimiento de información documentada ([7.5](../clausulas/c7-apoyo.md#c-7-5)) y la lista maestra. Define la convención de nombres (por ejemplo, `SGIA-PRO-03 v2.1`), quién aprueba cada tipo de documento y cuánto tiempo se conserva cada tipo de registro.
2.  Todo lo de la [cláusula 4](../clausulas/c4-contexto.md): contexto, partes interesadas, roles por sistema y alcance. El alcance es información documentada obligatoria.
3.  Política de IA ([5.2](../clausulas/c5-liderazgo.md#c-5-2)), política de uso aceptable, matriz RACI ([5.3](../clausulas/c5-liderazgo.md#c-5-3)) y procedimiento del canal de inquietudes ([A.3.3](../anexo-a/a3-organizacion-interna.md#a-3-3)). Guarda aquí también las actas del comité de IA.
4.  Los documentos de la [cláusula 6](../clausulas/c6-planificacion.md). La metodología y la SoA son documentos vivos; cada corrida de la matriz de riesgos y cada plan aprobado conviene guardarlos como versión fechada que no se sobrescribe.
5.  Una subcarpeta por sistema, nombrada con el identificador del inventario. Reúne la ficha del sistema, sus evaluaciones de impacto y de riesgo ([8.2](../clausulas/c8-operacion.md#c-8-2), [8.4](../clausulas/c8-operacion.md#c-8-4)) y el historial de cambios. Si desarrollas, la ficha enlaza al registro de modelos en lugar de copiar artefactos pesados.
6.  Información de origen externo: contrato, términos de uso, documentación del proveedor y sus evaluaciones periódicas ([A.10.3](../anexo-a/a10-terceros.md#a-10-3)). Anota la fecha en que descargaste cada versión.
7.  Procedimientos operativos: ciclo de vida, gestión de datos, alta de casos de uso, comunicación de incidentes, evaluación de proveedores. Solo los que tu SoA necesite.
8.  Evidencia de la [cláusula 7](../clausulas/c7-apoyo.md): matriz de competencias, constancias de capacitación, evaluaciones de eficacia, campañas de concientización y matriz de comunicación.
9.  Registros de la operación diaria ([8.1](../clausulas/c8-operacion.md#c-8-1), [9.1](../clausulas/c9-evaluacion-del-desempeno.md#c-9-1)): tableros de indicadores con su análisis, registro de incidentes y reportes recibidos por el canal externo ([A.8.3](../anexo-a/a8-informacion-partes-interesadas.md#a-8-3)).
10. Programa, planes e informes de auditoría interna ([9.2](../clausulas/c9-evaluacion-del-desempeno.md#c-9-2)) y actas de revisión por la dirección ([9.3](../clausulas/c9-evaluacion-del-desempeno.md#c-9-3)), organizados por año.
11. Registro de no conformidades y acciones correctivas ([10.2](../clausulas/c10-mejora.md#c-10-2)), con la evidencia de cierre y de verificación de eficacia de cada una.

!!! tip "Una prueba sencilla"
    Pídele a alguien ajeno al proyecto que encuentre, sin ayuda, la evaluación de impacto vigente de un sistema y el acta donde se aceptaron sus riesgos residuales. Si tarda más de cinco minutos, el repositorio necesita orden antes de la auditoría.

## Control de versiones de artefactos de IA {#control-de-versiones}

En un SGSI, el control de versiones se ocupa sobre todo de políticas y procedimientos. En un SGIA hay que extenderlo a artefactos que cambian mucho más rápido: fichas de modelo (*model cards*), fichas de conjuntos de datos (*datasheets*), reportes de evaluación, instrucciones de sistema (*system prompts*), filtros de seguridad (*guardrails*) y bases de conocimiento. La razón es la trazabilidad. Tarde o temprano alguien preguntará: ¿qué versión del sistema estaba en producción en tal fecha, con qué datos se construyó, qué pruebas pasó y quién la aprobó? Puede ser un auditor, un cliente que reclama, una autoridad o tu propio equipo después de un incidente.

Siete principios para responder esa pregunta:

1. **Identificador único y estable** para cada artefacto, ligado al identificador del sistema en el inventario.
2. **Versiones con significado.** Un esquema como mayor.menor.corrección funciona si defines qué cuenta como cambio mayor. Te recomendamos que "cambio mayor" coincida con lo que tu metodología llama cambio significativo, porque ese es el que dispara una nueva evaluación de riesgos ([8.2](../clausulas/c8-operacion.md#c-8-2)) y de impacto ([8.4](../clausulas/c8-operacion.md#c-8-4)).
3. **Registros inmutables.** Un reporte de validación o una evaluación de impacto aprobada no se edita; si algo cambia, se emite una versión nueva que referencia a la anterior.
4. **Huella digital (*hash*)** de los conjuntos de datos y de los artefactos del modelo, para demostrar que lo evaluado es lo que se desplegó.
5. **Enlaces entre artefactos.** La ficha del modelo apunta a la versión de los datos, al reporte de verificación y validación, a la evaluación de impacto y a la aprobación. Sin esos enlaces, tienes documentos sueltos, no trazabilidad.
6. **Retención definida.** Conserva los registros al menos durante la vida del sistema y lo que exijan tus obligaciones fiscales, laborales y de datos personales. Para las evaluaciones de impacto, [A.5.3](../anexo-a/a5-evaluacion-de-impacto.md#a-5-3) pide además fijar un plazo de conservación.
7. **Legibilidad a futuro.** Un cuaderno de análisis que solo corre con una versión específica de una biblioteca puede volverse ilegible; guarda su entorno o un reporte exportado.

| Artefacto | Cuándo cambia de versión | Dónde suele vivir | Con qué se liga |
|---|---|---|---|
| Ficha del modelo o del sistema | Reentrenamiento, cambio de umbrales, nueva limitación conocida | Registro de modelos o repositorio del SGIA | Datos, reporte de verificación y validación, evaluación de impacto |
| Ficha del conjunto de datos | Nueva extracción, cambio de fuente, nueva regla de limpieza | Catálogo de datos, con huella digital | Modelos que lo usan; base legal del tratamiento |
| Reporte de verificación y validación | Cada candidato a liberación | Generado por la canalización, solo lectura | Versión del modelo y de los datos de prueba |
| Evaluación de impacto | Revisión periódica o cambio significativo | Carpeta del sistema en el repositorio del SGIA | Versión del sistema evaluado; riesgos derivados |
| Instrucciones de sistema y filtros de seguridad | Cualquier cambio, por pequeño que sea | Git con revisión obligatoria | Evaluaciones de calidad y pruebas adversarias |
| Base de conocimiento (preguntas frecuentes, RAG) | Cada actualización aprobada | Repositorio con fecha y aprobador | Aprobación del experto del negocio |
| Documentación del proveedor | Cuando el proveedor publica cambios | Carpeta de origen externo | Evaluación del proveedor; evaluación de riesgos |

=== "Si usas IA de terceros"

    **Contadores Alameda** no tiene modelos que versionar, pero sí artefactos que cambian el comportamiento de sus sistemas. La base de conocimiento de Alma se versiona con fecha y con la firma del contador que la revisó, y se actualiza antes de cada temporada de declaraciones. La documentación y los términos de BotNorte se guardan como información de origen externo, junto con el nombre del modelo de lenguaje que BotNorte declara usar. El contrato le pide a BotNorte avisar si lo cambia, y ese aviso dispara una revisión de riesgos.

=== "Si desarrollas IA"

    **Monarca Crédito** usa su registro de modelos como eje. Cada versión de Score Monarca v3 tiene su ficha, la huella digital de los datos de entrenamiento (solicitudes, historial de buró de crédito, comportamiento transaccional y uso de la app con consentimiento), el reporte de validación por segmento (sexo, edad, entidad federativa) y el acta del Comité de Modelos que la aprobó. El modelo de asignación de línea (IA-02) declara de qué versión del *score* depende, para que un cambio en uno dispare la revisión del otro.

=== "Si provees IA a clientes"

    **Conversa Labs** versiona por separado lo que es común a la plataforma (orquestación, filtros de seguridad, versión del modelo fundacional) y lo que es de cada cliente (instrucciones de sistema, configuración de la recuperación sobre su base de conocimiento). Cada liberación lleva notas de versión para los clientes, y un cambio de modelo fundacional se trata como cambio mayor: nueva batería de evaluaciones de calidad y de inyección de instrucciones antes de desplegar.

!!! example "Trazabilidad en cinco minutos: Monarca Crédito"
    Durante la etapa 2, el auditor toma al azar una solicitud rechazada de hace cuatro meses y pregunta por qué se rechazó. El equipo muestra, en este orden:

    1. La bitácora de la decisión, con la versión del modelo que la emitió (v3.2) y los motivos de rechazo comunicados al solicitante.
    2. La ficha de la v3.2, con sus limitaciones conocidas y la fecha de despliegue.
    3. La huella digital del conjunto de entrenamiento y su ficha.
    4. El reporte de validación por segmento que la v3.2 pasó antes de liberarse.
    5. La evaluación de impacto vigente en esa fecha y el acta del Comité de Modelos que aprobó el despliegue y aceptó los riesgos residuales.

    Si cualquiera de esos eslabones falta, el auditor no puede confirmar que el ciclo de vida funcionó como dice el procedimiento, y es probable que levante un hallazgo.

## Errores frecuentes con la documentación {#errores}

!!! warning "Los que más vemos"
    - Comprar un paquete de documentos genéricos y llenarlo con el nombre de la empresa: el auditor detecta en la primera entrevista que nadie los sigue.
    - Tener procedimientos impecables y cero registros de que se ejecutaron.
    - Sobrescribir evaluaciones de impacto o matrices de riesgo, en lugar de versionarlas, y perder la historia.
    - Guardar la versión vigente de la política en tres lugares distintos, con tres fechas distintas.
    - Documentar todo en un solo "manual del SGIA" de 120 páginas que nadie abre.

    Más en [Errores frecuentes](errores-frecuentes.md).

## Plantillas relacionadas {#plantillas}

- [Política de IA](../plantillas/index.md#politica-de-ia) y [política de uso aceptable de IA generativa](../plantillas/index.md#uso-aceptable-ia-generativa)
- [Roles y responsabilidades (RACI)](../plantillas/index.md#raci-ia)
- [Inventario de sistemas de IA](../plantillas/index.md#inventario-sistemas-ia)
- [Metodología y matriz de riesgos de IA](../plantillas/index.md#evaluacion-de-riesgos)
- [Evaluación de impacto del sistema de IA](../plantillas/index.md#evaluacion-de-impacto)
- [Declaración de Aplicabilidad](../plantillas/index.md#declaracion-de-aplicabilidad)
- [Ficha del sistema de IA](../plantillas/index.md#ficha-del-sistema)
- [Registro de incidentes de IA](../plantillas/index.md#registro-de-incidentes)
- [Procedimiento del ciclo de vida](../plantillas/index.md#procedimiento-ciclo-de-vida)
- [Checklist de auditoría interna](../plantillas/index.md#checklist-auditoria-interna)

Para ver en qué momento del proyecto se produce cada documento, consulta la [hoja de ruta](hoja-de-ruta.md).

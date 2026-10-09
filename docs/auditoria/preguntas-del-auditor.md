---
description: Guía de entrevista de auditoría de ISO/IEC 42001 por cláusula (4 a 10) y por control del Anexo A, con a quién preguntar, qué evidencia se espera y cómo se ve una respuesta débil frente a una sólida.
---

# Preguntas del auditor

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-clipboard-search-outline: Auditoría</span>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: 30 min de lectura</span>
</div>

!!! abstract "En una frase"
    Una auditoría de ISO/IEC 42001 es, sobre todo, una conversación respaldada por evidencia; esta guía ordena las preguntas que suele hacer un auditor por cláusula y por control, dice a quién se las hace, qué evidencia espera ver y cómo distinguir una respuesta débil de una sólida.

## Cómo usar esta guía

Si te van a auditar, úsala para saber qué te preguntarán y comprobar que la evidencia existe, **no para que tu equipo memorice respuestas**: un auditor con oficio nota en dos minutos una respuesta ensayada que no coincide con los registros. Si eres auditor interno, úsala como base de tu plan de entrevistas, junto con la plantilla de [checklist de auditoría interna](../plantillas/index.md#checklist-auditoria-interna).

Cada página de control del Anexo A trae su propia lista de preguntas centrada en el control. Aquí las organizamos de otra forma: como **guía de entrevista**, pensando en quién está sentado del otro lado de la mesa y en qué evidencia conviene pedir en ese momento. Los nombres de los controles que usamos son traducción libre de referencia, no el texto oficial de la norma.

### Cómo pregunta un buen auditor

ISO 19011 describe los métodos de auditoría; en la práctica, en un SGIA se traducen en cinco hábitos:

1. **Preguntas abiertas.** "¿Cómo deciden…?", "¿Qué pasó la última vez que…?", "Muéstrame…". Una pregunta que se contesta con sí o no casi nunca produce evidencia.
2. **Triangulación.** Lo que dice la persona se contrasta con lo que dice el documento y con lo que muestra el registro o la observación directa. Si las tres fuentes coinciden, hay conformidad; si no, hay una pregunta más.
3. **El auditor elige la muestra.** "Muéstrame una evaluación de impacto" invita a que te enseñen la mejor; "muéstrame la del sistema IA-02, versión vigente" no.
4. **Trazabilidad en los dos sentidos.** Del requisito hacia la evidencia (¿dónde se ve que esto se cumple?) y de la evidencia hacia el requisito (este cambio de modelo, ¿pasó por la evaluación de riesgos?).
5. **Escenarios.** "¿Qué pasaría si mañana el proveedor cambia de modelo?" revela si el proceso existe en la cabeza de la gente o solo en el papel.

### A quién se le pregunta

| Perfil | En nuestros casos | Dónde se concentra la entrevista |
|---|---|---|
| :material-account-tie: Alta dirección | Socia directora (Contadores Alameda), dirección general y Comité de Modelos (Monarca Crédito), CEO (Conversa Labs) | 4.1, 4.3, 5, 6.1.3 (aprobaciones), 6.2, 7.1, 9.3, A.2 |
| :material-account-cog-outline: Responsable del SGIA | Gerente de TI (Contadores Alameda), Responsable de Confianza y Seguridad (Conversa Labs), quien coordine el SGIA en Monarca | 4, 6, 7.5, 8, 9.1, 9.2, 10, SoA |
| :material-robot-outline: Dueño del sistema de IA | Director de Riesgos (Score Monarca v3), Líder de atención a clientes (Alma), CTO (plataforma Conversa) | 6.1.2, 6.1.4, 8.2 a 8.4, A.5, A.6.2, A.9 |
| :material-chart-scatter-plot: Ciencia de datos e ingeniería | Líder de Ciencia de Datos y MLOps (Monarca), equipo del CTO (Conversa) | A.4, A.6, A.7 |
| :material-cart-outline: Compras y proveedores | Gerente de TI con BotNorte; quien administra la API de fraude en Monarca; Legal con el proveedor del modelo fundacional en Conversa | 8.1, A.10.2, A.10.3 |
| :material-account-eye-outline: Supervisor humano | Analistas de la banda gris (Monarca), agentes que reciben el traspaso (clientes de Conversa), contadores que revisan la captura de CFDI | 7.2, 7.3, A.9.4, A.6.2.8 |
| :material-scale-balance: Legal, privacidad y cumplimiento | Coordinadora de cumplimiento y datos personales, Oficial de Privacidad, Oficial de Cumplimiento, Legal de Conversa | 4.1, 4.2, A.7.3, A.8.5, A.10.2 |
| :material-headset: Atención a clientes | Líder de atención (Alameda), Customer Success (Conversa) | A.8.2, A.8.3, A.8.4, A.10.4 |

### Cómo leer cada ficha

Cada subcláusula y cada control tiene una ficha plegable con el enlace a su guía, el perfil al que conviene preguntar, de tres a seis preguntas abiertas y la evidencia que el auditor espera encontrar. En los puntos donde más se juega la auditoría agregamos una comparación entre una **respuesta débil** y una **respuesta sólida**. La primera ficha está abierta como ejemplo.

## Cláusula 4 · Contexto de la organización

???+ auditor "4.1 · Contexto, propósito previsto y roles"
    **Guía:** [4.1](../clausulas/c4-contexto.md#c-4-1) · **A quién:** alta dirección, responsable del SGIA, legal

    1. Cuéntame qué sistemas de IA usan, desarrollan o venden, y qué papel juegan ustedes en cada uno.
    2. ¿Qué cambió en el último año fuera de la organización (leyes, clientes, competencia, proveedores de modelos) que afecte la forma en que gestionan la IA? ¿Dónde quedó registrado?
    3. Si un cliente empieza a usar su sistema para algo distinto, ¿dónde está escrito el propósito previsto contra el que lo compararían?
    4. ¿Cómo decidieron si el cambio climático es un tema pertinente para su SGIA?

    **Evidencia esperada:** análisis de contexto con temas propios de la IA; inventario de sistemas con propósito previsto y rol por sistema; registro de requisitos legales y contractuales aplicables.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "Usamos el mismo análisis FODA del SGSI; la IA está incluida en tecnología." | "Este es el análisis de contexto del SGIA, actualizado en la última revisión por la dirección. En el inventario, cada sistema trae su propósito previsto y nuestro rol: con Alma somos usuarios y la desplegamos frente a nuestros clientes; BotNorte es el proveedor y un tercero aporta el modelo de lenguaje." |

??? auditor "4.2 · Partes interesadas y sus requisitos"
    **Guía:** [4.2](../clausulas/c4-contexto.md#c-4-2) · **A quién:** responsable del SGIA, legal y cumplimiento, atención a clientes

    1. ¿Quiénes resultan afectados por sus sistemas de IA sin ser clientes ni usuarios?
    2. De los requisitos que identificaron, ¿cuáles decidieron atender con el SGIA y cuáles no? ¿Por qué?
    3. Muéstrame cómo entró al SGIA el último requisito nuevo de un cliente, por ejemplo un cuestionario de gobierno de IA.
    4. ¿Qué dispara una actualización de esta lista?

    **Evidencia esperada:** registro de partes interesadas con sus requisitos y la decisión sobre cada uno; huella de actualización (fecha, motivo, responsable).

??? auditor "4.3 · Alcance del SGIA"
    **Guía:** [4.3](../clausulas/c4-contexto.md#c-4-3) · **A quién:** alta dirección, responsable del SGIA

    1. ¿Por qué el alcance incluye estos sistemas y deja fuera otros?
    2. ¿Cómo se aseguran de que lo que quedó fuera no comparta datos ni procesos con lo que está dentro?
    3. ¿Cómo tomaron en cuenta las interfaces con proveedores y clientes?
    4. Si mañana compran una herramienta de IA para nómina, ¿entra o no al alcance? ¿Quién lo decide?

    **Evidencia esperada:** alcance documentado y conciliado con el inventario; criterio para incorporar sistemas nuevos.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "El alcance es toda la empresa", sin poder decir qué sistemas cubre. | "Cubre IA-01 a IA-03. El asistente interno de reclutamiento está fuera porque sigue en piloto con datos ficticios; el procedimiento de alta de casos de uso obliga a revisar el alcance antes de pasarlo a producción." |

??? auditor "4.4 · El SGIA y sus procesos"
    **Guía:** [4.4](../clausulas/c4-contexto.md#c-4-4) · **A quién:** responsable del SGIA

    1. Dibújame en el pizarrón los procesos del SGIA y cómo se conectan entre sí.
    2. ¿Qué proceso recibe los resultados de la evaluación de impacto y qué hace con ellos?
    3. ¿Dónde se nota que el SGIA forma parte de la operación diaria y no es un proyecto paralelo?

    **Evidencia esperada:** mapa de procesos con entradas y salidas; puntos de contacto con el SGSI, privacidad y gestión de cambios.

## Cláusula 5 · Liderazgo

??? auditor "5.1 · Liderazgo y compromiso"
    **Guía:** [5.1](../clausulas/c5-liderazgo.md#c-5-1) · **A quién:** alta dirección (entrevista indispensable)

    1. ¿Por qué decidieron implementar un SGIA y qué esperan obtener de él?
    2. ¿Qué decisión concreta tomaron en el último año con información que les dio el SGIA?
    3. ¿Qué recursos aprobaron para el SGIA y cuáles negaron?
    4. ¿Cómo saben que el SGIA funciona? ¿Qué informe reciben y cada cuánto?

    **Evidencia esperada:** minutas con decisiones, presupuesto aprobado, comunicados de la dirección, participación en la revisión por la dirección.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "Eso lo ve el de TI; nosotros firmamos lo que nos traen." | "En marzo frenamos el cambio de la base de conocimiento de Alma porque la exactitud en plazos fiscales bajó del umbral; está en la minuta del comité. También aprobamos una persona de medio tiempo para revisar conversaciones." |

??? auditor "5.2 · Política de IA"
    **Guía:** [5.2](../clausulas/c5-liderazgo.md#c-5-2) · **A quién:** alta dirección, responsable del SGIA, personal muestreado

    1. ¿Qué compromisos asume la política y cómo se convirtieron en objetivos?
    2. A cualquier colaborador: ¿qué dice la política sobre lo que puedes hacer con IA en tu trabajo?
    3. ¿Qué partes interesadas tienen acceso a la política y por qué esas?
    4. ¿Qué otras políticas cita y dónde está esa referencia?

    **Evidencia esperada:** política aprobada por la alta dirección, evidencia de comunicación y de disponibilidad para partes interesadas. Se audita en la misma conversación que [A.2.2](../anexo-a/a2-politicas.md#a-2-2).

??? auditor "5.3 · Roles, responsabilidades y autoridades"
    **Guía:** [5.3](../clausulas/c5-liderazgo.md#c-5-3) · **A quién:** alta dirección, responsable del SGIA

    1. ¿Quién responde ante la dirección por el SGIA y qué autoridad tiene para detener un sistema?
    2. ¿Quién informa el desempeño del SGIA a la alta dirección? Muéstrame el último informe.
    3. A un analista: si ves algo raro en el sistema, ¿con quién vas?
    4. Si el responsable del SGIA se ausenta un mes, ¿quién cubre?

    **Evidencia esperada:** nombramientos, matriz de roles, informes periódicos a la dirección.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "Todos somos responsables de la IA." | "La Responsable de Confianza y Seguridad tiene nombramiento firmado por el CEO, puede suspender un despliegue y reporta cada trimestre; su suplente está en la matriz de roles." |

## Cláusula 6 · Planificación

??? auditor "6.1.1 · Riesgos, oportunidades y criterios de riesgo de IA"
    **Guía:** [6.1.1](../clausulas/c6-planificacion.md#c-6-1-1) · **A quién:** responsable del SGIA, dueños de riesgos

    1. ¿Cómo distinguen un riesgo de IA aceptable de uno que no lo es? Muéstrame los criterios.
    2. ¿Esos criterios miran el daño a personas y a la sociedad, o solo la pérdida para la empresa?
    3. ¿Qué oportunidades identificaron y qué hicieron con ellas?
    4. ¿Evalúan por sistema o por grupos de sistemas? ¿Por qué así?

    **Evidencia esperada:** criterios de riesgo documentados y aprobados; registro de riesgos y oportunidades con acciones y forma de evaluar su eficacia.

??? auditor "6.1.2 · Evaluación de riesgos de IA"
    **Guía:** [6.1.2](../clausulas/c6-planificacion.md#c-6-1-2) · **A quién:** dueños de riesgos, ciencia de datos, responsable del SGIA

    1. Tomo este riesgo del registro: explícame cómo llegaron a ese nivel.
    2. Si dos personas evalúan el mismo riesgo, ¿llegan al mismo resultado? ¿Cómo lo aseguran?
    3. ¿Cómo entraron los resultados de la evaluación de impacto a esta evaluación?
    4. ¿Dónde están las consecuencias para individuos y sociedades?

    **Evidencia esperada:** metodología, registro de riesgos con análisis de consecuencias y probabilidad, priorización, vínculo con las evaluaciones de impacto.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "Usamos la matriz 5×5 del SGSI; la IA es un activo más." | "La escala es 5×5, pero la consecuencia se valora en tres columnas: organización, personas y sociedad. El riesgo de sesgo por código postal salió alto por la columna de personas, aunque el impacto financiero era bajo; viene de la evaluación de impacto de IA-01, sección 4." |

??? auditor "6.1.3 · Tratamiento y Declaración de Aplicabilidad"
    **Guía:** [6.1.3](../clausulas/c6-planificacion.md#c-6-1-3) · **A quién:** responsable del SGIA, dueños de riesgos, dirección que aprueba

    1. Elijo un control de la SoA: ¿qué riesgo trata? Y al revés: este riesgo alto, ¿con qué control se trata?
    2. ¿Por qué excluyeron este control? ¿Qué parte de la evaluación lo respalda?
    3. ¿Qué controles propios agregaron que no están en el Anexo A?
    4. ¿Quién aprobó el plan de tratamiento y aceptó los riesgos residuales? ¿Con qué información?

    **Evidencia esperada:** SoA con justificación de inclusión y exclusión, plan de tratamiento con responsables y fechas, aprobación de la dirección designada.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | Exclusión: "No aplica porque somos un despacho contable." | "Excluimos A.6.1.2 y A.6.1.3 porque no diseñamos ni desarrollamos sistemas de IA: los tres del inventario son de terceros y ningún contrato ni ley nos lo exige. La curaduría de la base de conocimiento de Alma la cubrimos con un control propio, CA-01." |

??? auditor "6.1.4 · Evaluación de impacto del sistema de IA"
    **Guía:** [6.1.4](../clausulas/c6-planificacion.md#c-6-1-4) · **A quién:** responsable del SGIA, dueño del sistema, privacidad, expertos del dominio

    1. ¿Cómo está definido el proceso: quién lo inicia, quién participa y con qué método?
    2. Para este sistema, ¿qué usos indebidos previsibles imaginaron? ¿Alguno ya ocurrió?
    3. ¿En qué jurisdicciones opera el sistema y qué cambió eso en la evaluación?
    4. ¿Quién decide qué resultados se comparten fuera de la organización?

    **Evidencia esperada:** procedimiento de evaluación de impacto, evaluaciones por sistema, constancia de que los resultados alimentaron la evaluación de riesgos.

??? auditor "6.2 · Objetivos de IA"
    **Guía:** [6.2](../clausulas/c6-planificacion.md#c-6-2) · **A quién:** alta dirección, dueños de procesos y sistemas

    1. ¿Cuáles son sus objetivos de IA y cómo saben hoy si van bien?
    2. ¿Qué objetivo no se cumplió el último periodo y qué hicieron al respecto?
    3. ¿Quién responde por cada objetivo, con qué recursos y para cuándo?
    4. ¿Cómo se conectan con la política de IA y con lo que se proponen para desarrollar y usar la IA de forma responsable?

    **Evidencia esperada:** objetivos documentados con plan, responsable y método de evaluación; seguimiento periódico.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "Usar la IA de forma ética y responsable." | "Mantener por encima de 0.80 el cociente de tasas de aprobación entre grupos de sexo y edad en Score Monarca, medido cada trimestre; responsable, la Líder de Ciencia de Datos; el último trimestre fue 0.83." |

??? auditor "6.3 · Planificación de cambios"
    **Guía:** [6.3](../clausulas/c6-planificacion.md#c-6-3) · **A quién:** responsable del SGIA

    1. ¿Cuál fue el último cambio al SGIA (no al modelo, al sistema de gestión) y cómo lo planearon?
    2. Cuando incorporaron un sistema nuevo al alcance, ¿qué analizaron antes?
    3. ¿Cómo evitan que un cambio deje roles sin dueño o procesos sin actualizar?

    **Evidencia esperada:** registro de cambios del SGIA con análisis previo, responsables y verificación posterior.

## Cláusula 7 · Apoyo

??? auditor "7.1 · Recursos"
    **Guía:** [7.1](../clausulas/c7-apoyo.md#c-7-1) · **A quién:** alta dirección, responsable del SGIA

    1. ¿Qué recursos pidió el SGIA este año y qué se aprobó?
    2. ¿Les alcanza el equipo para revisar todas las decisiones que deben pasar por una persona, incluso en temporada alta?
    3. ¿Qué actividad del SGIA se atrasó por falta de recursos?

    **Evidencia esperada:** presupuesto, plantillas de personal, análisis de capacidad de los equipos de supervisión.

??? auditor "7.2 · Competencia"
    **Guía:** [7.2](../clausulas/c7-apoyo.md#c-7-2) · **A quién:** Recursos Humanos, dueños de sistemas, supervisores

    1. ¿Qué competencias definieron para quien supervisa las salidas de la IA?
    2. Muéstrame la evidencia de competencia de la analista que entró hace tres meses.
    3. ¿Cómo comprobaron que la capacitación sirvió?
    4. ¿Qué conocimientos de IA tiene quien hizo la auditoría interna?

    **Evidencia esperada:** perfiles de puesto, matriz de competencias, registros de formación con evaluación de eficacia.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | Una lista de asistencia a un webinar de "IA ética". | "Cada analista de la banda gris aprueba un examen, revisa 30 casos en pareja con un analista senior y en su primer mes se le revisa el 20 % de sus decisiones; aquí está el expediente de la última contratación." |

??? auditor "7.3 · Toma de conciencia"
    **Guía:** [7.3](../clausulas/c7-apoyo.md#c-7-3) · **A quién:** personal muestreado de distintas áreas

    1. ¿Qué herramientas de IA puedes usar con datos de clientes y cuáles no?
    2. ¿Qué pasa si alguien no sigue la política de IA?
    3. ¿Cómo contribuye tu trabajo a que la IA se use bien aquí?
    4. ¿Dónde reportarías una inquietud sobre un sistema de IA?

    **Evidencia esperada:** coherencia entre lo que dicen las personas y lo que exige la política; campañas y registros de sensibilización.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "Creo que hay una política, pero no la he leído." | "Solo el asistente de la suite con la cuenta empresarial. Nunca pego nóminas ni RFC en chatbots gratuitos, por lo que pasó el año pasado. Si veo algo raro, lo reporto en el buzón de la intranet." |

??? auditor "7.4 · Comunicación"
    **Guía:** [7.4](../clausulas/c7-apoyo.md#c-7-4) · **A quién:** responsable del SGIA, comunicación o legal

    1. ¿Qué comunican sobre el SGIA, a quién, cuándo y por qué medio?
    2. ¿Quién puede hablar con medios o reguladores sobre un incidente de IA?
    3. ¿Cómo comunicaron el último cambio de la política o de un procedimiento?

    **Evidencia esperada:** plan o matriz de comunicación, evidencia de comunicaciones internas y externas.

??? auditor "7.5 · Información documentada"
    **Guía:** [7.5](../clausulas/c7-apoyo.md#c-7-5) · **A quién:** responsable del SGIA, dueños de documentos

    1. ¿Cómo sé que este documento es la versión vigente?
    2. ¿Quién puede modificar una evaluación de impacto ya aprobada?
    3. ¿Cuánto tiempo conservan los registros y dónde está definido?
    4. ¿Cómo controlan la documentación que les entrega el proveedor del modelo?

    **Evidencia esperada:** repositorio con control de versiones y permisos, criterios de retención, lista de documentos externos controlados.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | Carpeta compartida con archivos "política_final_v3_bueno.docx". | "Todo vive en el repositorio documental: versión, fecha, aprobador y fecha de revisión en la portada; solo el responsable del SGIA publica. La documentación de BotNorte se descarga en cada cambio de versión y se registra." |

## Cláusula 8 · Operación

??? auditor "8.1 · Planificación y control operacional"
    **Guía:** [8.1](../clausulas/c8-operacion.md#c-8-1) · **A quién:** dueños de procesos, responsable del SGIA, compras

    1. ¿Qué criterios de operación definieron para el proceso de despliegue, y cómo se verifica que se cumplen?
    2. ¿Cómo saben si los controles funcionan? Muéstrame uno que no funcionó y qué hicieron.
    3. ¿Qué cambio no planeado ocurrió este año y cómo revisaron sus consecuencias?
    4. ¿Cómo controlan lo que les entrega cada proveedor de IA?

    **Evidencia esperada:** criterios de proceso documentados, registros de su aplicación, seguimiento de eficacia de controles, control de procesos externos.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "Confiamos en el proveedor; es una empresa grande." | "El contrato fija niveles de servicio y aviso previo de cambios de modelo. Cada trimestre revisamos sus métricas y, tras cada cambio notificado, corremos nuestro conjunto de 200 preguntas de prueba antes de aceptarlo." |

??? auditor "8.2 · Evaluación de riesgos en operación"
    **Guía:** [8.2](../clausulas/c8-operacion.md#c-8-2) · **A quién:** dueños de riesgos, responsable del SGIA

    1. ¿Cuándo fue la última evaluación de riesgos y qué la detonó?
    2. ¿Qué consideran un cambio significativo?
    3. Muéstrame las dos últimas evaluaciones de este sistema y explícame las diferencias.

    **Evidencia esperada:** resultados de evaluaciones a intervalos planificados y tras cambios, conservados y comparables.

??? auditor "8.3 · Tratamiento de riesgos en operación"
    **Guía:** [8.3](../clausulas/c8-operacion.md#c-8-3) · **A quién:** dueños de riesgos, responsable del SGIA

    1. ¿Cuál es el avance del plan de tratamiento?
    2. Muéstrame un tratamiento que no funcionó y cómo lo replantearon.
    3. Cuando apareció un riesgo nuevo, ¿qué proceso siguió?
    4. ¿Cómo verificaron que un tratamiento redujo el riesgo?

    **Evidencia esperada:** plan actualizado, verificaciones de eficacia, registros de replanteamientos.

??? auditor "8.4 · Evaluación de impacto en operación"
    **Guía:** [8.4](../clausulas/c8-operacion.md#c-8-4) · **A quién:** responsable del SGIA, dueño del sistema

    1. ¿Qué evaluaciones de impacto estaban programadas en el periodo y cuáles se hicieron?
    2. ¿Qué cambio significativo detonó la última reevaluación?
    3. Si el proveedor cambia el modelo de lenguaje que usa su servicio, ¿reevalúan? Muéstrame un caso.

    **Evidencia esperada:** calendario de evaluaciones, resultados conservados, reevaluaciones ligadas a cambios.

## Cláusula 9 · Evaluación del desempeño

??? auditor "9.1 · Seguimiento, medición, análisis y evaluación"
    **Guía:** [9.1](../clausulas/c9-evaluacion-del-desempeno.md#c-9-1) · **A quién:** responsable del SGIA, dueños de sistemas, MLOps

    1. ¿Qué miden, con qué método y cada cuánto?
    2. Recalculemos juntos este indicador con los datos fuente.
    3. ¿Qué decisiones tomaron con estos datos en el último trimestre?
    4. ¿Qué indicador dejaron de medir y por qué?

    **Evidencia esperada:** fichas de indicadores, resultados documentados, análisis y conclusiones sobre el desempeño del SGIA.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | Un tablero con gráficas sin umbrales ni responsables. | "Cada indicador tiene ficha con definición, fuente, umbral y acción. Este mes la deriva de la variable de ingreso pasó a zona de vigilancia y el comité pidió un análisis por entidad federativa." |

??? auditor "9.2 · Auditoría interna"
    **Guía:** [9.2](../clausulas/c9-evaluacion-del-desempeno.md#c-9-2) · **A quién:** auditor interno, responsable del SGIA

    1. Muéstrame el programa: ¿cómo decidieron qué auditar primero?
    2. ¿Quién auditó y cómo se aseguraron de que nadie revisara su propio trabajo?
    3. ¿Qué conocimientos de IA tenía el equipo auditor?
    4. ¿Cubrió todo el alcance y todos los controles aplicables de la SoA?
    5. ¿A quién se entregaron los resultados y qué se hizo con ellos?

    **Evidencia esperada:** programa basado en riesgo, planes e informes, evidencia de objetividad, seguimiento de hallazgos.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "La hizo la consultora que nos implementó; revisó que estuvieran los documentos." | "La hizo una auditora externa sin relación con la implementación, con un experto técnico en aprendizaje automático. Cubrió cláusulas 4 a 10 y los 31 controles aplicables; dejó tres menores, ya con acciones en curso, y el informe se presentó en la revisión por la dirección." |

??? auditor "9.3 · Revisión por la dirección"
    **Guía:** [9.3](../clausulas/c9-evaluacion-del-desempeno.md#c-9-3) · **A quién:** alta dirección

    1. ¿Cuándo fue la última revisión y quiénes participaron?
    2. ¿Qué concluyeron sobre si el SGIA sigue siendo idóneo, adecuado y eficaz?
    3. ¿Qué tendencias vieron en no conformidades, mediciones y auditorías?
    4. ¿Qué decisiones salieron de la revisión y en qué estado están?

    **Evidencia esperada:** minuta con entradas, conclusión, decisiones con responsable y fecha.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | Una presentación sin minuta ni acuerdos. | "Minuta firmada: revisamos indicadores, incidentes, auditoría interna y cambios regulatorios; concluimos que el SGIA es adecuado pero no del todo eficaz en proveedores, y decidimos tres acciones con dueño y fecha." |

## Cláusula 10 · Mejora

??? auditor "10.1 · Mejora continua"
    **Guía:** [10.1](../clausulas/c10-mejora.md#c-10-1) · **A quién:** alta dirección, responsable del SGIA

    1. Dame dos mejoras al SGIA del último año que no hayan nacido de una no conformidad.
    2. ¿Cómo deciden qué mejorar primero?
    3. ¿Qué parte del SGIA simplificaron porque no aportaba?

    **Evidencia esperada:** registro de mejoras, decisiones de la revisión por la dirección, comparación de desempeño antes y después.

??? auditor "10.2 · No conformidad y acción correctiva"
    **Guía:** [10.2](../clausulas/c10-mejora.md#c-10-2) · **A quién:** responsable del SGIA, dueños de procesos

    1. Muéstrame el registro de no conformidades; voy a elegir tres.
    2. Para esta, ¿cuál fue la causa y cómo llegaron a ella?
    3. ¿Revisaron si lo mismo pasaba en otros sistemas o áreas?
    4. ¿Cómo comprobaron que la acción funcionó?
    5. ¿Algún incidente de IA terminó registrado como no conformidad?

    **Evidencia esperada:** registro con naturaleza de la no conformidad, corrección, análisis de causa, acción, verificación de eficacia y cierre.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "Causa: error humano. Acción: recapacitar al personal." | "La causa fue que el control de cambios no exigía revisar la evaluación de impacto. Cambiamos el formulario para que no avance sin ese campo, revisamos los cambios de los últimos seis meses y en tres meses de operación no ha habido otro caso." |

## Anexo A · Controles

En la auditoría inicial, el auditor muestrea primero los controles que tratan los riesgos más altos y los que la SoA declara aplicables pero cuya operación no quedó clara en la etapa 1. Recuerda que la operación solo se audita en los controles que declaraste aplicables; de los excluidos se revisa la justificación. Debajo de cada encabezado encontrarás el enlace a la guía del objetivo.

## A.2 · Políticas relacionadas con la IA

<span class="dx-badge dx-badge--obj obj-a2">A.2 · Políticas</span> Guía: [A.2](../anexo-a/a2-politicas.md) · Entrevista principal: alta dirección y responsable del SGIA.

??? auditor "A.2.2 · Política de IA"
    **Guía:** [A.2.2](../anexo-a/a2-politicas.md#a-2-2) · **A quién:** alta dirección, personal de áreas usuarias

    1. Si un área quisiera usar IA para filtrar candidatos en reclutamiento, ¿qué diría la política y quién tendría la última palabra?
    2. ¿Qué principio de la política les costó más llevar a la práctica?
    3. ¿La política cubre lo que hacen según su rol: usar, desarrollar o proveer?

    **Evidencia esperada:** política vigente, registro de excepciones, casos decididos con base en ella.

??? auditor "A.2.3 · Alineación con otras políticas"
    **Guía:** [A.2.3](../anexo-a/a2-politicas.md#a-2-3) · **A quién:** responsable del SGIA, legal, privacidad, seguridad

    1. ¿La política de retención considera los registros de conversaciones del chatbot?
    2. ¿Lo que dice la política de seguridad sobre subir información a servicios externos es coherente con la de IA?
    3. Cuando cambia una política hermana, ¿quién revisa que siga alineada con la de IA?

    **Evidencia esperada:** matriz de cruce entre políticas, referencias cruzadas en los documentos.

??? auditor "A.2.4 · Revisión de la política de IA"
    **Guía:** [A.2.4](../anexo-a/a2-politicas.md#a-2-4) · **A quién:** responsable del SGIA, alta dirección

    1. ¿Qué intervalo de revisión definieron y por qué ese?
    2. ¿Qué evento reciente debió detonar una revisión extraordinaria? ¿La detonó?
    3. Comparemos la versión anterior con la vigente: ¿qué cambió y de dónde vino cada cambio?

    **Evidencia esperada:** historial de versiones con motivo del cambio, vínculo con revisión por la dirección e incidentes.

## A.3 · Organización interna

<span class="dx-badge dx-badge--obj obj-a3">A.3 · Organización</span> Guía: [A.3](../anexo-a/a3-organizacion-interna.md) · Entrevista principal: responsable del SGIA, Recursos Humanos y personal operativo.

??? auditor "A.3.2 · Roles y responsabilidades de IA"
    **Guía:** [A.3.2](../anexo-a/a3-organizacion-interna.md#a-3-2) · **A quién:** responsable del SGIA, dueños de sistemas, supervisores humanos

    1. ¿Quién responde por este sistema en producción a las tres de la mañana de un domingo?
    2. ¿Quién ejecuta una evaluación de impacto y quién la aprueba? ¿Son la misma persona?
    3. ¿Cómo se asignan los roles de IA cuando arranca un proyecto nuevo?
    4. A un analista: ¿cuál es tu papel frente al sistema y qué puedes decidir?

    **Evidencia esperada:** matriz RACI de IA, nombramientos, descripciones de puesto coherentes con lo que la gente hace.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | Una RACI genérica donde "Dirección" es responsable de todo. | "Cada sistema tiene dueño, responsable técnico y responsable de supervisión humana con nombre; la guardia de fin de semana está en el rol de MLOps y su escalamiento llega al Director de Riesgos." |

??? auditor "A.3.3 · Reporte de inquietudes"
    **Guía:** [A.3.3](../anexo-a/a3-organizacion-interna.md#a-3-3) · **A quién:** personal operativo, Recursos Humanos, área de ética o cumplimiento

    1. Si crees que el modelo trata mal a un grupo de clientes, ¿dónde lo reportas?
    2. ¿Cómo se protege a quien reporta?
    3. ¿Cuántos reportes relacionados con IA recibieron y qué pasó con ellos?
    4. ¿Pueden usar el canal los contratistas y el personal de proveedores?

    **Evidencia esperada:** procedimiento del canal, difusión, registro de reportes con su atención.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "Nunca hemos recibido reportes", y nadie en piso sabe que el canal existe. | "Tenemos categoría de IA en la línea de ética. Recibimos cuatro reportes este año; uno llevó a revisar la regla de rechazo automático para solicitantes sin historial en buró." |

## A.4 · Recursos para sistemas de IA

<span class="dx-badge dx-badge--obj obj-a4">A.4 · Recursos</span> Guía: [A.4](../anexo-a/a4-recursos.md) · Entrevista principal: dueños de sistemas, ciencia de datos e infraestructura.

??? auditor "A.4.2 · Documentación de recursos"
    **Guía:** [A.4.2](../anexo-a/a4-recursos.md#a-4-2) · **A quién:** dueño del sistema, TI

    1. Elijo un sistema del inventario: ¿qué recursos necesita en cada etapa de su ciclo de vida?
    2. ¿Cómo sé que el inventario está al día? ¿Cuándo se actualizó por última vez y por qué?
    3. ¿Qué pasa si uno de esos recursos deja de estar disponible?

    **Evidencia esperada:** inventario con recursos por sistema, diagramas de arquitectura y de flujo de datos.

??? auditor "A.4.3 · Recursos de datos"
    **Guía:** [A.4.3](../anexo-a/a4-recursos.md#a-4-3) · **A quién:** ciencia de datos, privacidad

    1. Del conjunto de entrenamiento de la versión en producción: origen, periodo que cubre, categorías y forma de etiquetado.
    2. ¿Qué sesgos o limitaciones conocidos dejaron documentados?
    3. ¿Dónde consta cuánto tiempo se conserva?

    **Evidencia esperada:** fichas de conjuntos de datos, catálogo, metadatos de versión.

??? auditor "A.4.4 · Recursos de herramientas"
    **Guía:** [A.4.4](../anexo-a/a4-recursos.md#a-4-4) · **A quién:** ciencia de datos, ingeniería

    1. ¿Qué bibliotecas, plataformas y versiones usan para entrenar y evaluar?
    2. ¿Cómo se enteran si una de ellas cambia de comportamiento o tiene una vulnerabilidad?
    3. ¿Tienen una lista de componentes del sistema (AI-BOM)? Muéstramela.

    **Evidencia esperada:** inventario de herramientas y modelos con versiones, archivos de dependencias, AI-BOM o SBOM.

??? auditor "A.4.5 · Recursos de sistema y cómputo"
    **Guía:** [A.4.5](../anexo-a/a4-recursos.md#a-4-5) · **A quién:** infraestructura, dueño del sistema

    1. ¿Dónde corre el sistema y quién opera esa infraestructura?
    2. ¿Qué capacidad necesitan en sus picos, por ejemplo en temporada de declaraciones o de campañas comerciales?
    3. ¿Tomaron en cuenta el consumo de energía o el impacto ambiental del cómputo?

    **Evidencia esperada:** inventario de infraestructura, planes de capacidad, datos de consumo cuando existan.

??? auditor "A.4.6 · Recursos humanos"
    **Guía:** [A.4.6](../anexo-a/a4-recursos.md#a-4-6) · **A quién:** dueño del sistema, Recursos Humanos

    1. ¿Qué perfiles necesita cada etapa del ciclo de vida, incluida la supervisión humana?
    2. ¿Qué pasa si se va la única persona que sabe reentrenar el modelo?
    3. ¿Cómo calcularon cuántas personas necesita la revisión humana?

    **Evidencia esperada:** matriz de competencias por etapa, plan de sucesión, análisis de carga de trabajo.

## A.5 · Evaluación de impactos de los sistemas de IA

<span class="dx-badge dx-badge--obj obj-a5">A.5 · Impacto</span> Guía: [A.5](../anexo-a/a5-evaluacion-de-impacto.md) · Entrevista principal: responsable del SGIA, dueño del sistema, privacidad y expertos del dominio.

??? auditor "A.5.2 · Proceso de evaluación de impacto"
    **Guía:** [A.5.2](../anexo-a/a5-evaluacion-de-impacto.md#a-5-2) · **A quién:** responsable del SGIA, privacidad

    1. ¿Quién puede detonar una evaluación? ¿Alguna vez la pidió alguien fuera del equipo técnico?
    2. ¿Con qué escala valoran la severidad y el alcance de un impacto?
    3. ¿Cómo evitan que la evaluación sea un formulario que llena una sola persona?
    4. Si el negocio tiene prisa por lanzar, ¿qué pasa con la evaluación?

    **Evidencia esperada:** procedimiento con disparadores, roles, método y criterios; evaluaciones hechas antes del despliegue.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "La evaluación de impacto es la EIPD de privacidad." | "Partimos de la EIPD para datos personales, pero la evaluación de impacto mira además efectos en decisiones, acceso al crédito y grupos vulnerables, con un equipo de riesgos, privacidad, cobranza y atención a clientes. Sin ella, el Comité de Modelos no aprueba." |

??? auditor "A.5.3 · Documentación de las evaluaciones"
    **Guía:** [A.5.3](../anexo-a/a5-evaluacion-de-impacto.md#a-5-3) · **A quién:** responsable del SGIA

    1. ¿Cómo vinculan cada evaluación con la versión exacta del sistema que evaluó?
    2. Muéstrame el historial de versiones de esta evaluación.
    3. ¿Qué se conserva cuando un sistema se retira?

    **Evidencia esperada:** evaluaciones versionadas, periodo de conservación definido y aplicado.

??? auditor "A.5.4 · Impacto en individuos o grupos"
    **Guía:** [A.5.4](../anexo-a/a5-evaluacion-de-impacto.md#a-5-4) · **A quién:** dueño del sistema, ciencia de datos, atención a clientes

    1. ¿Qué le pasa en concreto a una persona si el sistema se equivoca en su contra?
    2. ¿Qué grupos podrían verse afectados de forma desproporcionada aunque nunca usen el sistema?
    3. ¿Qué evidencia respalda la conclusión de que este impacto es bajo?
    4. ¿Qué mitigaciones salieron de la evaluación y dónde están implementadas?

    **Evidencia esperada:** análisis por grupo, métricas por segmento, mitigaciones trazables a controles.

??? auditor "A.5.5 · Impactos sociales"
    **Guía:** [A.5.5](../anexo-a/a5-evaluacion-de-impacto.md#a-5-5) · **A quién:** responsable del SGIA, alta dirección

    1. Si el sistema llegara a escala nacional, ¿qué efectos colectivos podría tener?
    2. ¿Cómo valoraron efectos en regiones o comunidades, por ejemplo en el acceso al crédito fuera de las grandes ciudades?
    3. ¿Qué conclusiones de impacto social llegaron a la dirección y qué decidió?

    **Evidencia esperada:** sección de impactos sociales en la evaluación, análisis de uso indebido, decisiones derivadas.

## A.6 · Ciclo de vida del sistema de IA

<span class="dx-badge dx-badge--obj obj-a6">A.6 · Ciclo de vida</span> Guía: [A.6](../anexo-a/a6-ciclo-de-vida.md) · Entrevista principal: CTO o dueño del sistema, ciencia de datos, MLOps. Quien solo usa IA de terceros responde sobre todo A.6.2.5, A.6.2.6 y A.6.2.8.

??? auditor "A.6.1.2 · Objetivos para el desarrollo responsable"
    **Guía:** [A.6.1.2](../anexo-a/a6-ciclo-de-vida.md#a-6-1-2) · **A quién:** CTO, ciencia de datos

    1. ¿Qué objetivos de desarrollo responsable tienen y cómo se vuelven criterios de aceptación?
    2. Muéstrame un requisito o historia de usuario que nazca de uno de esos objetivos.
    3. ¿Algún objetivo frenó o cambió un desarrollo? ¿Cuál?

    **Evidencia esperada:** objetivos documentados y su traducción en requisitos y pruebas.

??? auditor "A.6.1.3 · Procesos para el diseño y desarrollo responsable"
    **Guía:** [A.6.1.3](../anexo-a/a6-ciclo-de-vida.md#a-6-1-3) · **A quién:** CTO, líder de ciencia de datos

    1. Descríbeme las puertas de aprobación por las que pasa un modelo antes de producción.
    2. ¿Quién puede saltarse una puerta y cómo queda registrado?
    3. ¿En qué momento del diseño se decide cómo será la supervisión humana?

    **Evidencia esperada:** procedimiento del ciclo de vida, registros de aprobación por etapa, excepciones documentadas.

??? auditor "A.6.2.2 · Requisitos y especificación"
    **Guía:** [A.6.2.2](../anexo-a/a6-ciclo-de-vida.md#a-6-2-2) · **A quién:** dueño del sistema, producto

    1. ¿Por qué se construyó o mejoró este sistema? ¿Dónde está ese porqué?
    2. ¿Qué requisitos de datos, desempeño y supervisión definieron antes de construir?
    3. ¿Qué consideran una mejora material que obliga a nuevos requisitos?

    **Evidencia esperada:** documento de requisitos o caso de negocio, versionado y aprobado.

??? auditor "A.6.2.3 · Documentación del diseño y desarrollo"
    **Guía:** [A.6.2.3](../anexo-a/a6-ciclo-de-vida.md#a-6-2-3) · **A quién:** ciencia de datos, arquitectura

    1. ¿Por qué eligieron este enfoque o modelo y qué alternativas descartaron?
    2. ¿Dónde está el análisis de amenazas propias de la IA, como la inyección de instrucciones o el envenenamiento de datos?
    3. ¿Cómo quedó documentada la interfaz con la persona que supervisa?

    **Evidencia esperada:** documento de diseño, registros de decisiones de arquitectura, modelo de amenazas.

??? auditor "A.6.2.4 · Verificación y validación"
    **Guía:** [A.6.2.4](../anexo-a/a6-ciclo-de-vida.md#a-6-2-4) · **A quién:** ciencia de datos, calidad, dueño del sistema

    1. ¿Qué criterios de aceptación fijaron antes de probar?
    2. Muéstrame los resultados por segmento, no solo el promedio.
    3. ¿Qué pasó con la última versión que no pasó las pruebas?
    4. ¿Quién confirma que el conjunto de prueba representa a la población real?

    **Evidencia esperada:** plan de pruebas, reportes por segmento, pruebas adversarias, aprobación firmada contra criterios definidos de antemano.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "El modelo tiene 0.78 de AUC, es muy bueno." | "El criterio era AUC de al menos 0.75 en la muestra fuera de tiempo y ninguna brecha entre grupos por debajo de 0.80. La versión 3.1 cumplió el primero pero no el segundo en mayores de 60 años; se corrigió y la 3.2 pasó ambos. Aquí están los dos reportes." |

??? auditor "A.6.2.5 · Despliegue"
    **Guía:** [A.6.2.5](../anexo-a/a6-ciclo-de-vida.md#a-6-2-5) · **A quién:** dueño del sistema, operaciones

    1. ¿Qué verificaron antes de pasar a producción y quién lo aprobó?
    2. ¿Cómo revierten un despliegue si algo sale mal?
    3. Si usan IA de terceros: ¿qué revisaron antes de poner el chatbot frente a sus clientes?

    **Evidencia esperada:** plan de despliegue, lista de verificación de salida, aprobación, plan de reversión.

??? auditor "A.6.2.6 · Operación y monitoreo"
    **Guía:** [A.6.2.6](../anexo-a/a6-ciclo-de-vida.md#a-6-2-6) · **A quién:** MLOps, dueño del sistema

    1. Abramos el tablero: ¿qué umbrales hay, qué alerta dispara cada uno y quién la recibe?
    2. ¿Cuál fue la última alerta y qué hicieron?
    3. ¿Cómo detectan la deriva de datos o de desempeño?
    4. ¿Cómo gestionan las actualizaciones que impone el proveedor?

    **Evidencia esperada:** tableros con umbrales, alertas atendidas con evidencia, registros de soporte y cambios.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "Lo revisamos cuando hay tiempo." | "La alerta de deriva llega al canal de guardia; la última, en agosto, se atendió en dos días: había cambiado el formato de un campo del buró. Aquí está el ticket con el análisis y la corrección." |

??? auditor "A.6.2.7 · Documentación técnica"
    **Guía:** [A.6.2.7](../anexo-a/a6-ciclo-de-vida.md#a-6-2-7) · **A quién:** CTO, Customer Success, legal

    1. ¿Qué documentación técnica recibe cada tipo de parte interesada: clientes, socios, autoridades?
    2. ¿Cómo decidieron qué incluir y qué no?
    3. ¿Cómo la mantienen al día con cada versión?

    **Evidencia esperada:** ficha del sistema o del modelo, manual de operación, control de versiones de la documentación entregada.

??? auditor "A.6.2.8 · Registro de eventos"
    **Guía:** [A.6.2.8](../anexo-a/a6-ciclo-de-vida.md#a-6-2-8) · **A quién:** MLOps, TI, supervisores humanos

    1. Elijo un día del trimestre pasado: muéstrame los registros de ese día.
    2. ¿Qué eventos registran y cuánto tiempo los conservan?
    3. ¿Pueden reconstruir una decisión concreta: entradas, versión del modelo, salida e intervención humana?

    **Evidencia esperada:** configuración de bitácoras, muestras completas, política de retención aplicada.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "Los registros los guarda el proveedor." | "Guardamos 24 meses de registros por decisión: identificador de solicitud, versión del modelo, *score*, banda, analista y motivo de anulación. Busquemos la solicitud que tú elijas." |

## A.7 · Datos para sistemas de IA

<span class="dx-badge dx-badge--obj obj-a7">A.7 · Datos</span> Guía: [A.7](../anexo-a/a7-datos.md) · Entrevista principal: ciencia de datos, ingeniería de datos y privacidad.

??? auditor "A.7.2 · Datos para desarrollo y mejora"
    **Guía:** [A.7.2](../anexo-a/a7-datos.md#a-7-2) · **A quién:** líder de ciencia de datos, privacidad

    1. ¿Qué pasos sigue la aprobación para usar un conjunto de datos nuevo?
    2. ¿Cómo valoran si los datos representan a la población a la que se aplicará el modelo?
    3. ¿Cómo se aseguran de que el uso de los datos respeta las finalidades del aviso de privacidad?

    **Evidencia esperada:** procedimiento de gestión de datos para IA, aprobaciones, análisis de representatividad.

??? auditor "A.7.3 · Adquisición de datos"
    **Guía:** [A.7.3](../anexo-a/a7-datos.md#a-7-3) · **A quién:** ciencia de datos, legal, privacidad

    1. ¿De dónde vienen los datos y con qué derecho los usan?
    2. Para los datos de buró de crédito: ¿qué autorización existe y cómo la conservan?
    3. Para los documentos que los clientes cargan a la base de conocimiento: ¿qué dice el contrato sobre su uso?

    **Evidencia esperada:** registro de fuentes, licencias y contratos de datos, base legal del tratamiento.

??? auditor "A.7.4 · Calidad de los datos"
    **Guía:** [A.7.4](../anexo-a/a7-datos.md#a-7-4) · **A quién:** ciencia de datos; en quien usa IA de terceros, quien cura los contenidos

    1. ¿Qué requisitos de calidad definieron para cada conjunto?
    2. Muéstrame el último reporte de calidad y qué hicieron con lo que encontró.
    3. ¿Qué pasa cuando un lote no cumple?
    4. A quien cura la base de preguntas frecuentes de un chatbot: ¿cómo verifican que la información sigue vigente?

    **Evidencia esperada:** requisitos por conjunto, perfilado, métricas de completitud y sesgo, registros de rechazo de lotes.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "Los datos vienen del buró; son de buena calidad." | "Definimos completitud, vigencia y rangos por variable. El reporte mensual de septiembre detectó un 4 % de registros sin entidad federativa; se rechazó el lote y se corrigió la extracción antes de reentrenar." |

??? auditor "A.7.5 · Procedencia de los datos"
    **Guía:** [A.7.5](../anexo-a/a7-datos.md#a-7-5) · **A quién:** ingeniería de datos

    1. Elijo un registro del conjunto de entrenamiento: ¿de dónde vino y qué transformaciones sufrió?
    2. ¿Cómo versionan los conjuntos de datos?
    3. ¿Pueden reconstruir exactamente el conjunto con el que se entrenó la versión en producción?

    **Evidencia esperada:** registros de linaje, versionado, cadena de custodia.

??? auditor "A.7.6 · Preparación de los datos"
    **Guía:** [A.7.6](../anexo-a/a7-datos.md#a-7-6) · **A quién:** ciencia de datos

    1. ¿Qué transformaciones aplican y por qué esas?
    2. ¿Cómo tratan los datos faltantes y cómo afecta eso a grupos con menos información?
    3. ¿Dónde está la guía de etiquetado y quién la valida?

    **Evidencia esperada:** cuadernos o *pipelines* versionados, justificación de transformaciones, guía de etiquetado.

## A.8 · Información para las partes interesadas

<span class="dx-badge dx-badge--obj obj-a8">A.8 · Información</span> Guía: [A.8](../anexo-a/a8-informacion-partes-interesadas.md) · Entrevista principal: dueño del sistema, atención a clientes, legal y comunicación.

??? auditor "A.8.2 · Documentación e información para usuarios"
    **Guía:** [A.8.2](../anexo-a/a8-informacion-partes-interesadas.md#a-8-2) · **A quién:** dueño del sistema, atención a clientes

    1. Hagamos una prueba: escribo al chatbot como si fuera cliente. ¿Me avisa que es una IA? ¿Me dice cómo hablar con una persona?
    2. ¿Qué información reciben los usuarios sobre los límites del sistema?
    3. ¿Cómo decidieron qué informar y qué no?

    **Evidencia esperada:** avisos de interacción con IA, instrucciones de uso, criterios documentados, prueba de recorrido exitosa.

??? auditor "A.8.3 · Reporte externo"
    **Guía:** [A.8.3](../anexo-a/a8-informacion-partes-interesadas.md#a-8-3) · **A quién:** atención a clientes, cumplimiento

    1. Si un solicitante cree que el modelo lo trató injustamente, ¿por dónde lo reporta?
    2. ¿Cuántos reportes recibieron y en cuánto tiempo los atendieron?
    3. ¿Cómo distinguen una queja comercial de un impacto adverso de la IA?

    **Evidencia esperada:** medio publicado, registro de reportes, análisis y respuesta.

??? auditor "A.8.4 · Comunicación de incidentes"
    **Guía:** [A.8.4](../anexo-a/a8-informacion-partes-interesadas.md#a-8-4) · **A quién:** responsable del SGIA, Customer Success, legal

    1. ¿Qué es un incidente de IA para ustedes? Dame ejemplos.
    2. Muéstrame el plan: quién avisa, a quién, en qué plazo y por qué medio.
    3. ¿Cuál fue el último incidente y a quién se le comunicó?
    4. ¿Qué compromisos de notificación tienen en los contratos con clientes?

    **Evidencia esperada:** plan documentado, plantillas de aviso, registro de incidentes y notificaciones.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "No hemos tenido incidentes", en una plataforma con millones de conversaciones. | "Tuvimos dos: una evasión de filtros y una respuesta con datos desactualizados de coberturas. En ambos avisamos al cliente afectado en menos de 24 horas, como dice el contrato; aquí están los avisos y el análisis." |

??? auditor "A.8.5 · Información para las partes interesadas"
    **Guía:** [A.8.5](../anexo-a/a8-informacion-partes-interesadas.md#a-8-5) · **A quién:** cumplimiento, legal

    1. ¿Qué obligaciones de informar sobre sus sistemas de IA tienen ante reguladores, clientes o inversionistas?
    2. ¿Dónde está el registro de esas obligaciones?
    3. ¿Cómo se enteran de una obligación nueva?

    **Evidencia esperada:** registro de obligaciones de reporte, reportes entregados, vigilancia regulatoria.

## A.9 · Uso de sistemas de IA

<span class="dx-badge dx-badge--obj obj-a9">A.9 · Uso</span> Guía: [A.9](../anexo-a/a9-uso.md) · Entrevista principal: áreas usuarias, supervisores humanos, compras y TI.

??? auditor "A.9.2 · Procesos para el uso responsable"
    **Guía:** [A.9.2](../anexo-a/a9-uso.md#a-9-2) · **A quién:** TI, compras, áreas usuarias

    1. Si alguien quiere usar una herramienta de IA nueva, ¿qué pasos sigue?
    2. ¿Cuántas solicitudes rechazaron y por qué?
    3. ¿Cómo detectan herramientas que se usan sin autorización?

    **Evidencia esperada:** procedimiento de alta de casos de uso, aprobaciones, controles técnicos o revisiones de gasto.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "Está prohibido usar IA no autorizada." | "Hay un formulario de alta y en el último semestre se aprobaron tres solicitudes y se rechazaron dos. Además, cada mes revisamos el filtro web y los cargos de tarjetas corporativas; en mayo detectamos una herramienta de transcripción sin alta y se regularizó." |

??? auditor "A.9.3 · Objetivos para el uso responsable"
    **Guía:** [A.9.3](../anexo-a/a9-uso.md#a-9-3) · **A quién:** dueño del sistema, alta dirección

    1. ¿Qué objetivos guían el uso de este sistema y cómo se miden?
    2. ¿En qué puntos decidieron que debe intervenir una persona y por qué ahí?
    3. ¿Qué harían si un objetivo de uso choca con una meta comercial?

    **Evidencia esperada:** objetivos de uso documentados, puntos de supervisión humana definidos, indicadores.

??? auditor "A.9.4 · Uso previsto del sistema"
    **Guía:** [A.9.4](../anexo-a/a9-uso.md#a-9-4) · **A quién:** supervisores humanos, dueño del sistema

    1. A un analista: ¿qué haces cuando no estás de acuerdo con el modelo?
    2. ¿Cuánto tiempo tienes por caso? ¿Alguien te reclama si anulas una recomendación?
    3. ¿Alguien usa el sistema para algo que no estaba previsto?
    4. ¿En qué casos escalan un problema al proveedor?

    **Evidencia esperada:** declaración de uso previsto, registros de operación y de anulaciones, escalamientos.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "Si el sistema dice que sí, casi siempre apruebo; no da tiempo de más." | "Reviso el expediente y los motivos del *score*; si no coincido, anulo y anoto el motivo. Este mes anulé unas quince recomendaciones. Mi coordinadora revisa una muestra de lo que apruebo y de lo que anulo." |

## A.10 · Relaciones con terceros y clientes

<span class="dx-badge dx-badge--obj obj-a10">A.10 · Terceros</span> Guía: [A.10](../anexo-a/a10-terceros.md) · Entrevista principal: compras, legal, CTO y Customer Success.

??? auditor "A.10.2 · Asignación de responsabilidades"
    **Guía:** [A.10.2](../anexo-a/a10-terceros.md#a-10-2) · **A quién:** legal, CTO, compras

    1. Muéstrame la matriz de responsabilidad compartida con el proveedor del modelo y con los clientes.
    2. Si el modelo fundacional cambia de comportamiento, ¿quién responde ante el usuario final?
    3. En cada relación, ¿quién es responsable y quién encargado del tratamiento de datos personales?

    **Evidencia esperada:** matriz de responsabilidades, cláusulas contractuales, roles de protección de datos definidos.

??? auditor "A.10.3 · Proveedores"
    **Guía:** [A.10.3](../anexo-a/a10-terceros.md#a-10-3) · **A quién:** compras, TI, responsable del SGIA

    1. ¿Cómo evaluaron a este proveedor antes de contratarlo y qué revisaron después?
    2. ¿Qué información técnica le pidieron sobre su modelo y sus datos?
    3. ¿Qué hacen si el proveedor cambia su modelo sin avisar?

    **Evidencia esperada:** evaluaciones de proveedores de IA, cuestionarios respondidos, seguimiento periódico.

    | Respuesta débil | Respuesta sólida |
    |---|---|
    | "Tiene certificado ISO 27001, con eso basta." | "Revisamos su certificado y su alcance, pero además le aplicamos un cuestionario de IA: modelo subyacente, retención de conversaciones, uso de nuestros datos para entrenar y aviso de cambios. Lo reevaluamos cada año y tras cada cambio relevante; el último fue en junio." |

??? auditor "A.10.4 · Clientes"
    **Guía:** [A.10.4](../anexo-a/a10-terceros.md#a-10-4) · **A quién:** Customer Success, legal, producto

    1. ¿Cómo recogen lo que los clientes esperan del sistema en materia de IA responsable?
    2. ¿Qué límites y responsabilidades les comunican y dónde?
    3. Muéstrame el expediente de un cliente con requisitos especiales, por ejemplo uno en otra jurisdicción.

    **Evidencia esperada:** requisitos de clientes, contratos y términos de uso, documentación entregada.

## Cómo responder bien en una entrevista

- **Responde lo que se pregunta y muestra la evidencia.** Una respuesta corta con el registro en pantalla convence más que una explicación larga.
- **Di "no lo sé" cuando no lo sepas** y nombra a quien sí lo sabe. Inventar una respuesta es el camino más corto a un hallazgo.
- **Habla de lo que haces, no de lo que dice el procedimiento.** El auditor ya lo leyó; quiere saber si se cumple.

Para ver cómo se convierten las respuestas en hallazgos, revisa [Hallazgos de ejemplo](hallazgos-ejemplo.md); para preparar al equipo y la logística, el [Checklist de preparación](checklist-preparacion.md); y para el proceso completo, [Cómo se certifica](como-se-certifica.md).

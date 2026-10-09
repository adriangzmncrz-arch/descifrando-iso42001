# Checklist de auditoría interna del SGIA

| Control del documento | |
|---|---|
| Código | [SGIA-FOR-03] |
| Versión del formulario | [1.0] |
| Fecha de aprobación del formulario | [FECHA] |
| Elaboró | [NOMBRE] · [PUESTO] |
| Revisó | [NOMBRE] · [PUESTO] |
| Aprobó | [NOMBRE] · [PUESTO] |
| Clasificación | [CONFIDENCIAL] |

Plantilla de *Descifrando ISO 42001* (CC BY-SA 4.0) — adáptala a tu organización; no sustituye a la norma ni es asesoría legal.

> **Instrucciones de uso (borra este bloque en cada auditoría que documentes).**
>
> - **Qué cubre:** la cláusula 9.2 (auditoría interna). Recorre los requisitos de las cláusulas 4 a 10 y los 38 controles del Anexo A de ISO/IEC 42001. Los requisitos están resumidos con palabras propias de la guía, no con el texto de la norma: ante cualquier duda de interpretación, consulta la norma. Los nombres de los controles son traducción libre de referencia.
> - **Cómo usarlo:** no es un cuestionario para leerle al auditado. Las preguntas guía son un punto de partida; la conclusión debe apoyarse en evidencia (documentos, registros, entrevistas y observación) y en una muestra. Anota en "Notas" qué evidencia revisaste concretamente (código, versión, fecha, folio).
> - **Resultados:** C = conforme; NC = no conformidad (indica en notas si es mayor o menor); OBS = observación u oportunidad de mejora; NA = no aplica (en controles del Anexo A, solo si la Declaración de Aplicabilidad lo excluye con una justificación válida; en ese caso, evalúa la justificación).
> - **Qué personalizar:** los datos de la auditoría, la muestra y, si tu programa de auditoría divide el SGIA en varias auditorías, borra las secciones que no correspondan a esta.
> - **Independencia:** quien audita no debe evaluar su propio trabajo. En una PyME, conviene contratar a un auditor externo o intercambiar auditores con otra área u organización.

## 1. Datos de la auditoría

| Campo | Dato |
|---|---|
| Número de auditoría | [AI-AAAA-NN] |
| Fechas de ejecución | [FECHA] a [FECHA] |
| Objetivo | [POR EJEMPLO, VERIFICAR LA CONFORMIDAD Y EFICACIA DEL SGIA ANTES DE LA AUDITORÍA DE CERTIFICACIÓN] |
| Alcance | [PROCESOS, SISTEMAS DE IA, SEDES Y PERIODO AUDITADOS] |
| Criterios | ISO/IEC 42001:2023; política de IA; procedimientos del SGIA; [REQUISITOS LEGALES Y CONTRACTUALES] |
| Auditor líder | [NOMBRE] |
| Equipo auditor y expertos técnicos | [NOMBRES] |
| Personas entrevistadas | [NOMBRES Y PUESTOS] |
| Documentos de referencia | Alcance del SGIA; Declaración de Aplicabilidad versión [N]; inventario de sistemas de IA; informe de la auditoría anterior |
| Declaración de independencia | El equipo auditor declara no haber participado en el diseño ni en la operación de las actividades auditadas. |

## 2. Muestra seleccionada

| Elemento | Muestra | Criterio de selección |
|---|---|---|
| Sistemas de IA | [IA-NN, IA-NN] | [MAYOR RIESGO, CAMBIOS RECIENTES, INCIDENTES] |
| Evaluaciones de riesgos e impacto | [IDS] | |
| Cambios significativos | [IDS] | |
| Incidentes | [INC-AAAA-NNN] | |
| Proveedores de IA | [NOMBRES] | |
| Personas para verificar competencia y toma de conciencia | [NÚMERO Y ÁREAS] | |

## 3. Cláusulas 4 a 10

### Cláusula 4 · Contexto de la organización

| Ref. | Requisito (resumen) | Pregunta guía | Evidencia a revisar | Resultado | Notas |
|---|---|---|---|---|---|
| 4.1 | Identificar los factores internos y externos que influyen en lo que el SGIA puede lograr | ¿Cómo identificaron los factores de contexto y cuándo los actualizaron por última vez? | Análisis de contexto; minutas de actualización | | |
| 4.1 | Decidir si el cambio climático es un tema pertinente | ¿Se analizó la pertinencia del cambio climático y qué se concluyó? | Análisis de contexto con la conclusión documentada | | |
| 4.1 | Considerar el propósito previsto de cada sistema y determinar el rol de la organización frente a él | En un sistema de la muestra, ¿qué rol tiene la organización y dónde consta? ¿Es coherente con los contratos? | Inventario con rol por sistema; análisis de roles | | |
| 4.2 | Identificar las partes interesadas pertinentes, sus requisitos y cuáles se atenderán con el SGIA | ¿Qué requisitos de clientes, autoridades y personas afectadas se atienden con el SGIA? ¿Cómo se decidió? | Matriz de partes interesadas y requisitos | | |
| 4.3 | Definir y documentar los límites y la aplicabilidad del SGIA a partir del contexto y los requisitos | ¿Qué sistemas, procesos, sedes y roles quedan fuera y por qué? ¿El inventario es coherente con el alcance? | Documento de alcance; inventario de sistemas de IA | | |
| 4.4 | Tener en marcha el SGIA, con sus procesos y sus interacciones, y mantenerlo y mejorarlo | ¿Cómo se relacionan los procesos del SGIA entre sí y con los demás procesos de la organización? | Mapa de procesos; descripción del SGIA | | |

### Cláusula 5 · Liderazgo

| Ref. | Requisito (resumen) | Pregunta guía | Evidencia a revisar | Resultado | Notas |
|---|---|---|---|---|---|
| 5.1 | La alta dirección demuestra compromiso: política y objetivos coherentes con la estrategia, integración en los procesos, recursos, comunicación, apoyo a las personas y mejora | ¿Qué decisiones concretas tomó la dirección sobre el SGIA en el último año? | Minutas; presupuesto asignado; comunicados de la dirección | | |
| 5.2 | Contar con una política de IA adecuada al propósito, que sirva de marco para los objetivos e incluya los compromisos de cumplimiento y de mejora continua | ¿La política refleja los roles y riesgos reales de la organización? ¿Remite a otras políticas pertinentes? | Política de IA aprobada y vigente | | |
| 5.2 | Documentar la política, comunicarla internamente y ponerla a disposición de las partes interesadas que corresponda | ¿Cómo se enteró el personal de la política? ¿Quién externo puede consultarla y cómo? | Evidencia de comunicación; acuses; publicación externa | | |
| 5.3 | Asignar y comunicar responsabilidades y autoridades, incluidas la de asegurar la conformidad del SGIA y la de informar su desempeño a la alta dirección | ¿Quién informa a la alta dirección sobre el desempeño del SGIA y con qué frecuencia? | Matriz RACI; nombramientos; informes a la dirección | | |

### Cláusula 6 · Planificación

| Ref. | Requisito (resumen) | Pregunta guía | Evidencia a revisar | Resultado | Notas |
|---|---|---|---|---|---|
| 6.1.1 | Determinar los riesgos y oportunidades del propio SGIA y planificar acciones y la forma de evaluar su eficacia | ¿Qué riesgos u oportunidades del SGIA se identificaron y cómo se sabe si las acciones funcionaron? | Registro de riesgos y oportunidades del SGIA; plan de acciones | | |
| 6.1.1 | Establecer criterios de riesgo de IA que permitan separar riesgos aceptables de inaceptables, evaluar y tratar riesgos y valorar impactos | ¿Quién aprobó los criterios? ¿Se usan tal como están escritos al aceptar riesgos? | Metodología de riesgos; matriz; tabla de aceptación | | |
| 6.1.1 | Determinar riesgos y oportunidades según el dominio, el contexto de aplicación y el uso previsto de cada sistema o grupo de sistemas | ¿Cómo se decidió qué sistemas se evalúan juntos y cuáles por separado? | Registro de riesgos; criterio de agrupación | | |
| 6.1.2 | Tener un proceso documentado de evaluación de riesgos de IA, alineado con la política y los objetivos, cuyos resultados sean repetibles y comparables | ¿Dos evaluadores con la misma información llegarían a la misma clasificación? ¿Hay calibración? | Metodología; evidencia de calibración; registro de riesgos | | |
| 6.1.2 | Analizar consecuencias para la organización, para individuos y para la sociedad, la probabilidad cuando aplique y el nivel de riesgo, y priorizar | En un riesgo de la muestra, ¿cómo se calificaron las tres dimensiones y con qué evidencia? | Registro de riesgos con evidencia por calificación | | |
| 6.1.3 | Elegir opciones de tratamiento, determinar los controles necesarios, compararlos con el Anexo A y considerar la guía del Anexo B | ¿Se diseñaron los controles desde el riesgo y luego se contrastaron con el Anexo A, o se marcaron casillas? | Registro de riesgos; plan de tratamiento | | |
| 6.1.3 | Elaborar una Declaración de Aplicabilidad con los controles necesarios y la justificación de cada inclusión y exclusión | Elige dos exclusiones: ¿la justificación es concreta y coherente con los riesgos y los requisitos externos? | Declaración de Aplicabilidad vigente | | |
| 6.1.3 | Formular un plan de tratamiento aprobado por la dirección designada, con aceptación de los riesgos residuales | ¿Quién aceptó cada residual y tenía autoridad para hacerlo según los criterios? | Plan de tratamiento; actas de aceptación | | |
| 6.1.4 | Contar con un proceso de evaluación de impacto que considere el uso previsto, el uso indebido previsible, el contexto técnico y social y las jurisdicciones | ¿Qué disparadores obligan a evaluar el impacto? ¿Se consideró el uso indebido en la muestra? | Procedimiento o formulario de evaluación de impacto | | |
| 6.1.4 | Documentar los resultados de la evaluación de impacto, decidir su disponibilidad y usarlos en la evaluación de riesgos | ¿Dónde se ve que un impacto evaluado se convirtió en un riesgo del registro? | Evaluaciones de impacto; referencias cruzadas al registro de riesgos | | |
| 6.2 | Fijar objetivos de IA coherentes con la política, medibles cuando sea posible, con seguimiento y comunicados, y planificar cómo lograrlos | ¿Cuál es el avance de cada objetivo y quién responde por él? | Plan de objetivos con responsables, recursos, plazos e indicadores | | |
| 6.3 | Planificar los cambios al SGIA antes de hacerlos | ¿Cómo se planificó el último cambio relevante al SGIA? | Plan del cambio; análisis de consecuencias | | |

### Cláusula 7 · Apoyo

| Ref. | Requisito (resumen) | Pregunta guía | Evidencia a revisar | Resultado | Notas |
|---|---|---|---|---|---|
| 7.1 | Determinar y proporcionar los recursos que el SGIA necesita | ¿Hay actividades del SGIA detenidas por falta de personas, presupuesto o herramientas? | Presupuesto; plan de recursos; minutas | | |
| 7.2 | Determinar las competencias necesarias, asegurarlas y evaluar la eficacia de las acciones tomadas para adquirirlas | En la muestra de personas, ¿cómo se demostró su competencia para su rol en IA? | Perfiles de puesto; registros de capacitación; evaluaciones | | |
| 7.3 | Que las personas conozcan la política de IA, su contribución al SGIA y las consecuencias de no cumplirlo | Pregunta a dos colaboradores qué herramientas de IA pueden usar y qué información no deben ingresar | Entrevistas; acuses de la política de uso aceptable | | |
| 7.4 | Definir qué se comunica sobre el SGIA, cuándo, a quién y cómo, dentro y fuera de la organización | ¿Existe un plan de comunicación y se cumplió en el último periodo? | Plan de comunicación; evidencias de envío | | |
| 7.5.1 | Contar con la información documentada que exige la norma y la que la organización necesita | ¿Están todos los documentos obligatorios (alcance, política, criterios, evaluaciones, SoA, objetivos, auditorías, revisiones)? | Lista maestra de documentos | | |
| 7.5.2 | Identificar, dar formato, revisar y aprobar la información documentada | ¿Los documentos de la muestra tienen versión, fecha, autor y aprobación? | Documentos de la muestra | | |
| 7.5.3 | Controlar la disponibilidad, protección, distribución, versiones, retención y disposición de la información documentada, incluida la de origen externo | ¿Cómo se evita usar una versión obsoleta? ¿Se controla la documentación de los proveedores? | Repositorio; control de cambios; tabla de retención | | |

### Cláusula 8 · Operación

| Ref. | Requisito (resumen) | Pregunta guía | Evidencia a revisar | Resultado | Notas |
|---|---|---|---|---|---|
| 8.1 | Planificar y controlar los procesos operativos con criterios definidos e implementar los controles elegidos | ¿El procedimiento del ciclo de vida se siguió en el sistema de la muestra? | Procedimiento del ciclo de vida; registros de puertas | | |
| 8.1 | Vigilar la eficacia de los controles y considerar acciones correctivas cuando no logran lo esperado | ¿Cómo se sabe si un control funciona? ¿Qué se hizo con uno que no funcionó? | Indicadores de controles; acciones correctivas | | |
| 8.1 | Gestionar con control los cambios previstos y analizar los efectos de los imprevistos, mitigando lo que haga falta | En un cambio de la muestra, ¿se clasificó, evaluó y aprobó antes de liberarse? | Registro de cambios; evaluaciones actualizadas | | |
| 8.1 | Controlar los procesos, productos y servicios externos pertinentes para el SGIA | ¿Cómo se controla a los proveedores de IA de la muestra? | Evaluaciones de proveedores; contratos; seguimiento | | |
| 8.2 | Repetir las evaluaciones de riesgos según lo planificado y ante cambios significativos, y conservar sus resultados | ¿Se reevaluó el riesgo después del último cambio o incidente relevante? | Historial del registro de riesgos | | |
| 8.3 | Ejecutar el plan de tratamiento, verificar su eficacia y actualizarlo cuando no funcione | ¿Las acciones vencidas del plan tienen justificación y nueva fecha aprobada? | Seguimiento del plan de tratamiento | | |
| 8.4 | Repetir las evaluaciones de impacto según lo planificado y ante cambios significativos, y conservar sus resultados | ¿Las evaluaciones de impacto de la muestra están vigentes según su fecha de revisión? | Evaluaciones de impacto y sus versiones | | |

### Cláusula 9 · Evaluación del desempeño

| Ref. | Requisito (resumen) | Pregunta guía | Evidencia a revisar | Resultado | Notas |
|---|---|---|---|---|---|
| 9.1 | Decidir qué se mide, cómo, cuándo se mide y cuándo se analiza, conservar evidencia y evaluar el desempeño y la eficacia del SGIA | ¿Qué indicadores muestran que el SGIA funciona? ¿Quién los analiza y qué decisiones produjeron? | Tablero de indicadores; reportes de monitoreo | | |
| 9.2.1 | Realizar auditorías internas planificadas que verifiquen la conformidad con requisitos propios y de la norma, y la eficacia del SGIA | ¿Se auditó todo el alcance del SGIA en el ciclo del programa? | Informes de auditorías anteriores | | |
| 9.2.2 | Mantener un programa de auditoría con frecuencia, métodos, responsables y reporte, considerando la importancia de los procesos y los resultados previos | ¿Cómo se aseguró la objetividad del auditor? ¿A quién se reportaron los resultados? | Programa de auditoría; designación de auditores; evidencia de reporte | | |
| 9.3.1 | Que la alta dirección revise el SGIA de forma planificada para confirmar que sigue siendo conveniente, adecuado y eficaz | ¿Cuándo fue la última revisión y quién participó? | Acta de revisión por la dirección | | |
| 9.3.2 | Incluir en la revisión las entradas mínimas: acciones previas, cambios de contexto y de partes interesadas, desempeño (no conformidades, mediciones, auditorías) y oportunidades de mejora | ¿El acta cubre todas las entradas? ¿Incluye también resultados de riesgos, estado del plan de tratamiento, incidentes y retroalimentación de partes interesadas (recomendable)? | Acta y presentación de la revisión | | |
| 9.3.3 | Documentar decisiones sobre mejora y cambios al SGIA | ¿Qué decisiones salieron de la revisión y cuál es su avance? | Acta; seguimiento de acuerdos | | |

### Cláusula 10 · Mejora

| Ref. | Requisito (resumen) | Pregunta guía | Evidencia a revisar | Resultado | Notas |
|---|---|---|---|---|---|
| 10.1 | Mejorar de forma continua la conveniencia, adecuación y eficacia del SGIA | ¿Qué mejoras se implementaron en el último año y de dónde surgieron? | Registro de mejoras; comparación de indicadores | | |
| 10.2 | Reaccionar ante las no conformidades, controlarlas, corregirlas y atender sus consecuencias | En una no conformidad de la muestra, ¿qué se hizo de inmediato? | Registro de no conformidades | | |
| 10.2 | Analizar causas, buscar casos similares, implementar acciones correctivas, verificar su eficacia y conservar registros | ¿Cómo se verificó que la acción correctiva eliminó la causa? | Análisis de causa raíz; verificación de eficacia | | |

## 4. Controles del Anexo A

En cada control, revisa primero si está incluido en la Declaración de Aplicabilidad. Si está excluido, evalúa la justificación y marca NA solo si es válida.

### A.2 Políticas relacionadas con la IA

| Control | Pregunta guía | Evidencia a revisar | ¿Incluido en la SoA? | Resultado | Notas |
|---|---|---|---|---|---|
| A.2.2 Política de IA | ¿Existe una política de IA documentada y aprobada que guíe el desarrollo o uso de IA, con un proceso de excepciones? | Política vigente; registro de excepciones | | | |
| A.2.3 Alineación con otras políticas de la organización | ¿Se identificaron las políticas que tocan a la IA (seguridad, privacidad, compras, ética) y se ajustaron o referenciaron? | Matriz de cruce entre políticas; políticas actualizadas | | | |
| A.2.4 Revisión de la política de IA | ¿Se revisó la política en el plazo definido y ante cambios relevantes? | Historial de versiones; minutas de revisión | | | |

### A.3 Organización interna

| Control | Pregunta guía | Evidencia a revisar | ¿Incluido en la SoA? | Resultado | Notas |
|---|---|---|---|---|---|
| A.3.2 Roles y responsabilidades de IA | ¿Están definidos y asignados los roles de IA (riesgo, impacto, datos, supervisión humana, proveedores, cumplimiento)? ¿Cada actividad tiene un solo responsable de aprobar? | Matriz RACI; nombramientos; descripciones de puesto | | | |
| A.3.3 Reporte de inquietudes | ¿Existe un canal confidencial para reportar inquietudes sobre la IA, conocido por el personal y con protección contra represalias? ¿Se atienden los reportes? | Procedimiento del canal; registros de reportes; comunicación al personal | | | |

### A.4 Recursos para sistemas de IA

| Control | Pregunta guía | Evidencia a revisar | ¿Incluido en la SoA? | Resultado | Notas |
|---|---|---|---|---|---|
| A.4.2 Documentación de recursos | ¿Están identificados los recursos que necesita cada sistema en sus etapas del ciclo de vida? | Inventario de sistemas con recursos; diagramas | | | |
| A.4.3 Recursos de datos | ¿Se documentan los conjuntos de datos (origen, fechas, categorías, calidad, sesgos conocidos, retención)? | Fichas de datos; ficha del sistema | | | |
| A.4.4 Recursos de herramientas | ¿Se documentan modelos, bibliotecas, plataformas y herramientas usados? | Ficha del sistema; lista de componentes | | | |
| A.4.5 Recursos de sistema y cómputo | ¿Se documenta la infraestructura, su capacidad y, si se conoce, su impacto ambiental? | Ficha del sistema; documentación de infraestructura | | | |
| A.4.6 Recursos humanos | ¿Se documentan las personas y competencias necesarias en cada etapa, incluidas las de supervisión humana? | Perfiles; registros de capacitación | | | |

### A.5 Evaluación de impactos de los sistemas de IA

| Control | Pregunta guía | Evidencia a revisar | ¿Incluido en la SoA? | Resultado | Notas |
|---|---|---|---|---|---|
| A.5.2 Proceso de evaluación de impacto | ¿Existe un proceso con disparadores, cribado, método de valoración, responsables y uso de resultados? | Procedimiento o formulario; registro de cribados | | | |
| A.5.3 Documentación de las evaluaciones de impacto | ¿Se documentan los resultados y se conservan durante el plazo definido, incluidas las versiones anteriores? | Evaluaciones de la muestra y sus versiones | | | |
| A.5.4 Evaluación del impacto en individuos o grupos | ¿Se valoraron los efectos en derechos, oportunidades, seguridad y bienestar de personas y grupos, incluidos los vulnerables? | Parte de individuos y grupos de las evaluaciones | | | |
| A.5.5 Evaluación de impactos sociales | ¿Se valoraron los efectos amplios (ambientales, económicos, informativos, culturales) o se justificó por qué no son relevantes? | Parte de impactos sociales de las evaluaciones | | | |

### A.6 Ciclo de vida del sistema de IA

| Control | Pregunta guía | Evidencia a revisar | ¿Incluido en la SoA? | Resultado | Notas |
|---|---|---|---|---|---|
| A.6.1.2 Objetivos para el desarrollo responsable | ¿Hay objetivos de desarrollo responsable y se traducen en requisitos y pruebas en cada etapa? | Objetivos documentados; especificaciones; planes de prueba | | | |
| A.6.1.3 Procesos para el diseño y desarrollo responsable | ¿Existe un proceso con etapas, puertas de aprobación, criterios de liberación y supervisión humana? ¿Se siguió? | Procedimiento del ciclo de vida; registros de puertas | | | |
| A.6.2.2 Requisitos y especificación | ¿Se especificaron los requisitos del sistema nuevo o del cambio relevante antes de construirlo? | Especificación de requisitos | | | |
| A.6.2.3 Documentación del diseño y desarrollo | ¿Se documentaron las decisiones de diseño y la arquitectura final? | Documento de diseño; bitácora de decisiones | | | |
| A.6.2.4 Verificación y validación | ¿Se probaron desempeño, equidad, robustez y seguridad contra criterios definidos antes de liberar? | Plan y reporte de verificación y validación | | | |
| A.6.2.5 Despliegue | ¿Hubo un plan de despliegue y se verificó el cumplimiento de requisitos antes de pasar a producción? | Plan de despliegue; aprobación de salida a producción | | | |
| A.6.2.6 Operación y monitoreo | ¿Se monitorean desempeño, deriva y amenazas, y existen procesos de soporte, reparación y actualización? | Reportes de monitoreo; alertas; tickets | | | |
| A.6.2.7 Documentación técnica | ¿Se determinó qué documentación necesita cada parte interesada y se le entregó en forma adecuada? | Ficha del sistema; documentación para clientes y autoridades | | | |
| A.6.2.8 Registro de eventos | ¿Se registran eventos al menos durante el uso, con un plazo de conservación definido? | Configuración de registros; muestra de registros | | | |

### A.7 Datos para sistemas de IA

| Control | Pregunta guía | Evidencia a revisar | ¿Incluido en la SoA? | Resultado | Notas |
|---|---|---|---|---|---|
| A.7.2 Datos para desarrollo y mejora | ¿Existen procesos de gestión de datos para desarrollar y mejorar los sistemas, que cubran privacidad, seguridad y representatividad? | Procedimiento de gestión de datos | | | |
| A.7.3 Adquisición de datos | ¿Se documenta cómo se obtienen y seleccionan los datos, sus fuentes y los derechos de uso? | Registro de fuentes; contratos o licencias de datos | | | |
| A.7.4 Calidad de los datos | ¿Hay requisitos de calidad definidos y evidencia de que los datos de desarrollo y operación los cumplen? | Requisitos de calidad; reportes de calidad | | | |
| A.7.5 Procedencia de los datos | ¿Se registra de dónde vienen los datos y qué transformaciones han sufrido? | Registro de procedencia; versiones de conjuntos | | | |
| A.7.6 Preparación de los datos | ¿Se documentan los criterios y métodos de preparación usados? | Documentación de preparación; scripts versionados | | | |

### A.8 Información para las partes interesadas

| Control | Pregunta guía | Evidencia a revisar | ¿Incluido en la SoA? | Resultado | Notas |
|---|---|---|---|---|---|
| A.8.2 Documentación del sistema e información para usuarios | ¿Los usuarios reciben la información que necesitan: que interactúan con IA, propósito, límites, cómo pedir atención humana? | Avisos de IA; información para usuarios; capturas del canal | | | |
| A.8.3 Reporte externo | ¿Pueden usuarios y terceros reportar impactos adversos? ¿Se da seguimiento a esos reportes? | Canal externo; registro de reportes y respuestas | | | |
| A.8.4 Comunicación de incidentes | ¿Existe un plan documentado para comunicar incidentes a usuarios? ¿Se aplicó en los incidentes de la muestra? | Procedimiento de incidentes; avisos enviados | | | |
| A.8.5 Información para las partes interesadas | ¿Están identificadas y documentadas las obligaciones de informar sobre los sistemas a clientes, autoridades u otras partes? | Tabla de obligaciones de información; evidencia de cumplimiento | | | |

### A.9 Uso de sistemas de IA

| Control | Pregunta guía | Evidencia a revisar | ¿Incluido en la SoA? | Resultado | Notas |
|---|---|---|---|---|---|
| A.9.2 Procesos para el uso responsable | ¿Está definido cómo se solicita, evalúa y aprueba el uso de un sistema de IA? | Política de uso aceptable; solicitudes y aprobaciones | | | |
| A.9.3 Objetivos para el uso responsable | ¿Hay objetivos de uso responsable y se decidió dónde se necesita supervisión humana? | Objetivos documentados; diseño de supervisión humana | | | |
| A.9.4 Uso previsto del sistema de IA | ¿Los sistemas se usan dentro de su uso previsto y su documentación? ¿Cómo se detectan y escalan los usos fuera de alcance? | Fichas del sistema; monitoreo de uso; incidentes de uso indebido | | | |

### A.10 Relaciones con terceros y clientes

| Control | Pregunta guía | Evidencia a revisar | ¿Incluido en la SoA? | Resultado | Notas |
|---|---|---|---|---|---|
| A.10.2 Asignación de responsabilidades | ¿Están repartidas y documentadas las responsabilidades del ciclo de vida entre la organización, proveedores, socios y clientes? | Matriz de responsabilidades compartidas; contratos | | | |
| A.10.3 Proveedores | ¿Existe un proceso para que lo que entregan los proveedores (datos, modelos, servicios) sea coherente con el enfoque responsable de la organización? | Evaluaciones de proveedores; cláusulas de IA; seguimiento | | | |
| A.10.4 Clientes | ¿Se consideran las necesidades y expectativas de los clientes y se les comunican los límites y responsabilidades del sistema? | Documentación para clientes; contratos; retroalimentación | | | |

## 5. Resumen de hallazgos

| N.º | Referencia | Tipo (NC mayor, NC menor, OBS) | Descripción del hallazgo | Evidencia | Responsable de la acción | Fecha compromiso |
|---|---|---|---|---|---|---|
| 1 | | | | | | |
| 2 | | | | | | |
| 3 | | | | | | |

*Ejemplo de redacción de una no conformidad: "Requisito: 6.1.3. Hallazgo: el riesgo R-05 de Score Monarca v3, con clasificación residual Alto, fue aceptado por el Líder de Ciencia de Datos, cuando los criterios aprobados asignan esa aceptación al Comité de Modelos. Evidencia: registro de riesgos versión 3, fila R-05."*

Totales: C [N] · NC mayores [N] · NC menores [N] · OBS [N] · NA [N].

## 6. Conclusiones

| Aspecto | Conclusión |
|---|---|
| Fortalezas observadas | [DESCRIPCIÓN] |
| Principales áreas de mejora | [DESCRIPCIÓN] |
| Conformidad del SGIA con los requisitos auditados | [CONFORME / CONFORME CON NO CONFORMIDADES MENORES / NO CONFORME] |
| Eficacia del SGIA en el alcance auditado | [CONCLUSIÓN BREVE CON SUSTENTO] |
| Limitaciones de la auditoría | [POR EJEMPLO, NO SE PUDO ENTREVISTAR AL PROVEEDOR DEL MODELO] |
| Destinatarios del informe | [ALTA DIRECCIÓN, RESPONSABLE DEL SGIA, DUEÑOS DE PROCESO] |

## 7. Firmas

| Rol | Nombre | Firma | Fecha |
|---|---|---|---|
| Auditor líder | [NOMBRE] | | [FECHA] |
| Responsable del SGIA (recibe el informe) | [NOMBRE] | | [FECHA] |
| Alta dirección (enterada) | [NOMBRE] | | [FECHA] |

## Historial de cambios

| Versión | Fecha | Descripción del cambio | Autor | Aprobó |
|---|---|---|---|---|
| 1.0 | [FECHA] | Emisión inicial del formulario | [NOMBRE] | [NOMBRE] |
| | | | | |

## Referencias

- ISO/IEC 42001:2023, cláusulas 4 a 10, en particular 9.2.1 y 9.2.2.
- ISO/IEC 42001:2023, Anexo A (38 controles: A.2.2 a A.10.4) y Anexo B (guía de implementación).
- ISO 19011 (directrices para la auditoría de sistemas de gestión), como orientación para planificar y ejecutar auditorías.
- Documentos relacionados: todos los documentos del SGIA, en especial [SGIA-POL-01], [SGIA-ORG-01], [SGIA-PRO-01], [SGIA-FOR-01], [SGIA-PRO-02], [SGIA-PRO-03]; `declaracion-de-aplicabilidad.xlsx`.
- Guía *Descifrando ISO 42001*, sección de auditoría: https://adriangzmncrz-arch.github.io/descifrando-iso42001/auditoria/checklist-preparacion/

---
description: Cláusula 7 de ISO/IEC 42001 explicada con ejemplos — recursos, competencia, toma de conciencia, comunicación e información documentada del SGIA, con perfiles de competencia para IA, campañas de concientización y una matriz de comunicación.
---

# Cláusula 7 · Apoyo

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-file-document-check-outline: Requisito certificable</span>
<span class="dx-badge dx-badge--rol-usa">:material-cloud-download-outline: Usa IA de terceros</span>
<span class="dx-badge dx-badge--rol-desarrolla">:material-code-braces: Desarrolla IA</span>
<span class="dx-badge dx-badge--rol-provee">:material-handshake-outline: Provee IA a clientes</span>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: 20 min de lectura</span>
</div>

!!! abstract "En una frase"
    La cláusula 7 se asegura de que el sistema de gestión de IA tenga con qué funcionar: presupuesto y herramientas, personas que saben lo que hacen, un equipo que conoce las reglas, mensajes que llegan a quien deben y documentos en los que se puede confiar.

## Propósito

Las cláusulas 4 a 6 producen decisiones: alcance, política, criterios de riesgo, controles y objetivos. Todo eso se queda en papel si nadie tiene tiempo para ejecutarlo, si quien evalúa un modelo no sabe qué preguntar, si el personal sigue pegando datos de clientes en un chatbot gratuito o si la última versión de la evaluación de impacto vive en la laptop de alguien. La cláusula 7 reúne los habilitadores del sistema de gestión de IA (SGIA).

La estructura es la misma de ISO 27001 o ISO 9001; lo que cambia es el contenido, porque en IA tres fenómenos hacen que el apoyo pese más:

- **La brecha de conocimiento es enorme y se mueve rápido.** Pocas organizaciones tienen a alguien que entienda a la vez de modelos, de datos personales y de gestión de riesgos.
- **La IA entra por la puerta de atrás.** Cualquiera con un navegador puede usar IA generativa sin pedir permiso. A eso se le llama "IA en la sombra" (*shadow AI*), y se combate más con conciencia y alternativas autorizadas que con bloqueos.
- **Los artefactos cambian a diario.** Modelos, conjuntos de datos e instrucciones de sistema (*system prompts*) evolucionan a una velocidad que ningún procedimiento documental tradicional previó.

!!! tip "Analogía"
    Piensa en la cocina de un restaurante. La cláusula 6 es el menú con sus recetas. La cláusula 7 es lo que permite que salgan bien un sábado lleno: una cocina equipada (recursos), cocineros que dominan su estación (competencia), meseros que conocen las reglas de higiene aunque no cocinen (toma de conciencia), comandas claras entre sala y cocina (comunicación) y un recetario con versiones, más la bitácora de temperaturas que pide la inspección sanitaria (información documentada).

## Qué pide, explicado

### 7.1 Recursos {#c-7-1}

La organización debe **determinar y proporcionar** los recursos que el SGIA necesita para establecerse, operar, mantenerse y mejorar. Son dos verbos: primero se calcula qué hace falta y después se pone sobre la mesa. Un plan impecable sin presupuesto aprobado no cumple.

Recursos del SGIA son el tiempo de las personas (responsable del SGIA, evaluadores, auditores internos, comité de IA), el dinero (capacitación, asesoría, certificación) y las herramientas (repositorio documental con versiones, herramienta de riesgos, inventario de sistemas, canal de inquietudes).

La distinción que más confunde: **los recursos del SGIA no son los recursos de los sistemas de IA**. Para estos últimos, una nota de 7.1 remite al grupo de controles A.4. (Los nombres de los controles son traducción libre de referencia, no el texto oficial).

| | Recursos del SGIA (7.1) | Recursos de los sistemas de IA ([A.4](../anexo-a/a4-recursos.md)) |
|---|---|---|
| **Qué son** | Lo que necesita el sistema de gestión | Lo que necesita cada sistema de IA para construirse y operar |
| **Ejemplos** | Horas del responsable del SGIA, presupuesto de capacitación, auditoría interna | Datos ([A.4.3](../anexo-a/a4-recursos.md#a-4-3)), modelos y bibliotecas ([A.4.4](../anexo-a/a4-recursos.md#a-4-4)), nube o créditos de API ([A.4.5](../anexo-a/a4-recursos.md#a-4-5)), personas expertas ([A.4.6](../anexo-a/a4-recursos.md#a-4-6)) |
| **Dónde se documentan** | Plan anual, presupuesto, revisión por la dirección | Inventario y ficha de cada sistema ([A.4.2](../anexo-a/a4-recursos.md#a-4-2)) |
| **Si falta** | Evaluaciones atrasadas, auditorías que no se hacen | Riesgos invisibles: nadie sabe con qué datos se entrenó un modelo |

Los dos mundos se tocan. Si la evaluación de riesgos concluye que un contador debe revisar las respuestas de Alma, el chatbot de Contadores Alameda, esas horas son un recurso del sistema (A.4.6), pero el presupuesto lo asegura la dirección como recurso del SGIA (7.1 y [5.1](c5-liderazgo.md#c-5-1)).

!!! note "Proporcionalidad"
    La norma no fija un tamaño mínimo de equipo. Un despacho de 58 personas puede operar su SGIA con una gerente de TI que le dedica parte de su semana y apoyo externo puntual. El auditor buscará coherencia: que los recursos alcancen para lo que tú mismo planificaste.

### 7.2 Competencia {#c-7-2}

La norma organiza la competencia en cuatro movimientos: **definir** qué necesita saber cada persona cuyo trabajo influye en el desempeño de la IA; **asegurar** que lo sepa, por formación, capacitación o experiencia; **cerrar brechas** y comprobar si la acción funcionó; y **guardar evidencia** documentada.

Dos detalles importan. El alcance incluye a todos los que trabajan bajo el control de la organización: contratistas, consultores, una empresa de etiquetado de datos. Y una nota de la norma menciona, además de la capacitación, la mentoría, reasignar a alguien que ya sabe o contratar a quien sepa: no todo se resuelve con un curso. La guía del Anexo B para [A.4.6](../anexo-a/a4-recursos.md#a-4-6) añade que conviene reunir experiencia diversa: técnica, de supervisión humana, de privacidad y seguridad, y del dominio de negocio.

#### Perfiles de competencia para IA

Propuesta nuestra, no lista de la norma. En una PyME, una misma persona puede cubrir dos o tres perfiles.

| Perfil | Qué hace | Competencias clave | Cómo evidenciarla |
|---|---|---|---|
| **Dueño del sistema de IA** (*AI system owner*) | Responde por un sistema de punta a punta, aprueba cambios y acepta riesgos dentro de su autoridad | Proceso de negocio; capacidades y limitaciones del sistema; criterios de riesgo; obligaciones legales | Nombramiento; capacitación en el SGIA; actas de sus decisiones |
| **Evaluador de impacto** | Dirige la evaluación de impacto (*AI system impact assessment*) de [6.1.4](c6-planificacion.md#c-6-1-4) y [8.4](c8-operacion.md#c-8-4) | Identificar grupos afectados y usos indebidos previsibles; equidad, derechos y privacidad | Curso específico; evaluaciones revisadas por un par |
| **Supervisor humano** (*human oversight*) | Revisa, corrige o anula salidas, como la banda gris de un modelo de crédito | Interpretar la salida y su incertidumbre; reconocer el sesgo de automatización (*automation bias*) | Prueba práctica con casos; muestreo de sus decisiones |
| **Auditor interno de IA** | Audita el SGIA ([9.2](c9-evaluacion-del-desempeno.md#c-9-2)) | ISO 19011; requisitos de ISO/IEC 42001; nociones de ciclo de vida y datos | Curso de auditor; auditorías acompañadas; independencia |
| **Científico de datos o ingeniero de aprendizaje automático** | Desarrolla, valida y monitorea modelos | Validación, métricas de equidad, detección de deriva (*drift*), documentación, seguridad propia de la IA | Portafolio; revisiones de modelos; validaciones independientes |
| **Compras** | Contrata servicios, modelos o datos ([A.10.3](../anexo-a/a10-terceros.md#a-10-3)) | Qué preguntar a un proveedor de IA (uso de datos para entrenar, ubicación, cambios de versión) | Cuestionario de debida diligencia aplicado; contratos revisados |

Un perfil que casi nadie nombra: **quien cura el contenido** que alimenta a una IA, como la base de conocimiento de un chatbot o los documentos de un sistema de generación aumentada por recuperación (RAG). Su dominio del tema determina directamente la calidad de las respuestas.

#### Cómo evidenciar la competencia y cerrar brechas

La herramienta clásica es la **matriz de competencias**: personas o puestos en filas, competencias en columnas y, en cada celda, el nivel requerido frente al actual. Las brechas se vuelven un plan con acciones, responsables y fechas. Tres recomendaciones:

- **Asistencia no es competencia.** Combina constancias con evaluaciones prácticas, revisiones por pares o muestreo de trabajo real.
- **Mide la eficacia.** Si capacitaste a compras, revisa si los contratos nuevos ya traen cláusulas de IA; si capacitaste a supervisores humanos, revisa la calidad de sus justificaciones.
- **Pide evidencia a terceros.** Si un consultor hace tu evaluación de impacto o tu auditoría interna, conserva la prueba de su competencia.

!!! latam "En México y Latinoamérica"
    Si ya documentas capacitación con constancias de competencias (en México, el formato DC-3 de la STPS), aprovecha ese flujo para los cursos de IA. La constancia prueba que alguien tomó el curso; la competencia conviene demostrarla además con evidencia de desempeño.

### 7.3 Toma de conciencia {#c-7-3}

La competencia es para roles específicos; la toma de conciencia es para **todas** las personas que trabajan bajo el control de la organización. Cada una debe tener presentes tres cosas: que existe una **política de IA** ([5.2](c5-liderazgo.md#c-5-2)) y qué significa para su trabajo; cómo **contribuye** a que el SGIA funcione, incluidos los beneficios de que la IA se desempeñe mejor; y qué **consecuencias** tiene no seguir sus requisitos.

La norma habla de que las personas *sean conscientes*, no de que *reciban una plática*. Un auditor puede preguntarle a cualquier colaborador qué herramientas de IA puede usar o dónde reportaría una respuesta extraña del chatbot. Si nadie sabe, no se cumple, aunque exista un video de inducción.

#### Campañas que sí funcionan

**1. Uso aceptable de IA generativa.** Qué herramientas están autorizadas (la suite corporativa, sí; la cuenta personal gratuita, no), para qué tareas y qué revisión humana se espera antes de que algo llegue a un cliente. Se apoya en la [Política de uso aceptable de IA generativa](../plantillas/index.md#uso-aceptable-ia-generativa).

**2. Qué no pegar en un chatbot.** Un semáforo funciona mejor que una política de diez páginas:

| Color | Qué es | Ejemplos |
|---|---|---|
| **Rojo**: nunca fuera de herramientas autorizadas | Datos personales, fiscales o financieros; secretos | Nóminas, RFC y CURP, estados de cuenta, contraseñas, código fuente, contratos confidenciales |
| **Amarillo**: solo en la herramienta autorizada | Información interna sin datos personales | Borradores de procedimientos, minutas sin nombres de clientes |
| **Verde**: libre | Información pública | Leyes publicadas, artículos, material de mercadotecnia ya difundido |

**3. Cómo reportar inquietudes.** El control [A.3.3](../anexo-a/a3-organizacion-interna.md#a-3-3) pide un proceso para levantar la mano cuando algo de la IA preocupa. La campaña debe decir dónde se reporta, que puede hacerse de forma confidencial o anónima, que no habrá represalias y qué vale la pena reportar: una respuesta sesgada, un uso no autorizado, una decisión automatizada que parece injusta.

**4. "La IA propone, tú decides".** Quien usa una salida de IA sigue siendo responsable del resultado. Es el antídoto contra el sesgo de automatización.

Funcionan mejor los formatos cortos y repetidos: cápsulas de tres minutos, carteles, un mensaje fijado en el chat interno, un caso real en la junta mensual. Mide cobertura, resultados de cuestionarios y reportes recibidos en el canal (al principio, que suban es buena señal).

!!! tip "Simulacros"
    Igual que se simulan correos de suplantación (*phishing*), puedes simular situaciones de IA: un supuesto cliente que pide resumir un archivo con datos personales "con cualquier herramienta", para ver quién lo reporta.

### 7.4 Comunicación {#c-7-4}

La organización debe decidir qué comunicaciones internas y externas son relevantes para el SGIA y, para cada una, **qué** se dice, **cuándo**, **a quién** y **cómo**. La forma más práctica de demostrarlo es una **matriz de comunicación**. Te recomendamos añadir una columna más, **quién** comunica, porque en un incidente de IA nadie debería improvisar la vocería.

En IA la comunicación externa pesa mucho, porque varios controles son en el fondo compromisos de comunicación: información para usuarios ([A.8.2](../anexo-a/a8-informacion-partes-interesadas.md#a-8-2)), medios para que terceros reporten impactos adversos ([A.8.3](../anexo-a/a8-informacion-partes-interesadas.md#a-8-3)), comunicación de incidentes ([A.8.4](../anexo-a/a8-informacion-partes-interesadas.md#a-8-4)) y obligaciones de informar ([A.8.5](../anexo-a/a8-informacion-partes-interesadas.md#a-8-5)).

| Qué | A quién | Cuándo | Cómo | Quién | Relación |
|---|---|---|---|---|---|
| Política de IA y sus cambios | Personal y contratistas | Al aprobarse, en cada revisión y en la inducción | Intranet, correo, firma de enterado | Responsable del SGIA | [A.2.2](../anexo-a/a2-politicas.md#a-2-2) |
| Desempeño del SGIA | Alta dirección | Trimestral y en la revisión por la dirección | Informe con indicadores | Responsable del SGIA | [9.3](c9-evaluacion-del-desempeno.md#c-9-3) |
| Aviso de que se habla con una IA | Clientes y usuarios finales | Al iniciar cada conversación | Mensaje automático en WhatsApp o en la web | Dueño del sistema | [A.8.2](../anexo-a/a8-informacion-partes-interesadas.md#a-8-2) |
| Cambios relevantes en un sistema provisto | Clientes empresariales | Con la anticipación pactada | Notas de versión, portal de clientes | Customer Success | [A.10.4](../anexo-a/a10-terceros.md#a-10-4) |
| Incidentes de IA | Usuarios y clientes afectados | Según el plan y los plazos contractuales o legales | Correo, aviso en la app, llamada | Vocero designado | [A.8.4](../anexo-a/a8-informacion-partes-interesadas.md#a-8-4) |
| Requisitos de IA responsable | Proveedores de IA, datos o modelos | Al contratar y renovar | Cuestionario, cláusulas contractuales | Compras y Legal | [A.10.3](../anexo-a/a10-terceros.md#a-10-3) |
| Información exigida por ley o contrato | Autoridades, reguladores, clientes corporativos | Cuando la obligación lo indique | Canal oficial, respuesta formal | Cumplimiento | [A.8.5](../anexo-a/a8-informacion-partes-interesadas.md#a-8-5) |
| Inquietudes sobre la IA | Equipo que atiende el canal | En cualquier momento | Formulario confidencial | Cualquier colaborador | [A.3.3](../anexo-a/a3-organizacion-interna.md#a-3-3) |

!!! latam "En México y Latinoamérica"
    El aviso de IA puede convivir con el aviso de privacidad: el primer mensaje de un chatbot de WhatsApp puede presentarse como asistente automatizado, enlazar al aviso de privacidad e indicar cómo hablar con una persona. Las obligaciones de transparencia varían por país: revisa [México y Latinoamérica](../integracion/contexto-mexico-latam.md) y, si atiendes usuarios en la Unión Europea, el [Reglamento de IA de la UE](../integracion/reglamento-ia-ue.md).

### 7.5 Información documentada {#c-7-5}

"Información documentada" es cualquier información que la organización debe controlar, en cualquier formato: un PDF firmado, una wiki, un tablero, un registro en una herramienta de MLOps. Sigue siendo útil distinguir lo que **se mantiene** al día (políticas, procedimientos) de lo que **se conserva** como evidencia y no debe modificarse (resultados, actas, registros).

#### 7.5.1 Generalidades

Hay dos tipos: la que la norma **pide de forma explícita** (no negociable; ver la tabla de abajo) y la que **la organización decide** que necesita para que el SGIA sea eficaz. Si tus equipos se equivocarían sin un procedimiento escrito de gestión de cambios, escríbelo; si un flujo en la herramienta de tickets basta, no hace falta un documento aparte. La norma reconoce que el volumen depende del tamaño, la complejidad y la competencia de cada organización.

#### 7.5.2 Creación y actualización

Al crear o actualizar información documentada cuida la **identificación** (título, código, fecha, versión), el **formato y medio** (idioma, herramienta, plantilla) y la **revisión y aprobación** por alguien con autoridad.

#### 7.5.3 Control

La información debe estar disponible donde y cuando se necesite, y protegida contra fugas, mal uso o alteraciones. Para lograrlo se resuelve, según aplique, cómo se distribuye y quién accede (solo lectura o edición), cómo se almacena y sigue siendo legible, cómo se controlan las versiones y cuánto tiempo se retiene antes de eliminarla. También se identifica y controla la información de **origen externo**, como la documentación de un proveedor de modelos o las condiciones de uso de una API.

#### Artefactos de IA: el punto ciego del control documental

| Artefacto | ¿Por qué controlarlo? | Cómo hacerlo |
|---|---|---|
| Ficha del modelo (*model card*) | Propósito, datos, métricas y limitaciones ([A.6.2.7](../anexo-a/a6-ciclo-de-vida.md#a-6-2-7)) | Una ficha por versión, ligada al registro de modelos |
| Ficha del conjunto de datos (*datasheet*) | Origen, sesgos conocidos, procedencia ([A.7.5](../anexo-a/a7-datos.md#a-7-5)) | Versiones identificadas por fecha y huella digital (*hash*) |
| Instrucciones de sistema y filtros | Una línea puede cambiar el comportamiento | Repositorio Git con revisión obligatoria |
| Reportes de verificación y validación | Prueban que la versión cumplía criterios ([A.6.2.4](../anexo-a/a6-ciclo-de-vida.md#a-6-2-4)) | Generados por la canalización (*pipeline*) y sin edición posterior |
| Bitácoras de eventos | Reconstruyen qué hizo el sistema ([A.6.2.8](../anexo-a/a6-ciclo-de-vida.md#a-6-2-8)) | Integridad protegida y retención definida |
| Base de conocimiento de un chatbot | Determina qué responde | Versiones fechadas aprobadas por un experto |

En nuestra lectura, el modelo y el conjunto de datos son **recursos** (A.4); su descripción, su historial y sus evaluaciones son **información documentada**. Al auditor le importa la trazabilidad: qué versión del modelo, entrenada con qué datos y validada con qué resultados, estaba en producción en una fecha dada.

**Protección y retención.** Una evaluación de impacto puede describir la vulnerabilidad de un grupo, una instrucción de sistema puede revelar cómo evadir un filtro y una bitácora puede contener datos personales: clasifícalas como el resto de tu información. Define plazos de retención considerando la vida del sistema, tus obligaciones fiscales, laborales y de datos personales, y la guía de [A.5.3](../anexo-a/a5-evaluacion-de-impacto.md#a-5-3) de conservar las evaluaciones de impacto por un periodo definido. Y cuida la legibilidad: un cuaderno de análisis que depende de una versión específica de una biblioteca puede volverse inservible si no guardas su entorno.

#### Información documentada que la norma pide explícitamente

Resumen de lo que piden las cláusulas 4 a 10. Los controles del Anexo A que selecciones en tu Declaración de Aplicabilidad (SoA) añaden más. La lista completa está en [Documentación requerida](../implementacion/documentacion-requerida.md).

| Requisito | Información documentada |
|---|---|
| [4.3](c4-contexto.md#c-4-3) | Alcance del SGIA |
| [4.4](c4-contexto.md#c-4-4) | El propio SGIA y sus procesos (4.4 pide documentarlo) |
| [5.2](c5-liderazgo.md#c-5-2) | Política de IA |
| [6.1.1](c6-planificacion.md#c-6-1-1) | Acciones para identificar y abordar riesgos y oportunidades |
| [6.1.2](c6-planificacion.md#c-6-1-2) | Proceso de evaluación de riesgos de IA |
| [6.1.3](c6-planificacion.md#c-6-1-3) | Proceso de tratamiento, controles necesarios y SoA |
| [6.1.4](c6-planificacion.md#c-6-1-4) | Resultados de la evaluación de impacto |
| [6.2](c6-planificacion.md#c-6-2) | Objetivos de IA |
| [7.2](#c-7-2) | Evidencia de competencia |
| [7.5.1](#c-7-5) | Lo que la organización determine necesario |
| [8.1](c8-operacion.md#c-8-1) | Lo necesario para confiar en que los procesos se ejecutaron según lo planificado |
| [8.2](c8-operacion.md#c-8-2), [8.3](c8-operacion.md#c-8-3), [8.4](c8-operacion.md#c-8-4) | Resultados de cada evaluación de riesgos, de cada tratamiento y de cada evaluación de impacto |
| [9.1](c9-evaluacion-del-desempeno.md#c-9-1) | Resultados del seguimiento y la medición |
| [9.2](c9-evaluacion-del-desempeno.md#c-9-2) | Programa y resultados de auditoría interna |
| [9.3](c9-evaluacion-del-desempeno.md#c-9-3) | Acta y decisiones de la revisión por la dirección |
| [10.2](c10-mejora.md#c-10-2) | No conformidades, acciones tomadas y resultados de las acciones correctivas |

## Cómo se aplica según tu rol

=== "Si usas IA de terceros"

    **Contadores Alameda** (despacho contable en Querétaro).

    - **Recursos:** la Gerente de TI es responsable del SGIA con dedicación definida; hay presupuesto para capacitación y para un consultor que hará la primera auditoría interna. El recurso más olvidado: las horas de los contadores senior que revisan la base de conocimiento de Alma antes de cada temporada de declaraciones.
    - **Competencia:** pesan más los perfiles de negocio que los técnicos: la Líder de atención a clientes como dueña de Alma y los curadores del contenido. A la Gerente de TI le toca, además, saber interrogar a BotNorte sobre el modelo de lenguaje que usa.
    - **Conciencia y comunicación:** semáforo de qué no pegar (ya hubo una nómina en un chatbot gratuito), aviso de IA en el primer mensaje de Alma y respuesta formal al cuestionario del banco cliente.
    - **Información documentada:** la documentación de BotNorte y los términos de la suite de ofimática son información de origen externo: se identifican, se guarda la versión vigente y se revisan cuando cambian.

=== "Si desarrollas IA"

    **Monarca Crédito** (SOFOM E.N.R. con su propio modelo de *scoring*).

    - **Recursos:** además del equipo de ciencia de datos y la plataforma de MLOps (recursos A.4), el SGIA necesita tiempo del Comité de Modelos, una validación independiente anual y horas del Oficial de Privacidad.
    - **Competencia:** los científicos de datos dominan métricas de equidad por sexo, edad y entidad federativa, y detectan variables sustitutas como el código postal. Los analistas de la banda gris, como supervisores humanos, aprenden a documentar por qué confirman o anulan una recomendación.
    - **Conciencia y comunicación:** mercadotecnia y cobranza saben que la probabilidad de incumplimiento de Score Monarca v3 solo se usa para lo que fue diseñada. Hacia afuera: motivos de rechazo comprensibles para solicitantes y respuestas a bancos aliados e inversionistas.
    - **Información documentada:** ficha del modelo por versión, fichas de los conjuntos de datos (solicitud, buró de crédito, transacciones, uso de la app con consentimiento), reportes de validación y actas del Comité de Modelos, todo ligado en un registro de modelos.

=== "Si provees IA a clientes"

    **Conversa Labs** (plataforma SaaS de asistentes con IA generativa).

    - **Recursos:** los créditos de API del modelo fundacional son recurso del sistema; el equipo de Confianza y Seguridad (*Trust & Safety*) y el tiempo para pruebas adversarias son recursos del SGIA que la dirección protege cuando el área comercial presiona por lanzar.
    - **Competencia:** ingenieros que dominan las pruebas de inyección de instrucciones (*prompt injection*); Customer Success capaz de explicar la responsabilidad compartida; Legal al tanto de las obligaciones de transparencia de su cliente en España.
    - **Conciencia y comunicación:** soporte sabe que no puede copiar conversaciones de clientes a herramientas externas, por el compromiso contractual de no entrenar con sus datos. La matriz incluye notas de versión, avisos de cambio de modelo, incidentes con plazos pactados y un canal técnico con el proveedor del modelo fundacional para avisos de retiro de versiones.
    - **Información documentada:** documentación para clientes (cómo configurar el aviso de IA, limitaciones conocidas) y versiones de instrucciones de sistema y filtros de seguridad (*guardrails*) por cliente.

!!! info "Diferencias con ISO 27001"
    - **Estructura:** prácticamente idéntica a la cláusula 7 de ISO 27001:2022. Reutiliza tu control de documentos, tu programa de capacitación y tu matriz de comunicación, y amplíalos.
    - **7.1:** 42001 conecta con los controles A.4 sobre recursos de los sistemas de IA; ISO 27001 no tiene un grupo de controles equivalente.
    - **7.2:** a la competencia en seguridad se suman ciencia de datos, evaluación de impacto, supervisión humana y ética aplicada.
    - **7.3:** en nuestra experiencia, la IA en la sombra es para el SGIA lo que el *phishing* para el SGSI: el tema número uno de concientización.
    - **7.5:** mismo texto base, pero la velocidad de cambio de modelos, datos e instrucciones obliga a integrar el control documental con las herramientas de ingeniería.

## Preguntas para tu organización

- [ ] ¿La dirección aprobó tiempo y presupuesto para el SGIA, y alcanzan para lo planificado?
- [ ] ¿Los recursos de cada sistema de IA están documentados en el inventario, aparte de los del SGIA?
- [ ] ¿Definimos la competencia requerida por rol, incluidos contratistas y consultores?
- [ ] ¿Tenemos una matriz de competencias con brechas visibles y un plan para cerrarlas?
- [ ] ¿Medimos si las capacitaciones funcionaron, más allá de la asistencia?
- [ ] ¿Cualquier colaborador sabría decir qué herramientas de IA puede usar y qué datos nunca debe pegar?
- [ ] ¿El personal conoce el canal de inquietudes y confía en que no habrá represalias?
- [ ] ¿La matriz de comunicación incluye clientes, proveedores de IA y autoridades?
- [ ] ¿Sabemos quién da la cara si un sistema de IA falla en público?
- [ ] ¿Controlamos versiones de fichas de modelo, datos, instrucciones de sistema y bases de conocimiento?
- [ ] ¿La documentación de proveedores está identificada y vigente?

## Qué evidencia espera ver un auditor

| Evidencia | Ejemplo | Señal de alerta |
|---|---|---|
| Recursos asignados | Presupuesto del SGIA; nombramiento con dedicación definida | El responsable "lo hace en sus ratos libres" y todo va atrasado |
| Matriz de competencias | Niveles requeridos y actuales por rol de IA | Solo hay listas de asistencia |
| Evidencia de competencia | Constancias, evaluaciones prácticas, CV de consultores | El evaluador de impacto nunca recibió formación |
| Programa de toma de conciencia | Calendario, materiales, cobertura, cuestionarios | En entrevistas, nadie conoce la política de IA ni el canal de reporte |
| Matriz de comunicación | Qué, cuándo, a quién y cómo, con evidencia de envíos | Un chatbot atiende clientes sin avisar que es una IA |
| Control documental | Lista maestra, historial de versiones, aprobaciones | Tres versiones de la evaluación de impacto circulan por correo |
| Trazabilidad de artefactos | Registro de modelos con fichas y versiones de datos e instrucciones | Nadie sabe qué versión estaba en producción el mes pasado |

!!! auditor "Lo que mira el auditor"
    En esta cláusula el auditor combina revisión documental con **entrevistas al azar**: pregunta a alguien ajeno al SGIA qué herramientas de IA puede usar, pide la evidencia de competencia de quien firmó la última evaluación de impacto y sigue el historial de versiones de un documento elegido al azar.

!!! warning "Errores comunes"
    - Confundir 7.1 con A.4 y documentar solo uno de los dos.
    - Tratar la competencia como "ya fue al curso", sin niveles requeridos ni medición de eficacia.
    - Olvidar a contratistas y consultores que trabajan bajo tu control.
    - Una sola plática anual, larga y genérica, sin medir si alguien la recuerda.
    - Prohibir toda IA generativa sin ofrecer una alternativa autorizada: eso empuja el uso a la sombra.
    - Controlar con rigor las políticas en Word y dejar sin versiones las instrucciones de sistema que cambian a diario.

## Ejemplo resuelto

!!! example "Caso: Contadores Alameda — programa de toma de conciencia y matriz de competencias"
    **Situación.** Un banco cliente envió un cuestionario sobre gobierno de IA y, casi al mismo tiempo, un colaborador pegó una nómina con datos personales en un chatbot gratuito. La Socia directora pidió a la Gerente de TI (responsable del SGIA) y a la Coordinadora de cumplimiento y datos personales un plan para que no se repitiera y para responder al banco con evidencia.

    **Paso 1. Mapear quién toca la IA.** Dirección y gerencias (7 personas) aprueban usos; 33 contadores y especialistas de nómina usan el asistente de ofimática (IA-01) y la captura de CFDI (IA-03), y tres de ellos curan la base de conocimiento de Alma (IA-02); 8 personas de atención supervisan a Alma; 3 de TI administran todo; 7 de apoyo usan IA-01 ocasionalmente.

    **Paso 2. Matriz de competencias.**

    | Rol | Competencia requerida | Requerido / actual | Acción | Cómo verifican la eficacia |
    |---|---|---|---|---|
    | Gerente de TI (responsable del SGIA y compras de TI) | ISO/IEC 42001, riesgos de IA, debida diligencia de proveedores | Avanzado / intermedio | Curso de implementador y acompañamiento del consultor | Primera evaluación de riesgos sin observaciones de fondo; renovación con BotNorte con cláusulas de IA |
    | Líder de atención (dueña de Alma) | Límites de Alma; cuándo traspasar a una persona | Intermedio / básico | Taller con BotNorte y sesión sobre alucinaciones | Revisión mensual de 30 conversaciones |
    | Curadores de la base de conocimiento | Respuestas verificables con fuente oficial (SAT) y vigencia | Avanzado / sin experiencia en curaduría | Guía de curaduría y revisión cruzada | Cero respuestas sin fuente; menos errores sobre plazos |
    | Coordinadora de cumplimiento (evaluadora de impacto) | Método de evaluación de impacto | Intermedio / básico en IA, alto en privacidad | Taller y primera evaluación acompañada | Evaluación de Alma revisada por un par externo |
    | Contadores y nómina | Revisar salidas de IA-01 y validar CFDI de IA-03 | Básico / variable | Cápsula práctica con ejemplos anonimizados | Muestreo trimestral de 20 CFDI capturados |

    **Paso 3. Programa de toma de conciencia.** Mensajes cortos y frecuentes en lugar de una plática larga:

    | Mes | Tema | Formato | Indicador |
    |---|---|---|---|
    | 1 | Política de IA y herramientas autorizadas | Junta de 20 minutos con la Socia directora y firma de enterado | Porcentaje de firmas |
    | 2 | Semáforo: qué no pegar en un chatbot | Cartel, cápsula de 3 minutos y cuestionario | Aciertos |
    | 3 | Canal de inquietudes (A.3.3) | Correo y mensaje fijado en el chat interno | Reportes recibidos |
    | 4 | "La IA propone, tú decides" | Caso: resumen de junta con un monto equivocado | Errores detectados |
    | 5 | Qué responde Alma y qué no, antes de la temporada de declaraciones | Sesión práctica para atención y curadores | Errores de Alma en la temporada |
    | 6 | Simulacro: "resúmeme esta nómina" | Correo simulado de un cliente | Porcentaje que reporta |
    | 7 a 12 | Repaso y novedades de IA-01 y de BotNorte | Mensajes quincenales y segundo simulacro | Cobertura |

    **Paso 4. Resultados a seis meses.** Firmaron la política las 58 personas; el cuestionario del semáforo promedió 92 %; el canal recibió 7 reportes (3 sobre respuestas incorrectas de Alma, 2 dudas sobre herramientas y 2 sobre extensiones de navegador con IA no aprobadas); en el simulacro reportó el 71 % en la primera ronda y el 89 % en la segunda.

    Con la política, la matriz, el calendario y esta evidencia, la respuesta al banco dejó de ser una promesa.

    **Lección.** El perfil más crítico no era técnico: eran los tres contadores que curan lo que Alma responde. Un error suyo se multiplica en cientos de conversaciones.

## Relación con otras cláusulas, controles y normas

- **Liderazgo:** la dirección asegura recursos ([5.1](c5-liderazgo.md#c-5-1)), aprueba la política que se comunica ([5.2](c5-liderazgo.md#c-5-2)) y asigna roles ([5.3](c5-liderazgo.md#c-5-3) y [A.3.2](../anexo-a/a3-organizacion-interna.md#a-3-2)).
- **Planificación:** los controles de [6.1.3](c6-planificacion.md#c-6-1-3) y los objetivos de [6.2](c6-planificacion.md#c-6-2) determinan qué competencias y recursos hacen falta.
- **Operación:** [8.1](c8-operacion.md#c-8-1) a [8.4](c8-operacion.md#c-8-4) generan resultados que se controlan con 7.5.
- **Evaluación y mejora:** auditores competentes para [9.2](c9-evaluacion-del-desempeno.md#c-9-2); suficiencia de recursos en [9.3](c9-evaluacion-del-desempeno.md#c-9-3); brechas de competencia como causa frecuente en [10.2](c10-mejora.md#c-10-2).
- **Controles:** [A.4.2](../anexo-a/a4-recursos.md#a-4-2) a [A.4.6](../anexo-a/a4-recursos.md#a-4-6) (recursos); [A.3.3](../anexo-a/a3-organizacion-interna.md#a-3-3) (inquietudes; la guía del Anexo B sugiere consultar ISO 37002); [A.8.2](../anexo-a/a8-informacion-partes-interesadas.md#a-8-2) a [A.8.5](../anexo-a/a8-informacion-partes-interesadas.md#a-8-5) y [A.10.3](../anexo-a/a10-terceros.md#a-10-3) (comunicación externa); [A.6.2.7](../anexo-a/a6-ciclo-de-vida.md#a-6-2-7), [A.7.5](../anexo-a/a7-datos.md#a-7-5) y [A.5.3](../anexo-a/a5-evaluacion-de-impacto.md#a-5-3) (artefactos y registros).
- **Normas:** ISO 19011 para auditores; ISO/IEC 22989 para la terminología. Ver [la familia de normas](../fundamentos/familia-de-normas.md) y la [integración con ISO 27001](../integracion/con-iso27001.md).
- **Para profundizar:** [Documentación requerida](../implementacion/documentacion-requerida.md) y [Roles en la IA](../fundamentos/roles-en-la-ia.md).

## Plantillas relacionadas

- [Política de uso aceptable de IA generativa](../plantillas/index.md#uso-aceptable-ia-generativa)
- [Política de IA](../plantillas/index.md#politica-de-ia)
- [Roles y responsabilidades (RACI)](../plantillas/index.md#raci-ia)
- [Inventario de sistemas de IA](../plantillas/index.md#inventario-sistemas-ia)
- [Ficha del sistema de IA](../plantillas/index.md#ficha-del-sistema)
- [Registro de incidentes de IA](../plantillas/index.md#registro-de-incidentes)

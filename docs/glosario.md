---
description: Glosario español-inglés de ISO/IEC 42001 con más de 140 términos de sistemas de gestión, inteligencia artificial, roles, certificación, privacidad y regulación, explicados con definiciones propias y didácticas y enlaces a la guía.
---

# Glosario

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-book-alphabet: Referencia</span>
<span class="dx-badge dx-badge--tiempo">:material-format-list-bulleted: 152 términos</span>
</div>

!!! abstract "En una frase"
    Los términos que vas a encontrar en ISO/IEC 42001, en esta guía y en las conversaciones con proveedores, auditores y equipos de datos, explicados en español sencillo y con su equivalente en inglés.

## Cómo usar este glosario

- **Orden alfabético en español**, con el término en inglés entre paréntesis y en cursiva, porque muchas fuentes técnicas, contratos y auditores usan el inglés.
- **Usa el índice de letras** o el buscador del sitio para llegar rápido a un término.
- **Sigue los enlaces** cuando un concepto se explica a fondo en otra página de la guía.
- **Las siglas frecuentes** (SGIA, SoA, LLM, RAG, EIPD, ARCO y otras) muestran su significado al pasar el cursor por encima en toda la guía.

!!! warning "Definiciones propias y didácticas"
    Las definiciones de este glosario son del autor y buscan que el concepto se entienda a la primera; **no son las definiciones oficiales**. Las oficiales de ISO/IEC 42001 están en su cláusula 3 y en ISO/IEC 22989, que la propia 42001 cita como referencia normativa; las de leyes y reglamentos están en cada texto legal. Si necesitas precisión jurídica, contractual o de auditoría, consulta siempre la fuente oficial.

**Índice:** [A](#a) · [B](#b) · [C](#c) · [D](#d) · [E](#e) · [F](#f) · [G](#g) · [H](#h) · [I](#i) · [L](#l) · [M](#m) · [N](#n) · [O](#o) · [P](#p) · [R](#r) · [S](#s) · [T](#t) · [U](#u) · [V](#v)

## A

**Acción correctiva** (*corrective action*)
:   Lo que haces para eliminar la causa de un problema y evitar que se repita, no solo para apagar el fuego. Se distingue de la corrección, que atiende el efecto inmediato. Ver [10.2](clausulas/c10-mejora.md#c-10-2).

**Acreditación** (*accreditation*)
:   Reconocimiento formal de que un organismo de certificación es competente e imparcial para certificar con una norma determinada. La otorga un organismo de acreditación: evalúa al certificador, no a tu empresa.

**Agente de IA** (*AI agent*)
:   Sistema de IA que, además de responder, planea pasos y ejecuta acciones por su cuenta con herramientas: consulta sistemas, envía correos, crea tickets o hace pagos. Cuanta más autonomía y más permisos tenga, más importan los límites de acción, la supervisión humana y los registros. ISO/IEC 42001 no menciona a los agentes de forma expresa.

**AI-BOM** (*AI bill of materials*)
:   Ver [Lista de materiales de IA](#l).

**Ajuste fino** (*fine-tuning*)
:   Entrenamiento adicional de un modelo ya entrenado, con un conjunto de datos más pequeño y específico, para especializarlo en una tarea, un vocabulario o un estilo. Como cambia el modelo, conviene volver a probarlo antes de usarlo.

**Alcance del SGIA** (*scope*)
:   La frontera del sistema de gestión: qué sistemas de IA, procesos, sedes y roles cubre. Queda documentado y es lo que aparece en el certificado. Ver [4.3](clausulas/c4-contexto.md#c-4-3).

**Alfabetización en IA** (*AI literacy*)
:   Conocimientos y habilidades que permiten a las personas usar la IA con criterio, entender sus límites y reconocer sus riesgos. Es una obligación del Reglamento de IA de la UE (art. 4), aplicable desde el 2 de febrero de 2025 y reformulada en 2026 por el Ómnibus.[^ue] En ISO/IEC 42001 se relaciona con la [competencia](clausulas/c7-apoyo.md#c-7-2) y la [toma de conciencia](clausulas/c7-apoyo.md#c-7-3).

**Alta dirección** (*top management*)
:   La persona o el grupo que dirige la organización desde el puesto más alto, como la dirección general o la socia directora de un despacho. Debe demostrar liderazgo sobre el SGIA y no puede delegar esa responsabilidad. Ver [5.1](clausulas/c5-liderazgo.md#c-5-1).

**Alto riesgo** (*high-risk*)
:   Categoría del Reglamento de IA de la UE para sistemas que pueden afectar seriamente la salud, la seguridad o los derechos fundamentales, como algunos usos en empleo o en la evaluación de solvencia. Conlleva obligaciones estrictas; tras el Ómnibus, las de los sistemas del Anexo III de ese reglamento aplican desde el 2 de diciembre de 2027.[^ue] Ver [Reglamento de IA de la UE](integracion/reglamento-ia-ue.md).

**Alucinación** (*hallucination*)
:   Respuesta de un modelo generativo que suena segura y coherente pero es falsa o inventada, como una fecha de declaración equivocada o una ley que no existe. El perfil de IA generativa del NIST la llama confabulación (*confabulation*). Se reduce con buenas fuentes, pruebas y revisión humana, pero no desaparece.

**Apetito de riesgo** (*risk appetite*)
:   Cuánto riesgo está dispuesta a asumir la organización para lograr lo que busca. Se traduce en criterios concretos que separan los riesgos aceptables de los que no lo son. Ver [6.1.1](clausulas/c6-planificacion.md#c-6-1-1).

**Aprendizaje automático** (*machine learning*, ML)
:   Forma de construir sistemas de IA en la que el comportamiento no se programa regla por regla, sino que se aprende a partir de ejemplos. Un modelo de scoring que aprende de miles de créditos pasados es el caso típico. Ver [IA para profesionales de GRC](fundamentos/ia-para-profesionales-grc.md).

**Aprendizaje no supervisado** (*unsupervised learning*)
:   Aprendizaje automático con datos sin etiquetas: el algoritmo busca por sí mismo patrones, grupos o casos raros. Sirve, por ejemplo, para segmentar clientes o detectar transacciones atípicas.

**Aprendizaje por refuerzo** (*reinforcement learning*)
:   Aprendizaje por prueba y error: el sistema actúa, recibe recompensas o castigos y ajusta su conducta para obtener más recompensa. Se usa en robótica, en optimización y para afinar modelos de lenguaje con preferencias humanas.

**Aprendizaje profundo** (*deep learning*)
:   Rama del aprendizaje automático que usa redes neuronales de muchas capas. Es la base del reconocimiento de imágenes y voz y de los modelos de lenguaje actuales; suele pedir muchos datos y cómputo, y es más difícil de explicar.

**Aprendizaje supervisado** (*supervised learning*)
:   Aprendizaje automático con ejemplos etiquetados: cada dato trae la respuesta correcta (pagó o no pagó, fraude o no fraude) y el modelo aprende a predecirla. La calidad de las etiquetas define buena parte de la calidad del modelo.

**Ataque adversario** (*adversarial attack*)
:   Manipulación deliberada de las entradas de un sistema de IA para engañarlo; por ejemplo, alterar una imagen de forma imperceptible para que el modelo la clasifique mal. Se descubre con pruebas adversarias y se mitiga con diseño robusto y monitoreo.

**Auditoría de seguimiento** (*surveillance audit*)
:   Auditoría que hace el organismo de certificación entre la certificación inicial y la recertificación, por lo general una vez al año, para confirmar que el sistema sigue funcionando y mejorando.[^ciclo] Revisa una muestra de requisitos, no todo. Ver [cómo se certifica](auditoria/como-se-certifica.md).

**Auditoría interna** (*internal audit*)
:   Revisión planeada que la propia organización realiza, con personal interno o externo pero independiente de lo que audita, para comprobar si el SGIA cumple la norma y sus propias reglas y si funciona en la práctica. Ver [9.2](clausulas/c9-evaluacion-del-desempeno.md#c-9-2) y la [checklist](plantillas/index.md#checklist-auditoria-interna).

**Autoridad pertinente** (*relevant authority*)
:   En el vocabulario de roles de la IA, quien legisla, regula o supervisa su uso: un congreso, un regulador financiero, una autoridad de protección de datos. Ver [roles en la IA](fundamentos/roles-en-la-ia.md#rol-autoridad).

**Aviso de privacidad** (*privacy notice*)
:   Documento con el que el responsable informa a los titulares qué datos personales trata, para qué, con quién los comparte y cómo ejercer sus derechos. En México lo exige la LFPDPPP; si usas IA con datos personales, conviene que el aviso lo diga en lenguaje claro.

## B

**Base de conocimiento** (*knowledge base*)
:   Conjunto de documentos, preguntas frecuentes o datos que un asistente de IA consulta para responder, casi siempre mediante RAG. Su exactitud y vigencia determinan la calidad de las respuestas, así que conviene tratarla como un activo controlado, con dueño y control de cambios.

## C

**Cadena de suministro de IA** (*AI supply chain*)
:   Todos los terceros de los que depende un sistema de IA: proveedores de modelos, de datos, de nube, de bibliotecas y de etiquetado. Un cambio en cualquiera de ellos puede alterar el comportamiento del sistema. Ver [A.10.3](anexo-a/a10-terceros.md#a-10-3).

**Caja negra** (*black box*)
:   Forma coloquial de llamar a un sistema cuyo funcionamiento interno no se puede inspeccionar o entender con facilidad, por su complejidad o porque el proveedor no lo revela. Exige más pruebas, más monitoreo y otras formas de explicación.

**Ciclo de vida del sistema de IA** (*AI system life cycle*)
:   Las etapas por las que pasa un sistema de IA desde que se concibe hasta que se retira: diseño, desarrollo, verificación y validación, despliegue, operación y monitoreo, y retiro. Cada etapa tiene sus propios riesgos y controles. Ver [A.6](anexo-a/a6-ciclo-de-vida.md).

**Ciclo PHVA** (*PDCA cycle*)
:   Planificar, Hacer, Verificar y Actuar: el ciclo de mejora en el que se apoyan los sistemas de gestión. En ISO/IEC 42001, planificar corresponde sobre todo a la cláusula 6, hacer a la 8, verificar a la 9 y actuar a la 10. Ver [¿Qué es un SGIA?](fundamentos/que-es-un-sgia.md).

**Cliente de IA** (*AI customer*)
:   Organización o persona que usa un producto o servicio de IA de un proveedor; el usuario de IA es una forma de cliente. Contadores Alameda es cliente de BotNorte. Ver [roles en la IA](fundamentos/roles-en-la-ia.md#rol-cliente).

**Competencia** (*competence*)
:   Capacidad demostrada de aplicar conocimientos y habilidades para lograr un resultado; no basta con haber tomado un curso. La organización define qué competencia necesita cada rol del SGIA y guarda evidencia de que la tiene. Ver [7.2](clausulas/c7-apoyo.md#c-7-2).

**Conformidad** (*conformity*)
:   Cumplir con un requisito, venga de la norma, de la ley, de un contrato o de tus propios procedimientos. Su contrario es la no conformidad.

**Conjunto de datos** (*dataset*)
:   Colección organizada de datos que se usa para entrenar, validar, probar u operar un modelo. Conviene que cada conjunto tenga dueño, versión, origen conocido y una ficha de datos.

**Contexto de la organización** (*context of the organization*)
:   Las circunstancias internas y externas que influyen en lo que el SGIA debe lograr: leyes, mercado, cultura, tecnología, estrategia y contratos. En ISO/IEC 42001 incluye además el propósito de tus sistemas de IA y el rol que juegas frente a ellos. Ver [4.1](clausulas/c4-contexto.md#c-4-1).

**Control** (*control*)
:   Medida que modifica un riesgo: una política, un procedimiento, una herramienta técnica, una revisión humana. El Anexo A propone 38 controles de referencia y puedes añadir los tuyos. Ver [Anexo A](anexo-a/index.md).

**Corrección** (*correction*)
:   Acción inmediata para eliminar una no conformidad detectada o sus efectos, como corregir una respuesta equivocada del chatbot. No ataca la causa; para eso está la acción correctiva.

**Criterios de riesgo de IA** (*AI risk criteria*)
:   Las reglas con las que decides si un riesgo de IA es aceptable y qué tan prioritario es: escalas de consecuencia y probabilidad, umbrales y quién puede aceptar qué nivel. Ver [6.1.1](clausulas/c6-planificacion.md#c-6-1-1).

## D

**Dato personal** (*personal data*, PII)
:   Cualquier información que identifica a una persona física o permite identificarla: nombre, RFC, CURP, correo, voz, historial de compras. En las normas ISO se habla de PII (*personally identifiable information*).

**Dato personal sensible** (*sensitive personal data*)
:   Dato personal cuyo mal uso puede causar discriminación o un daño grave, como los de salud, origen étnico, creencias religiosas o preferencia sexual. En México, su tratamiento requiere consentimiento expreso y por escrito.[^lfpdppp]

**Datos de entrenamiento** (*training data*)
:   Los ejemplos con los que el modelo aprende. Si están sesgados, incompletos o desactualizados, el modelo hereda esos defectos. Ver [A.7](anexo-a/a7-datos.md).

**Datos de producción** (*production data*)
:   Los datos reales que el sistema recibe cuando ya está en operación. Compararlos con los de entrenamiento es la forma de detectar la deriva.

**Datos de prueba** (*test data*)
:   Datos que el modelo nunca vio durante el entrenamiento y que se reservan para medir, al final, qué tan bien funciona. Si se cuelan en el entrenamiento, los resultados salen engañosamente buenos.

**Datos de validación** (*validation data*)
:   Datos separados del entrenamiento que se usan durante el desarrollo para ajustar el modelo y elegir entre versiones. No son los de prueba, que se guardan para la evaluación final.

**Datos sintéticos** (*synthetic data*)
:   Datos generados de forma artificial que imitan las propiedades estadísticas de los reales. Ayudan a proteger la privacidad o a cubrir casos escasos, pero pueden heredar o amplificar los sesgos de quien los generó.

**Decisión automatizada** (*automated decision-making*)
:   Decisión sobre una persona que toma un sistema sin intervención humana significativa, como aprobar o rechazar un crédito en segundos. La LFPDPPP reconoce el derecho de oponerse a ciertos tratamientos automatizados con efectos significativos.[^lfpdppp]

**Declaración de Aplicabilidad** (*Statement of Applicability*, SoA)
:   Documento que enlista los controles necesarios para tratar tus riesgos de IA, indica si están implementados y explica por qué incluyes o excluyes cada control del Anexo A. Es de lo primero que revisa el auditor. Ver [6.1.3](clausulas/c6-planificacion.md#c-6-1-3) y la [plantilla](plantillas/index.md#declaracion-de-aplicabilidad).

**Derechos ARCO** (*ARCO rights*)
:   Derechos de Acceso, Rectificación, Cancelación y Oposición que tiene el titular sobre sus datos personales en México. El de oposición cobra especial relevancia frente a decisiones automatizadas. Ver [México y Latinoamérica](integracion/contexto-mexico-latam.md).

**Deriva de concepto** (*concept drift*)
:   Cambio en la relación entre los datos y lo que se quiere predecir: las mismas entradas ya no significan lo mismo. Tras una crisis económica, por ejemplo, un nivel de ingreso que antes indicaba buen pagador deja de hacerlo. Suele obligar a reentrenar o rediseñar.

**Deriva de datos** (*data drift*)
:   Cambio en el tipo de datos que recibe el sistema respecto de los que vio al entrenarse, como perfiles de clientes nuevos o formatos de factura distintos. Si no se monitorea, el desempeño se degrada en silencio. Ver [A.6.2.6](anexo-a/a6-ciclo-de-vida.md#a-6-2-6).

**Desempeño** (*performance*)
:   Resultado medible. Se usa en dos sentidos: el del SGIA (si logra sus objetivos) y el técnico de un modelo (exactitud, tasa de error, tiempo de respuesta). Ver [9.1](clausulas/c9-evaluacion-del-desempeno.md#c-9-1).

## E

**Eficacia** (*effectiveness*)
:   Qué tanto se logra lo que se planeó. Un control puede existir y estar documentado y aun así no ser eficaz; el auditor busca evidencia de resultados, no solo de existencia.

**EIPD** (*DPIA, data protection impact assessment*)
:   Evaluación de impacto en la protección de datos personales: análisis previo de los riesgos que un tratamiento implica para los titulares y de las medidas para reducirlos. Se complementa con la evaluación de impacto de IA, cuyo alcance va más allá de la privacidad. Ver [A.5](anexo-a/a5-evaluacion-de-impacto.md).

**Encargado** (*processor*)
:   Persona u organización que trata datos personales por cuenta del responsable y siguiendo sus instrucciones, como el proveedor de un chatbot que procesa las conversaciones de los clientes de un despacho. ISO/IEC 29100 usa el equivalente *PII processor*.

**Envenenamiento de datos** (*data poisoning*)
:   Ataque en el que alguien mete datos manipulados en el entrenamiento o en la base de conocimiento para que el sistema aprenda o responda mal, a veces solo ante ciertos disparadores. Se previene con control de procedencia y validación de datos. Ver [A.7.5](anexo-a/a7-datos.md#a-7-5).

**Equidad** (*fairness*)
:   Principio de que un sistema de IA no trate de forma injustificadamente distinta a personas o grupos. Se mide con métricas como la comparación de tasas de aprobación entre grupos, y su definición concreta depende del contexto. Ver [principios de IA responsable](fundamentos/principios-ia-responsable.md).

**Estructura armonizada** (*harmonized structure*)
:   Esqueleto común de cláusulas (4 a 10), términos y textos básicos que comparten las normas ISO de sistemas de gestión, como ISO/IEC 27001, ISO 9001 e ISO/IEC 42001. Facilita integrar varios sistemas en uno. Antes se conocía como estructura de alto nivel (*high-level structure*).

**Etapa 1** (*stage 1 audit*)
:   Primera parte de la auditoría de certificación inicial: el organismo revisa tu documentación, tu alcance y tu nivel de preparación para decidir si puedes pasar a la etapa 2.[^ciclo] Suele detectar huecos en el diseño del sistema. Ver [cómo se certifica](auditoria/como-se-certifica.md).

**Etapa 2** (*stage 2 audit*)
:   Segunda parte de la auditoría de certificación inicial, en la que el organismo verifica en la práctica, con entrevistas y evidencias, que el SGIA está implementado y es eficaz.[^ciclo] De su resultado depende la recomendación de certificar.

**Etiquetado de datos** (*data labeling*)
:   Asignar a cada dato la respuesta correcta o una categoría (fraude o no fraude, tipo de documento) para entrenar o evaluar modelos supervisados. Si lo hacen personas o terceros, conviene dar instrucciones claras, revisar la calidad y medir qué tanto coinciden los etiquetadores entre sí.

**Evaluación de impacto del sistema de IA** (*AI system impact assessment*)
:   Análisis de las consecuencias que un sistema de IA puede tener sobre personas, grupos y la sociedad, considerando su uso previsto y su posible mal uso. Mientras la evaluación de riesgos ordena todos los riesgos frente a tus objetivos y criterios, esta se concentra en quienes reciben los efectos del sistema, y sus resultados alimentan a aquella. Ver [6.1.4](clausulas/c6-planificacion.md#c-6-1-4), [A.5](anexo-a/a5-evaluacion-de-impacto.md) y [riesgo frente a impacto](fundamentos/riesgo-vs-impacto.md).

**Evaluación de la conformidad** (*conformity assessment*)
:   Cualquier actividad para demostrar que un producto, proceso, sistema o persona cumple requisitos establecidos: pruebas, inspecciones, auditorías, certificaciones. La certificación ISO/IEC 42001 evalúa el sistema de gestión, no cada sistema de IA como producto.

**Evaluación de riesgos de IA** (*AI risk assessment*)
:   Proceso para identificar, analizar y valorar los riesgos relacionados con la IA y decidir cuáles atender primero, con criterios que den resultados consistentes y comparables entre evaluaciones. Ver [6.1.2](clausulas/c6-planificacion.md#c-6-1-2) y la [plantilla](plantillas/index.md#evaluacion-de-riesgos).

**Evidencia de auditoría** (*audit evidence*)
:   Registros, declaraciones o hechos verificables que el auditor usa para concluir si se cumple un criterio: actas, bitácoras, tableros, entrevistas, observación directa. "Lo hacemos, pero no queda registro" suele equivaler a no poder demostrarlo.

**Explicabilidad** (*explainability*)
:   Capacidad de dar razones comprensibles de por qué un sistema de IA produjo un resultado concreto, adaptadas a quien las recibe: un cliente, un analista o un auditor. Ejemplo: los tres motivos principales de un rechazo de crédito, en lenguaje claro.

## F

**Fiabilidad** (*reliability*)
:   Capacidad de un sistema de comportarse de forma consistente y como se espera a lo largo del tiempo y en las condiciones previstas. Un sistema puede ser exacto en promedio y poco fiable si falla de manera impredecible.

**Ficha de datos** (*datasheet*, *data card*)
:   Documento breve que describe un conjunto de datos: origen, fecha, contenido, cómo se recolectó y etiquetó, limitaciones, sesgos conocidos y usos permitidos. Facilita demostrar la procedencia y evaluar la calidad. Ver [A.7](anexo-a/a7-datos.md).

**Ficha de modelo** (*model card*)
:   Documento breve que describe un modelo: para qué sirve y para qué no, con qué datos se entrenó, cómo se evaluó, cómo se desempeña en distintos grupos y qué limitaciones tiene. Es una forma práctica de documentación técnica. Ver la [ficha del sistema](plantillas/index.md#ficha-del-sistema).

**Filtros de seguridad** (*guardrails*)
:   Controles técnicos que rodean a un modelo generativo para bloquear entradas o salidas no deseadas: temas prohibidos, datos personales, lenguaje ofensivo, intentos de inyección de instrucciones. Reducen riesgos, pero no son infalibles.

**Fuente de riesgo** (*risk source*)
:   Elemento que, solo o combinado con otros, puede dar origen a un riesgo: el nivel de automatización, la calidad de los datos, la complejidad del entorno. El Anexo C propone varias para la IA. Ver [Anexos B, C y D](anexos-b-c-d.md#anexo-c).

## G

**Generación aumentada por recuperación** (*retrieval-augmented generation*, RAG)
:   Técnica en la que, antes de responder, el sistema busca información relevante en documentos propios y se la entrega al modelo de lenguaje para que base su respuesta en ella. Reduce alucinaciones y permite citar fuentes, pero trae riesgos nuevos: documentos desactualizados, mezcla de información entre clientes o instrucciones ocultas.

**Gobernanza de la IA** (*AI governance*)
:   Las estructuras, reglas y decisiones con las que el órgano de gobierno y la dirección orientan y vigilan el uso de la IA en la organización. El SGIA es una forma de volverla operativa y verificable; ISO/IEC 38507 orienta al órgano de gobierno.

**Guía de implementación** (*implementation guidance*)
:   Orientación sobre cómo poner en práctica un control. En ISO/IEC 42001 está en el Anexo B, marcado como normativo, pero sin obligación de justificar cada recomendación. Ver [Anexos B, C y D](anexos-b-c-d.md#naturaleza-anexo-b).

## H

**Hallazgo de auditoría** (*audit finding*)
:   Resultado de comparar la evidencia con los criterios de auditoría. Puede ser una conformidad, una no conformidad, una observación o una oportunidad de mejora. Ver [hallazgos de ejemplo](auditoria/hallazgos-ejemplo.md).

**Humano en el circuito** (*human-in-the-loop*)
:   Diseño en el que una persona revisa o aprueba cada resultado antes de que tenga efecto, como la banda gris de un modelo de scoring. Se distingue del humano sobre el circuito (*human-on-the-loop*), que vigila y puede intervenir, y de la operación sin intervención humana.

## I

**IA en la sombra** (*shadow AI*)
:   Uso de herramientas de IA sin autorización ni conocimiento de la organización, como pegar una nómina en un chatbot gratuito. Es de los riesgos más comunes en organizaciones que solo usan IA de terceros. Ver [A.9.2](anexo-a/a9-uso.md#a-9-2) y la [política de uso aceptable](plantillas/index.md#uso-aceptable-ia-generativa).

**IA generativa** (*generative AI*)
:   IA capaz de crear contenido nuevo (texto, imágenes, audio, video o código) a partir de instrucciones. Los asistentes conversacionales y los generadores de imágenes son los ejemplos más conocidos.

**Impacto** (*impact*)
:   Efecto, positivo o negativo, que un sistema de IA tiene sobre personas, grupos o la sociedad. En ISO/IEC 42001 se analiza en una evaluación propia, separada de la evaluación de riesgos. Ver [riesgo frente a impacto](fundamentos/riesgo-vs-impacto.md).

**Inferencia** (*inference*)
:   El momento en que un modelo ya entrenado se usa para producir un resultado con datos nuevos: calificar una solicitud, responder una pregunta. Es la fase de uso, distinta del entrenamiento.

**Información documentada** (*documented information*)
:   Toda información que la organización debe controlar y mantener, en el medio que sea: políticas y procedimientos (lo que se mantiene al día) y registros o evidencias (lo que se conserva). Ver [7.5](clausulas/c7-apoyo.md#c-7-5).

**Instrucción** (*prompt*)
:   Texto u otra entrada que se le da a un modelo generativo para pedirle algo; puede incluir instrucciones de sistema que el usuario no ve. Lo que se escribe en una instrucción puede salir de la organización, por eso las políticas de uso aceptable dicen qué datos nunca se incluyen.

**Inteligencia artificial** (*artificial intelligence*)
:   Campo de la tecnología que busca que las máquinas hagan tareas que asociamos con la inteligencia humana, como reconocer patrones, predecir, conversar o decidir. En el habla diaria, el término también se usa para los sistemas que salen de ese campo.

**Interpretabilidad** (*interpretability*)
:   Qué tanto puede una persona entender cómo funciona un modelo por dentro: qué variables pesan y cómo se combinan. Un árbol de decisión pequeño es muy interpretable; una red neuronal profunda, poco. Se relaciona con la explicabilidad, pero no es lo mismo.

**Inventario de sistemas de IA** (*AI system inventory*)
:   Lista viva de los sistemas de IA que la organización usa, desarrolla o provee, con su propósito, dueño, rol, proveedor, datos y nivel de riesgo. Es el punto de partida práctico del SGIA. Ver la [plantilla](plantillas/index.md#inventario-sistemas-ia).

**Inversión de modelo** (*model inversion*)
:   Ataque que, a partir de las respuestas de un modelo, intenta reconstruir datos con los que se entrenó, por ejemplo rasgos de personas reales. Es una amenaza de privacidad propia de la IA.

**Inyección de instrucciones** (*prompt injection*)
:   Ataque en el que se cuelan órdenes maliciosas en lo que lee un modelo de lenguaje (un mensaje, un documento, una página web) para que ignore sus reglas, revele información o haga algo no autorizado. Es uno de los riesgos principales de los asistentes con RAG y de los agentes.

**ISO/IEC 22989** (*AI concepts and terminology*)
:   Norma de conceptos y terminología de IA, publicada en 2022.[^normas] ISO/IEC 42001 la cita como referencia normativa, así que sus términos sirven para interpretar la 42001. Ver [familia de normas](fundamentos/familia-de-normas.md).

**ISO/IEC 23894** (*guidance on AI risk management*)
:   Guía de gestión de riesgos de IA que adapta el enfoque de ISO 31000, publicada en 2023.[^normas] No es certificable; ayuda a diseñar la metodología de riesgos del SGIA.

**ISO/IEC 42005** (*AI system impact assessment*)
:   Guía para hacer evaluaciones de impacto de sistemas de IA, publicada en 2025.[^normas] Complementa la cláusula 6.1.4 y el tema A.5; no es certificable.

**ISO/IEC 42006** (*requirements for AIMS certification bodies*)
:   Norma con requisitos adicionales para los organismos que auditan y certifican sistemas de gestión de IA, publicada en 2025.[^normas] Complementa a ISO/IEC 17021-1 y regula, entre otras cosas, la competencia de los auditores y el tiempo de auditoría.

## L

**LFPDPPP** (*Mexican federal private-sector data protection law*)
:   Ley Federal de Protección de Datos Personales en Posesión de los Particulares, que regula en México el tratamiento de datos personales por empresas y particulares. La ley vigente se publicó en el DOF el 20 de marzo de 2025 y sustituyó a la de 2010.[^lfpdppp] Ver [México y Latinoamérica](integracion/contexto-mexico-latam.md).

**Linaje de datos** (*data lineage*)
:   El rastro de por dónde ha pasado un dato: de qué fuente vino, qué transformaciones sufrió y en qué modelos o reportes terminó. Permite reproducir resultados y encontrar el origen de un error.

**Lista de materiales de IA** (*AI bill of materials*, AI-BOM)
:   Inventario de los componentes de un sistema de IA: modelos y sus versiones, conjuntos de datos, bibliotecas, servicios de terceros y sus licencias. Es la versión para IA de la lista de materiales de software (SBOM) y ayuda a gestionar la cadena de suministro. Ver [A.4.2](anexo-a/a4-recursos.md#a-4-2).

## M

**Mantenibilidad** (*maintainability*)
:   Facilidad con la que se puede corregir, actualizar o adaptar un sistema de IA sin romper lo que ya funciona. El Anexo C la propone como posible objetivo de IA.

**Mejora continua** (*continual improvement*)
:   Esfuerzo recurrente para que el SGIA sea cada vez más adecuado y eficaz. No exige mejorarlo todo a la vez, sino mostrar que el sistema aprende de auditorías, incidentes y mediciones. Ver [10.1](clausulas/c10-mejora.md#c-10-1).

**MLOps** (*machine learning operations*)
:   Prácticas y herramientas para llevar modelos de aprendizaje automático a producción y mantenerlos de forma repetible: versiones de datos y modelos, pruebas automáticas, despliegue controlado y monitoreo. Es el equivalente de DevOps para modelos y facilita mucho la evidencia del tema A.6.

**Modelo** (*model*)
:   Representación matemática que produce resultados a partir de datos de entrada, normalmente obtenida mediante entrenamiento. Es una pieza del sistema de IA, no el sistema completo, que también incluye datos, interfaces, reglas y personas.

**Modelo de IA de uso general** (*general-purpose AI model*)
:   Término del Reglamento de IA de la UE para modelos entrenados con grandes volúmenes de datos, capaces de hacer tareas muy variadas y de integrarse en muchos sistemas distintos, como los grandes modelos de lenguaje. Sus proveedores tienen obligaciones propias en ese reglamento.

**Modelo de lenguaje de gran tamaño** (*large language model*, LLM)
:   Modelo entrenado con enormes cantidades de texto para predecir y generar lenguaje. Es el motor de los asistentes conversacionales: muy versátil, pero propenso a alucinar y sensible a la inyección de instrucciones.

**Modelo fundacional** (*foundation model*)
:   Modelo grande entrenado de forma general que sirve de base para muchas aplicaciones, que lo adaptan con ajuste fino, instrucciones o RAG. Quien construye encima depende de decisiones de diseño y de datos que no controla.

## N

**NIST AI RMF** (*NIST AI Risk Management Framework*)
:   Marco voluntario del NIST de Estados Unidos para gestionar riesgos de IA, organizado en cuatro funciones: gobernar, mapear, medir y gestionar. La versión vigente es la 1.0, publicada el 26 de enero de 2023, y el NIST indica que está en revisión.[^nist] Ver [NIST AI RMF](integracion/nist-ai-rmf.md).

**No conformidad** (*nonconformity*)
:   Incumplimiento de un requisito, sea de la norma, de la ley, de un contrato o de tus propios procedimientos. Pide corrección, análisis de causa y, si procede, acción correctiva. Ver [10.2](clausulas/c10-mejora.md#c-10-2).

**No conformidad mayor** (*major nonconformity*)
:   En una auditoría de certificación, la que pone en duda que el sistema logre sus resultados: un requisito ausente por completo o una falla sistemática. Por lo general impide certificar hasta que se corrige y se verifica; los criterios exactos dependen del organismo.

**No conformidad menor** (*minor nonconformity*)
:   Incumplimiento aislado que no compromete el sistema en su conjunto, como un registro faltante. Requiere un plan de acción que el organismo revisa, pero normalmente no impide la certificación.

**Norma armonizada** (*harmonised standard*)
:   En la Unión Europea, norma europea elaborada a petición de la Comisión cuya referencia se publica en el Diario Oficial y que da presunción de conformidad con ciertos requisitos legales. ISO/IEC 42001 no es norma armonizada del Reglamento de IA y, por sí sola, no da esa presunción.[^armonizada]

**Normativo e informativo** (*normative and informative*)
:   Etiquetas de los anexos de una norma ISO. Un anexo normativo forma parte de lo que se necesita para aplicar la norma; uno informativo solo aporta contexto o ejemplos. En ISO/IEC 42001, los Anexos A y B son normativos, y el C y el D, informativos. Ver [Anexos B, C y D](anexos-b-c-d.md).

## O

**Objetivo** (*objective*)
:   Resultado que se quiere alcanzar. En un sistema de gestión hay objetivos en distintos niveles (del sistema, de un proceso, de un producto) y conviene que sean medibles y tengan dueño.

**Objetivo de control** (*control objective*)
:   Enunciado de lo que se quiere lograr con un grupo de controles. En el Anexo A, cada tema (de A.2 a A.10) tiene uno, y sus controles son los medios para alcanzarlo.

**Objetivo de IA** (*AI objective*)
:   Resultado que la organización se compromete a lograr con su SGIA o con sus sistemas de IA, idealmente medible: "100 % de las conversaciones inician con aviso de IA". Debe ser coherente con la política y tener responsable, plazo y forma de evaluarlo. Ver [6.2](clausulas/c6-planificacion.md#c-6-2).

**Observación** (*observation*)
:   Comentario del auditor sobre una situación que aún no es incumplimiento pero podría llegar a serlo si no se atiende. No exige acción formal, aunque ignorarla suele convertirla en no conformidad en la siguiente visita. El nombre y el uso varían entre organismos.

**Oportunidad de mejora** (*opportunity for improvement*)
:   Sugerencia del auditor para hacer algo mejor sin que exista incumplimiento. Alimenta la mejora continua, pero no es obligatoria.

**Organismo de acreditación** (*accreditation body*)
:   Entidad, por lo general una por país, que evalúa y acredita a los organismos de certificación. En México es la entidad mexicana de acreditación (ema), cuyo buscador mostraba, al 9 de octubre de 2026, organismos acreditados para ISO/IEC 42001.[^ema] Desde el 1 de enero de 2026, los acuerdos internacionales de reconocimiento entre acreditadores, que antes administraban IAF e ILAC, los administra Global ACI.[^aci]

**Organismo de certificación** (*certification body*)
:   Empresa u organización independiente que audita tu SGIA y, si cumple, emite el certificado. Conviene que esté acreditado para ISO/IEC 42001. Ver [cómo se certifica](auditoria/como-se-certifica.md).

**Órgano de gobierno** (*governing body*)
:   La instancia que está por encima de la dirección y ante la cual esta responde, como el consejo de administración o la asamblea de socios. Fija el rumbo y vigila que la dirección lo siga. Ver [5.1](clausulas/c5-liderazgo.md#c-5-1).

## P

**Parte interesada** (*interested party*)
:   Quien tiene algo en juego con tus sistemas de IA o con tu SGIA, ya sea porque influye en ellos o porque recibe sus efectos: clientes, empleados, reguladores, proveedores, sujetos de IA, la comunidad. Ver [4.2](clausulas/c4-contexto.md#c-4-2).

**Plan de tratamiento de riesgos** (*risk treatment plan*)
:   Documento que dice qué se hará con cada riesgo que requiere tratamiento: qué controles, quién, con qué recursos y para cuándo. La dirección designada lo aprueba junto con los riesgos residuales. Ver [6.1.3](clausulas/c6-planificacion.md#c-6-1-3).

**Política** (*policy*)
:   Documento breve con el que la dirección dice hacia dónde va la organización en un tema y qué reglas de fondo aplican. A diferencia de un procedimiento, no explica paso a paso cómo hacer las cosas.

**Política de IA** (*AI policy*)
:   La política con la que la alta dirección fija la postura de la organización frente a la IA: principios, compromisos, qué se permite y qué no, y quién decide. Es el marco para los objetivos de IA. Ver [5.2](clausulas/c5-liderazgo.md#c-5-2), [A.2](anexo-a/a2-politicas.md) y la [plantilla](plantillas/index.md#politica-de-ia).

**Práctica prohibida** (*prohibited AI practice*)
:   En el Reglamento de IA de la UE, uso de la IA considerado inaceptable, como la manipulación que causa daños significativos o la puntuación social. Las prohibiciones aplican desde el 2 de febrero de 2025, y el Ómnibus añadió otras que aplican desde el 2 de diciembre de 2026.[^ue]

**Procedencia de los datos** (*data provenance*)
:   Información sobre el origen de los datos y su historia: quién los creó, cuándo, cómo se obtuvieron y qué cambios han tenido. Permite confiar en ellos, cumplir obligaciones legales y detectar manipulaciones. Ver [A.7.5](anexo-a/a7-datos.md#a-7-5).

**Productor de IA** (*AI producer*)
:   Organización o persona que diseña, desarrolla, prueba o despliega sistemas o modelos de IA. Monarca Crédito es productor de su Score Monarca v3. Ver [roles en la IA](fundamentos/roles-en-la-ia.md#rol-productor).

**Prompt** (*prompt*)
:   Ver [Instrucción](#i).

**Proveedor de IA** (*AI provider*)
:   Organización que ofrece a otros productos o servicios basados en IA, como una plataforma de asistentes virtuales; Conversa Labs es proveedor de IA para sus clientes. Ojo: el Reglamento de IA de la UE también usa "proveedor", con un significado legal más preciso. Ver [roles en la IA](fundamentos/roles-en-la-ia.md#rol-proveedor).

**Pruebas de equipo rojo** (*red teaming*)
:   Ejercicio en el que un equipo intenta, de forma deliberada y autorizada, hacer fallar un sistema de IA: provocar respuestas dañinas, extraer datos o saltarse los filtros. Revela debilidades que las pruebas normales no encuentran. Ver [A.6.2.4](anexo-a/a6-ciclo-de-vida.md#a-6-2-4).

## R

**Recertificación** (*recertification*)
:   Auditoría completa que se hace antes de que termine el ciclo de certificación, normalmente al tercer año, para renovar el certificado.[^ciclo]

**Red neuronal** (*neural network*)
:   Tipo de modelo formado por capas de pequeñas unidades de cálculo conectadas entre sí, inspirado muy libremente en el cerebro, que ajusta sus conexiones durante el entrenamiento. Con muchas capas da lugar al aprendizaje profundo.

**Red teaming** (*red teaming*)
:   Ver [Pruebas de equipo rojo](#p).

**Registro de eventos** (*event logging*)
:   Grabación automática de lo que ocurre en un sistema de IA: entradas, salidas, versiones, errores e intervenciones humanas. Sirve para investigar incidentes, demostrar que se usa como se previó y detectar deriva. Ver [A.6.2.8](anexo-a/a6-ciclo-de-vida.md#a-6-2-8).

**Reglamento de IA de la UE** (*EU AI Act*)
:   El Reglamento (UE) 2024/1689, primera ley integral de IA de la Unión Europea, con un enfoque por niveles de riesgo y obligaciones para proveedores, responsables del despliegue y otros operadores. Entró en vigor el 1 de agosto de 2024, se aplica de forma escalonada y en 2026 lo modificó el Reglamento (UE) 2026/1744, conocido como Ómnibus.[^ue] Puede alcanzar a empresas latinoamericanas cuyos sistemas o resultados se usen en la UE. Ver [Reglamento de IA de la UE](integracion/reglamento-ia-ue.md).

**Rendición de cuentas** (*accountability*)
:   Que siempre haya alguien identificable que responda por las decisiones y los efectos de un sistema de IA, aunque los produzca una máquina. Se apoya en roles claros, registros y supervisión.

**Responsable** (*controller*)
:   En protección de datos, quien decide sobre el tratamiento de los datos personales: para qué y cómo se usan. Responde ante los titulares y la autoridad aunque contrate a un encargado. ISO/IEC 29100 usa el equivalente *PII controller*.

**Responsable del despliegue** (*deployer*)
:   Término de la versión en español del Reglamento de IA de la UE para quien usa un sistema de IA bajo su propia autoridad en una actividad profesional, como un banco que usa un sistema de scoring de un tercero. Se parece al cliente o usuario de IA de ISO/IEC 22989, aunque sus obligaciones son legales. Ver [roles en la IA](fundamentos/roles-en-la-ia.md#reglamento-ue).

**Retiro del sistema de IA** (*decommissioning*)
:   Última etapa del ciclo de vida: dejar de usar un sistema de forma controlada, decidir qué pasa con sus datos, modelos y registros, avisar a los usuarios y sustituirlo si hace falta. Un retiro mal hecho deja datos expuestos o procesos sin respaldo.

**Revisión por la dirección** (*management review*)
:   Reunión periódica en la que la alta dirección revisa, con datos, si el SGIA sigue siendo adecuado y eficaz, y decide mejoras y cambios. Ver [9.3](clausulas/c9-evaluacion-del-desempeno.md#c-9-3).

**Riesgo** (*risk*)
:   La posibilidad de que algo incierto afecte lo que quieres lograr, para mal o, a veces, para bien. En la práctica se describe con una causa, un evento y sus consecuencias, y se valora por su probabilidad y su gravedad. En ISO/IEC 42001, las consecuencias incluyen a las personas y a la sociedad, no solo a la organización.

**Riesgo residual** (*residual risk*)
:   El riesgo que queda después de aplicar los controles. Nunca es cero; lo importante es que alguien con autoridad lo acepte de forma consciente y documentada.

**Robo de modelo** (*model stealing*, *model extraction*)
:   Ataque que busca copiar un modelo o sus capacidades, por ejemplo haciéndole miles de consultas para entrenar un imitador, o sustrayendo sus archivos. Afecta la propiedad intelectual y puede facilitar otros ataques.

**Robustez** (*robustness*)
:   Capacidad de un sistema de IA de mantener un desempeño aceptable ante datos o condiciones distintos de los esperados, incluidos errores y manipulaciones. Ejemplo: seguir leyendo bien facturas fotografiadas con poca luz.

## S

**Seguridad de la información** (*security*)
:   Protección de la información y de los sistemas frente a accesos, usos, cambios o interrupciones no autorizados, accidentales o maliciosos. En IA incluye amenazas propias, como el envenenamiento de datos o la inyección de instrucciones. Aquí el foco son los ataques que el sistema puede sufrir; compárala con *safety*.

**Seguridad física o protección** (*safety*)
:   Que un sistema no cause daño a la vida, la salud, los bienes o el entorno, incluso cuando falla. En español ambas ideas se dicen "seguridad": *safety* mira el daño que el sistema puede causar y *security*, los ataques que puede sufrir. Un vehículo autónomo necesita las dos.

**Sesgo** (*bias*)
:   Tendencia de un sistema a favorecer o perjudicar de manera repetida a ciertas personas o grupos frente a otros. No todo sesgo es indeseable, pero el no deseado produce resultados injustos; puede venir de los datos, del diseño, de las etiquetas o de la forma de uso. Ver [principios de IA responsable](fundamentos/principios-ia-responsable.md).

**Sesgo de automatización** (*automation bias*)
:   Tendencia de las personas a confiar de más en lo que dice un sistema automatizado y a dejar de cuestionarlo, aun ante señales de error. Puede vaciar de sentido la supervisión humana si el revisor solo firma lo que propone el modelo.

**SGIA** (*AI management system*, AIMS)
:   Sistema de gestión de inteligencia artificial: el conjunto de políticas, procesos, roles y controles con el que una organización gobierna la IA que usa, desarrolla o provee, y lo mejora con el tiempo. Es lo que certifica ISO/IEC 42001. Ver [¿Qué es un SGIA?](fundamentos/que-es-un-sgia.md).

**Sistema de gestión** (*management system*)
:   Forma organizada de dirigir un tema (calidad, seguridad, IA) mediante políticas, objetivos, procesos, responsabilidades y revisión periódica. No es un software ni un manual: es la manera en que la organización decide, hace, verifica y corrige.

**Sistema de IA** (*AI system*)
:   Producto o servicio tecnológico que usa uno o más modelos de IA para hacer un trabajo concreto: calificar solicitudes, contestar preguntas, leer facturas. Además del modelo, abarca los datos que lo alimentan, las interfaces, las reglas de negocio y las integraciones. Es la unidad que inventarías, evalúas y controlas en el SGIA.

**Socio de IA** (*AI partner*)
:   Organización que presta servicios en el ecosistema de la IA sin ser el proveedor principal ni el cliente, como un integrador de sistemas, un proveedor de datos o un evaluador. Ver [roles en la IA](fundamentos/roles-en-la-ia.md#rol-socio).

**Sujeto de IA** (*AI subject*)
:   Persona afectada por un sistema de IA aunque no lo use directamente, como el solicitante de crédito calificado por un modelo o la persona cuyos datos se usaron para entrenarlo. Ver [roles en la IA](fundamentos/roles-en-la-ia.md#rol-sujeto).

**Supervisión humana** (*human oversight*)
:   Mecanismos para que personas competentes vigilen un sistema de IA, entiendan sus resultados e intervengan: aprobar, corregir, anular o detener. Para que funcione, la persona necesita tiempo, información y autoridad reales. Ver [A.9.3](anexo-a/a9-uso.md#a-9-3).

## T

**Titular** (*data subject*)
:   La persona física a quien corresponden los datos personales; en México es quien ejerce los derechos ARCO. ISO/IEC 29100 la llama *PII principal*.

**Toma de conciencia** (*awareness*)
:   Que cada persona sepa por qué importa su papel en el SGIA, qué dice la política de IA y qué consecuencias tiene desviarse. Va más allá de asistir a una plática: se nota en las conductas. Ver [7.3](clausulas/c7-apoyo.md#c-7-3).

**Transparencia** (*transparency*)
:   Dar a cada parte interesada información adecuada sobre un sistema de IA: que existe, para qué sirve, cómo se usa, qué limitaciones tiene y cómo se gobierna. No implica revelar secretos comerciales, sino lo necesario para entender y confiar. Ver [A.8](anexo-a/a8-informacion-partes-interesadas.md).

**Tratamiento de datos personales** (*processing of personal data*)
:   Cualquier operación con datos personales, manual o automatizada: obtenerlos, usarlos, guardarlos, compartirlos o borrarlos. Entrenar un modelo con datos de clientes es un tratamiento.

**Tratamiento del riesgo** (*risk treatment*)
:   Decidir y aplicar qué hacer con un riesgo: evitarlo, reducirlo, compartirlo o retenerlo. En ISO/IEC 42001 incluye comparar tus controles con el Anexo A y elaborar la Declaración de Aplicabilidad. Ver [6.1.3](clausulas/c6-planificacion.md#c-6-1-3).

## U

**Uso indebido previsible** (*reasonably foreseeable misuse*)
:   Usos que quien diseñó el sistema no pretendía, pero que es razonable anticipar por la conducta humana o el contexto, como pedirle a un chatbot de preguntas frecuentes una opinión fiscal personalizada. Se considera en la evaluación de impacto. Ver [6.1.4](clausulas/c6-planificacion.md#c-6-1-4).

**Uso previsto** (*intended use*)
:   El propósito para el que se diseñó y se ofrece un sistema de IA, con sus condiciones y límites. Usarlo fuera de ahí obliga a reevaluar riesgos e impactos. Ver [A.9.4](anexo-a/a9-uso.md#a-9-4).

**Usuario de IA** (*AI user*)
:   Organización o persona que utiliza un sistema de IA; en el vocabulario de roles es una forma de cliente de IA. No lo confundas con la persona que conversa con un chatbot, que puede ser además sujeto de IA. Ver [roles en la IA](fundamentos/roles-en-la-ia.md#rol-cliente).

## V

**Variable sustituta** (*proxy variable*)
:   Dato aparentemente neutral que funciona como sustituto de una característica protegida, como el código postal en lugar del nivel socioeconómico o del origen. Quitar la variable sensible no elimina el sesgo si la sustituta sigue en el modelo.

**Verificación y validación** (*verification and validation*)
:   Verificar es comprobar que el sistema cumple sus especificaciones ("¿lo construimos bien?"); validar es comprobar que sirve para su propósito real ("¿construimos lo correcto?"). Ver [A.6.2.4](anexo-a/a6-ciclo-de-vida.md#a-6-2-4).

**Vulneración de seguridad de datos personales** (*personal data breach*)
:   Pérdida, robo, acceso o uso no autorizado de datos personales. En México, si afecta de forma significativa los derechos de los titulares, la LFPDPPP pide avisarles de inmediato.[^lfpdppp] Ver [A.8.4](anexo-a/a8-informacion-partes-interesadas.md#a-8-4) y el [registro de incidentes](plantillas/index.md#registro-de-incidentes).

[^ue]: Reglamento (UE) 2024/1689, [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/spa); Reglamento (UE) 2026/1744 (Ómnibus Digital sobre IA), publicado el 24 de julio de 2026, [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng); calendario descrito por la Comisión Europea en [su página del marco regulatorio](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai). Consultado el 2026-10-09.
[^lfpdppp]: Ley Federal de Protección de Datos Personales en Posesión de los Particulares, DOF del 20 de marzo de 2025, arts. 8, 19 y 26. [Texto vigente en la Cámara de Diputados](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf). Consultado el 2026-10-09.
[^ciclo]: El esquema de etapa 1, etapa 2, seguimiento anual y recertificación en un ciclo de tres años proviene de ISO/IEC 17021-1, tal como lo describen las [preguntas frecuentes de IAF](https://iaffaq.com/files/the-first-surveillan_0zydrd5kt0fbmhentfrcxb/) y [organismos de certificación](https://certification.bureauveritas.com/certification-process). ISO/IEC 17021-1 está en revisión sistemática. Consultado el 2026-10-09.
[^normas]: Fichas del catálogo de ISO: [ISO/IEC 22989](https://www.iso.org/standard/74296.html) (publicada el 2022-07-19), [ISO/IEC 23894](https://www.iso.org/standard/77304.html) (2023-02-06), [ISO/IEC 42005](https://www.iso.org/standard/44545.html) (2025-05-28) e [ISO/IEC 42006](https://www.iso.org/standard/44546.html) (2025-07-07), consultadas en el espejo oficial committee.iso.org. Consultado el 2026-10-09.
[^nist]: NIST, [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework). Consultado el 2026-10-09.
[^armonizada]: Art. 40 del Reglamento (UE) 2024/1689 ([EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/spa)) y [página de normalización del Reglamento de IA de la Comisión Europea](https://digital-strategy.ec.europa.eu/en/policies/ai-act-standardisation), que no menciona a ISO/IEC 42001. Consultado el 2026-10-09.
[^ema]: [Buscador público SAEMA de la ema](https://ema.mx/saema/ConsultaPublica/Acreditados/Busqueda/OCS), organismos de certificación de sistemas, programa ISO/IEC 42001:2023. Consultado el 2026-10-09.
[^aci]: [Comunicado de ILAC sobre Global Accreditation Cooperation Incorporated](https://ilac.org/wp-content/uploads/Press-Release-Global.pdf). Consultado el 2026-10-09.

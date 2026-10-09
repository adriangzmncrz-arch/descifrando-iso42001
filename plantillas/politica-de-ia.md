# Política de inteligencia artificial

| Control del documento | |
|---|---|
| Código | [SGIA-POL-01] |
| Versión | [1.0] |
| Fecha de aprobación | [FECHA] |
| Elaboró | [NOMBRE] · [PUESTO] |
| Revisó | [NOMBRE] · [PUESTO] |
| Aprobó | [NOMBRE] · [PUESTO DE LA ALTA DIRECCIÓN] |
| Clasificación | [PÚBLICA / USO INTERNO] |

Plantilla de *Descifrando ISO 42001* (CC BY-SA 4.0) — adáptala a tu organización; no sustituye a la norma ni es asesoría legal.

> **Instrucciones de uso (borra este bloque antes de aprobar el documento).**
>
> - **Qué cubre:** la cláusula 5.2 de ISO/IEC 42001 y los controles A.2.2 Política de IA, A.2.3 Alineación con otras políticas de la organización y A.2.4 Revisión de la política de IA. También da soporte a 5.1, 5.3, 6.2, 7.3, 7.4, A.3.2 y A.3.3. Los nombres de los controles son traducción libre de referencia, no el texto oficial de la norma.
> - **Qué personalizar:** todo lo que aparece entre corchetes y en MAYÚSCULAS; el alcance (sección 2); las reglas por tipo de actividad (sección 6), conservando solo las que correspondan a tus roles; la lista de usos prohibidos y restringidos (sección 7) según tu sector y los países donde operas; la tabla de políticas relacionadas (sección 12) y los plazos de revisión.
> - **Qué borrar:** este bloque; los ejemplos en cursiva; las secciones 6.3 y 6.4 si no desarrollas IA ni la provees a clientes.
> - **Consejo:** la política es un documento de dirección, no un manual de operación. Te recomendamos que no pase de seis páginas y que los detalles vivan en los procedimientos a los que remite (riesgos, impacto, ciclo de vida, incidentes). Decide desde ahora qué versión compartirás con partes externas: la completa o un resumen.
> - **Coherencia:** si usas las demás plantillas de la guía, los códigos de documento citados aquí ya coinciden con ellas. Si cambias un código, cámbialo en todos los documentos.

## 1. Propósito

[NOMBRE DE LA ORGANIZACIÓN] (en adelante, "la organización") reconoce que la inteligencia artificial (IA) le permite ofrecer mejores servicios, trabajar con mayor eficiencia y tomar decisiones mejor informadas, y que, al mismo tiempo, puede producir errores, trato injusto, afectaciones a la privacidad o efectos no deseados en personas y en la sociedad.

Esta política establece la postura de la alta dirección frente a la IA: los principios que guían cada decisión, las reglas que aplican según la forma en que la organización se relaciona con cada sistema y los compromisos que asume la dirección. Es también el marco del que se derivan los objetivos de IA y el punto de partida del sistema de gestión de IA (SGIA) de la organización.

## 2. Alcance

Esta política aplica a:

- **Sistemas:** todos los sistemas de IA que la organización usa, desarrolla, adapta, integra o provee a terceros, incluidos los servicios en la nube, los modelos de lenguaje, los asistentes de IA generativa y las funciones de IA incluidas dentro de otros productos de software. El inventario de sistemas de IA vigente (`inventario-sistemas-ia.xlsx`) identifica los sistemas concretos.
- **Personas:** todo el personal, incluidos directivos, practicantes, personal temporal y contratistas que trabajen bajo el control de la organización.
- **Ubicaciones y procesos:** [SEDES, PAÍSES Y PROCESOS DENTRO DEL ALCANCE DEL SGIA].
- **Roles de la organización frente a la IA** (marca los que correspondan):
    - [ ] Usa sistemas de IA de terceros (cliente o usuario de IA).
    - [ ] Desarrolla o adapta sistemas de IA (productor de IA).
    - [ ] Provee sistemas o servicios de IA a clientes (proveedor de IA).
    - [ ] Aporta datos o integra sistemas de IA para otros (socio de IA).

*Ejemplo (Contadores Alameda): "Uso de sistemas de IA de terceros en la prestación de servicios contables, de nómina y de atención a clientes desde la oficina de Querétaro". El despacho marca solo el primer rol, aunque despliega frente a sus clientes un chatbot que contrata a un proveedor.*

## 3. Definiciones

- **Sistema de IA:** sistema que, a partir de datos o instrucciones, genera resultados como predicciones, recomendaciones, clasificaciones, decisiones o contenido, con cierto grado de autonomía.
- **IA generativa:** tipo de IA que produce texto, imágenes, audio, código u otro contenido nuevo a partir de una instrucción (*prompt*).
- **Dueño del sistema de IA:** persona que rinde cuentas por un sistema de IA durante su ciclo de vida, desde su aprobación hasta su retiro.
- **Uso previsto:** propósito y condiciones para los que un sistema de IA fue aprobado, tal como constan en su ficha y en el inventario.
- **Supervisión humana:** capacidad de una persona competente para entender, vigilar, corregir, anular o detener los resultados de un sistema de IA.
- **Evaluación de impacto del sistema de IA** (*AI system impact assessment*): análisis de las consecuencias que un sistema puede tener en personas, grupos y en la sociedad.
- **Comité de IA:** órgano designado por la alta dirección para aprobar casos de uso, liberaciones, excepciones y aceptaciones de riesgo según los criterios vigentes. [AJUSTA EL NOMBRE: COMITÉ DE MODELOS, COMITÉ DE ÉTICA, COMITÉ DE RIESGOS].

## 4. Compromisos de la alta dirección

La alta dirección de [NOMBRE DE LA ORGANIZACIÓN] se compromete a:

1. **Cumplir los requisitos aplicables** a la IA: leyes y regulaciones de los países donde opera (protección de datos personales, protección al consumidor, materia laboral, regulación sectorial y, cuando corresponda, regulación específica de IA), obligaciones contractuales con clientes y proveedores, compromisos voluntarios que la organización suscriba y los requisitos de su SGIA.
2. **Mejorar de forma continua** el SGIA y la manera en que se diseñan, adquieren, operan y retiran los sistemas de IA, a partir de los resultados de auditorías, incidentes, mediciones y retroalimentación de partes interesadas.
3. **Fijar objetivos de IA medibles** y coherentes con esta política, revisarlos al menos una vez al año y asignarles responsables, recursos y plazos. Los objetivos se documentan en [NOMBRE O CÓDIGO DEL PLAN DE OBJETIVOS DE IA].
4. **Proveer los recursos necesarios**: personas competentes, presupuesto, herramientas y tiempo para operar los controles de IA.
5. **Rendir cuentas**: ninguna decisión tomada con apoyo de un sistema de IA deja de ser responsabilidad de la organización, aunque el sistema sea de un tercero.

*Ejemplo de objetivo derivado de esta política (Monarca Crédito): "Mantener la diferencia en tasas de aprobación entre mujeres y hombres con perfil de riesgo equivalente por debajo de 3 puntos porcentuales, medida cada mes".*

## 5. Principios de IA responsable

Los siguientes principios orientan todas las decisiones sobre IA. Cuando dos principios entren en tensión (por ejemplo, explicabilidad frente a desempeño), el dueño del sistema documentará la decisión tomada y la escalará al Comité de IA si afecta a personas.

| Principio | Qué significa para la organización | Cómo se demuestra |
|---|---|---|
| **Equidad** | Los sistemas no deben producir trato injustificadamente distinto a personas o grupos por características como sexo, edad, origen, discapacidad o lugar de residencia, ni por variables que funcionen como sustitutas de ellas. | Pruebas de sesgo antes de liberar y de forma periódica; métricas por segmento en la ficha del sistema. |
| **Transparencia** | Las personas saben cuándo interactúan con un sistema de IA o cuándo un resultado que las afecta fue generado o apoyado por IA, y para qué se usa. | Avisos de interacción con IA; aviso de privacidad actualizado; información para usuarios. |
| **Explicabilidad** | Quien recibe una decisión relevante puede obtener una explicación comprensible de los factores principales que la produjeron. | Motivos en lenguaje claro; documentación técnica proporcional al público. |
| **Privacidad** | Los datos personales se tratan solo para finalidades informadas, con la base legal correspondiente, minimizados y protegidos desde que se recaban hasta que se eliminan. | Evaluaciones de privacidad; reglas de datos en la política de uso aceptable; controles de acceso. |
| **Seguridad** | Los sistemas se protegen contra amenazas convencionales y propias de la IA, como la manipulación de datos de entrenamiento o la inyección de instrucciones (*prompt injection*), y no deben poner en peligro la integridad de las personas. | Pruebas adversarias; registros de eventos; gestión de vulnerabilidades. |
| **Robustez** | Los sistemas mantienen un desempeño aceptable ante datos nuevos, cambios del entorno y condiciones adversas, y fallan de forma controlada cuando no pueden hacerlo. | Criterios de aceptación; monitoreo de deriva (*drift*); planes de contingencia. |
| **Rendición de cuentas** | Cada sistema tiene un dueño con nombre y puesto, y cada decisión relevante queda registrada y es rastreable. | Inventario actualizado; matriz RACI; actas de aprobación. |
| **Supervisión humana** | Una persona competente puede revisar, corregir, anular o detener los resultados de un sistema cuando estos afectan derechos, oportunidades o la seguridad de las personas. | Puntos de intervención definidos; capacitación de supervisores; vías de reconsideración. |
| **Sostenibilidad** | Se consideran el consumo de energía y recursos de los sistemas y sus efectos en el empleo y en las comunidades, y se elige la solución proporcional al problema. | Criterios de selección de proveedores y modelos; evaluación de impactos sociales. |

## 6. Reglas por tipo de actividad

### 6.1 Reglas generales para todo sistema de IA

1. Ningún sistema de IA se usa, desarrolla o provee sin estar registrado en el inventario y sin un dueño asignado.
2. Antes de su puesta en operación, todo sistema pasa por una evaluación de riesgos conforme a la *Metodología de evaluación y tratamiento de riesgos de IA* [SGIA-PRO-01] y, cuando el cribado lo indique, por una evaluación de impacto conforme al formulario [SGIA-FOR-01].
3. Cada sistema se usa solo dentro de su uso previsto. Cualquier uso nuevo se trata como un caso de uso nuevo.
4. Los resultados que afectan derechos, oportunidades o la seguridad de personas cuentan con supervisión humana proporcional al riesgo.
5. Los incidentes y casos sospechosos se reportan y gestionan conforme al procedimiento [SGIA-PRO-02].

### 6.2 Uso de sistemas de IA de terceros

- Solo se usan herramientas y servicios de IA autorizados, contratados con cuentas corporativas y bajo condiciones que protejan la información de la organización y de sus clientes. Las reglas para el personal están en la *Política de uso aceptable de IA generativa* [SGIA-POL-02].
- Antes de contratar un servicio de IA, el área de compras y el dueño del sistema evalúan al proveedor: tratamiento y ubicación de los datos, uso de los datos para entrenar modelos, seguridad, avisos de cambios de versión, soporte, posibilidad de auditoría y salida ordenada.
- Los contratos asignan con claridad las responsabilidades entre la organización y el proveedor, incluidas la notificación de incidentes y de cambios significativos en el modelo.
- La organización conserva la rendición de cuentas frente a sus clientes y usuarios, aunque el sistema sea operado por un tercero.

*Ejemplo (Contadores Alameda): el contrato con BotNorte obliga a avisar con 15 días de anticipación cualquier cambio del modelo de lenguaje que usa "Alma" y prohíbe usar las conversaciones de clientes para entrenar modelos.*

### 6.3 Desarrollo y adaptación de sistemas de IA

- El desarrollo sigue el *Procedimiento de gestión del ciclo de vida de los sistemas de IA* [SGIA-PRO-03], con puertas de aprobación, criterios de liberación documentados y pruebas de desempeño, equidad, robustez y seguridad.
- Los datos para entrenar, validar y probar modelos se obtienen de fuentes con derechos de uso verificados, se documenta su procedencia y se cumplen requisitos de calidad definidos antes de usarlos.
- Cada sistema cuenta con una ficha del sistema [SGIA-FOR-02] actualizada y con registros de eventos durante su operación.
- Los cambios significativos (nuevos datos, nuevo modelo, nueva población o nuevo uso) requieren reevaluar riesgos e impacto antes de liberarse.

### 6.4 Provisión de sistemas de IA a clientes

- Los clientes reciben información suficiente para usar el sistema de forma responsable: uso previsto, limitaciones conocidas, requisitos de supervisión humana, responsabilidades de cada parte y forma de reportar problemas.
- Los contratos y la documentación definen qué responsabilidades asume la organización y cuáles el cliente (por ejemplo, el aviso de interacción con IA a los usuarios finales o la calidad de la base de conocimiento que el cliente carga).
- La organización mantiene un canal para que clientes y usuarios finales reporten impactos adversos y les comunica los incidentes que los afecten, conforme al plan de comunicación de incidentes.
- La organización no usa los datos de sus clientes para fines distintos de los pactados.

### 6.5 Clasificación de casos de uso (semáforo)

| Color | Criterio | Qué se requiere | Ejemplos |
|---|---|---|---|
| **Verde** | Uso interno con herramientas autorizadas, sin datos personales ni confidenciales, sin decisiones sobre personas | Registro en el inventario (puede ser como grupo de usos) y apego a la política de uso aceptable | Redactar un borrador de comunicado interno; resumir un documento público |
| **Amarillo** | Uso con datos personales o confidenciales, contenido dirigido a clientes o apoyo a decisiones sobre personas con revisión humana | Evaluación de riesgos, cribado de impacto, aprobación del dueño del sistema y del responsable del SGIA, supervisión humana definida | Responder dudas frecuentes de clientes con un chatbot; extraer datos de facturas para la contabilidad |
| **Rojo** | Usos prohibidos (sección 7.1) o restringidos (sección 7.2) sin las autorizaciones requeridas | Prohibido, o aprobación expresa del Comité de IA con evaluación de impacto completa | Decidir de forma automática el rechazo de un crédito sin vía de reconsideración; usar un chatbot gratuito con datos de nómina |

## 7. Usos prohibidos y restringidos

### 7.1 Usos prohibidos

La organización no diseña, adquiere, usa ni provee sistemas de IA para:

1. Manipular a las personas mediante técnicas que exploten sus vulnerabilidades (edad, discapacidad, situación económica) o que alteren su comportamiento de forma que puedan sufrir un daño.
2. Asignar calificaciones sociales a personas por su comportamiento o características personales que deriven en trato perjudicial en contextos no relacionados.
3. Inferir características sensibles (origen étnico, opiniones políticas, creencias religiosas, preferencia sexual, estado de salud) a partir de datos biométricos o de comportamiento, salvo obligación legal expresa.
4. Vigilar a colaboradores o clientes más allá de lo que permite la ley y de lo informado en el aviso de privacidad.
5. Generar contenido falso que suplante a personas reales (imagen, voz o identidad) sin su consentimiento, o difundir desinformación.
6. Cualquier finalidad prohibida por la legislación de los países donde opera la organización. [AGREGA LOS USOS PROHIBIDOS QUE APLIQUEN EN TUS JURISDICCIONES; SI OPERAS EN LA UNIÓN EUROPEA, REVISA LAS PRÁCTICAS PROHIBIDAS DEL REGLAMENTO DE IA CON TU ASESOR LEGAL].

### 7.2 Usos restringidos

Requieren evaluación de impacto completa, supervisión humana definida y aprobación expresa del Comité de IA:

- Decisiones o recomendaciones sobre acceso a crédito, seguros, empleo, vivienda, educación, salud o servicios públicos.
- Sistemas que interactúan con niñas, niños, adolescentes u otros grupos en situación de vulnerabilidad.
- Identificación o verificación biométrica de personas.
- Decisiones automatizadas sin intervención humana que produzcan efectos jurídicos o afecten de forma significativa a una persona.
- Uso de datos personales sensibles para entrenar, ajustar o alimentar un sistema de IA.
- Agentes de IA que ejecutan acciones por su cuenta (enviar comunicaciones, realizar pagos, modificar registros).
- [OTROS USOS RESTRINGIDOS PROPIOS DE TU SECTOR].

## 8. Gestión de riesgos e impacto

- Los criterios de riesgo de IA, incluidos la matriz de clasificación, los niveles que la organización está dispuesta a aceptar y quién puede aceptarlos, se aprueban por la alta dirección y se documentan en [SGIA-PRO-01].
- Los riesgos se analizan considerando sus consecuencias para la organización, para las personas y para la sociedad.
- Los sistemas que influyen en decisiones sobre personas, tratan datos sensibles o se clasifican con riesgo Alto o Crítico se someten a una evaluación de impacto [SGIA-FOR-01] antes de operar y cada vez que cambien de forma significativa. Sus resultados alimentan la evaluación de riesgos.
- La selección de controles se documenta en la Declaración de Aplicabilidad (`declaracion-de-aplicabilidad.xlsx`), con la justificación de cada inclusión y exclusión.
- Ningún riesgo clasificado como Crítico se acepta de forma permanente.

## 9. Roles y responsabilidades

Las responsabilidades detalladas están en la matriz *Roles y responsabilidades de IA* [SGIA-ORG-01]. En resumen:

| Rol | Responsabilidad principal | Ocupa el rol |
|---|---|---|
| Alta dirección | Aprueba esta política, los criterios de riesgo y los recursos; revisa el desempeño del SGIA. | [PUESTO] |
| Responsable del SGIA | Coordina el SGIA, mantiene esta política y reporta su desempeño a la alta dirección. | [PUESTO] |
| Comité de IA | Aprueba casos de uso amarillos y rojos, liberaciones, excepciones y riesgos residuales de nivel Alto. | [INTEGRANTES] |
| Dueño de cada sistema de IA | Rinde cuentas por el sistema durante todo su ciclo de vida. | [SEGÚN INVENTARIO] |
| Todo el personal | Cumple esta política, usa solo herramientas autorizadas y reporta inquietudes e incidentes. | Todas las personas |

## 10. Reporte de inquietudes

Cualquier persona que trabaje para la organización puede reportar inquietudes sobre el desarrollo, uso o desempeño de un sistema de IA, incluidos posibles daños a personas, incumplimientos o presiones para omitir controles, a través de [CANAL: CORREO, FORMULARIO O LÍNEA DE DENUNCIA]. El canal permite reportes anónimos o confidenciales; los reportes se atienden en un plazo de [NÚMERO] días hábiles; y la organización prohíbe cualquier represalia contra quien reporte de buena fe. El responsable del SGIA informa a la alta dirección, en cada revisión por la dirección, el número y tipo de reportes recibidos y su atención.

## 11. Excepciones y desviaciones

1. Una **excepción** es una autorización temporal para apartarse de esta política. Se solicita por escrito al responsable del SGIA, indicando la regla afectada, la justificación de negocio, los riesgos, las medidas compensatorias y la duración.
2. Las excepciones se aprueban según su riesgo: las de nivel Bajo o Medio, por el responsable del SGIA; las de nivel Alto, por el Comité de IA; las que impliquen un riesgo Crítico, solo por la dirección general, de forma temporal y con medidas compensatorias.
3. Ninguna excepción dura más de [SEIS MESES]; al vencer, se renueva con nueva justificación o se cierra.
4. Las excepciones se registran en [REGISTRO DE EXCEPCIONES] y se revisan en cada revisión por la dirección.
5. Una **desviación** es un incumplimiento no autorizado. Se reporta como incidente o no conformidad y se gestiona con el procedimiento de acciones correctivas.
6. Nadie puede aprobar una excepción que lo beneficie directamente.

## 12. Relación con otras políticas

Esta política se complementa con las siguientes políticas y procedimientos. Cuando exista contradicción, prevalece la regla más protectora para las personas, y el responsable del SGIA promoverá la corrección del documento correspondiente.

| Política o documento | Relación con la IA |
|---|---|
| [POLÍTICA DE SEGURIDAD DE LA INFORMACIÓN] | Clasificación de la información, controles de acceso, gestión de vulnerabilidades e incidentes de seguridad que afectan a sistemas de IA. |
| [AVISO Y POLÍTICA DE PRIVACIDAD] | Finalidades del tratamiento, información sobre decisiones automatizadas, derechos ARCO y uso de datos personales en IA. |
| [POLÍTICA DE COMPRAS Y GESTIÓN DE PROVEEDORES] | Evaluación y contratación de servicios de IA. |
| [CÓDIGO DE ÉTICA Y CONDUCTA] | Valores, no discriminación y conflicto de interés. |
| [POLÍTICA DE GESTIÓN DE RIESGOS] | Alineación de las escalas de riesgo de IA con las corporativas. |
| [POLÍTICA DE GESTIÓN DOCUMENTAL Y RETENCIÓN] | Conservación de registros de eventos, evaluaciones y fichas. |
| [POLÍTICA DE DESARROLLO SEGURO] | Ciclo de vida del software que incluye componentes de IA. |
| *Política de uso aceptable de IA generativa* [SGIA-POL-02] | Reglas de uso para el personal. |

## 13. Comunicación y disponibilidad

- **Dentro de la organización:** esta política se publica en [INTRANET O REPOSITORIO], se incluye en la inducción del personal y se recuerda al menos una vez al año. Las personas confirman haberla leído mediante [MECANISMO DE ACUSE].
- **Hacia partes interesadas externas:** [LA POLÍTICA COMPLETA / UN RESUMEN] está disponible en [SITIO WEB O A SOLICITUD] para clientes, proveedores, autoridades y otras partes interesadas que lo requieran.
- Los cambios relevantes se comunican a las personas afectadas antes de su entrada en vigor.

## 14. Revisión

El responsable del SGIA revisa esta política al menos cada [DOCE MESES] y, además, cuando ocurra alguno de estos eventos: cambios legales o regulatorios relevantes, adopción de un tipo nuevo de IA (por ejemplo, agentes autónomos), incidentes graves, resultados de auditoría, cambios en la estrategia o en la estructura de la organización, o cambios en las expectativas de clientes. El resultado de la revisión, aunque no haya cambios, se documenta y se presenta en la revisión por la dirección.

## 15. Incumplimiento

El incumplimiento de esta política puede dar lugar a medidas disciplinarias conforme a [REGLAMENTO INTERIOR DE TRABAJO, CONTRATO O POLÍTICA DISCIPLINARIA], proporcionales a la gravedad y a la intención, y, en el caso de contratistas y proveedores, a las consecuencias previstas en el contrato. Reportar de buena fe un error propio o ajeno no se sanciona.

## 16. Aprobación

| Nombre | Puesto | Firma | Fecha |
|---|---|---|---|
| [NOMBRE] | [DIRECCIÓN GENERAL O EQUIVALENTE] | | [FECHA] |

## Historial de cambios

| Versión | Fecha | Descripción del cambio | Autor | Aprobó |
|---|---|---|---|---|
| 1.0 | [FECHA] | Emisión inicial | [NOMBRE] | [NOMBRE] |
| | | | | |

## Referencias

- ISO/IEC 42001:2023, cláusulas 5.1, 5.2, 5.3, 6.1.1, 6.2, 7.3 y 7.4.
- ISO/IEC 42001:2023, Anexo A: A.2.2, A.2.3, A.2.4, A.3.2, A.3.3, A.5.2, A.6.1.2, A.9.2, A.9.3, A.9.4, A.10.2, A.10.3 y A.10.4.
- ISO/IEC 38507 (implicaciones de gobernanza del uso de la IA), como orientación para el contenido de la política.
- Documentos relacionados: [SGIA-POL-02], [SGIA-ORG-01], [SGIA-PRO-01], [SGIA-FOR-01], [SGIA-FOR-02], [SGIA-PRO-02], [SGIA-PRO-03].
- Guía *Descifrando ISO 42001*, cláusula 5.2 y objetivo A.2: https://adriangzmncrz-arch.github.io/descifrando-iso42001/anexo-a/a2-politicas/

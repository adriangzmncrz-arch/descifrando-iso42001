# Procedimiento de gestión y registro de incidentes de IA

| Control del documento | |
|---|---|
| Código | [SGIA-PRO-02] |
| Versión | [1.0] |
| Fecha de aprobación | [FECHA] |
| Elaboró | [NOMBRE] · [PUESTO] |
| Revisó | [NOMBRE] · [PUESTO] |
| Aprobó | [NOMBRE] · [PUESTO DE LA ALTA DIRECCIÓN] |
| Clasificación | [USO INTERNO] |

Plantilla de *Descifrando ISO 42001* (CC BY-SA 4.0) — adáptala a tu organización; no sustituye a la norma ni es asesoría legal.

> **Instrucciones de uso (borra este bloque antes de aprobar el documento).**
>
> - **Qué cubre:** los controles A.8.4 Comunicación de incidentes, A.6.2.6 Operación y monitoreo, A.6.2.8 Registro de eventos, A.8.3 Reporte externo y A.8.5 Información para las partes interesadas, y la cláusula 10.2 (no conformidad y acción correctiva). Los nombres de los controles son traducción libre de referencia.
> - **Acompaña a** `registro-incidentes-ia.xlsx`: los tipos, severidades, orígenes y estados de este documento son los mismos que las listas desplegables del archivo, y la sección 10 explica cada columna.
> - **Qué personalizar:** los criterios de severidad (sección 5.2) para que coincidan con tus criterios de riesgo, los tiempos objetivo (sección 6.2), los canales de reporte, las autoridades y obligaciones de notificación de tus jurisdicciones (sección 7.3) y las plantillas de aviso.
> - **Qué borrar:** este bloque y los ejemplos en cursiva. Los ejemplos corresponden a Conversa Labs, empresa ficticia de los casos prácticos de la guía.
> - **Importante:** los tiempos objetivo son ejemplos internos. Los plazos legales o contractuales de notificación prevalecen y deben confirmarse con tu área legal para cada país donde operes.
> - **Si ya tienes un proceso de incidentes de seguridad de la información** (por ejemplo, conforme a ISO 27001 A.5.24 a A.5.28), integra este procedimiento en él en lugar de crear uno paralelo: agrega los tipos de incidente propios de la IA, los criterios de impacto en personas y la comunicación a usuarios.

## 1. Propósito

Establecer cómo [NOMBRE DE LA ORGANIZACIÓN] detecta, registra, contiene, evalúa, comunica, corrige y aprende de los incidentes relacionados con sus sistemas de IA, de manera que el daño a personas y a la organización sea el menor posible y que las causas no se repitan.

## 2. Alcance

Aplica a todos los sistemas de IA del inventario, propios o de terceros, en cualquier etapa de su ciclo de vida, y a todas las personas que operan, supervisan o reciben reportes sobre ellos. Incluye los incidentes reportados por proveedores que afecten a sistemas que la organización usa o provee.

## 3. Definiciones

- **Evento:** cualquier situación observada en un sistema de IA que podría ser relevante (una alerta de monitoreo, una queja, un resultado extraño).
- **Incidente de IA:** evento en que un sistema de IA causó, o estuvo a punto de causar, un daño a personas, a la organización o a la sociedad; un incumplimiento legal, contractual o de política; o un resultado inaceptable según los criterios de la organización. Ejemplos: respuestas falsas con consecuencias, trato discriminatorio, exposición de datos, manipulación del sistema, uso fuera del uso previsto.
- **Casi incidente** (*near miss*): evento que pudo convertirse en incidente pero se detuvo a tiempo (por ejemplo, un supervisor humano detectó y corrigió un resultado erróneo antes de que llegara al cliente). Se registra con severidad Baja porque enseña tanto como un incidente.
- **No conformidad:** incumplimiento de un requisito del SGIA, de la norma o de un procedimiento interno. Un incidente puede revelar una no conformidad (por ejemplo, que no se hicieron las pruebas exigidas antes de liberar una versión), pero no todo incidente implica una.
- **Acción correctiva:** acción para eliminar la causa de una no conformidad o de un incidente y evitar que vuelva a ocurrir.
- **Contención:** medida inmediata para detener o limitar el daño mientras se analiza la causa.

## 4. Roles

| Rol | Responsabilidad |
|---|---|
| Cualquier persona | Reporta de inmediato todo evento que pueda ser un incidente. |
| Responsable de incidentes de IA ([PUESTO]) | Registra, clasifica, coordina la respuesta y da seguimiento hasta el cierre. |
| Dueño del sistema de IA | Decide y ejecuta la contención, aporta información técnica y es responsable de las acciones correctivas de su sistema. |
| Equipo técnico (desarrollo, datos, seguridad) | Analiza la causa, implementa correcciones y conserva la evidencia. |
| Privacidad | Determina si hay una vulneración de datos personales y las obligaciones correspondientes. |
| Legal y cumplimiento | Determina las obligaciones de notificación a autoridades y clientes, y revisa los mensajes externos. |
| Comunicación o atención a clientes | Envía los avisos a usuarios y clientes aprobados. |
| Alta dirección | Aprueba la comunicación a autoridades y a medios en incidentes Altos o Críticos, y autoriza la suspensión de sistemas críticos para el negocio. |
| Responsable del SGIA | Vigila el cumplimiento de este procedimiento e informa las tendencias en la revisión por la dirección. |

## 5. Clasificación

### 5.1 Por tipo

| Tipo | Descripción | Ejemplo |
|---|---|---|
| Desempeño o error del modelo | El sistema produce resultados incorrectos o degradados respecto de sus umbrales | La captura automática de facturas confunde el RFC del emisor con el del receptor |
| Alucinación con impacto | Un sistema generativo presenta información inventada como cierta y alguien actúa con base en ella | El asistente afirma que una póliza cubre un procedimiento que no cubre |
| Sesgo o trato injusto | Resultados sistemáticamente distintos para personas o grupos sin justificación | Tasa de rechazo mucho mayor para solicitantes de una región |
| Seguridad propia de la IA | Manipulación del sistema mediante instrucciones, datos o consultas maliciosas | Inyección de instrucciones para obtener el texto interno del sistema |
| Privacidad o datos personales | Exposición, uso fuera de finalidad o tratamiento indebido de datos personales por o mediante el sistema | Un colaborador pega una nómina en un chatbot no autorizado |
| Uso indebido o fuera del uso previsto | El sistema se usa para algo para lo que no fue aprobado | Usar el puntaje de crédito para priorizar la cobranza |
| Falla del proveedor | Un cambio, caída o incidente del proveedor afecta al sistema | El proveedor cambia la versión del modelo y aumentan los errores |
| Otro | Cualquier otro caso | |

### 5.2 Por severidad

La severidad se asigna con la información disponible y se ajusta conforme avanza el análisis. Si hay duda entre dos niveles, se elige el más alto. Los niveles son coherentes con la escala de consecuencia de la *Metodología de evaluación y tratamiento de riesgos de IA* [SGIA-PRO-01].

| Severidad | Criterios (basta con que se cumpla uno) | Equivalencia aproximada en la escala de consecuencia |
|---|---|---|
| **Crítica** | Daño grave o irreversible a la vida, la salud, la libertad o el patrimonio de personas; exposición masiva de datos personales sensibles; incumplimiento legal grave; suspensión de un servicio esencial para clientes | 5 · Severa |
| **Alta** | Daño significativo o difícil de revertir a personas; información incorrecta que llevó a decisiones con efectos económicos o jurídicos; trato discriminatorio sistemático; exposición de datos personales; afectación a un cliente clave | 4 · Mayor |
| **Media** | Afectación reversible a un grupo acotado de personas; error que llegó a usuarios y se corrigió sin daño material; ataque dirigido contra el sistema que revela una debilidad, aunque se haya bloqueado | 3 · Moderada |
| **Baja** | Sin afectación a personas externas; casi incidentes; errores detectados internamente antes de causar efectos | 1 · Insignificante o 2 · Menor |

### 5.3 Por origen del reporte

Monitoreo automático · Reporte de usuario · Reporte de cliente · Reporte interno (canal de inquietudes) · Proveedor · Auditoría · Otro.

## 6. Flujo de gestión

### 6.1 Etapas

1. **Detección y reporte.** Cualquier persona que detecte un posible incidente lo reporta por [CANAL INTERNO]. Los usuarios externos y clientes lo hacen por [CANAL EXTERNO]. Las alertas de monitoreo llegan automáticamente a [BUZÓN O HERRAMIENTA]. Ante la duda, se reporta.
2. **Registro.** El responsable de incidentes asigna un identificador con el formato INC-AAAA-NNN y abre el registro en `registro-incidentes-ia.xlsx` o en [HERRAMIENTA DE TICKETS], con la fecha de detección, el sistema, el origen y una descripción de los hechos sin conclusiones anticipadas.
3. **Clasificación inicial.** Asigna tipo y severidad (sección 5). Si la severidad es Alta o Crítica, convoca de inmediato al dueño del sistema, a legal y, si hay datos personales, a privacidad.
4. **Contención.** El dueño del sistema decide la medida que detenga el daño: desactivar una función, regresar a la versión anterior, activar el traspaso a humanos, bloquear una cuenta, ajustar un filtro o suspender el sistema. Se documenta qué se hizo y cuándo. La contención no espera a conocer la causa.
5. **Evaluación.** Se determina el alcance real: personas afectadas, decisiones o respuestas que deben revisarse, datos involucrados, periodo, sistemas relacionados. Se conserva la evidencia (registros de eventos, capturas, versiones) sin alterarla.
6. **Comunicación.** Se decide si hay que avisar a usuarios, clientes o autoridades (sección 7) y se registra la decisión, incluida la de no avisar y su justificación.
7. **Análisis de causa raíz.** Para incidentes Medios, Altos y Críticos se identifica la causa de fondo con una técnica proporcional (cinco porqués, diagrama de causa y efecto, línea de tiempo). Se pregunta también si el mismo problema puede existir en otros sistemas.
8. **Acción correctiva.** Si la causa revela una falla del SGIA o de un control, se abre una no conformidad con su acción correctiva (cláusula 10.2) y se anota su identificador en el registro. Las acciones tienen responsable, fecha y criterio de eficacia.
9. **Recuperación y cierre.** Se restablece la operación normal cuando la causa está controlada. El responsable de incidentes cierra el registro cuando las acciones inmediatas están completas, la causa raíz documentada y la comunicación hecha; las acciones correctivas de largo plazo se siguen en su propio registro.
10. **Lecciones aprendidas.** Se documenta qué se aprendió y qué debe cambiar: pruebas, monitoreo, ficha del sistema, evaluación de riesgos, evaluación de impacto, capacitación o contratos con proveedores. Los incidentes Altos y Críticos detonan una reevaluación de riesgos del sistema.

### 6.2 Tiempos objetivo (ejemplos ajustables)

| Etapa | Crítica | Alta | Media | Baja |
|---|---|---|---|---|
| Registro desde la detección | 1 hora | 4 horas | 1 día hábil | 3 días hábiles |
| Contención | 4 horas | 24 horas | 3 días hábiles | Según se requiera |
| Decisión sobre comunicación a usuarios y autoridades | 24 horas | 48 horas | 5 días hábiles | No suele requerirse |
| Aviso inicial a usuarios o clientes afectados, si procede | 24 horas o el plazo legal o contractual, el que sea menor | 72 horas o el plazo legal o contractual, el que sea menor | Según el plan de comunicación | No suele requerirse |
| Análisis de causa raíz | 10 días hábiles | 15 días hábiles | 30 días naturales | Opcional |
| Cierre del incidente | 30 días naturales | 45 días naturales | 60 días naturales | 90 días naturales |

Los incidentes Críticos se informan a la alta dirección el mismo día de su detección.

## 7. Comunicación de incidentes

### 7.1 A usuarios y personas afectadas

Se avisa a los usuarios y a las personas afectadas cuando el incidente pudo afectar sus derechos, sus intereses económicos, sus datos personales o las decisiones que tomaron con base en el sistema, y cuando existe algo que ellos puedan hacer para protegerse. El aviso explica, en lenguaje claro, qué pasó, a quién afecta, qué información o decisiones están involucradas, qué está haciendo la organización, qué conviene que haga la persona y cómo obtener ayuda.

### 7.2 A clientes que despliegan el sistema

Si la organización provee el sistema a clientes, les avisa en el plazo pactado en el contrato, con la información que necesitan para cumplir sus propias obligaciones frente a sus usuarios. El contrato define quién avisa a los usuarios finales.

### 7.3 A autoridades y otras partes interesadas

Legal y cumplimiento mantiene una tabla de obligaciones de notificación por jurisdicción y tipo de incidente. [LLENA ESTA TABLA CON TU ÁREA LEGAL].

| Jurisdicción | Tipo de incidente | Autoridad o parte interesada | Plazo | Fundamento | Quién notifica |
|---|---|---|---|---|---|
| [PAÍS] | Vulneración de datos personales | [AUTORIDAD DE PROTECCIÓN DE DATOS] y titulares | [PLAZO] | [LEY Y ARTÍCULO] | [PRIVACIDAD] |
| [PAÍS] | [INCIDENTE SECTORIAL] | [REGULADOR SECTORIAL] | [PLAZO] | [NORMA] | [CUMPLIMIENTO] |
| [UNIÓN EUROPEA, SI APLICA] | Incidente grave de un sistema de IA de alto riesgo | [AUTORIDAD DE VIGILANCIA DEL MERCADO] | [PLAZO] | Reglamento de IA de la UE | [LEGAL] |
| — | Incidente con efecto en un cliente o aliado | [CLIENTE O ALIADO] | [PLAZO CONTRACTUAL] | Contrato | [DUEÑO DEL SISTEMA] |

*Ejemplo: en México, la ley de protección de datos personales en posesión de particulares prevé informar de inmediato a los titulares las vulneraciones de seguridad que afecten de forma significativa sus derechos. Confirma el alcance y la forma con tu área legal.*

### 7.4 Plantilla de aviso inicial a usuarios

> **Asunto:** Aviso sobre una falla en [NOMBRE DEL SERVICIO]
>
> Hola, [NOMBRE]:
>
> Te escribimos porque el [FECHA] detectamos que [NOMBRE DEL SISTEMA], el asistente automatizado que usamos para [PROPÓSITO], [DESCRIPCIÓN BREVE Y CLARA DE LO QUE PASÓ]. Esta situación pudo afectar [QUÉ INFORMACIÓN, RESPUESTA O DECISIÓN TE AFECTA] entre el [FECHA] y el [FECHA].
>
> **Qué hicimos:** [MEDIDA DE CONTENCIÓN; POR EJEMPLO, DESACTIVAMOS LA FUNCIÓN Y REVISAMOS TODAS LAS RESPUESTAS DE ESE PERIODO].
>
> **Qué te recomendamos:** [ACCIÓN CONCRETA; POR EJEMPLO, NO TOMES EN CUENTA LA INFORMACIÓN QUE RECIBISTE SOBRE X Y CONSULTA LA INFORMACIÓN CORRECTA EN Y].
>
> **Si necesitas ayuda:** comunícate con nosotros en [CANAL] y menciona el folio [INC-AAAA-NNN]. Una persona de nuestro equipo revisará tu caso.
>
> Lamentamos las molestias. Te informaremos cuando el problema esté resuelto.
>
> [NOMBRE DE LA ORGANIZACIÓN]

### 7.5 Plantilla de aviso de cierre

> **Asunto:** Resolvimos la falla en [NOMBRE DEL SERVICIO]
>
> Hola, [NOMBRE]:
>
> Te confirmamos que la falla que te informamos el [FECHA] quedó resuelta. La causa fue [EXPLICACIÓN BREVE] y, para evitar que se repita, [MEDIDAS ADOPTADAS]. [SI APLICA: CORREGIMOS O REVISAMOS LA INFORMACIÓN O DECISIÓN QUE TE AFECTÓ, CON ESTE RESULTADO: ...].
>
> Si tienes dudas o crees que todavía te afecta, escríbenos a [CANAL] con el folio [INC-AAAA-NNN].
>
> [NOMBRE DE LA ORGANIZACIÓN]

### 7.6 Plantilla de aviso a clientes que despliegan el sistema

> **Asunto:** Notificación de incidente [INC-AAAA-NNN] · Severidad [NIVEL]
>
> Estimado cliente:
>
> Conforme a [CLÁUSULA DEL CONTRATO], le informamos que el [FECHA Y HORA] identificamos [DESCRIPCIÓN]. Sistemas y funciones afectados: [LISTA]. Periodo: [DESDE] a [HASTA]. Estimación de usuarios o conversaciones afectados en su servicio: [NÚMERO].
>
> Medidas de contención aplicadas: [LISTA]. Acciones que recomendamos de su parte: [LISTA; POR EJEMPLO, REVISAR LAS RESPUESTAS SOBRE X, AVISAR A SUS USUARIOS SI LO REQUIERE SU NORMATIVA].
>
> Le enviaremos una actualización a más tardar el [FECHA] y el informe de causa raíz cuando concluya el análisis. Contacto para este incidente: [NOMBRE, CORREO Y TELÉFONO].

## 8. Coordinación con otros procesos

- **Seguridad de la información:** si el incidente implica acceso no autorizado, pérdida de disponibilidad o compromiso de la infraestructura, se activa además el procedimiento de incidentes de seguridad.
- **Datos personales:** si hay una vulneración de datos personales, privacidad aplica su procedimiento y sus plazos.
- **Proveedores:** si la causa está en un proveedor, se le notifica, se le solicita su análisis y se registra el hecho en su evaluación de desempeño.
- **Quejas y atención a clientes:** las quejas que revelen un posible incidente se canalizan a este procedimiento sin perder su folio original.
- **Continuidad del negocio:** si se suspende un sistema crítico, se activa el plan de continuidad aplicable.

## 9. Ejemplo

*Conversa Labs, INC-2026-014. Un cliente asegurador reporta que el asistente afirmó a 37 usuarios que su póliza cubría un procedimiento que no cubre. Clasificación: alucinación con impacto, severidad Alta, afecta a personas externas. Contención: se desactiva la intención afectada y se activa el traspaso a humano para preguntas de cobertura. Comunicación: aviso al cliente dentro del plazo contractual; el cliente avisa a sus usuarios con apoyo de Conversa. Causa raíz: un documento desactualizado en la base de conocimiento y una verificación insuficiente de fuentes. Acción correctiva AC-2026-009: prueba de regresión con preguntas de coberturas antes de cada actualización de la base. Cierre a los 21 días.*

## 10. Campos del registro

Cada columna de `registro-incidentes-ia.xlsx` y su uso:

| Columna | Qué se anota | Ejemplo |
|---|---|---|
| ID | Identificador único con formato INC-AAAA-NNN | INC-2026-014 |
| Fecha de detección | Fecha en que la organización supo del evento | 2026-06-03 |
| Sistema de IA | Nombre e identificador del inventario | Conversa · asistente de aseguradora |
| Origen del reporte | Lista de la sección 5.3 | Reporte de cliente |
| Descripción | Hechos observados, sin conclusiones anticipadas | El asistente afirmó una cobertura inexistente |
| Tipo | Lista de la sección 5.1 | Alucinación con impacto |
| Severidad | Baja, Media, Alta o Crítica (sección 5.2) | Alta |
| Personas afectadas (aprox.) | Número estimado | 37 |
| ¿Afecta a personas externas? | Sí, No o Por determinar | Sí |
| ¿Comunicar a usuarios? (A.8.4) | Decisión tomada: Sí, No o Por determinar | Sí |
| ¿Notificar a autoridad? | Decisión tomada: Sí, No o Por determinar | Por determinar |
| Contención aplicada | Medidas inmediatas y su fecha | Intención desactivada; traspaso a humano |
| Causa raíz | Resultado del análisis | Documento desactualizado en la base |
| ID de no conformidad / acción correctiva | Referencia al registro de acciones correctivas | AC-2026-009 |
| Responsable | Persona que coordina el incidente | Responsable de Confianza y Seguridad |
| Estado | Abierto, En análisis, Contenido o Cerrado | Cerrado |
| Fecha de cierre | Fecha de cierre según la etapa 9 | 2026-06-24 |
| Días abiertos | Se calcula solo | 21 |
| Alerta | Se calcula sola: avisa si falta decidir la comunicación en incidentes Altos o Críticos, o si se cerró sin causa raíz | — |
| Lecciones aprendidas | Cambios derivados del incidente | Prueba de regresión antes de cada actualización |

## 11. Indicadores

El responsable del SGIA presenta en cada revisión por la dirección, con base en la hoja Resumen del registro:

- Número de incidentes por tipo y severidad, y su tendencia.
- Incidentes abiertos y su antigüedad.
- Promedio de días para cerrar.
- Porcentaje de incidentes Medios o superiores con causa raíz documentada.
- Incidentes recurrentes (misma causa en menos de [SEIS] meses).
- Cumplimiento de los tiempos objetivo de la sección 6.2.
- Casi incidentes reportados (una cifra en cero suele indicar que no se reportan, no que no ocurren).

## Historial de cambios

| Versión | Fecha | Descripción del cambio | Autor | Aprobó |
|---|---|---|---|---|
| 1.0 | [FECHA] | Emisión inicial | [NOMBRE] | [NOMBRE] |
| | | | | |

## Referencias

- ISO/IEC 42001:2023, cláusulas 7.4, 9.1, 9.3 y 10.2.
- ISO/IEC 42001:2023, Anexo A: A.3.3, A.6.2.6, A.6.2.8, A.8.3, A.8.4, A.8.5, A.10.2 y A.10.3.
- ISO/IEC 27001:2022, controles de gestión de incidentes (ISO 27001 A.5.24 a A.5.28), si la organización tiene un SGSI.
- Documentos relacionados: [SGIA-POL-01], [SGIA-POL-02], [SGIA-PRO-01], [SGIA-FOR-02], [PROCEDIMIENTO DE ACCIONES CORRECTIVAS], [PROCEDIMIENTO DE VULNERACIONES DE DATOS PERSONALES]; `registro-incidentes-ia.xlsx`.
- Guía *Descifrando ISO 42001*, objetivo A.8: https://adriangzmncrz-arch.github.io/descifrando-iso42001/anexo-a/a8-informacion-partes-interesadas/

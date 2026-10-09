# Roles y responsabilidades de IA (matriz RACI)

| Control del documento | |
|---|---|
| Código | [SGIA-ORG-01] |
| Versión | [1.0] |
| Fecha de aprobación | [FECHA] |
| Elaboró | [NOMBRE] · [PUESTO] |
| Revisó | [NOMBRE] · [PUESTO] |
| Aprobó | [NOMBRE] · [PUESTO DE LA ALTA DIRECCIÓN] |
| Clasificación | [USO INTERNO] |

Plantilla de *Descifrando ISO 42001* (CC BY-SA 4.0) — adáptala a tu organización; no sustituye a la norma ni es asesoría legal.

> **Instrucciones de uso (borra este bloque antes de aprobar el documento).**
>
> - **Qué cubre:** la cláusula 5.3 (roles, responsabilidades y autoridades del SGIA) y los controles A.3.2 Roles y responsabilidades de IA y A.10.2 Asignación de responsabilidades. Apoya también a 7.2 (competencia) y a A.4.6 Recursos humanos. Los nombres de los controles son traducción libre de referencia.
> - **Qué personalizar:** el puesto o la persona que ocupa cada rol (sección 3), las actividades de la matriz (sección 4) según lo que tu organización realmente hace y la tabla de responsabilidades con terceros (sección 5).
> - **Qué borrar:** este bloque, los ejemplos en cursiva y los roles que no existan en tu organización. Si eliminas un rol, reasigna sus letras en la matriz; ninguna actividad puede quedarse sin una "A".
> - **Regla de oro:** cada actividad tiene exactamente una "A". Si dos áreas creen ser dueñas de la misma decisión, resuélvelo antes de aprobar el documento.
> - **Coherencia:** las filas de aceptación de riesgos siguen la tabla de aceptación de la *Metodología de evaluación y tratamiento de riesgos de IA* [SGIA-PRO-01] y del archivo `matriz-riesgos-ia.xlsx`. Si cambias una, cambia la otra.

## 1. Propósito y alcance

Este documento define quién decide, quién ejecuta, a quién se consulta y a quién se informa en las actividades del sistema de gestión de IA (SGIA) de [NOMBRE DE LA ORGANIZACIÓN], y cómo se reparten las responsabilidades con proveedores, socios y clientes. Aplica a todos los sistemas de IA registrados en el inventario y a todas las personas que participan en su ciclo de vida.

## 2. Cómo leer la matriz

| Letra | Significado | Regla |
|---|---|---|
| **R** · Responsable de ejecutar | Hace el trabajo o coordina a quienes lo hacen | Puede haber más de una R |
| **A** · Rinde cuentas y aprueba | Decide, firma y responde por el resultado | Exactamente una A por actividad |
| **C** · Consultado | Aporta conocimiento antes de decidir; su opinión se registra | Comunicación de ida y vuelta |
| **I** · Informado | Se entera del resultado | Comunicación de una vía |

Cuando una celda dice **A/R**, el mismo rol aprueba y ejecuta. Una celda vacía significa que el rol no participa de forma habitual.

## 3. Descripción de los roles

### 3.1 Alta dirección (AD)

- **Ocupa el rol:** [DIRECCIÓN GENERAL, CONSEJO O SOCIOS DIRECTORES].
- Aprueba la política de IA, los criterios de riesgo y la Declaración de Aplicabilidad; asigna recursos y designa al responsable del SGIA y al Comité de IA.
- Es la única instancia que puede autorizar, de forma temporal y con medidas compensatorias, la operación de un sistema con un riesgo residual Crítico.
- Encabeza la revisión por la dirección y decide sobre los cambios al SGIA.

### 3.2 Responsable del SGIA (RSG)

- **Ocupa el rol:** [PUESTO].
- Tiene la autoridad, asignada por la alta dirección, para asegurar que el SGIA cumpla los requisitos de ISO/IEC 42001 y para informar su desempeño a la alta dirección.
- Mantiene la política, la metodología de riesgos, la Declaración de Aplicabilidad y el programa de capacitación; facilita las evaluaciones de riesgo; acepta riesgos residuales de nivel Medio.
- Lleva el seguimiento de objetivos, incidentes, no conformidades y acciones correctivas.

### 3.3 Comité de IA o de modelos (CIA)

- **Integrantes:** [PUESTOS; POR EJEMPLO, RESPONSABLE DEL SGIA, DUEÑO DEL SISTEMA EN CUESTIÓN, SEGURIDAD, PRIVACIDAD Y LEGAL].
- **Sesiona:** [PERIODICIDAD], con quórum de [NÚMERO] integrantes, y de forma extraordinaria ante incidentes de severidad Alta o Crítica.
- Aprueba casos de uso nuevos, planes de tratamiento, salidas a producción, cambios significativos y retiros; acepta riesgos residuales de nivel Alto.
- Documenta sus decisiones en minutas. Un integrante no vota sobre un sistema del que es dueño.

### 3.4 Dueño del sistema de IA (DS)

- **Ocupa el rol:** la persona indicada para cada sistema en el inventario de sistemas de IA.
- Rinde cuentas por el sistema durante todo su ciclo de vida: uso previsto, riesgos, evaluación de impacto, supervisión humana, información a usuarios, proveedores y retiro.
- Acepta riesgos residuales de nivel Bajo de su sistema y propone los planes de tratamiento.
- Suele ser el líder del área de negocio que se beneficia del sistema, no necesariamente alguien de TI.

### 3.5 Evaluador de impacto (EI)

- **Ocupa el rol:** [PUESTO O PERSONA EXTERNA].
- Conduce las evaluaciones de impacto de los sistemas que le asignen, organiza la consulta a partes interesadas y documenta los resultados.
- Debe ser una persona distinta del dueño del sistema, o contar con una segunda revisión independiente.

### 3.6 Responsable de datos (RD)

- **Ocupa el rol:** [PUESTO].
- Gestiona la adquisición, calidad, procedencia, preparación y retención de los datos que usa cada sistema de IA, y mantiene su documentación.
- En organizaciones que solo usan IA de terceros, se encarga de los datos que la organización aporta (por ejemplo, una base de conocimiento).

### 3.7 Ciencia de datos y desarrollo (CDD)

- **Ocupa el rol:** [EQUIPO O PROVEEDOR DE DESARROLLO].
- Diseña, entrena, configura, prueba y documenta los sistemas de IA; implementa el monitoreo de desempeño y deriva; prepara la documentación técnica.

### 3.8 Supervisor humano (SH)

- **Ocupa el rol:** [PUESTOS QUE REVISAN LOS RESULTADOS DEL SISTEMA; POR EJEMPLO, ANALISTAS DE CRÉDITO O AGENTES DE ATENCIÓN].
- Revisa, corrige, anula o escala los resultados del sistema según las instrucciones de uso; reporta comportamientos anómalos.
- Recibe capacitación específica sobre las limitaciones del sistema y sobre el riesgo de confiar en exceso en sus resultados.

### 3.9 Seguridad de la información (SEG)

- **Ocupa el rol:** [PUESTO].
- Evalúa amenazas convencionales y propias de la IA, define controles de acceso, registros y respuesta a incidentes de seguridad, y revisa la seguridad de los proveedores.

### 3.10 Privacidad y protección de datos personales (PRI)

- **Ocupa el rol:** [PUESTO; POR EJEMPLO, OFICIAL DE PRIVACIDAD O DEPARTAMENTO DE DATOS PERSONALES].
- Verifica finalidades, avisos de privacidad, bases legales, derechos ARCO y evaluaciones de impacto en privacidad de los sistemas que tratan datos personales.

### 3.11 Legal y cumplimiento (LEG)

- **Ocupa el rol:** [PUESTO O DESPACHO EXTERNO].
- Identifica los requisitos legales, regulatorios y contractuales aplicables a la IA, revisa contratos con proveedores y clientes, opera el canal de reporte de inquietudes y determina las obligaciones de notificación a autoridades.

### 3.12 Compras y gestión de proveedores (COM)

- **Ocupa el rol:** [PUESTO].
- Conduce la evaluación y contratación de proveedores de IA, incorpora las cláusulas requeridas y da seguimiento al desempeño del proveedor.

### 3.13 Auditoría interna (AUD)

- **Ocupa el rol:** [ÁREA DE AUDITORÍA INTERNA, AUDITOR EXTERNO CONTRATADO O AUDITOR DE OTRA ÁREA].
- Planifica y ejecuta auditorías internas del SGIA con objetividad e imparcialidad; no audita actividades en las que participó.

## 4. Matriz RACI de las actividades del SGIA

Abreviaturas: AD alta dirección · RSG responsable del SGIA · CIA Comité de IA · DS dueño del sistema · EI evaluador de impacto · RD responsable de datos · CDD ciencia de datos y desarrollo · SH supervisor humano · SEG seguridad de la información · PRI privacidad · LEG legal y cumplimiento · COM compras · AUD auditoría interna.

| # | Actividad | AD | RSG | CIA | DS | EI | RD | CDD | SH | SEG | PRI | LEG | COM | AUD |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Aprobar y revisar la política de IA y su alineación con otras políticas | A | R | C | I | | | I | I | C | C | C | I | I |
| 2 | Aprobar los criterios de riesgo de IA y el apetito de riesgo | A | R | C | I | | | | | C | C | C | | I |
| 3 | Fijar objetivos de IA y darles seguimiento | A | R | C | C | | | I | I | I | I | I | | |
| 4 | Mantener el inventario de sistemas de IA | | A | I | R | | | C | | C | | | C | |
| 5 | Aprobar un caso de uso nuevo de IA | I | C | A | R | | C | | | C | C | C | | |
| 6 | Evaluar los riesgos de un sistema de IA | | R | I | A | C | C | C | | C | C | C | | |
| 7 | Evaluar el impacto de un sistema de IA | | C | I | A | R | C | | C | | C | C | | |
| 8 | Aprobar el plan de tratamiento de riesgos | I | C | A | R | | | C | | C | C | | | |
| 9 | Elaborar y aprobar la Declaración de Aplicabilidad | A | R | C | C | | | | | C | C | C | | I |
| 10 | Aceptar un riesgo residual Bajo | | I | | A/R | | | | | | | | | |
| 11 | Aceptar un riesgo residual Medio | | A | I | R | | | | | | | | | |
| 12 | Aceptar un riesgo residual Alto | I | R | A | C | | | | | | | C | | |
| 13 | Autorizar una excepción temporal ante un riesgo Crítico | A | R | C | C | | | | | | | C | | I |
| 14 | Gestionar los datos del sistema (adquisición, calidad, procedencia, preparación) | | I | | A | | R | C | | C | C | C | | |
| 15 | Diseñar, desarrollar, verificar y validar el sistema | | | I | A | C | C | R | C | C | | | | |
| 16 | Aprobar el despliegue o salida a producción | I | C | A | R | | | C | I | C | C | C | | |
| 17 | Operar el sistema con supervisión humana | | I | | A | | | C | R | | | | | |
| 18 | Monitorear desempeño, deriva y registros de eventos | | I | | A | | C | R | C | C | | | | |
| 19 | Evaluar, contratar y dar seguimiento a proveedores de IA | | C | I | A | | | | | C | C | C | R | |
| 20 | Preparar la información para usuarios y clientes (avisos de IA, instrucciones, limitaciones) | | I | | A | | | R | I | | C | C | | |
| 21 | Atender reportes de inquietudes del personal | A | C | I | | | | | | | C | R | | |
| 22 | Registrar y gestionar incidentes de IA | I | A | | R | | | C | C | C | C | C | | |
| 23 | Comunicar incidentes a usuarios, clientes y autoridades | A | C | I | C | | | | | C | C | R | | |
| 24 | Gestionar no conformidades y acciones correctivas | I | A | | R | | | | | | | | | C |
| 25 | Definir competencias y capacitar al personal en IA | A | R | | C | | | I | I | C | C | | | |
| 26 | Planificar y ejecutar auditorías internas del SGIA | A | C | I | C | | | | | | | | | R |
| 27 | Realizar la revisión por la dirección | A | R | C | I | | | | | | | | | C |
| 28 | Aprobar y ejecutar el retiro de un sistema de IA | | I | A | R | | C | | | C | C | C | C | |

*Ejemplo (Monarca Crédito): en la fila 16, el Director de Riesgos, como dueño de Score Monarca v3, presenta la evidencia de liberación (R) y el Comité de Modelos decide (A); el Líder de Ciencia de Datos y el Oficial de Privacidad son consultados (C) y los analistas de la banda gris son informados (I) antes del cambio.*

## 5. Responsabilidades compartidas con terceros

Cuando un proveedor, socio o cliente interviene en alguna etapa de un sistema de IA, la organización documenta qué hace cada parte. La organización conserva siempre la rendición de cuentas frente a sus propios usuarios y clientes, aunque haya trasladado tareas a un tercero.

| Actividad | [NOMBRE DE LA ORGANIZACIÓN] | Proveedor del modelo o servicio | Cliente | Dónde consta |
|---|---|---|---|---|
| Entrenamiento y actualización del modelo base | Evalúa y acepta cada versión | Entrena, documenta y avisa cambios | — | [CONTRATO, ANEXO TÉCNICO] |
| Configuración y base de conocimiento | [QUIÉN] | [QUIÉN] | [QUIÉN] | |
| Aviso de interacción con IA a usuarios finales | [QUIÉN] | — | [QUIÉN] | |
| Supervisión humana de los resultados | [QUIÉN] | — | [QUIÉN] | |
| Monitoreo de desempeño y registros de eventos | [QUIÉN] | [QUIÉN] | — | |
| Detección y notificación de incidentes | [QUIÉN] | [QUIÉN Y PLAZO] | [QUIÉN Y PLAZO] | |
| Atención de derechos ARCO y quejas | [QUIÉN] | [QUIÉN] | [QUIÉN] | |
| Retiro del servicio y devolución o eliminación de datos | [QUIÉN] | [QUIÉN] | [QUIÉN] | |

*Ejemplo (Conversa Labs): Conversa Labs configura la orquestación, los filtros y la evaluación de calidad; cada cliente carga y mantiene su base de conocimiento y avisa a sus usuarios finales que hablan con un asistente virtual; el proveedor del modelo fundacional se compromete por contrato a no entrenar con los datos y a avisar sus cambios de versión.*

## 6. Nota para PyMEs: acumulación de roles

En una organización pequeña, una misma persona puede ocupar varios roles. Eso es aceptable siempre que se respeten tres reglas de segregación:

1. **Nadie se aprueba a sí mismo.** Si la misma persona es R y A en una actividad crítica (aceptación de riesgos Medio o superior, salida a producción, excepciones), otra persona revisa y firma.
2. **Quien es dueño de un sistema no es el único que evalúa su impacto.** Basta una segunda revisión de alguien de otra área o de un asesor externo.
3. **Nadie audita su propio trabajo.** Si no hay a quién asignar la auditoría interna, contrata a un auditor externo o intercambia auditores con otra organización.

Cuando no sea posible separar funciones, documenta el conflicto y la medida compensatoria (por ejemplo, revisión por un socio o por el Comité de IA).

*Ejemplo (Contadores Alameda, 58 personas): la Socia directora es la alta dirección; el Gerente de TI es responsable del SGIA, de seguridad y dueño del asistente de ofimática; la Coordinadora de cumplimiento y datos personales cubre privacidad, legal y la evaluación de impacto; la Líder de atención a clientes es dueña de "Alma" y coordina a los supervisores humanos. Las cuatro personas forman el Comité de IA, que sesiona una vez al mes. La auditoría interna la realiza un consultor externo una vez al año.*

## 7. Nombramientos y aceptación

| Rol | Nombre | Puesto | Fecha de nombramiento | Firma de aceptación |
|---|---|---|---|---|
| Responsable del SGIA | [NOMBRE] | [PUESTO] | [FECHA] | |
| Integrantes del Comité de IA | [NOMBRES] | [PUESTOS] | [FECHA] | |
| Evaluador de impacto | [NOMBRE] | [PUESTO] | [FECHA] | |
| Responsable de datos | [NOMBRE] | [PUESTO] | [FECHA] | |
| Dueños de sistemas de IA | Ver inventario de sistemas de IA | | | |

Los nombramientos se comunican a las personas involucradas y al personal en general por [MEDIO], y las competencias necesarias de cada rol se documentan en [DESCRIPCIONES DE PUESTO O PERFIL DE COMPETENCIAS].

## 8. Revisión

Este documento se revisa al menos [UNA VEZ AL AÑO], en cada revisión por la dirección y cuando haya cambios en la estructura de la organización, se agregue un sistema de IA con un dueño nuevo, se contrate un proveedor que asuma tareas del ciclo de vida o una auditoría detecte responsabilidades confusas.

## Historial de cambios

| Versión | Fecha | Descripción del cambio | Autor | Aprobó |
|---|---|---|---|---|
| 1.0 | [FECHA] | Emisión inicial | [NOMBRE] | [NOMBRE] |
| | | | | |

## Referencias

- ISO/IEC 42001:2023, cláusulas 5.1, 5.3, 7.2, 9.2 y 9.3.
- ISO/IEC 42001:2023, Anexo A: A.3.2, A.3.3, A.4.6, A.10.2, A.10.3 y A.10.4.
- ISO/IEC 22989, descripción de roles de las partes interesadas en la IA (proveedor, productor, cliente, socio, sujeto de IA y autoridades).
- Documentos relacionados: [SGIA-POL-01], [SGIA-PRO-01], [SGIA-FOR-01], [SGIA-PRO-02], [SGIA-PRO-03]; `inventario-sistemas-ia.xlsx`.
- Guía *Descifrando ISO 42001*, objetivo A.3: https://adriangzmncrz-arch.github.io/descifrando-iso42001/anexo-a/a3-organizacion-interna/

# Procedimiento de gestión del ciclo de vida de los sistemas de IA

| Control del documento | |
|---|---|
| Código | [SGIA-PRO-03] |
| Versión | [1.0] |
| Fecha de aprobación | [FECHA] |
| Elaboró | [NOMBRE] · [PUESTO] |
| Revisó | [NOMBRE] · [PUESTO] |
| Aprobó | [NOMBRE] · [PUESTO] |
| Clasificación | [USO INTERNO] |

Plantilla de *Descifrando ISO 42001* (CC BY-SA 4.0) — adáptala a tu organización; no sustituye a la norma ni es asesoría legal.

> **Instrucciones de uso (borra este bloque antes de aprobar el documento).**
>
> - **Qué cubre:** los controles A.6.1.2 Objetivos para el desarrollo responsable, A.6.1.3 Procesos para el diseño y desarrollo responsable, A.6.2.2 a A.6.2.8 (requisitos, diseño, verificación y validación, despliegue, operación y monitoreo, documentación técnica y registro de eventos), A.7.2 a A.7.6 (datos) y A.5.2 (momento de las evaluaciones de impacto). Da soporte a las cláusulas 6.3, 8.1, 8.2 y 8.4. Los nombres de los controles son traducción libre de referencia.
> - **Para quién:** organizaciones que desarrollan o adaptan IA (secciones 4 a 10) y organizaciones que solo adquieren sistemas de terceros (sección 11, variante simplificada). Si solo usas IA de terceros, puedes conservar únicamente las secciones 1 a 3, 9, 11 y 12.
> - **Qué personalizar:** las etapas y puertas para que coincidan con tu ciclo de desarrollo actual (ágil, cascada o MLOps); quién aprueba cada puerta; los criterios de liberación; la clasificación de cambios.
> - **Qué borrar:** este bloque y los ejemplos en cursiva. Los ejemplos corresponden a Monarca Crédito y Contadores Alameda, empresas ficticias de los casos prácticos de la guía.
> - **Consejo:** no construyas un proceso paralelo al que ya siguen tus equipos. Si tienes un ciclo de desarrollo seguro (por ejemplo, conforme a ISO 27001 A.8.25), agrégale las etapas de datos y evaluación de modelos, las evaluaciones de impacto y los criterios de equidad y supervisión humana.

## 1. Propósito

Definir las etapas, actividades, responsables, puertas de aprobación y registros con los que [NOMBRE DE LA ORGANIZACIÓN] concibe, diseña, desarrolla, prueba, despliega, opera, cambia y retira sus sistemas de IA, para que cada sistema cumpla sus requisitos, los objetivos de desarrollo responsable y los criterios de riesgo e impacto de la organización.

## 2. Alcance

Aplica a todos los sistemas de IA que la organización desarrolla, entrena, ajusta, configura de forma sustancial o integra en sus productos, y a los cambios significativos de sistemas existentes. Los sistemas de terceros que la organización adquiere y usa sin modificarlos siguen la variante simplificada de la sección 11.

## 3. Definiciones

- **Etapa:** conjunto de actividades del ciclo de vida con entradas y salidas definidas.
- **Puerta de aprobación** (*stage gate*): punto de control en el que una persona o comité revisa la evidencia de una etapa y decide aprobar, aprobar con condiciones, regresar a la etapa anterior o cancelar el proyecto.
- **Criterios de liberación:** condiciones medibles que el sistema debe cumplir antes de pasar a producción.
- **Cambio significativo:** modificación que puede alterar el comportamiento, los riesgos o los impactos del sistema (sección 8).
- **Despliegue en sombra** (*shadow deployment*): el sistema nuevo procesa casos reales en paralelo sin que sus resultados se usen, para comparar su desempeño.
- **Retiro:** salida ordenada de operación de un sistema, con tratamiento de sus datos, modelos y registros.

## 4. Objetivos de desarrollo responsable

Los objetivos de IA de la organización se traducen en requisitos y pruebas concretas en cada etapa. [AJUSTA LA TABLA A LOS OBJETIVOS APROBADOS EN TU PLAN DE OBJETIVOS DE IA].

| Objetivo | Cómo se integra en el ciclo de vida | Métrica de ejemplo |
|---|---|---|
| Equidad | Requisitos de equidad en la etapa 1; análisis de representatividad en la etapa 3; pruebas por segmento en la etapa 5; monitoreo por segmento en la etapa 7 | Diferencia en tasa de aprobación entre segmentos con perfil equivalente menor a [UMBRAL] |
| Transparencia y explicabilidad | Requisito de explicaciones en la etapa 1; técnica de explicabilidad elegida en la etapa 2; prueba de comprensión con usuarios en la etapa 5 | Porcentaje de usuarios que entienden el motivo de un resultado |
| Robustez | Pruebas con datos fuera de distribución en la etapa 5; umbrales de deriva en la etapa 7 | Caída máxima de desempeño aceptada ante datos nuevos |
| Seguridad | Modelado de amenazas propias de la IA en la etapa 2; pruebas adversarias en la etapa 5 | Tasa de éxito de ataques en la batería de pruebas |
| Privacidad | Minimización de datos en la etapa 3; evaluación de privacidad antes de la puerta 1 | Variables personales sin justificación documentada: cero |
| Supervisión humana | Diseño de puntos de intervención en la etapa 2; capacitación antes de la puerta 3 | Porcentaje de casos revisados por personas según lo diseñado |
| Sostenibilidad | Elección de un modelo proporcional al problema en la etapa 2 | Costo de cómputo o consumo estimado por cada mil decisiones |

## 5. Visión general de las etapas

| Etapa | Entradas | Actividades clave | Salidas | Responsable | Aprobación |
|---|---|---|---|---|---|
| 1. Concepción y requisitos | Necesidad de negocio, objetivos de IA, inventario | Definir propósito, uso previsto y fuera de alcance; requisitos funcionales, de desempeño, equidad, explicabilidad, privacidad, seguridad y supervisión humana; cribado de impacto; evaluación de riesgos preliminar | Especificación de requisitos; registro en el inventario; cribado de impacto | Dueño del sistema | Puerta 0 |
| 2. Diseño | Especificación de requisitos | Elegir enfoque y tipo de modelo; arquitectura y componentes de terceros; modelado de amenazas; diseño de la supervisión humana y de la interfaz; plan de verificación y validación | Documento de diseño; plan de pruebas; evaluación de impacto completa (si aplica) | Ciencia de datos y desarrollo | Puerta 1 (junto con la etapa 3) |
| 3. Datos | Requisitos y diseño | Identificar fuentes y derechos de uso; adquirir; documentar procedencia; evaluar calidad y representatividad; preparar (limpieza, etiquetado, transformación); separar conjuntos de entrenamiento, validación y prueba | Ficha de los conjuntos de datos; registro de procedencia; reporte de calidad | Responsable de datos | Puerta 1 |
| 4. Desarrollo | Diseño y datos aprobados | Entrenar, ajustar o configurar; versionar código, datos y modelos; pruebas unitarias; documentar decisiones | Modelo o sistema candidato versionado; bitácora de experimentos | Ciencia de datos y desarrollo | — |
| 5. Verificación y validación | Sistema candidato, plan de pruebas | Probar desempeño, equidad por segmento, robustez, seguridad, explicabilidad y supervisión humana contra los criterios de liberación; validación con usuarios o expertos del dominio | Reporte de verificación y validación; riesgos e impacto actualizados | Ciencia de datos y desarrollo, con revisión independiente | Puerta 2 |
| 6. Despliegue | Reporte de verificación y validación aprobado | Plan de despliegue; despliegue en sombra o gradual; capacitación de supervisores; información para usuarios; activación de registros de eventos y monitoreo; plan de reversa | Plan de despliegue ejecutado; ficha del sistema; información para usuarios | Dueño del sistema | Puerta 3 |
| 7. Operación y monitoreo | Sistema en producción | Monitorear desempeño, deriva, equidad, quejas y seguridad; soporte; reparaciones; gestión de incidentes; revisión posterior al despliegue | Reportes de monitoreo; registros de eventos; incidentes | Dueño del sistema | Puerta 4 (revisión a 90 días) |
| 8. Cambio | Solicitud de cambio | Clasificar el cambio; reevaluar riesgos e impacto si es significativo; repetir las etapas necesarias | Registro del cambio; evaluaciones actualizadas | Dueño del sistema | Puerta de cambio |
| 9. Retiro | Decisión de retiro | Plan de retiro; aviso a usuarios y clientes; transición o alternativa; tratamiento de datos, modelos y registros; actualización del inventario | Plan de retiro ejecutado; evidencia de eliminación o conservación | Dueño del sistema | Puerta de retiro |

## 6. Detalle por etapa

### 6.1 Concepción y requisitos

- El dueño del sistema documenta el problema, los beneficios esperados, el uso previsto, los usos fuera de alcance y las personas que se verán afectadas.
- Se definen requisitos medibles: desempeño mínimo, umbrales de equidad, tipo de explicación que recibirá cada parte interesada, supervisión humana, requisitos legales y contractuales, registros de eventos y restricciones de datos.
- Se hace el cribado de la evaluación de impacto [SGIA-FOR-01] y una evaluación de riesgos preliminar [SGIA-PRO-01].
- Se registra el sistema en el inventario con estado "Propuesto".

### 6.2 Diseño

- Se justifica el enfoque elegido (por ejemplo, por qué un modelo interpretable o por qué un modelo de lenguaje de terceros) y se documentan las alternativas descartadas.
- Se documentan la arquitectura, los componentes de terceros y sus condiciones de uso, y los recursos necesarios (herramientas, cómputo y personas).
- Se modelan las amenazas propias de la IA: envenenamiento de datos, inyección de instrucciones, extracción de información, evasión.
- Se diseña la supervisión humana: en qué casos interviene una persona, con qué información y con qué autoridad.
- Se completa la evaluación de impacto cuando el cribado lo indique.

### 6.3 Datos

- Se verifica que la organización tenga derecho a usar cada fuente para la finalidad prevista y, si hay datos personales, que el aviso de privacidad lo cubra.
- Se documentan la procedencia de cada conjunto, las transformaciones aplicadas y quién las hizo.
- Se evalúan los requisitos de calidad: exactitud, completitud, actualidad, representatividad de los grupos afectados y balance de clases.
- Se documentan los métodos de preparación y los criterios para elegirlos.

### 6.4 Desarrollo

- Se versionan código, datos, configuraciones y modelos de forma que cualquier resultado pueda reproducirse.
- Se documentan las decisiones relevantes de entrenamiento o configuración y sus razones.
- Los cambios de alcance detectados durante el desarrollo regresan a la etapa 1.

### 6.5 Verificación y validación

- Las pruebas se ejecutan contra los criterios de liberación definidos antes de ver los resultados.
- Se usan conjuntos de prueba que no se emplearon para entrenar ni ajustar el modelo.
- Una persona que no desarrolló el sistema revisa el reporte de pruebas.
- Se actualizan la evaluación de riesgos y la de impacto con los resultados.

### 6.6 Despliegue

- El plan de despliegue indica ambiente, fecha, despliegue gradual o en sombra, criterios de reversa, responsables y comunicación.
- Antes de liberar, se confirma que los supervisores humanos están capacitados, que la información para usuarios está publicada y que los registros de eventos y el monitoreo funcionan.

### 6.7 Operación y monitoreo

- Se monitorean las métricas y umbrales definidos en la ficha del sistema [SGIA-FOR-02].
- Las alertas y quejas se gestionan conforme al procedimiento de incidentes [SGIA-PRO-02].
- A los 90 días de la salida a producción se realiza una revisión formal (puerta 4) para confirmar que el comportamiento real coincide con el esperado.

### 6.8 Cambio

Se gestiona conforme a la sección 8.

### 6.9 Retiro

- Se documentan el motivo del retiro, la alternativa para los usuarios y la fecha.
- Se avisa con anticipación razonable a usuarios y clientes.
- Se decide qué se conserva (registros, evaluaciones, modelo) y por cuánto tiempo, y qué se elimina, con evidencia.
- Se evalúan los impactos del retiro (por ejemplo, personas que pierden un servicio) y se actualiza el inventario a "Retirado".

## 7. Puertas de aprobación

Cada puerta se documenta con la misma ficha: evidencia presentada, quién decide, resultado (aprobar, aprobar con condiciones, regresar o cancelar), condiciones y fecha. La decisión queda en [MINUTA DEL COMITÉ DE IA O HERRAMIENTA DE FLUJO DE TRABAJO]. Una puerta sin registro se considera no realizada.

### Puerta 0 · Caso de uso

Decide: [COMITÉ DE IA / DUEÑO DEL SISTEMA PARA CASOS VERDES].

- [ ] Propósito, uso previsto y usos fuera de alcance documentados.
- [ ] Clasificación del caso de uso (verde, amarillo o rojo) según la política de IA.
- [ ] Ningún uso prohibido ni línea roja involucrados.
- [ ] Cribado de impacto realizado y profundidad de la evaluación definida.
- [ ] Riesgos preliminares identificados.
- [ ] Dueño del sistema y recursos asignados.

### Puerta 1 · Diseño y datos

Decide: [COMITÉ DE IA].

- [ ] Requisitos medibles aprobados, incluidos los de equidad, explicabilidad, seguridad y supervisión humana.
- [ ] Diseño y arquitectura documentados, con componentes de terceros evaluados.
- [ ] Derechos de uso, procedencia y calidad de los datos verificados.
- [ ] Evaluación de privacidad hecha si hay datos personales.
- [ ] Evaluación de impacto completa, si aplica, sin impactos Críticos sin mitigar.
- [ ] Plan de verificación y validación con criterios de liberación definidos.

### Puerta 2 · Criterios de liberación

Decide: [COMITÉ DE IA O DUEÑO DEL SISTEMA, SEGÚN EL RIESGO].

- [ ] Todas las pruebas del plan ejecutadas y documentadas.
- [ ] Criterios de desempeño, equidad, robustez y seguridad cumplidos, o desviaciones aceptadas por escrito.
- [ ] Revisión independiente del reporte de pruebas.
- [ ] Riesgos residuales dentro de los criterios de aceptación.
- [ ] Documentación técnica y ficha del sistema actualizadas.

### Puerta 3 · Salida a producción

Decide: [COMITÉ DE IA; EN SISTEMAS DE RIESGO BAJO, EL DUEÑO DEL SISTEMA].

- [ ] Resultados del despliegue en sombra o piloto comparables con los de las pruebas.
- [ ] Supervisores humanos capacitados.
- [ ] Información para usuarios y avisos de interacción con IA publicados.
- [ ] Registros de eventos y monitoreo activos, con umbrales y responsables.
- [ ] Plan de reversa probado.
- [ ] Inventario actualizado a "En producción".

### Puerta 4 · Revisión a 90 días

Decide: [DUEÑO DEL SISTEMA, INFORMANDO AL COMITÉ DE IA].

- [ ] Desempeño real dentro de los umbrales.
- [ ] Sin brechas de equidad nuevas.
- [ ] Incidentes y quejas analizados.
- [ ] La supervisión humana funciona como se diseñó (por ejemplo, los supervisores no confirman todo automáticamente).
- [ ] Evaluaciones de riesgo e impacto confirmadas o actualizadas.

### Carril rápido para sistemas de bajo riesgo

Los sistemas clasificados como verdes, sin decisiones sobre personas y con riesgo Bajo pueden combinar las puertas 0 a 3 en una sola revisión del dueño del sistema y del responsable del SGIA, siempre que se conserve la evidencia de cada casilla aplicable.

*Ejemplo (Monarca Crédito): en Score Monarca v3, el Comité de Modelos decide en las puertas 1 y 2, y el Director de Riesgos, como dueño del modelo, firma la salida a producción después de cuatro semanas de despliegue en sombra.*

## 8. Gestión de cambios

### 8.1 Clasificación de los cambios

| Clase | Criterio | Ejemplos | Qué se requiere |
|---|---|---|---|
| Menor | No altera el comportamiento del modelo ni a las personas afectadas | Corrección de textos de la interfaz; parche de infraestructura sin cambio de modelo | Registro del cambio, pruebas de regresión y aprobación del dueño del sistema |
| Significativo | Puede alterar el comportamiento, los riesgos o los impactos | Reentrenamiento con datos nuevos; nueva versión del modelo del proveedor; nueva variable; cambio de umbrales de decisión; menor supervisión humana; integración con otro sistema | Reevaluación de riesgos e impacto; repetir las etapas 5 y 6; puerta de cambio ante el Comité de IA |
| Mayor | Cambia el propósito, la población, la jurisdicción o el nivel de automatización | Usar el sistema para un producto nuevo; ofrecerlo en otro país; pasar de recomendación a decisión automática | Regresar a la etapa 1 y recorrer todas las puertas |

### 8.2 Proceso

1. El solicitante registra el cambio en [HERRAMIENTA DE GESTIÓN DE CAMBIOS] con su descripción y motivo.
2. El dueño del sistema lo clasifica con la tabla anterior. Si duda, lo trata como significativo.
3. Se ejecutan las actividades requeridas y se actualizan la ficha del sistema y el registro de versiones.
4. Se aprueba en la instancia correspondiente y se programa la liberación con plan de reversa.
5. Los cambios no planificados (por ejemplo, un cambio de versión del proveedor sin aviso) se tratan como incidente y, después, como cambio significativo.

*Ejemplo: cuando Monarca Crédito decide incorporar datos de una nueva fuente para entrenar la versión 4 del score, el cambio se clasifica como significativo: se actualizan la evaluación de impacto y la de riesgos, se repiten las pruebas por segmento y el Comité de Modelos decide en la puerta de cambio.*

## 9. Cuándo hacer evaluaciones de impacto y de riesgos

| Momento | Evaluación de impacto | Evaluación de riesgos |
|---|---|---|
| Etapa 1 · Concepción | Cribado | Preliminar |
| Antes de la puerta 1 | Completa, si el cribado lo indica | Completa |
| Antes de la puerta 3 | Actualizada con resultados de pruebas | Actualizada con riesgos residuales |
| Puerta 4 · Revisión a 90 días | Confirmación con datos reales | Confirmación con datos reales |
| Operación | Según la frecuencia de su severidad | Según la frecuencia de su clasificación |
| Cambio significativo o mayor | Siempre | Siempre |
| Incidente Alto o Crítico | Si revela un impacto no previsto | Siempre |
| Retiro | Impactos del retiro en usuarios | Riesgos del retiro (datos, continuidad) |

## 10. Documentación técnica

La documentación técnica se adapta a cada público. El dueño del sistema decide qué documento recibe cada parte interesada y en qué formato.

| Documento | Contenido principal | Público | Responsable | Etapa |
|---|---|---|---|---|
| Especificación de requisitos | Propósito, uso previsto, requisitos medibles | Equipo interno, auditoría | Dueño del sistema | 1 |
| Documento de diseño | Enfoque, arquitectura, componentes, amenazas, supervisión humana | Equipo interno, auditoría | Ciencia de datos y desarrollo | 2 |
| Ficha de los conjuntos de datos | Fuentes, procedencia, calidad, preparación, sesgos conocidos | Equipo interno, auditoría | Responsable de datos | 3 |
| Reporte de verificación y validación | Pruebas, resultados, desviaciones aceptadas | Comité de IA, auditoría | Ciencia de datos y desarrollo | 5 |
| Plan de despliegue | Ambiente, estrategia, reversa, comunicación | Operación, Comité de IA | Dueño del sistema | 6 |
| Ficha del sistema [SGIA-FOR-02] | Resumen técnico y operativo | Todas las partes interesadas que lo requieran | Dueño del sistema | 6 en adelante |
| Manual de operación y monitoreo | Umbrales, alertas, soporte, reparaciones | Operación | Dueño del sistema | 6 |
| Información para usuarios y clientes | Uso previsto, límites, supervisión, contacto | Usuarios, clientes | Dueño del sistema | 6 |
| Documentación para autoridades | La que exija cada jurisdicción | Autoridades | Legal y cumplimiento | Según se requiera |
| Plan de retiro | Motivo, transición, datos, registros | Usuarios, clientes, auditoría | Dueño del sistema | 9 |

## 11. Variante simplificada para sistemas de terceros

Cuando la organización adquiere un sistema de IA y lo usa sin desarrollarlo, el ciclo de vida se reduce a cinco etapas y tres puertas.

| Etapa | Actividades clave | Salidas | Puerta |
|---|---|---|---|
| Adquisición | Definir la necesidad y el uso previsto; clasificar el caso de uso; evaluar al proveedor; evaluar riesgos e impacto; negociar el contrato | Evaluación del proveedor; contrato con cláusulas de IA; evaluaciones | Puerta T0 · Aprobación de la compra |
| Configuración | Configurar el sistema; preparar los datos que aporta la organización (por ejemplo, la base de conocimiento); diseñar avisos y supervisión humana | Configuración documentada; base de conocimiento aprobada | — |
| Aceptación | Probar con casos propios y representativos, incluidos casos difíciles y de abuso; verificar avisos y traspaso a humanos | Reporte de pruebas de aceptación | Puerta T1 · Aceptación y salida a producción |
| Operación | Supervisión humana; monitoreo de calidad y quejas; revisión de los cambios de versión que avise el proveedor; gestión de incidentes | Reportes de monitoreo; registro de cambios del proveedor | — |
| Retiro | Plan de salida; aviso a usuarios; devolución o eliminación de datos por el proveedor, con evidencia | Constancia de eliminación; inventario actualizado | Puerta T2 · Retiro |

**Preguntas mínimas de evaluación del proveedor (puerta T0):**

- [ ] ¿Usa nuestros datos o los de nuestros clientes para entrenar o mejorar sus modelos? ¿Se puede desactivar por contrato?
- [ ] ¿Dónde procesa y almacena los datos, y con qué subcontratistas?
- [ ] ¿Avisa con anticipación los cambios de versión del modelo y sus efectos esperados?
- [ ] ¿Qué documentación entrega sobre desempeño, limitaciones y pruebas de seguridad?
- [ ] ¿Cómo y en qué plazo notifica incidentes?
- [ ] ¿Qué registros de eventos podemos obtener?
- [ ] ¿Cuenta con certificaciones o informes de auditoría relevantes?
- [ ] ¿Cómo es la salida: portabilidad, devolución y eliminación de datos?

*Ejemplo (Contadores Alameda): antes de contratar "Alma", el despacho evaluó a BotNorte con estas preguntas (puerta T0), cargó y revisó su base de preguntas frecuentes contra el calendario fiscal (configuración), probó 80 preguntas reales de clientes, incluidas preguntas fuera de tema y con datos personales (aceptación, puerta T1), y revisa cada mes las conversaciones con traspaso a humano (operación).*

## 12. Registros

| Registro | Responsable | Conservación |
|---|---|---|
| Especificaciones, diseños y fichas de datos | Dueño del sistema | [PLAZO] |
| Decisiones de cada puerta de aprobación | Comité de IA o dueño del sistema | [PLAZO] |
| Reportes de verificación, validación y aceptación | Ciencia de datos y desarrollo | [PLAZO] |
| Registro de cambios y versiones | Dueño del sistema | [PLAZO] |
| Evaluaciones de riesgos e impacto vinculadas | Responsable del SGIA | [PLAZO] |
| Evidencia de retiro y eliminación | Dueño del sistema | [PLAZO] |

## Historial de cambios

| Versión | Fecha | Descripción del cambio | Autor | Aprobó |
|---|---|---|---|---|
| 1.0 | [FECHA] | Emisión inicial | [NOMBRE] | [NOMBRE] |
| | | | | |

## Referencias

- ISO/IEC 42001:2023, cláusulas 6.1.2, 6.1.4, 6.2, 6.3, 7.5, 8.1, 8.2 y 8.4.
- ISO/IEC 42001:2023, Anexo A: A.4.2 a A.4.6, A.5.2, A.6.1.2, A.6.1.3, A.6.2.2, A.6.2.3, A.6.2.4, A.6.2.5, A.6.2.6, A.6.2.7, A.6.2.8, A.7.2 a A.7.6, A.8.2, A.9.4, A.10.3 y A.10.4.
- ISO/IEC 5338 (procesos del ciclo de vida de sistemas de IA) e ISO/IEC 22989 (conceptos y terminología), como orientación.
- Documentos relacionados: [SGIA-POL-01], [SGIA-ORG-01], [SGIA-PRO-01], [SGIA-FOR-01], [SGIA-FOR-02], [SGIA-PRO-02]; `inventario-sistemas-ia.xlsx`.
- Guía *Descifrando ISO 42001*, objetivo A.6: https://adriangzmncrz-arch.github.io/descifrando-iso42001/anexo-a/a6-ciclo-de-vida/

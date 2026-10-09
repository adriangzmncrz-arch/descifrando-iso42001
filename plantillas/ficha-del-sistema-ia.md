# Ficha del sistema de IA

| Control del documento | |
|---|---|
| Código | [SGIA-FOR-02] |
| Versión de la ficha | [1.0] |
| Fecha | [FECHA] |
| Elaboró | [NOMBRE] · [PUESTO] |
| Revisó | [NOMBRE] · [PUESTO] |
| Aprobó | [NOMBRE] · [DUEÑO DEL SISTEMA DE IA] |
| Clasificación | [USO INTERNO / CONFIDENCIAL; LA SECCIÓN 18 PUEDE SER PÚBLICA] |

Plantilla de *Descifrando ISO 42001* (CC BY-SA 4.0) — adáptala a tu organización; no sustituye a la norma ni es asesoría legal.

> **Instrucciones de uso (borra este bloque en cada ficha que llenes).**
>
> - **Qué es:** una ficha del sistema (*system card*) o ficha del modelo (*model card*) reúne en un solo lugar lo que cualquier parte interesada necesita saber de un sistema de IA: para qué sirve, con qué está hecho, qué tan bien funciona, dónde falla y cómo se supervisa.
> - **Qué cubre:** los controles A.4.2 a A.4.6 (recursos), A.6.2.3 Documentación del diseño y desarrollo, A.6.2.7 Documentación técnica, A.6.2.8 Registro de eventos, A.7.3 a A.7.6 (datos) y A.8.2 Documentación del sistema e información para usuarios. Los nombres de los controles son traducción libre de referencia.
> - **Una ficha por sistema** y versión relevante. Se actualiza con cada cambio significativo y antes de cada puerta de aprobación del ciclo de vida.
> - **Si el sistema es de un tercero,** llena lo que puedas con la documentación del proveedor y marca como "Solicitado al proveedor" lo que falte. Las secciones 2, 3, 4, 10, 11, 12 y 18 siempre son responsabilidad de tu organización.
> - **Qué personalizar:** las métricas de la sección 7 según el tipo de sistema (clasificación, generación, extracción), los segmentos de análisis y los campos de seguridad.
> - **Qué borrar:** este bloque y los ejemplos en cursiva. Los ejemplos corresponden a Conversa Labs, empresa ficticia de los casos prácticos de la guía.

## 1. Identificación

| Campo | Dato |
|---|---|
| Nombre del sistema | [NOMBRE] |
| Identificador en el inventario | [IA-NN] |
| Versión del sistema y fecha de liberación | [VERSIÓN] · [FECHA] |
| Dueño del sistema | [NOMBRE] · [PUESTO] |
| Rol de la organización | [USA / DESARROLLA / PROVEE / VARIOS] |
| Estado | [PROPUESTO / PILOTO / EN PRODUCCIÓN / SUSPENDIDO / RETIRADO] |
| Clasificación de riesgo vigente | [BAJO / MEDIO / ALTO / CRÍTICO] · evaluación del [FECHA] |
| Evaluación de impacto vigente | [EIA-NN] · severidad residual [NIVEL] |

*Ejemplo: Conversa, asistente virtual con IA generativa para atención a clientes · IA-01 · versión 4.2 · dueña: Responsable de Confianza y Seguridad · rol: provee y desarrolla · en producción.*

## 2. Propósito y uso previsto

[DESCRIBE EN DOS O TRES PÁRRAFOS QUÉ HACE EL SISTEMA, QUÉ PROBLEMA RESUELVE, EN QUÉ PROCESO SE USA Y QUÉ DECISIONES APOYA. INCLUYE EL NIVEL DE AUTOMATIZACIÓN Y LAS CONDICIONES DE USO: IDIOMAS, CANALES, HORARIOS, VOLUMEN].

*Ejemplo: responde preguntas de los usuarios finales de cada cliente a partir de la base de conocimiento que ese cliente carga; cuando no encuentra respaldo en la base o detecta un tema sensible, transfiere la conversación a un agente humano del cliente.*

## 3. Usos fuera de alcance

El sistema **no** está diseñado ni aprobado para:

- [USO NO PREVISTO 1; POR EJEMPLO, DAR DIAGNÓSTICOS MÉDICOS O ASESORÍA LEGAL O FISCAL PERSONALIZADA].
- [USO NO PREVISTO 2; POR EJEMPLO, TOMAR DECISIONES DE ELEGIBILIDAD SOBRE PERSONAS].
- [USO NO PREVISTO 3; POR EJEMPLO, INTERACTUAR CON MENORES DE EDAD SIN SUPERVISIÓN].

Cualquier uso fuera de esta lista y de la sección 2 requiere una nueva evaluación de riesgos e impacto.

## 4. Usuarios previstos y personas afectadas

| Grupo | Cómo interactúa con el sistema | Conocimientos que se esperan |
|---|---|---|
| [OPERADORES O USUARIOS INTERNOS] | | |
| [CLIENTES QUE LO CONFIGURAN] | | |
| [USUARIOS FINALES] | | |
| [PERSONAS SOBRE QUIENES SE PRODUCEN RESULTADOS] | | |

## 5. Arquitectura y componentes

### 5.1 Descripción general

[DESCRIBE EL FLUJO: QUÉ ENTRA, QUÉ COMPONENTES LO PROCESAN Y QUÉ SALE. ADJUNTA O ENLAZA EL DIAGRAMA DE ARQUITECTURA Y EL DE FLUJO DE DATOS].

### 5.2 Componentes

| Componente | Función | Propio o de tercero | Proveedor y versión | Notas (licencia, región de procesamiento, cláusulas) |
|---|---|---|---|---|
| [MODELO DE LENGUAJE O MODELO PREDICTIVO] | | | | |
| [MÓDULO DE RECUPERACIÓN O BASE DE CONOCIMIENTO] | | | | |
| [ORQUESTACIÓN Y REGLAS DE NEGOCIO] | | | | |
| [FILTROS DE SEGURIDAD] | | | | |
| [INTERFAZ CON EL USUARIO] | | | | |
| [INTEGRACIONES] | | | | |

*Ejemplo (Conversa Labs):* modelo de lenguaje de un proveedor fundacional vía API (tercero; por contrato, sin uso de datos para entrenamiento) + generación aumentada por recuperación (*retrieval-augmented generation*, RAG) sobre la base de cada cliente (propio) + orquestación propia + filtros de seguridad (*guardrails*) de entrada y salida (propios) + traspaso a agente humano (propio) + panel de analítica (propio).

## 6. Datos

### 6.1 Conjuntos de datos

| Conjunto | Uso | Fuente y forma de obtención | Periodo y volumen | ¿Datos personales? ¿Sensibles? | Preparación aplicada | Requisitos de calidad y resultado | Sesgos o vacíos conocidos | Retención |
|---|---|---|---|---|---|---|---|---|
| [NOMBRE] | Entrenamiento | | | | | | | |
| [NOMBRE] | Validación | | | | | | | |
| [NOMBRE] | Prueba | | | | | | | |
| [NOMBRE] | Producción (datos de entrada) | | | | | | | |

Si el sistema no se entrena con datos propios (por ejemplo, porque usa un modelo de terceros sin ajuste), indícalo y documenta los datos que sí aporta la organización, como la base de conocimiento, las instrucciones del sistema o los ejemplos de evaluación.

### 6.2 Procedencia

| Pregunta | Respuesta |
|---|---|
| ¿De dónde viene cada conjunto y quién lo entregó? | |
| ¿Qué transformaciones sufrió y quién las hizo? | |
| ¿Dónde se registra la cadena de cambios (versión, fecha, responsable)? | |
| ¿Qué derechos de uso tiene la organización sobre los datos? | |

### 6.3 Datos personales

| Pregunta | Respuesta |
|---|---|
| Categorías de datos personales tratados | |
| Finalidad y base legal o consentimiento | |
| ¿El aviso de privacidad informa este tratamiento? | [SÍ / NO / EN ACTUALIZACIÓN] |
| Transferencias o remisiones a terceros (incluidos proveedores del modelo) | |
| Medidas de minimización y anonimización | |
| Referencia a la EIPD o análisis de privacidad | [CÓDIGO] |

## 7. Desempeño y métricas

### 7.1 Métricas generales

| Métrica | Definición | Umbral de aceptación | Resultado | Conjunto de prueba y fecha |
|---|---|---|---|---|
| [POR EJEMPLO, TASA DE RESPUESTAS CORRECTAS Y RESPALDADAS EN LA BASE] | | | | |
| [TASA DE RESPUESTAS SIN RESPALDO (ALUCINACIONES)] | | | | |
| [TASA DE TRASPASO A HUMANO] | | | | |
| [TASA DE ÉXITO DE ATAQUES EN PRUEBAS ADVERSARIAS] | | | | |
| [TIEMPO DE RESPUESTA] | | | | |

Para modelos predictivos, usa métricas como exactitud, área bajo la curva, tasa de falsos positivos y negativos o error medio, según el caso.

### 7.2 Desempeño por segmento

| Segmento | Tamaño de la muestra | Métrica principal | Diferencia frente al promedio | ¿Dentro del umbral de equidad? |
|---|---|---|---|---|
| [SEXO] | | | | |
| [GRUPO DE EDAD] | | | | |
| [REGIÓN O ENTIDAD FEDERATIVA] | | | | |
| [IDIOMA O VARIANTE DEL ESPAÑOL] | | | | |
| [TIPO DE CLIENTE O SECTOR] | | | | |

*Ejemplo: Conversa mide por separado la tasa de respuestas correctas en español de México, Colombia, Chile y España, porque los modismos y los nombres de trámites cambian entre países.*

## 8. Limitaciones conocidas

- [LIMITACIÓN 1; POR EJEMPLO, PUEDE GENERAR RESPUESTAS PLAUSIBLES PERO INCORRECTAS CUANDO LA BASE DE CONOCIMIENTO ESTÁ DESACTUALIZADA].
- [LIMITACIÓN 2; POR EJEMPLO, MENOR DESEMPEÑO CON MENSAJES MUY LARGOS O CON ERRORES DE ESCRITURA].
- [LIMITACIÓN 3; POR EJEMPLO, NO RECONOCE LENGUAS ORIGINARIAS].
- [CONDICIONES EN QUE EL SISTEMA NO DEBE USARSE].

## 9. Riesgos e impacto

| Concepto | Resumen | Referencia |
|---|---|---|
| Riesgos principales y su clasificación residual | [RESUMEN DE DOS O TRES LÍNEAS] | `matriz-riesgos-ia.xlsx`, IDs [R-NN] |
| Impactos principales en personas y sociedad | [RESUMEN] | Evaluación de impacto [EIA-NN] |
| Controles del Anexo A y controles propios más relevantes | [LISTA] | Declaración de Aplicabilidad |
| Fecha de la próxima evaluación | [FECHA] | |

## 10. Supervisión humana

| Aspecto | Descripción |
|---|---|
| Modelo de supervisión | [LA PERSONA DECIDE CON APOYO / REVISA ANTES DE QUE SURTA EFECTO / SUPERVISA Y PUEDE INTERVENIR] |
| Quién supervisa y con qué competencias | |
| En qué casos interviene una persona | |
| Cómo se anula, corrige o detiene el sistema | |
| Medidas contra la confianza excesiva | |
| Cómo pueden las personas afectadas pedir revisión humana | |

## 11. Instrucciones de uso

Instrucciones para quienes operan el sistema o lo configuran:

1. [REQUISITOS PREVIOS: CAPACITACIÓN, ACCESOS, CONFIGURACIÓN MÍNIMA].
2. [CÓMO USARLO DENTRO DEL USO PREVISTO].
3. [QUÉ REVISAR EN CADA RESULTADO ANTES DE USARLO].
4. [QUÉ HACER ANTE UN RESULTADO SOSPECHOSO O UN COMPORTAMIENTO ANÓMALO].
5. [A QUIÉN Y CÓMO REPORTAR INCIDENTES].

*Ejemplo para clientes de Conversa: antes de activar una intención nueva, cargue los documentos fuente vigentes, revise las respuestas de prueba del panel y confirme que el aviso de interacción con IA está activo en su canal.*

## 12. Monitoreo y deriva

| Qué se monitorea | Métrica o señal | Frecuencia | Umbral de alerta | Acción cuando se rebasa | Responsable |
|---|---|---|---|---|---|
| Desempeño | | | | | |
| Deriva de los datos de entrada (*data drift*) | | | | | |
| Deriva del desempeño o del concepto | | | | | |
| Equidad por segmento | | | | | |
| Quejas y reportes de usuarios | | | | | |
| Cambios de versión del proveedor | | | | | |
| Seguridad (intentos de manipulación) | | | | | |

## 13. Registro de eventos

| Aspecto | Descripción |
|---|---|
| Eventos que se registran | [ENTRADAS, SALIDAS, VERSIÓN DEL MODELO, DECISIONES HUMANAS, ERRORES, ALERTAS, CAMBIOS DE CONFIGURACIÓN] |
| Etapas del ciclo de vida en que se registra | [COMO MÍNIMO, DURANTE LA OPERACIÓN] |
| Dónde se almacenan y cómo se protegen | |
| Plazo de conservación | |
| Quién puede consultarlos y para qué | |
| Tratamiento de datos personales en los registros | [MINIMIZACIÓN, SEUDONIMIZACIÓN] |

## 14. Seguridad

| Amenaza | Aplica | Control implementado | Última prueba |
|---|---|---|---|
| Inyección de instrucciones (directa o mediante documentos) | | | |
| Envenenamiento de datos de entrenamiento o de la base de conocimiento | | | |
| Extracción de información del modelo o de otros clientes | | | |
| Evasión o manipulación de entradas | | | |
| Abuso de capacidad o de costos | | | |
| Acceso no autorizado a configuración o registros | | | |

## 15. Recursos

| Recurso | Descripción |
|---|---|
| Herramientas y bibliotecas | [PLATAFORMAS, BIBLIOTECAS, HERRAMIENTAS DE EVALUACIÓN] |
| Infraestructura y cómputo | [NUBE, REGIÓN, CAPACIDAD] |
| Consumo estimado de energía o recursos, si se conoce | |
| Personas y competencias | [ROLES, NÚMERO DE PERSONAS, COMPETENCIAS CLAVE] |

## 16. Versión y cambios

| Versión | Fecha | Cambio | ¿Significativo? | Evaluaciones actualizadas | Aprobó |
|---|---|---|---|---|---|
| [VERSIÓN] | [FECHA] | [DESCRIPCIÓN] | [SÍ / NO] | [R-NN, EIA-NN] | [NOMBRE] |
| | | | | | |

## 17. Contacto

| Para | Contacto |
|---|---|
| Dudas sobre el uso del sistema | [CORREO O CANAL] |
| Reporte de incidentes o impactos adversos | [CORREO O CANAL] |
| Solicitudes de personas afectadas (revisión humana, derechos ARCO) | [CORREO O CANAL] |

## 18. Información para usuarios finales

Versión en lenguaje claro para publicar en el canal donde opera el sistema, en el sitio web o en la documentación para clientes. Te recomendamos que no pase de una página y que la pruebes con personas ajenas al proyecto.

**[NOMBRE DEL SISTEMA]: lo que debes saber**

- **Qué es:** [NOMBRE DEL SISTEMA] es un asistente automatizado que usa inteligencia artificial para [PROPÓSITO EN UNA FRASE]. No es una persona.
- **Qué puede hacer por ti:** [TAREAS PRINCIPALES].
- **Qué no puede hacer:** [LÍMITES CLAROS; POR EJEMPLO, NO DA ASESORÍA PERSONALIZADA NI TOMA DECISIONES SOBRE TU CUENTA].
- **Puede equivocarse:** sus respuestas pueden contener errores. Antes de tomar una decisión importante, confirma la información en [FUENTE OFICIAL] o con una persona de nuestro equipo.
- **Hablar con una persona:** en cualquier momento puedes escribir [PALABRA O BOTÓN] o comunicarte a [CANAL] para que te atienda una persona.
- **Tus datos:** usamos la información que compartes en esta conversación para [FINALIDADES]. No la usamos para [USOS EXCLUIDOS]. Consulta nuestro aviso de privacidad en [ENLACE O UBICACIÓN].
- **Si algo sale mal:** si una respuesta te causó un problema o te pareció injusta, repórtalo en [CANAL]. Revisaremos tu caso en un plazo de [NÚMERO] días hábiles.

*Ejemplo de mensaje inicial en WhatsApp (Contadores Alameda): "Hola, soy Alma, la asistente virtual de Contadores Alameda. Soy un sistema automatizado y puedo ayudarte con fechas de declaraciones, el estatus de tus trámites y la agenda de citas. Si prefieres hablar con tu contador, escribe ASESOR".*

## Historial de cambios

| Versión | Fecha | Descripción del cambio | Autor | Aprobó |
|---|---|---|---|---|
| 1.0 | [FECHA] | Emisión inicial de la ficha | [NOMBRE] | [NOMBRE] |
| | | | | |

## Referencias

- ISO/IEC 42001:2023, cláusulas 7.5 y 8.1.
- ISO/IEC 42001:2023, Anexo A: A.4.2, A.4.3, A.4.4, A.4.5, A.4.6, A.6.2.3, A.6.2.6, A.6.2.7, A.6.2.8, A.7.3, A.7.4, A.7.5, A.7.6, A.8.2, A.9.4 y A.10.4.
- Documentos relacionados: [SGIA-PRO-03], [SGIA-PRO-01], [SGIA-FOR-01], [SGIA-PRO-02]; `inventario-sistemas-ia.xlsx`; `matriz-riesgos-ia.xlsx`.
- Guía *Descifrando ISO 42001*, objetivo A.6 (documentación técnica y registro de eventos): https://adriangzmncrz-arch.github.io/descifrando-iso42001/anexo-a/a6-ciclo-de-vida/

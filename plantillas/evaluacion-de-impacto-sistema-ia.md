# Evaluación de impacto del sistema de IA

| Control del documento | |
|---|---|
| Código | [SGIA-FOR-01] |
| Versión del formulario | [1.0] |
| Fecha de aprobación del formulario | [FECHA] |
| Elaboró | [NOMBRE] · [PUESTO] |
| Revisó | [NOMBRE] · [PUESTO] |
| Aprobó | [NOMBRE] · [PUESTO] |
| Clasificación | [CONFIDENCIAL] |

Plantilla de *Descifrando ISO 42001* (CC BY-SA 4.0) — adáptala a tu organización; no sustituye a la norma ni es asesoría legal.

> **Instrucciones de uso (borra este bloque en cada evaluación que llenes).**
>
> - **Qué cubre:** las cláusulas 6.1.4 y 8.4 y los controles A.5.2 Proceso de evaluación de impacto, A.5.3 Documentación de las evaluaciones de impacto, A.5.4 Evaluación del impacto en individuos o grupos y A.5.5 Evaluación de impactos sociales. Los nombres de los controles son traducción libre de referencia.
> - **Relación con otras normas:** la estructura es propia de la guía y sigue, en lo conceptual, la lógica de ISO/IEC 42005 (norma de orientación para evaluaciones de impacto de sistemas de IA). Si necesitas un método más detallado, consulta esa norma.
> - **Cómo llenarlo:** un formulario por sistema (o por versión relevante del sistema). Llena las partes A y B primero: el cribado decide si haces una evaluación completa, intermedia o breve. En una evaluación breve basta con las partes A a F, una revisión rápida de las tablas I y J y la decisión.
> - **Qué personalizar:** la escala de la parte H (debe ser coherente con tus criterios de riesgo), las áreas de impacto de las partes I y J según tu sector, quién aprueba según la severidad y los plazos de conservación.
> - **Qué borrar:** este bloque, los ejemplos en cursiva y las filas que no apliquen (marca "No aplica" con una razón en lugar de borrar las áreas de impacto: al auditor le interesa saber que las consideraste).
> - **Conexión con riesgos:** la parte L traslada los resultados a la *Metodología de evaluación y tratamiento de riesgos de IA* [SGIA-PRO-01] y a `matriz-riesgos-ia.xlsx`.

## Parte A. Datos generales

| Campo | Dato |
|---|---|
| Identificador de la evaluación | [EIA-NN] |
| Sistema de IA e identificador del inventario | [NOMBRE DEL SISTEMA] · [IA-NN] |
| Versión del sistema evaluada | [VERSIÓN] |
| Rol de la organización frente al sistema | [USA / DESARROLLA / PROVEE / VARIOS] |
| Dueño del sistema | [NOMBRE] · [PUESTO] |
| Evaluador o evaluadora responsable | [NOMBRE] · [PUESTO] |
| Participantes | [NOMBRES, ÁREAS O EXPERTOS EXTERNOS] |
| Tipo de evaluación | [INICIAL / PERIÓDICA / POR CAMBIO SIGNIFICATIVO / POR INCIDENTE] |
| Profundidad (según cribado) | [COMPLETA / INTERMEDIA / BREVE] |
| Fecha de inicio y de cierre | [FECHA] · [FECHA] |
| Documentos relacionados | Ficha del sistema [SGIA-FOR-02]; EIPD [CÓDIGO]; registro de riesgos [IDS]; evaluación anterior [EIA-NN] |

## Parte B. Disparador y cribado

### B.1 ¿Qué detonó esta evaluación?

- [ ] Sistema nuevo o caso de uso nuevo.
- [ ] Revisión programada (fecha prevista en la evaluación anterior).
- [ ] Cambio de propósito, de uso o de población atendida.
- [ ] Nuevos datos o nuevas fuentes de datos.
- [ ] Nueva versión del modelo (propia o del proveedor).
- [ ] Reducción de la supervisión humana o mayor automatización.
- [ ] Llegada a un país o jurisdicción nuevos.
- [ ] Incidente, queja o reporte de impacto adverso.
- [ ] Cambio legal, regulatorio o contractual.
- [ ] Otro: [DESCRIBE].

### B.2 Cribado de profundidad

| Pregunta | Sí / No | Comentario |
|---|---|---|
| ¿El sistema influye en el acceso de personas a crédito, empleo, educación, salud, vivienda, seguros o servicios públicos? | | |
| ¿Toma o ejecuta decisiones sobre personas sin intervención humana, o con una intervención mínima? | | |
| ¿Trata datos personales sensibles, o datos de niñas, niños u otros grupos en situación de vulnerabilidad? | | |
| ¿La última evaluación de riesgos lo clasificó como Alto o Crítico? | | |
| ¿Interactúa directamente con el público o genera contenido que llega a terceros? | | |
| ¿Es una herramienta de uso interno, sin decisiones sobre personas? | | |

**Regla de decisión:** si alguna de las cuatro primeras respuestas es "Sí", la evaluación es **completa**. Si solo la quinta es "Sí", es al menos **intermedia**. Si únicamente aplica la sexta, puede ser **breve**, pero se documenta.

## Parte C. Alcance de la evaluación

| Campo | Descripción |
|---|---|
| Componentes incluidos | [MODELO, INTERFAZ, BASE DE CONOCIMIENTO, INTEGRACIONES] |
| Componentes excluidos y por qué | |
| Etapas del ciclo de vida consideradas | [DISEÑO, DESPLIEGUE, OPERACIÓN, RETIRO] |
| Funciones o casos de uso evaluados | |
| Supuestos y limitaciones de esta evaluación | [POR EJEMPLO, NO SE TUVO ACCESO A LOS DATOS DE ENTRENAMIENTO DEL PROVEEDOR] |

## Parte D. Descripción del sistema y su uso

### D.1 Propósito y beneficios esperados

[DESCRIBE QUÉ PROBLEMA RESUELVE EL SISTEMA, PARA QUIÉN Y QUÉ BENEFICIOS SE ESPERAN, INCLUIDOS LOS BENEFICIOS PARA LAS PERSONAS AFECTADAS].

### D.2 Uso previsto

| Aspecto | Descripción |
|---|---|
| Quién usa el sistema | |
| Sobre quién produce resultados | |
| Dónde y por qué canal opera | [APP, WHATSAPP, SITIO WEB, SISTEMA INTERNO] |
| Qué resultado produce | [PUNTAJE, RECOMENDACIÓN, RESPUESTA, CONTENIDO] |
| Qué decisión apoya o toma | |
| Nivel de automatización | [LA PERSONA DECIDE CON APOYO / LA PERSONA REVISA ANTES DE QUE SURTA EFECTO / EL SISTEMA DECIDE Y LA PERSONA SUPERVISA / TOTALMENTE AUTOMÁTICO] |
| Volumen aproximado | [DECISIONES O INTERACCIONES POR MES] |

### D.3 Usos fuera de alcance

[USOS PARA LOS QUE EL SISTEMA NO FUE APROBADO Y QUE DEBEN EVITARSE].

### D.4 Uso indebido razonablemente previsible

| Escenario de uso indebido | Quién podría hacerlo | ¿Por qué es previsible? | Salvaguarda existente o propuesta |
|---|---|---|---|
| | | | |
| | | | |

*Ejemplo (Monarca Crédito): el área de cobranza usa el puntaje de Score Monarca v3 para decidir a qué clientes presionar más; es previsible porque el puntaje está disponible en el mismo sistema. Salvaguarda: restricción de acceso por rol y uso prohibido documentado.*

## Parte E. Contexto técnico y social

### E.1 Contexto técnico

| Aspecto | Descripción |
|---|---|
| Tipo de IA y técnica | [IA GENERATIVA, APRENDIZAJE AUTOMÁTICO, VISIÓN] |
| Componentes de terceros | [MODELOS, API, PLATAFORMAS] |
| Datos de entrada y de entrenamiento relevantes | |
| Capacidad de explicar resultados | |
| Dependencias críticas y modos de falla conocidos | |

### E.2 Contexto social

Describe las condiciones de las personas y comunidades donde opera el sistema que pueden aumentar o reducir los impactos: nivel de alfabetización digital o financiera, idioma y lenguas originarias, acceso a internet, desigualdades regionales, asimetría de poder entre la organización y las personas, existencia de alternativas al sistema y capacidad de las personas para impugnar un resultado.

[DESCRIPCIÓN].

### E.3 Jurisdicciones y requisitos aplicables

| País o jurisdicción | Requisitos relevantes (datos personales, consumidor, sector, IA) | Obligaciones concretas para este sistema | Fuente o responsable de la verificación |
|---|---|---|---|
| [PAÍS] | | | [ÁREA LEGAL] |
| | | | |

## Parte F. Partes interesadas y personas afectadas

| Grupo | Relación con el sistema | Tamaño estimado | ¿En situación de vulnerabilidad? ¿Por qué? | ¿Se consultó? |
|---|---|---|---|---|
| [USUARIOS DIRECTOS] | Operan el sistema | | | |
| [PERSONAS SOBRE QUIENES SE DECIDE] | Reciben los resultados | | | |
| [TERCEROS AFECTADOS] | No usan el sistema pero se ven afectados | | | |
| [COMUNIDADES O SOCIEDAD] | Efectos colectivos | | | |

Revisa en particular si entre las personas afectadas hay:

- [ ] Niñas, niños o adolescentes.
- [ ] Personas mayores.
- [ ] Personas con discapacidad.
- [ ] Personas que hablan una lengua distinta del español o pertenecen a pueblos originarios.
- [ ] Personas en situación de pobreza o sin historial en el sistema financiero.
- [ ] Trabajadores en relación de subordinación frente a quien usa el sistema.
- [ ] Personas migrantes o con situación legal incierta.
- [ ] Otros: [DESCRIBE].

## Parte G. Consulta realizada

| Con quién | Método | Fecha | Hallazgos principales | Cómo se atendieron |
|---|---|---|---|---|
| [EXPERTOS INTERNOS] | [ENTREVISTA, TALLER] | [FECHA] | | |
| [USUARIOS O SUS REPRESENTANTES] | [PRUEBA CON USUARIOS, ENCUESTA] | | | |
| [ESPECIALISTA EXTERNO] | | | | |

Si no se consultó a personas afectadas o a sus representantes, explica por qué y qué fuente sustituta se usó (por ejemplo, análisis de quejas o estudios publicados).

## Parte H. Escala de valoración

### H.1 Severidad

Cada impacto negativo se califica de 1 a 4 en tres dimensiones:

| Nivel | Gravedad: ¿qué tan profundo es el daño? | Alcance: ¿a cuántas personas llega? | Reversibilidad: ¿se puede deshacer? |
|---|---|---|---|
| **1 · Bajo** | Molestia o pérdida de tiempo pequeña, sin consecuencias posteriores | Casos aislados o una sola persona | Se corrige al momento y sin costo para la persona |
| **2 · Moderado** | Pérdida económica pequeña y recuperable, trato desigual que no cierra oportunidades, estrés pasajero | Un grupo acotado, de decenas o cientos de personas | Se corrige en días, pero la persona tiene que reclamar |
| **3 · Alto** | Se niega un servicio importante, hay un daño económico relevante o se afecta un derecho | Miles de personas, o todo un grupo en situación de vulnerabilidad | Revertirlo requiere un proceso formal y largo, y parte del daño permanece |
| **4 · Crítico** | Daño a la vida, a la integridad física o a la libertad, o pérdida del patrimonio básico de una familia | Una población, una región o la sociedad en su conjunto | No hay forma de devolver a la persona a su situación anterior |

### H.2 Cómo combinar las dimensiones

Se suman los tres niveles (resultado de 3 a 12):

| Puntaje | Severidad | Qué hacer | Quién aprueba | Revisión sugerida |
|---|---|---|---|---|
| 3 a 4 | Baja | Documentar y monitorear | Dueño del sistema | Anual o ante cambios |
| 5 a 7 | Media | Medidas de mitigación con responsable y fecha | Dueño del sistema y responsable del SGIA | Semestral |
| 8 a 9 | Alta | Mitigar antes de liberar, reforzar la supervisión humana y consultar a expertos externos | Comité de IA o alta dirección | Trimestral y ante cualquier cambio |
| 10 a 12 | Crítica | No liberar hasta reducirla; replantear el diseño o el uso | Alta dirección, por escrito | Continua |

Dos reglas de piso:

- **Gravedad 4:** la severidad nunca es menor que Alta, aunque el alcance sea mínimo.
- **Grupo en situación de vulnerabilidad:** si el grupo más expuesto está en la lista de la parte F, se sube un nivel la gravedad.

### H.3 Probabilidad

Se usa la misma escala de cinco niveles de la metodología de riesgos: 1 Rara, 2 Improbable, 3 Posible, 4 Probable, 5 Casi segura.

## Parte I. Impactos en individuos y grupos

Para cada área, describe los impactos positivos y los negativos potenciales, quién está más expuesto y su valoración. G = gravedad, A = alcance, R = reversibilidad (parte H).

| Área | Impacto positivo | Impacto negativo potencial | Grupos más expuestos | G | A | R | Severidad | Probabilidad |
|---|---|---|---|---|---|---|---|---|
| Equidad y no discriminación | | | | | | | | |
| Privacidad y control sobre los datos personales | | | | | | | | |
| Seguridad física y salud | | | | | | | | |
| Derechos y debido proceso (información, impugnación, reconsideración) | | | | | | | | |
| Consecuencias económicas para las personas | | | | | | | | |
| Accesibilidad e inclusión | | | | | | | | |
| Autonomía y dignidad (manipulación, dependencia, confianza excesiva) | | | | | | | | |
| Comprensión y transparencia | | | | | | | | |
| Trabajo y condiciones laborales | | | | | | | | |
| Bienestar psicológico | | | | | | | | |
| [OTRA ÁREA] | | | | | | | | |

*Ejemplo (Monarca Crédito, equidad): impacto positivo, evaluar a personas sin historial en buró de crédito con datos alternativos; impacto negativo potencial, rechazo desproporcionado de solicitantes de ciertas entidades federativas por el uso del código postal; grupos más expuestos, solicitantes de ciertas entidades federativas; G 3, A 3, R 2 (existe reconsideración, pero la persona debe pedirla), puntaje 8, severidad Alta; probabilidad 3 · Posible. Si el análisis mostrara que el grupo afectado está en situación de pobreza, la regla de vulnerabilidad subiría la gravedad a 4.*

## Parte J. Impactos sociales

| Área | Impacto positivo | Impacto negativo potencial | Comunidades o sectores expuestos | G | A | R | Severidad | Probabilidad |
|---|---|---|---|---|---|---|---|---|
| Medio ambiente (energía, agua, equipo de cómputo) | | | | | | | | |
| Economía y empleo (sustitución de tareas, concentración del mercado, acceso a servicios) | | | | | | | | |
| Información y vida democrática (desinformación, polarización, confianza en instituciones) | | | | | | | | |
| Cultura y lengua (estereotipos, lenguas originarias, diversidad cultural) | | | | | | | | |
| Salud pública y seguridad colectiva | | | | | | | | |
| [OTRA ÁREA] | | | | | | | | |

*Ejemplo (Conversa Labs, información): un asistente de una universidad podría difundir información errónea sobre becas a miles de estudiantes al mismo tiempo; severidad Media por su alcance y porque se corrige con un aviso oficial.*

## Parte K. Medidas de mitigación y supervisión humana

### K.1 Medidas

| Impacto que atiende | Medida | Tipo | Responsable | Fecha compromiso | Cómo se verificará su eficacia |
|---|---|---|---|---|---|
| | | [DISEÑO / DATOS / OPERACIÓN / INFORMACIÓN / SUPERVISIÓN / CONTRATO] | | | |
| | | | | | |

### K.2 Supervisión humana

| Aspecto | Descripción |
|---|---|
| Modelo de supervisión | [LA PERSONA DECIDE CON APOYO DEL SISTEMA / LA PERSONA REVISA CADA RESULTADO ANTES DE QUE SURTA EFECTO / LA PERSONA SUPERVISA Y PUEDE INTERVENIR] |
| Puntos de intervención | [EN QUÉ MOMENTO Y SOBRE QUÉ CASOS INTERVIENE UNA PERSONA] |
| Autoridad para anular o detener | [QUIÉN PUEDE HACERLO Y CÓMO] |
| Competencias y capacitación de quienes supervisan | |
| Medidas contra la confianza excesiva en el sistema | [POR EJEMPLO, CASOS DE CONTROL SIN SUGERENCIA DEL MODELO] |
| Vías de reconsideración para las personas afectadas | [CANAL, PLAZO, QUIÉN REVISA] |

## Parte L. Impactos residuales y traslado a la evaluación de riesgos

| Impacto | Severidad inicial | Severidad residual | ¿Por qué es aceptable? | Riesgo en el registro | Consecuencia trasladada (1 a 5) |
|---|---|---|---|---|---|
| | | | | [R-NN] | |
| | | | | | |

Para trasladar la severidad a la escala de consecuencia de la metodología de riesgos: Baja → 1 o 2; Media → 3; Alta → 4; Crítica → 5. Usa la columna de individuos para los impactos de la parte I y la de sociedad para los de la parte J.

## Parte M. Relación con la evaluación de impacto en la protección de datos

La evaluación de impacto en la protección de datos personales (EIPD) y esta evaluación responden preguntas distintas: la primera se centra en los riesgos del tratamiento de datos para sus titulares; esta abarca cualquier consecuencia del sistema para personas, grupos y sociedad, tengan o no datos en él. Cuando el sistema trata datos personales:

- [ ] Existe una EIPD o análisis de privacidad del tratamiento: [CÓDIGO Y FECHA], o se justifica por qué no se requiere.
- [ ] Ambas evaluaciones usan el mismo identificador del sistema y se citan entre sí.
- [ ] Las conclusiones de privacidad se reflejan en la fila de privacidad de la parte I, sin duplicar el análisis.
- [ ] El aviso de privacidad informa las finalidades del sistema y, si aplica, el uso de decisiones automatizadas y cómo solicitar la intervención de una persona.
- [ ] Las medidas de privacidad están en la parte K o en la EIPD, con un mismo responsable de seguimiento.

## Parte N. Decisión

- [ ] **Aprobar:** los impactos residuales son aceptables según los criterios.
- [ ] **Aprobar con condiciones:** el sistema puede operar si se cumplen las condiciones siguientes en los plazos indicados.
- [ ] **Rechazar o rediseñar:** los impactos residuales no son aceptables; el sistema no se libera o se suspende.

Condiciones (si aplica):

1. [CONDICIÓN, RESPONSABLE Y FECHA].
2. [CONDICIÓN, RESPONSABLE Y FECHA].

Severidad residual más alta de la evaluación: [BAJA / MEDIA / ALTA / CRÍTICA]. La aprobación corresponde a la instancia que indica la tabla H.2 para esa severidad.

## Parte O. Comunicación a partes interesadas

| Qué se comunica | A quién | Medio | Cuándo | Responsable |
|---|---|---|---|---|
| [RESUMEN DE RESULTADOS Y MEDIDAS] | [CLIENTES, ALIADOS, AUTORIDAD, PÚBLICO] | | | |
| [CAMBIOS EN AVISOS O INSTRUCCIONES] | [USUARIOS] | | | |

Decisión sobre disponibilidad: [NO SE COMPARTE / RESUMEN PÚBLICO / VERSIÓN PARA CLIENTES BAJO CONFIDENCIALIDAD / A SOLICITUD DE AUTORIDAD]. Justificación: [MOTIVO].

## Parte P. Conservación

Esta evaluación y sus anexos se conservan en [REPOSITORIO] durante la vida del sistema y [NÚMERO] años después de su retiro, o el plazo mayor que exija la ley o un contrato. Las versiones anteriores no se eliminan al actualizarla.

## Parte Q. Firmas

| Rol | Nombre | Firma | Fecha |
|---|---|---|---|
| Evaluador o evaluadora responsable | [NOMBRE] | | [FECHA] |
| Dueño del sistema de IA | [NOMBRE] | | [FECHA] |
| Responsable del SGIA | [NOMBRE] | | [FECHA] |
| Aprobación según severidad (Comité de IA o alta dirección) | [NOMBRE] | | [FECHA] |

## Parte R. Próxima revisión

| Campo | Dato |
|---|---|
| Fecha de la próxima revisión programada | [FECHA, SEGÚN LA TABLA H.2] |
| Eventos que obligan a revisarla antes | Cualquiera de los disparadores de la parte B.1 |
| Responsable de convocarla | [NOMBRE] · [PUESTO] |

## Historial de cambios

| Versión | Fecha | Descripción del cambio | Autor | Aprobó |
|---|---|---|---|---|
| 1.0 | [FECHA] | Emisión inicial del formulario | [NOMBRE] | [NOMBRE] |
| | | | | |

## Referencias

- ISO/IEC 42001:2023, cláusulas 6.1.1, 6.1.2, 6.1.4 y 8.4.
- ISO/IEC 42001:2023, Anexo A: A.5.2, A.5.3, A.5.4, A.5.5, A.8.2, A.8.5 y A.9.3.
- ISO/IEC 42005 (evaluación de impacto de sistemas de IA), como orientación metodológica.
- Documentos relacionados: [SGIA-PRO-01], [SGIA-FOR-02], [SGIA-PRO-03]; `matriz-riesgos-ia.xlsx`; `inventario-sistemas-ia.xlsx`; [EIPD DEL SISTEMA].
- Guía *Descifrando ISO 42001*, objetivo A.5: https://adriangzmncrz-arch.github.io/descifrando-iso42001/anexo-a/a5-evaluacion-de-impacto/

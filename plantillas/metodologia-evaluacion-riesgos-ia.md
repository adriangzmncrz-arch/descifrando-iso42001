# Metodología de evaluación y tratamiento de riesgos de IA

| Control del documento | |
|---|---|
| Código | [SGIA-PRO-01] |
| Versión | [1.0] |
| Fecha de aprobación | [FECHA] |
| Elaboró | [NOMBRE] · [PUESTO] |
| Revisó | [NOMBRE] · [PUESTO] |
| Aprobó | [NOMBRE] · [PUESTO DE LA ALTA DIRECCIÓN] |
| Clasificación | [USO INTERNO] |

Plantilla de *Descifrando ISO 42001* (CC BY-SA 4.0) — adáptala a tu organización; no sustituye a la norma ni es asesoría legal.

> **Instrucciones de uso (borra este bloque antes de aprobar el documento).**
>
> - **Qué cubre:** las cláusulas 6.1.1 (criterios de riesgo de IA), 6.1.2 (evaluación de riesgos), 6.1.3 (tratamiento), 8.2 y 8.3 (ejecución periódica). Se apoya en 6.1.4 y 8.4 para la evaluación de impacto y en los controles del Anexo A para el tratamiento. Los nombres de los controles son traducción libre de referencia.
> - **Acompaña a** `matriz-riesgos-ia.xlsx`: las escalas, la matriz de clasificación y la tabla de aceptación de este documento son las mismas que las de la hoja Criterios del archivo. Si modificas unas, modifica las otras, y vuelve a aprobar ambas.
> - **Qué personalizar:** los descriptores de consecuencia con ejemplos de tu negocio (sección 5.1), la guía de frecuencia de la probabilidad (sección 5.3), la matriz y la tabla de aceptación si tu apetito de riesgo es distinto (secciones 5.4 y 5.5), los puestos que aceptan riesgos y los plazos.
> - **Qué borrar:** este bloque y los ejemplos en cursiva. El ejemplo resuelto (sección 13) puede quedarse como guía para los evaluadores si lo cambias por un caso tuyo.
> - **Consejo:** la matriz propuesta es asimétrica, es decir, da más peso a la consecuencia que a la probabilidad. Refleja un apetito bajo para daños a personas. Puedes usar otra, siempre que la apruebe la dirección y sepas explicar por qué.

## 1. Propósito

Establecer cómo [NOMBRE DE LA ORGANIZACIÓN] identifica, analiza, evalúa, trata y acepta los riesgos asociados con los sistemas de IA que usa, desarrolla o provee, de manera que evaluaciones repetidas produzcan resultados consistentes, válidos y comparables, y que las decisiones de tratamiento queden justificadas y aprobadas por quien tiene autoridad para hacerlo.

## 2. Alcance

Aplica a todos los sistemas de IA registrados en el inventario (`inventario-sistemas-ia.xlsx`) dentro del alcance del SGIA, en todas las etapas de su ciclo de vida. La evaluación puede hacerse por sistema o por grupo de sistemas cuando compartan propósito, tipo de datos, rol de la organización y personas afectadas. Si alguno de esos factores cambia, el sistema se evalúa por separado.

*Ejemplo: Contadores Alameda evalúa como grupo su asistente de ofimática y su módulo de captura de CFDI (uso interno, mismos datos), pero evalúa por separado a "Alma", su chatbot para clientes.*

## 3. Definiciones

- **Riesgo de IA:** efecto de la incertidumbre asociada con un sistema de IA sobre los objetivos de la organización o sobre personas y sociedades. Puede ser negativo (amenaza) o positivo (oportunidad).
- **Consecuencia:** resultado de que el riesgo se materialice, calificado en tres dimensiones: organización, individuos o grupos, y sociedad.
- **Probabilidad:** posibilidad realista de que el evento ocurra, estimada cuando aplique.
- **Clasificación:** nivel de riesgo (Bajo, Medio, Alto o Crítico) que resulta de cruzar consecuencia y probabilidad en la matriz.
- **Riesgo inherente:** clasificación antes del tratamiento que se decide en esta evaluación. En esta metodología se califica considerando solo los controles que ya existen y funcionan, los cuales se documentan.
- **Riesgo residual:** clasificación esperada después de aplicar el tratamiento.
- **Dueño del riesgo:** persona que rinde cuentas por el tratamiento y el seguimiento de un riesgo.
- **Criterios de riesgo de IA:** escalas, matriz, tabla de aceptación y líneas rojas aprobadas por la alta dirección, descritos en la sección 5.

## 4. Roles

| Rol | Responsabilidad en esta metodología |
|---|---|
| Alta dirección | Aprueba los criterios de riesgo y autoriza excepciones temporales por riesgos Críticos. |
| Responsable del SGIA | Mantiene esta metodología y el registro de riesgos, facilita las sesiones de evaluación, calibra a los evaluadores y acepta riesgos residuales Medios. |
| Comité de IA | Aprueba planes de tratamiento y acepta riesgos residuales Altos. |
| Dueño del sistema de IA | Rinde cuentas por la evaluación de su sistema, propone el tratamiento y acepta riesgos residuales Bajos. |
| Dueños de los riesgos | Ejecutan y dan seguimiento a las acciones de tratamiento. |
| Especialistas (datos, desarrollo, seguridad, privacidad, legal, evaluación de impacto) | Aportan información y evidencia para calificar consecuencia y probabilidad. |

## 5. Criterios de riesgo de IA

### 5.1 Escala de consecuencia

Cada riesgo se califica de 1 a 5 en las tres dimensiones. Los descriptores son ejemplos que conviene sustituir por situaciones concretas de la organización.

| Nivel | Para la organización | Para individuos o grupos | Para la sociedad |
|---|---|---|---|
| **1 · Insignificante** | No hay pérdida relevante ni atención externa | Molestia que se resuelve en el momento | Ningún efecto perceptible |
| **2 · Menor** | El área absorbe la pérdida; se recibe una queja aislada | Error que la propia persona corrige en pocos días y sin costo | Efecto local y aislado |
| **3 · Moderada** | Hay que reasignar presupuesto; una autoridad hace un requerimiento; se repiten las quejas | Afectación a derechos u oportunidades que puede revertirse con esfuerzo, como un rechazo injusto corregido mediante reconsideración | Afectación reversible a un segmento identificable de la población |
| **4 · Mayor** | Sanción; pérdida de un cliente clave o de una alianza; cobertura negativa en medios nacionales | Daño importante y difícil de revertir: discriminación sistemática, exposición de datos sensibles, pérdida de ingresos | Se refuerzan desigualdades o se daña la confianza en un sector, como la exclusión financiera de una región |
| **5 · Severa** | Peligra la continuidad del negocio o la autorización para operar | Daño grave o irreversible a la vida, la salud, la libertad o el patrimonio, en especial de grupos vulnerables | Efecto sistémico o duradero en servicios esenciales, en el acceso a información veraz o en procesos democráticos |

### 5.2 Regla del peor valor

La consecuencia que se usa para clasificar el riesgo es **la más alta de las tres dimensiones**, nunca el promedio. Un riesgo puede ser menor para la organización y grave para las personas; promediar escondería precisamente el daño que el SGIA busca prevenir.

*Ejemplo: organización 3, individuos 4, sociedad 2 → la consecuencia que cuenta es 4 (Mayor).*

### 5.3 Escala de probabilidad

| Nivel | Descriptor | Guía de frecuencia (ajústala a tu volumen) |
|---|---|---|
| **1 · Rara** | No se espera que ocurra durante la vida del sistema | Menos de una vez en cinco años, o menos de 1 en 1 000 000 de decisiones |
| **2 · Improbable** | Ha ocurrido en otras organizaciones, pero no en la nuestra | Una vez cada dos a cinco años |
| **3 · Posible** | Hay antecedentes internos aislados | Una vez al año |
| **4 · Probable** | Se observa varias veces al año o apareció en las pruebas | Cada trimestre, o más de 1 en 10 000 decisiones |
| **5 · Casi segura** | Ya ocurre de forma recurrente | Cada mes, o más de 1 en 1 000 decisiones |

En sistemas que toman o apoyan muchas decisiones, conviene expresar la frecuencia por número de decisiones o interacciones y no solo por periodo.

**Cuando la probabilidad no se puede estimar con honestidad** (por ejemplo, una técnica de ataque nueva o el cambio de versión de un modelo de terceros sin historial), el grupo evaluador asigna el nivel más alto que considere plausible y lo justifica en el registro. Para consecuencias Severas, la matriz garantiza una clasificación mínima de Alto aunque la probabilidad sea Rara.

### 5.4 Matriz de clasificación

La clasificación se obtiene buscando en la matriz la celda donde se cruzan la consecuencia (fila) y la probabilidad (columna). No se calcula un puntaje numérico.

| Consecuencia · Probabilidad | 1 · Rara | 2 · Improbable | 3 · Posible | 4 · Probable | 5 · Casi segura |
|---|---|---|---|---|---|
| **5 · Severa** | Alto | Alto | Crítico | Crítico | Crítico |
| **4 · Mayor** | Medio | Alto | Alto | Crítico | Crítico |
| **3 · Moderada** | Bajo | Medio | Alto | Alto | Crítico |
| **2 · Menor** | Bajo | Bajo | Medio | Medio | Alto |
| **1 · Insignificante** | Bajo | Bajo | Bajo | Medio | Medio |

### 5.5 Criterios de aceptación

| Clasificación | Decisión | Plazo de tratamiento | Quién acepta el riesgo residual | Frecuencia de revisión |
|---|---|---|---|---|
| **Bajo** | Se acepta con los controles existentes | No requiere plan | Dueño del sistema de IA | Anual |
| **Medio** | Se acepta con monitoreo; se trata si el costo es razonable | Seis meses, si se decide tratar | Responsable del SGIA | Semestral |
| **Alto** | No se acepta sin tratamiento | Plan en 30 días y ejecución en 90 | Comité de IA o la dirección designada, que informa a la alta dirección | Trimestral |
| **Crítico** | Inaceptable: el sistema o la función no se lanza, o se suspende | Inmediato | Nunca se acepta de forma permanente; solo la dirección general puede firmar una excepción temporal con medidas compensatorias | Mensual |

Una instancia de mayor autoridad siempre puede aceptar un riesgo de menor nivel; nunca a la inversa.

### 5.6 Líneas rojas

Hay situaciones que se rechazan sin pasar por la matriz, sea cual sea su probabilidad:

- Incumplir de manera deliberada una ley o regulación aplicable.
- Desplegar un uso de IA que esté prohibido en alguna de las jurisdicciones donde opera el sistema.
- Usar datos personales para una finalidad que no se informó en el aviso de privacidad o sin la base legal correspondiente.
- [OTRAS LÍNEAS ROJAS QUE DEFINA LA ALTA DIRECCIÓN].

### 5.7 Declaración de apetito de riesgo

[NOMBRE DE LA ORGANIZACIÓN] tiene un apetito **muy bajo** para riesgos que puedan dañar derechos, oportunidades, salud o patrimonio de las personas y para incumplimientos legales; **bajo** para riesgos que afecten la confianza de clientes y aliados; y **moderado** para riesgos de productividad o costo en herramientas de uso interno. [AJUSTA ESTA DECLARACIÓN Y HAZ QUE LA APRUEBE LA ALTA DIRECCIÓN].

## 6. Proceso paso a paso

### 6.1 Preparar los insumos

Antes de la sesión de evaluación, el responsable del SGIA y el dueño del sistema reúnen:

- La ficha del sistema [SGIA-FOR-02] o, para sistemas de terceros, la documentación del proveedor.
- El registro del sistema en el inventario: propósito, rol de la organización, datos, personas afectadas.
- Las cuestiones de contexto interno y externo y los requisitos de partes interesadas aplicables (cláusulas 4.1 y 4.2).
- La política de IA y los objetivos de IA vigentes.
- La evaluación de impacto más reciente [SGIA-FOR-01], si existe.
- Incidentes, quejas, resultados de monitoreo y hallazgos de auditoría del sistema.

### 6.2 Identificar riesgos y oportunidades

El grupo evaluador recorre el ciclo de vida completo del sistema (diseño, datos, desarrollo, despliegue, operación, cambio y retiro) con el catálogo de fuentes de riesgo siguiente. Las primeras siete se inspiran en el Anexo C de ISO/IEC 42001; las demás son ampliaciones de esta metodología. Los nombres coinciden con la lista desplegable de `matriz-riesgos-ia.xlsx`.

| Fuente de riesgo | Pregunta que ayuda a identificarlo | Ejemplo |
|---|---|---|
| Complejidad del entorno | ¿Qué tan variadas e impredecibles son las situaciones que enfrenta el sistema? | Un asistente universitario atiende a alumnos, familias y proveedores con preguntas muy distintas |
| Falta de transparencia o explicabilidad | ¿Podemos explicar un resultado a quien lo necesita entender o impugnar? | Un rechazo de crédito con un mensaje genérico |
| Nivel de automatización | ¿Qué decide el sistema sin que intervenga una persona? | Rechazo automático de solicitudes |
| Aprendizaje automático (datos y entrenamiento) | ¿Los datos son suficientes, representativos, actuales y protegidos contra manipulación? | Datos históricos que reflejan exclusiones del pasado |
| Hardware e infraestructura | ¿Un cambio de plataforma, de nube o de capacidad altera los resultados? | Migrar el modelo a otro proveedor de nube |
| Ciclo de vida del sistema | ¿Puede fallar el diseño, el mantenimiento, una actualización o el retiro? | Una base de conocimiento desactualizada |
| Madurez tecnológica | ¿Desconocemos los límites de la tecnología, o confiamos demasiado porque "ya está probada"? | Alucinaciones de la IA generativa |
| Proveedor o tercero | ¿Qué depende de alguien que no controlamos? | El proveedor cambia la versión de su modelo sin avisar |
| Uso indebido previsible | ¿Cómo podría usarse para algo no previsto, o generar confianza excesiva? | Un colaborador pega una nómina en un chatbot gratuito |
| Seguridad propia de la IA | ¿Puede alguien manipular el sistema con datos o instrucciones maliciosas? | Inyección de instrucciones para extraer información de otro cliente |
| Privacidad y datos personales | ¿Se tratan datos personales fuera de su finalidad, en exceso o sin protección suficiente? | Variables de uso de la app recolectadas para otra finalidad |
| Otra | ¿Hay algo propio de nuestro sector o contexto que no esté arriba? | Cambios regulatorios en un país donde opera el sistema |

Cada riesgo se redacta con una estructura fija para que se entienda igual en cualquier momento: **causa → evento → consecuencia, y para quién**.

*Ejemplo: "Las preguntas frecuentes de Alma no se actualizan con el calendario fiscal → Alma da una fecha límite equivocada → el cliente presenta tarde su declaración y paga recargos".*

También se registran las **oportunidades**: eventos inciertos que ayudarían a lograr un objetivo de IA. Se identifican igual y su tratamiento es "Aprovechar".

### 6.3 Analizar

Para cada riesgo, el grupo evaluador:

1. Califica la consecuencia en las tres dimensiones (sección 5.1). Para individuos y sociedad, usa los resultados de la evaluación de impacto cuando existan (sección 7).
2. Toma la peor de las tres (sección 5.2).
3. Califica la probabilidad realista, considerando los controles que ya funcionan (sección 5.3).
4. Busca la clasificación inherente en la matriz (sección 5.4).
5. Anota la evidencia que sostiene cada calificación: métricas, resultados de pruebas, incidentes, quejas, opiniones de especialistas.

### 6.4 Evaluar y priorizar

La clasificación se compara con los criterios de aceptación (sección 5.5). Los riesgos que no son aceptables tal como están pasan a tratamiento en este orden de prioridad:

1. Cualquier riesgo que toque una línea roja.
2. Riesgos Críticos.
3. Riesgos Altos, primero los de mayor consecuencia para individuos o grupos.
4. Riesgos Medios que la organización decida tratar.

Dentro de un mismo nivel, se prioriza el riesgo con mayor consecuencia para personas y, después, el de mayor probabilidad.

### 6.5 Tratar

**Elegir la opción.** Para cada riesgo se elige una o más opciones:

| Opción | Cuándo usarla | Ejemplo |
|---|---|---|
| Mitigar | Reducir la consecuencia, la probabilidad o ambas | Pruebas de equidad antes de cada versión; revisión humana obligatoria |
| Evitar | Eliminar la actividad o la fuente del riesgo | Retirar dos variables de datos del modelo |
| Transferir o compartir | Repartir con un tercero parte de la carga o del costo | Cláusulas de aviso de cambios con el proveedor; seguro |
| Aceptar | Asumir el riesgo de forma informada y dentro de los criterios | Mantener un riesgo Medio con monitoreo semestral |
| Aprovechar (oportunidad) | Aumentar la probabilidad o el beneficio de una oportunidad | Piloto controlado con datos alternativos para personas sin historial crediticio |

Transferir no traslada la rendición de cuentas: frente a clientes y usuarios, la organización sigue respondiendo.

**Determinar los controles necesarios.** Primero se diseñan los controles que realmente reducen el riesgo; después se comparan con los 38 controles del Anexo A de ISO/IEC 42001 para confirmar que no se omitió ninguno relevante, y se considera la guía de implementación del Anexo B. Cuando hace falta algo que el Anexo A no contempla, se define un control propio con un código propio (por ejemplo, C-MOD-01) y se agrega a la Declaración de Aplicabilidad.

### 6.6 Calificar el riesgo residual

Con los controles planeados, se vuelve a calificar consecuencia y probabilidad y se obtiene la clasificación residual en la matriz. Si el residual sigue sin ser aceptable, se agregan controles o se cambia la opción de tratamiento.

### 6.7 Aceptar

Quien tiene autoridad según la sección 5.5 acepta el residual de forma explícita: identifica los riesgos y sus niveles (no basta con "se aprueba la matriz"), registra su nombre, la fecha y, en el caso de aceptaciones temporales, la fecha de vencimiento. En `matriz-riesgos-ia.xlsx` se usan las columnas "¿Residual aceptado?" (Sí, No o Temporal) y "Aprobado por".

### 6.8 Formular el plan de tratamiento

El plan de tratamiento puede llevarse en el mismo registro de riesgos o en un documento aparte. Para cada acción indica:

- Riesgo que atiende (ID) y opción elegida.
- Controles del Anexo A y controles propios.
- Responsable y recursos necesarios.
- Fecha compromiso, según los plazos de la sección 5.5.
- Clasificación residual esperada.
- Indicador con el que se verificará la eficacia.

El plan y la aceptación de los residuales los aprueba la dirección designada: el Comité de IA, salvo que exista un riesgo Crítico, en cuyo caso decide la alta dirección.

### 6.9 Comunicar

Los resultados se comunican a los dueños de los riesgos, al Comité de IA y, en resumen, a la alta dirección. Los controles necesarios se comunican a las áreas que deben operarlos y, cuando corresponda, a clientes, aliados o autoridades que lo requieran.

## 7. Uso de los resultados de la evaluación de impacto

La evaluación de impacto [SGIA-FOR-01] mira cómo el sistema puede afectar a personas, grupos y a la sociedad. Sus resultados se trasladan a esta evaluación de riesgos así:

| Severidad en la evaluación de impacto | Consecuencia sugerida para individuos o sociedad |
|---|---|
| Baja | 1 · Insignificante o 2 · Menor |
| Media | 3 · Moderada |
| Alta | 4 · Mayor |
| Crítica | 5 · Severa |

Además:

- Cada impacto negativo relevante se convierte en uno o más riesgos del registro, con referencia cruzada (por ejemplo, "EIA-01 parte I → R-01").
- La probabilidad estimada en la evaluación de impacto se usa como punto de partida para la probabilidad del riesgo.
- Las medidas de mitigación propuestas en la evaluación de impacto se consideran controles candidatos.
- Todo evento que obligue a repetir la evaluación de impacto obliga también a reevaluar los riesgos del sistema.

## 8. Cómo lograr resultados consistentes, válidos y comparables

| Atributo | Qué significa | Cómo se logra en esta metodología |
|---|---|---|
| Consistente | Dos evaluadores con la misma información llegan a la misma clasificación | Escalas únicas con ejemplos ancla; plantilla única; sesiones de calibración |
| Válido | La clasificación refleja la realidad y no la intuición de quien califica | Evidencia anotada para cada calificación; participación de especialistas |
| Comparable | Se pueden comparar riesgos entre sistemas y a lo largo del tiempo | Mismas escalas para todos los sistemas; criterios versionados; cambios de criterios aplicados a todo el registro |

Prácticas obligatorias para la organización:

1. **Ejemplos ancla.** El responsable del SGIA mantiene para cada nivel de consecuencia al menos un ejemplo real o realista de la organización.
2. **Calibración.** Al menos una vez al año, y cada vez que se integren evaluadores nuevos, tres o más personas califican por separado los mismos cinco riesgos de prueba; las diferencias de más de un nivel se discuten y, si hace falta, se ajustan los ejemplos ancla.
3. **Evaluación en grupo.** Ningún riesgo de un sistema que afecte a personas se califica por una sola persona.
4. **Regla de falta de evidencia.** Si no hay evidencia para sostener una calificación baja, se usa la calificación más alta que resulte plausible.
5. **Control de versiones de los criterios.** Si cambian las escalas, la matriz o la tabla de aceptación, se registra la versión y se reclasifican los riesgos abiertos para que sigan siendo comparables.

## 9. Frecuencia y disparadores de reevaluación

Cada sistema se reevalúa, como mínimo, con la frecuencia de revisión de su riesgo residual más alto (sección 5.5) y, en todo caso, una vez al año. Además, se reevalúa antes de que ocurra, o en cuanto se detecte, cualquiera de estos cambios significativos:

- Nuevo propósito, nuevo uso o nueva población de personas afectadas.
- Nuevos datos de entrenamiento o de entrada, o nuevas fuentes de datos.
- Nueva versión del modelo, propia o del proveedor.
- Reducción de la supervisión humana o aumento del nivel de automatización.
- Llegada del sistema a un país o jurisdicción nuevos.
- Cambios legales, regulatorios o contractuales relevantes.
- Incidente de severidad Alta o Crítica, o patrón de incidentes menores.
- Degradación del desempeño o deriva por encima de los umbrales definidos.
- Hallazgo de auditoría o resultado de la revisión por la dirección que lo solicite.

## 10. Seguimiento de la eficacia del tratamiento

- El dueño de cada riesgo informa el avance del plan de tratamiento al responsable del SGIA con la frecuencia de revisión de su nivel.
- La eficacia se verifica con el indicador definido en el plan (por ejemplo, brecha de aprobación entre segmentos o tasa de éxito de ataques en pruebas), no solo con la ejecución de la acción.
- Si un tratamiento no logra el residual esperado, se revisa la opción elegida, se actualiza el plan y se vuelve a aprobar.
- Los riesgos nuevos que surjan del seguimiento se integran al registro y siguen el mismo proceso.

## 11. Relación con la Declaración de Aplicabilidad y el plan de tratamiento

- La columna "Controles del Anexo A" del registro de riesgos es la base para decidir qué controles se incluyen en la Declaración de Aplicabilidad (`declaracion-de-aplicabilidad.xlsx`).
- En la SoA, la columna "Riesgos que trata (IDs)" remite a los riesgos del registro, y la justificación de cada control incluido debe poder rastrearse hasta al menos un riesgo, un objetivo de IA o un requisito externo.
- Un control se excluye cuando ninguna evaluación de riesgos lo hace necesario y ningún requisito legal, contractual o de partes interesadas lo exige; la justificación lo explica de forma concreta.
- Los controles propios se agregan al final de la SoA con el mismo identificador que usan en el registro de riesgos (por ejemplo, C-MON-02) y con la referencia a los riesgos que tratan.
- Cuando se actualiza el registro de riesgos, el responsable del SGIA revisa si la SoA debe cambiar.

## 12. Registros

| Registro | Formato | Responsable | Conservación |
|---|---|---|---|
| Criterios de riesgo de IA aprobados (cada versión) | Este documento y hoja Criterios de `matriz-riesgos-ia.xlsx` | Responsable del SGIA | [PLAZO] |
| Registro de riesgos de IA con sus calificaciones y evidencia | `matriz-riesgos-ia.xlsx` | Responsable del SGIA | [PLAZO] |
| Plan de tratamiento y su seguimiento | Registro de riesgos o [DOCUMENTO] | Dueños de los riesgos | [PLAZO] |
| Aceptación de riesgos residuales | Columna "Aprobado por" y minutas del Comité de IA | Comité de IA | [PLAZO] |
| Excepciones temporales por riesgos Críticos | [REGISTRO DE EXCEPCIONES] | Alta dirección | [PLAZO] |
| Sesiones de calibración | Minuta con resultados | Responsable del SGIA | [PLAZO] |
| Declaración de Aplicabilidad | `declaracion-de-aplicabilidad.xlsx` | Responsable del SGIA | [PLAZO] |

Se conservan los resultados de **todas** las evaluaciones y tratamientos, no solo la versión vigente.

## 13. Ejemplo resuelto

*Monarca Crédito evalúa Score Monarca v3, su modelo de originación de crédito. Dos de los riesgos del registro de ejemplo de `matriz-riesgos-ia.xlsx`:*

| Paso | R-01 · Variables sustitutas | R-05 · Sesgo de automatización |
|---|---|---|
| Descripción | El código postal se correlaciona con región e ingreso → el modelo rechaza de forma desproporcionada a solicitantes de ciertas entidades → se niega crédito a grupos enteros | Por carga de trabajo, los analistas confirman casi siempre la sugerencia del modelo → la revisión humana de la banda gris deja de ser efectiva |
| Fuente | Aprendizaje automático (datos y entrenamiento) | Nivel de automatización |
| Consecuencia org. · ind. · soc. | 4 · 4 · 3 → peor valor 4 | 3 · 4 · 2 → peor valor 4 |
| Probabilidad | 3 · Posible | 3 · Posible |
| Clasificación inherente | Alto | Alto |
| Tratamiento | Mitigar: A.7.4, A.7.6, A.6.2.4 y A.5.4, más el control propio C-MOD-01 (prueba de variables sustitutas en cada reentrenamiento) | Mitigar: A.9.3, A.4.6 y A.6.2.6, más el control propio C-HUM-01 (una parte de los casos de la banda gris se presenta sin la sugerencia del modelo) |
| Residual | Consecuencia 4, probabilidad 1 → Medio | Consecuencia 4, probabilidad 2 → Alto |
| Aceptación | Aceptado por el Comité de Modelos (instancia superior a la requerida) | Aceptación temporal del Comité de Modelos, con revisión trimestral, mientras se contrata a más analistas |

*Observa dos cosas: la consecuencia para personas determina la clasificación aunque la organización califique más bajo, y un residual Alto solo puede aceptarlo el Comité, con fecha de revisión.*

## Historial de cambios

| Versión | Fecha | Descripción del cambio | Autor | Aprobó |
|---|---|---|---|---|
| 1.0 | [FECHA] | Emisión inicial | [NOMBRE] | [NOMBRE] |
| | | | | |

## Referencias

- ISO/IEC 42001:2023, cláusulas 4.1, 4.2, 6.1.1, 6.1.2, 6.1.3, 6.1.4, 6.2, 8.1, 8.2, 8.3, 8.4 y 9.1.
- ISO/IEC 42001:2023, Anexo A (38 controles de referencia), Anexo B (guía de implementación) y Anexo C (objetivos y fuentes de riesgo).
- ISO/IEC 23894 (gestión de riesgos de IA) e ISO/IEC 38507 (gobernanza del uso de la IA), como orientación para el apetito de riesgo.
- Documentos relacionados: [SGIA-POL-01], [SGIA-ORG-01], [SGIA-FOR-01], [SGIA-FOR-02]; `matriz-riesgos-ia.xlsx`, `declaracion-de-aplicabilidad.xlsx`, `inventario-sistemas-ia.xlsx`.
- Guía *Descifrando ISO 42001*, cláusula 6: https://adriangzmncrz-arch.github.io/descifrando-iso42001/clausulas/c6-planificacion/

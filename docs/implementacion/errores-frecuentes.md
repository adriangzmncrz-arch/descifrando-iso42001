---
description: 26 errores frecuentes al implementar ISO/IEC 42001, agrupados por tema, con su consecuencia en la auditoría o en la operación, cómo evitarlos y las señales tempranas de un SGIA de papel.
---

# Errores frecuentes

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-map-marker-path: Implementación</span>
<span class="dx-badge dx-badge--rol-usa">:material-cloud-download-outline: Usa IA de terceros</span>
<span class="dx-badge dx-badge--rol-desarrolla">:material-code-braces: Desarrolla IA</span>
<span class="dx-badge dx-badge--rol-provee">:material-handshake-outline: Provee IA a clientes</span>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: 16 min de lectura</span>
</div>

!!! abstract "En una frase"
    Casi todos los errores al implementar ISO 42001 tienen la misma raíz: construir un sistema que se ve bien en papel pero que no cambia ninguna decisión sobre la IA real de la organización.

Esta página reúne 26 errores que aparecen una y otra vez: algunos heredados de cualquier implementación de sistemas de gestión y otros propios de la IA. Están agrupados en seis temas. Abre cada uno para ver qué pasa, por qué es un problema y cómo evitarlo. Al final encontrarás las [señales tempranas de un SGIA de papel](#sgia-de-papel), una lista para revisar tu propio sistema. Los nombres de los controles son traducción libre de referencia.

## Estrategia y alcance {#estrategia}

??? failure "1 · Comprar un «SGIA en una caja» y llenarlo con el nombre de la empresa"
    **Qué pasa.** Se compra un paquete de plantillas, se cambia el logotipo y se aprueba todo en una sola sesión. Nadie de la operación participó en su redacción.

    **Por qué es un problema.** En la etapa 2 el auditor entrevista al personal: las respuestas no coinciden con los documentos, faltan los registros y los procedimientos describen procesos que la empresa no tiene. El resultado es una serie de no conformidades y un sistema que no protege nada.

    !!! success "Cómo evitarlo"
        Empieza por tus sistemas reales y por lo que ya haces. Usa las plantillas como punto de partida y adáptalas en talleres con quienes operan. Un documento corto que se cumple vale más que uno largo que se ignora.

    :material-arrow-right: [Hoja de ruta, fase 1](hoja-de-ruta.md#fase-1)

??? failure "2 · Recortar el alcance para que la auditoría sea fácil"
    **Qué pasa.** Se deja fuera el sistema más delicado. Por ejemplo, que Monarca Crédito certificara solo el uso interno de IA generativa y dejara fuera Score Monarca v3.

    **Por qué es un problema.** El certificado sería válido, pero no diría nada de lo que les importa a los inversionistas y a los bancos aliados, que leerán el alcance. Además, el auditor puede cuestionar exclusiones que no se sostienen frente al contexto y las partes interesadas que tú mismo identificaste.

    !!! success "Cómo evitarlo"
        Define el alcance por valor y por riesgo. Si necesitas avanzar por etapas, documenta el plan de ampliación con fechas y compromisos de la dirección.

    :material-arrow-right: [4.3 Alcance del SGIA](../clausulas/c4-contexto.md#c-4-3)

??? failure "3 · Suponer el rol en lugar de determinarlo sistema por sistema"
    **Qué pasa.** La organización se declara "usuaria de IA" en general. Pero Conversa Labs es proveedor, productor y cliente a la vez, y Contadores Alameda no solo usa a Alma: la despliega frente a sus clientes y cura su base de conocimiento.

    **Por qué es un problema.** El rol determina qué controles pesan más. Si lo subestimas, excluyes controles que sí aplican, como los de información a usuarios ([A.8](../anexo-a/a8-informacion-partes-interesadas.md)) o los de clientes ([A.10.4](../anexo-a/a10-terceros.md#a-10-4)), y el auditor lo detecta al revisar contratos y la experiencia del usuario final.

    !!! success "Cómo evitarlo"
        Arma una matriz de roles por sistema con base en las categorías de ISO/IEC 22989 y revísala cuando cambie el modelo de negocio.

    :material-arrow-right: [Roles en la IA](../fundamentos/roles-en-la-ia.md)

??? failure "4 · Nombrar a un responsable sin tiempo ni autoridad"
    **Qué pasa.** El SGIA se asigna a alguien de TI "además de sus funciones", sin presupuesto ni acceso a la dirección.

    **Por qué es un problema.** El proyecto se detiene a la primera urgencia. En la auditoría se nota la falta de recursos ([7.1](../clausulas/c7-apoyo.md#c-7-1)) y de liderazgo ([5.1](../clausulas/c5-liderazgo.md#c-5-1)), y las decisiones que necesitan a la dirección, como aceptar riesgos o aprobar exclusiones, quedan en el aire.

    !!! success "Cómo evitarlo"
        Asigna una dedicación por escrito, una línea de reporte directa a la dirección, un presupuesto propio y un patrocinador que desbloquee decisiones.

    :material-arrow-right: [Cláusula 5 · Liderazgo](../clausulas/c5-liderazgo.md)

??? failure "5 · Inventariar solo la IA que conoce TI"
    **Qué pasa.** El inventario lista los proyectos formales y omite la IA integrada en software comprado (como el módulo de captura de CFDI de Contadores Alameda) y la IA en la sombra (*shadow AI*).

    **Por qué es un problema.** Lo que no está en el inventario no se evalúa ni se controla. El incidente llega por donde nadie miraba: una nómina con datos personales pegada en un chatbot gratuito.

    !!! success "Cómo evitarlo"
        Combina una encuesta anónima, la revisión de gastos, los registros técnicos y la revisión de contratos. Agrega una pregunta sobre IA al proceso de compras para que el inventario se alimente solo.

    :material-arrow-right: [A.4.2 Documentación de recursos](../anexo-a/a4-recursos.md#a-4-2)

## Riesgo e impacto {#riesgo-e-impacto}

??? failure "6 · Copiar la matriz de riesgos del SGSI"
    **Qué pasa.** Se reutiliza la matriz de ISO 27001, con impactos medidos solo en confidencialidad, integridad y disponibilidad.

    **Por qué es un problema.** La evaluación de riesgos de IA mira las consecuencias para la organización, para las personas y para la sociedad. Una matriz de seguridad no ve un sesgo contra solicitantes de cierta entidad federativa ni un chatbot que da, con total seguridad, un plazo fiscal equivocado.

    !!! success "Cómo evitarlo"
        Amplía los criterios con escalas de consecuencias para personas y para la sociedad, y conserva lo que ya funciona de tu metodología actual.

    :material-arrow-right: [6.1.2 Evaluación de riesgos](../clausulas/c6-planificacion.md#c-6-1-2) · [Riesgo frente a impacto](../fundamentos/riesgo-vs-impacto.md)

??? failure "7 · Presentar la EIPD como si fuera la evaluación de impacto de IA"
    **Qué pasa.** Se entrega la evaluación de impacto en la protección de datos como evidencia de los controles de [A.5](../anexo-a/a5-evaluacion-de-impacto.md).

    **Por qué es un problema.** La EIPD se centra en los datos personales. La evaluación de impacto de IA también pregunta por discriminación, autonomía de las personas, acceso a servicios, efectos sociales y uso indebido previsible. Los huecos salen a la luz en cuanto el auditor la compara con lo que pide [6.1.4](../clausulas/c6-planificacion.md#c-6-1-4).

    !!! success "Cómo evitarlo"
        Usa la EIPD como insumo y agrega lo que falta: grupos afectados, contexto social, jurisdicciones y usos indebidos previsibles. Por ejemplo, ¿qué pasa si un cliente usa a Alma para pedir asesoría fiscal personalizada?

    :material-arrow-right: [Plantilla de evaluación de impacto](../plantillas/index.md#evaluacion-de-impacto)

??? failure "8 · Evaluación de impacto y evaluación de riesgos que no se hablan"
    **Qué pasa.** Dos documentos hechos por equipos distintos, en momentos distintos y sin referencias cruzadas.

    **Por qué es un problema.** La norma pide que los resultados de la evaluación de impacto se tomen en cuenta en la de riesgos. El auditor sigue el hilo: elige un impacto severo y busca el riesgo y el control que lo atienden. Si el hilo se corta, hay hallazgo.

    !!! success "Cómo evitarlo"
        Cada impacto relevante genera o actualiza un riesgo en la matriz, con el identificador de la evaluación de impacto de origen.

    :material-arrow-right: [6.1.4 Evaluación de impacto](../clausulas/c6-planificacion.md#c-6-1-4)

??? failure "9 · Evaluar una vez y archivar"
    **Qué pasa.** Las evaluaciones se hacen para la certificación y no se vuelven a abrir, aunque el modelo se reentrene o el proveedor cambie el modelo de lenguaje de fondo.

    **Por qué es un problema.** La norma pide repetirlas a intervalos planificados y cuando hay cambios significativos ([8.2](../clausulas/c8-operacion.md#c-8-2), [8.4](../clausulas/c8-operacion.md#c-8-4)). Una evaluación de hace un año sobre una versión que ya no existe no prueba nada.

    !!! success "Cómo evitarlo"
        Define una lista de disparadores (nuevo uso, nueva fuente de datos, reentrenamiento, cambio de proveedor o de modelo, incidente grave) y un calendario según la criticidad de cada sistema.

    :material-arrow-right: [Cláusula 8 · Operación](../clausulas/c8-operacion.md)

??? failure "10 · Riesgos residuales que nadie aceptó formalmente"
    **Qué pasa.** La matriz muestra riesgos residuales altos, pero no hay firma ni acta de quién los aceptó, o los aceptó alguien sin autoridad para hacerlo.

    **Por qué es un problema.** La norma exige que la dirección designada apruebe el plan de tratamiento y acepte los riesgos residuales. Sin esa aprobación, el riesgo no está gestionado: está ignorado.

    !!! success "Cómo evitarlo"
        Define en la metodología quién puede aceptar cada nivel de riesgo, y registra cada aceptación con fecha, vigencia y condiciones.

    :material-arrow-right: [6.1.3 Tratamiento de riesgos](../clausulas/c6-planificacion.md#c-6-1-3)

## Controles y Declaración de Aplicabilidad {#controles-y-soa}

??? failure "11 · Una SoA de «todo aplica» o de «no aplica» sin razones"
    **Qué pasa.** Se marcan los 38 controles como aplicables "para no batallar", o se excluyen con la misma frase copiada en cada fila.

    **Por qué es un problema.** La norma pide justificar tanto las inclusiones como las exclusiones. Incluir un control que no implementas te asegura una no conformidad; excluirlo sin razón deja huecos que el auditor señala.

    !!! success "Cómo evitarlo"
        Justifica cada fila con referencia a riesgos o a requisitos legales y contractuales. Para las exclusiones, explica por qué ni tus riesgos ni un requisito externo exigen el control.

    :material-arrow-right: [Plantilla de Declaración de Aplicabilidad](../plantillas/index.md#declaracion-de-aplicabilidad)

??? failure "12 · Malentender el Anexo B"
    **Qué pasa.** Unos lo ignoran porque "es solo una guía"; otros intentan justificar en la SoA cada una de sus recomendaciones.

    **Por qué es un problema.** El Anexo B está marcado como normativo y la norma pide tomarlo en cuenta al implementar los controles, pero aclara que no tienes que documentar ni justificar si sigues cada recomendación. Ignorarlo empobrece tus controles; sobredocumentarlo te cuesta meses.

    !!! success "Cómo evitarlo"
        Léelo como punto de partida de cada control incluido y adáptalo o amplíalo según tus riesgos. La SoA se justifica por control, no por recomendación.

    :material-arrow-right: [Anexos B, C y D](../anexos-b-c-d.md)

??? failure "13 · Excluir A.6 y A.7 completos porque «no desarrollamos»"
    **Qué pasa.** Una organización que solo usa IA de terceros excluye todos los controles de ciclo de vida y de datos.

    **Por qué es un problema.** Quien usa IA de terceros también la despliega, la monitorea, registra sus eventos y la alimenta con datos. La base de conocimiento de Alma determina lo que responde; si está desactualizada, Alma da plazos equivocados.

    !!! success "Cómo evitarlo"
        Revisa control por control. El despliegue, la operación y el monitoreo, el registro de eventos y la calidad de los datos suelen aplicar también a quien usa IA.

    :material-arrow-right: [A.6 Ciclo de vida](../anexo-a/a6-ciclo-de-vida.md) · [A.7 Datos](../anexo-a/a7-datos.md)

??? failure "14 · Gestionar a los proveedores de IA como a cualquier proveedor de software"
    **Qué pasa.** Se envía a BotNorte o al proveedor del modelo fundacional el mismo cuestionario de seguridad que a cualquier proveedor.

    **Por qué es un problema.** Ese cuestionario no pregunta qué modelo usa el servicio, si se entrena con tus datos, cómo avisa cambios de modelo, qué limitaciones conoce ni cómo comunica incidentes de IA. Un cambio silencioso del modelo de fondo puede alterar el comportamiento del sistema sin que te enteres.

    !!! success "Cómo evitarlo"
        Agrega preguntas y cláusulas propias de IA: aviso de cambios de modelo, uso de tus datos, documentación técnica, notificación de incidentes y derecho a evaluar. Da seguimiento periódico, no solo al contratar.

    :material-arrow-right: [A.10.3 Proveedores](../anexo-a/a10-terceros.md#a-10-3)

## Datos y ciclo de vida {#datos-y-ciclo-de-vida}

??? failure "15 · No poder decir qué versión estaba en producción"
    **Qué pasa.** El modelo, los datos y las evaluaciones viven en lugares distintos, sin enlaces entre sí.

    **Por qué es un problema.** Ante una queja o una pregunta del auditor, no puedes reconstruir con qué datos se entrenó la versión que tomó una decisión ni qué pruebas pasó. Sin trazabilidad no hay rendición de cuentas.

    !!! success "Cómo evitarlo"
        Usa identificadores únicos, huellas digitales (*hashes*) de los datos, registros que no se editan y fichas que enlacen todo.

    :material-arrow-right: [Control de versiones de artefactos de IA](documentacion-requerida.md#control-de-versiones)

??? failure "16 · Medir el desempeño solo en promedio"
    **Qué pasa.** Score Monarca v3 reporta un desempeño global excelente y nadie revisa los resultados por segmento.

    **Por qué es un problema.** Un buen promedio puede ocultar errores concentrados en un grupo (por edad, sexo o entidad federativa), y ese es justamente el tipo de impacto que el SGIA existe para prevenir.

    !!! success "Cómo evitarlo"
        Define en la verificación y validación métricas por segmento con umbrales de aceptación, y repítelas en el monitoreo.

    :material-arrow-right: [A.6.2.4 Verificación y validación](../anexo-a/a6-ciclo-de-vida.md#a-6-2-4)

??? failure "17 · Desplegar sin monitoreo de deriva ni umbrales de acción"
    **Qué pasa.** El sistema se libera y se revisa "cuando alguien se queja".

    **Por qué es un problema.** El mundo cambia: un periodo de crisis modifica el comportamiento de pago de los acreditados y un cambio en las reglas fiscales deja desactualizadas las respuestas de Alma. Sin monitoreo de la deriva (*drift*), el deterioro lo descubren los afectados.

    !!! success "Cómo evitarlo"
        Define indicadores de deriva y de desempeño con umbrales, alertas y una reacción predefinida: revisar, recalibrar o suspender.

    :material-arrow-right: [A.6.2.6 Operación y monitoreo](../anexo-a/a6-ciclo-de-vida.md#a-6-2-6)

??? failure "18 · Datos personales en instrucciones y bases de conocimiento sin control"
    **Qué pasa.** Hay personal que pega nóminas en chatbots, y clientes de Conversa que cargan bases de conocimiento con datos personales de sus propios usuarios.

    **Por qué es un problema.** Se exponen datos personales y fiscales, se puede contradecir el aviso de privacidad y los deberes que impone la LFPDPPP, y se complica atender los derechos ARCO.

    !!! success "Cómo evitarlo"
        Clasifica los datos, fija en la política de uso aceptable qué nunca se ingresa, usa filtros que detecten datos personales y deja claro en los contratos quién responde por cada conjunto de datos.

    :material-arrow-right: [A.7 Datos](../anexo-a/a7-datos.md) · [México y Latinoamérica](../integracion/contexto-mexico-latam.md)

## Personas y cultura {#personas-y-cultura}

??? failure "19 · Prohibir la IA generativa sin ofrecer una alternativa"
    **Qué pasa.** Se bloquean por decreto las herramientas públicas de IA generativa.

    **Por qué es un problema.** La necesidad no desaparece: la gente usa su teléfono personal. La IA en la sombra crece y además deja de verse.

    !!! success "Cómo evitarlo"
        Ofrece una herramienta aprobada con licencia empresarial, reglas claras de qué datos no se ingresan y un canal para solicitar herramientas nuevas.

    :material-arrow-right: [Plantilla de uso aceptable de IA generativa](../plantillas/index.md#uso-aceptable-ia-generativa)

??? failure "20 · Supervisión humana de adorno"
    **Qué pasa.** Los analistas que revisan la banda gris de Score Monarca confirman casi todas las recomendaciones del modelo en segundos.

    **Por qué es un problema.** Es el sesgo de automatización: la supervisión existe en el papel, pero no corrige nada. Si el auditor ve una tasa de anulación cercana a cero, preguntará si los supervisores tienen tiempo, información y autoridad reales.

    !!! success "Cómo evitarlo"
        Define qué información recibe el supervisor, cuánto tiempo tiene, en qué casos le toca anular y cómo lo justifica. Mide las anulaciones y revisa muestras de decisiones.

    :material-arrow-right: [A.9.3 Objetivos para el uso responsable](../anexo-a/a9-uso.md#a-9-3)

??? failure "21 · Capacitación genérica e igual para todos"
    **Qué pasa.** Un curso de una hora sobre ética de la IA para toda la organización, con la lista de asistencia como única evidencia.

    **Por qué es un problema.** La norma pide competencia según lo que cada persona hace, y la asistencia no prueba competencia. La curadora de la base de conocimiento, el supervisor humano y el comprador necesitan saber cosas distintas.

    !!! success "Cómo evitarlo"
        Arma una matriz de competencias por rol, imparte capacitación específica y evalúa su eficacia con pruebas prácticas o revisión de casos.

    :material-arrow-right: [7.2 Competencia](../clausulas/c7-apoyo.md#c-7-2)

??? failure "22 · Un canal de inquietudes que nadie conoce"
    **Qué pasa.** El canal existe en un procedimiento, pero nunca ha recibido un reporte.

    **Por qué es un problema.** Cero reportes no significa cero problemas; casi siempre significa que nadie conoce el canal o que nadie confía en él. El auditor puede preguntarle por el canal a cualquier colaborador.

    !!! success "Cómo evitarlo"
        Comunícalo con frecuencia, garantiza la protección contra represalias, responde cada reporte y comparte, sin datos que identifiquen a nadie, los casos atendidos.

    :material-arrow-right: [A.3.3 Reporte de inquietudes](../anexo-a/a3-organizacion-interna.md#a-3-3) · [A.8.3 Reporte externo](../anexo-a/a8-informacion-partes-interesadas.md#a-8-3)

## Auditoría {#auditoria}

??? failure "23 · Una auditoría interna sin independencia ni conocimiento de IA"
    **Qué pasa.** El responsable del SGIA audita su propio sistema, o el auditor interno de calidad lo audita sin saber qué es la deriva o una prueba de sesgo.

    **Por qué es un problema.** La norma pide objetividad e imparcialidad en la auditoría interna. Además, un auditor sin competencia en IA no encuentra los problemas reales, que luego aparecen en la auditoría externa.

    !!! success "Cómo evitarlo"
        Recurre a un auditor externo o de otra área, capacitado en ISO 42001, con apoyo técnico cuando el tema lo requiera.

    :material-arrow-right: [9.2 Auditoría interna](../clausulas/c9-evaluacion-del-desempeno.md#c-9-2)

??? failure "24 · Revisión por la dirección como trámite"
    **Qué pasa.** Se presenta un informe, la dirección "toma nota" y el acta no registra ninguna decisión.

    **Por qué es un problema.** La norma espera que la revisión produzca decisiones de mejora y de cambio. Un acta sin decisiones es la evidencia más clara de que el liderazgo no está involucrado.

    !!! success "Cómo evitarlo"
        Prepara una agenda con todas las entradas que pide la norma, más riesgos, impactos, incidentes y avance del tratamiento. Cada punto termina con una decisión, un responsable y una fecha.

    :material-arrow-right: [9.3 Revisión por la dirección](../clausulas/c9-evaluacion-del-desempeno.md#c-9-3)

??? failure "25 · Acciones correctivas que solo atienden el síntoma"
    **Qué pasa.** Alma dio una fecha de declaración equivocada; se corrige esa respuesta y se cierra el caso.

    **Por qué es un problema.** La norma pide analizar las causas, revisar si hay casos parecidos y verificar si la acción funcionó. Si la causa era que nadie revisa la base de conocimiento cuando cambian las reglas, el error volverá con otra fecha.

    !!! success "Cómo evitarlo"
        Analiza la causa (con los cinco porqués o un diagrama de Ishikawa), busca casos similares, actúa sobre el proceso y verifica la eficacia algunas semanas después.

    :material-arrow-right: [10.2 No conformidad y acción correctiva](../clausulas/c10-mejora.md#c-10-2)

??? failure "26 · Llegar a la etapa 2 sin registros de operación"
    **Qué pasa.** Los documentos están completos, pero todos los registros tienen fechas de las últimas dos semanas.

    **Por qué es un problema.** La etapa 2 evalúa si el sistema está implementado y si es eficaz. Sin historia de operación, el auditor no puede comprobarlo y puede posponer la recomendación de certificación.

    !!! success "Cómo evitarlo"
        Planifica meses de operación antes de la etapa 2, con mediciones, una auditoría interna completa y una revisión por la dirección.

    :material-arrow-right: [Hoja de ruta, fase 6](hoja-de-ruta.md#fase-6) · [Cómo se certifica](../auditoria/como-se-certifica.md)

## Señales tempranas de que tu SGIA es de papel {#sgia-de-papel}

Un SGIA de papel cumple en la forma pero no cambia nada en la práctica. Marca las señales que reconozcas en tu organización:

- [ ] Todos los documentos se aprobaron el mismo día.
- [ ] Fuera del equipo del proyecto, nadie sabe que existe una política de IA.
- [ ] El inventario de sistemas de IA no ha cambiado desde que se levantó.
- [ ] Ninguna evaluación de impacto ha cambiado una decisión: ni un rediseño, ni un aviso a usuarios, ni un control adicional.
- [ ] La matriz de riesgos solo contiene riesgos de seguridad de la información.
- [ ] Los indicadores se calculan, pero nadie los analiza ni actúa cuando salen de rango.
- [ ] El canal de inquietudes y el canal de reporte externo nunca han recibido nada.
- [ ] El comité de IA solo se reúne antes de las auditorías.
- [ ] Tus proveedores de IA no saben que tienes requisitos para ellos.
- [ ] Cuando preguntas "¿cómo lo hacen?", la respuesta empieza con "según el procedimiento…" y no con un ejemplo real.
- [ ] Los registros existen, pero todos se generaron en las semanas previas a la auditoría.

!!! tip "Qué hacer si marcaste varias"
    Como regla práctica, si reconoces tres o más señales, te recomendamos volver a las fases 5 y 6 de la [hoja de ruta](hoja-de-ruta.md#fase-5) antes de agendar la auditoría externa. Es más barato posponer la etapa 2 unas semanas que recibir no conformidades mayores.

## Para seguir

- [Hallazgos de ejemplo](../auditoria/hallazgos-ejemplo.md): cómo se ven estos errores redactados como no conformidades.
- [Preguntas del auditor](../auditoria/preguntas-del-auditor.md) y [checklist de preparación](../auditoria/checklist-preparacion.md).
- [Documentación requerida](documentacion-requerida.md) y [mitos y realidades](../empieza-aqui/mitos-y-realidades.md).

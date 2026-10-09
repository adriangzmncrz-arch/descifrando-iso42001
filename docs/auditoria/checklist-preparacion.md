---
description: Checklist de preparación para la auditoría de certificación ISO/IEC 42001, con documentos, registros, cláusulas 4 a 10, controles del Anexo A, entrevistas, logística y calendario de 30 días, 7 días y el día de la auditoría.
---

# Checklist de preparación

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-clipboard-search-outline: Auditoría</span>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: 15 min de lectura</span>
</div>

!!! abstract "En una frase"
    Llegar bien a una auditoría de ISO/IEC 42001 no es producir documentos de última hora, sino comprobar con calma que lo que el SGIA promete existe, se aplica y deja rastro; esta lista te ayuda a revisarlo por bloques y con calendario.

## Cómo usar esta lista

- **Asigna un dueño a cada bloque** y una fecha. La lista se recorre en equipo, no la llena una sola persona la víspera.
- **Marca solo lo que puedas demostrar.** Si para palomear una casilla tienes que decir "sí lo hacemos, pero no queda registro", déjala sin marcar: para el auditor, lo que no deja evidencia no ocurrió.
- **Ajusta a tu rol y a tu SoA.** Los controles del Anexo A solo se preparan si los declaraste aplicables; de los excluidos, revisa que la justificación esté ligada al riesgo. Los nombres de los controles que usamos son traducción libre de referencia.
- **Complementa con dos recursos:** la lista completa de [documentación requerida](../implementacion/documentacion-requerida.md) y la plantilla de [checklist de auditoría interna](../plantillas/index.md#checklist-auditoria-interna), que sirve para hacer la auditoría interna previa con el mismo nivel de detalle.

!!! auditor "Lo que más se nota desde el otro lado de la mesa"
    Se nota de inmediato cuando una organización se preparó para la auditoría y cuando se preparó para operar su SGIA. La primera tiene carpetas impecables y personas que no saben dónde están; la segunda tiene alguna imperfección, pero cada quien encuentra su evidencia en dos minutos. Prepárate para la segunda.

## Documentos imprescindibles

Información documentada que, sin importar tu rol, el auditor pedirá ver desde la etapa 1:

- [ ] Alcance del SGIA con límites, sedes, sistemas de IA y rol de la organización en cada uno ([4.3](../clausulas/c4-contexto.md#c-4-3)).
- [ ] Inventario de sistemas de IA con propósito previsto, rol, dueño y nivel de impacto ([4.1](../clausulas/c4-contexto.md#c-4-1), [A.4.2](../anexo-a/a4-recursos.md#a-4-2)).
- [ ] Política de IA aprobada por la alta dirección, con versión y fecha ([5.2](../clausulas/c5-liderazgo.md#c-5-2), [A.2.2](../anexo-a/a2-politicas.md#a-2-2)).
- [ ] Criterios de riesgo de IA que distingan lo aceptable de lo inaceptable ([6.1.1](../clausulas/c6-planificacion.md#c-6-1-1)).
- [ ] Método documentado para evaluar los riesgos de IA, que produzca resultados comparables ([6.1.2](../clausulas/c6-planificacion.md#c-6-1-2)).
- [ ] Proceso de tratamiento de riesgos y plan de tratamiento aprobado, con aceptación de riesgos residuales ([6.1.3](../clausulas/c6-planificacion.md#c-6-1-3)).
- [ ] Declaración de Aplicabilidad con los 38 controles revisados, justificación de cada inclusión y exclusión, y controles propios si los hay ([6.1.3](../clausulas/c6-planificacion.md#c-6-1-3)).
- [ ] Proceso de evaluación de impacto de los sistemas de IA ([6.1.4](../clausulas/c6-planificacion.md#c-6-1-4), [A.5.2](../anexo-a/a5-evaluacion-de-impacto.md#a-5-2)).
- [ ] Objetivos de IA con qué, quién, cuándo, con qué recursos y cómo se evalúan ([6.2](../clausulas/c6-planificacion.md#c-6-2)).
- [ ] Matriz de roles y responsabilidades del SGIA y de cada sistema ([5.3](../clausulas/c5-liderazgo.md#c-5-3), [A.3.2](../anexo-a/a3-organizacion-interna.md#a-3-2)).
- [ ] Programa de auditoría interna ([9.2](../clausulas/c9-evaluacion-del-desempeno.md#c-9-2)).
- [ ] Procedimientos de los controles aplicables que la propia norma pide documentar, por ejemplo: proceso de desarrollo responsable, plan de comunicación de incidentes, proceso de uso responsable, proceso de procedencia de datos.
- [ ] Documentación que tú mismo consideraste necesaria para que el SGIA funcione ([7.5](../clausulas/c7-apoyo.md#c-7-5)), con control de versiones.

## Registros que deben existir

Los registros demuestran que el SGIA **opera**. Antes de la etapa 2 conviene tener al menos un ciclo completo: política vigente, riesgos e impactos evaluados, controles operando durante algunos meses, una auditoría interna, una revisión por la dirección y acciones correctivas en marcha.

- [ ] Resultados de la evaluación de riesgos de cada sistema del alcance, y de las reevaluaciones tras cambios ([8.2](../clausulas/c8-operacion.md#c-8-2)).
- [ ] Seguimiento del plan de tratamiento y verificación de eficacia ([8.3](../clausulas/c8-operacion.md#c-8-3)).
- [ ] Evaluaciones de impacto de cada sistema, versionadas y ligadas a la versión del sistema ([8.4](../clausulas/c8-operacion.md#c-8-4), [A.5.3](../anexo-a/a5-evaluacion-de-impacto.md#a-5-3)).
- [ ] Evidencia de competencia de quienes tienen roles en el SGIA y en los sistemas ([7.2](../clausulas/c7-apoyo.md#c-7-2)).
- [ ] Evidencia de comunicación de la política y de las campañas de sensibilización ([7.3](../clausulas/c7-apoyo.md#c-7-3), [7.4](../clausulas/c7-apoyo.md#c-7-4)).
- [ ] Resultados de seguimiento y medición de varios meses, con su análisis ([9.1](../clausulas/c9-evaluacion-del-desempeno.md#c-9-1)).
- [ ] Informe de auditoría interna que cubra todo el alcance y los controles aplicables ([9.2](../clausulas/c9-evaluacion-del-desempeno.md#c-9-2)).
- [ ] Minuta de revisión por la dirección con conclusiones y decisiones ([9.3](../clausulas/c9-evaluacion-del-desempeno.md#c-9-3)).
- [ ] Registro de no conformidades y acciones correctivas, con al menos un caso tratado de punta a punta ([10.2](../clausulas/c10-mejora.md#c-10-2)).
- [ ] Registros de operación de los controles: aprobaciones de despliegue, tableros de monitoreo, registros de eventos, incidentes, evaluaciones de proveedores, reportes externos recibidos.

!!! note "¿Cuántos meses de operación?"
    La norma no fija un número. Cada OC tiene su práctica; muchos esperan algunos meses de registros, con frecuencia alrededor de tres, para poder muestrear. Pregúntalo antes de agendar la etapa 2. Más contexto en [Cómo se certifica](como-se-certifica.md).

## Por cláusula

### Cláusula 4 · Contexto

- [ ] El análisis de contexto incluye temas propios de la IA: requisitos legales por jurisdicción, proveedores de modelos, expectativas de clientes, y la decisión sobre si el cambio climático es pertinente ([4.1](../clausulas/c4-contexto.md#c-4-1)).
- [ ] Cada sistema del inventario tiene propósito previsto y rol documentados ([4.1](../clausulas/c4-contexto.md#c-4-1)).
- [ ] Las partes interesadas incluyen a quienes resultan afectados sin ser usuarios, y se decidió qué requisitos atiende el SGIA ([4.2](../clausulas/c4-contexto.md#c-4-2)).
- [ ] El alcance coincide con el inventario y explica lo que queda fuera ([4.3](../clausulas/c4-contexto.md#c-4-3)).
- [ ] Existe un mapa de procesos del SGIA con sus interacciones ([4.4](../clausulas/c4-contexto.md#c-4-4)).

### Cláusula 5 · Liderazgo

- [ ] La alta dirección puede explicar por qué existe el SGIA y citar decisiones tomadas con su información ([5.1](../clausulas/c5-liderazgo.md#c-5-1)).
- [ ] La política está aprobada, comunicada y disponible para las partes interesadas que corresponda ([5.2](../clausulas/c5-liderazgo.md#c-5-2)).
- [ ] Hay un responsable del SGIA con autoridad formal y un mecanismo de reporte a la dirección ([5.3](../clausulas/c5-liderazgo.md#c-5-3)).

### Cláusula 6 · Planificación

- [ ] Los criterios de riesgo consideran consecuencias para la organización, para individuos y para sociedades ([6.1.1](../clausulas/c6-planificacion.md#c-6-1-1), [6.1.2](../clausulas/c6-planificacion.md#c-6-1-2)).
- [ ] Puedes recorrer en ambos sentidos el hilo riesgo, control, SoA y evidencia sin que se rompa ([6.1.3](../clausulas/c6-planificacion.md#c-6-1-3)).
- [ ] Cada exclusión de la SoA tiene una justificación ligada a la evaluación de riesgos o a la ausencia de requisitos externos ([6.1.3](../clausulas/c6-planificacion.md#c-6-1-3)).
- [ ] Los resultados de las evaluaciones de impacto alimentaron la evaluación de riesgos, y se nota en el registro ([6.1.4](../clausulas/c6-planificacion.md#c-6-1-4)).
- [ ] Los objetivos de IA tienen indicador, responsable y seguimiento con datos recientes ([6.2](../clausulas/c6-planificacion.md#c-6-2)).
- [ ] Los cambios al SGIA del último año están registrados con su planificación ([6.3](../clausulas/c6-planificacion.md#c-6-3)).

### Cláusula 7 · Apoyo

- [ ] Los recursos del SGIA están aprobados y la capacidad de supervisión humana alcanza para la carga real ([7.1](../clausulas/c7-apoyo.md#c-7-1)).
- [ ] Cada rol tiene competencias definidas y evidencia de que las personas las cumplen, incluidas las de nuevo ingreso ([7.2](../clausulas/c7-apoyo.md#c-7-2)).
- [ ] Una muestra al azar del personal sabe qué herramientas de IA puede usar y dónde reportar inquietudes ([7.3](../clausulas/c7-apoyo.md#c-7-3)).
- [ ] Existe un plan de comunicación que define quién habla con clientes, reguladores y medios sobre temas de IA ([7.4](../clausulas/c7-apoyo.md#c-7-4)).
- [ ] No circulan versiones obsoletas de documentos y la documentación externa (de proveedores) está controlada ([7.5](../clausulas/c7-apoyo.md#c-7-5)).

### Cláusula 8 · Operación

- [ ] Los procesos tienen criterios de operación y hay evidencia de que se aplican ([8.1](../clausulas/c8-operacion.md#c-8-1)).
- [ ] Hay evidencia de que se vigila la eficacia de los controles y de qué se hizo cuando uno falló ([8.1](../clausulas/c8-operacion.md#c-8-1)).
- [ ] Los servicios y productos de proveedores de IA están bajo control ([8.1](../clausulas/c8-operacion.md#c-8-1)).
- [ ] Las evaluaciones de riesgo e impacto se repitieron según su calendario y tras cambios significativos ([8.2](../clausulas/c8-operacion.md#c-8-2), [8.4](../clausulas/c8-operacion.md#c-8-4)).
- [ ] El plan de tratamiento muestra avance y verificación de eficacia ([8.3](../clausulas/c8-operacion.md#c-8-3)).

### Cláusula 9 · Evaluación del desempeño

- [ ] Cada indicador tiene ficha con definición, fuente, frecuencia, umbral y responsable ([9.1](../clausulas/c9-evaluacion-del-desempeno.md#c-9-1)).
- [ ] La auditoría interna fue hecha por alguien que no auditó su propio trabajo y con conocimiento suficiente de IA ([9.2](../clausulas/c9-evaluacion-del-desempeno.md#c-9-2)).
- [ ] Los hallazgos de la auditoría interna tienen acciones registradas ([9.2](../clausulas/c9-evaluacion-del-desempeno.md#c-9-2)).
- [ ] La revisión por la dirección cubrió las entradas exigidas y, de preferencia, también riesgos, impactos, incidentes y retroalimentación de clientes ([9.3](../clausulas/c9-evaluacion-del-desempeno.md#c-9-3)).

### Cláusula 10 · Mejora

- [ ] Puedes mostrar mejoras al SGIA que no nacieron de una no conformidad ([10.1](../clausulas/c10-mejora.md#c-10-1)).
- [ ] Las no conformidades tienen corrección, análisis de causa, acción correctiva y verificación de eficacia ([10.2](../clausulas/c10-mejora.md#c-10-2)).
- [ ] Los incidentes de IA relevantes se analizaron también como posibles no conformidades ([10.2](../clausulas/c10-mejora.md#c-10-2)).

## Por objetivo del Anexo A

Prepara solo lo que tu SoA declara aplicable. Entre paréntesis, a qué rol suele aplicar cada punto.

### A.2 · Políticas

- [ ] La política de IA cubre lo que haces según tu rol y tiene un procedimiento de excepciones con registro ([A.2.2](../anexo-a/a2-politicas.md#a-2-2)).
- [ ] Las políticas de seguridad, privacidad, compras y retención mencionan la IA o remiten a la política de IA ([A.2.3](../anexo-a/a2-politicas.md#a-2-3)).
- [ ] La política tiene fecha de revisión y su historial muestra por qué cambió ([A.2.4](../anexo-a/a2-politicas.md#a-2-4)).

### A.3 · Organización interna

- [ ] Cada sistema tiene dueño, responsable técnico y responsable de supervisión con nombre ([A.3.2](../anexo-a/a3-organizacion-interna.md#a-3-2)).
- [ ] El canal de inquietudes está difundido, protege a quien reporta y tiene registro de casos ([A.3.3](../anexo-a/a3-organizacion-interna.md#a-3-3)).

### A.4 · Recursos

- [ ] El inventario documenta recursos de datos, herramientas, cómputo y personas por sistema ([A.4.2](../anexo-a/a4-recursos.md#a-4-2) a [A.4.6](../anexo-a/a4-recursos.md#a-4-6)).
- [ ] Existen fichas de los conjuntos de datos y una lista de componentes con versiones (si desarrollas o provees) ([A.4.3](../anexo-a/a4-recursos.md#a-4-3), [A.4.4](../anexo-a/a4-recursos.md#a-4-4)).
- [ ] Hay un plan de sucesión para las personas clave de cada sistema ([A.4.6](../anexo-a/a4-recursos.md#a-4-6)).

### A.5 · Evaluación de impactos

- [ ] Todos los sistemas del alcance tienen evaluación de impacto vigente, ligada a la versión en producción ([A.5.2](../anexo-a/a5-evaluacion-de-impacto.md#a-5-2), [A.5.3](../anexo-a/a5-evaluacion-de-impacto.md#a-5-3)).
- [ ] Las evaluaciones analizan impactos en personas y grupos con evidencia, no solo con opiniones ([A.5.4](../anexo-a/a5-evaluacion-de-impacto.md#a-5-4)).
- [ ] Las evaluaciones consideran impactos sociales y uso indebido previsible ([A.5.5](../anexo-a/a5-evaluacion-de-impacto.md#a-5-5)).

### A.6 · Ciclo de vida

- [ ] Los objetivos de desarrollo responsable se traducen en criterios de aceptación (si desarrollas) ([A.6.1.2](../anexo-a/a6-ciclo-de-vida.md#a-6-1-2)).
- [ ] Para el último cambio de cada sistema existe el expediente completo: requisitos, diseño, pruebas con criterios definidos de antemano y aprobación del despliegue ([A.6.2.2](../anexo-a/a6-ciclo-de-vida.md#a-6-2-2) a [A.6.2.5](../anexo-a/a6-ciclo-de-vida.md#a-6-2-5)).
- [ ] Los tableros de monitoreo tienen umbrales y las alertas del periodo están atendidas con evidencia ([A.6.2.6](../anexo-a/a6-ciclo-de-vida.md#a-6-2-6)).
- [ ] La documentación técnica entregada a clientes o usuarios corresponde a la versión vigente (si provees) ([A.6.2.7](../anexo-a/a6-ciclo-de-vida.md#a-6-2-7)).
- [ ] Puedes reconstruir una decisión o una conversación concreta a partir de los registros de eventos ([A.6.2.8](../anexo-a/a6-ciclo-de-vida.md#a-6-2-8)).

### A.7 · Datos

- [ ] Existe un proceso de aprobación de datos para desarrollo con análisis de representatividad (si desarrollas) ([A.7.2](../anexo-a/a7-datos.md#a-7-2)).
- [ ] Cada fuente de datos tiene base legal o contractual documentada ([A.7.3](../anexo-a/a7-datos.md#a-7-3)).
- [ ] Hay requisitos de calidad y reportes recientes, también para los contenidos que alimentan a un chatbot de terceros ([A.7.4](../anexo-a/a7-datos.md#a-7-4)).
- [ ] Puedes mostrar el linaje y la preparación del conjunto usado por la versión en producción ([A.7.5](../anexo-a/a7-datos.md#a-7-5), [A.7.6](../anexo-a/a7-datos.md#a-7-6)).

### A.8 · Información para las partes interesadas

- [ ] Una prueba de recorrido confirma que los usuarios saben que interactúan con IA y cómo escalar a una persona ([A.8.2](../anexo-a/a8-informacion-partes-interesadas.md#a-8-2)).
- [ ] El medio de reporte externo está publicado y sus reportes tienen atención registrada ([A.8.3](../anexo-a/a8-informacion-partes-interesadas.md#a-8-3)).
- [ ] El plan de comunicación de incidentes existe y los incidentes del periodo se comunicaron conforme a él ([A.8.4](../anexo-a/a8-informacion-partes-interesadas.md#a-8-4)).
- [ ] Las obligaciones de reporte ante clientes, reguladores u otras partes están registradas ([A.8.5](../anexo-a/a8-informacion-partes-interesadas.md#a-8-5)).

### A.9 · Uso

- [ ] El alta de nuevas herramientas o casos de uso de IA sigue un proceso con aprobaciones registradas ([A.9.2](../anexo-a/a9-uso.md#a-9-2)).
- [ ] Tienes un mecanismo para detectar IA en la sombra y evidencia de que lo usas ([A.9.2](../anexo-a/a9-uso.md#a-9-2)).
- [ ] Los puntos de supervisión humana están definidos y los registros muestran que la supervisión es real ([A.9.3](../anexo-a/a9-uso.md#a-9-3), [A.9.4](../anexo-a/a9-uso.md#a-9-4)).

### A.10 · Terceros y clientes

- [ ] Existe una matriz de responsabilidad compartida con proveedores, socios y clientes ([A.10.2](../anexo-a/a10-terceros.md#a-10-2)).
- [ ] Cada proveedor de IA tiene evaluación inicial y reevaluación tras cambios relevantes ([A.10.3](../anexo-a/a10-terceros.md#a-10-3)).
- [ ] Los contratos y la documentación entregada a clientes comunican límites y responsabilidades (si provees) ([A.10.4](../anexo-a/a10-terceros.md#a-10-4)).

## Preparación de entrevistas

- [ ] Lista de personas por perfil (alta dirección, responsable del SGIA, dueños de sistemas, ciencia de datos, compras, supervisores humanos, legal y privacidad, atención a clientes), cada una con suplente.
- [ ] Agenda confirmada con cada persona según el plan de auditoría, sin choques con cierres de mes o temporadas altas.
- [ ] Alta dirección disponible en la reunión de apertura, en su entrevista y en la reunión de cierre.
- [ ] Sesión breve de orientación para el personal: qué es una auditoría, que se vale decir "no lo sé" y que se responde con evidencia. **No ensayes respuestas.**
- [ ] Cada dueño de sistema puede mostrar en vivo su tablero, sus registros y su última evaluación de impacto.
- [ ] Los supervisores humanos saben que podrían ser entrevistados en su puesto de trabajo.
- [ ] Contactos de proveedores críticos localizables por si el auditor necesita confirmar un dato.
- [ ] El equipo revisó las [preguntas del auditor](preguntas-del-auditor.md) para ubicar la evidencia, no para memorizar.

## Logística de la auditoría

- [ ] Plan de auditoría recibido, revisado y confirmado con el OC: fechas, horarios, sedes, partes remotas.
- [ ] Coordinador de la auditoría designado como punto único de contacto, con una bitácora de solicitudes de evidencia y su estatus.
- [ ] Guías o acompañantes por área.
- [ ] Sala con pantalla y conexión estable; para partes remotas, plataforma probada y permiso para compartir pantalla.
- [ ] Accesos de solo lectura a repositorios y tableros, o una persona que pueda mostrarlos sin demora.
- [ ] Reglas de confidencialidad acordadas: qué puede ver el auditor, cómo se muestran datos personales (en pantalla y sin copias) y qué no sale de las instalaciones.
- [ ] Entorno de prueba o cuenta de demostración para recorrer el chatbot u otro sistema sin afectar a clientes reales.
- [ ] Credenciales de visitante, estacionamiento y comidas resueltos.

## Señales de que todavía no estás listo

!!! warning "Si te reconoces en tres o más, conviene mover la fecha"
    - La auditoría interna la hizo quien implementó el SGIA, o no cubrió todos los controles aplicables.
    - La revisión por la dirección fue una presentación sin minuta ni decisiones.
    - Algún sistema del alcance no tiene evaluación de impacto, o la que tiene corresponde a una versión anterior.
    - La SoA excluye controles con frases como "no aplica" o "no es relevante", sin referencia al riesgo.
    - Los registros de operación empiezan unas semanas antes de la auditoría.
    - Nadie fuera del equipo del SGIA sabe dónde reportar una inquietud sobre la IA.
    - Hay herramientas de IA en uso que no aparecen en el inventario.

## Calendario

=== "30 días antes"

    - [ ] Auditoría interna completa y revisión por la dirección realizadas, con acciones en curso.
    - [ ] Inventario, alcance y SoA conciliados entre sí y con la realidad.
    - [ ] Evaluaciones de riesgo e impacto vigentes para todos los sistemas del alcance.
    - [ ] Áreas de preocupación de la etapa 1 cerradas con evidencia de operación (si ya pasaste la etapa 1).
    - [ ] Plan de auditoría solicitado o recibido; personas clave notificadas.
    - [ ] Brechas pendientes identificadas con dueño y fecha; nada se "inventa" a última hora.

=== "7 días antes"

    - [ ] Agenda de entrevistas confirmada con suplentes.
    - [ ] Accesos, sala y plataforma remota probados.
    - [ ] Registros de los últimos meses localizables en minutos por cada dueño.
    - [ ] Sesión de orientación con el personal realizada.
    - [ ] Bitácora de solicitudes de evidencia lista.
    - [ ] Revisión final: versiones vigentes publicadas y copias obsoletas retiradas.

=== "El día"

    - [ ] Puntualidad en la reunión de apertura, con la alta dirección presente.
    - [ ] Confirmar alcance, plan, horarios, confidencialidad y forma de comunicar hallazgos.
    - [ ] Registrar cada solicitud del auditor y entregarla en el plazo pactado.
    - [ ] Asistir a las reuniones diarias de avance y aclarar malentendidos con evidencia en el momento.
    - [ ] Tomar nota de cada hallazgo comentado y de su clasificación.
    - [ ] En la reunión de cierre: confirmar hallazgos, plazos del plan de acciones y siguientes pasos.

=== "Después"

    - [ ] Revisar el informe y confirmar que los hallazgos coinciden con lo comentado en la reunión de cierre.
    - [ ] Enviar el plan de correcciones y acciones correctivas dentro del plazo que fije el OC.
    - [ ] Para las no conformidades mayores, reunir la evidencia de implementación y acordar cómo la verificará el OC.
    - [ ] Registrar todos los hallazgos, también las oportunidades de mejora, en el registro de no conformidades ([10.2](../clausulas/c10-mejora.md#c-10-2)).
    - [ ] Programar la verificación de eficacia antes de la primera auditoría de seguimiento.
    - [ ] Leer las reglas de uso del certificado y de la marca antes de anunciarlo.

Cómo responder bien a cada hallazgo, con corrección, causa raíz, acción correctiva y evidencia de eficacia, está en [Hallazgos de ejemplo](hallazgos-ejemplo.md#como-responder-a-un-hallazgo).

## Plantillas y recursos relacionados

- [Checklist de auditoría interna](../plantillas/index.md#checklist-auditoria-interna)
- [Declaración de Aplicabilidad](../plantillas/index.md#declaracion-de-aplicabilidad)
- [Inventario de sistemas de IA](../plantillas/index.md#inventario-sistemas-ia)
- [Registro de incidentes de IA](../plantillas/index.md#registro-de-incidentes)
- [Documentación requerida](../implementacion/documentacion-requerida.md)
- [Cómo se certifica](como-se-certifica.md) y [Preguntas del auditor](preguntas-del-auditor.md)

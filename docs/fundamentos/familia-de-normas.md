---
description: Mapa de la familia de normas de inteligencia artificial y relacionadas (ISO/IEC 22989, 23894, 42005, 42006, 38507, 5338, 5259, TR 24027, 27001, 27701 y más), qué tipo de documento es cada una, para qué sirve y cómo se conecta con ISO/IEC 42001.
---

# La familia de normas de IA

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-school-outline: Fundamentos</span>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: 15 min de lectura</span>
</div>

!!! abstract "En una frase"
    ISO/IEC 42001 es la única norma de la familia de IA con la que una organización se certifica; las demás son guías e informes que te ayudan a cumplirla mejor, e ISO/IEC 42006 regula a quienes te auditan.

## Una norma certificable y muchas de consulta

Quien empieza con ISO/IEC 42001 se topa con una sopa de números. Casi todas vienen del mismo comité (ISO/IEC JTC 1/SC 42) y cada una cumple una función distinta. No tienes que comprarlas todas: tienes que saber cuál abrir para cada problema y **qué tipo de documento** es:

| Tipo | Qué significa en la práctica | Ejemplos |
|---|---|---|
| Norma de **requisitos** (*requirements*) | Dice qué debe cumplirse; se audita contra ella | 42001, 27001, 27701, 9001; 42006 y 17021-1 (para organismos de certificación) |
| Norma de **orientación, marco o conceptos** (*guidance*, *framework*) | Recomienda cómo hacer algo o fija vocabulario | 22989, 23053, 23894, 42005, 38507, 5338 |
| **Especificación técnica** (*Technical Specification*, TS) | Consenso técnico aún en maduración; puede volverse norma | TS 12791, TS 4213 |
| **Informe técnico** (*Technical Report*, TR) | Informativo: panorama y estado del arte, sin requisitos | TR 24027, TR 24368, TR 24029-1 |

Dentro de la familia de IA, **solo ISO/IEC 42001 es certificable para organizaciones**. ISO/IEC 27001, 27701 y 9001 también se certifican, pero en sus propios temas. E ISO/IEC 42006 no la cumples tú: la cumple el organismo de certificación que te audita.

!!! tip "Analogía: el examen profesional"
    ISO/IEC 42001 es el temario del examen; las demás normas, la bibliografía recomendada (nadie se titula en la bibliografía); e ISO/IEC 42006, el reglamento que dice quién puede ser sinodal y cuánto dura el examen.

La propia ISO/IEC 42001 está en su primera edición, publicada el 18 de diciembre de 2023, sin enmiendas ni revisión en curso al 9 de octubre de 2026. A diferencia de ISO/IEC 27001, no recibió una enmienda por cambio climático: el texto publicado ya integra esa consideración en 4.1 y 4.2[^n42001].

## El mapa

<figure class="dx-infografia">
--8<-- "docs/assets/infografias/familia-normas.svg"
<figcaption>Las normas que rodean a ISO/IEC 42001, agrupadas por tema y con un código visual por tipo de documento. Toca una norma para ir a su ficha.</figcaption>
</figure>

??? note "Descripción textual de la infografía"
    Al centro, ISO/IEC 42001, la única certificable de la familia. Alrededor, siete grupos: **Fundamentos** (22989 y 23053), **Gobernanza** (38507), **Riesgo e impacto** (23894, 42005 e ISO 31000), **Sesgo y ética** (TR 24027, TS 12791 y TR 24368), **Certificación** (42006 y 17021-1), **Ciclo de vida y calidad** (5338, 25059, la serie 5259, TR 24029-1 y TS 4213) y **Sistemas hermanos** (27001, 27701 e ISO 9001, que comparten la estructura armonizada).

    La leyenda distingue cuatro tipos: requisitos certificables para organizaciones (relleno índigo: 27001, 27701 y 9001), requisitos para organismos de certificación (relleno cian: 42006 y 17021-1), normas de orientación, marco o conceptos (contorno continuo) e informes o especificaciones técnicas (contorno punteado).

## Las normas, grupo por grupo

Para cada norma: tipo, estado según su ficha oficial al 9 de octubre de 2026, utilidad, momento de lectura y conexión con ISO/IEC 42001 (los nombres de controles son traducción libre de referencia).

### Fundamentos

#### ISO/IEC 22989 · Conceptos y terminología {#n-22989}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-alphabetical-variant: Conceptos (referencia normativa)</span>
<span class="dx-badge dx-badge--tiempo">:material-calendar-check-outline: Publicada: 2022-07-19</span>
</div>

- **Qué es y para qué te sirve:** el vocabulario común de la IA (sistema de IA, tipos de aprendizaje, ciclo de vida genérico, roles de las partes interesadas) para hablar el mismo idioma con ciencia de datos, proveedores y auditores.
- **Cuándo leerla:** al empezar. Es la única referencia normativa de 42001, citada con fecha: su edición de 2022 forma parte de los requisitos[^n22989].
- **Se conecta con:** cláusula 3 (términos), [4.1](../clausulas/c4-contexto.md#c-4-1) (roles; ver [Roles en la IA](roles-en-la-ia.md)) y las etapas del ciclo de vida de [A.6](../anexo-a/a6-ciclo-de-vida.md).

#### ISO/IEC 23053 · Marco para sistemas de IA con aprendizaje automático {#n-23053}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-book-open-page-variant-outline: Marco</span>
<span class="dx-badge dx-badge--tiempo">:material-calendar-check-outline: Publicada: 2022-06-20</span>
</div>

- **Qué es y para qué te sirve:** describe los componentes de un sistema basado en aprendizaje automático (datos, modelo, entrenamiento, evaluación, producción); ayuda a dibujar su arquitectura y ubicar dónde puede fallar.
- **Cuándo leerla:** si desarrollas modelos o revisas a fondo el de un proveedor.
- **Se conecta con:** [A.4.4](../anexo-a/a4-recursos.md#a-4-4) Recursos de herramientas, [A.6.2.6](../anexo-a/a6-ciclo-de-vida.md#a-6-2-6) Operación y monitoreo (reentrenamiento) y [A.7.6](../anexo-a/a7-datos.md#a-7-6) Preparación de los datos; la guía del Anexo B la cita en esos tres puntos[^n23053].

### Riesgo e impacto

#### ISO/IEC 23894 · Guía de gestión del riesgo de IA {#n-23894}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-book-open-page-variant-outline: Guía</span>
<span class="dx-badge dx-badge--tiempo">:material-calendar-check-outline: Publicada: 2023-02-06</span>
</div>

- **Qué es y para qué te sirve:** adapta los principios, el marco y el proceso de ISO 31000 a la IA, con anexos sobre objetivos y fuentes de riesgo propias de la IA. Es la base para tu metodología de riesgos[^n23894].
- **Cuándo leerla:** antes de definir tus criterios de riesgo y tu método de evaluación.
- **Se conecta con:** [6.1.1](../clausulas/c6-planificacion.md#c-6-1-1) (una nota la recomienda, junto con 38507, para fijar el apetito de riesgo), [6.1.2](../clausulas/c6-planificacion.md#c-6-1-2), [6.1.3](../clausulas/c6-planificacion.md#c-6-1-3), [8.2](../clausulas/c8-operacion.md#c-8-2) y el [Anexo C](../anexos-b-c-d.md), que remite a ella.

#### ISO/IEC 42005 · Evaluación de impacto de sistemas de IA {#n-42005}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-book-open-page-variant-outline: Guía</span>
<span class="dx-badge dx-badge--tiempo">:material-calendar-check-outline: Publicada: 2025-05-28</span>
</div>

- **Qué es y para qué te sirve:** orientación para planear, hacer y documentar evaluaciones de impacto de un sistema de IA sobre personas, grupos y sociedades; la mejor base para tu formato de evaluación. No es certificable[^n42005].
- **Cuándo leerla:** al construir el proceso de [6.1.4](../clausulas/c6-planificacion.md#c-6-1-4). ISO/IEC 42001 no la menciona porque se publicó después.
- **Se conecta con:** [6.1.4](../clausulas/c6-planificacion.md#c-6-1-4), [8.4](../clausulas/c8-operacion.md#c-8-4) y los controles [A.5.2](../anexo-a/a5-evaluacion-de-impacto.md#a-5-2) a [A.5.5](../anexo-a/a5-evaluacion-de-impacto.md#a-5-5). Ver [Riesgo frente a impacto](riesgo-vs-impacto.md).

#### ISO 31000 · Gestión del riesgo, directrices {#n-31000}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-book-open-page-variant-outline: Guía</span>
</div>

- **Qué es y cuándo leerla:** directrices generales para cualquier tipo de riesgo. Si tu gestión de riesgos corporativa se basa en ella, alinea tus criterios de riesgo de IA con esa escala en vez de inventar otra. ISO/IEC 42001 toma de ella, adaptada, su definición de control.
- **Se conecta con:** [6.1](../clausulas/c6-planificacion.md#c-6-1) y, a través de 23894, con todo el proceso de riesgos de IA.

### Gobernanza

#### ISO/IEC 38507 · Implicaciones de gobernanza del uso de IA {#n-38507}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-book-open-page-variant-outline: Guía</span>
<span class="dx-badge dx-badge--tiempo">:material-calendar-check-outline: Publicada: 2022-04-08</span>
</div>

- **Qué es y para qué te sirve:** guía para el órgano de gobierno (consejo, socios, dirección general) sobre cómo dirigir y supervisar el uso de IA; pertenece a la familia ISO/IEC 38500 de gobierno de TI[^n38507].
- **Cuándo leerla:** antes de redactar la política de IA; es clave en la [ruta para directivos](../empieza-aqui/rutas-de-lectura.md#ruta-directivo).
- **Se conecta con:** [5.1](../clausulas/c5-liderazgo.md#c-5-1), [5.2](../clausulas/c5-liderazgo.md#c-5-2) (una nota la recomienda para la política), [6.1.1](../clausulas/c6-planificacion.md#c-6-1-1) (apetito de riesgo) y [A.2.3](../anexo-a/a2-politicas.md#a-2-3) Alineación con otras políticas.

### Ciclo de vida y calidad

#### ISO/IEC 5338 · Procesos del ciclo de vida de sistemas de IA {#n-5338}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-book-open-page-variant-outline: Norma de procesos</span>
<span class="dx-badge dx-badge--tiempo">:material-calendar-check-outline: Publicada: 2023-12-20</span>
</div>

- **Qué es y para qué te sirve:** procesos que cubren de punta a punta la vida de un sistema de IA, construidos sobre ISO/IEC/IEEE 15288 (sistemas) e ISO/IEC/IEEE 12207 (software)[^n5338]. Si ya tienes un ciclo de desarrollo o MLOps, te muestra qué le falta para la IA.
- **Cuándo leerla:** al escribir tu procedimiento de ciclo de vida.
- **Se conecta con:** [A.6.1.3](../anexo-a/a6-ciclo-de-vida.md#a-6-1-3) Procesos para el diseño y desarrollo responsable y [A.6.2.2](../anexo-a/a6-ciclo-de-vida.md#a-6-2-2) Requisitos y especificación, cuya guía la cita.

#### ISO/IEC 25059 · Modelo de calidad para sistemas de IA {#n-25059}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-book-open-page-variant-outline: Modelo de calidad</span>
<span class="dx-badge dx-badge--tiempo">:material-calendar-alert-outline: Publicada: 2023-06-28 · se revisará</span>
</div>

- **Qué es y para qué te sirve:** adapta el modelo de calidad de software de la serie SQuaRE a la IA, con características propias como la robustez, para convertir "que funcione bien" en criterios medibles. Su ficha la marca como "se revisará"; su reemplazo (modelos de calidad, en plural) está en FDIS[^n25059].
- **Cuándo leerla:** al definir criterios de aceptación y de desempeño.
- **Se conecta con:** [A.6.2.4](../anexo-a/a6-ciclo-de-vida.md#a-6-2-4) Verificación y validación y [A.6.2.6](../anexo-a/a6-ciclo-de-vida.md#a-6-2-6) Operación y monitoreo, cuya guía la propone para los criterios de desempeño; también con tus objetivos de IA ([6.2](../clausulas/c6-planificacion.md#c-6-2)).

#### Serie ISO/IEC 5259 · Calidad de datos para analítica y aprendizaje automático {#n-5259}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-book-open-page-variant-outline: Serie de normas y un TR</span>
<span class="dx-badge dx-badge--tiempo">:material-calendar-check-outline: Publicadas: 2024–2026</span>
</div>

- **Qué es y para qué te sirve:** seis partes: panorama y terminología (5259-1), medidas de calidad de datos (5259-2), requisitos y directrices para gestionarla (5259-3), marco de procesos (5259-4), marco de gobernanza (5259-5) y un informe técnico sobre visualización (TR 5259-6). Cuando se publicó ISO/IEC 42001 eran borradores; hoy están todas publicadas[^n5259].
- **Cuándo leerla:** si entrenas o ajustas modelos.
- **Se conecta con:** [A.4.3](../anexo-a/a4-recursos.md#a-4-3) Recursos de datos, [A.7.4](../anexo-a/a7-datos.md#a-7-4) Calidad de los datos y [A.7.6](../anexo-a/a7-datos.md#a-7-6) Preparación de los datos.

#### ISO/IEC TR 24029-1 · Robustez de redes neuronales {#n-24029}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-file-chart-outline: Informe técnico (TR)</span>
</div>

- **Qué es y cuándo leerla:** panorama de enfoques para evaluar si una red neuronal mantiene su desempeño ante perturbaciones o datos distintos de los de entrenamiento; útil si usas redes neuronales y debes definir pruebas de robustez.
- **Se conecta con:** [A.6.2.4](../anexo-a/a6-ciclo-de-vida.md#a-6-2-4) Verificación y validación, cuya guía la menciona.

#### ISO/IEC TS 4213 · Evaluación del desempeño de clasificación {#n-4213}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-file-cog-outline: Especificación técnica (TS)</span>
</div>

- **Qué es y cuándo leerla:** cómo medir y reportar de forma comparable el desempeño de clasificadores (matriz de confusión, exhaustividad, F1); léela al elegir métricas, como hizo Monarca Crédito para Score Monarca.
- **Se conecta con:** [A.6.2.4](../anexo-a/a6-ciclo-de-vida.md#a-6-2-4) y [A.6.2.6](../anexo-a/a6-ciclo-de-vida.md#a-6-2-6), cuya guía pone justamente el ejemplo de F1.

### Sesgo y ética

#### ISO/IEC TR 24027 · Sesgo en sistemas de IA y en decisiones asistidas por IA {#n-24027}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-file-chart-outline: Informe técnico (TR)</span>
<span class="dx-badge dx-badge--tiempo">:material-calendar-check-outline: Publicado: 2021-11-05</span>
</div>

- **Qué es y para qué te sirve:** describe de dónde surge el sesgo no deseado (personas, datos, decisiones de ingeniería) y cómo medirlo. Sigue vigente: TS 12791 no lo reemplazó[^n24027].
- **Cuándo leerla:** antes de diseñar tus pruebas de sesgo.
- **Se conecta con:** [A.7.4](../anexo-a/a7-datos.md#a-7-4) Calidad de los datos (su guía la cita), [A.5.4](../anexo-a/a5-evaluacion-de-impacto.md#a-5-4) y [A.6.2.4](../anexo-a/a6-ciclo-de-vida.md#a-6-2-4).

#### ISO/IEC TS 12791 · Tratamiento del sesgo no deseado {#n-12791}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-file-cog-outline: Especificación técnica (TS)</span>
<span class="dx-badge dx-badge--tiempo">:material-calendar-check-outline: Publicada: 2024-10-31</span>
</div>

- **Qué es y para qué te sirve:** técnicas para tratar el sesgo no deseado en tareas de clasificación y regresión con aprendizaje automático. Complementa a TR 24027: uno ayuda a entender y medir; la otra, a mitigar[^n24027]. Le viene como anillo al dedo a Monarca, que vigila diferencias por sexo, edad y entidad federativa.
- **Cuándo leerla:** cuando ya mediste un sesgo y necesitas reducirlo.
- **Se conecta con:** [A.6.2.4](../anexo-a/a6-ciclo-de-vida.md#a-6-2-4), [A.7.4](../anexo-a/a7-datos.md#a-7-4) y tus objetivos de equidad ([A.6.1.2](../anexo-a/a6-ciclo-de-vida.md#a-6-1-2)).

#### ISO/IEC TR 24368 · Panorama de preocupaciones éticas y sociales {#n-24368}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-file-chart-outline: Informe técnico (TR)</span>
<span class="dx-badge dx-badge--tiempo">:material-calendar-check-outline: Publicado: 2022-08-19</span>
</div>

- **Qué es y para qué te sirve:** repasa las preocupaciones éticas y sociales que despierta la IA y los marcos internacionales que las abordan[^n24368].
- **Cuándo leerla:** al redactar la política de IA y al evaluar impactos sociales.
- **Se conecta con:** [A.5.5](../anexo-a/a5-evaluacion-de-impacto.md#a-5-5) Evaluación de impactos sociales (su guía la cita), [A.2.2](../anexo-a/a2-politicas.md#a-2-2) y [Principios de IA responsable](principios-ia-responsable.md).

### Certificación

#### ISO/IEC 42006 · Requisitos para organismos que auditan y certifican SGIA {#n-42006}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-certificate-outline: Requisitos para organismos de certificación</span>
<span class="dx-badge dx-badge--tiempo">:material-calendar-check-outline: Publicada: 2025-07-07</span>
</div>

- **Qué es:** requisitos que se suman a ISO/IEC 17021-1, sin reemplazarla, para quienes certifican ISO/IEC 42001: competencias técnicas del personal, cálculo del tiempo de auditoría (en un anexo normativo, con otro de ejemplos), auditoría remota, auditorías inicial, de seguimiento y de recertificación, y un modelo de certificado[^n42006].
- **Para qué te sirve, aunque no la cumplas tú:** al elegir organismo de certificación, para saber qué competencias pedir y por qué te cotizan cierto número de días. Pregunta quién lo acredita y con qué criterios. En México, el buscador de la ema muestra a NYCE y QSR acreditados para ISO/IEC 42001 con base en ISO/IEC 17021-1; sus fichas no mencionan 42006[^ema]. Más en [Cómo se certifica](../auditoria/como-se-certifica.md).

#### ISO/IEC 17021-1 · Requisitos para organismos que certifican sistemas de gestión {#n-17021}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-certificate-outline: Requisitos para organismos de certificación</span>
<span class="dx-badge dx-badge--tiempo">:material-calendar-alert-outline: Edición 2015 · en revisión sistemática</span>
</div>

- **Qué es y para qué te sirve:** la base de cualquier certificación de sistemas de gestión (imparcialidad, competencia, proceso de auditoría); léela para entender la mecánica de la certificación. Está en revisión sistemática, sin decisión publicada al 9 de octubre de 2026[^n17021].
- **Se conecta con:** 42006, que la complementa, y con [Cómo se certifica](../auditoria/como-se-certifica.md).

### Sistemas hermanos

#### ISO/IEC 27001 · Seguridad de la información {#n-27001}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-file-document-check-outline: Requisitos certificables</span>
<span class="dx-badge dx-badge--tiempo">:material-calendar-check-outline: Publicada: 2022-10-25 · Amd 1: 2024-02-23</span>
</div>

- **Qué es y para qué te sirve:** el SGSI, que conviene integrar si ya lo tienes porque comparte la estructura armonizada de 42001; su enmienda de 2024 añadió el cambio climático[^n27001]. El SGIA aporta lo que el SGSI no mira: impactos en personas, ciclo de vida y datos de entrenamiento.
- **Se conecta con:** el [Anexo D](../anexos-b-c-d.md), [A.8.4](../anexo-a/a8-informacion-partes-interesadas.md#a-8-4) Comunicación de incidentes y las amenazas propias de la IA en [A.6.2.6](../anexo-a/a6-ciclo-de-vida.md#a-6-2-6). Detalle en [Integración con ISO 27001](../integracion/con-iso27001.md).

#### ISO/IEC 27701 · Gestión de la privacidad {#n-27701}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-file-document-check-outline: Requisitos certificables</span>
<span class="dx-badge dx-badge--tiempo">:material-calendar-check-outline: Edición 2: 2025-10-14</span>
</div>

- **Qué es y para qué te sirve:** la edición de 2019 era una extensión de ISO/IEC 27001 y 27002; la de 2025 es una norma de sistema de gestión independiente que puede usarse sola[^n27701] (la bibliografía de 42001 aún cita el título anterior). Es la compañera natural cuando tu IA trata datos personales, junto con ISO/IEC 29100.
- **Se conecta con:** [A.10.2](../anexo-a/a10-terceros.md#a-10-2) (su guía sugiere considerar sus controles), [A.8.4](../anexo-a/a8-informacion-partes-interesadas.md#a-8-4), [A.7](../anexo-a/a7-datos.md) y [Roles en la IA](roles-en-la-ia.md).

#### ISO 9001 · Gestión de la calidad {#n-9001}

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-file-document-check-outline: Requisitos certificables</span>
</div>

- **Qué es y cuándo leerla:** el sistema de gestión de la calidad; su sexta edición (ISO 9001:2026) salió en septiembre de 2026[^r9001]. Si ya lo tienes, reutiliza control documental, auditoría interna y acciones correctivas; el Anexo D de 42001 la menciona.
- **Se conecta con:** [7.5](../clausulas/c7-apoyo.md#c-7-5), [9.2](../clausulas/c9-evaluacion-del-desempeno.md#c-9-2) y [10.2](../clausulas/c10-mejora.md#c-10-2), comunes a la estructura armonizada.

## Tabla resumen

| Norma | Título en español (libre) | Título oficial en inglés (parte final) | Tipo | Estado al 9-10-2026 | Relación con 42001 |
|---|---|---|---|---|---|
| ISO/IEC 42001:2023 | Sistema de gestión de IA | Artificial intelligence — Management system | Requisitos certificables | Publicada (2023-12-18) | La norma |
| ISO/IEC 22989:2022 | Conceptos y terminología de IA | Artificial intelligence concepts and terminology | Conceptos | Publicada (2022-07-19); enmienda en FDAmd | Referencia normativa; 4.1 |
| ISO/IEC 23053:2022 | Marco para sistemas de IA con ML | Framework for Artificial Intelligence (AI) Systems Using Machine Learning (ML) | Marco | Publicada (2022-06-20); enmienda en FDAmd | A.4.4, A.6.2.6, A.7.6 |
| ISO/IEC 23894:2023 | Guía de gestión del riesgo de IA | Guidance on risk management | Guía | Publicada (2023-02-06) | 6.1, 8.2, Anexo C |
| ISO/IEC 42005:2025 | Evaluación de impacto de sistemas de IA | AI system impact assessment | Guía | Publicada (2025-05-28) | 6.1.4, 8.4, A.5 |
| ISO 31000:2018 | Gestión del riesgo, directrices | Risk management — Guidelines | Guía | Publicada en febrero de 2018; ISO la marca como en revisión[^r31000] | 6.1 |
| ISO/IEC 38507:2022 | Gobernanza del uso de IA | Governance implications of the use of artificial intelligence by organizations | Guía | Publicada (2022-04-08) | 5.1, 5.2, 6.1.1, A.2.3 |
| ISO/IEC 5338:2023 | Procesos del ciclo de vida de IA | AI system life cycle processes | Procesos | Publicada (2023-12-20) | A.6.1.3, A.6.2.2 |
| ISO/IEC 25059:2023 | Modelo de calidad para sistemas de IA | Quality model for AI systems | Modelo | Se revisará; reemplazo en FDIS | A.6.2.4, A.6.2.6 |
| ISO/IEC 5259-1 a -5, TR 5259-6 | Calidad de datos para analítica y ML | Data quality for analytics and machine learning (ML) | Serie y TR | Publicadas (2024–2026) | A.4.3, A.7.4, A.7.6 |
| ISO/IEC TR 24029-1:2021 | Robustez de redes neuronales | Assessment of the robustness of neural networks — Part 1: Overview | TR | Publicado en marzo de 2021[^r24029] | A.6.2.4 |
| ISO/IEC TS 4213:2022 | Desempeño de clasificación en ML | Assessment of machine learning classification performance | TS | Publicada en octubre de 2022; ISO la marca como en revisión[^r4213] | A.6.2.4, A.6.2.6 |
| ISO/IEC TR 24027:2021 | Sesgo en IA y decisiones asistidas | Bias in AI systems and AI aided decision making | TR | Publicado (2021-11-05) | A.7.4, A.5.4 |
| ISO/IEC TS 12791:2024 | Tratamiento del sesgo no deseado | Treatment of unwanted bias in classification and regression machine learning tasks | TS | Publicada (2024-10-31) | A.6.2.4, A.7.4 |
| ISO/IEC TR 24368:2022 | Preocupaciones éticas y sociales | Overview of ethical and societal concerns | TR | Publicado (2022-08-19) | A.5.5, A.2.2 |
| ISO/IEC 42006:2025 | Requisitos para quien certifica SGIA | Requirements for bodies providing audit and certification of artificial intelligence management systems | Requisitos para organismos | Publicada (2025-07-07) | Certificación |
| ISO/IEC 17021-1:2015 | Requisitos para quien certifica sistemas de gestión | Requirements for bodies providing audit and certification of management systems | Requisitos para organismos | En revisión sistemática | Certificación |
| ISO/IEC 27001:2022 | Seguridad de la información | Information security management systems — Requirements | Requisitos certificables | Publicada (2022-10-25); Amd 1 de 2024 | Anexo D, A.8.4 |
| ISO/IEC 27701:2025 | Gestión de la privacidad | Privacy information management systems — Requirements and guidance | Requisitos certificables | Publicada (2025-10-14) | A.10.2, A.7 |
| ISO 9001:2026 | Gestión de la calidad | Quality management systems — Requirements | Requisitos certificables | Sexta edición, publicada el 16 de septiembre de 2026; sustituye a la de 2015 (fuente secundaria)[^r9001] | Anexo D |


## Lo que viene: normas en desarrollo

Etapas de ISO: 20.00 (proyecto registrado), 30 (borrador de comité, CD), 40 (DIS), 50 (proyecto final, FDIS), 60.00 (en publicación) y 60.60 (publicada). Lo que no está en 60.60 **no es norma publicada**.

| Proyecto | Qué será | Etapa al 9-10-2026 |
|---|---|---|
| ISO/IEC AWI 42003 | Guía de implementación de ISO/IEC 42001, con competencias para profesionales del SGIA; no la modifica | 20.00 (registrado el 2025-03-11)[^n42003] |
| ISO/IEC DIS 42007 | Guía para diseñar esquemas de evaluación de la conformidad de sistemas de IA | 40.20 (votación DIS iniciada el 2026-08-11)[^n42007] |
| ISO/IEC 27090 | Ciberseguridad: amenazas y ataques contra sistemas de IA | 60.00, en publicación desde el 2026-08-19; ISO la anuncia para octubre de 2026, pero aún no está en 60.60[^n27090] |
| ISO/IEC 22989/FDAmd 1 | Enmienda sobre IA generativa | 50.00 desde el 2026-09-18[^n22989] |
| ISO/IEC 22989/CD Amd 2 | Segunda enmienda (sin subtítulo público) | 30.20 desde el 2026-08-28[^n22989] |
| ISO/IEC 23053/FDAmd 1 | Enmienda sobre IA generativa | 50.00 desde el 2026-08-28[^n23053] |
| ISO/IEC 23053/AWI Amd 2 | Segunda enmienda (sin subtítulo público) | 20.00 desde el 2025-10-27[^n23053] |
| ISO/IEC FDIS 25059 | Reemplazo de 25059: modelos de calidad para sistemas de IA | 50.00 desde el 2026-07-23[^n25059] |
| ISO/IEC FDIS 42105, DTS 25568, DTS 22443 | Supervisión humana; riesgos de la IA generativa; preocupaciones sociales y consideraciones éticas | 50.20, 50.00 y 50.20[^sc42] |

!!! warning "Rumores que conviene desmentir"
    Al 9 de octubre de 2026 no hay enmienda ni revisión de ISO/IEC 42001 en curso, y en el catálogo del comité no existen ISO/IEC 42002, 42004 ni 42008[^sc42].

??? info "Otras normas publicadas del mismo comité que vale la pena conocer"
    ISO/IEC 12792:2025 (taxonomía de transparencia de sistemas de IA), ISO/IEC TS 6254:2025 (explicabilidad), ISO/IEC TS 8200:2024 (controlabilidad), ISO/IEC TR 20226:2025 (sostenibilidad ambiental), ISO/IEC TS 42119-2:2025 (pruebas de sistemas de IA) e ISO/IEC TR 5469:2024 (seguridad funcional y sistemas de IA)[^sc42].

## Adopciones nacionales

Algunos organismos nacionales publican ISO/IEC 42001 con su propia designación, a veces traducida, sin cambiar su contenido técnico:

- **España:** UNE-ISO/IEC 42001:2025, versión en español publicada por UNE[^une].
- **Europa:** EN ISO/IEC 42001:2026, adopción sin cambios. En Estonia, por ejemplo, rige desde el 1 de abril de 2026 y no está vinculada a ninguna directiva o reglamento; es decir, no es una norma armonizada del [Reglamento de IA de la UE](../integracion/reglamento-ia-ue.md)[^evs].
- **Japón:** JIS Q 42001:2025, criterio de su esquema de evaluación de la conformidad de SGIA[^jp].
- **Perú:** el reglamento de la Ley 31814 obliga a las entidades públicas que desarrollan sistemas de IA a usar la NTP-ISO/IEC 42001:2025, promueve además ISO/IEC 23053:2022 e ISO/IEC 38507:2022, y hace obligatorias para entidades públicas la NTP-ISO/IEC 27002 y la NTP-ISO 31000[^pe].

!!! latam "En México y Latinoamérica"
    No encontramos una NMX que adopte ISO/IEC 42001; los organismos acreditados por la ema certifican directamente contra ISO/IEC 42001:2023. Para otros países de la región no confirmamos adopciones en fuentes oficiales. El panorama regulatorio está en [Contexto en México y Latinoamérica](../integracion/contexto-mexico-latam.md).

## Por dónde empezar según tu perfil

| Si tú… | Empieza por | Después |
|---|---|---|
| Usas IA de terceros | 22989 | 42005 y 23894 |
| Desarrollas IA | 5338 y la serie 5259 | TR 24027, TS 12791, TS 4213, 25059 y TR 24029-1 |
| Provees IA a clientes | 42005 y 27701 | 25059 y, cuando se publique, 27090 |
| Diriges o eres consejero | 38507 | 23894 |
| Auditas o te preparas para certificar | 42006 | 17021-1 y 22989 |

!!! warning "Errores comunes"
    - **Querer "certificarse" en 23894, 42005 o 38507.** Son guías; la certificación es en ISO/IEC 42001.
    - **Comprar toda la familia de golpe.** Empieza por 42001 y 22989.
    - **Citar borradores como normas publicadas**, por ejemplo una enmienda en FDAmd o una norma en 60.00.
    - **Creer que ISO/IEC 42006 obliga a tu organización.** Obliga a quien te certifica.
    - **Seguir tratando ISO/IEC 27701 como extensión obligada de 27001.** Desde su edición de 2025 puede usarse sola.

## Preguntas para tu organización

- [ ] ¿Tenemos acceso a ISO/IEC 22989, la referencia normativa de ISO/IEC 42001?
- [ ] ¿Nuestra metodología de riesgos de IA se inspira en 23894 y se alinea con nuestra gestión de riesgos corporativa?
- [ ] ¿Usamos una guía reconocida, como 42005, para diseñar la evaluación de impacto?
- [ ] Si desarrollamos IA, ¿nuestras pruebas de sesgo, robustez y desempeño se apoyan en métricas reconocidas?
- [ ] ¿Sabemos qué acreditación y qué criterios usa el organismo que nos certificaría?
- [ ] ¿Podemos integrar el SGIA con un SGSI, un sistema de privacidad o de calidad que ya tengamos?

## Para seguir leyendo

<div class="grid cards" markdown>

-   :material-account-group-outline:{ .lg .middle } **Roles en la IA**

    ---

    Los roles de ISO/IEC 22989 y cómo cambian lo que la norma te pide.

    [:octicons-arrow-right-24: Ir](roles-en-la-ia.md)

-   :material-scale-balance:{ .lg .middle } **Riesgo frente a impacto**

    ---

    Cómo se combinan 23894 y 42005 dentro del SGIA.

    [:octicons-arrow-right-24: Ir](riesgo-vs-impacto.md)

-   :material-shield-link-variant-outline:{ .lg .middle } **Integración con ISO 27001**

    ---

    Cómo aprovechar tu SGSI para construir el SGIA.

    [:octicons-arrow-right-24: Ir](../integracion/con-iso27001.md)

-   :material-certificate-outline:{ .lg .middle } **Cómo se certifica**

    ---

    El proceso de certificación y el papel de ISO/IEC 42006.

    [:octicons-arrow-right-24: Ir](../auditoria/como-se-certifica.md)

</div>

[^n42001]: Ficha de ISO/IEC 42001:2023, <https://www.iso.org/standard/81230.html>, y comunicado conjunto ISO-IAF sobre las enmiendas por cambio climático (22 de febrero de 2024), que no incluye a ISO/IEC 42001 entre las normas enmendadas: <https://iaf.nu/iaf_system/uploads/documents/Joint_ISO-IAF_Communique_re_Climate_Change_Amds_to_ISO_MSS_Feb_2024_Final.pdf>. Consultados el 9 de octubre de 2026. Las fichas de ISO se consultaron en su espejo oficial committee.iso.org.

[^n22989]: Fichas de ISO/IEC 22989:2022 (<https://www.iso.org/standard/74296.html>), de su FDAmd 1 (<https://www.iso.org/standard/88145.html>) y de su CD Amd 2 (<https://www.iso.org/standard/93144.html>); cláusula 2 de ISO/IEC 42001 en la vista previa oficial de IEC (<https://webstore.iec.ch/en/publication/90574>). Consultadas el 9 de octubre de 2026.

[^n23053]: Fichas de ISO/IEC 23053:2022 (<https://www.iso.org/standard/74438.html>), de su FDAmd 1 (<https://www.iso.org/standard/88149.html>) y de su AWI Amd 2 (<https://www.iso.org/standard/93146.html>). Consultadas el 9 de octubre de 2026.

[^n23894]: Ficha de ISO/IEC 23894:2023, <https://www.iso.org/standard/77304.html>, consultada el 9 de octubre de 2026.

[^n42005]: Ficha de ISO/IEC 42005:2025, <https://www.iso.org/standard/44545.html>, consultada el 9 de octubre de 2026.

[^n38507]: Ficha de ISO/IEC 38507:2022, <https://www.iso.org/standard/56641.html>, consultada el 9 de octubre de 2026.

[^n5338]: Ficha de ISO/IEC 5338:2023, <https://www.iso.org/standard/81118.html>, consultada el 9 de octubre de 2026.

[^n25059]: Fichas de ISO/IEC 25059:2023 (<https://www.iso.org/standard/80655.html>), en etapa 90.92 desde el 31 de octubre de 2023, y de ISO/IEC FDIS 25059 (<https://www.iso.org/standard/88234.html>). Consultadas el 9 de octubre de 2026.

[^n5259]: Fichas de ISO/IEC 5259-1:2024 (publicada el 2024-07-02, <https://www.iso.org/standard/81088.html>), 5259-2:2024 (2024-11-05, <https://www.iso.org/standard/81860.html>), 5259-3:2024 (2024-07-02, <https://www.iso.org/standard/81092.html>), 5259-4:2024 (2024-07-15, <https://www.iso.org/standard/81093.html>), 5259-5:2025 (2025-02-12) y TR 5259-6:2026 (2026-05-04), estas dos en el catálogo del comité. Consultadas el 9 de octubre de 2026.

[^n24027]: Fichas de ISO/IEC TR 24027:2021 (<https://www.iso.org/standard/77607.html>) y de ISO/IEC TS 12791:2024 (<https://www.iso.org/standard/84110.html>). Consultadas el 9 de octubre de 2026.

[^n24368]: Ficha de ISO/IEC TR 24368:2022, <https://www.iso.org/standard/78507.html>, consultada el 9 de octubre de 2026.

[^n42006]: Ficha de ISO/IEC 42006:2025 y sus preguntas frecuentes, <https://www.iso.org/standard/44546.html>, e índice en la vista previa oficial de IEC, <https://webstore.iec.ch/en/publication/108460>. Consultados el 9 de octubre de 2026.

[^ema]: Buscador público SAEMA de la ema, programa ISO/IEC 42001:2023 para organismos de certificación de sistemas: <https://ema.mx/saema/ConsultaPublica/Acreditados/Busqueda/OCS>. NYCE con el programa vigente desde el 08/12/2024 y QSR desde el 30/07/2025. Consultado el 9 de octubre de 2026.

[^n17021]: Ficha de ISO/IEC 17021-1:2015, <https://www.iso.org/standard/61651.html>: etapa 90.20 desde el 15 de octubre de 2025 y cierre de la revisión (90.60) el 5 de marzo de 2026. Consultada el 9 de octubre de 2026.

[^n27001]: Fichas de ISO/IEC 27001:2022 (<https://www.iso.org/standard/82875.html>) y de ISO/IEC 27001:2022/Amd 1:2024 (<https://www.iso.org/standard/88435.html>). Consultadas el 9 de octubre de 2026.

[^n27701]: Fichas de ISO/IEC 27701:2025 y sus preguntas frecuentes (<https://www.iso.org/standard/85819.html>) y de ISO/IEC 27701:2019, retirada el 14 de octubre de 2025 (<https://www.iso.org/standard/71670.html>). Consultadas el 9 de octubre de 2026.

[^n42003]: Ficha de ISO/IEC AWI 42003, <https://www.iso.org/standard/91021.html>, consultada el 9 de octubre de 2026.

[^n42007]: Ficha de ISO/IEC DIS 42007, <https://www.iso.org/standard/89967.html>, consultada el 9 de octubre de 2026.

[^n27090]: Ficha de ISO/IEC 27090, <https://www.iso.org/standard/56581.html>, consultada el 9 de octubre de 2026.

[^sc42]: Catálogo del comité ISO/IEC JTC 1/SC 42, <https://committee.iso.org/committee/6794475/x/catalogue/p/1/u/0/w/0/d/0>, y ficha de ISO/IEC 42001:2023, consultados el 9 de octubre de 2026.

[^une]: UNE, nota de prensa del 24 de abril de 2025, <https://www.une.org/salainformaciondocumentos/NP_Estandar_UNE_ISO_IA.pdf>, consultada el 9 de octubre de 2026.

[^evs]: EVS-EN ISO/IEC 42001:2026, ficha del organismo de normalización de Estonia, <https://www.evs.ee/en/evs-en-iso-iec-42001-2026>, consultada el 9 de octubre de 2026.

[^jp]: ISMS-AC, esquema de evaluación de la conformidad de SGIA, <https://isms.jp/english/aims/about.html>, consultado el 9 de octubre de 2026.

[^pe]: Decreto Supremo N.° 115-2025-PCM, Reglamento de la Ley 31814 (El Peruano, 9 de septiembre de 2025), artículos 28.2 y 33.1 y Sexta Disposición Complementaria Final. <https://busquedas.elperuano.pe/dispositivo/NL/2436426-1>, consultado el 9 de octubre de 2026.

[^r31000]: Ficha de ISO 31000:2018 en el sitio de comités de ISO (publicada el 14 de febrero de 2018; etapa 90.92, en revisión). <https://committee.iso.org/standard/65694.html>, consultada el 9 de octubre de 2026.

[^r24029]: Ficha de ISO/IEC TR 24029-1:2021 en el sitio de comités de ISO (publicada el 10 de marzo de 2021). <https://committee.iso.org/standard/77609.html>, consultada el 9 de octubre de 2026.

[^r4213]: Ficha de ISO/IEC TS 4213:2022 en el sitio de comités de ISO (publicada el 13 de octubre de 2022; etapa 90.92, en revisión). <https://committee.iso.org/standard/79799.html>, consultada el 9 de octubre de 2026.

[^r9001]: NSF, "ISO 9001:2026 published on September 16, 2026: what quality leaders need to know" (fuente secundaria; la ficha de ISO no permitió acceso automatizado). <https://www.nsf.org/knowledge-library/iso-90012026-published-on-september-16-2026-what-quality-leaders-need-to-know>, consultado el 9 de octubre de 2026.

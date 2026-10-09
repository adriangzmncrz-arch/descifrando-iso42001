---
description: Los 38 controles del Anexo A de ISO/IEC 42001 en una tabla periódica interactiva y una matriz filtrable por objetivo, rol, esfuerzo y novedad frente a ISO 27001.
---

# Anexo A · Los 38 controles

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-view-grid-outline: 38 controles · 9 objetivos</span>
<span class="dx-badge dx-badge--rol-usa">:material-cloud-download-outline: Usa IA de terceros</span>
<span class="dx-badge dx-badge--rol-desarrolla">:material-code-braces: Desarrolla IA</span>
<span class="dx-badge dx-badge--rol-provee">:material-handshake-outline: Provee IA a clientes</span>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: 8 min de lectura</span>
</div>

!!! abstract "En una frase"
    El Anexo A es un catálogo de referencia de 38 controles agrupados en 9 objetivos: no tienes que aplicarlos todos, pero sí compararlos con tus riesgos, decidir cuáles necesitas y justificar en tu Declaración de Aplicabilidad por qué incluyes o excluyes cada uno.

## Qué es el Anexo A y cómo se usa

El Anexo A de ISO/IEC 42001 es **normativo**: forma parte de los requisitos auditables. Funciona igual que el Anexo A de ISO 27001: es una lista de controles de referencia contra la que comparas los controles que salieron de tu tratamiento de riesgos ([6.1.3](../clausulas/c6-planificacion.md#c-6-1-3)) para asegurarte de que no se te pasó nada importante.

Tres ideas para no perderte:

1. **No es una lista de verificación obligatoria.** Seleccionas controles según tus riesgos de IA, tus evaluaciones de impacto y tus obligaciones. Puedes excluir controles si lo justificas, y también agregar controles propios que no estén en el anexo.
2. **Cada objetivo agrupa controles con una misma finalidad.** El objetivo te dice *para qué* existen esos controles; la guía de cada control te dice *cómo* se ve en la práctica. El objetivo A.6 se divide en dos subobjetivos (A.6.1 y A.6.2), por eso hay controles con cuatro niveles de numeración, como A.6.2.4.
3. **El Anexo B explica cómo implementar cada control.** También está marcado como normativo, pero la norma aclara que no tienes que justificar en la Declaración de Aplicabilidad si sigues o no cada recomendación de esa guía. Lo explicamos en [Anexos B, C y D](../anexos-b-c-d.md).

!!! note "Sobre los nombres de los controles"
    Los nombres que usa esta guía son **traducciones libres de referencia** del autor. La redacción oficial puede variar según la versión de la norma que adquieras. Las clasificaciones de rol, esfuerzo y novedad frente a ISO 27001 también son interpretación del autor.

## La tabla periódica de los controles { #tabla-periodica }

Cada columna es un objetivo y cada celda, un control. El color identifica al objetivo en toda la guía; la estrella marca los controles que no tienen equivalente en ISO 27001 y los puntos indican el esfuerzo estimado. Haz clic en cualquier celda para ir a su guía.

<figure class="dx-infografia dx-tabla-periodica">
--8<-- "docs/assets/infografias/tabla-periodica.svg"
<figcaption>Tabla periódica de los 38 controles del Anexo A. En pantallas pequeñas, desliza horizontalmente.</figcaption>
</figure>

??? note "Descripción textual de la tabla periódica"
    La tabla tiene nueve columnas, una por objetivo, de izquierda a derecha: A.2 Políticas (3 controles), A.3 Organización interna (2), A.4 Recursos (5), A.5 Evaluación de impactos (4), A.6 Ciclo de vida (9), A.7 Datos (5), A.8 Información para las partes interesadas (4), A.9 Uso de sistemas de IA (3) y A.10 Terceros y clientes (3). En cada celda aparece el número del control, su nombre abreviado, un símbolo de novedad frente a ISO 27001 (estrella para "nuevo", aproximado para "similar" e igual para "equivalente") y de uno a tres puntos que indican el esfuerzo de implementación. La lista completa, con enlaces, está en la tabla al final de esta página.

### Lo que salta a la vista

- **17 de los 38 controles no tienen equivalente en ISO 27001.** Se concentran en evaluación de impactos (A.5), datos (A.7), información para las partes interesadas (A.8) y uso responsable (A.9). Es justo lo que una organización con un SGSI maduro tiene que construir desde cero.
- **A.6, Ciclo de vida, es el objetivo más grande (9 controles)** y pesa sobre todo en quien desarrolla o provee IA. Si solo usas IA de terceros, varios de sus controles suelen excluirse con justificación, aunque despliegue, operación y monitoreo y registro de eventos casi siempre aplican.
- **Los controles de esfuerzo alto** están donde la IA se distingue del software tradicional: evaluación de impacto, datos para desarrollo, calidad de datos, verificación y validación, y monitoreo en operación.

## Matriz filtrable { #matriz }

Filtra por objetivo, por el rol que tiene tu organización, por esfuerzo o por novedad frente a ISO 27001. Puedes descargar el resultado en CSV para empezar tu Declaración de Aplicabilidad (la [plantilla completa en Excel](../plantillas/index.md) trae validaciones y columnas de evidencia).

<div id="dx-matriz" class="dx-matriz" markdown>
!!! info "Cargando la matriz…"
    Si no ves los filtros, tu navegador tiene JavaScript desactivado. Abajo tienes la tabla completa de los 38 controles.
</div>

!!! tip "Enlaces con filtros"
    Puedes compartir la matriz ya filtrada agregando parámetros a la dirección. Por ejemplo, `?rol=usa` muestra los controles relevantes para quien usa IA de terceros y `?obj=A.7&esfuerzo=alto` los controles de datos con esfuerzo alto. El [selector de rol](../herramientas/selector-de-rol.md) usa estos enlaces.

## Cómo leer las guías de cada control

Cada objetivo tiene su página y cada control, una sección con el mismo formato:

| Bloque | Qué encontrarás |
|---|---|
| **Encabezado** | Número, nombre (traducción libre) e insignias: a quién aplica, esfuerzo y novedad frente a ISO 27001. |
| **Propósito y explicación práctica** | Qué problema previene el control y cómo se ve en una organización real. |
| **Mínimo viable frente a maduro** | Dos columnas: lo mínimo defendible ante un auditor y cómo luce una implementación madura. |
| **Evidencia, preguntas del auditor y errores comunes** | En pestañas, para consulta rápida. Si cambias de pestaña en un control, cambian todas las de la página. |
| **¿Se puede excluir?** | Cuándo una exclusión es razonable y cuándo sería una no conformidad. |
| **Relaciones** | Cláusulas, otros controles, ISO 27001, otras normas y el tipo de orientación que da el Anexo B. |

<div class="grid cards" markdown>

-   :material-file-document-edit-outline:{ .lg .middle } **A.2 · Políticas**

    ---

    Política de IA, alineación con otras políticas y su revisión.

    [:octicons-arrow-right-24: Ver objetivo](a2-politicas.md)

-   :material-account-group-outline:{ .lg .middle } **A.3 · Organización interna**

    ---

    Roles y responsabilidades de IA y canal para reportar inquietudes.

    [:octicons-arrow-right-24: Ver objetivo](a3-organizacion-interna.md)

-   :material-database-cog-outline:{ .lg .middle } **A.4 · Recursos**

    ---

    Datos, herramientas, cómputo y personas que componen cada sistema.

    [:octicons-arrow-right-24: Ver objetivo](a4-recursos.md)

-   :material-account-heart-outline:{ .lg .middle } **A.5 · Evaluación de impactos**

    ---

    Cómo afecta el sistema a personas, grupos y sociedad.

    [:octicons-arrow-right-24: Ver objetivo](a5-evaluacion-de-impacto.md)

-   :material-sync:{ .lg .middle } **A.6 · Ciclo de vida**

    ---

    Del requisito al monitoreo: diseño, pruebas, despliegue y operación.

    [:octicons-arrow-right-24: Ver objetivo](a6-ciclo-de-vida.md)

-   :material-database-search-outline:{ .lg .middle } **A.7 · Datos**

    ---

    Adquisición, calidad, procedencia y preparación de los datos.

    [:octicons-arrow-right-24: Ver objetivo](a7-datos.md)

-   :material-message-text-outline:{ .lg .middle } **A.8 · Información para las partes interesadas**

    ---

    Transparencia con usuarios, reportes externos e incidentes.

    [:octicons-arrow-right-24: Ver objetivo](a8-informacion-partes-interesadas.md)

-   :material-account-check-outline:{ .lg .middle } **A.9 · Uso de la IA**

    ---

    Uso responsable, supervisión humana y uso previsto.

    [:octicons-arrow-right-24: Ver objetivo](a9-uso.md)

-   :material-handshake-outline:{ .lg .middle } **A.10 · Terceros y clientes**

    ---

    Responsabilidades compartidas con proveedores, socios y clientes.

    [:octicons-arrow-right-24: Ver objetivo](a10-terceros.md)

</div>

## Tabla completa de los 38 controles { #tabla-completa }

??? abstract "Ver la tabla completa (sin filtros)"
    --8<-- "includes/tabla-controles.md"

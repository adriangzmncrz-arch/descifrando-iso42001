---
description: Plantillas descargables y editables para implementar ISO/IEC 42001 en español, en Markdown, Excel y CSV, con su relación con cláusulas y controles.
---

# Plantillas descargables

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-file-download-outline: 11 plantillas</span>
<span class="dx-badge dx-badge--rol-usa">:material-cloud-download-outline: Usa IA de terceros</span>
<span class="dx-badge dx-badge--rol-desarrolla">:material-code-braces: Desarrolla IA</span>
<span class="dx-badge dx-badge--rol-provee">:material-handshake-outline: Provee IA a clientes</span>
</div>

!!! abstract "En una frase"
    Puntos de partida editables para los documentos y registros más importantes de un SGIA: adáptalos a tu organización, no los copies tal cual.

!!! warning "Antes de usarlas"
    - Las plantillas son **material de apoyo** de esta guía, no un "SGIA en una caja". Un auditor no busca documentos bonitos, busca que lo que dicen ocurra en la práctica.
    - Están redactadas con palabras propias del autor y **no reproducen** texto de ISO/IEC 42001 ni de otras normas.
    - Los nombres de los controles son traducciones libres. Las clasificaciones y textos modelo son interpretación del autor y **no constituyen asesoría legal**.
    - Licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es): puedes usarlas y modificarlas, incluso con fines comerciales, citando la fuente y compartiendo tus adaptaciones públicas bajo la misma licencia. Los documentos internos de tu organización basados en ellas no tienen que publicarse.

## Cómo descargarlas

- **Markdown (.md):** ábrelas en cualquier editor de texto, en Word o en Google Docs (pegando el contenido), o en herramientas como Obsidian o Notion. Cada una tiene una vista previa en este sitio.
- **Excel (.xlsx):** funcionan en Microsoft Excel, LibreOffice Calc y Google Sheets. Incluyen listas desplegables, fórmulas, formato condicional y una hoja de instrucciones.
- **CSV:** la Declaración de Aplicabilidad también está en CSV para importarla en herramientas GRC.
- **Todo junto:** descarga el repositorio completo como [archivo ZIP](https://github.com/adriangzmncrz-arch/descifrando-iso42001/archive/refs/heads/main.zip); las plantillas están en la carpeta `plantillas/`.

Las plantillas Excel y CSV se generan con el script [`scripts/generar_plantillas_excel.py`](https://github.com/adriangzmncrz-arch/descifrando-iso42001/blob/main/scripts/generar_plantillas_excel.py) a partir de los datos de los controles, así que puedes regenerarlas o adaptarlas.

## Mapa de plantillas

| Plantilla | Formato | Cláusulas y controles | Para quién |
|---|---|---|---|
| [Política de IA](#politica-de-ia) | Markdown | 5.2 · A.2.2–A.2.4 | Todos |
| [Política de uso aceptable de IA generativa](#uso-aceptable-ia-generativa) | Markdown | 7.3 · A.2.2 · A.9.2 | Todos |
| [Roles y responsabilidades (RACI)](#raci-ia) | Markdown | 5.3 · A.3.2 · A.10.2 | Todos |
| [Inventario de sistemas de IA](#inventario-sistemas-ia) | Excel | 4.1 · 4.3 · A.4 | Todos |
| [Metodología y matriz de riesgos de IA](#evaluacion-de-riesgos) | Markdown + Excel | 6.1.1–6.1.3 · 8.2 · 8.3 | Todos |
| [Evaluación de impacto del sistema de IA](#evaluacion-de-impacto) | Markdown | 6.1.4 · 8.4 · A.5 | Todos |
| [Declaración de Aplicabilidad](#declaracion-de-aplicabilidad) | Excel + CSV | 6.1.3 · Anexo A | Todos |
| [Ficha del sistema de IA](#ficha-del-sistema) | Markdown | A.6.2.7 · A.8.2 · A.4 | Desarrolla · Provee |
| [Registro de incidentes de IA](#registro-de-incidentes) | Markdown + Excel | A.8.4 · A.6.2.6 · 10.2 | Todos |
| [Procedimiento del ciclo de vida](#procedimiento-ciclo-de-vida) | Markdown | A.6 · A.7 · A.5 | Desarrolla · Provee |
| [Checklist de auditoría interna](#checklist-auditoria-interna) | Markdown | 9.2 · cláusulas 4–10 · Anexo A | Auditores internos |

## Políticas y organización

### Política de IA { #politica-de-ia }

Política marco aprobada por la alta dirección: propósito, alcance, principios de IA responsable, compromisos de cumplimiento y mejora continua, reglas por tipo de actividad (usar, desarrollar o proveer IA), usos prohibidos, excepciones y revisión. Cubre lo que pide la cláusula [5.2](../clausulas/c5-liderazgo.md#c-5-2) y los controles [A.2.2 a A.2.4](../anexo-a/a2-politicas.md#a-2-2).

[:material-eye-outline: Vista previa](politica-de-ia.md){ .md-button } [:material-download: Descargar .md](https://raw.githubusercontent.com/adriangzmncrz-arch/descifrando-iso42001/main/plantillas/politica-de-ia.md){ .md-button .md-button--primary }

### Política de uso aceptable de IA generativa { #uso-aceptable-ia-generativa }

Reglas claras para colaboradores: herramientas autorizadas, datos que nunca se ingresan, verificación humana de resultados, propiedad intelectual, uso con clientes y cómo reportar incidentes. Es la herramienta más rápida contra la "IA en la sombra". Apoya [7.3](../clausulas/c7-apoyo.md#c-7-3) y [A.9.2](../anexo-a/a9-uso.md#a-9-2).

[:material-eye-outline: Vista previa](uso-aceptable-ia-generativa.md){ .md-button } [:material-download: Descargar .md](https://raw.githubusercontent.com/adriangzmncrz-arch/descifrando-iso42001/main/plantillas/politica-uso-aceptable-ia-generativa.md){ .md-button .md-button--primary }

### Roles y responsabilidades de IA (RACI) { #raci-ia }

Descripción de roles del SGIA y matriz RACI de las actividades clave: quién aprueba la política, quién evalúa el impacto, quién acepta riesgos residuales, quién supervisa a la IA. Incluye notas para PyMEs que acumulan roles. Apoya [5.3](../clausulas/c5-liderazgo.md#c-5-3), [A.3.2](../anexo-a/a3-organizacion-interna.md#a-3-2) y [A.10.2](../anexo-a/a10-terceros.md#a-10-2).

[:material-eye-outline: Vista previa](raci-ia.md){ .md-button } [:material-download: Descargar .md](https://raw.githubusercontent.com/adriangzmncrz-arch/descifrando-iso42001/main/plantillas/raci-ia.md){ .md-button .md-button--primary }

## Inventario, riesgo, impacto y aplicabilidad

### Inventario de sistemas de IA { #inventario-sistemas-ia }

Libro de Excel para registrar cada sistema de IA: propósito y uso previsto, rol de la organización, origen y proveedor, tipo de IA, datos (personales y sensibles), personas afectadas, nivel de riesgo, responsable y estado. Calcula si conviene una evaluación de impacto y la fecha de la siguiente revisión. Trae como ejemplo los sistemas de la empresa ficticia del [caso 1](../casos-practicos/pyme-usa-ia-generativa.md). Base para [4.1](../clausulas/c4-contexto.md#c-4-1), [4.3](../clausulas/c4-contexto.md#c-4-3) y [A.4](../anexo-a/a4-recursos.md).

[:material-microsoft-excel: Descargar .xlsx](https://raw.githubusercontent.com/adriangzmncrz-arch/descifrando-iso42001/main/plantillas/inventario-sistemas-ia.xlsx){ .md-button .md-button--primary }

### Metodología y matriz de riesgos de IA { #evaluacion-de-riesgos }

Dos piezas que van juntas:

- **Metodología (Markdown):** criterios de riesgo de IA, proceso de evaluación y tratamiento, quién acepta cada nivel y cuándo se reevalúa.
- **Matriz (Excel):** hoja de criterios editable (consecuencias para la organización, para individuos y para la sociedad; probabilidad; umbrales), registro de riesgos con cálculo automático del nivel inherente y residual, y mapas de calor 5 × 5. Trae ejemplos del [caso 2](../casos-practicos/fintech-scoring.md).

Cubre [6.1.1 a 6.1.3](../clausulas/c6-planificacion.md#c-6-1), [8.2](../clausulas/c8-operacion.md#c-8-2) y [8.3](../clausulas/c8-operacion.md#c-8-3).

[:material-eye-outline: Vista previa de la metodología](metodologia-evaluacion-riesgos.md){ .md-button } [:material-download: Descargar .md](https://raw.githubusercontent.com/adriangzmncrz-arch/descifrando-iso42001/main/plantillas/metodologia-evaluacion-riesgos-ia.md){ .md-button } [:material-microsoft-excel: Descargar matriz .xlsx](https://raw.githubusercontent.com/adriangzmncrz-arch/descifrando-iso42001/main/plantillas/matriz-riesgos-ia.xlsx){ .md-button .md-button--primary }

### Evaluación de impacto del sistema de IA { #evaluacion-de-impacto }

Formulario completo para valorar las consecuencias de un sistema de IA en personas, grupos y sociedad: uso previsto y uso indebido previsible, contexto, personas afectadas y grupos vulnerables, consulta, impactos positivos y negativos, severidad, mitigación, supervisión humana, decisión y comunicación. Está alineado conceptualmente con ISO/IEC 42005, sin reproducirla. Cubre [6.1.4](../clausulas/c6-planificacion.md#c-6-1-4), [8.4](../clausulas/c8-operacion.md#c-8-4) y [A.5](../anexo-a/a5-evaluacion-de-impacto.md).

[:material-eye-outline: Vista previa](evaluacion-de-impacto.md){ .md-button } [:material-download: Descargar .md](https://raw.githubusercontent.com/adriangzmncrz-arch/descifrando-iso42001/main/plantillas/evaluacion-de-impacto-sistema-ia.md){ .md-button .md-button--primary }

### Declaración de Aplicabilidad { #declaracion-de-aplicabilidad }

Los 38 controles del Anexo A listos para decidir: ¿aplica?, justificación de inclusión o exclusión, estado de implementación, riesgos que trata, evidencia típica (orientativa) y evidencia real, responsable y control relacionado de ISO 27001. Una columna de **validación** avisa si falta una decisión, una justificación, el estado o la evidencia, y una hoja de resumen calcula el avance por objetivo. Cubre [6.1.3](../clausulas/c6-planificacion.md#c-6-1-3).

[:material-microsoft-excel: Descargar .xlsx](https://raw.githubusercontent.com/adriangzmncrz-arch/descifrando-iso42001/main/plantillas/declaracion-de-aplicabilidad.xlsx){ .md-button .md-button--primary } [:material-file-delimited-outline: Descargar .csv](https://raw.githubusercontent.com/adriangzmncrz-arch/descifrando-iso42001/main/plantillas/declaracion-de-aplicabilidad.csv){ .md-button }

!!! tip "Combínala con la matriz filtrable"
    La [matriz de controles](../anexo-a/index.md#matriz) te deja filtrar por rol y descargar un CSV de partida. Si ya tienes una SoA de ISO 27001, revisa [cómo combinarlas](../integracion/con-iso27001.md).

## Ciclo de vida, operación y auditoría

### Ficha del sistema de IA { #ficha-del-sistema }

La "tarjeta de identidad" de un sistema de IA (*model card* o *system card*): propósito, usos fuera de alcance, componentes y modelos de terceros, datos, desempeño por segmento, limitaciones, supervisión humana, monitoreo y una versión en lenguaje claro para usuarios. Apoya [A.6.2.7](../anexo-a/a6-ciclo-de-vida.md#a-6-2-7), [A.8.2](../anexo-a/a8-informacion-partes-interesadas.md#a-8-2) y [A.4](../anexo-a/a4-recursos.md).

[:material-eye-outline: Vista previa](ficha-del-sistema.md){ .md-button } [:material-download: Descargar .md](https://raw.githubusercontent.com/adriangzmncrz-arch/descifrando-iso42001/main/plantillas/ficha-del-sistema-ia.md){ .md-button .md-button--primary }

### Registro de incidentes de IA { #registro-de-incidentes }

Procedimiento de gestión de incidentes de IA (detección, contención, comunicación a usuarios y autoridades, causa raíz, acción correctiva, lecciones aprendidas) y un registro en Excel con clasificación por tipo y severidad, alertas de seguimiento y resumen para la revisión por la dirección. Apoya [A.8.4](../anexo-a/a8-informacion-partes-interesadas.md#a-8-4), [A.6.2.6](../anexo-a/a6-ciclo-de-vida.md#a-6-2-6) y [10.2](../clausulas/c10-mejora.md#c-10-2).

[:material-eye-outline: Vista previa del procedimiento](registro-de-incidentes.md){ .md-button } [:material-download: Descargar .md](https://raw.githubusercontent.com/adriangzmncrz-arch/descifrando-iso42001/main/plantillas/registro-de-incidentes-ia.md){ .md-button } [:material-microsoft-excel: Descargar registro .xlsx](https://raw.githubusercontent.com/adriangzmncrz-arch/descifrando-iso42001/main/plantillas/registro-incidentes-ia.xlsx){ .md-button .md-button--primary }

### Procedimiento de gestión del ciclo de vida del sistema de IA { #procedimiento-ciclo-de-vida }

Etapas del ciclo de vida con entradas, salidas, responsables, puertas de aprobación y criterios de liberación; cuándo evaluar el impacto; gestión de cambios significativos; y una variante simplificada para sistemas de terceros. Apoya los controles de [A.6](../anexo-a/a6-ciclo-de-vida.md) y [A.7](../anexo-a/a7-datos.md).

[:material-eye-outline: Vista previa](procedimiento-ciclo-de-vida.md){ .md-button } [:material-download: Descargar .md](https://raw.githubusercontent.com/adriangzmncrz-arch/descifrando-iso42001/main/plantillas/procedimiento-ciclo-de-vida-ia.md){ .md-button .md-button--primary }

### Checklist de auditoría interna { #checklist-auditoria-interna }

Lista de verificación por cláusula (4 a 10) y por los 38 controles del Anexo A, con pregunta guía, evidencia a revisar y resultado (conforme, no conformidad, observación o no aplica). Apoya [9.2](../clausulas/c9-evaluacion-del-desempeno.md#c-9-2) y complementa el [checklist de preparación](../auditoria/checklist-preparacion.md).

[:material-eye-outline: Vista previa](checklist-auditoria-interna.md){ .md-button } [:material-download: Descargar .md](https://raw.githubusercontent.com/adriangzmncrz-arch/descifrando-iso42001/main/plantillas/checklist-auditoria-interna.md){ .md-button .md-button--primary }

## ¿Te falta una plantilla?

Propón una nueva con la plantilla de *issue* "Propuesta de mejora" en [GitHub](https://github.com/adriangzmncrz-arch/descifrando-iso42001/issues). Si la adaptaste para un sector, considera compartir tu versión (sin información confidencial).

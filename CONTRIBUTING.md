# Cómo contribuir a Descifrando ISO 42001

¡Gracias por tu interés! Esta guía mejora con la experiencia de quienes implementan y auditan sistemas de gestión de IA en la región. Antes de contribuir, lee estas reglas.

## Regla de oro: derechos de autor

**Nunca copies texto de ISO/IEC 42001 ni de otras normas ISO/IEC**, ni siquiera fragmentos cortos o "casi literales". Las normas están protegidas por derechos de autor.

- Explica con tus propias palabras y referencia por número: "la cláusula 6.1.4 pide…", "el control A.7.4…".
- Los nombres de los controles del Anexo A que usa la guía son **traducciones libres** del autor; están en [`data/controles.yml`](data/controles.yml). No los sustituyas por la redacción de una versión oficial.
- Si citas leyes o regulaciones, enlaza la fuente oficial e indica la fecha de consulta.

Un *pull request* que incluya texto de una norma será rechazado.

## Tipos de contribución

| Quieres… | Haz esto |
|---|---|
| Reportar un error de interpretación | Abre un *issue* con la plantilla **Error de interpretación**. |
| Proponer una mejora | Abre un *issue* con la plantilla **Propuesta de mejora**. |
| Aportar un caso práctico | Abre un *issue* con la plantilla **Nuevo caso práctico**. Los casos deben ser ficticios o estar anonimizados. |
| Corregir una errata | Envía un *pull request* directo. |

## Flujo de trabajo

1. Haz un *fork* y crea una rama descriptiva: `fix/a7-procedencia-datos` o `feat/caso-hospital`.
2. Instala las dependencias y levanta el sitio:
   ```bash
   pip install -r requirements.txt
   mkdocs serve
   ```
3. Antes de enviar tu cambio, verifica:
   ```bash
   python scripts/validar_contenido.py
   mkdocs build --strict
   ```
4. Usa mensajes de *commit* en español con [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/):
   - `feat(anexo-a): guía del control A.7.5 Procedencia de los datos`
   - `fix(clausulas): corrige enlace en 6.1.3`
   - `docs(readme): actualiza mapa del contenido`
5. Abre el *pull request* con la plantilla y describe qué cambia y por qué.

## Estilo de escritura

- **Español neutro** con contexto mexicano y latinoamericano. Claro, cercano, sin jerga innecesaria.
- Al introducir un término técnico, escríbelo en español con el inglés entre paréntesis la primera vez: "evaluación de impacto del sistema de IA (*AI system impact assessment*)".
- Prefiere ejemplos concretos y analogías a las definiciones abstractas.
- "Deberá" y "debe" se reservan para describir lo que pide la norma; para recomendaciones propias usa "conviene", "te recomendamos".
- Cuando una afirmación sea una interpretación discutible, dilo: "en nuestra lectura…", "algunos auditores interpretan…".

## Convenciones del sitio

### Referencias a controles

- Controles de ISO/IEC 42001: `A.7.4`, `A.6.2.6`.
- Controles de ISO/IEC 27001:2022: anteponer siempre la norma en la misma línea (`ISO 27001 A.5.19`) o escribir solo el número en una tabla cuya columna sea de ISO 27001 (`5.19`). Así el validador no los confunde con controles de 42001.
- Enlaces a un control: `[A.7.4](../anexo-a/a7-datos.md#a-7-4)`. Las anclas siguen el patrón `a-` + número con guiones.
- Enlaces a una subcláusula: `[6.1.4](../clausulas/c6-planificacion.md#c-6-1-4)`. Las anclas siguen el patrón `c-` + número con guiones.

### Insignias

```html
<span class="dx-badge dx-badge--rol-usa">:material-cloud-download-outline: Usa IA de terceros</span>
<span class="dx-badge dx-badge--rol-desarrolla">:material-code-braces: Desarrolla IA</span>
<span class="dx-badge dx-badge--rol-provee">:material-handshake-outline: Provee IA a clientes</span>
<span class="dx-badge dx-badge--esfuerzo-medio">:material-gauge: Esfuerzo medio</span>
<span class="dx-badge dx-badge--nuevo">:material-star-four-points-outline: Nuevo frente a 27001</span>
```

Las insignias de cada control deben coincidir con `data/controles.yml`; el validador lo comprueba.

### Colores de los objetivos

Cada objetivo del Anexo A tiene una clase CSS (`obj-a2` … `obj-a10`) que fija su color en insignias, tarjetas y diagramas. No uses colores sueltos: usa las variables definidas en `docs/stylesheets/extra.css`.

### Infografías

Las infografías son SVG escritos a mano en `docs/assets/infografias/` y se insertan en línea para respetar el modo oscuro. Usan `currentColor` y las clases `ig-*` de la hoja de estilos, e incluyen `<title>`, `<desc>` y una descripción textual en la página.

## Código de conducta

Al participar aceptas el [Código de Conducta](CODE_OF_CONDUCT.md).

## Licencia de tus contribuciones

Al contribuir aceptas que tu aporte se publique bajo las licencias del proyecto: CC BY-SA 4.0 para contenido y MIT para código.

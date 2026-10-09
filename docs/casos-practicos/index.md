---
description: Tres casos prácticos ficticios de ISO/IEC 42001 en México, uno por cada rol frente a la IA. Una PyME que usa IA de terceros, una fintech que desarrolla su modelo de crédito y una empresa SaaS que provee asistentes virtuales, comparadas lado a lado.
---

# Casos prácticos

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-briefcase-outline: 3 casos completos</span>
<span class="dx-badge dx-badge--rol-usa">:material-cloud-download-outline: Usa IA de terceros</span>
<span class="dx-badge dx-badge--rol-desarrolla">:material-code-braces: Desarrolla IA</span>
<span class="dx-badge dx-badge--rol-provee">:material-handshake-outline: Provee IA a clientes</span>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: 6 min de lectura</span>
</div>

!!! abstract "En una frase"
    Tres empresas ficticias, una por cada rol frente a la IA, recorren ISO/IEC 42001 de punta a punta, del primer inventario a la auditoría, para que veas cómo cambian las mismas cláusulas y controles según quién eres y qué haces con la IA.

## Por qué casos ficticios

A lo largo de la guía te habrás encontrado con Contadores Alameda, Monarca Crédito y Conversa Labs en los ejemplos de cada cláusula y de cada control. Aquí está la versión completa de cada una: su contexto, sus sistemas, sus riesgos, una evaluación de impacto entera, su Declaración de Aplicabilidad, sus objetivos y lo que encontraría un auditor.

Las tres son **inventadas**, y eso es una ventaja:

- **Podemos mostrar los errores.** Un caso real rara vez enseña la no conformidad, el piloto que salió mal o la exclusión que hubo que corregir. Estas empresas se equivocan a propósito, porque ahí está buena parte del aprendizaje.
- **No exponemos a nadie.** No hay datos confidenciales de clientes ni organizaciones reales a las que se pueda atribuir una práctica o un hallazgo.
- **Son realistas en su naturaleza.** Combinan situaciones frecuentes en México y Latinoamérica: el cuestionario de gobierno de IA de un banco, la nómina pegada en un chatbot gratuito, el buró de crédito, los motivos de rechazo, el chatbot de WhatsApp que se equivoca de fecha, el cliente en España que trae obligaciones europeas.
- **Cubren los tres roles.** Usar, desarrollar y proveer IA cambian la intensidad de casi todo, en especial de los controles de ciclo de vida, datos, información a terceros y proveedores ([Roles en la IA](../fundamentos/roles-en-la-ia.md)).

!!! note "Cualquier parecido es coincidencia"
    Nombres, cifras, folios y documentos son ficticios. Las decisiones de cada empresa son una forma razonable de aplicar la norma, no la única, y no constituyen asesoría legal (ver el [aviso legal](../acerca-de.md#aviso-legal)).

## Las tres empresas lado a lado

| | Contadores Alameda | Monarca Crédito | Conversa Labs |
|---|---|---|---|
| **Sector** | Despacho de contabilidad, nómina y cumplimiento fiscal | Fintech de microcréditos personales y para micronegocios, constituida como SOFOM E.N.R. | Software: plataforma SaaS de asistentes virtuales con IA generativa |
| **Ubicación y tamaño** | Querétaro · 58 colaboradores · unas 400 PyMEs cliente | Ciudad de México · 210 empleados · unos 350 000 clientes | Guadalajara · 95 empleados · clientes en México, Colombia, Chile y España |
| **Rol principal** | Usa IA de terceros y la despliega frente a sus clientes | Desarrolla IA y la usa para decidir; también es cliente de un servicio de terceros | Provee IA a clientes, desarrolla la orquestación y es cliente del proveedor del modelo fundacional |
| **Sistemas de IA** | Asistente de la suite de ofimática; Alma, chatbot de WhatsApp de BotNorte; captura de CFDI; más la IA en la sombra que detectó | Score Monarca v3, modelo de probabilidad de incumplimiento; modelo de asignación de línea; API de detección de fraude de un proveedor | Plataforma Conversa: modelo de lenguaje vía API, generación aumentada por recuperación (RAG), filtros de seguridad y traspaso a un agente humano |
| **Quién recibe las consecuencias** | Clientes PyME, sus trabajadores y el propio personal | Solicitantes de crédito | Los usuarios finales de sus clientes: asegurados, estudiantes, compradores |
| **Detonante** | Cuestionario de gobierno de IA de un banco cliente y una nómina pegada en un chatbot gratuito | Ronda de inversión y alianzas con bancos | Cuestionarios de IA en cada venta y un cliente en la Unión Europea |
| **¿Certificarse?** | Se alinea el primer año sin certificar y decide después, con criterios escritos; no tiene SGSI | Sí: el certificado respalda la ronda de inversión y las alianzas | Sí, apoyándose en su SGSI ISO 27001 ya certificado |
| **Controles que más pesan** | [A.9](../anexo-a/a9-uso.md) (uso responsable e IA en la sombra), [A.10.3](../anexo-a/a10-terceros.md#a-10-3) (proveedores), [A.8.2](../anexo-a/a8-informacion-partes-interesadas.md#a-8-2) (aviso de IA) y [A.7.4](../anexo-a/a7-datos.md#a-7-4) (calidad de la base de conocimiento) | [A.5](../anexo-a/a5-evaluacion-de-impacto.md) (impacto en solicitantes), [A.6](../anexo-a/a6-ciclo-de-vida.md) (ciclo de vida del modelo), [A.7](../anexo-a/a7-datos.md) (datos y sesgo) y [A.9](../anexo-a/a9-uso.md) (supervisión humana) | [A.8](../anexo-a/a8-informacion-partes-interesadas.md) (información e incidentes para clientes), [A.10](../anexo-a/a10-terceros.md) (responsabilidad compartida), [A.6](../anexo-a/a6-ciclo-de-vida.md) (pruebas adversarias) y [A.7](../anexo-a/a7-datos.md) (datos de clientes en RAG) |
| **Evaluación de impacto completa** | Alma, el chatbot de WhatsApp | Score Monarca v3 | La plataforma, con perfiles por sector de cliente |
| **Duración estimada** | 6 a 9 meses | 9 a 14 meses | 8 a 12 meses |

Las duraciones son estimaciones de la [hoja de ruta](../implementacion/hoja-de-ruta.md#variantes); cada caso explica por qué la suya se alargó o se acortó.

## Elige tu caso

<div class="grid cards" markdown>

-   :material-calculator-variant-outline:{ .lg .middle } **Caso 1 · Contadores Alameda**

    ---

    Una PyME de 58 personas que usa IA generativa de terceros y arma un SGIA proporcionado: pocos documentos, roles acumulados con contrapesos, la IA en la sombra bajo control y una evaluación de impacto completa de su chatbot de WhatsApp.

    [:octicons-arrow-right-24: PyME que usa IA generativa](pyme-usa-ia-generativa.md)

-   :material-bank-outline:{ .lg .middle } **Caso 2 · Monarca Crédito**

    ---

    Una fintech que desarrolla su propio modelo de *scoring* y decide créditos con él: sesgo y variables sustitutas, motivos de rechazo comprensibles, revisión humana en la banda gris, deriva y un Comité de Modelos rumbo a la certificación.

    [:octicons-arrow-right-24: Fintech con scoring crediticio](fintech-scoring.md)

-   :material-robot-outline:{ .lg .middle } **Caso 3 · Conversa Labs**

    ---

    Una empresa de software que vende asistentes virtuales a otras empresas: responsabilidad compartida con clientes y con el proveedor del modelo, pruebas de inyección de instrucciones, transparencia y un SGIA que se integra a su SGSI.

    [:octicons-arrow-right-24: Empresa que desarrolla un chatbot](empresa-desarrolla-chatbot.md)

</div>

¿No sabes cuál se parece más a ti? El [selector de rol](../herramientas/selector-de-rol.md) te orienta en un par de minutos. Si tu organización combina roles, lee primero el caso de tu rol principal y luego las secciones de riesgos y SoA de los otros.

## Cómo leer un caso

Los tres casos tienen la misma estructura, para que puedas compararlos sección por sección:

1. **Contexto y alcance:** quién es la empresa, qué la empujó a actuar, si decidió certificarse y cómo redactó su alcance ([cláusula 4](../clausulas/c4-contexto.md)).
2. **Roles frente a la IA:** su papel ante cada sistema según ISO/IEC 22989 y su papel en datos personales.
3. **Inventario de sistemas de IA:** con las columnas de la plantilla de inventario.
4. **Riesgos principales:** un registro con la matriz asimétrica de la [cláusula 6](../clausulas/c6-planificacion.md#c-6-1-1), tratamiento y riesgo residual.
5. **Evaluación de impacto completa** de un sistema, sección por sección ([6.1.4](../clausulas/c6-planificacion.md#c-6-1-4) y [A.5](../anexo-a/a5-evaluacion-de-impacto.md)).
6. **Extracto de la Declaración de Aplicabilidad,** con inclusiones, exclusiones y sus justificaciones.
7. **Objetivos e indicadores, y hoja de ruta.**
8. **Qué le diría el auditor:** fortalezas y hallazgos redactados como en una auditoría real.
9. **Lecciones** y **plantillas usadas**.

Tres consejos para aprovecharlos:

- **Lee con tu propio inventario al lado.** Para cada decisión de la empresa, pregúntate qué harías tú con tus sistemas y por qué.
- **Fíjate en las exclusiones más que en las inclusiones.** La justificación de lo que se excluye es lo primero que lee un auditor, y donde más se aprende.
- **Sigue los enlaces.** Cada caso es la versión completa de los ejemplos que aparecen en las páginas de cláusulas y controles; ahí está la explicación de fondo.

Los identificadores se repiten en toda la guía: **IA-01** para sistemas del inventario, **R-01** para riesgos, **EIA-01** para evaluaciones de impacto, **OBJ-01** para objetivos, **INC** para incidentes, **NC** y **OBS** para no conformidades y observaciones, y un prefijo propio de cada empresa para sus controles adicionales (por ejemplo, **CA-01** en Contadores Alameda).

## Plantillas que verás en acción

Todos los casos usan las [plantillas descargables](../plantillas/index.md) de esta guía, con distinta profundidad según el rol:

| Plantilla | Cómo aparece en los casos |
|---|---|
| [Política de IA](../plantillas/index.md#politica-de-ia) y [uso aceptable de IA generativa](../plantillas/index.md#uso-aceptable-ia-generativa) | La política paraguas en los tres; el semáforo de uso aceptable es la primera pieza de Contadores Alameda |
| [Roles y responsabilidades (RACI)](../plantillas/index.md#raci-ia) | De una hoja con roles acumulados en una PyME a comités formales en Monarca |
| [Inventario de sistemas de IA](../plantillas/index.md#inventario-sistemas-ia) | La sección de inventario de cada caso sigue sus columnas |
| [Metodología y matriz de riesgos](../plantillas/index.md#evaluacion-de-riesgos) | La matriz asimétrica 5 × 5 y el registro de riesgos con su tratamiento |
| [Evaluación de impacto](../plantillas/index.md#evaluacion-de-impacto) | La evaluación completa de cada caso |
| [Declaración de Aplicabilidad](../plantillas/index.md#declaracion-de-aplicabilidad) | Los extractos con inclusiones, exclusiones y controles propios |
| [Ficha del sistema](../plantillas/index.md#ficha-del-sistema) y [procedimiento del ciclo de vida](../plantillas/index.md#procedimiento-ciclo-de-vida) | Pesan en Monarca y Conversa, que desarrollan; la PyME usa solo la ficha |
| [Registro de incidentes](../plantillas/index.md#registro-de-incidentes) y [checklist de auditoría interna](../plantillas/index.md#checklist-auditoria-interna) | Los incidentes que alimentan la mejora y la preparación de la primera auditoría interna |

Cuando termines un caso, el siguiente paso natural es la [hoja de ruta de implementación](../implementacion/hoja-de-ruta.md) y, si te preparas para una auditoría, los [hallazgos de ejemplo](../auditoria/hallazgos-ejemplo.md).

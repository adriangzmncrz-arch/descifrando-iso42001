---
description: Cómo está organizada la guía Descifrando ISO 42001 y cómo leer sus páginas - formato de cláusulas y controles, leyenda de insignias y colores, recuadros, pestañas por rol, glosario emergente y aviso legal.
---

# Cómo usar esta guía

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-map-legend: Guía de uso</span>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: 10 min de lectura</span>
</div>

!!! abstract "En una frase"
    Esta página es el manual de instrucciones de la guía: cómo está organizada, qué significa cada insignia, color y recuadro, y cómo aprovechar las pestañas por rol y el glosario emergente.

## Cómo está organizada la guía

| Sección | Qué encontrarás | Ve ahí cuando… |
|---|---|---|
| [Empieza aquí](iso42001-en-5-minutos.md) | La norma en cinco minutos, el árbol "¿Necesito ISO 42001?", mitos, rutas de lectura y esta página. | Es tu primera visita. |
| [Fundamentos](../fundamentos/que-es-un-sgia.md) | Qué es un SGIA, IA explicada para GRC, roles, familia de normas, principios de IA responsable, riesgo frente a impacto. | Te falta base conceptual antes de entrar a los requisitos. |
| [Cláusulas 4 a 10](../clausulas/index.md) | Una página por cláusula con los requisitos explicados, ejemplos por rol y evidencia esperada. | Necesitas saber qué pide la norma y cómo se cumple. |
| [Anexo A](../anexo-a/index.md) y [Anexos B, C y D](../anexos-b-c-d.md) | Tabla periódica, matriz filtrable y una página por objetivo con la guía de cada control. | Vas a armar tu Declaración de Aplicabilidad o a implementar un control. |
| [Casos prácticos](../casos-practicos/index.md) | Tres empresas ficticias, de punta a punta. | Quieres ver la norma aplicada a una organización concreta. |
| [Implementación](../implementacion/hoja-de-ruta.md) | Hoja de ruta, documentación requerida y errores frecuentes. | Ya decidiste avanzar. |
| [Auditoría](../auditoria/como-se-certifica.md) | Proceso de certificación, preguntas del auditor, hallazgos de ejemplo y checklist. | Te preparas para una auditoría o vas a hacerla. |
| [Integración](../integracion/con-iso27001.md) | ISO 27001, NIST AI RMF, Reglamento de IA de la UE, México y Latinoamérica. | Necesitas conectar ISO 42001 con otros marcos o con la ley. |
| Recursos | [Autodiagnóstico](../herramientas/autodiagnostico.md), [selector de rol](../herramientas/selector-de-rol.md), [plantillas](../plantillas/index.md), [glosario](../glosario.md) y [preguntas frecuentes](../preguntas-frecuentes.md). | Quieres pasar de leer a hacer. |

No hace falta leer en orden. Si no sabes por dónde empezar, elige una de las [rutas de lectura](rutas-de-lectura.md).

## Cómo leer una página de cláusula

Las siete páginas de cláusula comparten doce bloques, siempre en el mismo orden. Cuando te acostumbras, saltas directo al que necesitas.

| # | Bloque | Para qué te sirve |
|---|---|---|
| 1 | Encabezado con insignias | Saber de un vistazo que es un requisito certificable, a qué roles toca y cuánto tardarás en leerla. |
| 2 | En una frase | Llevarte la idea central si solo tienes un minuto. |
| 3 | Propósito | Entender qué problema resuelve la cláusula, a veces con una analogía. |
| 4 | Qué pide, explicado | Recorrer cada subcláusula con nuestras palabras, tablas y diagramas. |
| 5 | Cómo se aplica según tu rol | Ver ejemplos para quien usa, desarrolla o provee IA, en pestañas. |
| 6 | Diferencias con ISO 27001 | Saber qué reutilizas y qué cambia si ya tienes un SGSI. |
| 7 | Preguntas para tu organización | Hacer un diagnóstico rápido con tu equipo. |
| 8 | Qué evidencia espera ver un auditor | Preparar evidencia concreta, con ejemplos y señales de alerta. |
| 9 | Errores comunes | No repetir lo que vemos fallar una y otra vez. |
| 10 | Ejemplo resuelto | Ver la cláusula aplicada en una de las tres empresas de los casos. |
| 11 | Relación con otras cláusulas, controles y normas | Seguir el hilo hacia otros requisitos. |
| 12 | Plantillas relacionadas | Descargar lo que te ayuda a producir la evidencia. |

!!! tip "Enlaza directo a una subcláusula o a un control"
    Cada subcláusula y cada control tienen un enlace permanente que no cambia entre versiones de la guía. Al pasar el cursor junto a un título aparece el símbolo del enlace; cópialo para citarlo en tus documentos internos. Por ejemplo, [6.1.4](../clausulas/c6-planificacion.md#c-6-1-4) termina en `#c-6-1-4` y [A.7.4](../anexo-a/a7-datos.md#a-7-4) en `#a-7-4`.

## Cómo leer un control del Anexo A

Cada uno de los nueve objetivos tiene su página. Arriba encontrarás el color del objetivo, un recuadro con el objetivo explicado en palabras simples y una tabla con sus controles de un vistazo. Después viene un bloque por control. Así se ven las insignias bajo el encabezado de un control, en este caso A.7.4 Calidad de los datos:

<div class="dx-control-meta" markdown>
<span class="dx-badge dx-badge--rol-usa">:material-cloud-download-outline: Usa IA de terceros</span>
<span class="dx-badge dx-badge--rol-desarrolla">:material-code-braces: Desarrolla IA</span>
<span class="dx-badge dx-badge--rol-provee">:material-handshake-outline: Provee IA a clientes</span>
<span class="dx-badge dx-badge--esfuerzo-alto">:material-gauge-full: Esfuerzo alto</span>
<span class="dx-badge dx-badge--nuevo">:material-star-four-points-outline: Nuevo frente a 27001</span>
</div>

Cada bloque de control sigue este orden:

1. **Encabezado del control**, con una franja del color del objetivo, su número, su nombre e insignias de rol, esfuerzo y novedad frente a ISO 27001.
2. **Propósito y explicación práctica**: qué problema previene el control y cómo se ve en una organización real.
3. **Dos columnas**: la implementación mínima viable, que puedes defender ante un auditor, y la implementación madura, a la que conviene aspirar.
4. **Pestañas de consulta rápida**: evidencia típica, preguntas del auditor, errores comunes y si el control se puede excluir.
5. **Relaciones** con cláusulas, otros controles, ISO 27001 y otras normas.

Al final de cada página de objetivo verás cómo lo resuelven las tres empresas de los casos prácticos. El [índice del Anexo A](../anexo-a/index.md) explica además la tabla periódica y la matriz filtrable.

## Leyenda de insignias

Las insignias son las etiquetas de colores que aparecen bajo el título de cada página y de cada control. Estas son todas, con el criterio que usamos para asignarlas.

### Tipo de página

<span class="dx-badge dx-badge--tipo">:material-file-document-check-outline: Requisito certificable</span>
<span class="dx-badge dx-badge--tipo">:material-view-grid-outline: 3 controles</span>
<span class="dx-badge dx-badge--tipo">:material-compass-outline: Introducción</span>
<span class="dx-badge dx-badge--tipo">:material-radar: Herramienta interactiva</span>

Te dice qué clase de página tienes enfrente. "Requisito certificable" marca las cláusulas 4 a 10, cuyo cumplimiento se audita. En las páginas de objetivo del Anexo A indica cuántos controles agrupa. El resto distingue páginas de introducción, fundamentos, orientación o herramientas, que explican o apoyan pero no son requisitos.

### Rol

| Insignia | Significa | Criterio |
|---|---|---|
| <span class="dx-badge dx-badge--rol-usa">:material-cloud-download-outline: Usa IA de terceros</span> | Contratas o compras IA y la usas por dentro o frente a tus clientes; en términos de ISO/IEC 22989, eres cliente o usuario. | Marca los contenidos que suelen pesar para quien no desarrolla. En nuestra clasificación, 24 de los 38 controles. |
| <span class="dx-badge dx-badge--rol-desarrolla">:material-code-braces: Desarrolla IA</span> | Diseñas, entrenas, ajustas, pruebas o integras modelos y sistemas de IA; eres productor. | En nuestra clasificación, 37 de los 38 controles. |
| <span class="dx-badge dx-badge--rol-provee">:material-handshake-outline: Provee IA a clientes</span> | Ofreces a otros productos o servicios que incorporan IA; eres proveedor. | En nuestra clasificación, 35 de los 38 controles. |

Las cláusulas 4 a 10 llevan las tres insignias porque cualquier SGIA debe cumplirlas. En los controles, la insignia indica para qué roles el control **suele** ser relevante, según la lectura del autor. Que un control no tenga tu insignia no significa que puedas excluirlo sin más: lo decide tu evaluación de riesgos y lo justifica tu Declaración de Aplicabilidad.

### Esfuerzo

| Insignia | Criterio | Controles |
|---|---|---|
| <span class="dx-badge dx-badge--esfuerzo-bajo">:material-gauge-low: Esfuerzo bajo</span> | Se resuelve con un documento, un ajuste a un proceso existente o una revisión periódica. | 6 |
| <span class="dx-badge dx-badge--esfuerzo-medio">:material-gauge: Esfuerzo medio</span> | Pide un proceso nuevo, con responsables, registros y coordinación entre áreas. | 24 |
| <span class="dx-badge dx-badge--esfuerzo-alto">:material-gauge-full: Esfuerzo alto</span> | Pide capacidades técnicas especializadas, cambios en sistemas o trabajo continuo de varias áreas. | 8 |

El esfuerzo es una **estimación del autor** pensada para una organización mediana que arranca sin SGIA. Si ya tienes un SGSI maduro o un equipo de datos con buenas prácticas, varios controles te costarán menos.

### Novedad frente a ISO 27001

| Insignia | Criterio | Controles |
|---|---|---|
| <span class="dx-badge dx-badge--nuevo">:material-star-four-points-outline: Nuevo frente a 27001</span> | No tiene equivalente en el Anexo A de ISO 27001:2022. Hay que construirlo desde cero. | 17 |
| <span class="dx-badge dx-badge--similar">:material-approximately-equal: Similar a 27001</span> | Existe algo análogo en ISO 27001 que sirve de molde, pero hay que adaptarlo a la IA. | 19 |
| <span class="dx-badge dx-badge--equivalente">:material-equal: Equivalente en 27001</span> | Prácticamente reutilizable: con cambios menores, lo que ya tienes sirve. | 2 |

También es una **estimación del autor**, y compara solo contra el Anexo A de ISO 27001:2022. Por ejemplo, la Política de IA ([A.2.2](../anexo-a/a2-politicas.md#a-2-2)) es "similar" porque tu política de seguridad te da la forma, pero el contenido es otro.

### Tiempo

<span class="dx-badge dx-badge--tiempo">:material-clock-outline: 15 min de lectura</span>

En las páginas de lectura, es el tiempo aproximado de una lectura atenta. En las herramientas, lo que tardas en completarlas.

## Colores de los nueve objetivos

Cada objetivo del Anexo A tiene un color que se repite en insignias, encabezados de control, la tabla periódica y los diagramas. Los nombres son traducción libre de referencia.

| Insignia | Objetivo | En pocas palabras | Controles |
|---|---|---|---|
| <span class="dx-badge dx-badge--obj obj-a2">A.2 · Políticas</span> | [Políticas relacionadas con la IA](../anexo-a/a2-politicas.md) | La dirección fija el rumbo y las reglas del juego para la IA. | 3 |
| <span class="dx-badge dx-badge--obj obj-a3">A.3 · Organización interna</span> | [Organización interna](../anexo-a/a3-organizacion-interna.md) | Responsables con nombre y apellido, y un canal para levantar la mano. | 2 |
| <span class="dx-badge dx-badge--obj obj-a4">A.4 · Recursos</span> | [Recursos para sistemas de IA](../anexo-a/a4-recursos.md) | Saber con qué está hecho cada sistema: datos, herramientas, cómputo y personas. | 5 |
| <span class="dx-badge dx-badge--obj obj-a5">A.5 · Evaluación de impactos</span> | [Evaluación de impactos de los sistemas de IA](../anexo-a/a5-evaluacion-de-impacto.md) | Valorar cómo puede afectar el sistema a personas, grupos y sociedad. | 4 |
| <span class="dx-badge dx-badge--obj obj-a6">A.6 · Ciclo de vida</span> | [Ciclo de vida del sistema de IA](../anexo-a/a6-ciclo-de-vida.md) | Criterios y registros desde el diseño hasta la operación y el monitoreo. | 9 |
| <span class="dx-badge dx-badge--obj obj-a7">A.7 · Datos</span> | [Datos para sistemas de IA](../anexo-a/a7-datos.md) | Cómo se obtienen, cuidan, rastrean y preparan los datos. | 5 |
| <span class="dx-badge dx-badge--obj obj-a8">A.8 · Información</span> | [Información para las partes interesadas](../anexo-a/a8-informacion-partes-interesadas.md) | Que usuarios, clientes y autoridades sepan lo que necesitan saber. | 4 |
| <span class="dx-badge dx-badge--obj obj-a9">A.9 · Uso de la IA</span> | [Uso de sistemas de IA](../anexo-a/a9-uso.md) | Usar la IA con objetivos claros, supervisión y dentro de su uso previsto. | 3 |
| <span class="dx-badge dx-badge--obj obj-a10">A.10 · Terceros y clientes</span> | [Relaciones con terceros y clientes](../anexo-a/a10-terceros.md) | Repartir responsabilidades con proveedores, socios y clientes. | 3 |

## Leyenda de recuadros

Los recuadros de colores (admoniciones) siempre se usan con la misma intención. Los que tienen una flecha en el título se abren y cierran con un clic; los que empiezan cerrados suelen guardar ejemplos largos o detalles opcionales.

<div class="grid" markdown>

!!! abstract "En una frase"
    La idea central de la página o del objetivo, para cuando solo tienes un minuto.

!!! tip "Analogías y consejos"
    Comparaciones con la vida diaria, recomendaciones prácticas y la implementación madura de un control.

!!! info "Diferencias con ISO 27001"
    Qué cambia si vienes de un SGSI; también datos de contexto.

!!! note "Notas"
    Aclaraciones y descripciones textuales de infografías y diagramas.

!!! success "Implementación mínima viable"
    Lo mínimo defendible ante un auditor, o lo que sí puedes esperar.

!!! warning "Errores comunes y precauciones"
    Lo que vemos fallar con frecuencia o lo que pide cuidado.

!!! danger "Riesgo serio"
    Prácticas que pueden dañar a personas o provocar un incumplimiento grave.

!!! failure "Mitos y lo que no es"
    Ideas equivocadas y enfoques que no funcionan.

!!! example "Caso"
    Ejemplos resueltos con Contadores Alameda, Monarca Crédito o Conversa Labs.

!!! question "Para pensar"
    Preguntas para discutir con tu equipo.

!!! bug "Limitaciones"
    Límites conocidos de una herramienta o de la guía. Poco frecuente.

!!! quote "Cita"
    Citas de fuentes públicas, nunca texto de la norma. Poco frecuente.

!!! auditor "Lo que mira el auditor"
    Evidencia y preguntas que suelen aparecer en una auditoría.

!!! latam "En México y Latinoamérica"
    Contexto regional: leyes, autoridades y prácticas locales.

!!! legal "Nota legal"
    Advertencias legales y referencias a leyes, siempre con fuente y fecha de consulta.

</div>

## Pestañas por rol

Muchas páginas explican el mismo requisito tres veces, una por rol, en pestañas. Pruébalo aquí:

=== "Si usas IA de terceros"

    Contadores Alameda contrata su chatbot "Alma" a BotNorte. Su trabajo está en elegir bien al proveedor, curar la base de preguntas frecuentes y avisar a sus clientes que hablan con una IA.

=== "Si desarrollas IA"

    Monarca Crédito entrena su propio modelo de *scoring*. Su trabajo está en la calidad de los datos, las pruebas de sesgo, el monitoreo de deriva y la revisión humana de la banda gris.

=== "Si provees IA a clientes"

    Conversa Labs vende asistentes virtuales a otras empresas. Su trabajo está en documentar el sistema para sus clientes, repartir responsabilidades con ellos y con su proveedor de modelos, y comunicar incidentes a tiempo.

Las pestañas están **enlazadas**: cuando eliges una, todas las pestañas con el mismo nombre cambian a esa opción, también al pasar a otra página. Así eliges tu rol una vez y la guía lo recuerda. Si tu organización tiene varios roles, como Conversa Labs, lee todas las pestañas que te correspondan. Las pestañas de consulta rápida de los controles (evidencia, preguntas del auditor, errores comunes) funcionan igual.

## Glosario emergente

Las siglas de la guía tienen una definición escondida. Pasa el cursor sobre ellas: el SGIA, la SoA, el ciclo PHVA, una EIPD o un LLM. En pantallas táctiles, según el navegador, la definición puede aparecer al tocar la sigla; si no aparece, búscala en el [glosario](../glosario.md), que reúne todos los términos con su equivalente en inglés.

## Nombres de controles y referencias

- **Los nombres de los 38 controles son traducción libre** del autor. La versión oficial en español que adquieras puede redactarlos distinto. Lo que no cambia es el número: guíate siempre por él.
- **Controles de ISO 27001.** Para no confundirlos con los de ISO 42001, siempre los escribimos con el nombre de la norma delante, como en "ISO 27001 A.5.19". Es importante porque hay números repetidos: el A.5.2 de ISO 42001 es el proceso de evaluación de impacto ([A.5.2](../anexo-a/a5-evaluacion-de-impacto.md#a-5-2)), mientras que el de ISO 27001 trata de los roles de seguridad de la información.
- **Cláusulas y subcláusulas** se citan por número (4.1, 6.1.4, 9.3.2) y enlazan a su sección.
- **Palabras de obligación.** "Debe" describe lo que pide la norma; "conviene" o "te recomendamos" señalan nuestras recomendaciones; "en nuestra lectura" marca interpretaciones discutibles.
- **Fechas y fuentes.** Los datos sobre leyes y estados de normas llevan su fuente y fecha de consulta en una nota al pie, y se concentran en la sección de [Integración](../integracion/reglamento-ia-ue.md).

## Cómo reportar errores

¿Encontraste un error de interpretación, un enlace roto o una errata? Usa el botón de edición (:material-pencil-outline:) que aparece en cada página o abre un *issue* en GitHub con la plantilla que corresponda. Describe el problema con tus palabras y nunca pegues texto de la norma. Todos los detalles están en [Cómo contribuir](../acerca-de.md#como-contribuir).

## Aviso legal

!!! legal "Lo esencial"
    Esta guía es la interpretación de su autor: no es una postura oficial de ISO ni de IEC, no reproduce ni sustituye a la norma (que necesitas adquirir por los canales oficiales) y no es asesoría legal. Las empresas de los casos prácticos son ficticias. Lee el [aviso legal completo](../acerca-de.md#aviso-legal) antes de usar el contenido en tu organización.

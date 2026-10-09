---
description: Quince mitos frecuentes sobre ISO/IEC 42001 y lo que en realidad pide la norma - alcance, los 38 controles, el Anexo B, ISO 27001, el Reglamento de IA de la UE, la EIPD y los proveedores de IA.
---

# Mitos y realidades

<div class="dx-page-meta" markdown>
<span class="dx-badge dx-badge--tipo">:material-head-question-outline: Conceptos clave</span>
<span class="dx-badge dx-badge--rol-usa">:material-cloud-download-outline: Usa IA de terceros</span>
<span class="dx-badge dx-badge--rol-desarrolla">:material-code-braces: Desarrolla IA</span>
<span class="dx-badge dx-badge--rol-provee">:material-handshake-outline: Provee IA a clientes</span>
<span class="dx-badge dx-badge--tiempo">:material-clock-outline: 12 min de lectura</span>
</div>

!!! abstract "En una frase"
    ISO 42001 es más amplia de lo que muchos creen (también aplica a quien solo usa IA) y más flexible de lo que otros temen (no son 38 controles obligatorios), pero no hace milagros: ni sustituye a la ley ni certifica que un modelo sea justo.

Cada mito es un bloque plegable: ábrelo para leer la realidad. Los rojos (:material-close:) son **falsos**; los anaranjados (:material-alert:) son **verdades a medias**: tienen algo de cierto, pero la conclusión que se saca de ellos es equivocada. Los nombres de controles que aparecen aquí son traducción libre de referencia.

## Sobre a quién aplica

??? failure "Mito: «Solo aplica a quien desarrolla IA»"
    **Realidad.** La norma está pensada para cualquier organización que desarrolle, ofrezca **o use** productos y servicios con IA. Quien solo usa IA de terceros también decide para qué la usa, con qué datos la alimenta y cómo presenta sus resultados, y ahí hay riesgos propios. Contadores Alameda no ha entrenado un solo modelo, pero su chatbot "Alma" responde a clientes sobre plazos fiscales: si se equivoca, la multa la paga el cliente y el reclamo llega al despacho.

    **Matiz.** El rol sí cambia el peso de los controles. Varios de ciclo de vida ([A.6](../anexo-a/a6-ciclo-de-vida.md)) y de datos para desarrollo ([A.7](../anexo-a/a7-datos.md)) pesan mucho menos, o pueden excluirse con justificación, cuando no desarrollas. Más en [Roles en la IA](../fundamentos/roles-en-la-ia.md).

??? failure "Mito: «Es solo para grandes empresas»"
    **Realidad.** La norma se declara aplicable sin importar el tamaño ni el tipo de organización. Lo que se ajusta es el alcance y la profundidad: una PyME puede definir un alcance acotado, cubrir pocos sistemas y mantener documentos breves. Contadores Alameda, con 58 personas, puede operar un SGIA razonable sin crear un departamento nuevo.

    **Matiz.** La certificación tiene costos casi fijos (auditorías, tiempo de la dirección, auditoría interna) que pesan más en una organización pequeña. Por eso, para muchas PyMEs el mejor primer paso es alinearse sin certificar. Revisa [¿Necesito ISO 42001?](necesito-iso42001.md).

??? failure "Mito: «La IA generativa no entra porque es una herramienta de productividad»"
    **Realidad.** Un asistente de IA generativa es un sistema de IA que tu organización usa, aunque venga como una función más de tu suite de ofimática. Si cae dentro del alcance, va al inventario, a la evaluación de riesgos y a los controles de uso responsable ([A.9](../anexo-a/a9-uso.md)). El riesgo es muy concreto: en Contadores Alameda, un colaborador pegó una nómina con datos personales en un chatbot gratuito. Eso es IA en la sombra (*shadow AI*).

    **Matiz.** No hace falta una evaluación de impacto exhaustiva para cada asistente de redacción: conviene que el esfuerzo sea proporcional al riesgo. Lo que no se sostiene es dejarlos fuera del inventario. Empieza con una [política de uso aceptable de IA generativa](../plantillas/index.md#uso-aceptable-ia-generativa) y una lista de herramientas aprobadas.

## Sobre los controles y los anexos

??? failure "Mito: «Tengo que implementar los 38 controles»"
    **Realidad.** El Anexo A es un catálogo de referencia. Lo que pide [6.1.3](../clausulas/c6-planificacion.md#c-6-1-3) es que, después de evaluar tus riesgos, determines qué controles necesitas, los compares contra el Anexo A para no pasar por alto ninguno relevante y documentes en la Declaración de Aplicabilidad (SoA) cuáles incluyes y por qué excluyes los demás. Una exclusión se sostiene cuando tu evaluación de riesgos no la requiere y ningún requisito externo (ley, contrato) la exige. También puedes agregar controles propios: el catálogo no es exhaustivo.

    **Matiz.** Un "no aplica" sin justificación es uno de los hallazgos más comunes. Y en nuestra lectura, algunos controles son muy difíciles de excluir para casi cualquier organización, como la Política de IA ([A.2.2](../anexo-a/a2-politicas.md#a-2-2)) o los Roles y responsabilidades de IA ([A.3.2](../anexo-a/a3-organizacion-interna.md#a-3-2)).

??? warning "Verdad a medias: «El Anexo B es opcional y no cuenta»"
    **Lo cierto.** El Anexo B es guía de implementación, y la propia norma aclara que no tienes que documentar ni justificar en la SoA si sigues o no cada una de sus recomendaciones. Puedes ampliarla, modificarla o implementar el control a tu manera.

    **Lo equivocado.** El Anexo B está marcado como **normativo**, igual que el Anexo A, y eso sorprende a muchos. En la práctica es la mejor pista de la intención de cada control, así que es razonable esperar que un auditor lo use como referencia para valorar si tu implementación cubre lo esencial. Si te apartas de la guía, conviene que puedas explicar cómo tu solución logra el mismo objetivo. Más en [Anexos B, C y D](../anexos-b-c-d.md).

??? failure "Mito: «Hay que documentar el código del modelo»"
    **Realidad.** Ningún requisito pide documentar el código fuente línea por línea. Si desarrollas, lo que se espera es documentación del diseño y desarrollo ([A.6.2.3](../anexo-a/a6-ciclo-de-vida.md#a-6-2-3)), documentación técnica adecuada para quien la necesita, como usuarios, clientes o autoridades ([A.6.2.7](../anexo-a/a6-ciclo-de-vida.md#a-6-2-7)), registro de eventos ([A.6.2.8](../anexo-a/a6-ciclo-de-vida.md#a-6-2-8)) y documentación de los recursos que usa el sistema: datos, herramientas, cómputo y personas ([A.4](../anexo-a/a4-recursos.md)). Si solo usas IA de terceros, buena parte de esa información se la pides a tu proveedor.

    **Matiz.** Sí se espera trazabilidad: qué versión del modelo está en producción, con qué datos se entrenó, qué pruebas pasó y quién aprobó su despliegue. En Monarca Crédito, eso significa poder reconstruir qué versión de Score Monarca decidió una solicitud rechazada.

??? failure "Mito: «Con una política de IA basta»"
    **Realidad.** La política ([5.2](../clausulas/c5-liderazgo.md#c-5-2) y [A.2.2](../anexo-a/a2-politicas.md#a-2-2)) es el punto de partida, no el sistema. Un SGIA necesita además alcance, roles, criterios de riesgo, evaluaciones de riesgo e impacto, SoA, objetivos, controles en operación, auditoría interna, revisión por la dirección y acciones correctivas. Un auditor no busca un documento bonito: busca evidencia de que la política se cumple, como registros, decisiones tomadas y excepciones atendidas.

    **Matiz.** Para quien apenas empieza, una política bien escrita, aprobada y comunicada sí es una gran primera victoria. Revisa la [documentación requerida](../implementacion/documentacion-requerida.md).

## Sobre otras normas y leyes

??? warning "Verdad a medias: «Si ya tengo ISO 27001, estoy cubierto»"
    **Lo cierto.** Ambas comparten la estructura armonizada, así que puedes reutilizar mucho: control de documentos, auditoría interna, revisión por la dirección, acciones correctivas, gestión de competencias, de proveedores y de incidentes. Te ahorras meses.

    **Lo que falta.** En ISO 27001 el riesgo gira alrededor de la seguridad de la información; en ISO 42001 también pesan las consecuencias para personas y para la sociedad. Además hay piezas sin equivalente: la evaluación de impacto ([6.1.4](../clausulas/c6-planificacion.md#c-6-1-4) y [A.5](../anexo-a/a5-evaluacion-de-impacto.md)), los roles frente a cada sistema ([4.1](../clausulas/c4-contexto.md#c-4-1)), la calidad y procedencia de los datos ([A.7](../anexo-a/a7-datos.md)) y la información para partes interesadas ([A.8](../anexo-a/a8-informacion-partes-interesadas.md)). En nuestra clasificación, 17 de los 38 controles son nuevos frente al Anexo A de ISO 27001:2022 y solo 2 se reutilizan prácticamente tal cual. Más en [Integración con ISO 27001](../integracion/con-iso27001.md).

??? failure "Mito: «Certificarme garantiza cumplir el Reglamento de IA de la UE»"
    **Realidad.** Un certificado ISO 42001 dice que tu sistema de gestión cumple con una norma voluntaria. El Reglamento de IA de la Unión Europea es una ley con obligaciones propias, que dependen de tu papel (proveedor o responsable del despliegue, entre otros) y del nivel de riesgo del sistema; ninguna certificación de sistema de gestión las sustituye por sí sola. Lo que sí hace un SGIA es dejarte ordenados el inventario, la gestión de riesgos, la documentación y la supervisión humana, que esa ley también pide en muchos casos.

    **Ejemplo.** Conversa Labs tiene un cliente en España. Su SGIA le ayuda a documentar el aviso de que el usuario habla con una IA, pero sus obligaciones bajo el reglamento se analizan aparte. Revisa [Reglamento de IA de la UE](../integracion/reglamento-ia-ue.md).

??? failure "Mito: «La evaluación de impacto es lo mismo que la EIPD»"
    **Realidad.** La EIPD se centra en los riesgos del tratamiento de datos personales para sus titulares. La evaluación de impacto de un sistema de IA ([6.1.4](../clausulas/c6-planificacion.md#c-6-1-4) y [A.5](../anexo-a/a5-evaluacion-de-impacto.md)) es más amplia: mira consecuencias para personas, grupos y la sociedad (trato injusto, exclusión de servicios, seguridad física, autonomía, efectos ambientales), incluso cuando el sistema no trata datos personales, y considera los usos indebidos previsibles.

    **Matiz.** Se complementan y conviene coordinarlas; la propia norma reconoce que en ciertos contextos hacen falta evaluaciones por disciplina, como la de privacidad. En Monarca Crédito, el equipo de privacidad lleva la EIPD de Score Monarca y el Comité de Modelos la evaluación de impacto: comparten insumos, pero responden preguntas distintas. Más en [Riesgo frente a impacto](../fundamentos/riesgo-vs-impacto.md).

??? failure "Mito: «El certificado demuestra que mis modelos son justos y seguros»"
    **Realidad.** Se certifica el sistema de gestión, no el producto. El auditor verifica que defines criterios (por ejemplo, de equidad), que evalúas contra ellos, que tratas lo que encuentras y que corriges; no "aprueba" tu modelo ni opina sobre su precisión. Un modelo con sesgo puede existir en una organización certificada. Lo que no debería pasar es que nadie lo busque ni lo atienda.

    **Qué hacer.** Comunica el certificado con precisión: "nuestro sistema de gestión de IA está certificado", en lugar de "nuestra IA está certificada".

## Sobre proveedores y terceros

??? failure "Mito: «El certificado cubre a mis proveedores de IA»"
    **Realidad.** Tu certificado cubre tu SGIA dentro de tu alcance. Tus proveedores siguen siendo terceros que te toca gestionar: evaluarlos, repartir responsabilidades y vigilar que lo que entregan sea coherente con tu enfoque ([A.10.2](../anexo-a/a10-terceros.md#a-10-2) y [A.10.3](../anexo-a/a10-terceros.md#a-10-3)). Y al revés: que tu proveedor esté certificado no te certifica a ti, aunque es buena evidencia para tu evaluación de proveedores.

    **Ejemplo.** Contadores Alameda contrata a "Alma" como servicio de BotNorte. Aunque BotNorte tuviera su propio certificado, el despacho seguiría a cargo de curar la base de preguntas frecuentes, de avisar a sus clientes que hablan con una IA y de atender los errores sobre plazos fiscales. Y si BotNorte presume un certificado, conviene revisar que su alcance incluya el servicio que contratas.

??? failure "Mito: «Si uso un LLM de un gran proveedor, la responsabilidad es suya»"
    **Realidad.** La responsabilidad se reparte, no se transfiere. El proveedor del modelo responde por lo que controla (cómo lo entrena, sus filtros, su infraestructura); tú respondes por lo que decides: para qué lo usas, qué datos le envías, cómo presentas sus respuestas y qué supervisión humana pones. La norma te pide repartir esas responsabilidades de forma explícita ([A.10.2](../anexo-a/a10-terceros.md#a-10-2)) y usar cada sistema dentro de su uso previsto ([A.9.4](../anexo-a/a9-uso.md#a-9-4)). Lee los términos de servicio: es común que dejen al cliente la responsabilidad por el uso y los resultados.

    **Ejemplo.** En Conversa Labs hay tres capas: el proveedor del modelo fundacional, Conversa (orquestación, generación aumentada por recuperación, filtros de seguridad y pruebas) y cada cliente, que despliega el asistente frente a sus propios usuarios. Una matriz de responsabilidad compartida evita que cada uno crea que el otro se encarga.

## Sobre el proyecto

??? failure "Mito: «Es un proyecto del área de TI»"
    **Realidad.** La [cláusula 5](../clausulas/c5-liderazgo.md) pone a la alta dirección al frente: compromiso, política, recursos y roles. Las decisiones más difíciles (qué riesgos aceptar, qué usos prohibir, cuándo una decisión automatizada necesita revisión humana) son de negocio, legales y éticas. TI suele operar parte de los controles, pero un SGIA que vive solo en TI difícilmente demuestra liderazgo ante un auditor.

    **Ejemplo.** En Contadores Alameda, la Gerencia de TI es responsable del SGIA, pero la Socia directora aprueba la política y acepta los riesgos residuales, la Coordinadora de cumplimiento y datos personales vigila el tratamiento de datos, y el área de atención a clientes es dueña del proceso de "Alma".

??? failure "Mito: «Mejor espero a que haya una ley de IA en mi país»"
    **Realidad.** La IA ya está sujeta a reglas vigentes: protección de datos personales (en México, la LFPDPPP, con su aviso de privacidad y derechos ARCO), protección a usuarios de servicios financieros, normas laborales, de consumo y sectoriales. Además, la presión suele llegar antes por la vía de los contratos: cuestionarios de bancos, aseguradoras y clientes extranjeros. Un SGIA te prepara para lo que ya existe y para lo que venga, sin depender del calendario legislativo. Revisa [México y Latinoamérica](../integracion/contexto-mexico-latam.md).

## ¿Conoces otro mito?

Si escuchaste otra idea equivocada en una junta, un curso o una propuesta comercial, cuéntanos. Las instrucciones están en [Cómo contribuir](../acerca-de.md#como-contribuir). Y si quieres seguir, la siguiente parada natural son las [rutas de lectura](rutas-de-lectura.md).

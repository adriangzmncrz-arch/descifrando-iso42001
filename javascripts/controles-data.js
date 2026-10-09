/* Archivo generado por scripts/generar_datos.py a partir de data/controles.yml.
   No lo edites a mano. Nombres de controles: traducción libre del autor. */
window.DX_DATA = {
  "objetivos": [
    {
      "id": "A.2",
      "nombre": "Políticas relacionadas con la IA",
      "corto": "Políticas",
      "clase": "obj-a2",
      "url": "anexo-a/a2-politicas/"
    },
    {
      "id": "A.3",
      "nombre": "Organización interna",
      "corto": "Organización",
      "clase": "obj-a3",
      "url": "anexo-a/a3-organizacion-interna/"
    },
    {
      "id": "A.4",
      "nombre": "Recursos para sistemas de IA",
      "corto": "Recursos",
      "clase": "obj-a4",
      "url": "anexo-a/a4-recursos/"
    },
    {
      "id": "A.5",
      "nombre": "Evaluación de impactos de los sistemas de IA",
      "corto": "Impacto",
      "clase": "obj-a5",
      "url": "anexo-a/a5-evaluacion-de-impacto/"
    },
    {
      "id": "A.6",
      "nombre": "Ciclo de vida del sistema de IA",
      "corto": "Ciclo de vida",
      "clase": "obj-a6",
      "url": "anexo-a/a6-ciclo-de-vida/"
    },
    {
      "id": "A.7",
      "nombre": "Datos para sistemas de IA",
      "corto": "Datos",
      "clase": "obj-a7",
      "url": "anexo-a/a7-datos/"
    },
    {
      "id": "A.8",
      "nombre": "Información para las partes interesadas",
      "corto": "Información",
      "clase": "obj-a8",
      "url": "anexo-a/a8-informacion-partes-interesadas/"
    },
    {
      "id": "A.9",
      "nombre": "Uso de sistemas de IA",
      "corto": "Uso",
      "clase": "obj-a9",
      "url": "anexo-a/a9-uso/"
    },
    {
      "id": "A.10",
      "nombre": "Relaciones con terceros y clientes",
      "corto": "Terceros",
      "clase": "obj-a10",
      "url": "anexo-a/a10-terceros/"
    }
  ],
  "controles": [
    {
      "id": "A.2.2",
      "nombre": "Política de IA",
      "corto": "Política de IA",
      "objetivo": "A.2",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "similar",
      "iso27001": [
        "5.1"
      ],
      "resumen": "Documentar una política aprobada por la dirección que fije principios y reglas para desarrollar o usar sistemas de IA.",
      "url": "anexo-a/a2-politicas/#a-2-2"
    },
    {
      "id": "A.2.3",
      "nombre": "Alineación con otras políticas de la organización",
      "corto": "Alineación con políticas",
      "objetivo": "A.2",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "bajo",
      "novedad": "similar",
      "iso27001": [
        "5.1"
      ],
      "resumen": "Identificar qué otras políticas (seguridad, privacidad, calidad, compras, ética) tocan a la IA y ajustarlas o referenciarlas.",
      "url": "anexo-a/a2-politicas/#a-2-3"
    },
    {
      "id": "A.2.4",
      "nombre": "Revisión de la política de IA",
      "corto": "Revisión de la política",
      "objetivo": "A.2",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "bajo",
      "novedad": "equivalente",
      "iso27001": [
        "5.1"
      ],
      "resumen": "Revisar la política de IA a intervalos definidos y cuando haya cambios relevantes (legales, técnicos o de negocio).",
      "url": "anexo-a/a2-politicas/#a-2-4"
    },
    {
      "id": "A.3.2",
      "nombre": "Roles y responsabilidades de IA",
      "corto": "Roles y responsabilidades",
      "objetivo": "A.3",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "similar",
      "iso27001": [
        "5.2",
        "5.3"
      ],
      "resumen": "Definir y asignar quién hace qué en la IA (riesgos, impacto, datos, supervisión humana, proveedores, cumplimiento legal).",
      "url": "anexo-a/a3-organizacion-interna/#a-3-2"
    },
    {
      "id": "A.3.3",
      "nombre": "Reporte de inquietudes",
      "corto": "Reporte de inquietudes",
      "objetivo": "A.3",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "similar",
      "iso27001": [
        "6.8"
      ],
      "resumen": "Habilitar un canal confidencial, con protección contra represalias, para que el personal reporte inquietudes sobre la IA.",
      "url": "anexo-a/a3-organizacion-interna/#a-3-3"
    },
    {
      "id": "A.4.2",
      "nombre": "Documentación de recursos",
      "corto": "Documentación de recursos",
      "objetivo": "A.4",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "similar",
      "iso27001": [
        "5.9"
      ],
      "resumen": "Identificar y documentar los recursos que cada sistema de IA necesita en cada etapa de su ciclo de vida.",
      "url": "anexo-a/a4-recursos/#a-4-2"
    },
    {
      "id": "A.4.3",
      "nombre": "Recursos de datos",
      "corto": "Recursos de datos",
      "objetivo": "A.4",
      "roles": [
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "alto",
      "novedad": "nuevo",
      "iso27001": [
        "5.9",
        "5.12"
      ],
      "resumen": "Documentar los conjuntos de datos del sistema de IA (origen, fechas, categorías, etiquetado, calidad, sesgos conocidos, retención).",
      "url": "anexo-a/a4-recursos/#a-4-3"
    },
    {
      "id": "A.4.4",
      "nombre": "Recursos de herramientas",
      "corto": "Herramientas",
      "objetivo": "A.4",
      "roles": [
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "bajo",
      "novedad": "similar",
      "iso27001": [
        "5.9"
      ],
      "resumen": "Documentar algoritmos, modelos, bibliotecas, plataformas y herramientas usadas para construir y evaluar la IA.",
      "url": "anexo-a/a4-recursos/#a-4-4"
    },
    {
      "id": "A.4.5",
      "nombre": "Recursos de sistema y cómputo",
      "corto": "Sistema y cómputo",
      "objetivo": "A.4",
      "roles": [
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "bajo",
      "novedad": "equivalente",
      "iso27001": [
        "5.9",
        "8.6"
      ],
      "resumen": "Documentar la infraestructura (nube, local, borde), capacidad y su impacto, incluido el ambiental, que usa la IA.",
      "url": "anexo-a/a4-recursos/#a-4-5"
    },
    {
      "id": "A.4.6",
      "nombre": "Recursos humanos",
      "corto": "Recursos humanos",
      "objetivo": "A.4",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "similar",
      "iso27001": [
        "6.3"
      ],
      "resumen": "Documentar las personas y competencias necesarias en cada etapa del ciclo de vida, incluidas las de supervisión humana.",
      "url": "anexo-a/a4-recursos/#a-4-6"
    },
    {
      "id": "A.5.2",
      "nombre": "Proceso de evaluación de impacto",
      "corto": "Proceso de evaluación",
      "objetivo": "A.5",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "alto",
      "novedad": "nuevo",
      "iso27001": [],
      "resumen": "Establecer un proceso para valorar las consecuencias que un sistema de IA puede tener en personas, grupos y sociedades.",
      "url": "anexo-a/a5-evaluacion-de-impacto/#a-5-2"
    },
    {
      "id": "A.5.3",
      "nombre": "Documentación de las evaluaciones de impacto",
      "corto": "Documentación de evaluaciones",
      "objetivo": "A.5",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "nuevo",
      "iso27001": [],
      "resumen": "Documentar los resultados de cada evaluación de impacto y conservarlos durante un periodo definido.",
      "url": "anexo-a/a5-evaluacion-de-impacto/#a-5-3"
    },
    {
      "id": "A.5.4",
      "nombre": "Evaluación del impacto en individuos o grupos",
      "corto": "Impacto en personas",
      "objetivo": "A.5",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "alto",
      "novedad": "nuevo",
      "iso27001": [],
      "resumen": "Valorar y documentar cómo el sistema puede afectar derechos, oportunidades, seguridad o bienestar de personas y grupos.",
      "url": "anexo-a/a5-evaluacion-de-impacto/#a-5-4"
    },
    {
      "id": "A.5.5",
      "nombre": "Evaluación de impactos sociales",
      "corto": "Impactos sociales",
      "objetivo": "A.5",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "nuevo",
      "iso27001": [],
      "resumen": "Valorar y documentar efectos amplios en la sociedad (ambientales, económicos, democráticos, culturales, de salud).",
      "url": "anexo-a/a5-evaluacion-de-impacto/#a-5-5"
    },
    {
      "id": "A.6.1.2",
      "nombre": "Objetivos para el desarrollo responsable",
      "corto": "Objetivos de desarrollo",
      "objetivo": "A.6",
      "roles": [
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "nuevo",
      "iso27001": [],
      "resumen": "Definir objetivos de desarrollo responsable (equidad, seguridad, transparencia…) y convertirlos en medidas en cada etapa.",
      "url": "anexo-a/a6-ciclo-de-vida/#a-6-1-2"
    },
    {
      "id": "A.6.1.3",
      "nombre": "Procesos para el diseño y desarrollo responsable",
      "corto": "Proceso de desarrollo",
      "objetivo": "A.6",
      "roles": [
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "alto",
      "novedad": "similar",
      "iso27001": [
        "8.25",
        "8.27"
      ],
      "resumen": "Definir el proceso de desarrollo de IA con etapas, pruebas, aprobaciones, criterios de liberación y supervisión humana.",
      "url": "anexo-a/a6-ciclo-de-vida/#a-6-1-3"
    },
    {
      "id": "A.6.2.2",
      "nombre": "Requisitos y especificación",
      "corto": "Requisitos",
      "objetivo": "A.6",
      "roles": [
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "similar",
      "iso27001": [
        "8.26"
      ],
      "resumen": "Especificar y documentar por qué y para qué se construye o mejora un sistema de IA y qué requisitos debe cumplir.",
      "url": "anexo-a/a6-ciclo-de-vida/#a-6-2-2"
    },
    {
      "id": "A.6.2.3",
      "nombre": "Documentación del diseño y desarrollo",
      "corto": "Diseño y desarrollo",
      "objetivo": "A.6",
      "roles": [
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "similar",
      "iso27001": [
        "8.27",
        "8.28"
      ],
      "resumen": "Documentar las decisiones de diseño (enfoque de aprendizaje, modelo, datos, amenazas, interfaz humana) y la arquitectura final.",
      "url": "anexo-a/a6-ciclo-de-vida/#a-6-2-3"
    },
    {
      "id": "A.6.2.4",
      "nombre": "Verificación y validación",
      "corto": "Verificación y validación",
      "objetivo": "A.6",
      "roles": [
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "alto",
      "novedad": "similar",
      "iso27001": [
        "8.29"
      ],
      "resumen": "Definir cómo se prueba el sistema de IA, con qué datos y con qué criterios de aceptación, incluidos sesgo y robustez.",
      "url": "anexo-a/a6-ciclo-de-vida/#a-6-2-4"
    },
    {
      "id": "A.6.2.5",
      "nombre": "Despliegue",
      "corto": "Despliegue",
      "objetivo": "A.6",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "similar",
      "iso27001": [
        "8.31",
        "8.32"
      ],
      "resumen": "Documentar un plan de despliegue y verificar que se cumplen los requisitos antes de poner el sistema en producción.",
      "url": "anexo-a/a6-ciclo-de-vida/#a-6-2-5"
    },
    {
      "id": "A.6.2.6",
      "nombre": "Operación y monitoreo",
      "corto": "Operación y monitoreo",
      "objetivo": "A.6",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "alto",
      "novedad": "similar",
      "iso27001": [
        "8.16",
        "8.6",
        "8.8"
      ],
      "resumen": "Definir cómo se opera, monitorea (desempeño, deriva, amenazas propias de la IA), repara, actualiza y da soporte al sistema.",
      "url": "anexo-a/a6-ciclo-de-vida/#a-6-2-6"
    },
    {
      "id": "A.6.2.7",
      "nombre": "Documentación técnica",
      "corto": "Documentación técnica",
      "objetivo": "A.6",
      "roles": [
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "nuevo",
      "iso27001": [
        "5.37"
      ],
      "resumen": "Determinar qué documentación técnica necesita cada parte interesada (usuarios, socios, autoridades) y entregarla en forma adecuada.",
      "url": "anexo-a/a6-ciclo-de-vida/#a-6-2-7"
    },
    {
      "id": "A.6.2.8",
      "nombre": "Registro de eventos",
      "corto": "Registro de eventos",
      "objetivo": "A.6",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "similar",
      "iso27001": [
        "8.15",
        "8.17"
      ],
      "resumen": "Decidir en qué etapas se registran eventos del sistema de IA, como mínimo durante su uso, y cuánto tiempo se conservan.",
      "url": "anexo-a/a6-ciclo-de-vida/#a-6-2-8"
    },
    {
      "id": "A.7.2",
      "nombre": "Datos para desarrollo y mejora",
      "corto": "Datos para desarrollo",
      "objetivo": "A.7",
      "roles": [
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "alto",
      "novedad": "nuevo",
      "iso27001": [],
      "resumen": "Definir e implementar procesos de gestión de datos para desarrollar y mejorar sistemas de IA (privacidad, seguridad, representatividad).",
      "url": "anexo-a/a7-datos/#a-7-2"
    },
    {
      "id": "A.7.3",
      "nombre": "Adquisición de datos",
      "corto": "Adquisición",
      "objetivo": "A.7",
      "roles": [
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "nuevo",
      "iso27001": [],
      "resumen": "Documentar cómo se obtienen y seleccionan los datos (fuentes, cantidad, derechos de uso, datos personales, sesgos conocidos).",
      "url": "anexo-a/a7-datos/#a-7-3"
    },
    {
      "id": "A.7.4",
      "nombre": "Calidad de los datos",
      "corto": "Calidad",
      "objetivo": "A.7",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "alto",
      "novedad": "nuevo",
      "iso27001": [],
      "resumen": "Definir requisitos de calidad de datos y comprobar que los datos de entrenamiento, prueba y operación los cumplen.",
      "url": "anexo-a/a7-datos/#a-7-4"
    },
    {
      "id": "A.7.5",
      "nombre": "Procedencia de los datos",
      "corto": "Procedencia",
      "objetivo": "A.7",
      "roles": [
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "nuevo",
      "iso27001": [],
      "resumen": "Registrar de dónde vienen los datos y qué transformaciones y transferencias han sufrido durante su ciclo de vida.",
      "url": "anexo-a/a7-datos/#a-7-5"
    },
    {
      "id": "A.7.6",
      "nombre": "Preparación de los datos",
      "corto": "Preparación",
      "objetivo": "A.7",
      "roles": [
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "nuevo",
      "iso27001": [],
      "resumen": "Definir criterios y métodos de preparación (limpieza, imputación, normalización, etiquetado, codificación) y documentarlos.",
      "url": "anexo-a/a7-datos/#a-7-6"
    },
    {
      "id": "A.8.2",
      "nombre": "Documentación del sistema e información para usuarios",
      "corto": "Información a usuarios",
      "objetivo": "A.8",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "nuevo",
      "iso27001": [],
      "resumen": "Dar a los usuarios la información que necesitan (que interactúan con IA, propósito, límites, cómo anular o escalar).",
      "url": "anexo-a/a8-informacion-partes-interesadas/#a-8-2"
    },
    {
      "id": "A.8.3",
      "nombre": "Reporte externo",
      "corto": "Reporte externo",
      "objetivo": "A.8",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "bajo",
      "novedad": "nuevo",
      "iso27001": [
        "6.8"
      ],
      "resumen": "Ofrecer a usuarios y terceros un medio para reportar impactos adversos del sistema de IA y darle seguimiento.",
      "url": "anexo-a/a8-informacion-partes-interesadas/#a-8-3"
    },
    {
      "id": "A.8.4",
      "nombre": "Comunicación de incidentes",
      "corto": "Comunicación de incidentes",
      "objetivo": "A.8",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "similar",
      "iso27001": [
        "5.24",
        "5.26",
        "5.5"
      ],
      "resumen": "Documentar un plan para comunicar incidentes de IA a los usuarios y, cuando aplique, a autoridades.",
      "url": "anexo-a/a8-informacion-partes-interesadas/#a-8-4"
    },
    {
      "id": "A.8.5",
      "nombre": "Información para las partes interesadas",
      "corto": "Información a partes interesadas",
      "objetivo": "A.8",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "similar",
      "iso27001": [
        "5.31",
        "5.5"
      ],
      "resumen": "Identificar y documentar las obligaciones de informar sobre el sistema de IA a clientes, reguladores u otras partes.",
      "url": "anexo-a/a8-informacion-partes-interesadas/#a-8-5"
    },
    {
      "id": "A.9.2",
      "nombre": "Procesos para el uso responsable",
      "corto": "Proceso de uso responsable",
      "objetivo": "A.9",
      "roles": [
        "usa",
        "desarrolla"
      ],
      "esfuerzo": "medio",
      "novedad": "similar",
      "iso27001": [
        "5.10"
      ],
      "resumen": "Definir cómo se decide y aprueba el uso de un sistema de IA (aprobaciones, costos, compras, requisitos legales).",
      "url": "anexo-a/a9-uso/#a-9-2"
    },
    {
      "id": "A.9.3",
      "nombre": "Objetivos para el uso responsable",
      "corto": "Objetivos de uso responsable",
      "objetivo": "A.9",
      "roles": [
        "usa",
        "desarrolla"
      ],
      "esfuerzo": "bajo",
      "novedad": "nuevo",
      "iso27001": [],
      "resumen": "Fijar objetivos de uso responsable (equidad, transparencia, privacidad…) y decidir dónde se necesita supervisión humana.",
      "url": "anexo-a/a9-uso/#a-9-3"
    },
    {
      "id": "A.9.4",
      "nombre": "Uso previsto del sistema de IA",
      "corto": "Uso previsto",
      "objetivo": "A.9",
      "roles": [
        "usa",
        "desarrolla"
      ],
      "esfuerzo": "medio",
      "novedad": "nuevo",
      "iso27001": [],
      "resumen": "Asegurar que el sistema se usa conforme a su uso previsto y su documentación, y escalar cuando no sea así.",
      "url": "anexo-a/a9-uso/#a-9-4"
    },
    {
      "id": "A.10.2",
      "nombre": "Asignación de responsabilidades",
      "corto": "Asignación de responsabilidades",
      "objetivo": "A.10",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "similar",
      "iso27001": [
        "5.19",
        "5.20",
        "5.23"
      ],
      "resumen": "Repartir y documentar las responsabilidades del ciclo de vida entre la organización, socios, proveedores y clientes.",
      "url": "anexo-a/a10-terceros/#a-10-2"
    },
    {
      "id": "A.10.3",
      "nombre": "Proveedores",
      "corto": "Proveedores",
      "objetivo": "A.10",
      "roles": [
        "usa",
        "desarrolla",
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "similar",
      "iso27001": [
        "5.19",
        "5.20",
        "5.21",
        "5.22"
      ],
      "resumen": "Asegurar que lo que entregan los proveedores (datos, modelos, sistemas) sea coherente con el enfoque responsable de la organización.",
      "url": "anexo-a/a10-terceros/#a-10-3"
    },
    {
      "id": "A.10.4",
      "nombre": "Clientes",
      "corto": "Clientes",
      "objetivo": "A.10",
      "roles": [
        "provee"
      ],
      "esfuerzo": "medio",
      "novedad": "nuevo",
      "iso27001": [
        "5.20"
      ],
      "resumen": "Considerar las necesidades y expectativas de los clientes y comunicarles los límites y responsabilidades del sistema.",
      "url": "anexo-a/a10-terceros/#a-10-4"
    }
  ]
};

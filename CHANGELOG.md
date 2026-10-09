# Registro de cambios

Todos los cambios relevantes de este proyecto se documentan en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el proyecto sigue [Versionado Semántico](https://semver.org/lang/es/).
Para una guía de contenido, la versión *mayor* cambia con reestructuras del sitio o una nueva edición de la norma; la *menor* con secciones nuevas; el *parche* con correcciones.

## [Sin publicar]

### Añadido

- Imagen de vista previa para redes sociales (`docs/assets/img/social.png`, 1280 × 640) y metadatos Open Graph y de X/Twitter en todas las páginas, con el título y la descripción de cada una.
- Flujo `publicar-version.yml`: al subir una etiqueta `vX.Y.Z` crea el *release* con las notas del CHANGELOG y un ZIP de las plantillas; el proceso queda documentado en CONTRIBUTING.

### Cambiado

- El README y la página de plantillas enlazan al ZIP de plantillas de la última versión publicada.

## [1.0.0] - 2026-10-09

Primera versión completa de la guía. Los datos regulatorios y de estado de normas se consultaron el 9 de octubre de 2026.

### Añadido

- **Sitio** con MkDocs y Material for MkDocs: navegación por pestañas, búsqueda en español, índice integrado, carga instantánea, modo claro y oscuro, glosario emergente, anotaciones de código y despliegue automático a `gh-pages` con verificación estricta en *pull requests*.
- **Identidad visual propia**: paleta índigo y cian, un color por objetivo del Anexo A, insignias de rol, esfuerzo y novedad frente a ISO 27001, admoniciones propias (`auditor`, `latam`, `legal`) y portada con accesos por perfil, cifras clave y rutas de lectura.
- **Empieza aquí**: la norma en 5 minutos, árbol de decisión "¿Necesito ISO 42001?", 15 mitos y realidades, rutas de lectura por perfil y guía de uso.
- **Fundamentos**: qué es un SGIA, IA para profesionales de GRC, roles según ISO/IEC 22989, familia de normas con estado verificado, principios de IA responsable y riesgo frente a impacto.
- **Cláusulas 4 a 10**: una guía por cláusula con el formato completo (pestañas por rol, diferencias con ISO 27001, preguntas, evidencia esperada, errores comunes, ejemplo resuelto y relaciones).
- **Anexo A**: tabla periódica clicable, matriz filtrable con exportación a CSV y una guía por cada uno de los 38 controles, con implementación mínima y madura, evidencia, preguntas del auditor, errores comunes y criterios de exclusión.
- **Anexos B, C y D**, **glosario** español–inglés con más de 150 términos y **40 preguntas frecuentes**.
- **Casos prácticos** de punta a punta: una PyME que usa IA generativa, una fintech con *scoring* crediticio y una empresa que desarrolla y vende un chatbot.
- **Implementación** (hoja de ruta, documentación requerida, errores frecuentes) y **auditoría** (cómo se certifica, preguntas del auditor, hallazgos de ejemplo, checklist de preparación).
- **Integración** con ISO 27001 (incluida la SoA combinada), NIST AI RMF, el Reglamento de IA de la UE tras el Ómnibus Digital y el contexto de México y Latinoamérica, con fuentes citadas.
- **Herramientas interactivas**: autodiagnóstico de preparación con gráficas de radar y selector de rol.
- **Infografías SVG** en línea compatibles con modo oscuro: ciclo PHVA, familia de normas, roles en la IA, ciclo de vida con controles, riesgo frente a impacto, ISO 27001 frente a ISO 42001 y tabla periódica.
- **Plantillas**: 9 documentos en Markdown con vista previa en el sitio y 4 libros de Excel más un CSV, generados por script y con fórmulas verificadas.
- **Datos y scripts**: fuente única de los 38 controles (`data/controles.yml`), generadores reproducibles y validación de contenido en CI.
- Archivos de comunidad: licencias (CC BY-SA 4.0 y MIT), guía de contribución, código de conducta, plantillas de *issues* y de *pull request*, `CITATION.cff`.

[Sin publicar]: https://github.com/adriangzmncrz-arch/descifrando-iso42001/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/adriangzmncrz-arch/descifrando-iso42001/releases/tag/v1.0.0

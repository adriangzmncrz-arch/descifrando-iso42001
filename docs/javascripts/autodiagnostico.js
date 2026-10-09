/* Autodiagnóstico de preparación para ISO/IEC 42001.
 * Cuestionario por cláusula (4 a 10) y por objetivo del Anexo A (A.2 a A.10).
 * Calcula un puntaje por área y dibuja dos gráficas de radar con Chart.js (CDN).
 * Las respuestas se guardan solo en el navegador (localStorage) y se pueden borrar.
 * Licencia: MIT (ver LICENSE-CODE).
 */
(function () {
  "use strict";

  var CLAVE = "dx-autodiagnostico-v1";
  var CHART_URL = "https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js";

  var ESCALA = [
    { v: 0, t: "No existe" },
    { v: 1, t: "Informal o iniciado" },
    { v: 2, t: "Documentado, aplicado en parte" },
    { v: 3, t: "Implementado y con evidencia" }
  ];

  // grupo: "c" = cláusulas (sin opción "No aplica"); "a" = Anexo A (admite "No aplica")
  var AREAS = [
    { id: "c4", grupo: "c", corto: "4 Contexto", nombre: "Cláusula 4 · Contexto de la organización", url: "clausulas/c4-contexto/", preguntas: [
      "Identificamos las cuestiones internas y externas que afectan a nuestro uso o desarrollo de IA (regulación, clientes, cultura, competencia).",
      "Tenemos un inventario de los sistemas de IA que usamos, desarrollamos o proveemos, con su propósito previsto.",
      "Determinamos nuestro rol respecto de cada sistema de IA (cliente o usuario, productor, proveedor, socio).",
      "El alcance del SGIA está definido por escrito y es coherente con el inventario y las partes interesadas."
    ] },
    { id: "c5", grupo: "c", corto: "5 Liderazgo", nombre: "Cláusula 5 · Liderazgo", url: "clausulas/c5-liderazgo/", preguntas: [
      "La alta dirección aprobó una política de IA y la comunica activamente.",
      "Hay una persona o comité con autoridad formal para dirigir el SGIA e informar su desempeño a la dirección.",
      "La dirección asigna presupuesto y tiempo de personas para gestionar la IA de forma responsable."
    ] },
    { id: "c6", grupo: "c", corto: "6 Planificación", nombre: "Cláusula 6 · Planificación", url: "clausulas/c6-planificacion/", preguntas: [
      "Tenemos criterios de riesgo de IA que consideran consecuencias para la organización, para personas y para la sociedad.",
      "Evaluamos los riesgos de cada sistema de IA (o grupo de sistemas) con un método repetible.",
      "Tenemos un proceso de evaluación de impacto del sistema de IA y sus resultados alimentan la evaluación de riesgos.",
      "Contamos con una Declaración de Aplicabilidad que justifica la inclusión o exclusión de los 38 controles.",
      "Definimos objetivos de IA medibles, con responsables y plazos."
    ] },
    { id: "c7", grupo: "c", corto: "7 Apoyo", nombre: "Cláusula 7 · Apoyo", url: "clausulas/c7-apoyo/", preguntas: [
      "Sabemos qué competencias de IA necesita cada rol y tenemos evidencia de que las personas las tienen.",
      "El personal conoce la política de IA y las reglas de uso aceptable (por ejemplo, de IA generativa).",
      "Definimos qué se comunica sobre la IA, a quién, cuándo y por qué medio.",
      "La información documentada del SGIA está controlada (versiones, aprobaciones, acceso)."
    ] },
    { id: "c8", grupo: "c", corto: "8 Operación", nombre: "Cláusula 8 · Operación", url: "clausulas/c8-operacion/", preguntas: [
      "Repetimos las evaluaciones de riesgos e impacto a intervalos planificados y ante cambios significativos.",
      "Implementamos el plan de tratamiento de riesgos y verificamos que los controles funcionan.",
      "Controlamos los cambios en los sistemas de IA y los servicios de IA que nos dan terceros."
    ] },
    { id: "c9", grupo: "c", corto: "9 Evaluación", nombre: "Cláusula 9 · Evaluación del desempeño", url: "clausulas/c9-evaluacion-del-desempeno/", preguntas: [
      "Medimos indicadores del SGIA y del desempeño de los sistemas de IA con métodos definidos.",
      "Tenemos un programa de auditoría interna del SGIA con auditores objetivos y competentes.",
      "La alta dirección revisa el SGIA a intervalos planificados y deja registro de sus decisiones."
    ] },
    { id: "c10", grupo: "c", corto: "10 Mejora", nombre: "Cláusula 10 · Mejora", url: "clausulas/c10-mejora/", preguntas: [
      "Registramos las no conformidades, analizamos su causa raíz y verificamos la eficacia de las acciones correctivas.",
      "Usamos incidentes, auditorías y resultados de monitoreo para mejorar el SGIA de forma continua."
    ] },
    { id: "a2", grupo: "a", corto: "A.2 Políticas", nombre: "A.2 · Políticas relacionadas con la IA", url: "anexo-a/a2-politicas/", preguntas: [
      "La política de IA incluye principios, reglas por tipo de uso y un proceso para excepciones.",
      "Revisamos qué otras políticas (seguridad, privacidad, compras, ética) se cruzan con la IA y las ajustamos.",
      "La política de IA se revisa a intervalos definidos y ante cambios relevantes."
    ] },
    { id: "a3", grupo: "a", corto: "A.3 Organiz.", nombre: "A.3 · Organización interna", url: "anexo-a/a3-organizacion-interna/", preguntas: [
      "Los roles y responsabilidades de IA (dueños de sistemas, supervisión humana, datos, riesgos) están asignados por escrito.",
      "Existe un canal confidencial y sin represalias para reportar inquietudes sobre la IA."
    ] },
    { id: "a4", grupo: "a", corto: "A.4 Recursos", nombre: "A.4 · Recursos para sistemas de IA", url: "anexo-a/a4-recursos/", preguntas: [
      "Para cada sistema de IA documentamos sus recursos: datos, herramientas, modelos, infraestructura y personas.",
      "Los conjuntos de datos tienen ficha (origen, fechas, categorías, calidad, sesgos conocidos).",
      "Sabemos qué competencias humanas necesita cada etapa del ciclo de vida, incluida la supervisión."
    ] },
    { id: "a5", grupo: "a", corto: "A.5 Impacto", nombre: "A.5 · Evaluación de impactos", url: "anexo-a/a5-evaluacion-de-impacto/", preguntas: [
      "Tenemos definidos los disparadores, responsables y método de la evaluación de impacto.",
      "Evaluamos impactos en personas y grupos (equidad, privacidad, seguridad, derechos, accesibilidad).",
      "Evaluamos impactos sociales (ambientales, económicos, desinformación) y conservamos los resultados."
    ] },
    { id: "a6", grupo: "a", corto: "A.6 Ciclo vida", nombre: "A.6 · Ciclo de vida del sistema de IA", url: "anexo-a/a6-ciclo-de-vida/", preguntas: [
      "Tenemos objetivos de desarrollo responsable traducidos en requisitos y criterios de aceptación.",
      "Probamos los sistemas de IA con criterios de liberación definidos (incluidos sesgo y robustez) antes de desplegarlos.",
      "Monitoreamos en operación el desempeño, la deriva y las amenazas propias de la IA.",
      "Registramos eventos de los sistemas de IA en uso y tenemos su documentación técnica actualizada."
    ] },
    { id: "a7", grupo: "a", corto: "A.7 Datos", nombre: "A.7 · Datos para sistemas de IA", url: "anexo-a/a7-datos/", preguntas: [
      "Documentamos cómo adquirimos los datos y con qué derechos los usamos (datos personales, licencias).",
      "Definimos requisitos de calidad de datos y comprobamos que se cumplen.",
      "Registramos la procedencia y las transformaciones de los datos usados por la IA."
    ] },
    { id: "a8", grupo: "a", corto: "A.8 Informar", nombre: "A.8 · Información para las partes interesadas", url: "anexo-a/a8-informacion-partes-interesadas/", preguntas: [
      "Los usuarios saben cuándo interactúan con IA, para qué sirve, sus límites y cómo escalar a un humano.",
      "Las partes externas pueden reportar impactos adversos y les damos seguimiento.",
      "Tenemos un plan para comunicar incidentes de IA a usuarios y, cuando aplique, a autoridades."
    ] },
    { id: "a9", grupo: "a", corto: "A.9 Uso", nombre: "A.9 · Uso de sistemas de IA", url: "anexo-a/a9-uso/", preguntas: [
      "Cada nuevo uso de IA pasa por un proceso de aprobación (incluida la IA generativa de uso diario).",
      "Definimos dónde es obligatoria la supervisión humana y quién puede anular a la IA.",
      "Verificamos que los sistemas se usan conforme a su uso previsto y su documentación."
    ] },
    { id: "a10", grupo: "a", corto: "A.10 Terceros", nombre: "A.10 · Relaciones con terceros y clientes", url: "anexo-a/a10-terceros/", preguntas: [
      "Las responsabilidades con proveedores, socios y clientes de IA están repartidas y documentadas.",
      "Evaluamos a los proveedores de IA (uso de nuestros datos, documentación, incidentes, cambios de modelo).",
      "Comunicamos a nuestros clientes los límites y responsabilidades de los sistemas de IA que les damos."
    ] }
  ];

  var NIVELES = [
    { min: 0, t: "Inicial", d: "Hay iniciativas aisladas, pero todavía no un sistema de gestión. Empieza por el inventario de sistemas de IA, la política y los roles." },
    { min: 25, t: "En desarrollo", d: "Tienes piezas importantes, pero faltan procesos repetibles y evidencia. Prioriza riesgos, impacto y la Declaración de Aplicabilidad." },
    { min: 50, t: "Definido", d: "El SGIA está diseñado y parcialmente en operación. Enfócate en generar evidencia, medir y auditar internamente." },
    { min: 75, t: "Gestionado", d: "El sistema funciona y se mide. Cierra brechas puntuales, haz una auditoría interna completa y una revisión por la dirección." },
    { min: 90, t: "Listo para auditoría", d: "Tu autoevaluación indica que podrías enfrentar una auditoría de certificación. Valídalo con una auditoría interna independiente." }
  ];

  function leer() {
    try { return JSON.parse(window.localStorage.getItem(CLAVE)) || {}; } catch (e) { return {}; }
  }
  function guardar(r) {
    try { window.localStorage.setItem(CLAVE, JSON.stringify(r)); } catch (e) { /* almacenamiento no disponible */ }
  }
  function borrar() {
    try { window.localStorage.removeItem(CLAVE); } catch (e) { /* almacenamiento no disponible */ }
  }

  function sitio(ruta) {
    try { return new URL(ruta, window.__md_scope || document.baseURI).href; } catch (e) { return ruta; }
  }

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k]; else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }

  var cargaChart = null;
  function cargarChart() {
    if (window.Chart) return Promise.resolve(window.Chart);
    if (cargaChart) return cargaChart;
    cargaChart = new Promise(function (ok, mal) {
      var s = document.createElement("script");
      s.src = CHART_URL;
      s.async = true;
      s.crossOrigin = "anonymous";
      s.onload = function () { ok(window.Chart); };
      s.onerror = function () { cargaChart = null; mal(new Error("No se pudo cargar Chart.js")); };
      document.head.appendChild(s);
    });
    return cargaChart;
  }

  function puntaje(area, resp) {
    var suma = 0, n = 0, respondidas = 0;
    area.preguntas.forEach(function (_, i) {
      var v = resp[area.id + "-" + i];
      if (v === undefined || v === null) return;
      respondidas++;
      if (v === "na") return;
      suma += Number(v); n++;
    });
    return { pct: n ? Math.round((suma / (n * 3)) * 100) : null, respondidas: respondidas, total: area.preguntas.length, todoNA: respondidas > 0 && n === 0 };
  }

  function iniciar(cont) {
    if (cont.dataset.listo) return;
    cont.dataset.listo = "1";
    var resp = leer();
    var graficas = [];

    cont.innerHTML = "";
    var barra = el("div", { "class": "dx-quiz__progreso", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-label": "Avance del cuestionario" }, [el("span")]);
    var textoAvance = el("p", { "class": "dx-quiz__avance", "aria-live": "polite" });
    var form = el("form", { "class": "dx-quiz", novalidate: "novalidate" });
    // La barra de avance vive dentro del formulario: se queda fija solo mientras respondes
    form.appendChild(el("div", { "class": "dx-quiz__barra" }, [textoAvance, barra]));
    var total = 0;
    AREAS.forEach(function (area) {
      var fs = el("fieldset", { "class": "dx-quiz__area " + (area.grupo === "a" ? "obj-" + area.id : "dx-quiz__area--clausula"), id: "dx-area-" + area.id });
      fs.appendChild(el("legend", {}, [el("a", { href: sitio(area.url), text: area.nombre })]));
      area.preguntas.forEach(function (p, i) {
        total++;
        var nombre = area.id + "-" + i;
        var grupo = el("div", { "class": "dx-quiz__pregunta", role: "radiogroup", "aria-labelledby": "dx-q-" + nombre });
        grupo.appendChild(el("p", { id: "dx-q-" + nombre, text: p }));
        var opciones = el("div", { "class": "dx-quiz__opciones" });
        var lista = ESCALA.map(function (e) { return { v: String(e.v), t: e.t }; });
        if (area.grupo === "a") lista.push({ v: "na", t: "No aplica (excluido con justificación)" });
        lista.forEach(function (o) {
          var id = "dx-r-" + nombre + "-" + o.v;
          var input = el("input", { type: "radio", name: nombre, id: id, value: o.v });
          if (resp[nombre] !== undefined && String(resp[nombre]) === o.v) input.checked = true;
          opciones.appendChild(el("label", { "for": id, "class": "dx-quiz__opcion" + (o.v === "na" ? " dx-quiz__opcion--na" : "") }, [input, el("span", { text: o.t })]));
        });
        grupo.appendChild(opciones);
        fs.appendChild(grupo);
      });
      form.appendChild(fs);
    });
    cont.appendChild(form);

    var acciones = el("div", { "class": "dx-quiz__acciones" });
    var bBorrar = el("button", { type: "button", "class": "md-button dx-btn-sm", text: "Borrar mis respuestas" });
    var bImprimir = el("button", { type: "button", "class": "md-button dx-btn-sm", text: "Imprimir o guardar en PDF" });
    acciones.appendChild(bBorrar);
    acciones.appendChild(bImprimir);

    var resultados = el("section", { "class": "dx-quiz__resultados", id: "dx-resultados", "aria-live": "polite" });
    cont.appendChild(resultados);
    cont.appendChild(acciones);

    function avance() {
      var n = Object.keys(resp).length;
      textoAvance.textContent = n + " de " + total + " preguntas respondidas";
      var pct = Math.round((n / total) * 100);
      barra.firstChild.style.width = pct + "%";
      barra.setAttribute("aria-valuenow", String(pct));
    }

    function colores() {
      var css = getComputedStyle(document.body);
      var oscuro = document.body.getAttribute("data-md-color-scheme") === "slate";
      return {
        c: css.getPropertyValue("--dx-phva-p").trim() || "#4f46e5",
        a: css.getPropertyValue("--dx-accent").trim() || "#0891b2",
        texto: oscuro ? "#e6e8f5" : "#1f2335",
        rejilla: oscuro ? "rgba(255,255,255,.14)" : "rgba(30,27,75,.14)"
      };
    }

    function radar(lienzo, etiquetas, valores, color, titulo) {
      var k = colores();
      return new window.Chart(lienzo, {
        type: "radar",
        data: {
          labels: etiquetas,
          datasets: [{
            label: titulo,
            data: valores,
            borderColor: color,
            backgroundColor: color + "33",
            pointBackgroundColor: color,
            borderWidth: 2,
            spanGaps: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 1.15,
          layout: { padding: 6 },
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: function (c) { return c.raw === null ? "Sin datos" : c.raw + " %"; } } }
          },
          scales: {
            r: {
              min: 0, max: 100,
              ticks: { stepSize: 25, color: k.texto, backdropColor: "transparent", showLabelBackdrop: false },
              grid: { color: k.rejilla },
              angleLines: { color: k.rejilla },
              pointLabels: { color: k.texto, font: { size: 11, weight: "600" } }
            }
          }
        }
      });
    }

    function pintarResultados() {
      graficas.forEach(function (g) { g.destroy(); });
      graficas = [];
      resultados.innerHTML = "";
      var datos = AREAS.map(function (a) { var p = puntaje(a, resp); p.area = a; return p; });
      var conDatos = datos.filter(function (d) { return d.pct !== null; });
      if (!conDatos.length) {
        resultados.appendChild(el("p", { "class": "dx-quiz__vacio", text: "Responde al menos una pregunta para ver tus resultados." }));
        return;
      }
      var clausulas = datos.filter(function (d) { return d.area.grupo === "c"; });
      var anexo = datos.filter(function (d) { return d.area.grupo === "a"; });
      function prom(lista) {
        var v = lista.filter(function (d) { return d.pct !== null; });
        return v.length ? Math.round(v.reduce(function (s, d) { return s + d.pct; }, 0) / v.length) : null;
      }
      var pc = prom(clausulas), pa = prom(anexo);
      var global = pc !== null && pa !== null ? Math.round(pc * 0.5 + pa * 0.5) : (pc !== null ? pc : pa);
      var nivel = NIVELES.filter(function (n) { return global >= n.min; }).pop();

      resultados.appendChild(el("h2", { id: "tus-resultados", text: "Tus resultados" }));
      var resumen = el("div", { "class": "dx-quiz__resumen" }, [
        el("div", { "class": "dx-quiz__global" }, [el("strong", { text: global + " %" }), el("span", { text: "Preparación global" })]),
        el("div", { "class": "dx-quiz__nivel" }, [el("strong", { text: nivel.t }), el("p", { text: nivel.d })]),
        el("div", { "class": "dx-quiz__parciales" }, [
          el("p", {}, ["Cláusulas 4 a 10: ", el("strong", { text: pc === null ? "sin datos" : pc + " %" })]),
          el("p", {}, ["Controles del Anexo A: ", el("strong", { text: pa === null ? "sin datos" : pa + " %" })])
        ])
      ]);
      resultados.appendChild(resumen);

      var canvasC = el("canvas", { role: "img", "aria-label": "Gráfica de radar de preparación por cláusula: " + clausulas.map(function (d) { return d.area.corto + " " + (d.pct === null ? "sin datos" : d.pct + " %"); }).join(", ") });
      var canvasA = el("canvas", { role: "img", "aria-label": "Gráfica de radar de preparación por objetivo del Anexo A: " + anexo.map(function (d) { return d.area.corto + " " + (d.pct === null ? "sin datos o no aplica" : d.pct + " %"); }).join(", ") });
      resultados.appendChild(el("div", { "class": "dx-quiz__graficas" }, [
        el("figure", {}, [canvasC, el("figcaption", { text: "Requisitos del sistema de gestión (cláusulas 4 a 10)" })]),
        el("figure", {}, [canvasA, el("figcaption", { text: "Controles del Anexo A por objetivo" })])
      ]));

      var tabla = el("table", { "class": "dx-quiz__tabla" }, [
        el("thead", {}, [el("tr", {}, [el("th", { text: "Área" }), el("th", { text: "Preparación" }), el("th", { text: "Respondidas" })])])
      ]);
      var tb = el("tbody");
      datos.forEach(function (d) {
        tb.appendChild(el("tr", {}, [
          el("td", {}, [el("a", { href: sitio(d.area.url), text: d.area.nombre })]),
          el("td", { text: d.todoNA ? "No aplica" : (d.pct === null ? "—" : d.pct + " %") }),
          el("td", { text: d.respondidas + " / " + d.total })
        ]));
      });
      tabla.appendChild(tb);
      resultados.appendChild(el("details", { "class": "dx-quiz__detalle" }, [el("summary", { text: "Ver el detalle por área" }), tabla]));

      var debiles = conDatos.slice().sort(function (x, y) { return x.pct - y.pct; }).slice(0, 4);
      var lista = el("ol", { "class": "dx-quiz__prioridades" });
      debiles.forEach(function (d) {
        lista.appendChild(el("li", {}, [el("a", { href: sitio(d.area.url), text: d.area.nombre }), " — " + d.pct + " %"]));
      });
      resultados.appendChild(el("h3", { text: "Por dónde empezar" }));
      resultados.appendChild(el("p", { text: "Estas son las áreas con menor puntaje. Cada enlace lleva a su guía con implementación mínima viable y evidencia esperada:" }));
      resultados.appendChild(lista);

      var k = colores();
      cargarChart().then(function () {
        graficas.push(radar(canvasC, clausulas.map(function (d) { return d.area.corto; }), clausulas.map(function (d) { return d.pct; }), k.c, "Cláusulas"));
        graficas.push(radar(canvasA, anexo.map(function (d) { return d.area.corto; }), anexo.map(function (d) { return d.pct; }), k.a, "Anexo A"));
      }).catch(function () {
        resultados.querySelector(".dx-quiz__graficas").appendChild(el("p", { "class": "dx-quiz__vacio", text: "No se pudo cargar la biblioteca de gráficas. Revisa tu conexión; la tabla de detalle sigue disponible." }));
      });
    }

    form.addEventListener("change", function (ev) {
      if (!ev.target || ev.target.type !== "radio") return;
      resp[ev.target.name] = ev.target.value;
      guardar(resp);
      avance();
      pintarResultados();
    });

    bBorrar.addEventListener("click", function () {
      if (!window.confirm("¿Borrar todas tus respuestas de este navegador?")) return;
      resp = {};
      borrar();
      Array.prototype.forEach.call(form.querySelectorAll("input[type=radio]"), function (i) { i.checked = false; });
      avance();
      pintarResultados();
    });
    bImprimir.addEventListener("click", function () { window.print(); });

    // Redibuja las gráficas si cambia el modo claro/oscuro
    var obs = new MutationObserver(function () {
      if (!document.body.contains(cont)) { obs.disconnect(); return; }
      if (Object.keys(resp).length) pintarResultados();
    });
    obs.observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });

    avance();
    pintarResultados();
  }

  function arrancar() {
    var c = document.getElementById("dx-autodiagnostico");
    if (c) iniciar(c);
  }

  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(arrancar);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", arrancar);
  } else {
    arrancar();
  }
})();

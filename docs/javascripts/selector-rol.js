/* Selector de rol: seis preguntas que indican qué rol o roles tiene la organización
 * respecto de la IA (según los roles de ISO/IEC 22989 que retoma ISO/IEC 42001 en 4.1)
 * y qué controles del Anexo A le pesan más. Interpretación orientativa del autor.
 * Licencia: MIT (ver LICENSE-CODE).
 */
(function () {
  "use strict";

  var PREGUNTAS = [
    { id: "usa", texto: "¿Tu organización usa sistemas de IA en sus procesos, productos o servicios (incluidos asistentes de IA generativa, chatbots o módulos con IA de un proveedor)?",
      opciones: [["si", "Sí"], ["no", "No"], ["nose", "No estoy seguro"]] },
    { id: "desarrolla", texto: "¿Diseña, entrena, ajusta, evalúa u orquesta modelos o sistemas de IA?",
      opciones: [["propio", "Sí, entrenamos modelos propios"], ["construye", "Sí, construimos sobre modelos de terceros (ajuste fino, RAG, agentes, orquestación)"], ["no", "No"]] },
    { id: "provee", texto: "¿Ofrece a clientes externos un producto o servicio que incorpora IA (SaaS, API, app, dispositivo, consultoría con IA)?",
      opciones: [["si", "Sí"], ["no", "No"]] },
    { id: "socio", texto: "¿Integra sistemas de IA de otros para terceros, o suministra datos para entrenar u operar la IA de otros?",
      opciones: [["integra", "Integramos sistemas de IA para clientes"], ["datos", "Suministramos datos"], ["ambos", "Ambas cosas"], ["no", "Ninguna"]] },
    { id: "impacto", texto: "¿Los resultados de esa IA influyen en decisiones relevantes sobre personas (crédito, empleo, salud, educación, seguros, acceso a servicios)?",
      opciones: [["alto", "Sí, influyen en decisiones sobre derechos u oportunidades"], ["bajo", "Solo de forma menor o indirecta"], ["no", "No"]] },
    { id: "autoridad", texto: "¿Tu organización regula, supervisa o fija políticas públicas sobre IA (por ejemplo, un regulador o una dependencia de gobierno)?",
      opciones: [["si", "Sí"], ["no", "No"]] }
  ];

  var ROLES = {
    cliente: { t: "Cliente de IA (incluye usuario de IA)", d: "Adquieres o usas sistemas de IA que otros desarrollan. Tu responsabilidad central es usarlos de forma responsable, dentro de su uso previsto, con supervisión humana donde haga falta y eligiendo bien a tus proveedores.", badge: "usa" },
    productor: { t: "Productor de IA", d: "Diseñas, desarrollas, pruebas o despliegas sistemas de IA. Te pesan el ciclo de vida, los datos, la verificación y validación y la documentación técnica.", badge: "desarrolla" },
    proveedor: { t: "Proveedor de IA", d: "Ofreces productos o servicios con IA a otros. Debes informar a tus clientes y usuarios, repartir responsabilidades con claridad y comunicar incidentes.", badge: "provee" },
    socio: { t: "Socio de IA (integrador o proveedor de datos)", d: "Participas en el ciclo de vida de sistemas de otros, integrándolos o aportando datos. Te pesan los acuerdos de responsabilidad y la calidad y procedencia de lo que entregas.", badge: null },
    sujeto: { t: "Las personas afectadas son sujetos de IA", d: "Tus clientes, solicitantes o empleados son sujetos de IA: personas cuyos datos procesa el sistema o que reciben sus decisiones. No es un rol de tu organización, pero eleva la exigencia de evaluación de impacto, transparencia y supervisión humana.", badge: null },
    autoridad: { t: "Autoridad pertinente", d: "Regulas o supervisas la IA. ISO/IEC 42001 te sirve como referencia para entender qué pedir a los regulados; si además usas IA, también eres cliente o productor.", badge: null }
  };

  var ETIQUETA_BADGE = {
    usa: ["dx-badge--rol-usa", "Usa IA de terceros"],
    desarrolla: ["dx-badge--rol-desarrolla", "Desarrolla IA"],
    provee: ["dx-badge--rol-provee", "Provee IA a clientes"]
  };

  // Controles que, en nuestra lectura, pesan más según el rol
  var PESO = {
    cliente: ["A.9.2", "A.9.3", "A.9.4", "A.10.3", "A.5.2", "A.8.2", "A.6.2.6", "A.2.2"],
    productor: ["A.6.1.2", "A.6.1.3", "A.6.2.4", "A.6.2.6", "A.7.2", "A.7.4", "A.7.5", "A.5.4"],
    proveedor: ["A.10.4", "A.10.2", "A.8.2", "A.8.4", "A.8.5", "A.6.2.7", "A.5.5"],
    socio: ["A.10.2", "A.10.3", "A.7.3", "A.7.5", "A.4.3"],
    sujeto: ["A.5.4", "A.9.3", "A.8.3", "A.6.2.4"],
    autoridad: ["A.8.5", "A.5.5", "A.2.2"]
  };

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k]; else n.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }

  function sitio(ruta) {
    try { return new URL(ruta, window.__md_scope || document.baseURI).href; } catch (e) { return ruta; }
  }

  function calcular(r) {
    var roles = [];
    var usa = r.usa === "si" || r.usa === "nose" || r.desarrolla === "construye";
    if (usa) roles.push("cliente");
    if (r.desarrolla === "propio" || r.desarrolla === "construye") roles.push("productor");
    if (r.provee === "si") roles.push("proveedor");
    if (r.socio && r.socio !== "no") roles.push("socio");
    if (r.impacto === "alto" || r.impacto === "bajo") roles.push("sujeto");
    if (r.autoridad === "si") roles.push("autoridad");
    return roles;
  }

  function iniciar(cont) {
    if (cont.dataset.listo) return;
    cont.dataset.listo = "1";
    var datos = window.DX_DATA || { controles: [], objetivos: [] };
    var porId = {};
    datos.controles.forEach(function (c) { porId[c.id] = c; });
    var resp = {};

    cont.innerHTML = "";
    var form = el("form", { "class": "dx-selector", novalidate: "novalidate" });
    PREGUNTAS.forEach(function (p, i) {
      var fs = el("fieldset", { "class": "dx-selector__pregunta" });
      fs.appendChild(el("legend", {}, [el("span", { "class": "dx-selector__num", text: String(i + 1) }), p.texto]));
      var ops = el("div", { "class": "dx-quiz__opciones" });
      p.opciones.forEach(function (o) {
        var id = "dx-sel-" + p.id + "-" + o[0];
        ops.appendChild(el("label", { "for": id, "class": "dx-quiz__opcion" }, [
          el("input", { type: "radio", name: p.id, id: id, value: o[0] }), el("span", { text: o[1] })
        ]));
      });
      fs.appendChild(ops);
      form.appendChild(fs);
    });
    var res = el("section", { "class": "dx-selector__resultado", "aria-live": "polite" });
    var reiniciar = el("button", { type: "button", "class": "md-button dx-btn-sm", text: "Volver a empezar" });
    cont.appendChild(form);
    cont.appendChild(res);
    cont.appendChild(reiniciar);

    function pintar() {
      res.innerHTML = "";
      var faltan = PREGUNTAS.filter(function (p) { return !resp[p.id]; }).length;
      if (faltan) {
        res.appendChild(el("p", { "class": "dx-quiz__vacio", text: faltan === PREGUNTAS.length
          ? "Responde las seis preguntas para ver tu resultado."
          : "Te faltan " + faltan + " pregunta" + (faltan > 1 ? "s" : "") + " para ver el resultado completo." }));
        if (faltan === PREGUNTAS.length) return;
      }
      var roles = calcular(resp);
      res.appendChild(el("h2", { id: "tu-resultado", text: "Tu resultado" }));
      if (!roles.length || (roles.length === 1 && roles[0] === "autoridad" && resp.usa === "no")) {
        res.appendChild(el("p", { text: resp.autoridad === "si"
          ? "Por tus respuestas, tu relación con ISO/IEC 42001 es como autoridad: la norma te sirve de referencia para supervisar, no necesariamente para certificarte."
          : "Por tus respuestas, hoy tu organización no usa, desarrolla ni provee IA. Aun así, revisa si hay uso informal de IA generativa por parte de tu personal: es el caso más común de “IA en la sombra”." }));
      }
      var badges = {};
      var lista = el("div", { "class": "dx-selector__roles" });
      roles.forEach(function (k) {
        var r = ROLES[k];
        if (r.badge) badges[r.badge] = true;
        lista.appendChild(el("div", { "class": "dx-selector__rol" }, [el("h3", { text: r.t }), el("p", { text: r.d })]));
      });
      res.appendChild(lista);

      var b = Object.keys(badges);
      if (b.length) {
        var p = el("p", { "class": "dx-selector__badges" }, ["En esta guía, busca las insignias: "]);
        b.forEach(function (k) { p.appendChild(el("span", { "class": "dx-badge " + ETIQUETA_BADGE[k][0], text: ETIQUETA_BADGE[k][1] })); });
        res.appendChild(p);
      }

      var ids = [];
      roles.forEach(function (k) { (PESO[k] || []).forEach(function (id) { if (ids.indexOf(id) === -1) ids.push(id); }); });
      if (ids.length) {
        res.appendChild(el("h3", { text: "Controles que más te pesan" }));
        res.appendChild(el("p", { "class": "dx-small", text: "Selección orientativa del autor según tu combinación de roles. No sustituye tu evaluación de riesgos." }));
        var ul = el("ul", { "class": "dx-selector__controles" });
        ids.forEach(function (id) {
          var c = porId[id];
          if (!c) return;
          var o = datos.objetivos.filter(function (x) { return x.id === c.objetivo; })[0];
          ul.appendChild(el("li", { "class": o ? o.clase : "" }, [el("a", { href: sitio(c.url), text: c.id + " " + c.nombre }), el("span", { text: c.resumen })]));
        });
        res.appendChild(ul);
      }

      var acciones = el("div", { "class": "dx-selector__acciones" });
      b.forEach(function (k) {
        acciones.appendChild(el("a", { "class": "md-button dx-btn-sm", href: sitio("anexo-a/?rol=" + k + "#matriz"), text: "Ver todos los controles para «" + ETIQUETA_BADGE[k][1] + "»" }));
      });
      var ruta = roles.indexOf("productor") !== -1 ? "#ruta-datos" : "#ruta-grc";
      acciones.appendChild(el("a", { "class": "md-button dx-btn-sm", href: sitio("empieza-aqui/rutas-de-lectura/" + ruta), text: "Ver una ruta de lectura sugerida" }));
      acciones.appendChild(el("a", { "class": "md-button dx-btn-sm", href: sitio("fundamentos/roles-en-la-ia/"), text: "Entender los roles a fondo" }));
      res.appendChild(acciones);
    }

    form.addEventListener("change", function (ev) {
      if (ev.target && ev.target.type === "radio") { resp[ev.target.name] = ev.target.value; pintar(); }
    });
    reiniciar.addEventListener("click", function () {
      resp = {};
      Array.prototype.forEach.call(form.querySelectorAll("input[type=radio]"), function (i) { i.checked = false; });
      pintar();
      form.querySelector("input").focus();
    });
    pintar();
  }

  function arrancar() {
    var c = document.getElementById("dx-selector-rol");
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

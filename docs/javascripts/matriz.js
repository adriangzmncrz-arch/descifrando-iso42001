/* Matriz filtrable de los 38 controles del Anexo A.
 * Lee window.DX_DATA (generado por scripts/generar_datos.py) y dibuja una tabla con
 * filtros por objetivo, rol, esfuerzo y novedad frente a ISO 27001.
 * Acepta filtros por URL: anexo-a/?obj=A.7&rol=usa&esfuerzo=alto&novedad=nuevo#matriz
 * Licencia: MIT (ver LICENSE-CODE).
 */
(function () {
  "use strict";

  var ROLES = {
    usa: "Usa IA de terceros",
    desarrolla: "Desarrolla IA",
    provee: "Provee IA a clientes"
  };
  var NOVEDAD = { nuevo: "Nuevo", similar: "Similar", equivalente: "Equivalente" };
  var ESFUERZO = { bajo: "Bajo", medio: "Medio", alto: "Alto" };

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else if (k === "html") node.innerHTML = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function sitio(ruta) {
    try { return new URL(ruta, window.__md_scope || document.baseURI).href; }
    catch (e) { return ruta; }
  }

  function select(id, etiqueta, opciones) {
    var s = el("select", { id: id });
    s.appendChild(el("option", { value: "", text: "Todos" }));
    opciones.forEach(function (o) { s.appendChild(el("option", { value: o[0], text: o[1] })); });
    return el("label", { "for": id, "class": "dx-filtro" }, [el("span", { text: etiqueta }), s]);
  }

  function badge(clase, texto) {
    return el("span", { "class": "dx-badge " + clase, text: texto });
  }

  function iniciar(contenedor) {
    var datos = window.DX_DATA;
    if (!datos || contenedor.dataset.listo) return;
    contenedor.dataset.listo = "1";
    var objetivos = {};
    datos.objetivos.forEach(function (o) { objetivos[o.id] = o; });

    var buscar = el("input", { type: "search", id: "dx-m-buscar", placeholder: "Buscar control, tema o número…", "aria-label": "Buscar en los controles" });
    var fObj = select("dx-m-obj", "Objetivo", datos.objetivos.map(function (o) { return [o.id, o.id + " · " + o.corto]; }));
    var fRol = select("dx-m-rol", "Aplica a", Object.keys(ROLES).map(function (k) { return [k, ROLES[k]]; }));
    var fEsf = select("dx-m-esf", "Esfuerzo", Object.keys(ESFUERZO).map(function (k) { return [k, ESFUERZO[k]]; }));
    var fNov = select("dx-m-nov", "Frente a ISO 27001", Object.keys(NOVEDAD).map(function (k) { return [k, NOVEDAD[k]]; }));
    var limpiar = el("button", { type: "button", "class": "md-button dx-btn-sm", text: "Limpiar filtros" });
    var exportar = el("button", { type: "button", "class": "md-button dx-btn-sm", text: "Descargar CSV" });
    var contador = el("p", { "class": "dx-matriz__contador", "aria-live": "polite" });

    var filtros = el("div", { "class": "dx-matriz__filtros", role: "search" }, [
      el("label", { "for": "dx-m-buscar", "class": "dx-filtro dx-filtro--buscar" }, [el("span", { text: "Buscar" }), buscar]),
      fObj, fRol, fEsf, fNov,
      el("div", { "class": "dx-matriz__acciones" }, [limpiar, exportar])
    ]);

    var tbody = el("tbody");
    var tabla = el("table", { "class": "dx-matriz__tabla" }, [
      el("caption", { "class": "dx-sr", text: "Controles del Anexo A de ISO/IEC 42001 filtrados" }),
      el("thead", {}, [el("tr", {}, ["Control", "Objetivo", "Aplica a", "Esfuerzo", "Frente a 27001", "ISO 27001:2022", "En una línea"].map(function (t) {
        return el("th", { scope: "col", text: t });
      }))]),
      tbody
    ]);

    contenedor.innerHTML = "";
    contenedor.appendChild(filtros);
    contenedor.appendChild(contador);
    contenedor.appendChild(el("div", { "class": "dx-matriz__scroll", tabindex: "0", "aria-label": "Tabla de controles (desplazable)" }, [tabla]));

    var sObj = fObj.querySelector("select"), sRol = fRol.querySelector("select"),
        sEsf = fEsf.querySelector("select"), sNov = fNov.querySelector("select");

    // Filtros iniciales desde la URL
    try {
      var q = new URLSearchParams(window.location.search);
      if (q.get("obj")) sObj.value = q.get("obj");
      if (q.get("rol")) sRol.value = q.get("rol");
      if (q.get("esfuerzo")) sEsf.value = q.get("esfuerzo");
      if (q.get("novedad")) sNov.value = q.get("novedad");
      if (q.get("q")) buscar.value = q.get("q");
    } catch (e) { /* URL sin parámetros */ }

    var visibles = [];

    function normal(t) {
      return (t || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    }

    function pintar() {
      var texto = normal(buscar.value.trim());
      visibles = datos.controles.filter(function (c) {
        if (sObj.value && c.objetivo !== sObj.value) return false;
        if (sRol.value && c.roles.indexOf(sRol.value) === -1) return false;
        if (sEsf.value && c.esfuerzo !== sEsf.value) return false;
        if (sNov.value && c.novedad !== sNov.value) return false;
        if (texto) {
          var bolsa = normal([c.id, c.nombre, c.resumen, objetivos[c.objetivo].nombre, c.iso27001.join(" ")].join(" "));
          if (bolsa.indexOf(texto) === -1) return false;
        }
        return true;
      });
      tbody.innerHTML = "";
      visibles.forEach(function (c) {
        var o = objetivos[c.objetivo];
        var roles = el("td", {}, c.roles.map(function (r) { return badge("dx-badge--rol-" + r, ROLES[r]); }));
        tbody.appendChild(el("tr", { "class": o.clase }, [
          el("td", { "class": "dx-matriz__control" }, [el("a", { href: sitio(c.url), text: c.id + " " + c.nombre })]),
          el("td", {}, [badge("dx-badge--obj " + o.clase, o.id + " · " + o.corto)]),
          roles,
          el("td", {}, [badge("dx-badge--esfuerzo-" + c.esfuerzo, ESFUERZO[c.esfuerzo])]),
          el("td", {}, [badge("dx-badge--" + c.novedad, NOVEDAD[c.novedad])]),
          el("td", { text: c.iso27001.length ? c.iso27001.join(", ") : "—" }),
          el("td", { "class": "dx-matriz__resumen", text: c.resumen })
        ]));
      });
      if (!visibles.length) {
        tbody.appendChild(el("tr", {}, [el("td", { colspan: "7", "class": "dx-matriz__vacio", text: "Ningún control coincide con esos filtros." })]));
      }
      contador.textContent = visibles.length === 1
        ? "1 control coincide con los filtros."
        : visibles.length + " de " + datos.controles.length + " controles coinciden con los filtros.";
    }

    function csv() {
      var cab = ["Control", "Nombre (traducción libre)", "Objetivo", "Aplica a", "Esfuerzo", "Frente a ISO 27001", "ISO 27001:2022", "Resumen"];
      var filas = visibles.map(function (c) {
        return [c.id, c.nombre, c.objetivo, c.roles.map(function (r) { return ROLES[r]; }).join(" / "),
          ESFUERZO[c.esfuerzo], NOVEDAD[c.novedad], c.iso27001.join(" "), c.resumen];
      });
      var texto = [cab].concat(filas).map(function (f) {
        return f.map(function (v) { return '"' + String(v).replace(/"/g, '""') + '"'; }).join(",");
      }).join("\r\n");
      var blob = new Blob(["﻿" + texto], { type: "text/csv;charset=utf-8" });
      var a = el("a", { href: URL.createObjectURL(blob), download: "controles-iso42001-filtrados.csv" });
      document.body.appendChild(a);
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 0);
    }

    [sObj, sRol, sEsf, sNov].forEach(function (s) { s.addEventListener("change", pintar); });
    buscar.addEventListener("input", pintar);
    limpiar.addEventListener("click", function () {
      sObj.value = sRol.value = sEsf.value = sNov.value = "";
      buscar.value = "";
      pintar();
      buscar.focus();
    });
    exportar.addEventListener("click", csv);
    pintar();
  }

  function arrancar() {
    var c = document.getElementById("dx-matriz");
    if (c) iniciar(c);
  }

  // Compatible con la carga instantánea de Material (document$) y con carga normal
  if (window.document$ && typeof window.document$.subscribe === "function") {
    window.document$.subscribe(arrancar);
  } else if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", arrancar);
  } else {
    arrancar();
  }
})();

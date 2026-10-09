#!/usr/bin/env python3
"""Genera los archivos derivados de los datos de los 38 controles.

Lee la fuente única de verdad `data/controles.yml` y escribe:
  - docs/javascripts/controles-data.js           datos para la matriz filtrable y el selector de rol
  - docs/assets/infografias/tabla-periodica.svg  tabla periódica de los controles (SVG en línea)
  - includes/tabla-controles.md                  tabla estática de los 38 controles (respaldo sin JavaScript)

Uso:
    python scripts/generar_datos.py
"""
from __future__ import annotations

import json
from pathlib import Path

import yaml

RAIZ = Path(__file__).resolve().parent.parent
ORIGEN = RAIZ / "data" / "controles.yml"
DESTINO = RAIZ / "docs" / "javascripts" / "controles-data.js"
DESTINO_SVG = RAIZ / "docs" / "assets" / "infografias" / "tabla-periodica.svg"
DESTINO_TABLA = RAIZ / "includes" / "tabla-controles.md"

ETIQUETA_ROL = {"usa": "Usa IA de terceros", "desarrolla": "Desarrolla IA", "provee": "Provee IA a clientes"}
ETIQUETA_NOVEDAD = {"nuevo": "Nuevo", "similar": "Similar", "equivalente": "Equivalente"}
SIMBOLO_NOVEDAD = {"nuevo": "★", "similar": "≈", "equivalente": "="}
NIVEL_ESFUERZO = {"bajo": 1, "medio": 2, "alto": 3}

ROLES = {"usa", "desarrolla", "provee"}
ESFUERZOS = {"bajo", "medio", "alto"}
NOVEDADES = {"nuevo", "similar", "equivalente"}


def ancla(control_id: str) -> str:
    """A.6.2.4 -> a-6-2-4 (ancla estable usada en las páginas del Anexo A)."""
    return "a-" + control_id[2:].replace(".", "-")


def cargar() -> dict:
    datos = yaml.safe_load(ORIGEN.read_text(encoding="utf-8"))
    objetivos = {o["id"]: o for o in datos["objetivos"]}
    ids = set()
    for c in datos["controles"]:
        assert c["id"] not in ids, f"Control duplicado: {c['id']}"
        ids.add(c["id"])
        assert c["objetivo"] in objetivos, f"Objetivo desconocido en {c['id']}"
        assert set(c["roles"]) <= ROLES and c["roles"], f"Roles inválidos en {c['id']}"
        assert c["esfuerzo"] in ESFUERZOS, f"Esfuerzo inválido en {c['id']}"
        assert c["novedad"] in NOVEDADES, f"Novedad inválida en {c['id']}"
    assert len(ids) == 38, f"Se esperaban 38 controles y hay {len(ids)}"
    assert len(objetivos) == 9, f"Se esperaban 9 objetivos y hay {len(objetivos)}"
    return datos


def partir(texto: str, ancho: int = 15) -> list[str]:
    """Parte un nombre corto en líneas de hasta `ancho` caracteres sin cortar palabras."""
    lineas, actual = [], ""
    for palabra in texto.split():
        candidata = f"{actual} {palabra}".strip()
        if len(candidata) <= ancho or not actual:
            actual = candidata
        else:
            lineas.append(actual)
            actual = palabra
    lineas.append(actual)
    return lineas


def esc(texto: str) -> str:
    return texto.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def generar_svg(datos: dict) -> str:
    """Tabla periódica: una columna por objetivo y una celda por control, enlazada a su guía."""
    cw, ch, gap, x0, y_celdas = 104, 92, 8, 10, 76
    objetivos = datos["objetivos"]
    ancho = x0 * 2 + len(objetivos) * cw + (len(objetivos) - 1) * gap
    filas_max = max(sum(1 for c in datos["controles"] if c["objetivo"] == o["id"]) for o in objetivos)
    alto = y_celdas + filas_max * (ch + gap) + 4
    out = [
        f'<svg viewBox="0 0 {ancho} {alto}" xmlns="http://www.w3.org/2000/svg" role="img" '
        'aria-labelledby="ig-tabla-t ig-tabla-d">',
        '<title id="ig-tabla-t">Tabla periódica de los 38 controles del Anexo A de ISO/IEC 42001</title>',
        '<desc id="ig-tabla-d">Nueve columnas, una por objetivo de control de A.2 a A.10, con una celda por control. '
        'Cada celda muestra el número del control, su nombre abreviado, un símbolo de novedad frente a ISO 27001 '
        '(estrella: nuevo; aproximado: similar; igual: equivalente) y de uno a tres puntos de esfuerzo de implementación. '
        'Cada celda enlaza a la guía del control.</desc>',
    ]
    for i, o in enumerate(objetivos):
        x = x0 + i * (cw + gap)
        out.append(f'<g class="{o["clase"]}">')
        out.append(f'<rect class="ig-obj" x="{x}" y="10" width="{cw}" height="56" rx="10"/>')
        out.append(f'<text class="ig-on-color ig-bold" x="{x + cw / 2}" y="35" text-anchor="middle" font-size="19">{o["id"]}</text>')
        out.append(f'<text class="ig-on-color" x="{x + cw / 2}" y="55" text-anchor="middle" font-size="12.5" font-weight="600">{esc(o["corto"])}</text>')
        controles = [c for c in datos["controles"] if c["objetivo"] == o["id"]]
        for j, c in enumerate(controles):
            y = y_celdas + j * (ch + gap)
            pagina = o["pagina"].split("/")[-1].removesuffix(".md")
            etiqueta = (
                f'{c["id"]} {c["nombre"]}. Esfuerzo {c["esfuerzo"]}. '
                f'{ETIQUETA_NOVEDAD[c["novedad"]]} frente a ISO 27001.'
            )
            numero = c["id"][2:]
            out.append(f'<a href="{pagina}/#{ancla(c["id"])}" aria-label="{esc(etiqueta)}">')
            out.append(f'<title>{esc(etiqueta)}</title>')
            out.append(f'<rect class="ig-tint ig-s-obj" x="{x}" y="{y}" width="{cw}" height="{ch}" rx="9" stroke-width="1.5"/>')
            out.append(f'<text x="{x + 9}" y="{y + 19}" font-size="13" font-weight="700" opacity=".75">{SIMBOLO_NOVEDAD[c["novedad"]]}</text>')
            for k in range(3):
                cx = x + cw - 31 + k * 10
                clase = "ig-obj" if k < NIVEL_ESFUERZO[c["esfuerzo"]] else "ig-card"
                out.append(f'<circle class="{clase}" cx="{cx}" cy="{y + 14}" r="3.6" stroke-width="1"/>')
            tam = 22 if numero.count(".") == 1 else 19
            out.append(f'<text class="ig-bold" x="{x + cw / 2}" y="{y + 45}" text-anchor="middle" font-size="{tam}">{numero}</text>')
            lineas = partir(c["corto"])
            base = y + 63 if len(lineas) > 1 else y + 70
            tam_nombre = 11.5 if max(len(linea) for linea in lineas) <= 14 else 10.5
            for n, linea in enumerate(lineas[:2]):
                out.append(f'<text x="{x + cw / 2}" y="{base + n * 14}" text-anchor="middle" font-size="{tam_nombre}">{esc(linea)}</text>')
            out.append("</a>")
        out.append("</g>")
    # Leyenda en el espacio libre de las últimas columnas
    lx = x0 + 6 * (cw + gap)
    ly = y_celdas + 4 * (ch + gap) + 18
    leyenda = [
        ("ig-bold", "Cómo leer la tabla", 15),
        ("", "7.4  →  número del control (A.7.4)", 13),
        ("", "★ nuevo · ≈ similar · = equivalente", 13),
        ("ig-muted", "(novedad frente a ISO 27001)", 12),
        ("", "●○○ ●●○ ●●●  esfuerzo bajo · medio · alto", 13),
        ("ig-muted", "Haz clic en una celda para abrir", 12),
        ("ig-muted", "la guía del control.", 12),
    ]
    out.append(f'<rect class="ig-card" x="{lx}" y="{ly - 26}" width="{3 * cw + 2 * gap}" height="{len(leyenda) * 24 + 22}" rx="10"/>')
    for n, (clase, texto, tam) in enumerate(leyenda):
        atributo = f' class="{clase}"' if clase else ""
        out.append(f'<text{atributo} x="{lx + 16}" y="{ly + n * 24}" font-size="{tam}">{esc(texto)}</text>')
    # Cifra destacada en el espacio libre de las primeras columnas
    fx = x0 + (2 * cw + gap) / 2
    fy = y_celdas + 3 * (ch + gap) + 60
    out.append(f'<text class="ig-bold" x="{fx}" y="{fy}" text-anchor="middle" font-size="64">38</text>')
    out.append(f'<text x="{fx}" y="{fy + 28}" text-anchor="middle" font-size="15" font-weight="600">controles</text>')
    out.append(f'<text class="ig-muted" x="{fx}" y="{fy + 50}" text-anchor="middle" font-size="13">en 9 objetivos</text>')
    out.append("</svg>")
    return "\n".join(out) + "\n"


def generar_tabla(datos: dict) -> str:
    """Tabla Markdown estática con los 38 controles (se incluye con snippets)."""
    objetivos = {o["id"]: o for o in datos["objetivos"]}
    filas = [
        "| Control | Objetivo | Aplica a | Esfuerzo | Frente a ISO 27001 | ISO 27001:2022 |",
        "|---|---|---|---|---|---|",
    ]
    for c in datos["controles"]:
        o = objetivos[c["objetivo"]]
        enlace = f'[{c["id"]} {c["nombre"]}]({o["pagina"].split("/")[-1]}#{ancla(c["id"])})'
        roles = " · ".join(ETIQUETA_ROL[r] for r in c["roles"])
        mapeo = ", ".join(c["iso27001"]) if c["iso27001"] else "—"
        filas.append(
            f'| {enlace} | {o["id"]} {o["corto"]} | {roles} | {c["esfuerzo"].capitalize()} '
            f'| {ETIQUETA_NOVEDAD[c["novedad"]]} | {mapeo} |'
        )
    return "\n".join(filas) + "\n"


def main() -> None:
    datos = cargar()
    objetivos = {o["id"]: o for o in datos["objetivos"]}
    salida = {
        "objetivos": [
            {
                "id": o["id"],
                "nombre": o["nombre"],
                "corto": o["corto"],
                "clase": o["clase"],
                # Ruta relativa a la raíz del sitio (URLs de directorio)
                "url": o["pagina"].removesuffix(".md") + "/",
            }
            for o in datos["objetivos"]
        ],
        "controles": [
            {
                "id": c["id"],
                "nombre": c["nombre"],
                "corto": c["corto"],
                "objetivo": c["objetivo"],
                "roles": c["roles"],
                "esfuerzo": c["esfuerzo"],
                "novedad": c["novedad"],
                "iso27001": c["iso27001"],
                "resumen": c["resumen"],
                "url": objetivos[c["objetivo"]]["pagina"].removesuffix(".md") + "/#" + ancla(c["id"]),
            }
            for c in datos["controles"]
        ],
    }
    js = (
        "/* Archivo generado por scripts/generar_datos.py a partir de data/controles.yml.\n"
        "   No lo edites a mano. Nombres de controles: traducción libre del autor. */\n"
        "window.DX_DATA = " + json.dumps(salida, ensure_ascii=False, indent=2) + ";\n"
    )
    DESTINO.write_text(js, encoding="utf-8")
    DESTINO_SVG.write_text(generar_svg(datos), encoding="utf-8")
    DESTINO_TABLA.write_text(generar_tabla(datos), encoding="utf-8")
    for ruta in (DESTINO, DESTINO_SVG, DESTINO_TABLA):
        print(f"OK -> {ruta.relative_to(RAIZ)}")


if __name__ == "__main__":
    main()

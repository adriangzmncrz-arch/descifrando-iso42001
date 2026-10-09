#!/usr/bin/env python3
"""Genera los datos de los controles para las herramientas interactivas del sitio.

Lee la fuente única de verdad `data/controles.yml` y escribe
`docs/javascripts/controles-data.js`, que usan la matriz filtrable,
la tabla periódica y el selector de rol.

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
    print(f"OK: {len(salida['controles'])} controles -> {DESTINO.relative_to(RAIZ)}")


if __name__ == "__main__":
    main()

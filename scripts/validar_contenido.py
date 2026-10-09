#!/usr/bin/env python3
"""Valida la consistencia del contenido de la guía.

Comprueba que:
  1. data/controles.yml tenga 38 controles válidos en 9 objetivos.
  2. Cada página de objetivo del Anexo A tenga una sección por control con su
     ancla estable ({#a-7-4 .dx-control .obj-a7}) y en el orden correcto.
  3. Las insignias de cada control (roles, esfuerzo, novedad) coincidan con
     data/controles.yml.
  4. Las referencias a controles (A.x.y) en las páginas existan en ISO/IEC 42001.
     Las referencias a controles de ISO/IEC 27001 deben llevar "27001" antes en
     la misma línea (por ejemplo, "ISO 27001 A.5.19") o escribirse sin la "A."
     (por ejemplo, "5.19" en una tabla).
  5. No queden páginas marcadas como "En construcción" (solo con --estricto).

Uso:
    python scripts/validar_contenido.py            # errores críticos detienen; avisos se muestran
    python scripts/validar_contenido.py --estricto # los avisos también detienen
"""
from __future__ import annotations

import re
import sys
from pathlib import Path

import yaml

RAIZ = Path(__file__).resolve().parent.parent
DOCS = RAIZ / "docs"

ETIQUETA_ROL = {
    "usa": "dx-badge--rol-usa",
    "desarrolla": "dx-badge--rol-desarrolla",
    "provee": "dx-badge--rol-provee",
}


def ancla(control_id: str) -> str:
    return "a-" + control_id[2:].replace(".", "-")


def main() -> int:
    estricto = "--estricto" in sys.argv
    errores: list[str] = []
    avisos: list[str] = []

    datos = yaml.safe_load((RAIZ / "data" / "controles.yml").read_text(encoding="utf-8"))
    objetivos = {o["id"]: o for o in datos["objetivos"]}
    controles = datos["controles"]
    ids_validos = {c["id"] for c in controles}
    if len(ids_validos) != 38:
        errores.append(f"Se esperaban 38 controles y hay {len(ids_validos)}")
    if len(objetivos) != 9:
        errores.append(f"Se esperaban 9 objetivos y hay {len(objetivos)}")

    # Identificadores de objetivo y subobjetivo que también son referencias válidas
    refs_validas = set(ids_validos) | set(objetivos) | {"A.6.1", "A.6.2", "A.1", "A.1.1"}

    # --- 2 y 3. Secciones de control en cada página de objetivo -------------
    for oid, obj in objetivos.items():
        ruta = DOCS / obj["pagina"]
        if not ruta.exists():
            errores.append(f"Falta la página {obj['pagina']}")
            continue
        texto = ruta.read_text(encoding="utf-8")
        esperados = [c for c in controles if c["objetivo"] == oid]
        posiciones = []
        for c in esperados:
            patron = re.compile(
                r"^## " + re.escape(c["id"]) + r" .+\{#" + ancla(c["id"])
                + r" \.dx-control \." + obj["clase"] + r"\}\s*$",
                re.MULTILINE,
            )
            m = patron.search(texto)
            if not m:
                errores.append(f"{obj['pagina']}: falta el encabezado de {c['id']} con ancla #{ancla(c['id'])}")
                continue
            posiciones.append(m.start())
            # Sección del control: hasta el siguiente h2
            siguiente = re.search(r"^## ", texto[m.end():], re.MULTILINE)
            seccion = texto[m.end(): m.end() + siguiente.start()] if siguiente else texto[m.end():]
            if "dx-control-meta" not in seccion:
                avisos.append(f"{obj['pagina']}: {c['id']} aún no tiene insignias (dx-control-meta)")
                continue
            for rol, clase in ETIQUETA_ROL.items():
                tiene = clase in seccion.split("</div>")[0]
                if (rol in c["roles"]) != tiene:
                    errores.append(f"{obj['pagina']}: {c['id']} insignia de rol '{rol}' no coincide con los datos")
            if f"dx-badge--esfuerzo-{c['esfuerzo']}" not in seccion:
                errores.append(f"{obj['pagina']}: {c['id']} debería tener esfuerzo '{c['esfuerzo']}'")
            if f"dx-badge--{c['novedad']}" not in seccion:
                errores.append(f"{obj['pagina']}: {c['id']} debería tener novedad '{c['novedad']}'")
        if posiciones != sorted(posiciones):
            errores.append(f"{obj['pagina']}: los controles no están en orden")

    # --- 4. Referencias a controles en todas las páginas --------------------
    patron_ref = re.compile(r"(?<![\w.])A\.(\d{1,2})(?:\.(\d{1,2}))?(?:\.(\d{1,2}))?(?![\w])")
    for md in sorted(DOCS.rglob("*.md")):
        rel = md.relative_to(DOCS).as_posix()
        for n, linea in enumerate(md.read_text(encoding="utf-8").splitlines(), 1):
            for m in patron_ref.finditer(linea):
                ref = m.group(0).rstrip(".")
                if ref in refs_validas:
                    continue
                previo = linea[max(0, m.start() - 60): m.start()]
                if "27001" in previo or "27002" in previo:
                    continue
                avisos.append(f"{rel}:{n}: referencia '{ref}' no existe en ISO/IEC 42001 (¿es de ISO 27001? antepón '27001')")

    # --- 5. Páginas pendientes ----------------------------------------------
    for md in sorted(DOCS.rglob("*.md")):
        if "En construcción" in md.read_text(encoding="utf-8"):
            avisos.append(f"{md.relative_to(DOCS).as_posix()}: página marcada como 'En construcción'")

    for a in avisos:
        print(f"AVISO  {a}")
    for e in errores:
        print(f"ERROR  {e}")
    print(f"\n{len(errores)} errores · {len(avisos)} avisos")
    if errores or (estricto and avisos):
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())

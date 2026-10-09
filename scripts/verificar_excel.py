#!/usr/bin/env python3
"""Recalcula las fórmulas de las plantillas Excel y falla si alguna produce un error.

Usa la biblioteca `formulas` (ver requirements-dev.txt) para evaluar cada fórmula sin
necesidad de Excel ni LibreOffice. Si tienes LibreOffice, también puedes abrir los
archivos en modo headless como verificación adicional.

Uso:
    pip install -r requirements-dev.txt
    python scripts/verificar_excel.py            # revisa plantillas/*.xlsx
    python scripts/verificar_excel.py archivo.xlsx
"""
from __future__ import annotations

import sys
from pathlib import Path

import formulas
import numpy as np

RAIZ = Path(__file__).resolve().parent.parent


def revisar(ruta: Path) -> int:
    modelo = formulas.ExcelModel().loads(str(ruta)).finish()
    solucion = modelo.calculate()
    total = errores = 0
    for celda, valor in solucion.items():
        for x in np.asarray(getattr(valor, "value", valor)).ravel():
            total += 1
            if str(x).startswith("#"):
                errores += 1
                print(f"  ERROR {celda}: {x}")
    print(f"{ruta.name}: {total} valores calculados, {errores} errores")
    return errores


def main() -> int:
    rutas = [Path(a) for a in sys.argv[1:]] or sorted((RAIZ / "plantillas").glob("*.xlsx"))
    return 1 if sum(revisar(r) for r in rutas) else 0


if __name__ == "__main__":
    sys.exit(main())

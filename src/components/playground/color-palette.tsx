"use client";

import { useState } from "react";
import { CopyValueButton } from "@/components/playground/copy-value-button";
import { buildPalette, paletteSchemes, type PaletteScheme } from "@/lib/palette";

export function ColorPalette() {
  const [baseColor, setBaseColor] = useState("#63d5df");
  const [scheme, setScheme] = useState<PaletteScheme>("analogous");
  const colors = buildPalette(baseColor, scheme).map((color) => color.toUpperCase());
  const css = `:root {\n${colors.map((color, index) => `  --palette-${index + 1}: ${color};`).join("\n")}\n}`;

  return (
    <div className="demo-body">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="demo-control">
          <label htmlFor="palette-base">Base color</label>
          <div className="flex flex-wrap items-center gap-2">
            <input id="palette-base" type="color" value={baseColor} onInput={(event) => setBaseColor(event.currentTarget.value)} />
            <code aria-hidden="true">{baseColor.toUpperCase()}</code>
          </div>
        </div>
        <div className="demo-control">
          <label htmlFor="palette-scheme">Harmony</label>
          <select id="palette-scheme" className="demo-input" value={scheme} onChange={(event) => setScheme(event.currentTarget.value as PaletteScheme)}>
            {Object.entries(paletteSchemes).map(([id, { label }]) => <option key={id} value={id}>{label}</option>)}
          </select>
        </div>
      </div>
      <ul className="palette-swatches" aria-label="Generated colors">
        {colors.map((color, index) => (
          <li key={index}>
            <span style={{ backgroundColor: color }} aria-hidden="true" />
            <code>{color}<span className="sr-only">{index === 2 ? " (base color)" : ""}</span></code>
          </li>
        ))}
      </ul>
      <pre className="demo-grid-code"><code>{css}</code></pre>
      <CopyValueButton value={css} label="Copy CSS variables" />
    </div>
  );
}

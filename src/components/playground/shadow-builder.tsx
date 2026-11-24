"use client";

import { useState } from "react";
import { CopyValueButton } from "@/components/playground/copy-value-button";

const controls = [
  { key: "horizontal", label: "Horizontal offset", min: -40, max: 40, unit: "px" },
  { key: "vertical", label: "Vertical offset", min: -40, max: 40, unit: "px" },
  { key: "blur", label: "Blur", min: 0, max: 64, unit: "px" },
  { key: "spread", label: "Spread", min: -24, max: 32, unit: "px" },
  { key: "opacity", label: "Opacity", min: 0, max: 100, unit: "%" },
] as const;

export function ShadowBuilder() {
  const [settings, setSettings] = useState({ horizontal: 0, vertical: 14, blur: 28, spread: -4, opacity: 40 });
  const [color, setColor] = useState("#13252a");
  const [inset, setInset] = useState(false);

  const channels = [1, 3, 5].map((index) => parseInt(color.slice(index, index + 2), 16)).join(" ");
  const { horizontal, vertical, blur, spread, opacity } = settings;
  const shadow = `${inset ? "inset " : ""}${horizontal}px ${vertical}px ${blur}px ${spread}px rgb(${channels} / ${opacity}%)`;
  const css = `box-shadow: ${shadow};`;

  return (
    <div className="demo-body">
      <div className="shadow-stage" aria-hidden="true"><span style={{ boxShadow: shadow }} /></div>
      <div className="grid grid-cols-2 gap-3">
        {controls.map(({ key, label, min, max, unit }) => (
          <div key={key} className="demo-control">
            <div className="flex flex-wrap justify-between gap-x-2">
              <label htmlFor={`shadow-${key}`}>{label}</label>
              <span aria-hidden="true">{settings[key]}{unit}</span>
            </div>
            <input
              id={`shadow-${key}`}
              type="range"
              min={min}
              max={max}
              value={settings[key]}
              aria-valuetext={`${settings[key]} ${unit === "px" ? "pixels" : "percent"}`}
              onChange={(event) => setSettings({ ...settings, [key]: event.currentTarget.valueAsNumber })}
            />
          </div>
        ))}
        <div className="demo-control">
          <label htmlFor="shadow-color">Shadow color</label>
          <div className="flex flex-wrap items-center gap-2">
            <input id="shadow-color" type="color" value={color} onInput={(event) => setColor(event.currentTarget.value)} />
            <code aria-hidden="true">{color.toUpperCase()}</code>
          </div>
        </div>
      </div>
      <label className="demo-checkbox"><input type="checkbox" checked={inset} onChange={(event) => setInset(event.currentTarget.checked)} /> Inset shadow</label>
      <pre className="demo-grid-code"><code>{css}</code></pre>
      <CopyValueButton value={css} label="Copy CSS" />
    </div>
  );
}

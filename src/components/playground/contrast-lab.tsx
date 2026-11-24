"use client";

import { CircleCheck, CircleX, RotateCcw } from "lucide-react";
import { useState } from "react";
import { contrastRatio } from "@/lib/contrast";

const initialForeground = "#63d5df";
const initialBackground = "#202629";

export function ContrastLab() {
  const [foreground, setForeground] = useState(initialForeground);
  const [background, setBackground] = useState(initialBackground);
  const ratio = contrastRatio(foreground, background);

  return (
    <div className="demo-body">
      <p className="text-muted">Choose a text color and a background color to check WCAG 2.2 AA contrast.</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="demo-control">
          <label htmlFor="contrast-foreground">Text color</label>
          <span className="flex flex-wrap items-center gap-2.5">
            <input id="contrast-foreground" type="color" value={foreground} onInput={(event) => setForeground(event.currentTarget.value)} />
            <code aria-hidden="true">{foreground.toUpperCase()}</code>
          </span>
        </div>
        <div className="demo-control">
          <label htmlFor="contrast-background">Background color</label>
          <span className="flex flex-wrap items-center gap-2.5">
            <input id="contrast-background" type="color" value={background} onInput={(event) => setBackground(event.currentTarget.value)} />
            <code aria-hidden="true">{background.toUpperCase()}</code>
          </span>
        </div>
      </div>
      <div className="contrast-sample" style={{ color: foreground, backgroundColor: background }} aria-hidden="true">
        <strong>Sample heading</strong>
        <span>Sample paragraph text.</span>
      </div>
      <div className="contrast-result" aria-live="polite" aria-atomic="true">
        <p><strong>{(Math.floor(ratio * 100) / 100).toFixed(2)}:1</strong> contrast ratio</p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2">
          <ContrastRating label="Normal text" passes={ratio >= 4.5} />
          <ContrastRating label="Large text" passes={ratio >= 3} />
        </ul>
      </div>
      <button className="button button-secondary" type="button" onClick={() => {
        setForeground(initialForeground);
        setBackground(initialBackground);
      }}><RotateCcw size={16} aria-hidden="true" /> Reset colors</button>
    </div>
  );
}

function ContrastRating({ label, passes }: { label: string; passes: boolean }) {
  const Icon = passes ? CircleCheck : CircleX;

  return (
    <li className="flex items-center gap-2" data-passes={passes}>
      <Icon size={16} aria-hidden="true" /> {label} {passes ? "passes" : "fails"}
    </li>
  );
}

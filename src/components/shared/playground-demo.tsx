"use client";

import { CircleCheck, CircleX, Play, RotateCcw, X } from "lucide-react";
import { useRef, useState } from "react";
import type { PlaygroundEntry } from "@/data/playground";
import { contrastRatio } from "@/lib/contrast";

const demos = {
  contrast: ContrastDemo,
  layout: GridDemo,
};

export function PlaygroundDemo({ id, title }: Pick<PlaygroundEntry, "id" | "title">) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = `demo-${id}-title`;
  const Demo = demos[id];

  return (
    <>
      <button className="button button-demo" aria-haspopup="dialog" type="button" onClick={() => dialog.current?.showModal()}>
        <Play size={16} aria-hidden="true" /> Try demo<span className="sr-only"> for {title}</span>
      </button>
      <dialog ref={dialog} className="demo-dialog" aria-labelledby={titleId}>
        <div className="demo-header">
          <h2 id={titleId}>{title}</h2>
          <form method="dialog">
            <button type="submit" className="icon-button" aria-label="Close demo"><X size={20} aria-hidden="true" /></button>
          </form>
        </div>
        <Demo />
      </dialog>
    </>
  );
}

const initialForeground = "#63d5df";
const initialBackground = "#202629";

function ContrastDemo() {
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

function GridDemo() {
  const [columns, setColumns] = useState(3);
  const [gap, setGap] = useState(12);
  const gridColumns = `repeat(${columns}, minmax(0, 1fr))`;

  return (
    <div className="demo-body">
      <p className="text-muted">Adjust the columns and gap to see how the grid reflows.</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="demo-control">
          <div className="flex justify-between gap-2"><label htmlFor="grid-columns">Columns</label><span aria-hidden="true">{columns}</span></div>
          <input id="grid-columns" type="range" min={1} max={4} value={columns} onChange={(event) => setColumns(event.target.valueAsNumber)} />
        </div>
        <div className="demo-control">
          <div className="flex justify-between gap-2"><label htmlFor="grid-gap">Gap</label><span aria-hidden="true">{gap}px</span></div>
          <input id="grid-gap" type="range" min={0} max={24} step={2} value={gap} aria-valuetext={`${gap} pixels`} onChange={(event) => setGap(event.target.valueAsNumber)} />
        </div>
      </div>
      <div className="demo-grid" style={{ gridTemplateColumns: gridColumns, gap }} aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => <span key={index}>{index + 1}</span>)}
      </div>
      <pre className="demo-grid-code"><code>{`grid-template-columns: ${gridColumns};\ngap: ${gap}px;`}</code></pre>
      <button className="button button-secondary" type="button" onClick={() => {
        setColumns(3);
        setGap(12);
      }}><RotateCcw size={16} aria-hidden="true" /> Reset layout</button>
    </div>
  );
}

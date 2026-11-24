"use client";

import { RotateCcw } from "lucide-react";
import { useState } from "react";

export function GridPlayground() {
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

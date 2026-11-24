"use client";

import { CodeXml, Eye, FileCode2 } from "lucide-react";
import { Fragment, useState } from "react";
import { frontendFocus, profile } from "@/data/portfolio";

const codeLines = [
  <><span className="syntax-keyword">const</span> portfolio = {"{"}</>,
  <>  <span className="syntax-property">name</span>: <span className="syntax-string">&quot;{profile.name}&quot;</span>,</>,
  <>  <span className="syntax-property">role</span>: <span className="syntax-string">&quot;{profile.title}&quot;</span>,</>,
  <>  <span className="syntax-property">focus</span>: [</>,
  ...frontendFocus.map((focus) => <>    <span className="syntax-string">&quot;{focus}&quot;</span>,</>),
  <>  ],</>,
  <>{"}"} <span className="syntax-keyword">as const</span>;</>,
];

export function CodePreview() {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="editor-stage">
      <span className="stage-corner stage-corner-start" aria-hidden="true" />
      <span className="stage-corner stage-corner-end" aria-hidden="true" />
      <div className="editor-window" role="group" aria-label="Interactive portfolio preview">
        <div className="editor-titlebar">
          <div className="window-controls" aria-hidden="true"><span /><span /><span /></div>
          <span className="editor-filename"><FileCode2 size={15} aria-hidden="true" /> portfolio.ts</span>
        </div>
        <div className="editor-toolbar" role="group" aria-label="View portfolio as">
          <button type="button" aria-pressed={!showPreview} aria-controls="editor-content" onClick={() => setShowPreview(false)}>
            <CodeXml size={16} aria-hidden="true" /> Code
          </button>
          <button type="button" aria-pressed={showPreview} aria-controls="editor-content" onClick={() => setShowPreview(true)}>
            <Eye size={16} aria-hidden="true" /> Preview
          </button>
        </div>
        <div id="editor-content" className="editor-content">
          {showPreview ? (
            <div className="editor-profile">
              <p className="editor-profile-name">{profile.name}</p>
              <p>{profile.title}</p>
              <ul className="mt-4 flex flex-wrap justify-center gap-2">
                {frontendFocus.map((focus) => <li key={focus}>{focus}</li>)}
              </ul>
            </div>
          ) : (
            <pre className="editor-code"><code>{codeLines.map((line, index) => (
              <Fragment key={index}><span className="line-number" aria-hidden="true">{index + 1}</span>{line}{"\n"}</Fragment>
            ))}</code></pre>
          )}
        </div>
        <div className="editor-status">
          <span>TypeScript</span>
          {showPreview ? <span>Rendered output</span> : <span>Read-only</span>}
        </div>
      </div>
    </div>
  );
}

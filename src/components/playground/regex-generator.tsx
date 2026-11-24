"use client";

import { useState } from "react";
import { CopyValueButton } from "@/components/playground/copy-value-button";

const templates = {
  email: { label: "Email addresses", pattern: String.raw`\b[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}\b` },
  date: { label: "Date format (YYYY-MM-DD)", pattern: String.raw`\b\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])\b` },
  numbers: { label: "Unsigned numbers", pattern: String.raw`\b\d+(?:\.\d+)?\b` },
  contains: { label: "Contains literal text", prefix: "", suffix: "" },
  starts: { label: "Starts with literal text", prefix: "^", suffix: "" },
  ends: { label: "Ends with literal text", prefix: "", suffix: "$" },
  exact: { label: "Exact literal text", prefix: "^", suffix: "$" },
} as const;

type Template = keyof typeof templates;
const matchPreviewLimit = 30;

export function RegexGenerator() {
  const [templateId, setTemplateId] = useState<Template>("email");
  const [literal, setLiteral] = useState("");
  const [sample, setSample] = useState("Contact hello@example.com or team@example.org. Due 2026-12-15. Reference 482.");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [multiline, setMultiline] = useState(false);
  const template = templates[templateId];
  const isLiteral = "prefix" in template;
  const escapedLiteral = literal.replace(/[\\^$.*+?()[\]{}|/]/g, "\\$&");
  const pattern = isLiteral ? `${template.prefix}${escapedLiteral}${template.suffix}` : template.pattern;
  const flags = `g${caseSensitive ? "" : "i"}${multiline ? "m" : ""}`;
  const expression = isLiteral && !literal ? null : `/${pattern}/${flags}`;
  const matches = expression ? Array.from(sample.matchAll(new RegExp(pattern, flags))) : [];

  return (
    <div className="demo-body">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="demo-field">
          <label htmlFor="regex-template">Pattern template</label>
          <select id="regex-template" className="demo-input" value={templateId} onChange={(event) => setTemplateId(event.currentTarget.value as Template)}>
            {Object.entries(templates).map(([id, { label }]) => <option key={id} value={id}>{label}</option>)}
          </select>
        </div>
        {isLiteral && (
          <div className="demo-field">
            <label htmlFor="regex-literal">Literal text</label>
            <input id="regex-literal" className="demo-input" value={literal} maxLength={120} onChange={(event) => setLiteral(event.currentTarget.value)} />
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        <label className="demo-checkbox"><input type="checkbox" checked={caseSensitive} onChange={(event) => setCaseSensitive(event.currentTarget.checked)} /> Case sensitive</label>
        <label className="demo-checkbox"><input type="checkbox" checked={multiline} onChange={(event) => setMultiline(event.currentTarget.checked)} /> Multiline anchors</label>
      </div>
      <pre className="demo-grid-code"><code>{expression ?? "Enter literal text to generate a pattern."}</code></pre>
      <CopyValueButton value={expression} label="Copy regex" />
      <div className="demo-field">
        <label htmlFor="regex-sample">Test text</label>
        <textarea id="regex-sample" className="demo-input" rows={4} value={sample} maxLength={4000} onChange={(event) => setSample(event.currentTarget.value)} />
      </div>
      <div className="grid gap-2">
        <p className="text-sm text-muted" role="status">{matches.length === 1 ? "1 match" : `${matches.length} matches`}</p>
        {matches.length > 0 && (
          <ol className="regex-matches" aria-label="Matches">
            {matches.slice(0, matchPreviewLimit).map((match) => <li key={match.index}><code>{match[0]}</code></li>)}
          </ol>
        )}
        {matches.length > matchPreviewLimit && <p className="text-sm text-muted">Showing the first {matchPreviewLimit} matches.</p>}
      </div>
    </div>
  );
}

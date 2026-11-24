"use client";

import { useState } from "react";
import { CopyValueButton } from "@/components/playground/copy-value-button";
import { formatJsonSource } from "@/lib/json-format";

type JsonValue = null | boolean | number | string | JsonContainer;
type JsonContainer = JsonValue[] | { [key: string]: JsonValue };

const sample = `{
  "project": "Playground",
  "interactive": true,
  "tools": ["Shadow Builder", "Color Palette"],
  "settings": { "theme": "system", "version": 1 }
}`;
const inputLimit = 30000;
const branchPageSize = 50;

function parseJson(source: string): { value: JsonValue } | { error: string } {
  if (source.length > inputLimit) return { error: "Enter up to 30,000 characters." };

  try {
    return { value: JSON.parse(source) as JsonValue };
  } catch (error) {
    return { error: error instanceof SyntaxError ? error.message : "Unable to read this JSON." };
  }
}

export function JsonExplorer() {
  const [source, setSource] = useState(sample);
  const [formatError, setFormatError] = useState("");
  const parsed = source.trim() ? parseJson(source) : null;
  const hasValue = parsed !== null && "value" in parsed;
  const parseError = parsed && "error" in parsed ? parsed.error : null;

  function formatJson() {
    if (!hasValue) return;

    const formatted = formatJsonSource(source, inputLimit);
    if (formatted === null) {
      setFormatError("The formatted JSON would exceed the 30,000-character limit.");
      return;
    }

    setSource(formatted);
    setFormatError("");
  }

  return (
    <div className="demo-body">
      <div className="demo-field">
        <label htmlFor="json-source">JSON input</label>
        <textarea
          id="json-source"
          className="demo-input json-input font-mono"
          rows={7}
          spellCheck={false}
          aria-invalid={Boolean(parseError)}
          aria-describedby="json-status"
          value={source}
          onChange={(event) => {
            setSource(event.currentTarget.value);
            setFormatError("");
          }}
        />
      </div>
      <div className="flex flex-wrap items-start gap-2">
        <button type="button" className="button button-secondary demo-action" disabled={!hasValue} onClick={formatJson}>Format JSON</button>
        <CopyValueButton value={hasValue ? source : null} label="Copy JSON" />
      </div>
      <p id="json-status" role="status" className={parseError || formatError ? "json-error text-sm" : "text-sm text-muted"}>
        {parseError ?? (formatError || (hasValue ? "Valid JSON" : "Paste JSON to explore it."))}
      </p>
      {hasValue && (
        <div className="json-tree" role="group" aria-label="JSON tree">
          <JsonNode label="Root" value={parsed.value} initiallyOpen />
        </div>
      )}
    </div>
  );
}

function JsonNode({ label, value, initiallyOpen = false }: { label: string; value: JsonValue; initiallyOpen?: boolean }) {
  if (value !== null && typeof value === "object") {
    return <JsonBranch label={label} value={value} initiallyOpen={initiallyOpen} />;
  }

  return (
    <div className="json-leaf">
      <span className="font-semibold">{label}</span>{": "}
      <span className="json-value">{typeof value === "number" ? String(value) : JSON.stringify(value)}</span>
    </div>
  );
}

function JsonBranch({ label, value, initiallyOpen }: { label: string; value: JsonContainer; initiallyOpen: boolean }) {
  const [isExpanded, setIsExpanded] = useState(initiallyOpen);
  const [visibleCount, setVisibleCount] = useState(branchPageSize);
  const isArray = Array.isArray(value);
  const keys = isArray ? [] : Object.keys(value);
  const count = isArray ? value.length : keys.length;
  const entries = isArray
    ? value.slice(0, visibleCount).map((child, index) => ({ key: `[${index}]`, child }))
    : keys.slice(0, visibleCount).map((key) => ({ key: JSON.stringify(key), child: value[key] }));

  return (
    <details open={isExpanded} onToggle={(event) => setIsExpanded(event.currentTarget.open)}>
      <summary>
        <span className="font-semibold">{label}</span>{" "}
        <span className="text-muted">{isArray ? `Array (${count})` : `Object (${count})`}</span>
      </summary>
      {isExpanded && entries.length > 0 && (
        <ul className="json-children">
          {entries.map(({ key, child }) => <li key={key}><JsonNode label={key} value={child} /></li>)}
          {count > visibleCount && (
            <li><button type="button" className="json-more" onClick={() => setVisibleCount(visibleCount + branchPageSize)}>
              Show {Math.min(count - visibleCount, branchPageSize)} more
            </button></li>
          )}
        </ul>
      )}
    </details>
  );
}

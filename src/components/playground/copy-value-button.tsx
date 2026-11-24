"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyValueButton({ value, label }: { value: string | null; label: string }) {
  const [feedback, setFeedback] = useState<{ value: string; success: boolean } | null>(null);
  const currentFeedback = feedback?.value === value ? feedback : null;
  const copied = currentFeedback?.success;

  async function copy() {
    if (value === null) return;

    try {
      await navigator.clipboard.writeText(value);
      setFeedback({ value, success: true });
    } catch {
      setFeedback({ value, success: false });
    }
  }

  return (
    <div className="grid justify-items-start gap-1">
      <button className="button button-secondary demo-action" type="button" disabled={value === null} onClick={copy}>
        {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        {copied ? "Copied" : label}
      </button>
      <span className={currentFeedback?.success === false ? "text-sm text-muted" : "sr-only"} role="status">
        {currentFeedback && (copied ? "Copied to clipboard." : "Clipboard is unavailable. Select the text to copy it manually.")}
      </span>
    </div>
  );
}

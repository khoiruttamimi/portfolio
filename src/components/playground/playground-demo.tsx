'use client';

import { Play, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { ColorPalette } from '@/components/playground/color-palette';
import { ContrastLab } from '@/components/playground/contrast-lab';
import { GridPlayground } from '@/components/playground/grid-playground';
import { JsonExplorer } from '@/components/playground/json-explorer';
import { RegexGenerator } from '@/components/playground/regex-generator';
import { ShadowBuilder } from '@/components/playground/shadow-builder';
import type { PlaygroundEntry } from '@/data/playground';

const demos = {
  contrast: ContrastLab,
  layout: GridPlayground,
  shadow: ShadowBuilder,
  palette: ColorPalette,
  regex: RegexGenerator,
  json: JsonExplorer,
};

export function PlaygroundDemo({ id, title }: Pick<PlaygroundEntry, 'id' | 'title'>) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [hasOpened, setHasOpened] = useState(false);
  const titleId = `demo-${id}-title`;
  const Demo = demos[id];

  return (
    <>
      <button
        className="button button-demo"
        aria-haspopup="dialog"
        type="button"
        onClick={() => {
          setHasOpened(true);
          dialog.current?.showModal();
        }}
      >
        <Play size={16} aria-hidden="true" /> Try<span className="sr-only"> for {title}</span>
      </button>
      <dialog ref={dialog} className="demo-dialog" aria-labelledby={titleId}>
        <div className="demo-header">
          <h2 id={titleId}>{title}</h2>
          <form method="dialog">
            <button type="submit" className="icon-button" aria-label="Close demo">
              <X size={20} aria-hidden="true" />
            </button>
          </form>
        </div>
        {hasOpened && <Demo />}
      </dialog>
    </>
  );
}

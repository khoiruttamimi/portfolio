import { Braces, Contrast, Layers, LayoutGrid, Palette, Regex } from 'lucide-react';
import { PlaygroundDemo } from '@/components/playground/playground-demo';
import { playgroundEntries } from '@/data/playground';

const artwork = {
  contrast: {
    icon: Contrast,
    className: 'contrast-art',
    preview: (
      <div className="art-swatches">
        <span className="art-swatch art-swatch-cyan">Aa</span>
        <span className="art-swatch art-swatch-ink">Aa</span>
      </div>
    ),
  },
  layout: {
    icon: LayoutGrid,
    className: 'layout-art',
    preview: (
      <div className="art-grid">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    ),
  },
  shadow: {
    icon: Layers,
    className: 'shadow-art',
    preview: (
      <div className="art-shadow">
        <span />
      </div>
    ),
  },
  palette: {
    icon: Palette,
    className: 'palette-art',
    preview: (
      <div className="art-palette">
        {['#45ac9f', '#53ced0', '#63d5df', '#77b9e4', '#9ba9e8'].map(color => (
          <span key={color} style={{ backgroundColor: color }} />
        ))}
      </div>
    ),
  },
  regex: {
    icon: Regex,
    className: 'regex-art',
    preview: (
      <div className="art-code-sample">
        <code>{String.raw`/\b\d{4}-\d{2}-\d{2}\b/g`}</code>
      </div>
    ),
  },
  json: {
    icon: Braces,
    className: 'json-art',
    preview: (
      <div className="art-code-sample">
        <pre>{'{\n  "interactive": true\n}'}</pre>
      </div>
    ),
  },
};

export function Playground() {
  return (
    <section id="playground" className="section-band" aria-labelledby="playground-title" tabIndex={-1}>
      <div className="site-container">
        <div className="section-heading">
          <h2 id="playground-title">Playground</h2>
          <p>A space for frontend experiments, interactive demos, and mini-games.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {playgroundEntries.map(({ id, title, description }) => {
            const { icon: Icon, className, preview } = artwork[id];

            return (
              <article className="project-card" key={id} aria-labelledby={`playground-${id}`}>
                <div className={`project-art ${className}`} aria-hidden="true">
                  <div className="art-window">
                    <div className="art-toolbar">
                      <Icon size={14} /> {title}
                    </div>
                    {preview}
                  </div>
                </div>
                <div className="project-body">
                  <h3 id={`playground-${id}`}>{title}</h3>
                  <p>{description}</p>
                  <PlaygroundDemo id={id} title={title} />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

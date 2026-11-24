import { Contrast, LayoutGrid } from "lucide-react";
import { PlaygroundDemo } from "@/components/shared/playground-demo";
import { playgroundEntries } from "@/data/playground";

const artwork = {
  contrast: {
    icon: Contrast,
    className: "contrast-art",
    preview: (
      <div className="art-swatches">
        <span className="art-swatch art-swatch-cyan">Aa</span>
        <span className="art-swatch art-swatch-ink">Aa</span>
      </div>
    ),
  },
  layout: {
    icon: LayoutGrid,
    className: "layout-art",
    preview: <div className="art-grid"><span /><span /><span /><span /><span /></div>,
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
        <div className="grid gap-6 md:grid-cols-2">
          {playgroundEntries.map(({ id, title, description, technologies }) => {
            const { icon: Icon, className, preview } = artwork[id];

            return (
              <article className="project-card" key={id} aria-labelledby={`playground-${id}`}>
                <div className={`project-art ${className}`} aria-hidden="true">
                  <div className="art-window">
                    <div className="art-toolbar"><Icon size={14} /> {title}</div>
                    {preview}
                  </div>
                </div>
                <div className="project-body">
                  <h3 id={`playground-${id}`}>{title}</h3>
                  <p>{description}</p>
                  <ul aria-label="Technologies" className="mb-6 flex flex-wrap gap-2">
                    {technologies.map((item) => <li key={item} className="tag">{item}</li>)}
                  </ul>
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

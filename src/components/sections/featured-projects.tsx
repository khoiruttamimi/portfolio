import {
  Barcode,
  CalendarDays,
  CodeXml,
  Component,
  PanelsTopLeft,
  ReceiptText,
  Smartphone,
  TextCursorInput,
} from 'lucide-react';
import { ProjectCard } from '@/components/shared/project-card';
import { projects } from '@/data/portfolio';

const projectArtwork = {
  'my-kasir': {
    icon: ReceiptText,
    className: 'featured-pos-art',
    illustration: (
      <div className="featured-art-body art-flow">
        <span className="art-symbol">
          <Barcode size={30} strokeWidth={1.6} />
        </span>
        <span className="art-connector" />
        <span className="art-symbol art-symbol-emphasis">
          <ReceiptText size={28} strokeWidth={1.6} />
        </span>
      </div>
    ),
  },
  funds: {
    icon: Component,
    className: 'featured-components-art',
    illustration: (
      <div className="featured-art-body art-component-tiles">
        <span className="art-symbol">
          <Component size={23} />
        </span>
        <span className="art-symbol art-symbol-emphasis">
          <CalendarDays size={23} />
        </span>
        <span className="art-symbol">
          <TextCursorInput size={23} />
        </span>
      </div>
    ),
  },
  mis: {
    icon: PanelsTopLeft,
    className: 'featured-analytics-art',
    illustration: (
      <div className="featured-art-body art-report">
        <div className="art-bars">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="art-data-rows">
          <span />
          <span />
          <span />
        </div>
      </div>
    ),
  },
  'mobile-webview': {
    icon: Smartphone,
    className: 'featured-mobile-art',
    illustration: (
      <div className="featured-art-body art-flow">
        <span className="art-symbol">
          <CodeXml size={29} strokeWidth={1.7} />
        </span>
        <span className="art-connector" />
        <div className="art-phone">
          <span />
          <span />
          <span />
        </div>
      </div>
    ),
  },
};

export function FeaturedProjects() {
  return (
    <section id="projects" className="section-band" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="site-container">
        <div className="section-heading">
          <h2 id="projects-title">Featured projects</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map(project => {
            const { icon: Icon, className, illustration } = projectArtwork[project.id];

            return (
              <ProjectCard
                key={project.id}
                project={project}
                preview={
                  <div className={`project-art featured-art ${className}`} aria-hidden="true">
                    <div className="art-window">
                      <div className="art-toolbar">
                        <Icon className="shrink-0" size={14} />
                        <span>Project</span>
                      </div>
                      {illustration}
                    </div>
                  </div>
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

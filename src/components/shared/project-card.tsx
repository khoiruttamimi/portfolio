import { GitFork, Globe } from 'lucide-react';
import type { ReactNode } from 'react';
import type { FeaturedProject } from '@/data/portfolio';

export function ProjectCard({ project, preview }: { project: FeaturedProject; preview: ReactNode }) {
  const { id, title, type, company, description, technologies, highlights, repository, liveApp } = project;
  const titleId = `project-${id}`;

  return (
    <article className="project-card" aria-labelledby={titleId}>
      {preview}
      <div className="project-body">
        <div className="eyebrow mb-1.5 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>{type}</span>
          {company && <><span aria-hidden="true">·</span><span className="text-muted">{company}</span></>}
        </div>
        <h3 id={titleId}>{title}</h3>
        <p className="flex-none">{description}</p>
        <ul aria-label="Tech stack" className="flex flex-wrap gap-2">
          {technologies.map((technology) => <li key={technology} className="tag">{technology}</li>)}
        </ul>
        <div className="mt-5 grid gap-2.5 border-t border-[var(--border)] pt-4">
          <h4 id={`${titleId}-highlights`} className="text-sm font-semibold">Highlights</h4>
          <ul aria-labelledby={`${titleId}-highlights`} className="grid list-disc gap-x-6 gap-y-1.5 ps-4 text-sm leading-relaxed text-muted marker:text-accent lg:grid-cols-2">
            {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
        </div>
        {(repository || liveApp) && (
          <div className="mt-5 flex flex-wrap gap-2.5">
            {repository && (
              <a className="button button-secondary" href={repository}>
                <GitFork size={16} aria-hidden="true" /> View on GitHub<span className="sr-only"> for {title}</span>
              </a>
            )}
            {liveApp && (
              <a className="button button-secondary" href={liveApp.url}>
                <Globe size={16} aria-hidden="true" /> {liveApp.label}<span className="sr-only"> for {title}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

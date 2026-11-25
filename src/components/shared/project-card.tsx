import { GitFork, Globe } from 'lucide-react';
import type { ProjectSummary } from '@/data/portfolio';

export function ProjectCard({ project }: { project: ProjectSummary }) {
  const { id, title, category, role, description, technologies, repository, liveApp } = project;
  const titleId = `project-${id}`;

  return (
    <article className="project-card featured-project-card" aria-labelledby={titleId} tabIndex={-1}>
      <div className="project-body featured-project-body">
        <div className="eyebrow mb-2">
          {category}
          {role && <span className="text-muted"> · {role}</span>}
        </div>
        <h3 id={titleId}>{title}</h3>
        {description && <p className="text-sm">{description}</p>}
        <ul aria-label="Tech stack" role="list" className="flex flex-wrap gap-1.5">
          {technologies.map((technology) => <li key={technology} className="tag">{technology}</li>)}
        </ul>
        {(repository || liveApp) && (
          <div className="mt-3 flex flex-wrap gap-2">
            {repository && (
              <a className="button button-secondary min-h-9 gap-1.5 px-3 text-sm" href={repository}>
                <GitFork size={16} className="shrink-0" aria-hidden="true" />
                GitHub Repo<span className="sr-only"> for {title}</span>
              </a>
            )}
            {liveApp && (
              <a className="button button-secondary min-h-9 gap-1.5 px-3 text-sm" href={liveApp.url}>
                <Globe size={16} className="shrink-0" aria-hidden="true" />
                {liveApp.label}<span className="sr-only"> for {title}</span>
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

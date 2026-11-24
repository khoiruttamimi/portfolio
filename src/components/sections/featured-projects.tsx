import { GitFork, ReceiptText } from "lucide-react";
import { projects } from "@/data/portfolio";

export function FeaturedProjects() {
  return (
    <section id="projects" className="section-band" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="site-container">
        <div className="section-heading">
          <h2 id="projects-title">Featured projects</h2>
        </div>
        <div className="grid gap-6">
          {projects.map(({ id, title, description, technologies, repository }) => (
            <article className="project-card md:grid md:grid-cols-[1fr_1.75fr]" key={id} aria-labelledby={`project-${id}`}>
              <div className="project-art pos-art md:border-e md:border-b-0" aria-hidden="true">
                <span className="art-receipt"><ReceiptText size={51} strokeWidth={1.5} /></span>
              </div>
              <div className="project-body">
                <h3 id={`project-${id}`}>{title}</h3>
                <p>{description}</p>
                <ul aria-label="Technologies" className="mb-6 flex flex-wrap gap-2">
                  {technologies.map((item) => <li key={item} className="tag">{item}</li>)}
                </ul>
                <a className="button button-secondary" href={repository}>
                  <GitFork size={16} aria-hidden="true" /> View on GitHub<span className="sr-only"> for {title}</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

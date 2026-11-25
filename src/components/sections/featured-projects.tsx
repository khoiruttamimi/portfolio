import { FeaturedProjectsGrid } from '@/components/sections/featured-projects-grid';
import { projectCategories, projects } from '@/data/portfolio';

const projectSummaries = projects.map(({ id, title, category, role, description, technologies, repository, liveApp }) => ({
  id,
  title,
  category,
  role,
  description,
  technologies,
  repository,
  liveApp,
}));

export function FeaturedProjects() {
  return (
    <section id="projects" className="section-band" aria-labelledby="projects-title" tabIndex={-1}>
      <div className="site-container">
        <div className="section-heading">
          <h2 id="projects-title">Featured projects</h2>
        </div>
        <FeaturedProjectsGrid projects={projectSummaries} categories={projectCategories} />
      </div>
    </section>
  );
}

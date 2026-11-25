'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { ProjectCard } from '@/components/shared/project-card';
import type { ProjectSummary } from '@/data/portfolio';

type ProjectFilter = 'All' | ProjectSummary['category'];

const initialProjectCount = 6;
const gridId = 'featured-projects-grid';

export function FeaturedProjectsGrid({ projects, categories }: {
  projects: readonly ProjectSummary[];
  categories: readonly ProjectSummary['category'][];
}) {
  const [filter, setFilter] = useState<ProjectFilter>('All');
  const [showAll, setShowAll] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const listToggleRef = useRef<HTMLButtonElement>(null);
  const focusAfterToggle = useRef(false);
  const matching = filter === 'All' ? projects : projects.filter((project) => project.category === filter);
  const visible = showAll ? matching : matching.slice(0, initialProjectCount);
  const canToggleList = matching.length > initialProjectCount;

  useLayoutEffect(() => {
    if (!focusAfterToggle.current) return;

    focusAfterToggle.current = false;
    const target = showAll
      ? gridRef.current?.querySelectorAll<HTMLElement>(':scope > article')[initialProjectCount]
      : listToggleRef.current;
    target?.focus({ preventScroll: true });
    target?.scrollIntoView({ block: 'nearest' });
  }, [showAll]);

  return (
    <>
      <div className="project-filters mb-6 flex gap-2" role="group" aria-label="Filter projects">
        {(['All', ...categories] as const).map((category) => (
          <button
            key={category}
            className="button button-secondary project-filter"
            type="button"
            aria-pressed={filter === category}
            aria-controls={gridId}
            onClick={() => {
              if (filter === category) return;
              setFilter(category);
              setShowAll(false);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="sr-only" role="status">
        Showing {visible.length} of {matching.length} {matching.length === 1 ? 'project' : 'projects'}.
      </p>

      <div id={gridId} className="featured-projects-grid" ref={gridRef}>
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {canToggleList && (
        <div className="mt-6 flex justify-center">
          <button
            ref={listToggleRef}
            className="button button-secondary"
            type="button"
            aria-expanded={showAll}
            aria-controls={gridId}
            onClick={() => {
              focusAfterToggle.current = true;
              setShowAll((expanded) => !expanded);
            }}
          >
            {showAll ? 'Show Less' : 'See All Projects'}
          </button>
        </div>
      )}
    </>
  );
}

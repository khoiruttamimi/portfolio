import { BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/portfolio";

export function WorkExperience() {
  return (
    <section id="experience" className="section-band" aria-labelledby="experience-title" tabIndex={-1}>
      <div className="site-container">
        <div className="section-heading">
          <h2 id="experience-title">Work experience</h2>
        </div>
        <ol className="grid gap-4">
          {experience.map(({ title, organization, period, highlights }) => (
            <li key={`${organization}-${title}-${period}`} className="experience-entry items-start">
              <span className="section-icon"><BriefcaseBusiness size={20} aria-hidden="true" /></span>
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted">{organization} · {period}</p>
                <ul className="mt-3 list-disc space-y-1 ps-4 text-muted">
                  {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

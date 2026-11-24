import { techStack } from "@/data/portfolio";

export function TechStack() {
  return (
    <section id="stack" className="section-band" aria-labelledby="stack-title" tabIndex={-1}>
      <div className="site-container">
        <div className="section-heading">
          <h2 id="stack-title">Tech stack</h2>
          <p>Tools I use to build and maintain web applications.</p>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map(({ name, role, mark }) => (
            <li key={name} className="stack-item">
              <span className="section-icon font-mono text-sm font-semibold" aria-hidden="true">{mark}</span>
              <div>
                <span className="block font-semibold">{name}</span>
                <span className="text-sm text-muted">{role}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

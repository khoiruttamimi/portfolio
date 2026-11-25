import Image from "next/image";
import { techStack } from "@/data/portfolio";

export function TechStack() {
  return (
    <section id="stack" className="section-band" aria-labelledby="stack-title" tabIndex={-1}>
      <div className="site-container">
        <div className="section-heading">
          <h2 id="stack-title">Tech stack</h2>
          <p>Tools I use to build and maintain web applications.</p>
        </div>
        <div className="grid gap-x-8 gap-y-7 lg:grid-cols-2">
          {techStack.map(({ id, title, items }) => (
            <div key={id} className="stack-category">
              <h3 id={`stack-${id}`} className="mb-3 text-base font-semibold">{title}</h3>
              <ul
                aria-labelledby={`stack-${id}`}
                role="list"
                className="stack-items grid gap-2"
              >
                {items.map(({ name, logo, mark, primary }) => (
                  <li key={name} className="stack-item" data-primary={primary}>
                    <span className="stack-logo" data-logo={logo} aria-hidden="true">
                      {logo ? (
                        <Image
                          src={`/images/tech-stack/${logo}.svg`}
                          alt=""
                          width={24}
                          height={24}
                          unoptimized
                        />
                      ) : (
                        <span className="font-mono text-[0.625rem] font-semibold">{mark}</span>
                      )}
                    </span>
                    <span className="text-sm leading-snug font-semibold">
                      {name}
                      {primary && <span className="sr-only"> (primary technology)</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

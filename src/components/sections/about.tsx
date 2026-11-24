import { Component, Gauge, GraduationCap, Layers } from "lucide-react";
import { education, frontendFocus, profile } from "@/data/portfolio";

const focusIcons = {
  "Design systems": Component,
  "Frontend performance": Gauge,
  "Legacy modernization": Layers,
};

export function About() {
  return (
    <section id="about" className="section-band" aria-labelledby="about-title" tabIndex={-1}>
      <div className="site-container grid items-center gap-8 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div>
          <div className="section-heading mb-6">
            <h2 id="about-title">About me</h2>
            <p>{profile.about}</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="section-icon"><GraduationCap size={19} aria-hidden="true" /></span>
            <div>
              <h3 className="font-semibold">{education.institution}</h3>
              <p className="text-sm text-muted">{education.degree} · {education.period}</p>
            </div>
          </div>
        </div>
        <ul className="focus-list">
          {frontendFocus.map((focus) => {
            const Icon = focusIcons[focus];

            return (
              <li key={focus}>
                <Icon size={19} className="text-accent" aria-hidden="true" />
                {focus}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

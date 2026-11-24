import { BriefcaseBusiness, CodeXml, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="section-band" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="site-container">
        <div className="contact-panel">
          <div className="section-heading mb-0">
            <h2 id="contact-title">Get in touch</h2>
            <p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a></p>
            <ul className="mt-5 flex flex-wrap gap-2">
              <li><a className="button button-secondary" href={profile.github}><CodeXml size={16} aria-hidden="true" /> GitHub</a></li>
              <li><a className="button button-secondary" href={profile.linkedin}><BriefcaseBusiness size={16} aria-hidden="true" /> LinkedIn</a></li>
            </ul>
          </div>
          <span className="contact-mark hidden sm:grid"><Mail size={32} strokeWidth={1.6} aria-hidden="true" /></span>
        </div>
      </div>
    </section>
  );
}

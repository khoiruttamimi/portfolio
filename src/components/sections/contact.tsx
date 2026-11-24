import { BriefcaseBusiness, CodeXml, Mail } from 'lucide-react';
import { profile } from '@/data/portfolio';

const email = profile.email?.trim();
const emailHref = email ? `mailto:${email}` : undefined;
const contactLinks = [
  { label: 'LinkedIn', href: profile.linkedin?.trim(), icon: BriefcaseBusiness },
  { label: 'GitHub', href: profile.github?.trim(), icon: CodeXml },
  { label: 'Email', href: emailHref, icon: Mail },
].filter(({ href }) => href);

export function Contact() {
  return (
    <section id="contact" className="section-band" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="site-container">
        <div className="contact-panel">
          <div className="contact-main">
            <div className="grid justify-items-start">
              <p className="eyebrow contact-eyebrow">OPEN TO OPPORTUNITIES</p>
              <h2 id="contact-title" className="contact-title">
                Have Something in Mind?{' '}
                <span className="block text-accent">Let&apos;s Talk.</span>
              </h2>
              <p className="contact-description">
                Whether it&apos;s a new opportunity, an interesting project, or just a conversation about frontend development,
                I&apos;d love to hear from you.
              </p>
              {emailHref && (
                <a className="button button-primary mt-6" href={emailHref}>
                  <Mail size={18} aria-hidden="true" /> Get in Touch
                </a>
              )}
            </div>
            <div className="contact-art hidden lg:grid" aria-hidden="true">
              <span className="contact-mark"><Mail size={42} strokeWidth={1.5} /></span>
            </div>
          </div>
          {contactLinks.length > 0 && (
            <ul className="contact-links" aria-label="Contact links">
              {contactLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a className="contact-link" href={href}>
                    <Icon size={18} aria-hidden="true" /> {label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { Blocks, GraduationCap, Target, UserRound, Users } from 'lucide-react';
import Image from 'next/image';
import { aboutApproach, education, profile } from '@/data/portfolio';

const profilePhoto = '/images/profile.jpeg';

const approachIcons = {
  maintainability: Blocks,
  collaboration: Users,
  'problem-solving': Target,
};

export function About() {
  const hasProfilePhoto = existsSync(join(process.cwd(), 'public', profilePhoto));

  return (
    <section id="about" className="section-band" aria-labelledby="about-title" tabIndex={-1}>
      <div className="site-container">
        <div className="section-heading">
          <h2 id="about-title">ABOUT ME</h2>
        </div>
        <div className="grid items-center gap-6 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:gap-10 lg:gap-14">
          <div className="about-photo mx-auto md:mx-0">
            {hasProfilePhoto ? (
              <Image
                src={profilePhoto}
                alt={`Portrait of ${profile.name}`}
                width={1095}
                height={1436}
                sizes="(min-width: 48rem) 16rem, 12rem"
                className="about-photo-image"
              />
            ) : (
              <div className="about-photo-fallback" aria-hidden="true"><UserRound size={42} strokeWidth={1.5} /></div>
            )}
          </div>
          <div>
            <p className="eyebrow mb-3">A LITTLE ABOUT ME</p>
            <h3 className="about-headline">
              Building with purpose,{' '}
              <span className="block text-accent">one detail at a time.</span>
            </h3>
            <div className="mt-4 max-w-2xl space-y-3 leading-relaxed text-muted">
              {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span className="section-icon"><GraduationCap size={19} aria-hidden="true" /></span>
              <p className="text-sm text-muted">
                <span className="block font-semibold text-foreground">{education.institution}</span>
                {education.degree} · {education.period}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-7 md:mt-8">
          <h3 id="about-approach-title" className="eyebrow">MY APPROACH</h3>
          <ul aria-labelledby="about-approach-title" className="mt-3 grid gap-3 md:grid-cols-3">
            {aboutApproach.map(({ id, title, description }) => {
              const Icon = approachIcons[id];

              return (
                <li key={id} className="about-approach-item">
                  <span className="section-icon"><Icon size={19} aria-hidden="true" /></span>
                  <div>
                    <h4 className="font-semibold">{title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

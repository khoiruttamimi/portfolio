import { FolderOpen } from "lucide-react";
import { CodePreview } from "@/components/shared/code-preview";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="site-container hero" aria-labelledby="hero-title" tabIndex={-1}>
      <div className="hero-copy">
        <p className="eyebrow hero-intro"><span aria-hidden="true" /> Hello, I’m {profile.name}</p>
        <h1 id="hero-title" className="hero-title">Frontend <span>Developer</span></h1>
        <p className="hero-description">{profile.description}</p>
        <div className="flex flex-wrap gap-3">
          <a href="#projects" className="button button-primary"><FolderOpen size={18} aria-hidden="true" /> Explore projects</a>
          <a href="#playground" className="button button-secondary">Try the playground</a>
        </div>
      </div>
      <CodePreview />
    </section>
  );
}

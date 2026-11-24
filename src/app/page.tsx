import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Playground } from "@/components/playground/playground-section";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { WorkExperience } from "@/components/sections/work-experience";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <WorkExperience />
        <TechStack />
        <FeaturedProjects />
        <Playground />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

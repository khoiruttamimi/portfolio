import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Playground } from "@/components/playground/playground-section";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { WorkExperience } from "@/components/sections/work-experience";
import { siteConfig } from "@/lib/site-config";

const { title, description, name, productionUrl, socialImage } = siteConfig;
const images = productionUrl ? [{
  url: new URL(socialImage.path, productionUrl),
  width: socialImage.width,
  height: socialImage.height,
  alt: socialImage.alt,
}] : undefined;

export const metadata: Metadata = {
  metadataBase: productionUrl,
  title,
  description,
  authors: [{ name }],
  alternates: productionUrl ? { canonical: productionUrl } : undefined,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: name,
    title,
    description,
    url: productionUrl,
    images,
  },
  twitter: {
    card: images ? "summary_large_image" : "summary",
    title,
    description,
    images,
  },
};

const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": productionUrl ? new URL("/#person", productionUrl).href : undefined,
  name,
  alternateName: siteConfig.brandName,
  jobTitle: siteConfig.jobTitle,
  url: productionUrl?.origin,
  sameAs: siteConfig.socialProfiles,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
      />
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

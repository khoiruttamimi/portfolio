import { profile } from "@/data/portfolio";

const configuredUrl = process.env.SITE_URL?.trim();
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
const origin = configuredUrl || (vercelDomain ? `https://${vercelDomain}` : undefined);
const productionUrl = origin ? new URL(origin) : undefined;

if (productionUrl && (productionUrl.protocol !== "https:" || productionUrl.href !== `${productionUrl.origin}/`)) {
  throw new Error("SITE_URL must contain only the HTTPS origin of the production portfolio.");
}

export const siteConfig = {
  name: profile.name,
  brandName: profile.brandName,
  jobTitle: profile.title,
  title: `${profile.name} — ${profile.title}`,
  description: `Portfolio of ${profile.name}, a ${profile.title} building web apps with React, Next.js, and TypeScript. Explore selected projects and work experience.`,
  productionUrl,
  socialProfiles: [profile.github, profile.linkedin].filter(Boolean),
  socialImage: {
    path: "/og.png",
    logoPath: "images/tamim-logo.png",
    width: 1200,
    height: 630,
    alt: `${profile.name} — ${profile.title}`,
  },
};

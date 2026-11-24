export const profile = {
  name: "M. Khoirut Tamimi",
  brandName: "tamim",
  title: "Frontend Developer",
  description: "I build and modernize web applications with React, Next.js, and TypeScript.",
  about: "I have over seven years of experience building web applications, including internal dashboards and business tools. My work spans legacy migrations, reusable UI components, and frontend performance.",
  email: "m.khoiruttamimi@gmail.com",
  github: "https://github.com/khoiruttamimi",
  linkedin: "https://www.linkedin.com/in/m-khoirut-tamimi",
};

export const navigation = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
  { id: "playground", label: "Playground" },
  { id: "contact", label: "Contact" },
] as const;

export const frontendFocus = [
  "Design systems",
  "Frontend performance",
  "Legacy modernization",
] as const;

export const education = {
  institution: "Universitas Trunojoyo Madura",
  degree: "Bachelor’s degree in Electrical and Electronics Engineering",
  period: "2014–2018",
};

export const projects = [
  {
    id: "my-kasir",
    title: "MyKasir",
    description: "A full-stack point-of-sale web app for managing products and transactions. It includes authentication and stores data in PostgreSQL.",
    technologies: ["Next.js", "TypeScript", "Ant Design", "NextAuth.js", "Drizzle ORM", "Neon PostgreSQL"],
    repository: "https://github.com/khoiruttamimi/my-kasir",
  },
] as const;

export const experience = [
  {
    title: "Software Engineer",
    organization: "Amartha",
    period: "August 2021 – October 2026",
    highlights: [
      "Helped modernize internal management systems with Next.js and TypeScript, building dashboards with data visualizations, advanced tables, filters, and dynamic forms.",
      "Contributed reusable components, component APIs, and technical documentation to FunDS, an internal React design system.",
      "Reduced redundant API requests and unnecessary React re-renders through caching and changes to data fetching.",
    ],
  },
  {
    title: "Frontend Web Developer",
    organization: "TwisCode Pte. Ltd.",
    period: "August 2020 – August 2021",
    highlights: [
      "Built web applications for multiple clients using React, Next.js, and Laravel.",
      "Contributed to backend development in Go before shifting to frontend work.",
    ],
  },
  {
    title: "Information Technology Staff",
    organization: "Haryono Tours & Travel",
    period: "April 2019 – July 2020",
    highlights: [
      "Helped migrate internal applications from legacy PHP to Laravel and Vue.js.",
      "Developed and maintained web features that supported internal operations.",
    ],
  },
] as const;

export const techStack = [
  { name: "Next.js", role: "Framework", mark: "N" },
  { name: "React", role: "UI library", mark: "Re" },
  { name: "TypeScript", role: "Language", mark: "TS" },
  { name: "JavaScript", role: "Language", mark: "JS" },
  { name: "Vue.js", role: "Framework", mark: "Vu" },
  { name: "AngularJS", role: "Framework", mark: "Ng" },
  { name: "Ant Design", role: "Component library", mark: "AD" },
  { name: "TanStack Query", role: "Data fetching", mark: "TQ" },
] as const;

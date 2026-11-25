interface PortfolioProfile {
  name: string;
  brandName: string;
  title: string;
  description: string;
  about: readonly string[];
  email?: string | null;
  github?: string | null;
  linkedin?: string | null;
}

export const profile: PortfolioProfile = {
  name: 'M. Khoirut Tamimi',
  brandName: 'Tamim',
  title: 'Frontend Developer',
  description:
    'I build intuitive, scalable, and maintainable web applications with React, Next.js, and TypeScript. Bringing around 7 years of software development experience to every project.',
  about: [
    "Hi, I'm Tamim, a Frontend Developer with around 7 years of experience building web applications, from internal business tools to complex enterprise systems.",
    'I specialize in React, Next.js, and TypeScript, focusing on clean architecture, reusable components, and maintainable code.',
    'Beyond implementation, I contribute to technical decisions, component API design, documentation, and code reviews. I enjoy breaking down complex requirements into practical, intuitive solutions.',
  ],
  email: 'm.khoiruttamimi@gmail.com',
  github: 'https://github.com/khoiruttamimi',
  linkedin: 'https://www.linkedin.com/in/m-khoirut-tamimi',
};

export const navigation = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
  { id: 'playground', label: 'Playground' },
  { id: 'contact', label: 'Contact' },
] as const;

export const frontendFocus = ['Design systems', 'Frontend performance', 'Legacy modernization'] as const;

export const aboutApproach = [
  {
    id: 'maintainability',
    title: 'Maintainability',
    description: "Writing clean, reusable code that's easy to evolve.",
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    description: 'Turning ideas into solutions through clear communication.',
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    description: 'Breaking down complexity into practical solutions.',
  },
] as const;

export const education = {
  institution: 'Universitas Trunojoyo Madura',
  degree: 'Bachelor’s degree in Electrical and Electronics Engineering',
  period: '2014–2018',
};

export type FeaturedProject = {
  id: string;
  title: string;
  description: string;
  technologies: readonly string[];
  highlights: readonly string[];
  repository?: string;
  liveApp?: { url: string; label: string };
} & ({ type: 'Personal Project'; company?: never } | { type: 'Professional Project'; company: string });

export const projects = [
  {
    id: 'my-kasir',
    title: 'My Kasir — Point of Sale System',
    type: 'Personal Project',
    description: 'A web-based point-of-sale application designed to simplify product management and sales transactions.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Ant Design', 'PostgreSQL', 'Drizzle ORM'],
    highlights: ['Product management', 'Sales transactions', 'Authentication', 'Invoice generation', 'Barcode support'],
    repository: 'https://github.com/khoiruttamimi/my-kasir',
    liveApp: { url: 'https://my-kasir-lemon.vercel.app', label: 'Live app (sign-in required)' },
  },
  {
    id: 'funds',
    title: 'FunDS — Design System',
    type: 'Professional Project',
    company: 'Amartha',
    description:
      'A reusable UI component library focused on consistency, maintainability, and scalability across enterprise applications.',
    technologies: ['React', 'TypeScript', 'SCSS'],
    highlights: [
      'Reusable UI components',
      'Calendar and DateInput components',
      'Component API design',
      'Technical documentation',
      'Component maintainability',
    ],
  },
  {
    id: 'mis',
    title: 'Management Information System (MIS)',
    type: 'Professional Project',
    company: 'Amartha',
    description:
      'An internal enterprise platform supporting operational workflows, data management, and complex business processes.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Ant Design', 'FunDS Design System'],
    highlights: [
      'Legacy application modernization',
      'Complex forms and data tables',
      'Advanced filtering',
      'Analytics and reporting dashboards',
      'Reusable UI components',
      'Maintainable frontend architecture',
    ],
  },
  {
    id: 'mobile-webview',
    title: 'Mobile WebView Applications',
    type: 'Professional Project',
    company: 'Amartha',
    description:
      'Mobile-optimized web applications built with Next.js and designed to run within native mobile applications through WebView integration.',
    technologies: ['Next.js', 'TypeScript', 'FunDS Design System'],
    highlights: [
      'Responsive mobile interfaces',
      'Reusable frontend components',
      'Backend API integration',
      'Consistent UI behavior across mobile web experiences',
    ],
  },
] as const satisfies readonly FeaturedProject[];

export const experience = [
  {
    title: 'Software Engineer',
    organization: 'Amartha',
    period: 'August 2021 – October 2026',
    highlights: [
      'Helped modernize internal management systems with Next.js and TypeScript, building dashboards with data visualizations, advanced tables, filters, and dynamic forms.',
      'Contributed reusable components, component APIs, and technical documentation to FunDS, an internal React design system.',
      'Reduced redundant API requests and unnecessary React re-renders through caching and changes to data fetching.',
    ],
  },
  {
    title: 'Frontend Web Developer',
    organization: 'TwisCode Pte. Ltd.',
    period: 'August 2020 – August 2021',
    highlights: [
      'Built web applications for multiple clients using React, Next.js, and Laravel.',
      'Contributed to backend development in Go before shifting to frontend work.',
    ],
  },
  {
    title: 'Information Technology Staff',
    organization: 'Haryono Tours & Travel',
    period: 'April 2019 – July 2020',
    highlights: [
      'Helped migrate internal applications from legacy PHP to Laravel and Vue.js.',
      'Developed and maintained web features that supported internal operations.',
    ],
  },
] as const;

type Technology = {
  name: string;
  primary?: boolean;
} & (
  | { logo: string; mark?: never }
  | { logo?: never; mark: string }
);

type TechnologyCategory = {
  id: string;
  title: string;
  items: readonly Technology[];
};

const nextJs = { name: 'Next.js', logo: 'nextjs', primary: true } as const;

export const techStack: readonly TechnologyCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Technologies',
    items: [
      { name: 'React', logo: 'react', primary: true },
      nextJs,
      { name: 'Vue.js', logo: 'vuejs' },
      { name: 'TypeScript', logo: 'typescript', primary: true },
      { name: 'JavaScript', logo: 'javascript' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend Technologies',
    items: [
      nextJs,
      { name: 'Go', logo: 'go' },
      { name: 'Laravel', logo: 'laravel' },
    ],
  },
  {
    id: 'styling',
    title: 'UI & Styling',
    items: [
      { name: 'Ant Design', logo: 'antdesign' },
      { name: 'Tailwind CSS', logo: 'tailwindcss' },
      { name: 'SCSS', logo: 'sass' },
      { name: 'CSS', logo: 'css' },
      { name: 'Bootstrap', logo: 'bootstrap' },
      { name: 'Material UI (MUI)', logo: 'materialui' },
      { name: 'CoreUI', logo: 'coreui' },
    ],
  },
  {
    id: 'data',
    title: 'State & Data',
    items: [
      { name: 'TanStack Query', logo: 'tanstack-query' },
      { name: 'REST API', mark: 'API' },
      { name: 'PostgreSQL', logo: 'postgresql' },
      { name: 'Drizzle ORM', logo: 'drizzle' },
    ],
  },
  {
    id: 'tools',
    title: 'Development Tools & AI',
    items: [
      { name: 'Git', logo: 'git' },
      { name: 'Visual Studio Code', logo: 'vscode' },
      { name: 'Postman', logo: 'postman' },
      { name: 'Figma', logo: 'figma' },
      { name: 'Vercel', logo: 'vercel' },
      { name: 'OpenAI Codex', logo: 'codex' },
    ],
  },
];

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

export const projectCategories = [
  'Amartha',
  'TwisCode',
  'Haryono Tours & Travel',
  'Freelance',
  'Personal',
  'Frontend Showcase',
] as const;

export type FeaturedProject = {
  id: string;
  title: string;
  category: (typeof projectCategories)[number];
  role?: string;
  description?: string;
  overview?: string;
  technologies: readonly string[];
  highlights?: readonly string[];
  thumbnail?: { src: string; alt: string; width: number; height: number };
  repository?: string;
  liveApp?: { url: string; label: string; opensInNewTab?: boolean };
};

export type ProjectSummary = Pick<
  FeaturedProject,
  'id' | 'title' | 'category' | 'role' | 'description' | 'technologies' | 'thumbnail' | 'repository' | 'liveApp'
>;

export const projects: readonly FeaturedProject[] = [
  {
    id: 'mis',
    title: 'Management Information System (MIS)',
    category: 'Amartha',
    description:
      'An enterprise management platform designed to support internal business operations, data management, and reporting. The system provides complex data tables, advanced filtering, forms, and dashboards to help teams manage operational workflows efficiently.',
    overview: 'The platform supports complex operational workflows through forms, data tables, filtering, and analytics and reporting dashboards.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Ant Design'],
    highlights: [
      'Modernized the legacy frontend and improved its maintainability.',
      'Built reusable UI components, complex forms, and data tables with advanced filtering.',
      'Developed analytics and reporting dashboards.',
    ],
  },
  {
    id: 'funds',
    title: 'FunDS — Design System',
    category: 'Amartha',
    description:
      'A reusable design system built to provide consistent user interfaces across enterprise applications. It includes customizable UI components, form controls, and interactive components such as Calendar and DateInput, helping development teams build maintainable applications.',
    overview: 'The UI component library focuses on consistency, maintainability, and reuse as enterprise applications grow.',
    technologies: ['React', 'TypeScript', 'SCSS'],
    highlights: [
      'Developed reusable UI components, including Calendar and DateInput.',
      'Designed component APIs and wrote technical documentation.',
      'Improved component maintainability.',
    ],
  },
  {
    id: 'mobile-webview',
    title: 'Mobile WebView Applications',
    category: 'Amartha',
    description:
      'Mobile-optimized web applications designed to run within native mobile apps through WebView integration. These applications provide responsive interfaces and connected experiences between mobile applications and web-based services.',
    overview: 'The Next.js applications use WebView integration to deliver consistent UI behavior across mobile web experiences.',
    technologies: ['Next.js'],
    highlights: [
      'Built responsive mobile interfaces and reusable frontend components.',
      'Integrated the frontend with backend APIs.',
    ],
  },
  {
    id: 'ifm',
    title: 'IFM — Internal Management System',
    category: 'TwisCode',
    description:
      'An internal management application designed to support employee administration and daily business operations. The platform provides web-based interfaces for organizing internal workflows and managing operational activities.',
    technologies: ['Laravel', 'Tailwind CSS', 'Vanilla JavaScript'],
    highlights: ['Developed and maintained the frontend interfaces.'],
  },
  {
    id: 'hyperbike',
    title: 'Hyperbike — Logistics & Delivery Platform',
    category: 'TwisCode',
    description:
      'A logistics and delivery platform designed to support package shipping and delivery operations. The application facilitates shipment management and logistics workflows, helping organize the process of managing delivery services.',
    technologies: ['Next.js', 'Tailwind CSS'],
    highlights: ['Contributed to frontend development.'],
  },
  {
    id: 'texkleen',
    title: 'Texkleen — Laundry Operations Management',
    category: 'TwisCode',
    description:
      'A laundry operations management platform designed to support commercial laundry services. The system helps organize laundry workflows, order management, delivery coordination, and operational reporting.',
    technologies: ['Next.js', 'Ant Design', 'Bootstrap'],
    highlights: ['Contributed to frontend development.'],
  },
  {
    id: 'halobro',
    title: 'Halobro — Omnichannel Customer Service Platform',
    category: 'TwisCode',
    description:
      'An omnichannel customer service platform designed to centralize communication from multiple messaging channels. It helps customer support teams manage conversations and coordinate customer interactions through a unified interface.',
    technologies: ['React', 'Material UI'],
    highlights: ['Contributed to frontend development.'],
  },
  {
    id: 'kami',
    title: 'KAMI — Creator Subscription Platform',
    category: 'TwisCode',
    role: 'Backend Developer',
    description:
      'A subscription-based video platform that allows content creators to share exclusive content with their subscribers. The platform provides a seamless experience for both creators and viewers.',
    technologies: ['Go (Golang)'],
  },
  {
    id: 'internal-business-modernization',
    title: 'Internal Business Application Modernization',
    category: 'Haryono Tours & Travel',
    description:
      'A modernization project focused on improving legacy internal business applications used for daily operations. Existing PHP functionality was refactored and developed using Laravel and Vue.js to support more maintainable application architecture and business workflows.',
    technologies: ['PHP', 'Laravel', 'Vue.js'],
    highlights: [
      'Migrated legacy PHP functionality to Laravel and Vue.js.',
      'Refactored existing code and developed internal business features.',
    ],
  },
  {
    id: 'arah-muslim',
    title: 'Arah Muslim — Admin Dashboard',
    category: 'Freelance',
    description:
      'An administration dashboard developed to support Arah Muslim, an Islamic lifestyle mobile application offering services such as prayer schedules, zakat, and other Muslim-focused features. The dashboard provides interfaces for managing application-related information and operational activities.',
    overview: 'The dashboard supports Arah Muslim, whose mobile app offers prayer schedules, zakat, and other services for Muslims.',
    technologies: ['React', 'CoreUI'],
    highlights: ['Developed the dashboard frontend and administration interfaces.'],
  },
  {
    id: 'payment-system-dashboard',
    title: 'Payment System Dashboard',
    category: 'Freelance',
    description:
      'A web-based administration dashboard designed to support payment system management and operational workflows. The platform provides a centralized interface for organizing payment-related activities and managing system operations.',
    technologies: ['React', 'Material UI'],
    highlights: ['Developed the dashboard frontend and payment management interfaces.'],
  },
  {
    id: 'siksorogo',
    title: 'Siksorogo — Running Event Management',
    category: 'Freelance',
    description:
      'A web application designed to support the organization and management of running events. The platform provides an interface for managing event-related activities and coordinating operational workflows.',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    highlights: ['Developed the frontend using React, Vite, and Tailwind CSS.'],
  },
  {
    id: 'sertimedia',
    title: 'Sertimedia — Certification Marketplace',
    category: 'Freelance',
    description:
      'A certification marketplace platform consisting of a customer-facing website and an administration dashboard. The platform supports access to certification services while providing administrative interfaces for managing marketplace operations.',
    technologies: ['React', 'Tailwind CSS', 'CoreUI'],
    highlights: ['Developed the frontend for the marketplace website and administration dashboard.'],
  },
  {
    id: 'my-kasir',
    title: 'My Kasir — Point of Sale System',
    category: 'Personal',
    description:
      'A web-based point-of-sale application designed to simplify product management, cashier operations, and sales transactions. The system includes product management, authentication, barcode scanning, transaction processing, stock updates, and invoice generation.',
    overview: 'My Kasir brings product management, barcode scanning, sales transactions, and invoice generation into one application.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Ant Design', 'PostgreSQL', 'Drizzle ORM'],
    highlights: [
      'Designed the application architecture and integrated the database.',
      'Built product management and authentication.',
      'Implemented transaction processing, barcode scanning, and invoice generation.',
    ],
    repository: 'https://github.com/khoiruttamimi/my-kasir',
    liveApp: { url: 'https://my-kasir-lemon.vercel.app', label: 'Live app (sign-in required)' },
  },
  {
    id: 'hydra',
    title: 'HYDRA — Product Landing Page',
    category: 'Frontend Showcase',
    description:
      'A responsive product landing page for a conceptual reusable water bottle brand, with clean visuals and interactive mobile navigation. Built with vanilla TypeScript and Tailwind CSS v4, without a frontend framework.',
    technologies: ['TypeScript', 'Tailwind CSS', 'Vite', 'HTML'],
    highlights: [
      'Responsive layouts for mobile, tablet, and desktop.',
      'Interactive mobile menu, sticky header, and active navigation highlighting.',
      'Framework-free frontend built with HTML and vanilla TypeScript.',
      'Styled with Tailwind CSS v4.',
    ],
    thumbnail: {
      src: '/images/hydra-landing-page.webp',
      alt: 'HYDRA landing page with a large water bottle photo beside the headline “Hydration Made Beautiful”',
      width: 1200,
      height: 675,
    },
    repository: 'https://github.com/khoiruttamimi/hydra-landing-page',
    liveApp: {
      url: 'https://hydra-landing-page-gamma.vercel.app',
      label: 'Live Demo',
      opensInNewTab: true,
    },
  },
];

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

export const playgroundEntries = [
  {
    id: "contrast",
    title: "Contrast Lab",
    description: "Compare text and background colors and see how they score against WCAG AA.",
    technologies: ["React", "TypeScript", "Accessibility"],
  },
  {
    id: "layout",
    title: "Grid Playground",
    description: "Change the columns and spacing of a CSS grid and see the layout update in real time.",
    technologies: ["React", "CSS Grid", "Responsive Design"],
  },
] as const;

export type PlaygroundEntry = (typeof playgroundEntries)[number];

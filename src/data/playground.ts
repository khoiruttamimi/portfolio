export const playgroundEntries = [
  {
    id: "contrast",
    title: "Contrast Lab",
    description: "Compare text and background colors and see how they score against WCAG AA.",
  },
  {
    id: "layout",
    title: "Grid Playground",
    description: "Change the columns and spacing of a CSS grid and see the layout update in real time.",
  },
  {
    id: "shadow",
    title: "Shadow Builder",
    description: "Adjust a box shadow, preview the effect, and copy the generated CSS.",
  },
  {
    id: "palette",
    title: "Color Palette",
    description: "Generate five coordinated colors from a starting color and export them as CSS variables.",
  },
  {
    id: "regex",
    title: "Regex Generator",
    description: "Build a JavaScript regular expression from a template and test it on your own text.",
  },
  {
    id: "json",
    title: "JSON Explorer",
    description: "Paste JSON, check its syntax, and browse values in an expandable tree.",
  },
] as const;

export type PlaygroundEntry = (typeof playgroundEntries)[number];

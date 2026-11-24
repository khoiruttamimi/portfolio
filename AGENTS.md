<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project Overview

This repository contains a personal portfolio website for a Frontend Developer.

The website showcases professional experience, selected projects, technical skills, and contact information.

The goal is to build a modern, professional, accessible, responsive, and maintainable portfolio.

## Tech Stack

- Node.js 24 LTS
- Next.js with App Router
- React
- TypeScript
- Tailwind CSS
- npm

Use the versions already installed in the project. Do not upgrade dependencies unless explicitly requested.

## Architecture

Follow the existing project structure:

- `src/app/`: App Router pages, layouts, metadata, and global styles.
- `src/components/layout/`: Navbar, footer, and layout components.
- `src/components/sections/`: Portfolio page sections.
- `src/components/playground/`: Playground section, shared controls, and one component file per demo.
- `src/components/shared/`: Reusable UI components.
- `src/components/providers/`: React context providers.
- `src/data/`: Portfolio content and static data.
- `src/hooks/`: Custom React hooks.
- `src/lib/`: Shared utilities and configuration.
- `src/types/`: Shared TypeScript types.
- `public/images/`: Static images and project screenshots.

Do not create unnecessary folders or abstractions.

## Coding Guidelines

- Use TypeScript with strict typing.
- Avoid `any` unless absolutely necessary.
- Prefer functional React components.
- Use Server Components by default.
- Add `"use client"` only when client-side interactivity is required.
- Keep components focused and reusable.
- Use descriptive variable and function names.
- Prefer named exports for reusable components.
- Use the `@/` import alias.
- Avoid unnecessary dependencies.
- Do not introduce premature abstractions.
- Keep code readable and maintainable.

## Styling Guidelines

Use Tailwind CSS and semantic CSS variables for design tokens.

### Brand

- Primary accent: `#63D5DF` (Clear Cyan)
- Hover accent: `#40DDE8`

### Dark Theme

- Background: `#292F32`
- Surface: `#202629`
- Primary text: `#FFFFFF`
- Secondary text: `#E5E7EB`
- Border: `#58656A`

### Light Theme

- Background: `#F3F6F7`
- Surface: `#FFFFFF`
- Primary text: `#172B31`
- Secondary text: `#34474E`
- Border: `#D4E0E3`
- Accent text: `#087887`

### Theme Behavior

- Support both Dark and Light themes.
- Follow system preference by default.
- Provide a theme toggle in the navbar.
- Persist manual theme selection.
- Avoid theme flashing during page load.
- Use subtle transitions.
- Maintain sufficient contrast in both themes.

### Visual Direction

- Modern, minimal, and professional.
- Subtle developer-inspired aesthetic.
- Clean typography and generous spacing.
- High readability.
- Responsive layouts.
- Avoid excessive animations, gradients, and glow effects.

## Portfolio Sections

The main page contains:

1. Navbar
2. Hero
3. About Me
4. Work Experience
5. Tech Stack
6. Featured Projects
7. Playground
8. Contact
9. Footer

Keep section components independent and separate content from presentation.

## Content Guidelines

- Website content should be written in English.
- Use "Frontend Developer" as the primary professional title.
- Actual previous job titles may include "Senior Frontend Developer".
- Do not invent employment dates, achievements, metrics, contact details, or project URLs.
- Keep professional descriptions accurate and concise.
- Store structured content in `src/data/` when appropriate.

## Accessibility

- Use semantic HTML.
- Ensure keyboard accessibility.
- Provide visible focus states.
- Use accessible labels for icon-only buttons.
- Maintain sufficient color contrast.
- Respect `prefers-reduced-motion`.
- Provide meaningful image alternative text.

## Performance

- Prefer Server Components when possible.
- Minimize client-side JavaScript.
- Use `next/image` for appropriate images.
- Avoid unnecessary re-renders.
- Keep animations lightweight.
- Avoid introducing a backend unless explicitly requested.

## Agent Workflow

When implementing changes:

1. Inspect existing code before modifying it.
2. Follow existing patterns and conventions.
3. Keep changes focused on the requested scope.
4. Avoid unrelated refactoring.
5. Do not install new dependencies without explaining why they are needed.
6. Do not modify unrelated files.
7. Preserve responsive behavior and theme compatibility.
8. Update related types and data structures when necessary.
9. Run appropriate checks after implementation.
10. Summarize the changes and any remaining issues.

## Validation

Before completing implementation tasks, run the relevant checks:

- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

Report failures clearly. Do not claim checks passed unless they were actually executed.

## Important Constraints

- Do not introduce authentication or a database.
- Do not add unnecessary state management libraries.
- Do not implement features outside the requested scope.
- Do not rewrite the entire project for small changes.
- Do not invent portfolio content.
- Ask for clarification when a decision would significantly affect the architecture or design.

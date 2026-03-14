# AGENT.md

## Role
You are a senior full-stack engineer helping build a production-ready academic portfolio website using Next.js, TypeScript, React, and Tailwind CSS.

## Mission
Use `PRD.md` as the source of truth. Build the smallest complete version first, then iterate safely until the site is production-ready and deployable on Vercel.

## Core Principles
1. Prefer simple, maintainable solutions over clever ones.
2. Keep the app production-oriented from the beginning.
3. Preserve a clean separation between content, UI, and logic.
4. Use strong typing everywhere possible.
5. Make incremental, testable changes.
6. Never break existing working pages when adding features.
7. Optimize for accessibility, SEO, and responsive design.
8. Ask for clarification only when a blocker truly prevents progress; otherwise make a sensible assumption and document it.

## Product Context
This project is a personal academic portfolio website for a lecturer. It should present:
- profile/about information,
- research interests,
- publications,
- teaching portfolio,
- projects,
- consultancy,
- and contact details.

The site should feel professional, trustworthy, and easy to update.

## Tech Stack
- Next.js (latest stable, App Router)
- React
- TypeScript
- Tailwind CSS
- ESLint
- Prettier if configured
- Vercel deployment target

## Execution Strategy
Work in this order unless there is a strong reason not to:

### Step 1: Project Foundation
- Initialize app with Next.js, TypeScript, Tailwind
- Configure linting and formatting
- Create app layout
- Add metadata defaults
- Set up base styles and design tokens

### Step 2: Content Architecture
- Define TypeScript interfaces in `lib/types.ts`
- Create structured content files in `content/`
- Seed realistic placeholder/sample content where real content is missing
- Keep content separate from components

### Step 3: Shared UI
- Build reusable layout and section components
- Implement navbar, footer, section heading, CTA buttons, cards, badges
- Ensure mobile-first responsive behavior

### Step 4: Core Pages
Build pages in this order:
1. Home
2. About
3. Research
4. Publications
5. Teaching
6. Projects
7. Consultancy
8. Contact

### Step 5: Enhanced Functionality
- Add publication filtering and search
- Add downloadable CV link support
- Add contact form with validation
- Add empty/error states where needed

### Step 6: Quality Pass
- Accessibility audit
- SEO metadata by page
- Image optimization
- Performance improvements
- Production build verification

### Step 7: Deployment
- Prepare for Vercel
- Document environment variables
- Verify production build and routing
- Add deployment notes to README

## Coding Standards

### General
- Use server components by default; add client components only when interactive behavior is necessary.
- Avoid unnecessary dependencies.
- Prefer composition over duplication.
- Keep files small and cohesive.
- Use descriptive names.
- Avoid hard-coded repeated values; centralize constants.

### TypeScript
- Avoid `any`.
- Type component props explicitly.
- Use discriminated unions where useful.
- Validate external/untrusted input.

### React / Next.js
- Use the App Router.
- Use `next/link` for internal navigation.
- Use `next/image` for images.
- Use `generateMetadata` or route metadata where appropriate.
- Keep interactive filtering/search isolated to client components.
- Favor static rendering for stable content pages.

### Tailwind CSS
- Use utility classes consistently.
- Extract repeated patterns into reusable components.
- Keep visual language restrained and professional.
- Ensure spacing and typography are consistent.

## UX / UI Standards
- The design should be academic and polished, not flashy.
- Typography and spacing should do most of the design work.
- Preserve excellent readability on mobile and desktop.
- Navigation must be obvious and lightweight.
- CTAs should be visible but not overwhelming.
- Make cards and sections scan-friendly.

## Accessibility Requirements
- Semantic headings
- Keyboard-accessible navigation
- Labels on all form fields
- Visible focus styles
- Adequate contrast
- Alt text for meaningful images
- Avoid using color alone to communicate meaning

## SEO Requirements
- Add page-level metadata
- Add Open Graph fields
- Generate sitemap and robots
- Use descriptive titles and meta descriptions
- Include structured data when practical

## Form Guidance
If implementing the contact form:
- start with a simple working form,
- validate name/email/message,
- avoid exposing secrets client-side,
- use environment variables for providers,
- include success/failure states,
- add spam mitigation.

## Git Workflow
- Make atomic commits
- Use meaningful commit messages
- Keep main branch deployable
- Update README when setup or deployment steps change

## Testing / Verification Checklist
Before considering any milestone complete:
- `npm run lint` passes
- `npm run build` passes
- no TypeScript errors
- major pages render correctly
- mobile navigation works
- publication filters work
- contact form behavior is clear
- metadata is present
- no obviously broken responsiveness

## Documentation Expectations
Keep `README.md` updated with:
- project overview
- setup instructions
- scripts
- environment variables
- deployment steps
- content update instructions

## Assumptions Policy
When content is missing:
- use realistic placeholders,
- clearly mark them as placeholders in content files,
- do not block implementation waiting for final copy.

## Output Style for Tasks
When asked to implement or change something:
1. Briefly state the plan.
2. Make the changes.
3. Summarize files changed.
4. Mention follow-up risks or TODOs only if important.

## Preferred Milestone Plan
1. Scaffold app
2. Create shared layout and theme
3. Add content models and seed data
4. Build home page
5. Build all static pages
6. Add publication filters/search
7. Add contact form
8. Add SEO/accessibility improvements
9. Prepare deployment
10. Final polish

## What Not To Do
- Do not introduce a CMS in Phase 1 unless explicitly asked.
- Do not overengineer the data layer.
- Do not use heavy animation libraries unless there is a strong UX reason.
- Do not move core content into hard-coded JSX strings if it belongs in content files.
- Do not leave the project in a half-working state after a task.

## Definition of Done
A task is done when:
- implementation matches PRD intent,
- the app builds successfully,
- code is typed and lint-clean,
- the UX works on mobile and desktop,
- and the change is documented if it affects setup or usage.

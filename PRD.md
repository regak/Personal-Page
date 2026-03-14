# PRD.md

## Product Title
Academic Portfolio Website for a University Lecturer

## Version
1.0

## Purpose
Build a modern personal academic website that presents a lecturer's profile, publications, projects, teaching, consultancy, and contact information. The website should help the lecturer establish a professional online presence, make academic work discoverable, and provide a credible point of contact for students, collaborators, institutions, and funders.

## Reference Inspiration
This product is inspired by the structure and presentation approach of Dr. Aron Kondoro's academic portfolio website, which includes these core sections: Home, About, Research, Publications, Teaching, Projects, and Contact. The site highlights an academic profile, research interests, selected publications, courses taught, practical projects, and collaboration/contact details. citeturn412450view0

## Product Vision
Create a clean, fast, mobile-friendly academic portfolio site that works as:
- a digital academic CV,
- a public research portfolio,
- a teaching and consultancy showcase,
- and a collaboration entry point.

The site should feel professional, credible, simple to update, and optimized for SEO.

## Primary Users
- Students
- Researchers and collaborators
- University administrators
- NGOs and development partners
- Private sector clients
- Government institutions
- Conference organizers and media

## Business / Personal Goals
- Increase professional visibility online
- Make publications easier to discover and cite
- Showcase teaching portfolio and supervision areas
- Present consultancy and project experience clearly
- Generate collaboration, speaking, and consulting inquiries
- Maintain a current, personal, controlled online profile independent of social platforms

## Success Metrics
- Website loads in under 2 seconds on broadband and performs well on mobile
- Lighthouse score >= 90 for Performance, Accessibility, and SEO on main pages
- Visitors can reach any core section within 2 clicks from the homepage
- Contact form submissions succeed reliably with spam protection
- Publications and projects can be updated without deep code changes
- Search engines can index profile, publication, and project pages effectively

## Scope

### In Scope (Phase 1)
- Public website with responsive design
- Homepage with hero section and profile summary
- About page
- Research interests page/section
- Publications listing with filters
- Teaching page
- Projects page
- Consultancy page
- Contact page with form and direct details
- Downloadable CV link
- Social and academic profile links (e.g., Google Scholar, ORCID, GitHub, LinkedIn)
- SEO metadata and sitemap
- Content managed through local structured content files

### Out of Scope (Phase 1)
- Full CMS admin dashboard
- User accounts and authentication
- Online payments
- Comment system
- Complex analytics dashboards
- Automatic Google Scholar sync
- Multi-author editing workflow

## Technology Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **UI:** React
- **Styling:** Tailwind CSS
- **Content:** local Markdown and/or JSON/YAML/TypeScript data files
- **Forms:** server action or API route with email/form backend
- **Deployment:** Vercel
- **Version control:** Git + GitHub

## Why This Stack
- Next.js supports SEO-friendly rendering and static generation
- TypeScript improves maintainability and developer confidence
- Tailwind CSS enables fast, consistent styling
- Local content files keep Phase 1 simple, low-cost, and version-controlled
- Vercel is the most frictionless deployment target for Next.js

## Information Architecture

### Primary Navigation
- Home
- About
- Research
- Publications
- Teaching
- Projects
- Consultancy
- Contact

### Footer
- Short profile blurb
- Quick links
- Academic profile links
- Email and institution
- Copyright

## Functional Requirements

### 1. Home Page
The homepage must provide a concise professional introduction and direct access to major sections.

#### Must include
- Full name and academic title
- Position and institution
- Professional headshot/photo
- One-paragraph summary
- CTA buttons such as “View Publications”, “Projects”, “Download CV”, “Contact”
- Featured research interests
- Featured publications
- Featured projects
- External academic profile links

#### Acceptance Criteria
- Visitor understands who the lecturer is within 5 seconds
- Main calls to action are visible above the fold on desktop
- On mobile, hero content stacks cleanly and remains readable

### 2. About Page
The About page must present a fuller academic and professional profile.

#### Must include
- Detailed biography
- Academic background
- Areas of expertise
- Career history / appointments
- Awards or recognitions (if available)
- Professional memberships (if available)

#### Acceptance Criteria
- Content is readable in sections with clear hierarchy
- Timeline or card-based layout is used where helpful

### 3. Research Page
The Research page must explain key research themes and interests.

#### Must include
- Research themes with title, summary, and keywords
- Optional links to related publications and projects
- Space for current focus areas and future interests

#### Acceptance Criteria
- Each research area is visually distinct
- Content is scannable and understandable to non-specialists

### 4. Publications Page
The Publications page must showcase scholarly output in a structured way.

#### Must include
- Publication title
- Authors
- Year
- Type (journal, conference, book chapter, report, etc.)
- Venue / publisher
- DOI and/or external link where available
- Optional abstract / summary
- Optional PDF link
- Filters by year and type
- Search by title/keyword

#### Acceptance Criteria
- Publications are sortable/filterable without page reload if practical
- Empty states are handled gracefully
- DOI/external links open safely in a new tab

### 5. Teaching Page
The Teaching page must present teaching portfolio and philosophy.

#### Must include
- Teaching statement/philosophy
- Courses taught
- Level (undergraduate/postgraduate)
- Short course descriptions
- Optional syllabus/material links
- Optional supervision interests

#### Acceptance Criteria
- Courses are grouped logically
- Teaching experience can be understood quickly by students and colleagues

### 6. Projects Page
The Projects page must highlight practical and research projects.

#### Must include
- Project title
- Short description
- Role played
- Technologies or methods used
- Collaborators/partners
- Funding source if applicable
- Date or duration
- Outcome / impact
- Optional demo or repository link

#### Acceptance Criteria
- Project cards are concise but informative
- Visitors can distinguish research projects from software/product projects if both exist

### 7. Consultancy Page
The Consultancy page must present advisory and implementation work.

#### Must include
- Client/organization name
- Consultancy title or area
- Summary of the engagement
- Role / contribution
- Year or duration
- Outcome or impact statement where safe to disclose

#### Acceptance Criteria
- Sensitive/confidential content can be omitted cleanly
- Section still communicates expertise and credibility

### 8. Contact Page
The Contact page must enable professional outreach.

#### Must include
- Email address
- Institution and department
- Office or postal address if desired
- Social/professional links
- Contact form

#### Contact Form Requirements
- Name
- Email
- Subject
- Message
- Spam prevention
- Success and error states

#### Acceptance Criteria
- Form validates required fields
- Spam prevention is active
- User receives visible feedback after submission

### 9. Downloadable CV
The site must provide a downloadable CV.

#### Acceptance Criteria
- CV link is accessible from hero and/or nav/footer
- Download target is a PDF hosted in public assets or external storage

## Content Model

### LecturerProfile
```ts
interface LecturerProfile {
  name: string;
  title: string;
  role: string;
  institution: string;
  department?: string;
  location?: string;
  email: string;
  phone?: string;
  shortBio: string;
  longBio: string;
  profileImage: string;
  cvUrl?: string;
  links: {
    scholar?: string;
    orcid?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
}
```

### ResearchArea
```ts
interface ResearchArea {
  id: string;
  title: string;
  summary: string;
  keywords: string[];
  relatedPublicationIds?: string[];
  relatedProjectIds?: string[];
}
```

### Publication
```ts
interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  type: 'journal' | 'conference' | 'book' | 'book-chapter' | 'report' | 'other';
  venue?: string;
  publisher?: string;
  doi?: string;
  url?: string;
  pdfUrl?: string;
  abstract?: string;
  keywords?: string[];
  featured?: boolean;
}
```

### Course
```ts
interface Course {
  id: string;
  code?: string;
  title: string;
  level: 'undergraduate' | 'postgraduate' | 'professional';
  description: string;
  institution?: string;
  yearOffered?: string;
  syllabusUrl?: string;
  topics?: string[];
}
```

### Project
```ts
interface Project {
  id: string;
  title: string;
  summary: string;
  role?: string;
  collaborators?: string[];
  funder?: string;
  startDate?: string;
  endDate?: string;
  technologies?: string[];
  outcomes?: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}
```

### ConsultancyItem
```ts
interface ConsultancyItem {
  id: string;
  client: string;
  title: string;
  summary: string;
  role?: string;
  year?: string;
  outcome?: string;
  tags?: string[];
}
```

## Non-Functional Requirements

### Performance
- Prefer static rendering where content is mostly stable
- Use optimized images with Next/Image
- Minimize layout shift
- Avoid oversized client-side bundles

### Accessibility
- Semantic HTML
- Keyboard navigable menus and forms
- Visible focus states
- Sufficient color contrast
- Alt text on images
- Proper heading order

### SEO
- Unique metadata per page
- Open Graph tags
- Twitter/X card tags
- Sitemap.xml and robots.txt
- Structured data where practical (Person, ScholarlyArticle, BreadcrumbList)
- Clean readable URLs

### Responsiveness
- Mobile-first layout
- Smooth behavior from small phones to large desktops
- Navigation must remain usable on touch devices

### Maintainability
- Reusable components
- Typed data models
- Central content directory
- Consistent naming conventions
- Clear separation of content, presentation, and utility logic

### Security
- Sanitize and validate form input
- Keep secrets in environment variables
- No hard-coded credentials
- Use reputable form/email providers

## Design Requirements
- Clean academic aesthetic
- Professional typography
- Spacious layout
- Moderate motion only where it improves clarity
- Consistent card, badge, and button styles
- Use a restrained color palette that aligns with university/professional identity

## Suggested Page Components
- `Navbar`
- `Footer`
- `HeroSection`
- `SectionHeading`
- `ProfileCard`
- `ResearchCard`
- `PublicationCard`
- `PublicationFilters`
- `CourseCard`
- `ProjectCard`
- `ConsultancyCard`
- `ContactForm`
- `SocialLinks`
- `EmptyState`

## Suggested Folder Structure
```txt
app/
  page.tsx
  about/page.tsx
  research/page.tsx
  publications/page.tsx
  teaching/page.tsx
  projects/page.tsx
  consultancy/page.tsx
  contact/page.tsx
  layout.tsx
  sitemap.ts
  robots.ts

components/
  layout/
  sections/
  cards/
  ui/

content/
  profile.ts
  research.ts
  publications.ts
  courses.ts
  projects.ts
  consultancy.ts

lib/
  types.ts
  utils.ts
  seo.ts

public/
  images/
  cv/
```

## User Stories
- As a student, I want to see the lecturer’s courses and expertise so I can understand their teaching areas.
- As a researcher, I want to browse publications and projects so I can evaluate opportunities for collaboration.
- As a potential client, I want to understand consultancy experience so I can assess fit for an engagement.
- As the lecturer, I want content to be easy to update so I can keep the site current.
- As a visitor, I want the site to work well on mobile so I can use it from any device.

## Development Priorities

### Phase 1: Foundation
- Set up Next.js app with TypeScript and Tailwind
- Create layout, theme tokens, navbar, footer
- Build homepage shell
- Add content models and seed data

### Phase 2: Core Pages
- About
- Research
- Publications with filters/search
- Teaching
- Projects
- Consultancy
- Contact

### Phase 3: Quality and Launch
- SEO metadata
- Accessibility pass
- Form integration
- Performance optimization
- Deployment to Vercel
- Domain connection

## QA Checklist
- All routes work in production build
- No broken links
- Mobile navigation works
- Images load correctly
- Forms submit successfully
- SEO metadata appears on every page
- Lighthouse and accessibility checks pass at acceptable level
- Content can be updated without touching layout components

## Deployment Requirements
- GitHub repository configured
- Vercel project connected to repo
- Environment variables set in Vercel
- Custom domain configured if available
- Contact form backend configured
- Analytics optional but recommended

## Future Enhancements
- Blog or insights section
- Student supervision section
- Awards and media section
- Search across all content
- CMS integration (Sanity/Contentful/Strapi)
- Auto-sync publication sources
- Analytics dashboard

## Notes for Codex
Prioritize correctness, maintainability, and production readiness over flashy complexity. Build the site in small working increments. Keep components reusable, data typed, and pages statically rendered unless dynamic behavior is necessary.

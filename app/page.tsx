import { HeroSection } from '@/components/sections/hero-section';
import { SocialLinks } from '@/components/sections/social-links';
import { ResearchCard } from '@/components/cards/research-card';
import { PublicationCard } from '@/components/cards/publication-card';
import { ProjectCard } from '@/components/cards/project-card';
import { EmptyState } from '@/components/ui/empty-state';
import { researchAreas } from '@/content/research';
import { publications } from '@/content/publications';
import { projects } from '@/content/projects';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Home',
  description: 'Academic portfolio homepage with featured research, publications, projects, and profile links.',
  path: '/',
});

export default function HomePage() {
  const featuredResearch = researchAreas.slice(0, 3);
  const highlightedPublications = publications.filter((item) => item.featured);
  const highlightedProjects = projects.filter((item) => item.featured);
  const featuredPublications = (highlightedPublications.length ? highlightedPublications : publications).slice(0, 3);
  const featuredProjects = (highlightedProjects.length ? highlightedProjects : projects).slice(0, 3);

  return (
    <div className="space-y-12">
      <HeroSection />

      <section aria-labelledby="research-heading" className="space-y-4">
        <h2 id="research-heading" className="text-2xl font-semibold text-slate-900">
          Featured Research Interests
        </h2>
        {featuredResearch.length ? (
          <div className="grid gap-4 md:grid-cols-3">
            {featuredResearch.map((area) => (
              <ResearchCard key={area.id} area={area} />
            ))}
          </div>
        ) : (
          <EmptyState title="No research interests available" description="Add research entries in content/research.ts." />
        )}
      </section>

      <section aria-labelledby="publications-heading" className="space-y-4">
        <h2 id="publications-heading" className="text-2xl font-semibold text-slate-900">
          Featured Publications
        </h2>
        {featuredPublications.length ? (
          <div className="space-y-3">
            {featuredPublications.map((publication) => (
              <PublicationCard key={publication.id} item={publication} />
            ))}
          </div>
        ) : (
          <EmptyState title="No publications available" description="Add publication entries in content/publications.ts." />
        )}
      </section>

      <section aria-labelledby="projects-heading" className="space-y-4">
        <h2 id="projects-heading" className="text-2xl font-semibold text-slate-900">
          Featured Projects
        </h2>
        {featuredProjects.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState title="No projects available" description="Add project entries in content/projects.ts." />
        )}
      </section>

      <SocialLinks />
    </div>
  );
}

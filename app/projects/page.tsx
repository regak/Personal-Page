import { ProjectCard } from '@/components/cards/project-card';
import { SectionHeading } from '@/components/sections/section-heading';
import { PageSection } from '@/components/sections/page-section';
import { EmptyState } from '@/components/ui/empty-state';
import { projects } from '@/content/projects';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Projects',
  description: 'Research and applied projects with collaborators and funders.',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <SectionHeading title="Projects" description="Research and applied projects with collaborators and funders." />

      <PageSection id="projects-list-heading" title="Project Portfolio">
        {projects.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState title="No projects listed" description="Add project entries in content/projects.ts." />
        )}
      </PageSection>
    </div>
  );
}

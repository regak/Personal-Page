import { SectionHeading } from '@/components/sections/section-heading';
import { PageSection } from '@/components/sections/page-section';
import { ResearchCard } from '@/components/cards/research-card';
import { EmptyState } from '@/components/ui/empty-state';
import { researchAreas } from '@/content/research';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Research',
  description: 'Current research interests, themes, and keywords.',
  path: '/research',
});

export default function ResearchPage() {
  return (
    <div className="space-y-10">
      <SectionHeading title="Research" description="Current research interests and active themes." />

      <PageSection
        id="research-areas-heading"
        title="Research Areas"
        description="Core themes with methods, policy implications, and practical applications."
      >
        {researchAreas.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {researchAreas.map((area) => (
              <ResearchCard key={area.id} area={area} />
            ))}
          </div>
        ) : (
          <EmptyState title="No research areas found" description="Add records in content/research.ts." />
        )}
      </PageSection>
    </div>
  );
}

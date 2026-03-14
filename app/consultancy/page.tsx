import { ConsultancyCard } from '@/components/cards/consultancy-card';
import { SectionHeading } from '@/components/sections/section-heading';
import { PageSection } from '@/components/sections/page-section';
import { EmptyState } from '@/components/ui/empty-state';
import { consultancy } from '@/content/consultancy';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Consultancy',
  description: 'Selected advisory and consultancy engagements.',
  path: '/consultancy',
});

export default function ConsultancyPage() {
  return (
    <div className="space-y-10">
      <SectionHeading title="Consultancy" description="Selected advisory and consultancy engagements." />

      <PageSection
        id="consultancy-list-heading"
        title="Engagements"
        description="Consulting and advisory work delivered for institutional partners."
      >
        {consultancy.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {consultancy.map((item) => (
              <ConsultancyCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <EmptyState title="No consultancy engagements listed" description="Add entries in content/consultancy.ts." />
        )}
      </PageSection>
    </div>
  );
}

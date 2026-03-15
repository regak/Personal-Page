import { SectionHeading } from '@/components/sections/section-heading';
import { PublicationsExplorer } from '@/components/sections/publications-explorer';
import { publications } from '@/content/publications';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Publications',
  description: 'Browse selected publications by year, type, and keyword.',
  path: '/publications',
});

export default function PublicationsPage() {
  const sorted = [...publications].sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));

  return (
    <div className="space-y-8">
      <SectionHeading
        title="Publications"
        description="Selected scholarly outputs with filtering by type and year, plus keyword search."
      />
      <PublicationsExplorer items={sorted} />
    </div>
  );
}

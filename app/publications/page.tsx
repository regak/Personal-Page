import { SectionHeading } from '@/components/sections/section-heading';
import { PublicationsExplorer } from '@/components/sections/publications-explorer';
import { publications } from '@/content/publications';
import { buildPageMetadata } from '@/lib/seo';
import { SourceAttribution } from '@/components/sections/source-attribution';

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
      <SourceAttribution
        label="Google Scholar profile"
        href="https://scholar.google.com/citations?user=-2tYjqAAAAAJ&hl=en"
      />
      <PublicationsExplorer items={sorted} />
    </div>
  );
}

import Image from 'next/image';
import { SectionHeading } from '@/components/sections/section-heading';
import { PageSection } from '@/components/sections/page-section';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Consultancy',
  description: 'Consultancy offerings and institutional partnerships.',
  path: '/consultancy',
});

export default function ConsultancyPage() {
  return (
    <div className="space-y-10">
      <SectionHeading title="Consultancy" description="Consultancy offerings and institutional partnerships." />

      <PageSection
        id="consultancy-coming-soon-heading"
        title="Consultancy"
        description="This section is being prepared and will be published soon."
      >
        <article className="mx-auto max-w-3xl rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">
          <Image
            src="/images/consultancy-coming-soon.svg"
            alt="Consultancy section coming soon"
            width={640}
            height={360}
            className="mx-auto h-auto w-full max-w-2xl"
            priority
          />
          <div className="mt-5">
            <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-sm font-semibold text-amber-700">
              Coming Soon
            </span>
            <p className="mt-3 text-sm text-slate-600">
              Please use the contact page for interim collaboration and advisory inquiries.
            </p>
          </div>
        </article>
      </PageSection>
    </div>
  );
}

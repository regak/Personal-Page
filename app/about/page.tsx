import { SectionHeading } from '@/components/sections/section-heading';
import { PageSection } from '@/components/sections/page-section';
import { EmptyState } from '@/components/ui/empty-state';
import { profile } from '@/content/profile';
import { researchAreas } from '@/content/research';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'About',
  description: 'Professional background, expertise, and academic profile.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <SectionHeading title="About" description="Professional background and academic profile." />

      <PageSection id="biography-heading" title="Biography">
        {profile.longBio ? (
          <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-slate-700">{profile.longBio}</p>
          </article>
        ) : (
          <EmptyState title="Biography not available" description="Add biography content in content/profile.ts." />
        )}
      </PageSection>

      <PageSection id="expertise-heading" title="Academic Snapshot">
        <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <dl className="grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-medium text-slate-700">Name</dt>
              <dd className="text-slate-900">{profile.name}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-700">Role</dt>
              <dd className="text-slate-900">{profile.role}</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-700">Institution</dt>
              <dd className="text-slate-900">{profile.institution}</dd>
            </div>
            {profile.department ? (
              <div>
                <dt className="font-medium text-slate-700">Department</dt>
                <dd className="text-slate-900">{profile.department}</dd>
              </div>
            ) : null}
            {profile.location ? (
              <div>
                <dt className="font-medium text-slate-700">Location</dt>
                <dd className="text-slate-900">{profile.location}</dd>
              </div>
            ) : null}
          </dl>

          <div className="mt-5 border-t border-slate-200 pt-4">
            <p className="text-sm font-medium text-slate-700">Primary research themes</p>
            {researchAreas.length ? (
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {researchAreas.map((area) => (
                  <li key={area.id}>{area.title}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm text-slate-600">Research themes will appear once added.</p>
            )}
          </div>
        </article>
      </PageSection>
    </div>
  );
}

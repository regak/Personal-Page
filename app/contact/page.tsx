import { ContactForm } from '@/components/sections/contact-form';
import { SectionHeading } from '@/components/sections/section-heading';
import { profile } from '@/content/profile';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Contact',
  description: 'Get in touch for collaboration, supervision, or consultancy.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <SectionHeading title="Contact" description="Get in touch for collaboration, supervision, or consultancy." />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />

        <aside className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm" aria-labelledby="direct-contact-heading">
          <h2 id="direct-contact-heading" className="text-xl font-semibold text-slate-900">
            Direct Contact
          </h2>
          <p className="mt-3 text-sm text-slate-700">
            Email:{' '}
            <a className="font-medium text-brand-700 no-underline hover:underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>
          {profile.phone ? <p className="mt-2 text-sm text-slate-700">Phone: {profile.phone}</p> : null}
          <p className="mt-4 text-sm text-slate-600">
            If form delivery is temporarily unavailable, email is the fastest way to connect.
          </p>
        </aside>
      </div>
    </div>
  );
}

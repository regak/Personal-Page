import { profile } from '@/content/profile';

const orderedLinks = [
  ['Google Scholar', profile.links.scholar],
  ['ORCID', profile.links.orcid],
  ['GitHub', profile.links.github],
  ['LinkedIn', profile.links.linkedin],
  ['Website', profile.links.website],
] as const;

export function SocialLinks() {
  const links = orderedLinks.filter(([, href]) => Boolean(href));

  if (!links.length) {
    return null;
  }

  return (
    <section aria-labelledby="social-links-heading" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 id="social-links-heading" className="text-xl font-semibold text-slate-900">
        Academic & Professional Profiles
      </h2>
      <ul className="mt-4 flex flex-wrap gap-3 text-sm">
        {links.map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-md border border-slate-300 px-3 py-1.5 font-medium text-slate-700 no-underline hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

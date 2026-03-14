import Image from 'next/image';
import { profile } from '@/content/profile';
import { ButtonLink } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-6 md:grid-cols-[1fr_220px] md:items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-brand-700">{profile.institution}</p>
          <h1 id="hero-heading" className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-lg text-slate-700 sm:text-xl">{profile.role}</p>
          <p className="mt-4 max-w-3xl text-slate-700">{profile.shortBio}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/publications" variant="primary">
              View Publications
            </ButtonLink>
            <ButtonLink href="/projects">Projects</ButtonLink>
            {profile.cvUrl ? <ButtonLink href={profile.cvUrl}>Download CV</ButtonLink> : null}
            <ButtonLink href="/contact">Contact</ButtonLink>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[220px] md:mx-0">
          <Image
            src={profile.profileImage}
            alt={`Profile photo of ${profile.name}`}
            width={220}
            height={220}
            sizes="(max-width: 768px) 180px, 220px"
            className="aspect-square w-full rounded-lg border border-slate-200 object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

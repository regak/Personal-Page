import Link from 'next/link';
import { profile } from '@/content/profile';

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="container-shell grid gap-4 py-8 text-sm text-slate-600 sm:grid-cols-2 sm:items-end">
        <div>
          <p className="font-medium text-slate-900">{profile.name}</p>
          <p>{profile.role}</p>
          <p>{profile.institution}</p>
        </div>
        <div className="sm:text-right">
          <p>
            <a href={`mailto:${profile.email}`} className="no-underline hover:underline">
              {profile.email}
            </a>
          </p>
          {profile.cvUrl ? (
            <Link href={profile.cvUrl} className="no-underline hover:underline">
              Download CV
            </Link>
          ) : null}
          <p className="mt-2 text-xs">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

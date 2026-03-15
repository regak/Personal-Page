'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  ['About', '/about'],
  ['Research', '/research'],
  ['Publications', '/publications'],
  ['Teaching', '/teaching'],
  ['Projects', '/projects'],
  ['Consultancy', '/consultancy'],
  ['Contact', '/contact'],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-shell py-4">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="text-lg font-semibold text-brand-700 no-underline hover:text-brand-500">
            Academic Portfolio
          </Link>
          <button
            type="button"
            className="rounded border border-slate-300 px-3 py-1 text-sm md:hidden"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={`${open ? 'mt-3 flex' : 'hidden'} flex-col gap-3 text-sm md:mt-3 md:flex md:flex-row md:flex-wrap md:gap-4`}
        >
          {navItems.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-sm px-1 text-slate-700 no-underline hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

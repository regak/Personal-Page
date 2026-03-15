import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-brand-700 text-white hover:bg-brand-500 border-transparent',
  secondary: 'border border-slate-300 text-slate-900 hover:bg-slate-100',
};

export function ButtonLink({ href, children, variant = 'secondary' }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`rounded-md px-4 py-2 text-sm font-medium no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 ${variantClasses[variant]}`}
    >
      {children}
    </Link>
  );
}

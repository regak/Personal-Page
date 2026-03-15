interface SourceAttributionProps {
  label: string;
  href: string;
}

export function SourceAttribution({ label, href }: SourceAttributionProps) {
  return (
    <p className="text-sm text-slate-600">
      Source:{' '}
      <a
        className="font-medium text-brand-700 no-underline hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {label}
      </a>
    </p>
  );
}

import { ReactNode } from 'react';

interface PageSectionProps {
  title: string;
  id: string;
  description?: string;
  children: ReactNode;
}

export function PageSection({ title, id, description, children }: PageSectionProps) {
  return (
    <section aria-labelledby={id} className="space-y-4">
      <div>
        <h2 id={id} className="text-2xl font-semibold text-slate-900">
          {title}
        </h2>
        {description ? <p className="mt-1 text-slate-700">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

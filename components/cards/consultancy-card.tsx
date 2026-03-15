import { ConsultancyItem } from '@/lib/types';

interface ConsultancyCardProps {
  item: ConsultancyItem;
}

export function ConsultancyCard({ item }: ConsultancyCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
      <p className="mt-1 text-sm text-slate-600">
        {item.client}
        {item.year ? ` · ${item.year}` : ''}
      </p>
      <p className="mt-2 text-sm text-slate-700">{item.summary}</p>
      <dl className="mt-4 space-y-1 text-sm text-slate-600">
        {item.role ? (
          <div>
            <dt className="inline font-medium text-slate-700">Role:</dt>{' '}
            <dd className="inline">{item.role}</dd>
          </div>
        ) : null}
        {item.outcome ? (
          <div>
            <dt className="inline font-medium text-slate-700">Outcome:</dt>{' '}
            <dd className="inline">{item.outcome}</dd>
          </div>
        ) : null}
      </dl>
      {item.tags?.length ? <p className="mt-3 text-sm text-slate-600">Tags: {item.tags.join(', ')}</p> : null}
    </article>
  );
}

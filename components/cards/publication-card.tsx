import { Publication } from '@/lib/types';

interface PublicationCardProps {
  item: Publication;
}

const typeLabels: Record<Publication['type'], string> = {
  journal: 'Journal Article',
  conference: 'Conference Paper',
  book: 'Book',
  'book-chapter': 'Book Chapter',
  report: 'Report',
  other: 'Other',
};

export function PublicationCard({ item }: PublicationCardProps) {
  const venue = item.venue ?? item.publisher ?? 'Venue to be confirmed';

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
      <p className="mt-1 text-sm text-slate-700">{item.authors.join(', ')}</p>
      <p className="mt-1 text-sm text-slate-600">
        {typeLabels[item.type]} · {venue} · {item.year}
      </p>

      {(item.doi || item.url || item.pdfUrl) ? (
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          {item.doi ? (
            <a
              href={`https://doi.org/${item.doi}`}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-brand-700 no-underline hover:underline"
            >
              DOI: {item.doi}
            </a>
          ) : null}
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-brand-700 no-underline hover:underline"
            >
              External Link
            </a>
          ) : null}
          {item.pdfUrl ? (
            <a
              href={item.pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-brand-700 no-underline hover:underline"
            >
              PDF
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}

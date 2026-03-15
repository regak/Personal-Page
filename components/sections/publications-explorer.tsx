'use client';

import { useMemo, useState } from 'react';
import { PublicationCard } from '@/components/cards/publication-card';
import { EmptyState } from '@/components/ui/empty-state';
import { Publication } from '@/lib/types';

interface PublicationsExplorerProps {
  items: Publication[];
}

const typeOptions: Array<{ value: Publication['type']; label: string }> = [
  { value: 'journal', label: 'Journal Article' },
  { value: 'conference', label: 'Conference Paper' },
  { value: 'book', label: 'Book' },
  { value: 'book-chapter', label: 'Book Chapter' },
  { value: 'report', label: 'Report' },
  { value: 'other', label: 'Other' },
];

export function PublicationsExplorer({ items }: PublicationsExplorerProps) {
  const [query, setQuery] = useState('');
  const [selectedType, setSelectedType] = useState<'all' | Publication['type']>('all');
  const [selectedYear, setSelectedYear] = useState<'all' | string>('all');

  const years = useMemo(() => {
    return Array.from(new Set(items.map((item) => String(item.year)))).sort((a, b) => Number(b) - Number(a));
  }, [items]);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      const matchesType = selectedType === 'all' || item.type === selectedType;
      const matchesYear = selectedYear === 'all' || String(item.year) === selectedYear;

      const searchableText = [item.title, ...(item.keywords ?? [])].join(' ').toLowerCase();
      const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);

      return matchesType && matchesYear && matchesQuery;
    });
  }, [items, query, selectedType, selectedYear]);

  return (
    <section aria-labelledby="publications-list-heading" className="space-y-5">
      <h2 id="publications-list-heading" className="sr-only">
        Publications List
      </h2>

      <form
        className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-3"
        onSubmit={(event) => event.preventDefault()}
      >
        <label className="space-y-1 text-sm text-slate-700" htmlFor="publication-search">
          <span className="font-medium">Search by title or keyword</span>
          <input
            id="publication-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="e.g., fairness, explainability"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          />
        </label>

        <label className="space-y-1 text-sm text-slate-700" htmlFor="publication-type">
          <span className="font-medium">Filter by type</span>
          <select
            id="publication-type"
            value={selectedType}
            onChange={(event) => setSelectedType(event.target.value as 'all' | Publication['type'])}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <option value="all">All types</option>
            {typeOptions.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1 text-sm text-slate-700" htmlFor="publication-year">
          <span className="font-medium">Filter by year</span>
          <select
            id="publication-year"
            value={selectedYear}
            onChange={(event) => setSelectedYear(event.target.value)}
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <option value="all">All years</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </label>
      </form>

      <p className="text-sm text-slate-600">
        Showing <span className="font-medium text-slate-900">{filtered.length}</span> of{' '}
        <span className="font-medium text-slate-900">{items.length}</span> publications.
      </p>

      {filtered.length ? (
        <div className="space-y-4">
          {filtered.map((item) => (
            <PublicationCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No publications match your filters"
          description="Try a different keyword, publication type, or year."
        />
      )}
    </section>
  );
}

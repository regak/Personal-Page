import { ResearchArea } from '@/lib/types';

interface ResearchCardProps {
  area: ResearchArea;
}

export function ResearchCard({ area }: ResearchCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="font-semibold text-slate-900">{area.title}</h3>
      <p className="mt-2 text-sm text-slate-700">{area.summary}</p>
      <p className="mt-3 text-sm text-slate-600">Keywords: {area.keywords.join(', ')}</p>
    </article>
  );
}

import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-700">{project.summary}</p>
      <dl className="mt-4 space-y-1 text-sm text-slate-600">
        <div>
          <dt className="inline font-medium text-slate-700">Role:</dt>{' '}
          <dd className="inline">{project.role ?? 'Contributor'}</dd>
        </div>
        {project.funder ? (
          <div>
            <dt className="inline font-medium text-slate-700">Funder:</dt>{' '}
            <dd className="inline">{project.funder}</dd>
          </div>
        ) : null}
      </dl>
    </article>
  );
}

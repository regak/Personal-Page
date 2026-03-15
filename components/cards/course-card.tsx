import { Course } from '@/lib/types';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">
        {course.code ? `${course.code}: ` : ''}
        {course.title}
      </h2>
      <p className="mt-2 text-sm text-slate-700">{course.description}</p>
      <dl className="mt-4 space-y-1 text-sm text-slate-600">
        <div>
          <dt className="inline font-medium text-slate-700">Level:</dt>{' '}
          <dd className="inline capitalize">{course.level}</dd>
        </div>
        {course.institution ? (
          <div>
            <dt className="inline font-medium text-slate-700">Institution:</dt>{' '}
            <dd className="inline">{course.institution}</dd>
          </div>
        ) : null}
        {course.yearOffered ? (
          <div>
            <dt className="inline font-medium text-slate-700">Years offered:</dt>{' '}
            <dd className="inline">{course.yearOffered}</dd>
          </div>
        ) : null}
      </dl>
      {course.topics?.length ? (
        <p className="mt-3 text-sm text-slate-600">Topics: {course.topics.join(', ')}</p>
      ) : null}
    </article>
  );
}

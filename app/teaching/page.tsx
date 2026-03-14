import { CourseCard } from '@/components/cards/course-card';
import { SectionHeading } from '@/components/sections/section-heading';
import { PageSection } from '@/components/sections/page-section';
import { EmptyState } from '@/components/ui/empty-state';
import { courses } from '@/content/courses';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Teaching',
  description: 'Courses taught, levels, and key topics.',
  path: '/teaching',
});

export default function TeachingPage() {
  return (
    <div className="space-y-10">
      <SectionHeading title="Teaching" description="Courses and learning areas currently taught." />

      <PageSection
        id="courses-heading"
        title="Courses"
        description="A teaching portfolio across undergraduate and postgraduate levels."
      >
        {courses.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <EmptyState title="No courses listed" description="Add course entries in content/courses.ts." />
        )}
      </PageSection>
    </div>
  );
}

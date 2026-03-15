import { Course } from '@/lib/types';

export const courses: Course[] = [
  {
    id: 'course-ml',
    code: 'CSC402',
    title: 'Machine Learning Foundations',
    level: 'undergraduate',
    description: 'Core supervised and unsupervised learning techniques with practical Python labs.',
    institution: 'Metropolitan University',
    yearOffered: '2024-2025',
    topics: ['linear models', 'trees', 'evaluation', 'ethics'],
  },
  {
    id: 'course-ai-ethics',
    code: 'CSC612',
    title: 'AI Ethics, Policy, and Governance',
    level: 'postgraduate',
    description: 'Policy-aware design and deployment of AI systems in regulated environments.',
    institution: 'Metropolitan University',
    yearOffered: '2023-2025',
    topics: ['risk assessment', 'governance', 'compliance'],
  },
];

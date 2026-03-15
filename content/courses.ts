import { Course } from '@/lib/types';

export const courses: Course[] = [
  {
    id: 'course-cs335',
    code: 'CS 335',
    title: 'Software Engineering',
    level: 'undergraduate',
    description:
      'A core course covering software engineering principles, process models, project management, quality assurance, and testing, with a strong emphasis on producing reliable, maintainable software.',
    institution: 'University of Dar es Salaam',
    yearOffered: '2025/2026',
    topics: [
      'software process models',
      'configuration management',
      'project management',
      'quality assurance',
      'testing strategies',
      'real-world software development',
    ],
  },
  {
    id: 'course-is673',
    code: 'IS 673',
    title: 'Machine Learning Algorithms',
    level: 'postgraduate',
    description:
      'A core machine learning course focusing on probabilistic models, algorithmic techniques for classification, regression, clustering, dimensionality reduction, and forecasting.',
    institution: 'University of Dar es Salaam',
    yearOffered: '2025/2026',
    topics: [
      'supervised/unsupervised learning',
      'classification algorithms',
      'regression and deep learning',
      'clustering techniques',
      'dimensionality reduction',
      'forecasting models',
    ],
  },
];

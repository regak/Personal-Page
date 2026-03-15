import { Publication } from '@/lib/types';

export const publications: Publication[] = [
  {
    id: 'pub-2025-1',
    title: 'Measuring Fairness Trade-offs in Public Service Recommendation Systems',
    authors: ['Amina Rahman', 'I. Tan', 'J. Lee'],
    year: 2025,
    type: 'journal',
    venue: 'Journal of Responsible AI Systems',
    doi: '10.1234/jrais.2025.001',
    abstract: 'Placeholder abstract describing fairness metrics and governance implications.',
    keywords: ['fairness', 'public services'],
    featured: true,
  },
  {
    id: 'pub-2024-1',
    title: 'Practical Explainability Patterns for University Learning Analytics',
    authors: ['Amina Rahman', 'S. Kumar'],
    year: 2024,
    type: 'conference',
    venue: 'International Conference on Learning Technologies',
    url: 'https://example.edu/publications/placeholder-2024',
    keywords: ['learning analytics', 'explainability'],
  },
  {
    id: 'pub-2023-1',
    title: 'A Policy-Driven Framework for AI Adoption in Municipal Agencies',
    authors: ['Amina Rahman', 'L. Wong', 'M. Aziz'],
    year: 2023,
    type: 'report',
    publisher: 'Urban Digital Futures Lab',
    pdfUrl: '/publications/policy-framework-placeholder.pdf',
  },
];

import { Project } from '@/lib/types';

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Transparent Admissions Decision Support',
    summary:
      'Designing interpretable models for student admissions triage with fairness and bias mitigation controls.',
    role: 'Principal Investigator',
    collaborators: ['Ministry of Education Analytics Unit'],
    funder: 'National Higher Education Innovation Grant',
    startDate: '2024-01',
    endDate: '2025-12',
    technologies: ['Python', 'Scikit-learn', 'SHAP'],
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Community Health Demand Forecasting',
    summary: 'Forecasting district-level clinic demand to support staffing and supply planning decisions.',
    role: 'Research Lead',
    collaborators: ['City Health Office'],
    startDate: '2023-03',
    endDate: '2024-10',
    technologies: ['Time series', 'Dashboards'],
  },
];

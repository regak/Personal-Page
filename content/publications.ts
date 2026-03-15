import { Publication } from '@/lib/types';

export const publications: Publication[] = [
  {
    id: 'pub-2012-sltu',
    title: 'Web-Based Acquisition for Swahili Language Modelling',
    authors: ['Alexander Kivaisi', 'Audrey Mbogho'],
    year: 2012,
    type: 'conference',
    venue: 'SLTU',
    keywords: ['Swahili', 'language modelling'],
  },
  {
    id: 'pub-2023-acm',
    title: 'Swahili Speech Dataset Development and Improved Pre-training Method for Spoken Digit Recognition',
    authors: ['Alexander R. Kivaisi', 'Qingjie Zhao', 'Jimmy T. Mbelwa'],
    year: 2023,
    type: 'journal',
    venue: 'ACM Transactions on Asian and Low-Resource Language Information Processing',
    doi: '10.1145/3603704',
    keywords: ['Swahili speech', 'dataset development', 'pre-training'],
    featured: true,
  },
  {
    id: 'pub-2024-tsinghua',
    title: 'Multi-task Convmixer Networks with Triplet Attention for Low-Resource Keyword Spotting',
    authors: ['Alexander Rogath Kivaisi', 'Qingjie Zhao', 'Yuanbing Zou'],
    year: 2024,
    type: 'journal',
    venue: 'Tsinghua Science and Technology',
    keywords: ['keyword spotting', 'low-resource', 'ConvMixer'],
  },
  {
    id: 'pub-2024-eswa',
    title: 'Improved Mini-batch Multiple Augmentation for Low-Resource Spoken Word Recognition',
    authors: ['Alexander Rogath Kivaisi', 'Qingjie Zhao'],
    year: 2024,
    type: 'journal',
    venue: 'Expert Systems With Applications',
    doi: '10.1016/j.eswa.2024.124157',
    keywords: ['spoken word recognition', 'data augmentation', 'low-resource'],
    featured: true,
  },
];


import { ResearchArea } from '@/lib/types';

export const researchAreas: ResearchArea[] = [
  {
    id: 'swahili-speech-recognition',
    title: 'Swahili Speech Recognition',
    summary: 'Enhancing Swahili speech recognition systems through dataset development, advanced pre-training techniques, and data augmentation strategies for low-resource speech tasks.',
    keywords: ['Swahili', 'speech recognition', 'low-resource languages', 'pre-training', 'data augmentation'],
    relatedPublicationIds: ['pub-2023-acm'],
    relatedProjectIds: ['project-visually-impaired-app'],
  },
  {
    id: 'low-resource-language-processing',
    title: 'Low-Resource Language Processing',
    summary: 'Applying machine learning techniques to low-resource languages, focusing on improving spoken word recognition, keyword spotting in noisy environments, and multi-task learning.',
    keywords: ['low-resource languages', 'machine learning', 'spoken word recognition', 'keyword spotting', 'multi-task learning'],
    relatedPublicationIds: ['pub-2024-tsinghua', 'pub-2024-eswa'],
  },
  {
    id: 'speech-intent-classification',
    title: 'Speech Intent Classification',
    summary: 'Developing models for accurate identification of user intentions in spoken Swahili, with applications in voice assistants, call center automation, and accessibility tools.',
    keywords: ['speech intent', 'Swahili', 'voice assistants', 'accessibility'],
  },
  {
    id: 'deepfake-audio-detection',
    title: 'Deepfake Audio Detection',
    summary: 'Investigating techniques for detecting synthetic or manipulated audio in Swahili, addressing challenges in generative AI and misinformation.',
    keywords: ['deepfake detection', 'audio manipulation', 'Swahili', 'generative AI'],
  },
];


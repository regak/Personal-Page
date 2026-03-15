export interface LecturerProfile {
  name: string;
  title: string;
  role: string;
  institution: string;
  department?: string;
  location?: string;
  email: string;
  phone?: string;
  shortBio: string;
  longBio: string;
  profileImage: string;
  cvUrl?: string;
  links: {
    scholar?: string;
    orcid?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface ResearchArea {
  id: string;
  title: string;
  summary: string;
  keywords: string[];
  relatedPublicationIds?: string[];
  relatedProjectIds?: string[];
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  year: number;
  type: 'journal' | 'conference' | 'book' | 'book-chapter' | 'report' | 'other';
  venue?: string;
  publisher?: string;
  doi?: string;
  url?: string;
  pdfUrl?: string;
  abstract?: string;
  keywords?: string[];
  featured?: boolean;
}

export interface Course {
  id: string;
  code?: string;
  title: string;
  level: 'undergraduate' | 'postgraduate' | 'professional';
  description: string;
  institution?: string;
  yearOffered?: string;
  syllabusUrl?: string;
  topics?: string[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  role?: string;
  collaborators?: string[];
  funder?: string;
  startDate?: string;
  endDate?: string;
  technologies?: string[];
  outcomes?: string[];
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export interface ConsultancyItem {
  id: string;
  client: string;
  title: string;
  summary: string;
  role?: string;
  year?: string;
  outcome?: string;
  tags?: string[];
}

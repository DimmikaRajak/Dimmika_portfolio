export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  role?: string;
  category: 'Full-Stack' | 'AI / ML' | 'Patent' | 'Web Apps';
  techStack: string[];
  patentNumber?: string;
  wileyRef?: string;
  liveUrl?: string;
  githubUrl?: string;
  metrics: string[];
  description: string;
  bulletPoints: string[];
  architectureDetails: {
    frontend?: string;
    backend?: string;
    aiCloud?: string;
    database?: string;
  };
  featured?: boolean;
}

export interface ResearchItem {
  id: string;
  type: 'Patent' | 'Book Chapter';
  title: string;
  referenceId: string;
  status: string;
  date: string;
  coAuthors: string[];
  organization: string;
  field: string[];
  description: string;
  keyContributions: string[];
  impact: string;
  patentApplicationNo?: string;
  publicationDate?: string;
  filingDate?: string;
  internationalClassification?: string[];
  applicant?: string;
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Remote' | 'On-site' | 'Hybrid';
  badge: string;
  certificateId?: string;
  bulletPoints: string[];
  skillsGained: string[];
}

export interface Hackathon {
  id: string;
  title: string;
  organizer: string;
  date: string;
  badge: string;
  certificateId?: string;
  description: string;
  highlights: string[];
  skillsGained?: string[];
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'Cloud & AWS' | 'AI / ML & Data' | 'Web & IoT' | 'Academic & Research';
  credentialUrl?: string;
  certificateId?: string;
  highlight?: boolean;
  hours?: string;
  grade?: string;
  instructorOrSpeaker?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    category: string;
    highlight?: boolean;
  }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  category: 'Hiring / Full-Time Role' | 'Freelance / Contract' | 'Research & Patent Collaboration' | 'Mentorship & General';
  message: string;
}

export interface StoredContactMessage extends ContactFormData {
  id: string;
  timestamp: string;
  read: boolean;
}

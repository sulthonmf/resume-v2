export interface Contact {
  email: string;
  phone: string;
  website: string;
  url: string;
  cvUrl?: string;
}

export interface Stat {
  label: string;
  value: string;
  sub: string;
  theme: 'yellow' | 'accent';
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  current: boolean;
}

export interface TechStackItem {
  category: string;
  name: string;
  sub: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  isCurrent: boolean;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  bio: string;
  contact: Contact;
  stats: Stat[];
  education: Education[];
  techStack: TechStackItem[];
  experience: ExperienceItem[];
}

export interface Project {
  id: number;
  title: string;
  client: string;
  type: 'web' | 'mobile';
  year: string;
  category: string;
  description: string;
  badges: string[];
  // For web applications
  webUrl?: string;
  webTitle?: string;
  webMetrics?: string[];
  webTag?: string;
  webDesc?: string;
  // For mobile applications
  appTitle?: string;
  appBannerTitle?: string;
  appBannerSub?: string;
  feat1?: string;
  feat2?: string;
  feat3?: string;
  // Visuals and Store Redirects
  image?: string;
  isConfidential?: boolean;
  playStoreUrl?: string;
  appStoreUrl?: string;
  allowLivePreview?: boolean;
  note?: string;
}

export interface LanguagePack {
  profile: Profile;
  projects: Project[];
}

export interface PortfolioData {
  id: LanguagePack;
  en: LanguagePack;
}

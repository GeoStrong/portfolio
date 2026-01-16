export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
}

export interface Project {
  title: string;
  date: string;
  description: string[];
  github?: string;
  demo?: string;
  tags: string[];
  imgSrc?: string;
}

export interface SkillCategory {
  name: string;
  skills: Array<{ name: string; proficiency: number }>;
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  period: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
  linkedin?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  icon?: string;
}

export interface Achievement {
  title: string;
  value: string | number;
  suffix?: string;
  description: string;
  icon: string;
}

export interface Article {
  title: string;
  platform: string;
  url: string;
  date: string;
  readTime?: string;
  thumbnail?: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  type: "education" | "work" | "project" | "achievement";
  icon?: string;
}

export interface SkillWithProficiency {
  name: string;
  proficiency: number; // 1-100
}

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
  skills: string[];
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

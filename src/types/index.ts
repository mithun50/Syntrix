export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: "cyan" | "purple" | "magenta";
  features: string[];
  process: ProcessStep[];
  subServices: SubService[];
}

export interface SubService {
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  client: string;
  year: string;
  challenge: string;
  solution: string;
  results: string[];
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials: { platform: string; url: string }[];
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: string;
  image?: string;
}

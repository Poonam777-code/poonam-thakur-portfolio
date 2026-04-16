export interface Project {
  id: number;
  title: string;
  year: number;
  tag?: string;
  description: string[];
  techStack: string[];
  link?: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

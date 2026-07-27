export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  role: string;
  challenge: string;
  process: string[];
  solution: string;
  metrics?: { label: string; value: string }[];
  color: {
    bg: string;
    text: string;
    border: string;
    accent: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
  current?: boolean;
}

export interface Skill {
  name: string;
  category: 'core' | 'tool' | 'methodology';
  color: string;
}

export type ActiveTab = 'work' | 'about' | 'resume' | 'contact';

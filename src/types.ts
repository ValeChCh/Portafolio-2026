export interface ProjectMetaRow {
  label: string;
  value: string;
  /** Si existe, el valor se renderiza como enlace externo */
  href?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  /** Galería del case study (carrusel del modal). Si falta, se usa `image`. */
  images?: string[];
  role: string;
  challenge: string;
  /** Título de la sección de problema (si falta, usa el string i18n genérico) */
  challengeTitle?: string;
  /** Subtítulo bajo el título de la sección de problema / desafío */
  challengeSubtitle?: string;
  /** Bloques adicionales debajo del párrafo principal */
  challengeFollowUp?: {
    title?: string;
    body?: string;
    columns?: { heading?: string; text: string }[];
  }[];
  process: string[];
  solution: string;
  metrics?: {
    label: string;
    /** Número/KPI; se omite visualmente si hay `icon` */
    value?: string;
    /** Nombre de ícono Lucide (p. ej. timer) en lugar del value */
    icon?: 'timer' | 'shield-check' | 'bot';
  }[];
  /** Tabla Meta / Valor del case study (p. ej. Shuttle Central) */
  meta?: ProjectMetaRow[];
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

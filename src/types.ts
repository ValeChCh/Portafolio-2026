export interface ProjectMetaRow {
  label: string;
  value: string;
  /** Si existe, el valor se renderiza como enlace externo */
  href?: string;
}

export type CaseStudyIconId =
  | 'timer'
  | 'shield-check'
  | 'bot'
  | 'user-cog'
  | 'scale'
  | 'landmark'
  | 'layout-panel'
  | 'users'
  | 'message-square'
  | 'boxes'
  | 'layers'
  | 'currency'
  | 'list-checks'
  | 'eraser'
  | 'zap'
  | 'scan-eye'
  | 'target'
  | 'lightbulb'
  | 'map'
  | 'search'
  | 'flask'
  | 'palette'
  | 'smartphone'
  | 'check-circle'
  | 'rocket'
  | 'alert'
  | 'route'
  | 'clipboard'
  | 'sticky-note'
  | 'pen-tool'
  | 'gauge'
  | 'sparkles'
  | 'heart-handshake'
  | 'building';

export interface CaseStudyItem {
  /** Si falta, se muestra número o solo texto */
  icon?: CaseStudyIconId;
  /** Fondo del círculo del ícono (hex). Default: #8F9DE2 */
  iconBg?: string;
  title: string;
  text: string;
}

export interface CaseStudySection {
  number: string;
  title: string;
  kicker?: string;
  body?: string;
  itemsTitle?: string;
  footnote?: string;
  /** Pasos de proceso como esquema visual (reemplaza footnote de texto plano) */
  processSteps?: { title: string; icon: CaseStudyIconId }[];
  processLabel?: string;
  href?: string;
  hrefLabel?: string;
  /** Imagen full-bleed alusiva o UI */
  image?: string;
  /** Posición de la imagen respecto al body. Default: before */
  imagePlacement?: 'before' | 'after';
  /** object-position Tailwind (p. ej. object-right). Default: object-top */
  imageObjectPosition?: string;
  /** Si true, la imagen usa h-auto object-contain (sin crop 16:9) */
  imageContain?: boolean;
  /** Reserva un slot vacío (borde punteado) para colocar imagen después */
  imagePlaceholder?: boolean;
  /** Galería de pantallas / wireframes */
  gallery?: string[];
  /** Índices (0-based) de la galería que ocupan todo el ancho del grid */
  galleryFullWidthIndexes?: number[];
  /** Si true, las celdas de la galería no llevan borde negro */
  galleryBorderless?: boolean;
  /** Si true, todas las imágenes van en un solo contenedor (no celdas separadas) */
  galleryUnified?: boolean;
  /** Índices (0-based) centrados en su celda al 40% del ancho (reduce ~60%) */
  galleryCenteredIndexes?: number[];
  /** Escala por índice (0-based → % de ancho). Si existe, centra la imagen en la celda. */
  galleryScaleByIndex?: Record<number, number>;
  /** Alineación horizontal en celdas con escala: start | center | end */
  galleryJustifyByIndex?: Record<number, 'start' | 'center' | 'end'>;
  accent?: 'white' | 'pink' | 'cyan' | 'mint' | 'lilac';
  items?: CaseStudyItem[];
  /** Si true, las cards de `items` no llevan borde negro */
  itemsBorderless?: boolean;
  /** Si true, items en una sola columna (ancho completo, apilados) */
  itemsStacked?: boolean;
  groups?: { title: string; items: CaseStudyItem[] }[];
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
  /** Layout del hero/carrusel. `phone` = pantallas verticales sin crop wide. */
  galleryLayout?: 'wide' | 'phone';
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
  /**
   * Narrativa Behance (slides). Si existe, reemplaza challenge/process/solution/metrics
   * en el modal del case study.
   */
  caseStudySections?: CaseStudySection[];
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

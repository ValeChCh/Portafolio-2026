import { Project, Experience, Skill } from './types';

export const VALERIA_PROFILE = {
  name: "Valeria",
  title: "Product Designer",
  email: "Valechchh05@gmail.com",
  avatar: "/src/assets/images/valeria_avatar.jpg",
  bio: "Diseñando experiencias digitales intuitivas y sistemas escalables que conectan a las personas con la tecnología de manera significativa.",
  aboutDetailed: "Trabajo especialmente en el aspecto visual y funcional de productos digitales, me gusta aplicar metodologías ágiles para optimizar el desarrollo de los proyectos y así entender los requerimientos de los stakeholder y sobre todo de los usuario. Busco implementar mis ideas en proyectos dinámicos y trabajar con equipos divertidos.",
  location: "Ciudad de México, México (Remoto para todo el mundo)",
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Behance", url: "https://behance.net", icon: "ExternalLink" },
    { name: "Email", url: "mailto:ValeChCh05@gmail.com", icon: "Mail" }
  ]
};

export const CORE_SKILLS: Skill[] = [
  { name: "Figma", category: "core", color: "bg-purple-100 text-purple-800 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-900/50" },
  { name: "Research", category: "core", color: "bg-rose-100 text-rose-800 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-900/50" },
  { name: "Design Systems", category: "core", color: "bg-cyan-100 text-cyan-800 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-900/50" },
  { name: "Prototyping", category: "core", color: "bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-900/50" },
  { name: "UI Design", category: "core", color: "bg-indigo-100 text-indigo-800 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-900/50" },
  { name: "User Testing", category: "core", color: "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-900/50" }
];

export const PROJECTS: Project[] = [
  {
    id: "findash-global",
    title: "FinDash Global",
    description: "Rediseño completo de la plataforma de análisis financiero, mejorando la eficiencia del usuario en un 40% mediante una arquitectura de información optimizada.",
    category: "Fintech",
    tags: ["Fintech", "Dashboard"],
    image: "/src/assets/images/findash_global_1784586264509.jpg",
    images: [
      "/src/assets/images/findash_global_1784586264509.jpg",
      "/src/assets/images/vitality_tracker_1784586273218.jpg",
      "/src/assets/images/lumina_store_1784586282264.jpg"
    ],
    role: "Líder de Diseño de Producto",
    challenge: "Los analistas financieros pasaban más de 25 minutos intentando compilar informes debido a una interfaz fragmentada y confusa. La plataforma original carecía de personalización y no era responsiva, lo que provocaba una tasa de abandono alta.",
    process: [
      "Investigación con 12 analistas financieros mediante mapas de empatía y pruebas de usabilidad del sistema antiguo.",
      "Definición de arquetipos de usuario y rediseño completo de la arquitectura de información mediante card sorting.",
      "Creación de prototipos de alta fidelidad iterados a través de pruebas de usabilidad periódicas con feedback directo.",
      "Documentación exhaustiva del sistema de componentes en Figma para agilizar la entrega técnica a desarrollo."
    ],
    solution: "Se creó un panel unificado personalizable con widgets de arrastrar y soltar, que permite a los usuarios estructurar sus vistas de datos prioritarios en segundos. Además, se simplificó el módulo de exportación de informes en PDF/Excel a un solo clic.",
    metrics: [
      { label: "Tiempo para generar reportes", value: "-60%" },
      { label: "Satisfacción de usuario (SUS)", value: "92/100" },
      { label: "Eficiencia operativa", value: "+40%" }
    ],
    color: {
      bg: "bg-blue-50/50 dark:bg-blue-950/10",
      text: "text-blue-700 dark:text-blue-400",
      border: "border-blue-100 dark:border-blue-900/30",
      accent: "bg-blue-600 hover:bg-blue-700 text-white"
    }
  },
  {
    id: "vitality-tracker",
    title: "Vitality Tracker",
    description: "Aplicación móvil para el seguimiento del bienestar holístico. Implementación de un sistema de diseño propio y flujos de onboarding gamificados.",
    category: "Health",
    tags: ["Health", "Mobile App"],
    image: "/src/assets/images/vitality_tracker_1784586273218.jpg",
    images: [
      "/src/assets/images/vitality_tracker_1784586273218.jpg",
      "/src/assets/images/findash_global_1784586264509.jpg",
      "/src/assets/images/lumina_store_1784586282264.jpg"
    ],
    role: "Senior Product Designer",
    challenge: "Los usuarios que descargaban la app a menudo la abandonaban durante el primer día. El flujo de registro era demasiado largo y pedía datos de salud delicados sin explicar el valor añadido, generando desconfianza.",
    process: [
      "Análisis de la tasa de rebote por pantalla en el túnel de registro original.",
      "Rediseño de los flujos de onboarding introduciendo micro-interacciones lúdicas, barras de progreso y explicaciones claras sobre la privacidad de datos.",
      "Diseño de un sistema visual con paletas cromáticas calmantes y tipografía de lectura rápida para reducir la ansiedad del usuario."
    ],
    solution: "Se transformó el onboarding en una experiencia conversacional y amigable con recompensas instantáneas (gamificación). Se redujo el número de preguntas iniciales a las estrictamente necesarias, dejando el resto para flujos progresivos dentro de la app.",
    metrics: [
      { label: "Retención en el Día 7", value: "+55%" },
      { label: "Completitud del perfil", value: "88%" },
      { label: "Calificación en App Store", value: "4.8★" }
    ],
    color: {
      bg: "bg-emerald-50/50 dark:bg-emerald-950/10",
      text: "text-emerald-700 dark:text-emerald-400",
      border: "border-emerald-100 dark:border-emerald-900/30",
      accent: "bg-emerald-600 hover:bg-emerald-700 text-white"
    }
  },
  {
    id: "lumina-store",
    title: "Lumina Store",
    description: "Transformación de la experiencia de compra online para una marca de iluminación premium, enfocada en la reducción de la fricción en el checkout.",
    category: "E-Commerce",
    tags: ["E-Commerce", "Web"],
    image: "/src/assets/images/lumina_store_1784586282264.jpg",
    images: [
      "/src/assets/images/lumina_store_1784586282264.jpg",
      "/src/assets/images/findash_global_1784586264509.jpg",
      "/src/assets/images/vitality_tracker_1784586273218.jpg"
    ],
    role: "Lead UX/UI Designer",
    challenge: "Lumina, una marca de iluminación y mobiliario de alta gama, tenía visitas abundantes pero una tasa de conversión baja en móviles. El proceso de pago requería rellenar demasiados campos obligatorios en páginas sucesivas lentas.",
    process: [
      "Auditoría heurística móvil y grabación de sesiones de usuario con herramientas analíticas.",
      "Diseño de un flujo de pago en una sola pantalla colapsable de carga rápida.",
      "Implementación de autocompletado inteligente de direcciones y pasarelas de pago express (Apple Pay, Google Pay).",
      "Pruebas A/B semanales del nuevo flujo comparado con el checkout heredado."
    ],
    solution: "Un rediseño minimalista de la página del carrito y del checkout donde toda la información de entrega, envío y pago se consolida en una sola columna interactiva e inteligente con validación de errores en tiempo real.",
    metrics: [
      { label: "Tasa de conversión móvil", value: "+32%" },
      { label: "Abandono del carrito", value: "-25%" },
      { label: "Tiempo promedio de checkout", value: "1.5 min" }
    ],
    color: {
      bg: "bg-amber-50/50 dark:bg-amber-950/10",
      text: "text-amber-700 dark:text-amber-400",
      border: "border-amber-100 dark:border-amber-900/30",
      accent: "bg-amber-600 hover:bg-amber-700 text-white"
    }
  }
];

export const EXPERIENCE_HISTORY: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Product Designer",
    company: "BBVA",
    duration: "2024 - Presente",
    description: [
      "Diseñé 2 flujos principales dentro del crédito de la banca mayorísta para ejecutivos de cuenta dentro del banco, para migrar procesos manuales a plataformas conectadas entre sí para reducir los procesos en un 50%.",
      "Colaboro estrechamente con ingenieros, gerentes de producto y directivos para conceptualizar, diseñar y validar soluciones escalables dentro de Salesforce como para aplicativos propios del banco."
    ],
    current: true
  },
  {
    id: "exp-2",
    role: "Senior Product Designer",
    company: "TS4 Strategy",
    duration: "2022 - 2024",
    description: [
      "Bestel - Colaboré en las primeras etapas con stakeholders para el mapeo de su proceso ASIS y Costumer Journeys detectando áreas de mejora para migrar procesos aislados y desconectados a Salesforce.",
      "Interceramic- Rediseñé el sitio web detectando mejoras de accesibilidad y destacando el diferenciador que fue llevar la experiencia de tienda a la web aumentándo las visitas al sitio en un 12%.",
      "Soriana- Diseñé la implementación de nuevos features como el rediseño de las cards, optimización del carrito y seguimiento de envío. Se aumento en un 10% el CSAT."
    ]
  },
  {
    id: "exp-3",
    role: "Product Designer",
    company: "Shuttle Central",
    duration: "2020 - 2022",
    description: [
      "Diseñé la Web App de reservación aumentando la conversión en un 20%",
      "Desarrollé prototipos de alta fidelidad interactivos de micro-interacciones clave para aumentar el enganche emocional del comprador.",
      "Colaboré en flujos de optimización de conversión (CRO) mediante mapas de calor y grabaciones del comportamiento de los usuarios."
    ]
  }
];

export const EDUCATION_HISTORY = [
  {
    degree: "Especialización en Sistemas de Diseño y UX Avanzado",
    institution: "Interaction Design Foundation (IxDF)",
    duration: "2021"
  },
  {
    degree: "Licenciatura en Diseño con mención en Interacción Digital",
    institution: "Universidad de Diseño y Tecnología",
    duration: "2016 - 2020"
  }
];

export const METHODOLOGIES = [
  "User-Centered Design",
  "Design Thinking",
  "Lean UX",
  "Agile / Scrum Integration",
  "A/B Testing",
  "Interactive Prototyping",
  "Heuristic Evaluation",
  "Information Architecture"
];

export const DESIGN_TOOLS = [
  "Figma (Pro / Components Master)",
  "Adobe Creative Suite",
  "Miro / FigJam"
];

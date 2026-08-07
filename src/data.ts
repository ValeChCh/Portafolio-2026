import { Project, Experience, Skill } from './types';
import { SHUTTLE_CASE_SECTIONS_ES } from './data/shuttleCaseStudy';
import { SORIANA_CASE_SECTIONS_ES } from './data/sorianaCaseStudy';
import { VIVA_CASE_SECTIONS_ES } from './data/vivaCaseStudy';

export const VALERIA_PROFILE = {
  name: "Valeria",
  title: "Sr. Product Designer",
  email: "Valechch05@gmail.com",
  avatar: "/images/valeria_avatar.jpg",
  bio: "Diseñando experiencias digitales intuitivas y sistemas escalables que conectan a las personas con la tecnología de manera significativa.",
  aboutDetailed:
    "Diseño producto digital de punta a punta: discovery, definición de oportunidades y UI que se sostiene en delivery. Colaboro con Product Owners, negocio y desarrollo para alinear requerimientos de stakeholders con necesidades reales de usuarios — y convertirlas en decisiones medibles. Busco entornos donde el diseño opera con ownership, ritmo ágil y foco en impacto, no solo en pantallas.",
  location: "Ciudad de México, México (Remoto para todo el mundo)",
  socials: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/valechch/", icon: "Linkedin" },
    { name: "Behance", url: "https://www.behance.net/valechch", icon: "ExternalLink" },
  ]
};

export const CORE_SKILLS: Skill[] = [
  { name: "Figma", category: "core", color: "bg-purple-100 text-purple-800 border-purple-200 "},
  { name: "Research", category: "core", color: "bg-rose-100 text-rose-800 border-rose-200 "},
  { name: "Design Systems", category: "core", color: "bg-cyan-100 text-cyan-800 border-cyan-200 "},
  { name: "Prototyping", category: "core", color: "bg-amber-100 text-amber-800 border-amber-200 "},
  { name: "UI Design", category: "core", color: "bg-indigo-100 text-indigo-800 border-indigo-200 "},
  { name: "User Testing", category: "core", color: "bg-emerald-100 text-emerald-800 border-emerald-200 "}
];

export const PROJECTS: Project[] = [
  {
    id: "findash-global",
    title: "Banco",
    description:
      "Sanción de sublímites en Salesforce\nCómo diseñé el flujo para sublímites dentro del proceso de sanción de crédito para eliminar procesos manuales entre ejecutivo de cuenta y áreas de riesgos.",
    category: "Banca",
    tags: ["Banca", "Salesforce", "B2B", "Product Design"],
    image: "/images/bbva_mockup.jpg",
    images: ["/images/bbva_mockup.jpg"],
    role: "Sr. Product Designer",
    challenge: "",
    process: [],
    solution: "",
    meta: [
      { label: "Rol", value: "Sr. Product Designer" },
      { label: "Empresa", value: "Banco" },
      { label: "Foco", value: "Flujo E2E · Gobernanza · Salesforce" },
      { label: "Alcance", value: "Flujo E2E · Gobernanza · Salesforce" },
    ],
    caseStudySections: [
      {
        number: "01",
        title: "El problema de negocio",
        kicker: "Contexto",
        accent: "white",
        body: "El tiempo en el que un ejecutivo de cuenta otorga un crédito puede tardar de 3 a 6 meses aproximadamente dependiendo del tipo cliente. Dentro de ese proceso de crédito, hay una serie de pasos que se requieren agilizar, estandarizar y automatizar para reducir el tiempo en cuando menos un 50%; uno de esos pasos es la gestión de sublímites de crédito.\n\nTradicionalmente, la asignación y gestión de sublímites implicaba procesos manuales complejos (plantillas complejas de excel), duplicidad en la captura de datos en word (formatos del ejecutivo y del área de riesgos similares), y comunicación desestandarizada entre áreas que no eran medibles. Esto implicaba demoras para que el sublímite se sancionara y que el ejecutivo de cuenta pudiera seguir con el siguiente paso para liberar un crédito.\n\nConstraint: el rediseño debía respetar gobernanza de riesgo y medición del proceso al migrar a Salesforce.",
        itemsTitle: "Objetivos del producto",
        items: [
          {
            icon: "timer",
            title: "Acelerar contratación",
            text: "Liberar operación del Ejecutivo de Cuenta para enfocar más tiempo en el cliente.",
          },
          {
            icon: "shield-check",
            title: "Autonomía operativa",
            text: "Operar bajo un límite de crédito sancionado previamente, con control de riesgo.",
          },
          {
            icon: "bot",
            title: "Menos fricción técnica",
            text: "Automatizar reglas y validaciones para estandarizar la captura en un solo sistema y destinar espacios de conversaciones medibles (Salesforce).",
          },
        ],
      },
      {
        number: "02",
        title: "Usuarios y gobernanza",
        kicker: "Research",
        accent: "white",
        body: "Para diseñar una herramienta E2E, alineamos los perfiles del circuito operativo. El producto no es “una pantalla”: es un flujo con permisos, dictámenes y sanción.",
        image: "/images/banco_story_proceso_credito_es.png",
        imagePlacement: "after",
        imageContain: true,
        items: [
          {
            icon: "user-cog",
            title: "Ejecutivo de Cuenta (EC)",
            text: "Alta rápida del crédito y detalle del sublímite ligado a ese crédito.",
          },
          {
            icon: "scale",
            title: "Secretaría Técnica y Asesor de Riesgos",
            text: "Evaluar propuesta, revisar anexos y emitir dictamen claro (aprobar / rechazar).",
          },
          {
            icon: "landmark",
            title: "Comité / Instancia de Sanción",
            text: "Vista unificada y estructurada para aprobar el riesgo.",
          },
        ],
      },
      {
        number: "03",
        title: "Mi rol y ownership",
        kicker: "Product Design",
        accent: "white",
        body: "Lideré la experiencia de producto en el flujo de sublímites y sanción: arquitectura de información por perfil/permisos, mesas con negocio y tecnología, y estandarización de lenguaje en UI.",
        items: [
          {
            icon: "layout-panel",
            title: "Arquitectura por perfil",
            text: "Diseño del flujo E2E para sublímites acorde al perfil (EC, Riesgos).",
          },
          {
            icon: "users",
            title: "Colaboración transversal",
            text: "Mesas de definición con Stakeholders acotando las reglas y los must del flujo, definición de arquitectura con área de desarrollo, acercamiento y feedback con usuarios (EC / Riesgos).",
          },
          {
            icon: "message-square",
            title: "UX Writing operativo",
            text: "Implementación de instrucciones dentro del flujo, especificaciones y descripciones para cada sección y homologación de conceptos para las áreas.",
          },
        ],
      },
      {
        number: "04",
        title: "Decisiones de producto clave",
        kicker: "Trade-offs",
        accent: "white",
        body: "Tres decisiones que definen el valor del producto — no solo “mejor UI”, sino operación medible dentro de Salesforce.",
        items: [
          {
            icon: "boxes",
            title: "Un solo frontal medible",
            text: "Migrar la sanción a Salesforce reuniendo la información necesaria en un solo front, manteniendo la medición del proceso.",
          },
          {
            icon: "pen-tool",
            title: "Flujo fácil de completar",
            text: "Parametrizar validaciones y auto-completar campos obligatorios según lo llenado en procesos previos a los sublímites.",
          },
          {
            icon: "message-square",
            title: "Chat transversal medible",
            text: "Espacio en el flujo para que las áreas ajusten datos sin chats fuera del sistema.",
          },
        ],
      },
      {
        number: "05",
        title: "Solución en producto",
        kicker: "UI / Salesforce",
        accent: "white",
        image: "/images/bbva_mockup.jpg",
        items: [
          {
            icon: "eraser",
            title: "Sin formatos manuales duplicados",
            text: "La captura vive en el sistema; la información queda transparente para cada perfil.",
          },
          {
            icon: "scan-eye",
            title: "Decisión con contexto",
            text: "Visión unificada de sublímites e información financiera para dictamen y sanción.",
          },
          {
            icon: "message-square",
            title: "Comunicación entre áreas",
            text: "Chat unificado donde todos los involucrados estarán enterados de los avances y/o modificaciones de los sublímites.",
          },
        ],
      },
      {
        number: "06",
        title: "Resultados y aprendizajes",
        kicker: "Impacto",
        accent: "white",
        items: [
          {
            icon: "target",
            title: "Outcome buscado",
            text: "Menos redundancia, más velocidad E2E y claridad para sancionar con el mismo control de riesgo.",
          },
          {
            icon: "target",
            title: "Resultados en pruebas",
            text: "Los primeros acercamientos con EC demuestran una TSR de un 84%.",
          },
          {
            icon: "sticky-note",
            title: "Aprendizaje",
            text: "A pesar de que Salesforce es una herramienta eficiente y poderosa, tuve ciertas limitantes a la hora de proponer elementos UI ya que la personalización puede ser limitada o implicaba demoras en desarrollo.",
          },
        ],
      },
    ],
    color: {
      bg: "bg-blue-50/50",
      text: "text-blue-700",
      border: "border-blue-100",
      accent: "bg-blue-600 hover:bg-blue-700 text-white",
    },
  },
  {
    id: "vitality-tracker",
    title: "Shuttle Central",
    description:
      "Self-service para viajeros\nCómo diseñé el portal que confirma datos críticos de transfers reservados vía OTAs y reduce fricción operativa.",
    category: "Traveltech",
    tags: ["Traveltech", "Web App", "UX Research", "Design System"],
    image: "/images/shuttle_central_hero.png",
    images: [
      "/images/shuttle_central_hero.png",
      "/images/shuttle_central_inicio.png",
      "/images/shuttle_central_ticket.png",
      "/images/shuttle_central_schedule.png",
      "/images/shuttle_central_styleguide.png"
    ],
    galleryLayout: "wide",
    role: "Sr. Product Designer (end-to-end)",
    challenge: "",
    process: [],
    solution: "",
    meta: [
      { label: "Rol", value: "Sr. Product Designer · End-to-end" },
      { label: "Empresa", value: "Shuttle Central (YC W22)" },
      { label: "Foco", value: "Research · UX · UI · Validación" },
    ],
    caseStudySections: SHUTTLE_CASE_SECTIONS_ES,
    color: {
      bg: "bg-emerald-50/50",
      text: "text-emerald-700",
      border: "border-emerald-100",
      accent: "bg-emerald-600 hover:bg-emerald-700 text-white"
    }
  },
  {
    id: "viva-white-label",
    title: "Viva Aerobus",
    description:
      "White label de transfers\nCómo adapté la plataforma de ventas de Shuttle Central al design system de Viva Aerobus para fortalecer la alianza comercial.",
    category: "Traveltech",
    tags: ["Traveltech", "White Label", "Design System", "Product Design"],
    image: "/images/viva_wl_hero.png",
    images: [
      "/images/viva_wl_hero.png",
      "/images/viva_wl_live.png",
      "/images/viva_wl_ui.png",
      "/images/viva_wl_flow.png",
      "/images/viva_wl_cover.png",
    ],
    galleryLayout: "wide",
    role: "Sr. Product Designer",
    challenge: "",
    process: [],
    solution: "",
    meta: [
      { label: "Rol", value: "Sr. Product Designer · Shuttle Central" },
      { label: "Partner", value: "Viva Aerobus" },
      { label: "Foco", value: "White Label · Brand System · Booking" },
    ],
    caseStudySections: VIVA_CASE_SECTIONS_ES,
    color: {
      bg: "bg-lime-50/50",
      text: "text-lime-800",
      border: "border-lime-100",
      accent: "bg-lime-600 hover:bg-lime-700 text-white",
    },
  },
  {
    id: "lumina-store",
    title: "Soriana",
    description:
      "Ecommerce retail · cards, tracking y combos\nCómo diseñé features de catálogo y post-compra en Salesforce para subir claridad, confianza y CSAT.",
    category: "E-Commerce",
    tags: ["E-Commerce", "Retail", "Salesforce", "Product Design"],
    image: "/images/soriana_hero.png",
    images: ["/images/soriana_hero.png", "/images/soriana_demo.gif"],
    galleryLayout: "wide",
    role: "Sr. Product Designer",
    challenge: "",
    process: [],
    solution: "",
    meta: [
      { label: "Rol", value: "Sr. Product Designer · TS4" },
      { label: "Cliente", value: "Soriana Ecommerce" },
      { label: "Foco", value: "Cards · Tracking · Combos · Design Sprint" },
    ],
    caseStudySections: SORIANA_CASE_SECTIONS_ES,
    color: {
      bg: "bg-red-50/50",
      text: "text-red-700",
      border: "border-red-100",
      accent: "bg-red-600 hover:bg-red-700 text-white"
    }
  }
];

export const EXPERIENCE_HISTORY: Experience[] = [
  {
    id: "exp-1",
    role: "Sr. Product Designer",
    company: "Banco",
    duration: "2024 - Presente",
    description: [
      "Diseñé 2 flujos principales dentro del crédito de la banca mayorísta para ejecutivos de cuenta dentro del banco, para migrar procesos manuales a plataformas conectadas entre sí para reducir los procesos en un 50%.",
      "Colaboro estrechamente con ingenieros, gerentes de producto y directivos para conceptualizar, diseñar y validar soluciones escalables dentro de Salesforce como para aplicativos propios del banco."
    ],
    current: true
  },
  {
    id: "exp-2",
    role: "Sr. Product Designer",
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
    role: "Sr. Product Designer",
    company: "Shuttle Central",
    duration: "2020 - 2022",
    description: [
      "Diseñé la Web App de reservación aumentando la conversión en un 20%",
      "Desarrollé prototipos de alta fidelidad interactivos de micro-interacciones clave para aumentar el enganche emocional del comprador.",
      "Colaboré en flujos de optimización de conversión (CRO) mediante mapas de calor y grabaciones del comportamiento de los usuarios."
    ]
  },
  {
    id: "exp-4",
    role: "UX/UI Designer",
    company: "Tech&Design",
    duration: "2020 - 2021",
    description: [
      "Colaboré en el diseño de interfaces para diversos servicios bancarios de Banpro Promérica (billeteras, banca empresarial, cajeros automáticos). De igual manera realicé pruebas de usabilidad así como el análisis de los resultados para presentar a Stakeholders.",
      "Mapeé journeys y flujos end-to-end entre canales digitales y físicos (ATM, banca empresarial y billeteras) para detectar fricciones y proponer mejoras de experiencia priorizadas.",
      "Prototipé soluciones de alta fidelidad y documenté hallazgos de research para alinear a producto, negocio y desarrollo en la toma de decisiones de diseño.",
    ]
  },
  {
    id: "exp-5",
    role: "UX/UI Designer",
    company: "Universidad Nacional Autónoma de México",
    duration: "2017 - 2020",
    description: [
      "Como User Experience Designer, trabajé en el Centro de Orientación Educativa de la UNAM en la plataforma de orientación vocacional SEIVOC. Estuve a cargo de toda la propuesta visual para la versión web 2018 así como de las pruebas con usuarios.",
      "Logramos digitalizar el examen de vocación y aptitudes para llegar a más alumnos de bachillerato UNAM y, al expandir el alcance, a alumnos de Bachilleres, CECyT, IEMS, CONALEP y DGETI.",
    ],
  },
  {
    id: "exp-6",
    role: "Diseñadora Visual Freelance",
    company: "VERITest - Hertz",
    duration: "2016 - 2018",
    description: [
      "Estuve a cargo del diseño de contenido para redes sociales, mailing y material publicitario (tarjetas de presentación, folletos, lonas, carteles) para el Marketing del Centro VERITest, ayudando a ampliar su alcance y conectar mejor con su público meta.",
      "Diseñé y conceptualicé el material publicitario de Hertz para las oficinas del área metropolitana (tarjetas de presentación, flyers y banners). Con esa publicidad, Hertz pudo buscar nuevos clientes y ofrecer mejor sus productos.",
    ],
  },
];

export const EDUCATION_HISTORY = [
  {
    degree: "UX/UI Designer",
    institution: "Ironhack",
    duration: "2019 - 2020",
    detail: "Bootcamp de 400 horas de duración"
  },
  {
    degree: "Licenciatura en Diseño y Comunicación Visual",
    institution: "Universidad Nacional Autónoma de México",
    duration: "2012 - 2016",
    detail: "Simbología y soportes tridimensionales"
  },
  {
    degree: "Diplomado en Diseño y Desarrollo Web",
    institution: "Universidad Nacional Autónoma de México",
    duration: "Mar 2021 - Jul 2021",
    detail:
      "Diplomado de 240 horas para desarrollar conocimientos básicos de programación web HTML, CSS y Bootstrap para el diseño de páginas web."
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

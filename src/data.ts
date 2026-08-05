import { Project, Experience, Skill } from './types';
import { SHUTTLE_CASE_SECTIONS_ES } from './data/shuttleCaseStudy';

export const VALERIA_PROFILE = {
  name: "Valeria",
  title: "Product Designer",
  email: "Valechchh05@gmail.com",
  avatar: "/images/valeria_avatar.jpg",
  bio: "Diseñando experiencias digitales intuitivas y sistemas escalables que conectan a las personas con la tecnología de manera significativa.",
  aboutDetailed: "Trabajo especialmente en el aspecto visual y funcional de productos digitales, me gusta aplicar metodologías ágiles para optimizar el desarrollo de los proyectos y así entender los requerimientos de los stakeholder y sobre todo de los usuario. Busco implementar mis ideas en proyectos dinámicos y trabajar con equipos divertidos.",
  location: "Ciudad de México, México (Remoto para todo el mundo)",
  socials: [
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Behance", url: "https://behance.net", icon: "ExternalLink" },
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
    description: "Migración de procesos manuales a plataformas digitales y Salesforce",
    category: "Banca",
    tags: ["Banca", "SAAS"],
    image: "/images/bbva_mockup.jpg",
    images: [
      "/images/bbva_mockup.jpg"
    ],
    role: "Diseñadora UX",
    challenge: "",
    process: [],
    solution: "",
    meta: [
      { label: "Rol", value: "Diseñadora UX" },
      { label: "Empresa", value: "Banco" },
      { label: "Programa", value: "Transformación Mayorista" }
    ],
    caseStudySections: [
      {
        number: "01",
        title: "El desafío de negocio",
        body: "Dentro del proceso de crédito, hay una serie de pasos que se requieren agilizar, estandarizar y automatizar; uno de esos pasos es la gestión de límites y sublímites de crédito. Tradicionalmente, la asignación y gestión de sublímites financieros implicaba procesos manuales complejos, duplicidad en la captura de información, uso de formatos físicos u obsoletos (como anexos de información) y aprobaciones complejas por un comité de riesgos.",
        imagePlacement: "after",
        itemsTitle: "El Impacto Esperado",
        accent: "white",
        items: [
          {
            icon: "timer",
            title: "Reducción de tiempos de contratación",
            text: "Liberar la operación del ejecutivo de cuenta para enfocar más tiempo en la atención al cliente."
          },
          {
            icon: "shield-check",
            title: "Autonomía operativa",
            text: "Permitir la operación bajo la figura de un límite de crédito sancionado previamente."
          },
          {
            icon: "bot",
            title: "Eliminación de fricción técnica",
            text: "Automatizar reglas y validaciones que permitan estandarizar y facilitar la redacción de anexos."
          }
        ]
      },
      {
        number: "02",
        title: "Entendimiento del Usuario y Gobernanza",
        body: "Para diseñar una herramienta holística E2E, se identificaron y alinearon los distintos perfiles clave dentro del circuito operativo del proyecto:",
        image: "/images/banco_story_interviews_es.png",
        imagePlacement: "after",
        accent: "white",
        items: [
          {
            icon: "user-cog",
            title: "Ejecutivo de Cuenta (EC)",
            text: "Requiere dar alta rápida al crédito, y con ello detallar el sublímite que estará ligado a ese crédito."
          },
          {
            icon: "scale",
            title: "Secretaría Técnica y Asesor de Riesgos",
            text: "Necesitan evaluar la propuesta del límite del crédito, revisar los anexos del mismo y emitir un dictamen claro (aprobar/rechazar)."
          },
          {
            icon: "landmark",
            title: "Comité / Instancia de Sanción",
            text: "Requiere una visión unificada y estructurada para aprobar el riesgo (vista detallada del crédito)."
          }
        ]
      },
      {
        number: "03",
        title: "Mi rol como Product y mi colaboración transversal",
        accent: "white",
        items: [
          {
            icon: "layout-panel",
            title: "Arquitectura de información y navegación",
            text: "Lideré la arquitectura de información y la navegación, segmentando la experiencia según el perfil y permisos del usuario."
          },
          {
            icon: "users",
            title: "Colaboración multidisciplinaria",
            text: "Trabajé en mesas de trabajo constantes junto a Stakeholders, Product Owners, Arquitectura Tecnológica, usuarios (Ejecutivo de Cuenta y Área de Riesgos) y los equipos de Content."
          },
          {
            icon: "message-square",
            title: "Estandarización de UX Writing",
            text: "Alineación de microcopia e instrucciones claras en la interfaz (mensajes de notificaciones, guía en el registro de los sublímites y estandarización del lenguaje para las áreas)."
          }
        ]
      },
      {
        number: "04",
        title: "El Proceso de Diseño y Arquitectura de la Solución",
        accent: "white",
        groups: [
          {
            title: "Rediseño para la sanción de sublímites",
            items: [
              {
                icon: "boxes",
                title: "Eliminación de procesos manuales",
                text: "Se migró el proceso de sanción actual a Salesforce reuniendo la información necesaria en un solo frontal manteniendo la medición del proceso."
              }
            ]
          },
          {
            title: "Manejo de Complejidades Técnicas y Reglas de Negocio",
            items: [
              {
                icon: "currency",
                title: "Variación del flujo dependiendo de los productos bancarios",
                text: "Parametrización del sistema para validar conversiones (ej. multidivisa en dólares) y auto-completar subfamilias/campos obligatorios según el producto elegido."
              },
              {
                icon: "list-checks",
                title: "Chat transversal medible",
                text: "Destinar un espacio dentro del flujo que permita a las diferentes áreas mantener comunicación para ajustar datos evitando los chats fuera del sistema."
              }
            ]
          }
        ]
      },
      {
        number: "05",
        title: "Medición de Resultados e Impacto",
        accent: "white",
        items: [
          {
            icon: "eraser",
            title: "Eliminación de redundancias",
            text: "Reemplazo de formatos manuales de captura evitando duplicidades y transparentando la información para los diferentes perfiles."
          },
          {
            icon: "zap",
            title: "Agilización del flujo E2E",
            text: "Reducción significativa en el ciclo de vida de la sanción y contratación del crédito al permitir la accesibilidad a la información en un solo sistema."
          },
          {
            icon: "scan-eye",
            title: "Claridad en la toma de decisiones",
            text: "Unificación de la visión de sublímites e información financiera mediante un sistema de componentes estandarizado."
          }
        ]
      }
    ],
    color: {
      bg: "bg-blue-50/50",
      text: "text-blue-700",
      border: "border-blue-100",
      accent: "bg-blue-600 hover:bg-blue-700 text-white"
    }
  },
  {
    id: "vitality-tracker",
    title: "Shuttle Central",
    description:
      "Self-service para viajeros\nCómo diseñé el portal que confirma datos críticos de transfers reservados vía OTAs y reduce fricción operativa.",
    category: "Traveltech",
    tags: ["Traveltech", "Web App", "UX Research", "Design System"],
    image: "/images/shuttle_central_mockup.jpg",
    images: [
      "/images/shuttle_central_mockup.jpg",
      "/images/shuttle_central_login.jpg",
      "/images/shuttle_central_reservation.jpg",
      "/images/shuttle_central_schedule.jpg"
    ],
    role: "Product Designer (end-to-end)",
    challenge: "",
    process: [],
    solution: "",
    meta: [
      { label: "Rol", value: "Product Designer · End-to-end" },
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
    id: "lumina-store",
    title: "Soriana",
    description: "Transformación de la experiencia de compra online para una marca de iluminación premium, enfocada en la reducción de la fricción en el checkout.",
    category: "E-Commerce",
    tags: ["E-Commerce", "Web"],
    image: "/images/soriana_mockup.png",
    images: [
      "/images/soriana_mockup.png",
      "/images/findash_global_1784586264509.jpg",
      "/images/vitality_tracker_1784586273218.jpg"
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
      bg: "bg-amber-50/50",
      text: "text-amber-700",
      border: "border-amber-100",
      accent: "bg-amber-600 hover:bg-amber-700 text-white"
    }
  }
];

export const EXPERIENCE_HISTORY: Experience[] = [
  {
    id: "exp-1",
    role: "Senior Product Designer",
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
  },
  {
    id: "exp-4",
    role: "User Experience Designer Consultant",
    company: "Tech&Design",
    duration: "2020 - 2021",
    description: [
      "Colaboré en el diseño de interfaces para diversos servicios bancarios de Banpro Promérica (billeteras, banca empresarial, cajeros automáticos). De igual manera realicé pruebas de usabilidad así como el análisis de los resultados para presentar a Stakeholders."
    ]
  }
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

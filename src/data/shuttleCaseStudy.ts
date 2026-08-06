import type { CaseStudySection } from '../types';

/**
 * Narrativa Behance Shuttle Central — 11 slides (ES)
 * Compactada para lectura senior: problema → research → decisión → UI → impacto.
 */
export const SHUTTLE_CASE_SECTIONS_ES: CaseStudySection[] = [
  {
    number: '01',
    title: 'El problema no era reservar. Era operar con datos incompletos.',
    kicker: 'El problema de negocio',
    accent: 'white',
    image: '/images/shuttle_story_problem_es.png',
    body: 'La mayoría de viajeros llegaba a Shuttle Central a través de OTAs (Expedia, Booking, etc.). Esa reserva externa dejaba información faltante o desactualizada: vuelo, pickup, pasajeros o destino.\n\nSin datos confiables, el servicio se volvía frágil. Customer Service absorbía cambios, confirmaciones y dudas. El viajero, en el momento más crítico del viaje, dependía de un agente.',
    items: [
      { icon: 'alert', title: 'Operación sin datos completos', text: 'Reservas externas con vuelo, pickup o pasajeros faltantes o desactualizados.' },
      { icon: 'message-square', title: 'Alta dependencia de Customer Service', text: 'Cambios, confirmaciones y dudas terminaban en tickets operativos.' },
      { icon: 'map', title: 'Ansiedad del viajero al llegar al aeropuerto', text: 'Incertidumbre de si el transporte estaría ahí a tiempo.' },
    ],
  },
  {
    number: '02',
    title: 'Rol, objetivo y equipo',
    kicker: 'Ownership',
    accent: 'white',
    itemsBorderless: true,
    body: 'Como Product Designer única en el flujo, lideré el producto E2E: discovery, definición, arquitectura de información, UI, prototipo, validación y handoff a Frontend.',
    items: [
      {
        icon: 'target',
        iconBg: '#FF8400',
        title: 'HMW',
        text: '¿Cómo podríamos diseñar un flujo en el que el viajero confirme su reservación con confianza, sin depender de un agente?',
      },
      {
        icon: 'lightbulb',
        iconBg: '#FF8400',
        title: 'Hipótesis',
        text: 'Si ofrecemos una WebApp simple de self-service, aumentamos la completitud de datos críticos y reducimos tickets operativos.',
      },
    ],
    groups: [
      {
        title: 'Con quién trabajé',
        items: [
          { icon: 'building', title: 'Founders', text: 'Prioridades de negocio y scope del MVP.' },
          { icon: 'smartphone', title: 'Frontend', text: 'Viabilidad, estados y handoff.' },
          { icon: 'route', title: 'Logistics & Revenue', text: 'Constraints operativos (ETA, pickup).' },
          { icon: 'heart-handshake', title: 'Customer Experience', text: 'Tipología real de incidencias y tickets.' },
        ],
      },
    ],
    processLabel: 'Proceso',
    processSteps: [
      { title: 'Research', icon: 'search' },
      { title: 'UX Design', icon: 'pen-tool' },
      { title: 'UI Design', icon: 'palette' },
      { title: 'Prototipar', icon: 'smartphone' },
      { title: 'Validar', icon: 'check-circle' },
    ],
  },
  {
    number: '03',
    title: 'Entender el problema desde negocio, soporte y viajero',
    kicker: 'Investigación',
    accent: 'white',
    imagePlaceholder: true,
    items: [
      {
        icon: 'clipboard',
        title: 'Stakeholders',
        text: 'Lean Survey Canvas para alinear: ¿Qué producto construimos? ¿Qué datos necesitamos del viajero? ¿Quién es nuestro usuario?',
      },
      {
        icon: 'users',
        title: 'Customer Service',
        text: 'Sesiones con CX + revisión de reviews: confirmación difícil, cambios frecuentes, confusión de pickup en aeropuerto.',
      },
      {
        icon: 'search',
        title: 'Viajeros — 23 sesiones',
        text: '15 remotas · 8 presenciales. Preguntas clave: ¿Cómo reservas? ¿Cómo modificas? ¿Qué sitios prefieres y por qué?',
      },
    ],
  },
  {
    number: '04',
    title: '3 insights que guiaron el producto',
    kicker: 'Insights accionables',
    accent: 'white',
    image: '/images/shuttle_story_insights_es.png',
    imageContain: true,
  },
  {
    number: '05',
    title: 'Dónde se rompe la experiencia',
    kicker: 'Mapa de journey',
    accent: 'white',
    image: '/images/shuttle_story_journey_es.png',
    body: 'El journey empieza alto (planear, cotizar, confirmar). La curva cae cuando hay cambios o retrasos y la única vía es contactar a Customer Service.\n\nEl peor momento emocional es cerca de la llegada al aeropuerto: incertidumbre de si el transporte estará ahí.',
    footnote: 'Conclusión: el producto debía acompañar la reserva después de la compra — no solo vender el transfer.',
  },
  {
    number: '06',
    title: 'Del insight al MVP',
    kicker: 'Definición de solución',
    accent: 'white',
    image: '/images/shuttle_story_mvp_es.png',
    body: 'Prioricé con MoSCoW para no construir “la app de viajes completa”, sino el flujo que desbloqueaba operación. Principio: progressive disclosure — wizard de 4 pasos para bajar carga cognitiva.',
    groups: [
      {
        title: 'Must-have del MVP',
        items: [
          { icon: 'map', title: 'Pickup & drop-off', text: 'Confirmar / editar ubicaciones.' },
          { icon: 'route', title: 'Vuelo', text: 'Validar información de vuelo.' },
          { icon: 'gauge', title: 'Horario seguro', text: 'Seleccionar pickup que llegue a tiempo.' },
          { icon: 'users', title: 'Pasajeros', text: 'Confirmar pasajeros y tipo de transfer.' },
        ],
      },
      {
        title: 'Fuera de scope (después)',
        items: [
          { icon: 'rocket', title: 'Post-MVP', text: 'Tracking, check-in, extras/upsell, app nativa.' },
        ],
      },
    ],
  },
  {
    number: '07',
    title: 'Insight → decisión de diseño',
    kicker: 'Decisión de producto clave',
    accent: 'white',
    body: 'Trade-off central: limitar opciones genera más valor operativo que dar “control total” al usuario.',
    gallery: ['/images/shuttle_central_pickup_decision.png'],
    galleryFullWidthIndexes: [0],
    galleryBorderless: true,
    items: [
      {
        icon: 'alert',
        title: 'Problema',
        text: 'El viajero elegía ventanas de pickup demasiado cortas. Eso generaba reportes por retraso y riesgo de vuelos perdidos.',
      },
      {
        icon: 'check-circle',
        title: 'Solución',
        text: 'En lugar de un time picker libre, limitamos la elección a 3 opciones de horario calculadas para llegar a tiempo.',
      },
      {
        icon: 'shield-check',
        title: 'Por qué importa',
        text: 'Es un poka-yoke: el diseño previene el error operativo antes de que llegue a Customer Service o a Logistics.',
      },
    ],
  },
  {
    number: '08',
    title: 'UI — flujo de confirmación',
    kicker: 'Solución en producto',
    accent: 'white',
    galleryBorderless: true,
    galleryUnified: true,
    body: 'Wizard con Edit / Confirm en cada paso, progress indicator y CTAs inequívocos. Branding de Shuttle Central preservado para continuidad con el servicio.',
    gallery: [
      '/images/shuttle_central_inicio.png',
      '/images/shuttle_central_ticket.png',
      '/images/shuttle_central_schedule.png',
      '/images/shuttle_central_styleguide.png',
    ],
    items: [
      { icon: 'smartphone', title: 'Onboarding con propósito', text: 'Propósito claro desde el primer screen.' },
      { icon: 'clipboard', title: 'Resumen de reserva', text: 'Shuttle Central + OTA en un solo vistazo.' },
      { icon: 'gauge', title: 'Pickup schedule seguro', text: 'Opciones calculadas, no time picker libre.' },
      { icon: 'boxes', title: 'Base de design system', text: 'Componentes y estados para acelerar handoff y features post-MVP.' },
    ],
  },
  {
    number: '09',
    title: 'Validación',
    kicker: 'Pruebas con usuarios',
    accent: 'white',
    body: 'Método: usabilidad moderada Think Aloud · 15 pruebas remotas · guion estructurado · análisis cualitativo + cuantitativo.',
    items: [
      { icon: 'gauge', title: 'SUS 87.5', text: 'Flujo comprensible y accionable incluso para usuarios que llegaban desde una reserva externa.' },
      { icon: 'timer', title: 'Métricas observadas', text: 'Tiempo de tareas, flujo completo, éxito/fracaso, adaptabilidad y reconocimiento de marca.' },
      { icon: 'flask', title: 'Think Aloud', text: '15 sesiones remotas con guion estructurado.' },
    ],
  },
  {
    number: '10',
    title: 'Resultados e iteración',
    kicker: 'Impacto',
    accent: 'white',
    imagePlaceholder: true,
    body: 'Self-service en producción para que el viajero complete y confirme datos críticos sin agente.\n\nPost-launch: check-in, QR, tracking, perfil y extras — la siguiente capa resolvió confianza en el día del viaje y revenue incremental.',
    href: 'https://ride.shuttlecentral.com',
    hrefLabel: 'Live: ride.shuttlecentral.com',
    items: [
      { icon: 'search', title: '23 + 15', text: '23 sesiones de research + 15 pruebas de usabilidad.' },
      { icon: 'shield-check', title: 'Pickup limitado', text: '3 horarios para prevenir incidencias operativas.' },
      { icon: 'message-square', title: 'Menos dependencia de CS', text: 'Confirmaciones y cambios dejan de ser el único camino vía agente.' },
    ],
    footnote:
      'Pendiente de reforzar en entrevista: % completitud de datos o ↓ tickets CS (si tienes número o rango).',
  },
  {
    number: '11',
    title: 'Qué me llevo de este proyecto',
    kicker: 'Aprendizajes',
    accent: 'white',
    items: [
      {
        icon: 'route',
        title: '01',
        text: 'En un modelo B2B2C vía OTAs, la UX crítica puede ser post-compra: cerrar el gap entre partner y operación.',
      },
      {
        icon: 'gauge',
        title: '02',
        text: 'Limitar opciones (3 horarios) puede generar más valor que dar “control total” al usuario.',
      },
      {
        icon: 'heart-handshake',
        title: '03',
        text: 'Diseñar con CX y Logistics desde el inicio evita soluciones cosméticas a problemas operativos.',
      },
      {
        icon: 'boxes',
        title: '04',
        text: 'Un design system temprano acelera la evolución del producto después del MVP.',
      },
    ],
    href: 'https://ride.shuttlecentral.com/login',
    hrefLabel: 'ride.shuttlecentral.com/login',
  },
];

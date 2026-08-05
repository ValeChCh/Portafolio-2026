import type { CaseStudySection } from '../types';

/** Narrativa Behance Shuttle Central — 17 slides (ES) */
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
    title: 'Mi rol',
    kicker: 'Rol y equipo',
    accent: 'white',
    body: 'Como Product Designer, lideré el producto E2E: discovery, definición, arquitectura de información, UI, prototipo, validación y handoff.',
    itemsTitle: 'El equipo',
    items: [
      { icon: 'building', title: 'Founders', text: 'Prioridades de negocio.' },
      { icon: 'smartphone', title: 'Frontend', text: 'Viabilidad e implementación.' },
      { icon: 'route', title: 'Logistics & Revenue', text: 'Constraints operativos.' },
      { icon: 'heart-handshake', title: 'Customer Experience', text: 'Tipología real de incidencias.' },
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
    title: 'Objetivo',
    kicker: 'Objetivo e hipótesis',
    accent: 'white',
    image: '/images/shuttle_story_mvp_es.png',
    items: [
      {
        icon: 'target',
        title: 'HMW',
        text: '¿Cómo podríamos diseñar un flujo en el que el viajero confirme su reservación con confianza, sin depender de un agente?',
      },
      {
        icon: 'lightbulb',
        title: 'Hipótesis',
        text: 'Si ofrecemos una WebApp simple e intuitiva de self-service, aumentamos la completitud de datos críticos y reducimos tickets operativos.',
      },
    ],
  },
  {
    number: '04',
    title: 'Entender el problema desde negocio, soporte y viajero',
    kicker: 'Investigación',
    accent: 'white',
    image: '/images/shuttle_story_research_es.png',
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
    number: '05',
    title: '3 insights que guiaron el producto',
    kicker: 'Insights accionables',
    accent: 'white',
    image: '/images/shuttle_story_insights_es.png',
    items: [
      {
        icon: 'check-circle',
        title: '01 — Certeza',
        text: 'El viajero quiere certeza, no más opciones. Necesita saber que su transfer estará ahí a tiempo.',
      },
      {
        icon: 'message-square',
        title: '02 — CS como contingencia',
        text: 'Customer Service era el “producto” de contingencia. Cualquier cambio o duda terminaba en un ticket.',
      },
      {
        icon: 'alert',
        title: '03 — Datos operativos',
        text: 'Los errores más costosos: pickup demasiado corto, vuelo incorrecto, pasajeros desactualizados.',
      },
    ],
    footnote:
      'Síntesis con empathy map, persona, service blueprint y journey map — usados para decidir, no solo para documentar.',
  },
  {
    number: '06',
    title: 'Dónde se rompe la experiencia',
    kicker: 'Mapa de journey',
    accent: 'white',
    image: '/images/shuttle_story_journey_es.png',
    body: 'El journey empieza alto (planear el viaje, cotizar, confirmar). La curva cae cuando hay cambios o retrasos y la única vía es contactar a Customer Service.\n\nEl peor momento emocional es cerca de la llegada al aeropuerto: incertidumbre de si el transporte estará ahí.',
    footnote: 'Conclusión: el producto debía acompañar la reserva después de la compra — no solo vender el transfer.',
  },
  {
    number: '07',
    title: 'Del insight al MVP',
    kicker: 'Definición de solución',
    accent: 'white',
    body: 'Prioricé con MoSCoW para no construir “la app de viajes completa”, sino el flujo que desbloqueaba operación y bajaba fricción.',
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
        title: 'Could-have (después)',
        items: [
          { icon: 'rocket', title: 'Después del MVP', text: 'Tracking, check-in, extras/upsell, app nativa.' },
        ],
      },
    ],
  },
  {
    number: '08',
    title: 'Proceso de ideación',
    kicker: 'Ideación y arquitectura',
    accent: 'white',
    body: 'Benchmark de apps de reservación → priorización MoSCoW → arquitectura de información (sitemap, card sorting, user flow) → wireframes low/mid → pruebas → iteración.',
    items: [
      {
        icon: 'layers',
        title: 'Principio de diseño',
        text: 'Progressive disclosure: un wizard de 4 pasos para bajar carga cognitiva y completar datos críticos sin abrumar.',
      },
      {
        icon: 'flask',
        title: 'Validación temprana',
        text: 'Volvimos con usuarios entre arquitectura y wireframes para validar estructura antes de pulir UI.',
      },
    ],
  },
  {
    number: '09',
    title: 'Flujo de confirmación — mid fidelity',
    kicker: 'Wireframes (mid)',
    accent: 'white',
    body: 'Estructura del flujo:\n\n1. Welcome contextual — “faltan datos para asegurar tu servicio”\n2. Pickup & Drop-off\n3. Flight info\n4. Pickup schedule\n5. Passengers',
    gallery: [
      '/images/shuttle_central_login.jpg',
      '/images/shuttle_central_reservation.jpg',
      '/images/shuttle_central_schedule.jpg',
    ],
    footnote:
      'Decisión UX: cada paso tiene Edit / Confirm para dar control sin perder velocidad. El progress indicator orienta y reduce abandono percibido.',
  },
  {
    number: '10',
    title: 'Insight → decisión de diseño',
    kicker: 'Decisión de producto clave',
    accent: 'white',
    image: '/images/shuttle_central_schedule.jpg',
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
    footnote: 'Microcopy: “The driver can wait for you until an hour after the established pickup.”',
  },
  {
    number: '11',
    title: 'Guía de estilo — base para escalar',
    kicker: 'Sistema de diseño',
    accent: 'white',
    body: 'Definí un sistema visual alineado al branding de Shuttle Central para acelerar handoff y futuras features.',
    items: [
      { icon: 'palette', title: 'Marca e ilustraciones', text: 'Identidad visual y assets de servicio.' },
      { icon: 'sparkles', title: 'Paleta + estados', text: 'Primaria y estados de alerta.' },
      { icon: 'pen-tool', title: 'Tipografía', text: 'Quicksand — jerarquía H1 → Description.' },
      { icon: 'boxes', title: 'Componentes', text: 'Botones, steppers, inputs (empty, active, filled, blocked, error).' },
    ],
    footnote:
      'Outcome: menos ambigüedad en implementación y una base reusable para check-in, tracking y extras.',
  },
  {
    number: '12',
    title: 'Diseño UI',
    kicker: 'UI — flujo principal',
    accent: 'white',
    body: 'Se respetó el branding de Shuttle Central para mantener comunicación y posicionamiento, con foco en claridad, estados de éxito/error y CTAs inequívocos.',
    gallery: [
      '/images/shuttle_central_mockup.jpg',
      '/images/shuttle_central_login.jpg',
      '/images/shuttle_central_reservation.jpg',
      '/images/shuttle_central_schedule.jpg',
    ],
    items: [
      { icon: 'smartphone', title: 'Onboarding con propósito', text: 'Propósito claro desde el primer screen.' },
      { icon: 'clipboard', title: 'Resumen de reserva', text: 'Shuttle Central + OTA en un solo vistazo.' },
      { icon: 'route', title: 'Validación de vuelo', text: 'Por número o schedule.' },
      { icon: 'gauge', title: 'Pickup schedule seguro', text: 'Opciones calculadas, no time picker libre.' },
      { icon: 'users', title: 'Pasajeros', text: 'Confirmación clara del grupo y tipo de transfer.' },
    ],
  },
  {
    number: '13',
    title: 'Validación',
    kicker: 'Pruebas con usuarios',
    accent: 'white',
    body: 'Método: prueba de usabilidad moderada Think Aloud · análisis cualitativo + cuantitativo · 15 pruebas remotas · guion de entrevista estructurado.',
    items: [
      { icon: 'gauge', title: 'SUS 87.5', text: 'El flujo era comprensible y accionable incluso para usuarios que llegaban desde una reserva externa.' },
      { icon: 'timer', title: 'Métricas observadas', text: 'Tiempo de tareas, flujo completo, éxito/fracaso, adaptabilidad y reconocimiento de marca.' },
      { icon: 'flask', title: 'Think Aloud', text: '15 sesiones remotas con guion estructurado.' },
    ],
  },
  {
    number: '14',
    title: 'Resultados',
    kicker: 'Impacto',
    accent: 'white',
    image: '/images/shuttle_story_results_es.png',
    body: 'Self-service en producción para que el viajero complete y confirme datos críticos sin agente.',
    href: 'https://ride.shuttlecentral.com',
    hrefLabel: 'Live: ride.shuttlecentral.com',
    items: [
      { icon: 'gauge', title: 'SUS 87.5', text: 'En validación con usuarios.' },
      { icon: 'search', title: '23 + 15', text: '23 sesiones de research + 15 pruebas de usabilidad.' },
      { icon: 'shield-check', title: 'Pickup limitado', text: 'Decisión de 3 horarios para prevenir incidencias operativas.' },
    ],
    footnote:
      'Impacto de negocio: reducir dependencia de Customer Service en confirmaciones/cambios y mejorar la confiabilidad del servicio con datos completos.',
  },
  {
    number: '15',
    title: 'Nuevas características + rediseño',
    kicker: 'Iteración post-launch',
    accent: 'white',
    body: 'Después del lanzamiento identificamos oportunidades de crecimiento:\n\n1. Módulo de upsell (tours y servicios adicionales)\n2. Evolución hacia una experiencia más completa para impulsar descarga de app',
    items: [
      {
        icon: 'rocket',
        title: 'Features agregadas',
        text: 'Check-in · QR de viaje · tracking en tiempo real · perfil · extras · navegación por secciones (My Reservation / Tracking / Add Extras / Profile).',
      },
      {
        icon: 'lightbulb',
        title: 'Aprendizaje',
        text: 'El MVP resolvió el gap de datos. La siguiente capa resolvió confianza en el día del viaje y revenue incremental.',
      },
    ],
  },
  {
    number: '16',
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
  },
  {
    number: '17',
    title: 'Gracias',
    kicker: 'Cierre',
    accent: 'white',
    image: '/images/shuttle_central_mockup.jpg',
    body: 'Shuttle Central — Traveler Portal\n\nProduct Design end-to-end · Research → Validación → Impacto',
    href: 'https://ride.shuttlecentral.com/login',
    hrefLabel: 'ride.shuttlecentral.com/login',
    footnote: 'Contacto: Valechchh05@gmail.com · LinkedIn en el footer del portafolio',
  },
];

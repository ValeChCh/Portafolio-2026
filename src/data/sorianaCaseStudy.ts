import type { CaseStudySection } from '../types';

/**
 * Narrativa Behance Soriana Ecommerce — compactada para lectura senior.
 * Fuente: https://www.behance.net/gallery/198502507/Proceso-de-diseno-Soriana-Ecommerce
 * Métrica citada: +10% CSAT (experiencia TS4). Sin inventar KPIs adicionales.
 */
export const SORIANA_CASE_SECTIONS_ES: CaseStudySection[] = [
  {
    number: '01',
    title: 'El ecommerce vendía. La experiencia no acompañaba la compra.',
    kicker: 'El problema de negocio',
    accent: 'white',
    image: '/images/soriana_story_01.png',
    imageContain: true,
    body: 'Soriana necesitaba crecer ventas y clientes en su plataforma ecommerce. El reto no era “hacer pantallas bonitas”: era resolver historias de usuario concretas que afectaban confianza post-compra, claridad en el catálogo y oportunidades de cross-sell.\n\nTrabajé desde TS4 con el Product Owner de Soriana para traducir esas historias en decisiones de producto medibles, viables en Salesforce y validadas con clientes reales.',
    items: [
      {
        icon: 'alert',
        title: 'Baja confianza post-compra',
        text: 'Sin tracking visible del envío, el cliente no sabía dónde estaba su pedido — especialmente en marketplace con múltiples paqueterías.',
      },
      {
        icon: 'layout-panel',
        title: 'Cards desactualizadas',
        text: 'La información en cards era confusa o irrelevante; fricción para entender el producto y agregarlo al carrito.',
      },
      {
        icon: 'boxes',
        title: 'Cross-sell sin superficie',
        text: 'Había combos en inventario, pero no un componente claro en el detalle de producto para empujar compra complementaria.',
      },
    ],
  },
  {
    number: '02',
    title: 'Rol, ownership y equipo',
    kicker: 'Ownership',
    accent: 'white',
    image: '/images/soriana_story_02.png',
    imageContain: true,
    body: 'Como Sr. Product Designer en TS4, lideré discovery, definición, UX/UI, prototipo, pruebas con usuarios y handoff técnico — en sprints, con alcance negociado con PO y desarrollo Salesforce.',
    itemsBorderless: true,
    itemsStacked: true,
    items: [
      {
        icon: 'target',
        title: 'HMW',
        iconBg: '#FF8400',
        text: '¿Cómo podríamos dar claridad y confianza en el journey de compra (catálogo → carrito → post-compra) sin romper el ecosistema Salesforce existente?',
      },
      {
        icon: 'lightbulb',
        title: 'Hipótesis',
        iconBg: '#FF8400',
        text: 'Si redesignamos cards, integramos tracking en el detalle de pedido y habilitamos combos en PDP, subimos claridad, confianza y ticket promedio — y con ello CSAT.',
      },
    ],
    groups: [
      {
        title: 'Con quién trabajé',
        items: [
          { icon: 'building', title: 'Product Owner — Soriana', text: 'Prioridad de negocio, alcance de HU y trade-offs.' },
          { icon: 'users', title: 'Scrum Master — TS4', text: 'Ritmo de sprint y facilitación del equipo.' },
          { icon: 'smartphone', title: 'Developer — TS4', text: 'Viabilidad Salesforce, ambientes y handoff.' },
          { icon: 'pen-tool', title: 'Sr. Product Designer — TS4', text: 'Research, UX/UI, prototipo y validación (mi rol).' },
        ],
      },
    ],
  },
  {
    number: '03',
    title: 'Tres historias de usuario, un mismo journey',
    kicker: 'Oportunidad',
    accent: 'white',
    image: '/images/soriana_story_03.png',
    imageContain: true,
    body: 'Priorizamos tres HUs que tocaban momentos distintos del funnel — pero compartían un mismo principio: reducir incertidumbre y hacer más fácil la decisión de compra.',
    items: [
      {
        icon: 'route',
        title: 'Tracking del pedido',
        text: '“Como cliente quiero saber el tracking de mi pedido, para estar más seguro de mi compra.”',
      },
      {
        icon: 'layout-panel',
        title: 'Cards del catálogo',
        text: '“Como Soriana quiero mejorar las cards del sitio, para que esté más actualizado y claro.”',
      },
      {
        icon: 'boxes',
        title: 'Combos en PDP',
        text: '“Como Soriana quiero mostrar productos en combo, para aumentar compras y mover inventario.”',
      },
    ],
  },
  {
    number: '04',
    title: 'Design Sprint adaptado al ritmo de delivery',
    kicker: 'Metodología',
    accent: 'white',
    image: '/images/soriana_story_04.png',
    imageContain: true,
    body: 'No corrimos un sprint “de libro”: lo adaptamos a Salesforce y a ventanas reales de desarrollo. La investigación y las pruebas tenían que caber en el sprint — no quedarse fuera.',
    items: [
      {
        icon: 'search',
        title: 'Investigar y definir',
        text: 'Análisis técnico con desarrollo · focus groups · Think Aloud · Customer Journey · benchmark de ecommerce.',
      },
      {
        icon: 'pen-tool',
        title: 'Bocetos',
        text: 'Prototipos mid-fi en Figma · sesiones con PO y developers para aterrizar la mejor solución viable.',
      },
      {
        icon: 'scale',
        title: 'Decidir',
        text: 'Cierre de solución por HU con impacto en negocio, cliente y recursos — alineado con el PO.',
      },
      {
        icon: 'flask',
        title: 'Prototipo y pruebas',
        text: 'Hi-fi en Figma · tests con +20 usuarios · handoff y QA en ambientes previos a prod (Salesforce).',
      },
    ],
  },
  {
    number: '05',
    title: 'Insight → decisión de producto',
    kicker: 'Decisiones clave',
    accent: 'white',
    body: 'Cada solución nacía de un trade-off: dónde poner la feature, qué información priorizar y cómo no romper componentes Salesforce existentes.',
    items: [
      {
        icon: 'route',
        title: 'Tracking dentro del pedido',
        text: 'En lugar de mandar al usuario a sitios de paquetería externos, embebi el tracking en el detalle de orden + notificaciones por email si no puede entrar a su cuenta.',
      },
      {
        icon: 'layout-panel',
        title: 'Card informativa, no decorativa',
        text: 'Research previo para decidir qué datos importan al comprar: menos ruido, CTA más claro, menos fricción al agregar al carrito.',
      },
      {
        icon: 'boxes',
        title: 'Combos en el detalle de producto',
        text: 'El research señaló el PDP como el mejor lugar para armar combos — cross-sell en contexto, no un módulo suelto en home.',
      },
    ],
  },
  {
    number: '06',
    title: 'UI — soluciones en producto',
    kicker: 'Solución',
    accent: 'white',
    image: '/images/soriana_story_05.png',
    imageContain: true,
    body: 'Tres entregables concretos, listos para construir en Salesforce y coherentes con la marca Soriana.',
    gallery: [
      '/images/soriana_mockup.png',
      '/images/soriana_screenshot.png',
    ],
    galleryBorderless: true,
    galleryUnified: true,
    items: [
      {
        icon: 'route',
        title: 'Tracking embebido',
        text: 'Estado del envío en el detalle de pedido + emails de seguimiento.',
      },
      {
        icon: 'layout-panel',
        title: 'Cards rediseñadas',
        text: 'Info crítica visible y botón de acción más claro.',
      },
      {
        icon: 'boxes',
        title: 'Componente de combo',
        text: 'Selección de productos complementarios en PDP para subir ticket.',
      },
      {
        icon: 'shield-check',
        title: 'QA multi-ambiente',
        text: 'Validación en ambientes de desarrollo y producción para no romper otros módulos Salesforce.',
      },
    ],
  },
  {
    number: '07',
    title: 'Validación con clientes reales',
    kicker: 'Pruebas',
    accent: 'white',
    body: 'Más de 20 pruebas con usuarios sobre los prototipos. Los hallazgos cerraron dudas de copy, jerarquía en cards y comprensión del tracking antes del build.',
    items: [
      {
        icon: 'flask',
        title: '+20 tests',
        text: 'Think Aloud y sesiones estructuradas sobre flujos de card, combo y post-compra.',
      },
      {
        icon: 'message-square',
        title: 'Feedback al PO',
        text: 'Canal continuo para mostrar avances de research y alinear decisiones de negocio.',
      },
      {
        icon: 'smartphone',
        title: 'Handoff vivo',
        text: 'Comunicación constante con desarrollo ante ajustes en ambientes previos al lanzamiento.',
      },
    ],
  },
  {
    number: '08',
    title: 'Impacto y aprendizajes',
    kicker: 'Resultados',
    accent: 'white',
    image: '/images/soriana_story_06.png',
    imageContain: true,
    body: 'Las features salieron a producción con QA en varios ambientes. En experiencia reportada: +10% CSAT tras el rediseño de cards, optimización de carrito y seguimiento de envío.',
    href: 'https://www.behance.net/gallery/198502507/Proceso-de-diseno-Soriana-Ecommerce',
    hrefLabel: 'Behance: Proceso de diseño Soriana Ecommerce',
    items: [
      {
        icon: 'gauge',
        title: '+10% CSAT',
        text: 'Mejora de satisfacción tras cards, carrito y tracking de envío.',
      },
      {
        icon: 'heart-handshake',
        title: 'Confianza post-compra',
        text: 'Tracking embebido + emails reducen la incertidumbre del pedido.',
      },
      {
        icon: 'sparkles',
        title: 'Superficie de cross-sell',
        text: 'Combos en PDP para aumentar compras y mover inventario.',
      },
    ],
    footnote:
      'Aprendizajes: proteger tiempo de research/pruebas dentro del sprint · canal vivo con desarrollo en ambientes pre-prod · feedback continuo con el PO sobre decisiones y avances de research.',
  },
];

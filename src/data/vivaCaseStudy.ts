import type { CaseStudySection } from '../types';

/**
 * Narrativa White Label Viva Aerobus — compactada para lectura senior.
 * Fuente: https://www.behance.net/gallery/159326297/White-Label-Viva-Aerobus
 * Live: https://shuttles.vivaaerobus.com/
 * Sin inventar KPIs no citados en la fuente.
 */
export const VIVA_CASE_SECTIONS_ES: CaseStudySection[] = [
  {
    number: '01',
    title: 'Una alianza comercial pedía producto con dos identidades.',
    kicker: 'El problema de negocio',
    accent: 'white',
    image: '/images/viva_wl_cover.png',
    imageContain: true,
    body: 'Shuttle Central necesitaba una plataforma de ventas co-branded para Viva Aerobus: visible como marca aérea, operable con el flujo de transfers ya probado.\n\nEl reto no era “pintar de verde” la UI. Era sostener la alianza comercial sin romper el journey de compra ni el sistema operativo detrás.',
    items: [
      {
        icon: 'building',
        title: 'Alianza comercial',
        text: 'Viva Aerobus como superficie de marca; Shuttle Central como motor de transfers.',
      },
      {
        icon: 'route',
        title: 'Flujo que ya convertía',
        text: 'El funnel de Shuttle Central debía preservarse: origen/destino, fechas, pasajeros y búsqueda.',
      },
      {
        icon: 'palette',
        title: 'Lineamientos de marca',
        text: 'Aplicar el design system de Viva (verde, tipografía, tono) sin fragmentar la experiencia.',
      },
    ],
  },
  {
    number: '02',
    title: 'Rol, ownership y objetivo',
    kicker: 'Ownership',
    accent: 'white',
    itemsBorderless: true,
    itemsStacked: true,
    body: 'Como Sr. Product Designer en Shuttle Central, lideré el white label E2E: análisis del flujo de venta, mapeo del design system de Viva y aplicación UI coherente en la Web App de reservas.',
    items: [
      {
        title: 'HMW',
        text: '¿Cómo podríamos diseñar una plataforma de ventas para Viva Aerobus que respete sus lineamientos de diseño y mantenga el flujo natural de Shuttle Central?\n\nHipótesis\nSi separamos branding (capa Viva) de estructura de funnel (capa Shuttle), fortalecemos la alianza sin rehacer el producto de punta a punta.',
      },
    ],
    groups: [
      {
        title: 'Con quién trabajé',
        items: [
          { icon: 'building', title: 'Negocio / alianza', text: 'Prioridades comerciales y co-branding.' },
          { icon: 'palette', title: 'Brand Viva', text: 'Lineamientos y sistema visual a respetar.' },
          { icon: 'smartphone', title: 'Producto Shuttle', text: 'Flujo, estados y viabilidad de implementación.' },
        ],
      },
    ],
  },
  {
    number: '03',
    title: 'Dos sistemas, una sola experiencia',
    kicker: 'Approach',
    accent: 'white',
    image: '/images/viva_wl_brand.png',
    imageContain: true,
    body: 'Analicé el flujo completo de venta de Shuttle Central para delimitar qué era imprescindible conservar. En paralelo, desglosé branding y design system de Viva Aerobus para aplicarlo con precisión — no como skin superficial.',
    items: [
      {
        icon: 'search',
        title: 'Auditoría del funnel',
        text: 'Qué pantallas y decisiones del flow de Shuttle eran non-negotiable para la venta.',
      },
      {
        icon: 'layers',
        title: 'Inventario de marca Viva',
        text: 'Color, tipografía, logo lockup, CTAs y tono visual para landing y booking.',
      },
      {
        icon: 'scale',
        title: 'Criterio de adaptación',
        text: 'Cambiar superficie de marca; proteger arquitectura de información y pasos críticos.',
      },
    ],
  },
  {
    number: '04',
    title: 'Decisiones de producto en el white label',
    kicker: 'Decisiones',
    accent: 'white',
    body: 'El trade-off central: fidelidad de marca vs. continuidad operativa del funnel. Prioricé decisiones que hicieran el producto sentir “Viva” sin forzar reaprendizaje al viajero ni deuda innecesaria en frontend.',
    items: [
      {
        icon: 'check-circle',
        title: 'Conservar el modelo mental',
        text: 'Aeropuerto / punto a punto, redondo / sencillo, origen–destino, fechas y pasajeros.',
      },
      {
        icon: 'palette',
        title: 'Rebranding sistémico',
        text: 'Header co-branded, CTAs naranja Viva, acentos verdes y copy alineado a la aerolínea.',
      },
      {
        icon: 'layout-panel',
        title: 'Jerarquía de venta',
        text: 'Widget de búsqueda como héroe; beneficios de servicio debajo para confianza post-CTA.',
      },
    ],
  },
  {
    number: '05',
    title: 'UI — plataforma de ventas Shuttles Viva',
    kicker: 'Solución en producto',
    accent: 'white',
    galleryUnified: true,
    galleryBorderless: true,
    body: 'Landing + booking widget adaptados al sistema Viva, con el flujo de Shuttle Central intacto. Resultado: una superficie comercial lista para la alianza.',
    gallery: [
      '/images/viva_wl_ui.png',
      '/images/viva_wl_flow.png',
    ],
    items: [
      {
        icon: 'smartphone',
        title: 'Booking widget',
        text: 'Búsqueda de traslado terrestre con toggles claros y CTA inequívoco.',
      },
      {
        icon: 'sparkles',
        title: 'Co-branding',
        text: 'Lockup Traslados + Viva sin competir por jerarquía visual.',
      },
      {
        icon: 'shield-check',
        title: 'Confianza',
        text: 'Bloque de beneficios (monitoreo, gestión online, conductores) bajo el fold.',
      },
    ],
  },
  {
    number: '06',
    title: 'En producción y aprendizajes',
    kicker: 'Resultados',
    accent: 'white',
    image: '/images/viva_wl_ui.png',
    imageContain: true,
    body: 'La plataforma quedó live como canal de venta de transfers bajo marca Viva, operada sobre el producto Shuttle Central.\n\nAprendizaje clave: un white label senior no es un reskin — es gobernanza de dos sistemas (marca + funnel) con ownership claro de qué se adapta y qué se protege.',
    href: 'https://shuttles.vivaaerobus.com/',
    hrefLabel: 'Live: shuttles.vivaaerobus.com',
    items: [
      {
        icon: 'rocket',
        title: 'Producto live',
        text: 'Canal de venta activo para la alianza Viva × Shuttle Central.',
      },
      {
        icon: 'layers',
        title: 'Sistema reusable',
        text: 'Patrón de white label aplicable a futuros partners sin rediseñar el core.',
      },
      {
        icon: 'lightbulb',
        title: 'Ownership de diseño',
        text: 'Separar capa de marca de capa de flujo acelera alianzas sin romper UX.',
      },
    ],
  },
];

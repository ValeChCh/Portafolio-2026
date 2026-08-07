import type { CaseStudySection } from '../types';

/**
 * White Label Viva Aerobus narrative — senior-compacted (EN).
 * Source: https://www.behance.net/gallery/159326297/White-Label-Viva-Aerobus
 * Live: https://shuttles.vivaaerobus.com/
 */
export const VIVA_CASE_SECTIONS_EN: CaseStudySection[] = [
  {
    number: '01',
    title: 'A commercial alliance needed one product with two identities.',
    kicker: 'The business problem',
    accent: 'white',
    image: '/images/viva_wl_cover.png',
    imageContain: true,
    body: 'Shuttle Central needed a co-branded sales platform for Viva Aerobus: visible as the airline brand, operable with the proven transfer booking flow.\n\nThe challenge wasn’t “painting the UI green.” It was sustaining the commercial alliance without breaking the purchase journey or the operating system behind it.',
    items: [
      {
        icon: 'building',
        title: 'Commercial alliance',
        text: 'Viva Aerobus as the brand surface; Shuttle Central as the transfer engine.',
      },
      {
        icon: 'route',
        title: 'A flow that already converted',
        text: 'The Shuttle Central funnel had to stay intact: origin/destination, dates, passengers, and search.',
      },
      {
        icon: 'palette',
        title: 'Brand guidelines',
        text: 'Apply Viva’s design system (green, type, tone) without fragmenting the experience.',
      },
    ],
  },
  {
    number: '02',
    title: 'Role, ownership, and objective',
    kicker: 'Ownership',
    accent: 'white',
    itemsBorderless: true,
    itemsStacked: true,
    body: 'As Sr. Product Designer at Shuttle Central, I led the white label end to end: sales-flow analysis, mapping Viva’s design system, and coherent UI application on the booking Web App.',
    items: [
      {
        title: 'HMW',
        text: 'How might we design a sales platform for Viva Aerobus that respects its design guidelines and keeps Shuttle Central’s natural booking flow?\n\nHypothesis\nIf we separate branding (Viva layer) from funnel structure (Shuttle layer), we strengthen the alliance without rebuilding the product end to end.',
      },
    ],
    groups: [
      {
        title: 'Who I worked with',
        items: [
          { icon: 'building', title: 'Business / alliance', text: 'Commercial priorities and co-branding.' },
          { icon: 'palette', title: 'Viva brand', text: 'Guidelines and visual system to respect.' },
          { icon: 'smartphone', title: 'Shuttle product', text: 'Flow, states, and implementation viability.' },
        ],
      },
    ],
  },
  {
    number: '03',
    title: 'Two systems, one experience',
    kicker: 'Approach',
    accent: 'white',
    image: '/images/viva_wl_brand.png',
    imageContain: true,
    body: 'I analyzed Shuttle Central’s full sales flow to define what was non-negotiable to keep. In parallel, I broke down Viva Aerobus branding and design system for precise application — not a superficial skin.',
    items: [
      {
        icon: 'search',
        title: 'Funnel audit',
        text: 'Which Shuttle screens and decisions were essential for the sale.',
      },
      {
        icon: 'layers',
        title: 'Viva brand inventory',
        text: 'Color, type, logo lockup, CTAs, and visual tone for landing and booking.',
      },
      {
        icon: 'scale',
        title: 'Adaptation criteria',
        text: 'Change the brand surface; protect information architecture and critical steps.',
      },
    ],
  },
  {
    number: '04',
    title: 'Product decisions in the white label',
    kicker: 'Decisions',
    accent: 'white',
    body: 'The core trade-off: brand fidelity vs. operational continuity of the funnel. I prioritized decisions that made the product feel like “Viva” without forcing traveler relearning or unnecessary frontend debt.',
    items: [
      {
        icon: 'check-circle',
        title: 'Keep the mental model',
        text: 'Airport / point-to-point, round-trip / one-way, origin–destination, dates, and passengers.',
      },
      {
        icon: 'palette',
        title: 'Systemic rebrand',
        text: 'Co-branded header, Viva orange CTAs, green accents, and airline-aligned copy.',
      },
      {
        icon: 'layout-panel',
        title: 'Sales hierarchy',
        text: 'Search widget as hero; service benefits below for post-CTA confidence.',
      },
    ],
  },
  {
    number: '05',
    title: 'UI — Shuttles Viva sales platform',
    kicker: 'Solution in product',
    accent: 'white',
    galleryUnified: true,
    galleryBorderless: true,
    body: 'Landing + booking widget adapted to Viva’s system, with Shuttle Central’s flow intact. Result: a commercial surface ready for the alliance.',
    gallery: [
      '/images/viva_wl_ui.png',
      '/images/viva_wl_flow.png',
    ],
    items: [
      {
        icon: 'smartphone',
        title: 'Booking widget',
        text: 'Ground-transfer search with clear toggles and an unambiguous CTA.',
      },
      {
        icon: 'sparkles',
        title: 'Co-branding',
        text: 'Traslados + Viva lockup without competing visual hierarchy.',
      },
      {
        icon: 'shield-check',
        title: 'Trust',
        text: 'Benefits block (flight monitoring, online management, drivers) below the fold.',
      },
    ],
  },
  {
    number: '06',
    title: 'In production and learnings',
    kicker: 'Results',
    accent: 'white',
    image: '/images/viva_wl_ui.png',
    imageContain: true,
    body: 'The platform shipped live as a transfer sales channel under the Viva brand, powered by Shuttle Central’s product.\n\nKey learning: a senior white label isn’t a reskin — it’s governance of two systems (brand + funnel) with clear ownership of what adapts and what stays protected.',
    href: 'https://shuttles.vivaaerobus.com/',
    hrefLabel: 'Live: shuttles.vivaaerobus.com',
    items: [
      {
        icon: 'rocket',
        title: 'Live product',
        text: 'Active sales channel for the Viva × Shuttle Central alliance.',
      },
      {
        icon: 'layers',
        title: 'Reusable system',
        text: 'White-label pattern applicable to future partners without redesigning the core.',
      },
      {
        icon: 'lightbulb',
        title: 'Design ownership',
        text: 'Separating brand layer from flow layer accelerates alliances without breaking UX.',
      },
    ],
  },
];

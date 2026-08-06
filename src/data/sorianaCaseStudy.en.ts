import type { CaseStudySection } from '../types';

/**
 * Soriana Ecommerce Behance narrative — senior-compacted (EN).
 * Source: https://www.behance.net/gallery/198502507/Proceso-de-diseno-Soriana-Ecommerce
 * Cited metric: +10% CSAT (TS4 experience). No invented extra KPIs.
 */
export const SORIANA_CASE_SECTIONS_EN: CaseStudySection[] = [
  {
    number: '01',
    title: 'The storefront was selling. The experience wasn’t supporting the purchase.',
    kicker: 'Business problem',
    accent: 'white',
    image: '/images/soriana_story_01.png',
    imageContain: true,
    body: 'Soriana needed to grow sales and customers on its ecommerce platform. The challenge wasn’t “prettier screens”: it was solving concrete user stories that affected post-purchase trust, catalog clarity, and cross-sell opportunities.\n\nFrom TS4, I worked with Soriana’s Product Owner to turn those stories into measurable product decisions — viable in Salesforce and validated with real customers.',
    items: [
      {
        icon: 'alert',
        title: 'Low post-purchase confidence',
        text: 'Without visible shipment tracking, customers didn’t know where their order was — especially in a marketplace with multiple carriers.',
      },
      {
        icon: 'layout-panel',
        title: 'Outdated product cards',
        text: 'Card information was confusing or irrelevant; friction to understand the product and add it to cart.',
      },
      {
        icon: 'boxes',
        title: 'Cross-sell without a surface',
        text: 'Combos existed in inventory, but there was no clear PDP component to drive complementary purchases.',
      },
    ],
  },
  {
    number: '02',
    title: 'Role, ownership, and team',
    kicker: 'Ownership',
    accent: 'white',
    body: 'As Sr. Product Designer at TS4, I led discovery to align definitions that made the purchase flow and shipment tracking clearer and more efficient with the tools development provided.',
    itemsBorderless: true,
    itemsStacked: true,
    items: [
      {
        title: 'HMW',
        text: 'How might we create clarity and confidence across the shopping journey (catalog → cart → post-purchase) without breaking the existing Salesforce ecosystem?\n\nHypothesis\nIf we redesign cards, embed tracking in the order detail, and enable combos on the PDP, we increase clarity, trust, and average order value — and with that, CSAT.',
      },
    ],
    groups: [
      {
        title: 'Who I worked with',
        items: [
          { icon: 'building', title: 'Product Owner — Soriana', text: 'Business priority, story scope, and trade-offs.' },
          { icon: 'users', title: 'Scrum Master — TS4', text: 'Sprint cadence and team facilitation.' },
          { icon: 'smartphone', title: 'Developer — TS4', text: 'Salesforce feasibility, environments, and handoff.' },
          { icon: 'pen-tool', title: 'Sr. Product Designer — TS4', text: 'Research, UX/UI, prototype, and validation (my role).' },
        ],
      },
    ],
  },
  {
    number: '03',
    title: 'Three user stories, one shared journey',
    kicker: 'Opportunity',
    accent: 'white',
    body: 'We prioritized three stories that touched different funnel moments — but shared one principle: reduce uncertainty and make purchase decisions easier.',
    items: [
      {
        icon: 'route',
        title: 'Order tracking',
        text: '“As a customer I want order tracking, so I feel more confident about my purchase.”',
      },
      {
        icon: 'layout-panel',
        title: 'Catalog cards',
        text: '“As Soriana I want better site cards, so the experience feels updated and clear.”',
      },
      {
        icon: 'boxes',
        title: 'Combos on PDP',
        text: '“As Soriana I want to show combo products, to increase purchases and move inventory.”',
      },
    ],
  },
  {
    number: '04',
    title: 'A Design Sprint adapted to delivery reality',
    kicker: 'Methodology',
    accent: 'white',
    body: 'We didn’t run a textbook sprint: we adapted it to Salesforce and real development windows. Research and testing had to fit inside the sprint — not get cut.',
    items: [
      {
        icon: 'search',
        title: 'Research & define',
        text: 'Technical analysis with engineering · focus groups · Think Aloud · Customer Journey · ecommerce benchmark.',
      },
      {
        icon: 'pen-tool',
        title: 'Sketches',
        text: 'Mid-fi Figma prototypes · sessions with PO and developers to land the most viable solution.',
      },
      {
        icon: 'scale',
        title: 'Decide',
        text: 'Solution lock per story with impact on business, customers, and resources — aligned with the PO.',
      },
      {
        icon: 'flask',
        title: 'Prototype & test',
        text: 'Hi-fi in Figma · tests with 20+ users · handoff and QA in pre-prod Salesforce environments.',
      },
    ],
  },
  {
    number: '05',
    title: 'Insight → product decision',
    kicker: 'Key decisions',
    accent: 'white',
    body: 'Every solution came from a trade-off: where to place the feature, which information to prioritize, and how not to break existing Salesforce components.',
    items: [
      {
        icon: 'route',
        title: 'Tracking inside the order',
        text: 'Instead of sending users to external carrier sites, I embedded tracking in the order detail + email notifications when they can’t log in.',
      },
      {
        icon: 'layout-panel',
        title: 'Informative cards, not decorative ones',
        text: 'Prior research decided which data matters when buying: less noise, clearer CTA, less friction adding to cart.',
      },
      {
        icon: 'boxes',
        title: 'Combos on the product detail page',
        text: 'Research pointed to the PDP as the best place for combos — contextual cross-sell, not a loose home module.',
      },
    ],
  },
  {
    number: '06',
    title: 'UI — solutions in product',
    kicker: 'Solution',
    accent: 'white',
    body: 'Three concrete deliverables, ready to build in Salesforce and coherent with Soriana’s brand.',
    gallery: [
      '/images/soriana_mockup.png',
      '/images/soriana_screenshot.png',
    ],
    galleryBorderless: true,
    galleryUnified: true,
    items: [
      {
        icon: 'route',
        title: 'Embedded tracking',
        text: 'Shipment status in the order detail + follow-up emails.',
      },
      {
        icon: 'layout-panel',
        title: 'Redesigned cards',
        text: 'Critical info visible and a clearer action button.',
      },
      {
        icon: 'boxes',
        title: 'Combo component',
        text: 'Complementary product selection on the PDP to raise order value.',
      },
      {
        icon: 'shield-check',
        title: 'Multi-environment QA',
        text: 'Validation in development and production so other Salesforce modules weren’t broken.',
      },
    ],
  },
  {
    number: '07',
    title: 'Validation with real customers',
    kicker: 'Testing',
    accent: 'white',
    body: '20+ user tests on the prototypes. Findings closed questions on copy, card hierarchy, and tracking comprehension before build.',
    items: [
      {
        icon: 'flask',
        title: '20+ tests',
        text: 'Think Aloud and structured sessions on card, combo, and post-purchase flows.',
      },
      {
        icon: 'message-square',
        title: 'PO feedback loop',
        text: 'A continuous channel to share research progress and align business decisions.',
      },
      {
        icon: 'smartphone',
        title: 'Living handoff',
        text: 'Constant communication with engineering when pre-launch environments needed adjustments.',
      },
    ],
  },
  {
    number: '08',
    title: 'Impact and learnings',
    kicker: 'Results',
    accent: 'white',
    body: 'Features shipped to production with QA across environments. Reported experience outcome: +10% CSAT after card redesign, cart optimization, and shipment tracking.',
    items: [
      {
        icon: 'gauge',
        title: '+10% CSAT',
        text: 'Satisfaction lift after cards, cart, and shipment tracking.',
      },
      {
        icon: 'heart-handshake',
        title: 'Post-purchase confidence',
        text: 'Embedded tracking + emails reduce order uncertainty.',
      },
      {
        icon: 'sparkles',
        title: 'Cross-sell surface',
        text: 'PDP combos to increase purchases and move inventory.',
      },
    ],
    footnote:
      'Learnings: protect research/testing time inside the sprint · keep a live channel with engineering in pre-prod · continuous PO feedback on decisions and research progress.',
  },
];

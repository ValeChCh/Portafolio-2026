import type { CaseStudySection } from '../types';

/** Shuttle Central Behance narrative — 17 slides (EN) */
export const SHUTTLE_CASE_SECTIONS_EN: CaseStudySection[] = [
  {
    number: '01',
    title: 'The problem was not booking. It was operating with incomplete data.',
    kicker: 'The business problem',
    accent: 'white',
    image: '/images/shuttle_story_problem_en.png',
    body: 'Most travelers came to Shuttle Central through OTAs (Expedia, Booking, etc.). Those external bookings left information missing or outdated: flight, pickup, passengers, or destination.\n\nWithout reliable data, the service became fragile. Customer Service absorbed changes, confirmations, and questions. At the most critical moment of the trip, the traveler depended on an agent.',
    items: [
      { icon: 'alert', title: 'Operating without complete data', text: 'External bookings with missing or outdated flight, pickup, or passenger information.' },
      { icon: 'message-square', title: 'High dependency on Customer Service', text: 'Changes, confirmations, and questions became operational tickets.' },
      { icon: 'map', title: 'Traveler anxiety upon airport arrival', text: 'Uncertainty about whether transportation would be there on time.' },
    ],
  },
  {
    number: '02',
    title: 'My role',
    kicker: 'Role and team',
    accent: 'white',
    body: 'As Product Designer, I led the product E2E: discovery, definition, information architecture, UI, prototype, validation, and handoff.',
    itemsTitle: 'The team',
    items: [
      { icon: 'building', title: 'Founders', text: 'Business priorities.' },
      { icon: 'smartphone', title: 'Frontend', text: 'Feasibility and implementation.' },
      { icon: 'route', title: 'Logistics & Revenue', text: 'Operational constraints.' },
      { icon: 'heart-handshake', title: 'Customer Experience', text: 'Real incident types.' },
    ],
    processLabel: 'Process',
    processSteps: [
      { title: 'Research', icon: 'search' },
      { title: 'UX Design', icon: 'pen-tool' },
      { title: 'UI Design', icon: 'palette' },
      { title: 'Prototype', icon: 'smartphone' },
      { title: 'Validate', icon: 'check-circle' },
    ],
  },
  {
    number: '03',
    title: 'Objective',
    kicker: 'Objective and hypothesis',
    accent: 'white',
    image: '/images/shuttle_story_mvp_en.png',
    items: [
      {
        icon: 'target',
        title: 'HMW',
        text: 'How might we design a flow where travelers can confidently confirm their reservation without depending on an agent?',
      },
      {
        icon: 'lightbulb',
        title: 'Hypothesis',
        text: 'If we provide a simple, intuitive self-service WebApp, we will increase the completeness of critical data and reduce operational tickets.',
      },
    ],
  },
  {
    number: '04',
    title: 'Understanding the problem from the business, support, and traveler perspectives',
    kicker: 'Research',
    accent: 'white',
    image: '/images/shuttle_story_research_en.png',
    items: [
      {
        icon: 'clipboard',
        title: 'Stakeholders',
        text: 'Lean Survey Canvas to align on: What product are we building? What traveler data do we need? Who is our user?',
      },
      {
        icon: 'users',
        title: 'Customer Service',
        text: 'Sessions with CX + review analysis: difficult confirmation, frequent changes, and confusion about airport pickup.',
      },
      {
        icon: 'search',
        title: 'Travelers — 23 sessions',
        text: '15 remote · 8 in person. Key questions: How do you book? How do you make changes? Which sites do you prefer and why?',
      },
    ],
  },
  {
    number: '05',
    title: '3 insights that guided the product',
    kicker: 'Actionable insights',
    accent: 'white',
    image: '/images/shuttle_story_insights_en.png',
    items: [
      {
        icon: 'check-circle',
        title: '01 — Certainty',
        text: 'Travelers want certainty, not more options. They need to know their transfer will be there on time.',
      },
      {
        icon: 'message-square',
        title: '02 — Customer Service as a contingency',
        text: 'Customer Service was the contingency “product.” Every change or question became a ticket.',
      },
      {
        icon: 'alert',
        title: '03 — Operational data',
        text: 'The costliest errors: pickup windows that were too short, incorrect flights, and outdated passenger information.',
      },
    ],
    footnote:
      'Synthesis using an empathy map, persona, service blueprint, and journey map — used to make decisions, not just document findings.',
  },
  {
    number: '06',
    title: 'Where the experience breaks down',
    kicker: 'Journey map',
    accent: 'white',
    image: '/images/shuttle_story_journey_en.png',
    body: 'The journey starts on a high note (planning the trip, getting a quote, confirming). The curve drops when changes or delays arise and the only option is to contact Customer Service.\n\nThe worst emotional moment comes close to airport arrival: uncertainty about whether transportation will be there.',
    footnote: 'Conclusion: the product needed to support the reservation after purchase — not just sell the transfer.',
  },
  {
    number: '07',
    title: 'From insight to MVP',
    kicker: 'Solution definition',
    accent: 'white',
    body: 'I prioritized with MoSCoW to avoid building “the complete travel app” and focus instead on the flow that unlocked operations and reduced friction.',
    groups: [
      {
        title: 'MVP must-haves',
        items: [
          { icon: 'map', title: 'Pickup & drop-off', text: 'Confirm / edit locations.' },
          { icon: 'route', title: 'Flight', text: 'Validate flight information.' },
          { icon: 'gauge', title: 'Safe schedule', text: 'Select a pickup time that ensures an on-time arrival.' },
          { icon: 'users', title: 'Passengers', text: 'Confirm passengers and transfer type.' },
        ],
      },
      {
        title: 'Could-have (later)',
        items: [
          { icon: 'rocket', title: 'After the MVP', text: 'Tracking, check-in, extras/upsell, native app.' },
        ],
      },
    ],
  },
  {
    number: '08',
    title: 'Ideation process',
    kicker: 'Ideation and architecture',
    accent: 'white',
    body: 'Benchmarking booking apps → MoSCoW prioritization → information architecture (sitemap, card sorting, user flow) → low/mid-fidelity wireframes → testing → iteration.',
    items: [
      {
        icon: 'layers',
        title: 'Design principle',
        text: 'Progressive disclosure: a 4-step wizard to reduce cognitive load and complete critical data without overwhelming travelers.',
      },
      {
        icon: 'flask',
        title: 'Early validation',
        text: 'We went back to users between architecture and wireframes to validate the structure before polishing the UI.',
      },
    ],
  },
  {
    number: '09',
    title: 'Confirmation flow — mid fidelity',
    kicker: 'Wireframes (mid)',
    accent: 'white',
    body: 'Flow structure:\n\n1. Contextual welcome — “information is missing to secure your service”\n2. Pickup & Drop-off\n3. Flight info\n4. Pickup schedule\n5. Passengers',
    gallery: [
      '/images/shuttle_central_login.jpg',
      '/images/shuttle_central_reservation.jpg',
      '/images/shuttle_central_schedule.jpg',
    ],
    footnote:
      'UX decision: each step includes Edit / Confirm to give users control without sacrificing speed. The progress indicator provides orientation and reduces perceived abandonment.',
  },
  {
    number: '10',
    title: 'Insight → design decision',
    kicker: 'Key product decision',
    accent: 'white',
    image: '/images/shuttle_central_schedule.jpg',
    items: [
      {
        icon: 'alert',
        title: 'Problem',
        text: 'Travelers chose pickup windows that were too short. This led to delay reports and the risk of missed flights.',
      },
      {
        icon: 'check-circle',
        title: 'Solution',
        text: 'Instead of a free-form time picker, we limited the choice to 3 calculated schedule options designed to ensure an on-time arrival.',
      },
      {
        icon: 'shield-check',
        title: 'Why it matters',
        text: 'It is a poka-yoke: the design prevents the operational error before it reaches Customer Service or Logistics.',
      },
    ],
    footnote: 'Microcopy: “The driver can wait for you until an hour after the established pickup.”',
  },
  {
    number: '11',
    title: 'Style guide — a foundation for scaling',
    kicker: 'Design system',
    accent: 'white',
    body: 'I defined a visual system aligned with Shuttle Central’s branding to accelerate handoff and future features.',
    items: [
      { icon: 'palette', title: 'Brand and illustrations', text: 'Visual identity and service assets.' },
      { icon: 'sparkles', title: 'Palette + states', text: 'Primary palette and alert states.' },
      { icon: 'pen-tool', title: 'Typography', text: 'Quicksand — hierarchy from H1 → Description.' },
      { icon: 'boxes', title: 'Components', text: 'Buttons, steppers, inputs (empty, active, filled, blocked, error).' },
    ],
    footnote:
      'Outcome: less ambiguity during implementation and a reusable foundation for check-in, tracking, and extras.',
  },
  {
    number: '12',
    title: 'UI design',
    kicker: 'UI — main flow',
    accent: 'white',
    body: 'Shuttle Central’s branding was preserved to maintain consistent communication and positioning, with a focus on clarity, success/error states, and unambiguous CTAs.',
    gallery: [
      '/images/shuttle_central_mockup.jpg',
      '/images/shuttle_central_login.jpg',
      '/images/shuttle_central_reservation.jpg',
      '/images/shuttle_central_schedule.jpg',
    ],
    items: [
      { icon: 'smartphone', title: 'Purposeful onboarding', text: 'A clear purpose from the first screen.' },
      { icon: 'clipboard', title: 'Reservation summary', text: 'Shuttle Central + OTA at a glance.' },
      { icon: 'route', title: 'Flight validation', text: 'By flight number or schedule.' },
      { icon: 'gauge', title: 'Safe pickup schedule', text: 'Calculated options, not a free-form time picker.' },
      { icon: 'users', title: 'Passengers', text: 'Clear confirmation of the group and transfer type.' },
    ],
  },
  {
    number: '13',
    title: 'Validation',
    kicker: 'User testing',
    accent: 'white',
    body: 'Method: moderated Think Aloud usability testing · qualitative + quantitative analysis · 15 remote tests · structured interview guide.',
    items: [
      { icon: 'gauge', title: 'SUS 87.5', text: 'The flow was understandable and actionable even for users arriving from an external booking.' },
      { icon: 'timer', title: 'Observed metrics', text: 'Task time, flow completion, success/failure, adaptability, and brand recognition.' },
      { icon: 'flask', title: 'Think Aloud', text: '15 remote sessions with a structured guide.' },
    ],
  },
  {
    number: '14',
    title: 'Results',
    kicker: 'Impact',
    accent: 'white',
    image: '/images/shuttle_story_results_en.png',
    body: 'Self-service in production so travelers can complete and confirm critical data without an agent.',
    href: 'https://ride.shuttlecentral.com',
    hrefLabel: 'Live: ride.shuttlecentral.com',
    items: [
      { icon: 'gauge', title: 'SUS 87.5', text: 'During user validation.' },
      { icon: 'search', title: '23 + 15', text: '23 research sessions + 15 usability tests.' },
      { icon: 'shield-check', title: 'Limited pickup options', text: 'A choice of 3 schedules to prevent operational incidents.' },
    ],
    footnote:
      'Business impact: reduce dependency on Customer Service for confirmations/changes and improve service reliability with complete data.',
  },
  {
    number: '15',
    title: 'New features + redesign',
    kicker: 'Post-launch iteration',
    accent: 'white',
    body: 'After launch, we identified growth opportunities:\n\n1. Upsell module (tours and additional services)\n2. Evolution toward a more complete experience to drive app downloads',
    items: [
      {
        icon: 'rocket',
        title: 'Features added',
        text: 'Check-in · travel QR · real-time tracking · profile · extras · section-based navigation (My Reservation / Tracking / Add Extras / Profile).',
      },
      {
        icon: 'lightbulb',
        title: 'Learning',
        text: 'The MVP solved the data gap. The next layer built confidence on the day of travel and generated incremental revenue.',
      },
    ],
  },
  {
    number: '16',
    title: 'What I learned from this project',
    kicker: 'Learnings',
    accent: 'white',
    items: [
      {
        icon: 'route',
        title: '01',
        text: 'In a B2B2C model through OTAs, the critical UX may happen post-purchase: closing the gap between partner and operations.',
      },
      {
        icon: 'gauge',
        title: '02',
        text: 'Limiting options (3 schedules) can create more value than giving users “full control.”',
      },
      {
        icon: 'heart-handshake',
        title: '03',
        text: 'Designing with CX and Logistics from the start prevents cosmetic solutions to operational problems.',
      },
      {
        icon: 'boxes',
        title: '04',
        text: 'An early design system accelerates product evolution after the MVP.',
      },
    ],
  },
  {
    number: '17',
    title: 'Thank you',
    kicker: 'Closing',
    accent: 'white',
    image: '/images/shuttle_central_mockup.jpg',
    body: 'Shuttle Central — Traveler Portal\n\nEnd-to-end Product Design · Research → Validation → Impact',
    href: 'https://ride.shuttlecentral.com/login',
    hrefLabel: 'ride.shuttlecentral.com/login',
    footnote: 'Contact: Valechchh05@gmail.com · LinkedIn in the portfolio footer',
  },
];

import type { CaseStudySection } from '../types';

/**
 * Shuttle Central Behance narrative — 11 slides (EN)
 * Compacted for senior read: problem → research → decision → UI → impact.
 */
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
    title: 'Role, objective, and team',
    kicker: 'Ownership',
    accent: 'white',
    itemsBorderless: true,
    itemsStacked: true,
    body: 'As the sole Sr. Product Designer on the flow, I led the product E2E: discovery, definition, information architecture, UI, prototype, validation, and handoff to Frontend.',
    items: [
      {
        title: 'HMW',
        text: 'How might we design a flow where travelers can confidently confirm their reservation without depending on an agent?\n\nHypothesis\nIf we provide a simple self-service WebApp, we will increase the completeness of critical data and reduce operational tickets.',
      },
    ],
    groups: [
      {
        title: 'Who I worked with',
        items: [
          { icon: 'building', title: 'Founders', text: 'Business priorities and MVP scope.' },
          { icon: 'smartphone', title: 'Frontend', text: 'Feasibility, states, and handoff.' },
          { icon: 'route', title: 'Logistics & Revenue', text: 'Operational constraints (ETA, pickup).' },
          { icon: 'heart-handshake', title: 'Customer Experience', text: 'Real incident types and tickets.' },
        ],
      },
    ],
  },
  {
    number: '03',
    title: 'Understanding the problem from the business, support, and traveler perspectives',
    kicker: 'Research',
    accent: 'white',
    image: '/images/shuttle_story_interview_remote.png',
    imageContain: true,
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
    number: '04',
    title: '3 insights that guided the product',
    kicker: 'Actionable insights',
    accent: 'white',
    image: '/images/shuttle_story_insights_en.png',
    imageContain: true,
  },
  {
    number: '05',
    title: 'Where the experience breaks down',
    kicker: 'Journey map',
    accent: 'white',
    image: '/images/shuttle_story_journey_en.png',
    body: 'The journey starts on a high note (plan, quote, confirm). The curve drops when changes or delays arise and the only option is to contact Customer Service.\n\nThe worst emotional moment comes close to airport arrival: uncertainty about whether transportation will be there.',
    footnote: 'Conclusion: the product needed to support the reservation after purchase — not just sell the transfer.',
  },
  {
    number: '06',
    title: 'From insight to MVP',
    kicker: 'Solution definition',
    accent: 'white',
    image: '/images/shuttle_story_mvp_en.png',
    body: 'I prioritized with MoSCoW to avoid building “the complete travel app” and focus on the flow that unlocked operations. Principle: progressive disclosure — a 4-step wizard to reduce cognitive load.',
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
        title: 'Out of scope (later)',
        items: [
          { icon: 'rocket', title: 'Post-MVP', text: 'Tracking, check-in, extras/upsell, native app.' },
        ],
      },
    ],
  },
  {
    number: '07',
    title: 'Insight → design decision',
    kicker: 'Key product decision',
    accent: 'white',
    body: 'Core trade-off: limiting options creates more operational value than giving users “full control.”',
    gallery: ['/images/shuttle_central_pickup_decision.png'],
    galleryFullWidthIndexes: [0],
    galleryBorderless: true,
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
  },
  {
    number: '08',
    title: 'UI — confirmation flow',
    kicker: 'Solution in product',
    accent: 'white',
    galleryBorderless: true,
    galleryUnified: true,
    body: 'Wizard with Edit / Confirm on each step, a progress indicator, and unambiguous CTAs. Shuttle Central branding preserved for continuity with the service.',
    gallery: [
      '/images/shuttle_central_inicio.png',
      '/images/shuttle_central_schedule.png',
      '/images/shuttle_central_ticket.png',
      '/images/shuttle_central_styleguide.png',
    ],
    items: [
      { icon: 'smartphone', title: 'Purposeful onboarding', text: 'A clear purpose from the first screen.' },
      { icon: 'gauge', title: 'Safe pickup schedule', text: 'Calculated options, not a free-form time picker.' },
      { icon: 'clipboard', title: 'Reservation summary', text: 'Shuttle Central + OTA at a glance.' },
      { icon: 'boxes', title: 'Design system foundation', text: 'Components and states to accelerate handoff and post-MVP features.' },
    ],
  },
  {
    number: '09',
    title: 'Validation',
    kicker: 'User testing',
    accent: 'white',
    body: 'Method: moderated Think Aloud usability testing · 15 remote tests · structured guide · qualitative + quantitative analysis.',
    items: [
      { icon: 'flask', title: 'Think Aloud', text: '15 remote sessions with a structured guide.' },
      { icon: 'gauge', title: 'SUS 87.5', text: 'The flow was understandable and actionable even for users arriving from an external booking.' },
      { icon: 'timer', title: 'Observed metrics', text: 'Task time, flow completion, success/failure, adaptability, and brand recognition.' },
    ],
  },
  {
    number: '10',
    title: 'Results and iteration',
    kicker: 'Impact',
    accent: 'white',
    image: '/images/shuttle_story_results_impact.png',
    imageContain: true,
    body: 'Self-service in production so travelers can complete and confirm critical data without an agent.\n\nPost-launch: check-in, QR, tracking, profile, and extras — the next layer built confidence on the day of travel and incremental revenue.',
    href: 'https://ride.shuttlecentral.com',
    hrefLabel: 'Live: ride.shuttlecentral.com',
    items: [
      { icon: 'search', title: '23 + 15', text: '23 research sessions + 15 usability tests.' },
      { icon: 'shield-check', title: 'Limited pickup options', text: '3 schedules to prevent operational incidents.' },
      { icon: 'message-square', title: '−43% CC calls', text: '43% fewer Call Center calls related to reservation issues.' },
    ],
  },
  {
    number: '11',
    title: 'What I learned from this project',
    kicker: 'Learnings',
    accent: 'white',
    items: [
      {
        icon: 'gauge',
        title: '01',
        text: 'Limiting options (3 schedules) can create more value than giving users “full control.”',
      },
      {
        icon: 'heart-handshake',
        title: '02',
        text: 'Designing with CX and Logistics from the start prevents cosmetic solutions to operational problems.',
      },
      {
        icon: 'lightbulb',
        title: '03',
        text: 'Key takeaway — describe the insight or trade-off you take from this project.',
      },
    ],
    href: 'https://ride.shuttlecentral.com/login',
    hrefLabel: 'ride.shuttlecentral.com/login',
  },
];

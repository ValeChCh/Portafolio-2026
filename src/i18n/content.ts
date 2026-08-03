import type { Experience, Project } from '../types';
import {
  EDUCATION_HISTORY,
  EXPERIENCE_HISTORY,
  PROJECTS,
  VALERIA_PROFILE,
} from '../data';
import type { Lang } from './LanguageContext';

const profileEn = {
  ...VALERIA_PROFILE,
  bio: 'Designing intuitive digital experiences and scalable systems that meaningfully connect people with technology.',
  aboutDetailed:
    'I focus especially on the visual and functional side of digital products. I like applying agile methodologies to optimize project development and better understand stakeholder requirements—and above all, the users. I look to bring my ideas into dynamic projects and work with fun teams.',
  location: 'Mexico City, Mexico (Remote worldwide)',
};

const projectsEn: Project[] = [
  {
    ...PROJECTS[0],
    description:
      'Migration of manual processes to digital platforms and Salesforce',
    role: 'Lead Product Designer',
    challenge:
      'Within the Wholesale Transformation Program (designed to enable the business goals of Corporate, CIB, and SME banking), credit origination and sanctioning needed to speed up, standardize, and automate the management of credit limits and sub-limits. Traditionally, assigning and managing financial sub-limits involved complex manual processes, duplicated data entry, physical or obsolete formats (such as information annexes), and complex risk-committee approvals.',
    process: [
      'Research with 12 financial analysts using empathy maps and usability tests of the legacy system.',
      'Definition of user archetypes and a full information architecture redesign through card sorting.',
      'High-fidelity prototypes iterated through regular usability testing with direct feedback.',
      'Thorough documentation of the component system in Figma to streamline delivery to engineering.',
    ],
    solution:
      'A unified, customizable dashboard with drag-and-drop widgets that lets users structure priority data views in seconds. The PDF/Excel report export module was also simplified to a single click.',
    metrics: [
      {
        label:
          'Reduction in contracting times: Free up the account executive’s operations so they can spend more time on client service.',
        icon: 'timer',
      },
      {
        label:
          'Operational autonomy: Enable operations under a previously sanctioned credit “ceiling.”',
        icon: 'shield-check',
      },
      {
        label:
          'Removal of technical friction: Automate triage engine rules and validations, standardizing conditions and policies.',
        icon: 'bot',
      },
    ],
  },
  {
    ...PROJECTS[1],
    description:
      'Self-service for travelers that confirms critical data and reduces operational friction.\nI redesigned the Shuttle Central (YC W22) traveler portal so guests who book via OTAs (Expedia, Booking, etc.) can complete, edit, and confirm their transfer before the trip — turning incomplete data into an operable service.',
    role: 'Product Designer (end-to-end)',
    challenge:
      'Most travelers arrived at Shuttle Central through OTAs (Expedia, Booking, etc.). That external booking left missing or outdated information: flight, pickup, passengers, or destination. Without reliable data, the service became fragile. Customer Service absorbed changes, confirmations, and questions. At the most critical moment of the trip, the traveler depended on an agent.',
    challengeFollowUp: [
      {
        columns: [
          {
            heading: 'Operating without complete data',
            text: '',
          },
          {
            heading: 'High dependency on Customer Service',
            text: '',
          },
          {
            heading: 'Traveler anxiety on airport arrival',
            text: '',
          },
        ],
      },
    ],
    meta: [
      { label: 'Role', value: 'Product Designer (end-to-end)' },
      { label: 'Company', value: 'Shuttle Central' },
      { label: 'Timeline', value: '~2021–2022' },
      {
        label: 'Team',
        value: 'Founders · Frontend · Logistics & Revenue · Customer Experience',
      },
      { label: 'Tools', value: 'Figma · Miro · Asana · Zeplin' },
      {
        label: 'Product',
        value: 'ride.shuttlecentral.com',
        href: 'https://ride.shuttlecentral.com',
      },
    ],
    process: [
      'Analysis of bounce rate by screen in the original registration funnel.',
      'Redesign of onboarding flows with playful micro-interactions, progress bars, and clear explanations about data privacy.',
      'Visual system design with calming color palettes and fast-reading typography to reduce user anxiety.',
    ],
    solution:
      'Onboarding became a conversational, friendly experience with instant rewards (gamification). Initial questions were reduced to the essentials, with the rest collected progressively inside the app.',
    metrics: [
      { label: 'Day-7 retention', value: '+55%' },
      { label: 'Profile completeness', value: '88%' },
      { label: 'App Store rating', value: '4.8★' },
    ],
  },
  {
    ...PROJECTS[2],
    description:
      'Transformation of the online shopping experience for a premium lighting brand, focused on reducing checkout friction.',
    role: 'Lead UX/UI Designer',
    challenge:
      'Lumina, a high-end lighting and furniture brand, had strong traffic but low mobile conversion. Checkout required too many required fields across slow successive pages.',
    process: [
      'Mobile heuristic audit and session recordings with analytics tools.',
      'Design of a single-screen collapsible checkout flow with fast load times.',
      'Implementation of smart address autocomplete and express payment gateways (Apple Pay, Google Pay).',
      'Weekly A/B tests of the new flow against the legacy checkout.',
    ],
    solution:
      'A minimalist cart and checkout redesign where delivery, shipping, and payment information consolidates into one interactive, intelligent column with real-time error validation.',
    metrics: [
      { label: 'Mobile conversion rate', value: '+32%' },
      { label: 'Cart abandonment', value: '-25%' },
      { label: 'Average checkout time', value: '1.5 min' },
    ],
  },
];

const experienceEn: Experience[] = [
  {
    ...EXPERIENCE_HISTORY[0],
    duration: '2024 - Present',
    description: [
      'I designed 2 main flows within wholesale banking credit for account executives inside the bank, to migrate manual processes to interconnected platforms and reduce processes by 50%.',
      'I partner closely with engineers, product managers, and leadership to conceptualize, design, and validate scalable solutions within Salesforce as well as for the bank’s own applications.',
    ],
  },
  {
    ...EXPERIENCE_HISTORY[1],
    description: [
      'Bestel — Collaborated in early stages with stakeholders to map their AS-IS process and Customer Journeys, identifying improvement areas to migrate isolated, disconnected processes to Salesforce.',
      'Interceramic — Redesigned the website by identifying accessibility improvements and highlighting the differentiator of bringing the in-store experience to the web, increasing site visits by 12%.',
      'Soriana — Designed the implementation of new features such as card redesign, cart optimization, and shipment tracking. CSAT increased by 10%.',
    ],
  },
  {
    ...EXPERIENCE_HISTORY[2],
    description: [
      'I designed the reservation Web App, increasing conversion by 20%.',
      'I built high-fidelity interactive prototypes of key micro-interactions to increase emotional engagement.',
      'I collaborated on conversion-rate optimization (CRO) flows using heatmaps and session recordings.',
    ],
  },
  {
    ...EXPERIENCE_HISTORY[3],
    duration: '2020 - 2021',
    description: [
      'I collaborated on interface design for various Banpro Promérica banking services (wallets, corporate banking, ATMs). I also ran usability tests and analyzed results to present to stakeholders.',
    ],
  },
];

const educationEn = [
  {
    degree: 'UX/UI Designer',
    institution: 'Ironhack',
    duration: '2019 - 2020',
    detail: '400-hour bootcamp',
  },
  {
    degree: 'Bachelor’s in Visual Design and Communication',
    institution: 'Universidad Nacional Autónoma de México',
    duration: '2012 - 2016',
    detail: 'Symbolism and three-dimensional media',
  },
  {
    degree: 'Diploma in Web Design and Development',
    institution: 'Universidad Nacional Autónoma de México',
    duration: 'Mar 2021 - Jul 2021',
    detail:
      '240-hour diploma covering basic web programming with HTML, CSS, and Bootstrap for webpage design.',
  },
];

export function getProfile(lang: Lang) {
  return lang === 'en' ? profileEn : VALERIA_PROFILE;
}

export function getProjects(lang: Lang): Project[] {
  return lang === 'en' ? projectsEn : PROJECTS;
}

export function getExperience(lang: Lang): Experience[] {
  return lang === 'en' ? experienceEn : EXPERIENCE_HISTORY;
}

export function getEducation(lang: Lang) {
  return lang === 'en' ? educationEn : EDUCATION_HISTORY;
}

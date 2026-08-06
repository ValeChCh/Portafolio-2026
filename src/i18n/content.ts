import type { Experience, Project } from '../types';
import {
  EDUCATION_HISTORY,
  EXPERIENCE_HISTORY,
  PROJECTS,
  VALERIA_PROFILE,
} from '../data';
import { SHUTTLE_CASE_SECTIONS_EN } from '../data/shuttleCaseStudy.en';
import { SORIANA_CASE_SECTIONS_EN } from '../data/sorianaCaseStudy.en';
import type { Lang } from './LanguageContext';

const profileEn = {
  ...VALERIA_PROFILE,
  bio: 'Designing intuitive digital experiences and scalable systems that meaningfully connect people with technology.',
  aboutDetailed:
    'I design digital products end to end: discovery, opportunity framing, and UI that holds up in delivery. I partner with Product Owners, business, and engineering to align stakeholder requirements with real user needs — and turn them into measurable decisions. I look for teams where design owns outcomes, moves with agile cadence, and focuses on impact, not just screens.',
  location: 'Mexico City, Mexico (Remote worldwide)',
};

const projectsEn: Project[] = [
  {
    ...PROJECTS[0],
    description:
      'Sub-limit approval in Salesforce\nHow I designed the sub-limits flow within the credit sanctioning process to remove manual work between the account executive and risk areas.',
    role: 'Sr. Product Designer',
    challenge: '',
    process: [],
    solution: '',
    meta: [
      { label: 'Role', value: 'Sr. Product Designer' },
      { label: 'Company', value: 'Banco' },
      { label: 'Focus', value: 'E2E flow · Governance · Salesforce' },
      { label: 'Scope', value: 'E2E flow · Governance · Salesforce' },
    ],
    caseStudySections: [
      {
        number: '01',
        title: 'The business problem',
        kicker: 'Context',
        accent: 'white',
        body: 'An account executive can take roughly 3 to 6 months to grant a credit, depending on the client type. Within that credit process, several steps need to be sped up, standardized, and automated to cut the time by at least 50%; one of those steps is managing credit sub-limits.\n\nTraditionally, assigning and managing sub-limits meant complex manual processes (heavy Excel templates), duplicated data capture in Word (similar formats for the account executive and the risk area), and non-standardized communication across teams that could not be measured. That caused delays before the sub-limit could be sanctioned and before the account executive could move on to the next step to release a credit.\n\nConstraint: the redesign had to respect risk governance and process measurement while migrating to Salesforce.',
        itemsTitle: 'Product goals',
        items: [
          {
            icon: 'timer',
            title: 'Faster contracting',
            text: 'Free up Account Executive operations so they can spend more time with clients.',
          },
          {
            icon: 'shield-check',
            title: 'Operational autonomy',
            text: 'Operate under a previously sanctioned credit limit, with risk control intact.',
          },
          {
            icon: 'bot',
            title: 'Less technical friction',
            text: 'Automate rules and validations to standardize capture in a single system and create measurable conversation spaces (Salesforce).',
          },
        ],
      },
      {
        number: '02',
        title: 'Users and governance',
        kicker: 'Research',
        accent: 'white',
        body: 'To design an E2E tool, we aligned the profiles across the operational circuit. This product is not “one screen”: it is a flow with permissions, opinions, and sanctioning.',
        image: '/images/banco_story_proceso_credito_en.png',
        imagePlacement: 'after',
        imageContain: true,
        items: [
          {
            icon: 'user-cog',
            title: 'Account Executive (AE)',
            text: 'Quickly create the credit and detail the sub-limit linked to it.',
          },
          {
            icon: 'scale',
            title: 'Technical Secretariat & Risk Advisor',
            text: 'Assess the proposal, review annexes, and issue a clear opinion (approve / reject).',
          },
          {
            icon: 'landmark',
            title: 'Committee / Sanctioning Authority',
            text: 'A unified, structured view to approve risk.',
          },
        ],
      },
      {
        number: '03',
        title: 'My role and ownership',
        kicker: 'Product Design',
        accent: 'white',
        body: 'I led the product experience for the sub-limits and sanctioning flow: information architecture by profile/permissions, working sessions with business and technology, and standardized UI language.',
        items: [
          {
            icon: 'layout-panel',
            title: 'Architecture by profile',
            text: 'E2E sub-limits flow design tailored to each profile (AE, Risk).',
          },
          {
            icon: 'users',
            title: 'Cross-functional collaboration',
            text: 'Definition workshops with stakeholders to scope flow rules and must-haves, architecture alignment with development, and user outreach/feedback (AE / Risk).',
          },
          {
            icon: 'message-square',
            title: 'Operational UX writing',
            text: 'In-flow instructions, specs and descriptions for each section, and concept alignment across teams.',
          },
        ],
      },
      {
        number: '04',
        title: 'Key product decisions',
        kicker: 'Trade-offs',
        accent: 'white',
        body: 'Three decisions that define product value — not just “better UI,” but measurable operations inside Salesforce.',
        items: [
          {
            icon: 'boxes',
            title: 'One measurable front end',
            text: 'Migrate sanctioning to Salesforce, gathering required information in a single front while keeping process measurement.',
          },
          {
            icon: 'pen-tool',
            title: 'Easy-to-complete flow',
            text: 'Parameterize validations and auto-complete required fields based on data captured in processes prior to sub-limits.',
          },
          {
            icon: 'message-square',
            title: 'Measurable cross-cutting chat',
            text: 'In-flow space for teams to adjust data without chats outside the system.',
          },
        ],
      },
      {
        number: '05',
        title: 'Solution in product',
        kicker: 'UI / Salesforce',
        accent: 'white',
        image: '/images/bbva_mockup.jpg',
        items: [
          {
            icon: 'eraser',
            title: 'No duplicated manual formats',
            text: 'Capture lives in the system; information stays transparent for each profile.',
          },
          {
            icon: 'scan-eye',
            title: 'Decisions with context',
            text: 'Unified view of sub-limits and financial information for opinion and sanctioning.',
          },
          {
            icon: 'message-square',
            title: 'Cross-team communication',
            text: 'A unified chat where everyone involved stays informed of sub-limit progress and/or changes.',
          },
        ],
      },
      {
        number: '06',
        title: 'Outcomes and learnings',
        kicker: 'Impact',
        accent: 'white',
        items: [
          {
            icon: 'target',
            title: 'Intended outcome',
            text: 'Less redundancy, faster E2E, and clearer sanctioning with the same risk control.',
          },
          {
            icon: 'target',
            title: 'Test results',
            text: 'Early sessions with account executives show an 84% TSR.',
          },
          {
            icon: 'sticky-note',
            title: 'Learning',
            text: 'Although Salesforce is an efficient and powerful tool, I faced constraints when proposing UI elements because customization can be limited or imply development delays.',
          },
        ],
      },
    ],
  },
  {
    ...PROJECTS[1],
    description:
      'Self-service for travelers / How I designed the portal that confirms critical transfer data booked via OTAs and reduces operational friction',
    role: 'Sr. Product Designer · End-to-end',
    challenge: '',
    meta: [
      { label: 'Role', value: 'Sr. Product Designer · End-to-end' },
      { label: 'Company', value: 'Shuttle Central (YC W22)' },
      { label: 'Focus', value: 'Research · UX · UI · Validation' },
    ],
    process: [],
    solution: '',
    caseStudySections: SHUTTLE_CASE_SECTIONS_EN,
  },
  {
    ...PROJECTS[2],
    description:
      'Retail ecommerce · cards, tracking & combos\nHow I designed catalog and post-purchase features in Salesforce to improve clarity, trust, and CSAT.',
    role: 'Sr. Product Designer',
    challenge: '',
    process: [],
    solution: '',
    meta: [
      { label: 'Role', value: 'Sr. Product Designer · TS4' },
      { label: 'Client', value: 'Soriana Ecommerce' },
      { label: 'Focus', value: 'Cards · Tracking · Combos · Design Sprint' },
    ],
    caseStudySections: SORIANA_CASE_SECTIONS_EN,
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
      'I mapped end-to-end journeys and flows across digital and physical channels (ATM, corporate banking, and wallets) to surface friction and propose prioritized experience improvements.',
      'I prototyped high-fidelity solutions and documented research findings to align product, business, and engineering on design decisions.',
    ],
  },
  {
    ...EXPERIENCE_HISTORY[4],
    role: 'UX/UI Designer',
    company: 'Universidad Nacional Autónoma de México',
    duration: '2017 - 2020',
    description: [
      'As User Experience Designer, I worked at UNAM’s Educational Guidance Center on the SEIVOC vocational guidance platform. I led the full visual proposal for the 2018 web version and ran user testing.',
      'We digitized the vocation and aptitude exam to reach more UNAM high-school students and, by expanding scope, students from Bachilleres, CECyT, IEMS, CONALEP, and DGETI.',
    ],
  },
  {
    ...EXPERIENCE_HISTORY[5],
    role: 'Freelance Visual Designer',
    company: 'VERITest - Hertz',
    duration: '2016 - 2018',
    description: [
      'I led content design for social media, mailing, and advertising materials (business cards, brochures, banners, posters) for Centro VERITest Marketing, helping expand their reach and better connect with their target audience.',
      'I designed and conceptualized Hertz advertising materials for metropolitan-area offices (business cards, flyers, and banners). With that advertising, Hertz could reach new clients and better promote its products.',
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

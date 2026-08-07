import type { Experience, Project } from '../types';
import {
  EDUCATION_HISTORY,
  EXPERIENCE_HISTORY,
  PROJECTS,
  VALERIA_PROFILE,
} from '../data';
import { SHUTTLE_CASE_SECTIONS_EN } from '../data/shuttleCaseStudy.en';
import { SORIANA_CASE_SECTIONS_EN } from '../data/sorianaCaseStudy.en';
import { VIVA_CASE_SECTIONS_EN } from '../data/vivaCaseStudy.en';
import type { Lang } from './LanguageContext';

const profileEn = {
  ...VALERIA_PROFILE,
  bio: 'Sr. Product Designer · end-to-end flows in B2B banking, traveltech, and retail. Ownership from discovery to measurable delivery.',
  aboutDetailed:
    'I design digital products end to end across B2B banking, traveltech, and retail: discovery, opportunity framing, and UI that holds up in delivery. I have led E2E flows where design negotiates with business, risk, and operations — not just screens. I partner with Product Owners, engineering, and stakeholders to align requirements with real needs and turn them into measurable decisions (operational friction, adoption, CSAT). I look for teams where design owns outcomes and moves with agile cadence.',
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
      'Transfer white label\nHow I adapted Shuttle Central’s sales platform to Viva Aerobus’s design system to strengthen the commercial alliance.',
    role: 'Sr. Product Designer',
    challenge: '',
    process: [],
    solution: '',
    meta: [
      { label: 'Role', value: 'Sr. Product Designer · Shuttle Central' },
      { label: 'Partner', value: 'Viva Aerobus' },
      { label: 'Focus', value: 'White Label · Brand System · Booking' },
    ],
    caseStudySections: VIVA_CASE_SECTIONS_EN,
  },
  {
    ...PROJECTS[3],
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
      'Led end-to-end design of 2 wholesale credit flows (including sub-limit sanctioning) to move manual Account Executive ↔ Risk work into Salesforce, targeting ~50% process reduction.',
      'Facilitated definition with business, risk, and engineering: permission-based architecture, validations, and build-ready handoff for Salesforce and internal bank apps.',
    ],
  },
  {
    ...EXPERIENCE_HISTORY[1],
    description: [
      'Bestel — Early discovery with stakeholders: AS-IS mapping and journeys to prioritize migrating disconnected processes into Salesforce.',
      'Interceramic — Redesigned the website for accessibility and a stronger digital store experience; +12% site visits.',
      'Soriana — Designed and validated ecommerce features (cards, cart, shipment tracking, and combos) in Salesforce; +10% CSAT.',
    ],
  },
  {
    ...EXPERIENCE_HISTORY[2],
    description: [
      'Led traveler self-service (OTA → critical data confirmation): research, UX/UI, validation, and handoff; −43% Call Center calls related to reservations.',
      'Designed the booking Web App and partnered on CRO using heatmaps and session recordings; +20% conversion.',
    ],
  },
  {
    ...EXPERIENCE_HISTORY[3],
    duration: '2019 - 2020',
    description: [
      'Designed multi-channel interfaces for Banpro Promérica (wallets, corporate banking, ATMs) and ran usability tests for stakeholders.',
      'Mapped end-to-end journeys across digital and physical channels to prioritize friction and align product, business, and engineering.',
    ],
  },
  {
    ...EXPERIENCE_HISTORY[4],
    duration: '2017 - 2019',
    description: [
      'Designed the visual system and ran user testing for SEIVOC (vocational guidance) at UNAM’s Educational Guidance Center — 2018 web release.',
      'Digitized the vocation and aptitude exam to expand reach to UNAM high schools and Bachilleres, CECyT, IEMS, CONALEP, and DGETI.',
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

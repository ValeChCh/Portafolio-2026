import type { Experience, Project } from '../types';
import {
  EDUCATION_HISTORY,
  EXPERIENCE_HISTORY,
  PROJECTS,
  VALERIA_PROFILE,
} from '../data';
import { SHUTTLE_CASE_SECTIONS_EN } from '../data/shuttleCaseStudy.en';
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
    role: 'UX Designer',
    challenge: '',
    process: [],
    solution: '',
    meta: [
      { label: 'Role', value: 'UX Designer' },
      { label: 'Company', value: 'Banco' },
      { label: 'Program', value: 'Wholesale Transformation' },
    ],
    caseStudySections: [
      {
        number: '01',
        title: 'The business challenge',
        body:
          'Within the credit process, several steps need to be sped up, standardized, and automated; one of those steps is the management of credit limits and sub-limits. Traditionally, assigning and managing financial sub-limits involved complex manual processes, duplicated data entry, physical or obsolete formats (such as information annexes), and complex approvals by a risk committee.',
        imagePlacement: 'after',
        itemsTitle: 'Expected Impact',
        accent: 'white',
        items: [
          {
            icon: 'timer',
            title: 'Reduced contracting times',
            text: 'Free up the account executive’s operations so they can spend more time on client service.',
          },
          {
            icon: 'shield-check',
            title: 'Operational autonomy',
            text: 'Enable operations under a previously sanctioned credit limit.',
          },
          {
            icon: 'bot',
            title: 'Removal of technical friction',
            text: 'Automate rules and validations that standardize and simplify the drafting of annexes.',
          },
        ],
      },
      {
        number: '02',
        title: 'User Understanding',
        body:
          'To design a holistic end-to-end tool, the key profiles across the project’s operational circuit were identified and aligned:',
        image: '/images/banco_story_interviews_en.png',
        imagePlacement: 'after',
        accent: 'white',
        items: [
          {
            icon: 'user-cog',
            title: 'Account Executive (AE)',
            text: 'Needs to quickly create the credit and, with that, detail the sub-limit linked to that credit.',
          },
          {
            icon: 'scale',
            title: 'Technical Secretariat & Risk Advisor',
            text: 'Need to assess the credit-limit proposal, review its annexes, and issue a clear opinion (approve/reject).',
          },
          {
            icon: 'landmark',
            title: 'Committee / Sanctioning Authority',
            text: 'Needs a unified, structured view to approve risk (detailed credit view).',
          },
        ],
      },
      {
        number: '03',
        title: 'My role as Product and my cross-functional collaboration',
        accent: 'white',
        items: [
          {
            icon: 'layout-panel',
            title: 'Information architecture & navigation',
            text: 'I led the information architecture and navigation, segmenting the experience according to each user’s profile and permissions.',
          },
          {
            icon: 'users',
            title: 'Cross-functional collaboration',
            text: 'I worked in ongoing sessions with stakeholders, Product Owners, Technology Architecture, users (Account Executive and Risk Area), and Content teams.',
          },
          {
            icon: 'message-square',
            title: 'UX Writing standardization',
            text: 'I aligned microcopy and clear interface instructions (notification messages, guidance for sub-limit registration, and standardized language for the teams).',
          },
        ],
      },
      {
        number: '04',
        title: 'Process & Architecture',
        accent: 'white',
        groups: [
          {
            title: 'Redesign for sub-limit approval',
            items: [
              {
                icon: 'boxes',
                title: 'Elimination of manual processes',
                text: 'The current approval process was migrated to Salesforce, bringing the required information into a single front end while keeping process measurement in place.',
              },
            ],
          },
          {
            title: 'Managing Technical Complexity and Business Rules',
            items: [
              {
                icon: 'currency',
                title: 'Flow variation depending on banking products',
                text: 'The system was configured to validate conversions (for example, multi-currency in dollars) and auto-complete required subfamilies and fields based on the selected product.',
              },
              {
                icon: 'list-checks',
                title: 'Measurable cross-cutting chat',
                text: 'Provide a space within the flow so different areas can communicate to adjust data, avoiding chats outside the system.',
              },
            ],
          },
        ],
      },
      {
        number: '05',
        title: 'Results',
        accent: 'white',
        items: [
          {
            icon: 'eraser',
            title: 'Eliminated redundancies',
            text: 'Manual capture formats were replaced, avoiding duplication and making information transparent for different profiles.',
          },
          {
            icon: 'zap',
            title: 'Accelerated end-to-end flow',
            text: 'The credit sanctioning and contracting lifecycle was significantly reduced by enabling access to information in a single system.',
          },
          {
            icon: 'scan-eye',
            title: 'Clearer decision-making',
            text: 'Sub-limit and financial information was unified through a standardized component system.',
          },
        ],
      },
    ],
  },
  {
    ...PROJECTS[1],
    description:
      'Self-service for travelers / How I designed the portal that confirms critical transfer data booked via OTAs and reduces operational friction',
    role: 'Product Designer · End-to-end',
    challenge: '',
    meta: [
      { label: 'Role', value: 'Product Designer · End-to-end' },
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

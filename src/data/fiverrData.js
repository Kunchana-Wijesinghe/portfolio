import { personalInfo, projectsData, skillsData } from './portfolioData'

/**
 * Fiverr URLs Configuration:
 * - reactBugFixingGig: Verified live link to your published React bug-fixing Gig.
 */
export const fiverrUrls = {
  reactBugFixingGig: 'https://www.fiverr.com/s/GPzZ9w3',
}

export const fiverrProfileInfo = {
  sellerName: personalInfo.name,
  tagline: 'Freelance Software & Web Developer',
  headline: 'Building & Improving Web Applications',
  subheadline:
    'I help clients build responsive web applications, integrate frontend interfaces with backend REST APIs, and resolve tricky technical and state bugs. Focused on clean code, reliable performance, and maintainable architecture.',
  location: personalInfo.location,
}

/**
 * Currently published Fiverr Gigs.
 * Exactly ONE published gig: React frontend bug fixing.
 */
export const fiverrPublishedGigs = [
  {
    id: 'react-bug-fixing',
    title: 'React Frontend Bug Fixing & UI Troubleshooting',
    badge: 'Published Fiverr Gig',
    statusTag: 'ACTIVE GIG',
    description:
      'Diagnosing and resolving component errors, state synchronization issues, form validation glitches, and responsive layout bugs in React & modern JavaScript web applications.',
    url: fiverrUrls.reactBugFixingGig,
    icon: '⚛️',
    tags: ['React 18 / 19', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS', 'Debugging'],
    highlights: [
      'Targeted component and hook debugging focused on avoiding unintended side effects',
      'Responsive design and mobile layout overflow fixes',
      'Clear root-cause explanations provided with delivered code',
      'Prompt delivery via structured Fiverr order milestones',
    ],
  },
]

/**
 * Custom Project Inquiries (Not a second published gig or fixed package).
 * Clearly presented as available for bespoke client inquiries on Fiverr.
 */
export const customInquiryInfo = {
  title: 'Custom Web Development & Integration',
  badge: 'Available for Custom Project Inquiry',
  statusTag: 'CUSTOM INQUIRY',
  description:
    'Need custom React components, frontend-to-backend REST API integration, or a tailored web feature? I accept custom project inquiries on Fiverr based on your repository, Figma designs, or specifications.',
  icon: '🎯',
  tags: ['React SPAs', 'REST API Integration', 'Spring Boot', 'MySQL', 'Tailwind CSS'],
  highlights: [
    'Custom scope defined directly from your repository or Figma mockups',
    'Transparent timeline estimates & milestone breakdown',
    'Custom Fiverr offer tailored specifically to your project requirements',
    'Full source code delivery with setup instructions and documentation',
  ],
}

/**
 * Core freelance capability domains
 */
export const freelanceCapabilities = [
  {
    id: 'frontend',
    icon: '💻',
    title: 'Modern Web Development',
    description:
      'Building performant, accessible Single Page Applications (SPAs) with React, modern JavaScript (ES6+), TypeScript, Vite, and Tailwind CSS.',
    technologies: ['React 18 / 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Zustand'],
  },
  {
    id: 'fullstack-api',
    icon: '⚙️',
    title: 'Backend APIs & Integration',
    description:
      'Implementing secure RESTful endpoints, relational database schemas, and microservice integration with Java Spring Boot, ASP.NET Core, and MySQL.',
    technologies: ['Java', 'Spring Boot', 'ASP.NET Core', 'MySQL', 'REST APIs'],
  },
  {
    id: 'bug-fixing',
    icon: '🔍',
    title: 'Frontend Troubleshooting',
    description:
      'Isolating and resolving UI defects, state race conditions, uncontrolled inputs, and styling inconsistencies across mobile and desktop viewports.',
    technologies: ['Component Lifecycle', 'State Hooks', 'Flexbox / Grid', 'DevTools'],
  },
  {
    id: 'devops-tooling',
    icon: '🐳',
    title: 'Dockerization & Tooling',
    description:
      'Setting up reproducible container environments with Docker & Compose, configuring automated GitHub Actions workflows, and Nginx reverse proxies.',
    technologies: ['Docker', 'Docker Compose', 'GitHub Actions', 'Nginx', 'Git'],
  },
]

/**
 * Client Engagement Workflow
 */
export const freelanceWorkflow = [
  {
    step: '01',
    title: 'Project Discussion',
    description:
      'Reach out on Fiverr with your project details, repository, Figma designs, or problem statement. We discuss goals and verify technical feasibility.',
    tag: 'CONSULTATION',
  },
  {
    step: '02',
    title: 'Scope & Custom Offer',
    description:
      'For custom work or specific gig orders, we establish a clearly scoped proposal and timeline directly through Fiverr before work begins.',
    tag: 'ALIGNMENT',
  },
  {
    step: '03',
    title: 'Disciplined Development',
    description:
      'I write clean, modular, and maintainable code adhering to software engineering best practices, with status checkpoints along the way.',
    tag: 'DEVELOPMENT',
  },
  {
    step: '04',
    title: 'Testing & Verification',
    description:
      'Thorough checks across common responsive viewports and edge cases to verify expected functionality before delivery.',
    tag: 'VERIFICATION',
  },
  {
    step: '05',
    title: 'Delivery & Handover',
    description:
      'You receive the repository branch, pull request, or files with clean documentation and explanations so you can maintain or expand the project easily.',
    tag: 'DELIVERY',
  },
]

/**
 * Client FAQs
 */
export const fiverrFaqs = [
  {
    q: 'What services do you currently offer on Fiverr?',
    a: 'I currently offer a published Fiverr Gig for React Frontend Bug Fixing & UI Troubleshooting. Additionally, I accept custom project inquiries for React component development, REST API integration, and full-stack features via custom Fiverr offers.',
  },
  {
    q: 'How do I discuss a custom project that is not covered by your bug-fixing Gig?',
    a: 'You can message me directly on Fiverr by opening my active Gig and clicking "Contact Seller" with your repository, UI mockups, or task description. I will review your requirements and send you a custom offer with a clear scope and timeline.',
  },
  {
    q: 'How does the ordering and payment process work?',
    a: 'All project discussions, custom offers, milestones, and payments are handled directly through Fiverr, providing a structured order workflow.',
  },
  {
    q: 'What do you need from me to get started on an inquiry?',
    a: 'Depending on the task: a clear summary of what you need built or fixed, any wireframes or Figma links, repository access (GitHub/GitLab) or component files, and API endpoints if applicable.',
  },
  {
    q: 'Do you provide revisions if adjustments are needed?',
    a: 'Yes. Revisions are included with every project to ensure the delivered solution aligns with the agreed scope and functional requirements.',
  },
]

/**
 * Returns projects from portfolioData.js selected for client showcase with documented contributions
 */
export function getFreelanceProjects() {
  return projectsData.map((project) => ({
    ...project,
    clientSummary: project.cardDescription || project.description,
  }))
}

export { skillsData, personalInfo }

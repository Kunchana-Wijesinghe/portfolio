import { personalInfo, projectsData, skillsData } from './portfolioData'

export const fiverrProfileInfo = {
  sellerName: personalInfo.name,
  tagline: 'Freelance Software & Frontend Developer',
  headline: 'Engineering Clean, Scalable Web Applications & Frontend Solutions',
  subheadline:
    '3rd Year Computer Science undergraduate at SLIIT with practical experience in React, TypeScript, Java/Spring Boot, and cloud microservices. Available on Fiverr for custom web development, frontend engineering, and technical problem-solving.',
  fiverrUrl: 'https://www.fiverr.com/s/GPzZ9w3',
  university: personalInfo.university,
  location: personalInfo.location,
}

/**
 * Active Fiverr Gigs: Easily extensible by adding new gig objects here.
 * The current React bug-fixing gig is one entry and does not dictate the page structure.
 */
export const fiverrActiveGigs = [
  {
    id: 'react-bug-fixing',
    title: 'React Frontend Bug Fixing & UI Troubleshooting',
    badge: 'Active Gig',
    description:
      'Diagnosing and resolving component errors, state synchronization issues, form validation glitches, and responsive layout bugs in React & modern JavaScript web applications.',
    url: 'https://www.fiverr.com/s/GPzZ9w3',
    icon: '⚛️',
    tags: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Debugging'],
    highlights: [
      'Targeted component & hook debugging',
      'Responsive design & CSS overflow repairs',
      'Clean root-cause explanations',
      'Fast turnaround via Fiverr',
    ],
  },
]

/**
 * Freelance capability domains
 */
export const freelanceCapabilities = [
  {
    id: 'frontend',
    icon: '💻',
    title: 'Modern Frontend Development',
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
    title: 'Frontend Troubleshooting & Refinement',
    description:
      'Isolating and resolving UI defects, state race conditions, uncontrolled inputs, and styling inconsistencies across mobile and desktop viewports.',
    technologies: ['Component Lifecycle', 'State Hooks', 'Flexbox / Grid', 'DevTools'],
  },
  {
    id: 'devops-tooling',
    icon: '🐳',
    title: 'Dockerization & CI/CD Pipelines',
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
      'Send a message on Fiverr describing your project requirements, UI mockups (Figma), or code repository. We discuss goals and verify technical feasibility.',
    tag: 'CONSULTATION',
  },
  {
    step: '02',
    title: 'Scope & Custom Offer',
    description:
      'I prepare a clearly scoped proposal with timeline estimates and send you a custom offer directly on Fiverr so you are fully protected by escrow.',
    tag: 'ALIGNMENT',
  },
  {
    step: '03',
    title: 'Disciplined Development',
    description:
      'I write clean, modular, and maintainable code adhering to software engineering best practices, with status checkpoints along the way.',
    tag: 'EXECUTION',
  },
  {
    step: '04',
    title: 'Testing & Verification',
    description:
      'Thorough testing across viewports and edge cases to ensure the deliverable is bug-free, performs smoothly, and meets all agreed requirements.',
    tag: 'QUALITY ASSURANCE',
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
    q: 'Can I discuss a custom project that is not listed as a specific Gig?',
    a: 'Yes, absolutely. Most client projects have unique specifications. Message me on Fiverr with your requirements, designs, or existing codebase, and I will prepare a customized quote and timeline for you.',
  },
  {
    q: 'How does the ordering and payment process work?',
    a: 'All project discussions, custom offers, milestones, and payments are handled securely through Fiverr. Your payment is held in escrow by Fiverr and only released when you have reviewed and approved the delivered work.',
  },
  {
    q: 'What do you need from me to get started?',
    a: 'Depending on the project: a clear summary of what you need built or fixed, any wireframes or Figma links, repository access (GitHub/GitLab) or component files, and API endpoints if applicable.',
  },
  {
    q: 'Do you provide revisions if adjustments are needed?',
    a: 'Yes. Revisions are included with every project to ensure the delivered solution aligns with the agreed scope and functional requirements.',
  },
  {
    q: 'What is your background and technical foundation?',
    a: 'I am a 3rd-year Computer Science undergraduate at SLIIT with deep applied training in advanced software engineering, distributed systems, algorithms, and full-stack development.',
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

import { projectsData } from './portfolioData'

export const fiverrGigInfo = {
  gigUrl: 'https://www.fiverr.com/s/GPzZ9w3',
  title: 'React Frontend Bug Fixing & UI Troubleshooting',
  serviceTag: 'FIVERR GIG • REACT SPECIALIST',
  heroHeadline: 'Fixing React Frontend Bugs with Speed & Precision',
  heroSubtitle:
    'Encountering broken components, state synchronization errors, form glitches, or responsive layout issues? I diagnose and resolve React, TypeScript, and modern JavaScript frontend bugs cleanly and efficiently.',
  sellerName: 'Kunchana Wijesinghe',
  sellerRole: 'React & Frontend Developer',
}

export const bugCategories = [
  {
    id: 'component-lifecycle',
    icon: '⚛️',
    title: 'Component Rendering & Lifecycle',
    description:
      'Diagnosing and resolving unexpected unmounts, hydration mismatches, and re-rendering loops.',
    symptoms: [
      'Infinite re-render loops caused by state updates',
      'Missing or improper key prop warnings in lists',
      'Conditional rendering flickering or failing to mount',
      'Component not re-rendering when props or state change',
    ],
  },
  {
    id: 'state-management',
    icon: '⚡',
    title: 'State Management & React Hooks',
    description:
      'Fixing stale closures, improper hook dependencies, and state synchronization glitches.',
    symptoms: [
      'Stale state captured inside event handlers or timeouts',
      'Improper useEffect dependency arrays causing repeat calls',
      'State loss during tab switches or modal interactions',
      'Zustand, Context API, or Redux store update desync',
    ],
  },
  {
    id: 'forms-inputs',
    icon: '📝',
    title: 'Forms, Inputs & Validation',
    description:
      'Resolving controlled vs. uncontrolled input warnings, form submissions, and schema errors.',
    symptoms: [
      'Warning: A component is changing an uncontrolled input to controlled',
      'Form submit handlers not triggering or refreshing the page',
      'Input field losing focus after typing a single character',
      'Validation messages not updating or blocking valid input',
    ],
  },
  {
    id: 'responsive-css',
    icon: '🎨',
    title: 'Responsive Layouts & CSS Glitches',
    description:
      'Eliminating viewport overflow, broken flexbox/grid alignments, and Tailwind CSS conflicts.',
    symptoms: [
      'Unwanted horizontal scrolling on mobile viewports',
      'Flexbox or CSS Grid items collapsing or overlapping',
      'Z-index stacking context bugs with modals and dropdowns',
      'Tailwind CSS classes not applying due to specificity issues',
    ],
  },
  {
    id: 'api-data-display',
    icon: '🌐',
    title: 'API Data Fetching & Async State',
    description:
      'Eliminating runtime errors when consuming asynchronous API data in components.',
    symptoms: [
      'Uncaught TypeError: Cannot read properties of undefined (reading "map")',
      'Loading spinners hanging indefinitely on API errors',
      'Race conditions when switching fast between tabs or filters',
      'Missing error boundary fallbacks for failed network calls',
    ],
  },
  {
    id: 'ui-interactions',
    icon: '🖱️',
    title: 'UI Interactions & Event Handlers',
    description:
      'Fixing unresponsive buttons, dropdown toggles, modal backdrop clicks, and touch gestures.',
    symptoms: [
      'Click outside handler closing dropdowns prematurely',
      'Background page scrolling when a modal dialog is open',
      'Event bubbling causing unintended parent click triggers',
      'Touch events failing or stuttering on iOS/Android browsers',
    ],
  },
]

export const howIWorkSteps = [
  {
    step: '01',
    title: 'Review the Issue',
    description:
      'You share your repository, component files, or reproduction steps along with error screenshots. I inspect the codebase, reproduce the bug locally, and identify the root cause.',
    tag: 'DIAGNOSIS',
  },
  {
    step: '02',
    title: 'Agree on Scope',
    description:
      'We confirm the exact scope of the fix, expected behavior, and turnaround time directly on Fiverr before work begins, ensuring complete transparency.',
    tag: 'ALIGNMENT',
  },
  {
    step: '03',
    title: 'Implement Targeted Fix',
    description:
      'I write clean, minimal, and maintainable code that resolves the issue directly without unnecessary refactoring or risking regressions in unrelated modules.',
    tag: 'DEVELOPMENT',
  },
  {
    step: '04',
    title: 'Test Affected Functionality',
    description:
      'I thoroughly test the fixed component across multiple viewport sizes (mobile, tablet, desktop) and verify that no console warnings or edge-case errors remain.',
    tag: 'VERIFICATION',
  },
  {
    step: '05',
    title: 'Explain & Handover',
    description:
      'You receive the corrected files or pull request through Fiverr alongside a concise explanation of why the bug occurred and how it was resolved for future reference.',
    tag: 'DELIVERY',
  },
]

export const fiverrFaqs = [
  {
    q: 'What do you need from me to fix the bug?',
    a: 'You can provide access to your repository (GitHub/GitLab), a zip file containing the affected components, or a reproduction link (CodeSandbox/StackBlitz), along with error screenshots and steps to reproduce the issue.',
  },
  {
    q: 'Will fixing this bug affect other parts of my application?',
    a: 'No. I focus on surgical, non-destructive bug fixes targeted specifically to the affected component and its state, ensuring no existing features or styles are broken.',
  },
  {
    q: 'Which versions of React and frontend tools do you work with?',
    a: 'I work with React 18, React 19, TypeScript, modern JavaScript (ES6+), Vite, Next.js, Tailwind CSS, styled-components, and state tools such as Zustand, Redux, and React Context.',
  },
  {
    q: 'How do we communicate and place orders?',
    a: 'All project discussions, order agreements, and deliveries are conducted securely through Fiverr. This protects your order and ensures clear milestone tracking.',
  },
  {
    q: 'How fast can you deliver the bug fix?',
    a: 'Most single-component bug fixes and styling issues are diagnosed and delivered promptly within the turnaround time agreed upon on Fiverr.',
  },
]

/**
 * Returns real, completed projects from portfolioData.js that demonstrate React & frontend engineering
 */
export function getFiverrSelectedProjects() {
  const allowedIds = ['unistay', 'cinnamon-bistro', 'salon-sanaru']
  return projectsData
    .filter((p) => allowedIds.includes(p.id))
    .map((p) => ({
      ...p,
      // Emphasize the frontend aspect for Fiverr clients
      frontendRole:
        p.id === 'unistay'
          ? 'React, TypeScript & Zustand State Management'
          : p.id === 'cinnamon-bistro'
          ? 'React & Vite UI Workflows & API Routing Validation'
          : 'React & Tailwind CSS Appointment Scheduling UI',
    }))
}

export const fiverrFrontendSkills = [
  { name: 'React (18 / 19)', level: 'Advanced', icon: '⚛️' },
  { name: 'TypeScript', level: 'Intermediate', icon: '📘' },
  { name: 'JavaScript (ES6+)', level: 'Advanced', icon: '⚡' },
  { name: 'HTML5 & Semantic Web', level: 'Advanced', icon: '🌐' },
  { name: 'CSS3 & Flexbox/Grid', level: 'Advanced', icon: '🎨' },
  { name: 'Tailwind CSS', level: 'Advanced', icon: '💨' },
  { name: 'Vite', level: 'Advanced', icon: '⚡' },
  { name: 'Zustand & State Stores', level: 'Intermediate', icon: '🐻' },
  { name: 'Git & GitHub', level: 'Advanced', icon: '🐙' },
  { name: 'Responsive Mobile UI', level: 'Advanced', icon: '📱' },
]

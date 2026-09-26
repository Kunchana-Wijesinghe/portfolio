export const personalInfo = {
  name: 'Kunchana Wijesinghe',
  firstName: 'Kunchana',
  lastName: 'Wijesinghe',
  initials: 'KW',
  role: '3rd Year Computer Science Undergraduate',
  tagline: 'Aspiring Software Engineer & Full-Stack Developer',
  university: 'Sri Lanka Institute of Information Technology (SLIIT)',
  degree: 'BSc (Hons) in Computer Science',
  academicLevel: 'Year 3, Semester 1',
  location: 'Galle, Sri Lanka',
  email: 'kunchanawijesinghe29230@gmail.com',
  phone: '+94 70 272 5762',
  phoneDisplay: '+94 70 272 5762',
  github: 'https://github.com/Kunchana-Wijesinghe',
  githubUsername: 'Kunchana-Wijesinghe',
  linkedin: 'https://linkedin.com/in/kunchana-wijesinghe',
  linkedinUsername: 'kunchana-wijesinghe',
  status: '3rd Year CS Undergrad (Y3S1) • Open to Software Internships',
  summary:
    'Motivated and enthusiastic 3rd Year Computer Science undergraduate at Sri Lanka Institute of Information Technology (SLIIT), currently in Year 3 Semester 1. Possesses comprehensive theoretical and applied training across Advanced Software Engineering, Parallel Computing, Intelligent Systems, Distributed Systems, Algorithms, and Relational Database Management. Experienced in architecting full-stack applications and distributed transaction systems, with robust leadership, communication, and analytical problem-solving capabilities.',
}

export const skillsData = {
  languages: [
    { name: 'Java', level: 'Advanced', icon: '☕' },
    { name: 'JavaScript', level: 'Intermediate', icon: '⚡' },
    { name: 'C', level: 'Intermediate', icon: '⚙️' },
    { name: 'HTML5', level: 'Advanced', icon: '🌐' },
    { name: 'CSS3', level: 'Advanced', icon: '🎨' },
  ],
  databasesAndTools: [
    { name: 'MySQL', category: 'Database', icon: '🐬' },
    { name: 'Git', category: 'VCS', icon: '🌿' },
    { name: 'GitHub', category: 'Platform', icon: '🐙' },
    { name: 'Visual Studio Code', category: 'IDE', icon: '💻' },
    { name: 'IntelliJ IDEA', category: 'IDE', icon: '💡' },
  ],
  competencies: [
    'Parallel & Distributed Computing',
    'Advanced Software Engineering & OOAD',
    'Intelligent Systems & AI Foundations',
    'Design & Analysis of Algorithms',
    'Database Management Systems (DBMS)',
    'Operating Systems & Computer Networks',
    'Graphics, Visualization & HCI',
    'SDLC Models & Software Testing',
  ],
  softSkills: [
    'Team Sync & Agile Collaboration',
    'Technical Analytics & Problem Solving',
    'Effective Presentation',
    'Scope Management',
    'Attention to Detail & Code Quality',
  ],
  spokenLanguages: [
    { language: 'Sinhala', proficiency: 'Native' },
    { language: 'English', proficiency: 'Professional Working' },
    { language: 'Tamil', proficiency: 'Basic' },
  ],
}

export const projectsData = [
  {
    id: '01',
    number: '01',
    title: 'UniStay Boarding Management System',
    subtitle: 'Centralized Student Accommodation Portal',
    badge: 'Academic Group Project',
    featured: true,
    status: 'Completed',
    technologies: ['Java', 'MySQL', 'OOP Principles', 'Database Design'],
    github: 'https://github.com/Kunchana-Wijesinghe',
    description:
      'Engineered a centralized management portal to optimize student boarding, pricing parameters, and rental accommodation metrics. Built end-to-end user workflows, incorporating full tenant registration frameworks, modular room allocation routines, and record updates. Applied sound object-oriented logic and complex backend design patterns to reinforce architecture safety.',
    highlights: [
      'Engineered a centralized portal optimizing student boarding & pricing metrics',
      'Developed complete tenant registration frameworks and room allocation routines',
      'Implemented robust OOP design patterns and structural relational database schemas',
    ],
    architecture: 'JAVA OOP // RELATIONAL MYSQL SCHEMA // MODULAR ALLOCATION ENGINE',
  },
  {
    id: '02',
    number: '02',
    title: 'Distributed Payment System',
    subtitle: 'Fault-Tolerant Atomic Transaction Engine',
    badge: 'Academic Team Project',
    featured: true,
    status: 'Completed',
    technologies: ['Java', 'Git & GitHub', 'Distributed Systems', 'Software Engineering'],
    github: 'https://github.com/Kunchana-Wijesinghe',
    description:
      'Collaborated in an agile engineering tier to conceptualize and deploy an active, failure-tolerant distributed transaction system. Configured message safety layers, interface components, and cross-node validation pipelines to handle atomic payments securely. Managed concurrent feature integration, branch structural changes, and code reviews within centralized Git protocols.',
    highlights: [
      'Conceptualized and deployed failure-tolerant distributed transaction pipelines',
      'Configured message safety layers and cross-node validation for atomic payments',
      'Enforced agile workflows, feature branching, and code reviews using Git',
    ],
    architecture: 'DISTRIBUTED ARCHITECTURE // ATOMIC PIPELINES // CROSS-NODE VALIDATION',
  },
  {
    id: '03',
    number: '03',
    title: 'Salon Sanaru Management System',
    subtitle: 'Commercial Operations & Booking Portal',
    badge: 'Academic Team Project',
    featured: false,
    status: 'Completed',
    technologies: ['Java', 'MySQL', 'SDLC', 'System Analysis', 'Software Testing'],
    github: 'https://github.com/Kunchana-Wijesinghe',
    description:
      'Architected a commercial operations portal targeting automated client bookings, service allocation tracking, and digital user logging. Drove modules through the entire Software Development Life Cycle (SDLC) from specification mining to design testing.',
    highlights: [
      'Automated client appointments, service booking tracking, and digital user logs',
      'Led modules from requirements gathering and specification mining to testing',
      'Integrated relational MySQL backend with high-integrity data validations',
    ],
    architecture: 'COMMERCIAL OPERATIONS // FULL SDLC COMPLIANT // RELATIONAL MYSQL',
  },
]

export const educationData = [
  {
    id: 'richmond',
    period: '2010 — 2023',
    institution: 'Richmond College, Galle',
    degree: 'Grade 1 to 13 (Primary & Secondary Education)',
    location: 'Galle, Sri Lanka',
    status: 'Completed (Alumnus)',
    hasRichmondLogo: true,
    description:
      'Completed comprehensive schooling from Grade 1 to 13 at Richmond College, Galle, actively engaging in academics, student leadership boards, and institutional activities.',
    highlights: [
      'Primary & Secondary Education — Grade 1 to 13',
      'Physical Science Stream (A/L)',
      'Active leadership in Student Prefect Board (7 Yrs), IT Club (5 Yrs), Senior Western Band (3 Yrs), and Scouts',
    ],
    olSubjects: [
      'Mathematics',
      'Science',
      'English',
      'Sinhala',
      'History',
      'Tamil',
      'Western Music',
    ],
  },
  {
    id: 'sliit',
    period: '2024 — Present',
    currentStage: 'Year 3, Semester 1',
    institution: 'Sri Lanka Institute of Information Technology (SLIIT)',
    degree: 'BSc (Hons) in Computer Science',
    location: 'Malabe, Sri Lanka',
    status: 'Undergraduate (Year 3, Semester 1)',
    description:
      'Pursuing an honors degree in Computer Science at SLIIT. Coursework up to Year 3 Semester 1 provides strong analytical, architectural, and applied engineering foundations across key computing domains.',
    coveredDomains: [
      {
        field: 'Software Architecture & OOAD',
        description: 'Advanced Software Engineering, Object-Oriented Analysis & Design, and Design Patterns',
        icon: '🏛️',
      },
      {
        field: 'Graphics & Visualization',
        description: 'Computer Graphics & Visualization, 2D/3D Rendering, Visual Computing & HCI',
        icon: '🎨',
      },
      {
        field: 'Parallel & Distributed Computing',
        description: 'Parallel Computing, Distributed Systems, Concurrency, and High-Performance Architecture',
        icon: '⚡',
      },
      {
        field: 'Intelligent Systems & AI',
        description: 'Intelligent Systems, AI Heuristics, Problem Solving, and Computational Modeling',
        icon: '🤖',
      },
      {
        field: 'Algorithms & Data Structures',
        description: 'Design & Analysis of Algorithms, Advanced Data Structures, and Computational Efficiency',
        icon: '📐',
      },
      {
        field: 'Database Architecture & DBMS',
        description: 'Relational Database Design, SQL Query Optimization, Normalization, and Integrity',
        icon: '💾',
      },
      {
        field: 'Operating Systems & Networks',
        description: 'Operating Systems Internals, Computer Networks Protocols, and System Architecture',
        icon: '🌐',
      },
      {
        field: 'Software Projects & SDLC',
        description: 'Applied Case Study Projects, Agile Engineering Practices, and Professional Skills',
        icon: '🚀',
      },
    ],
  },
]

export const leadershipData = [
  {
    id: 'prefect',
    role: 'Student Prefect Board',
    organization: 'Richmond College',
    duration: '7 Years',
    icon: '🎖️',
    description:
      'Served as a Student Prefect for 7 consecutive years, enforcing school discipline, leading student assemblies, and coordinating large-scale institutional events.',
  },
  {
    id: 'it-club',
    role: 'IT Club Board Member',
    organization: 'Richmond College',
    duration: '5 Years',
    icon: '💻',
    description:
      'Contributed as an active executive board member, mentoring junior members in computer literacy, organizing tech exhibitions, and promoting coding initiatives.',
  },
  {
    id: 'band',
    role: 'Senior Western Band',
    organization: 'Richmond College',
    duration: '3 Years',
    icon: '🎺',
    description:
      'Played musical instruments with dedication in the senior brass band representing the college in national and inter-school musical ceremonies.',
  },
  {
    id: 'inventors',
    role: 'New Inventors Club Member',
    organization: 'Richmond College',
    duration: 'Active Member',
    icon: '💡',
    description:
      'Participated in innovative project ideation, applied scientific methodologies to practical problems, and fostered inventive solutions.',
  },
  {
    id: 'scout',
    role: 'College Scout Troop',
    organization: 'Richmond College',
    duration: '1 Year',
    icon: '🏕️',
    description:
      'Cultivated team survivability, wilderness leadership, outdoor coordination, and community service ethics.',
  },
]

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
    { name: 'Java', level: 'Advanced', icon: '☕', note: 'OOP, Spring Boot, Concurrency' },
    { name: 'C#', level: 'Intermediate', icon: '🔷', note: 'ASP.NET Core Microservices' },
    { name: 'TypeScript', level: 'Intermediate', icon: '📘', note: 'Typed React SPAs' },
    { name: 'JavaScript (ES6+)', level: 'Advanced', icon: '⚡', note: 'Modern Web & Async APIs' },
    { name: 'C', level: 'Intermediate', icon: '⚙️', note: 'Systems & Memory Foundations' },
    { name: 'HTML5 & CSS3', level: 'Advanced', icon: '🌐', note: 'Responsive & Semantic Layouts' },
  ],
  frameworks: [
    { name: 'React & Vite', category: 'Frontend', icon: '⚛️', note: 'Modern Component SPAs' },
    { name: 'Spring Boot', category: 'Backend', icon: '🍃', note: 'Security, JWT & JPA REST APIs' },
    { name: 'ASP.NET Core', category: 'Backend', icon: '🌐', note: 'Microservices & Web APIs' },
    { name: 'Tailwind CSS', category: 'Styling', icon: '🎨', note: 'Utility-first Modern UI' },
    { name: 'Zustand', category: 'State', icon: '🐻', note: 'Predictable Client State' },
  ],
  cloudAndDevOps: [
    { name: 'MySQL', category: 'Database', icon: '🐬', note: 'Relational Schemas & Indexing' },
    { name: 'Docker & Compose', category: 'DevOps', icon: '🐳', note: 'Multi-Container Orchestration' },
    { name: 'Azure Container Apps', category: 'Cloud', icon: '☁️', note: 'Cloud Microservices & ACR' },
    { name: 'Apache Kafka', category: 'Messaging', icon: '📨', note: 'Event Streaming & Pipelines' },
    { name: 'GitHub Actions', category: 'CI/CD', icon: '🚀', note: 'Automated CI/CD Testing' },
    { name: 'Git & GitHub', category: 'VCS', icon: '🐙', note: 'Branching & Code Reviews' },
    { name: 'Nginx', category: 'Proxy', icon: '🚦', note: 'Reverse Proxy & API Routing' },
  ],
  databasesAndTools: [
    { name: 'MySQL', category: 'Database', icon: '🐬' },
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
    { name: 'Azure Container Apps', category: 'Cloud', icon: '☁️' },
    { name: 'Apache Kafka', category: 'Messaging', icon: '📨' },
    { name: 'Git & GitHub', category: 'VCS', icon: '🐙' },
    { name: 'Visual Studio Code', category: 'IDE', icon: '💻' },
    { name: 'IntelliJ IDEA', category: 'IDE', icon: '💡' },
  ],
  competencies: [
    'Parallel & Distributed Computing (Concurrency & Cross-Node Validation)',
    'Microservice Architecture & REST API Routing',
    'Advanced Software Engineering & OOAD Patterns',
    'Database Management Systems (DBMS Normalization & JPA)',
    'Design & Analysis of Algorithms & Computational Complexity',
    'Operating Systems Internals & Computer Networks Protocols',
    'Intelligent Systems & AI Computational Foundations',
    'SDLC Methodologies & Automated Pipeline Testing',
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
    id: 'unistay',
    number: '01',
    title: 'UniStay Boarding Management System',
    subtitle: 'Web-Based Student Accommodation & Boarding Platform',
    badge: 'Academic Team Project (4 Members)',
    projectType: 'Academic Team Project',
    featured: true,
    status: 'Completed',
    cardDescription:
      'A web-based boarding management platform for handling tenant registration, room allocation, bookings, and student services.',
    detailedDescription:
      'Developed as a four-member academic team project, UniStay brings student and administrative boarding workflows into one platform. The system covers room and booking management alongside service requests such as cleaning and maintenance, food ordering, announcements, and feedback. I contributed to development and integration across the application, including work on user workflows and resolving backend configuration, security, and database connection issues.',
    description:
      'A web-based boarding management platform for handling tenant registration, room allocation, bookings, and student services.',
    keyFeatures: [
      'Student and administrative boarding workflow consolidation into a single platform',
      'Room and booking management with tenant registration and allocation routines',
      'Service requests handling including cleaning, maintenance, food ordering, announcements, and feedback',
    ],
    highlights: [
      'Student and administrative boarding workflow consolidation into a single platform',
      'Room and booking management with tenant registration and allocation routines',
      'Service requests handling including cleaning, maintenance, food ordering, announcements, and feedback',
    ],
    myContribution:
      'Contributed to development and integration across the application, including work on user workflows and resolving backend configuration, security, and database connection issues.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Zustand',
      'Tailwind CSS',
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'Spring Data JPA',
      'MySQL',
    ],
    github: 'https://github.com/Kunchana-Wijesinghe/UniStay_Boarding_Management_System',
    architecture: 'REACT + VITE FRONTEND // SPRING BOOT REST API // MYSQL SCHEMA',
  },
  {
    id: 'cinnamon-bistro',
    number: '02',
    title: 'Smart Restaurant Management System – Cinnamon Bistro',
    subtitle: 'Cloud-Deployed Microservice Restaurant Platform',
    badge: 'CSP Academic Team Project',
    projectType: 'Academic Team Project',
    featured: true,
    status: 'Completed',
    cardDescription:
      'A cloud-deployed restaurant platform with reservations, authentication, administrative workflows, and reporting.',
    detailedDescription:
      'Built as a CSP academic team project using a microservice architecture. The application uses a React/Vite frontend, ASP.NET Core services, and MySQL. My contribution focused on DevOps and backend integration: improving Docker and MySQL readiness, adding Kafka integration testing to GitHub Actions, configuring Azure deployment with OIDC and Managed Identity, managing container images, troubleshooting database schema and deployment issues, and validating authenticated reservation workflows. Nginx handles frontend-to-backend API routing.',
    description:
      'A cloud-deployed restaurant platform with reservations, authentication, administrative workflows, and reporting.',
    keyFeatures: [
      'Microservice architecture with React/Vite frontend and ASP.NET Core backend services',
      'Authenticated reservation workflows, administrative management, and operational reporting',
      'Cloud deployment with Azure Container Apps, Apache Kafka messaging, and Nginx reverse proxy',
    ],
    highlights: [
      'Microservice architecture with React/Vite frontend and ASP.NET Core backend services',
      'Authenticated reservation workflows, administrative management, and operational reporting',
      'Cloud deployment with Azure Container Apps, Apache Kafka messaging, and Nginx reverse proxy',
    ],
    myContribution:
      'Focused on DevOps and backend integration: improving Docker and MySQL readiness, adding Kafka integration testing to GitHub Actions, configuring Azure deployment with OIDC and Managed Identity, managing container images, troubleshooting database schema and deployment issues, and validating authenticated reservation workflows.',
    technologies: [
      'React',
      'Vite',
      'ASP.NET Core',
      'C#',
      'MySQL',
      'Docker',
      'Docker Compose',
      'Apache Kafka',
      'GitHub Actions',
      'Nginx',
      'Azure Container Registry',
      'Azure Container Apps',
      'Azure Database for MySQL',
      'Azure Managed Identity',
      'OIDC',
    ],
    github: 'https://github.com/Smart-Restaurant-Management-System1/Smart-Restaurant-Management-System',
    architecture: 'MICROSERVICES // AZURE CONTAINER APPS // APACHE KAFKA // NGINX ROUTING',
  },
  {
    id: 'salon-sanaru',
    number: '03',
    title: 'Salon Sanaru Management System',
    subtitle: 'Commercial Operations & Booking Portal',
    badge: 'Academic Team Project',
    projectType: 'Academic Team Project',
    featured: false,
    status: 'Completed',
    cardDescription:
      'An academic team project for managing salon bookings, service allocation, and customer records.',
    detailedDescription:
      'A salon management application designed to organize client bookings, assign services, and maintain user records. Present this as a team project. My specific individual contribution has not been established in the content provided, so do not add a “My contribution” claim for this project.',
    description:
      'An academic team project for managing salon bookings, service allocation, and customer records.',
    keyFeatures: [
      'Client appointment booking organization and schedule management',
      'Dynamic salon service allocation and categorization',
      'Customer record tracking and administrative user management',
    ],
    highlights: [
      'Client appointment booking organization and schedule management',
      'Dynamic salon service allocation and categorization',
      'Customer record tracking and administrative user management',
    ],
    myContribution: null,
    technologies: [
      'Java',
      'Spring Boot',
      'MySQL',
      'React',
      'JavaScript (Frontend UI)',
      'Tailwind CSS',
      'Docker',
    ],
    github: 'https://github.com/Chanumi2002/Group-11-Salon-Sanaru',
    architecture: 'REACT & JAVASCRIPT FRONTEND // JAVA SPRING BOOT API // MYSQL',
  },
  {
    id: 'distributed-payment',
    number: '04',
    title: 'Distributed Payment System',
    subtitle: 'Fault-Tolerant Atomic Transaction Engine',
    badge: 'Academic Team Project',
    projectType: 'Academic Team Project',
    featured: true,
    status: 'Completed',
    cardDescription:
      'A distributed transaction project exploring secure atomic payments and validation across nodes.',
    detailedDescription:
      'A completed academic team project focused on a failure-tolerant distributed transaction system. Its design includes message safety layers, interface components, and cross-node validation for atomic payment processing. My documented collaboration work included integrating concurrent features, managing branch structure changes, and reviewing code through the team\'s Git workflow. Do not claim specific payment methods or production deployment.',
    description:
      'A distributed transaction project exploring secure atomic payments and validation across nodes.',
    keyFeatures: [
      'Failure-tolerant distributed transaction architecture with message safety layers',
      'Interface components and cross-node validation pipelines for atomic payment processing',
      'Concurrent transaction handling and coordinated multi-node state synchronization',
    ],
    highlights: [
      'Failure-tolerant distributed transaction architecture with message safety layers',
      'Interface components and cross-node validation pipelines for atomic payment processing',
      'Concurrent transaction handling and coordinated multi-node state synchronization',
    ],
    myContribution:
      'Documented collaboration work included integrating concurrent features, managing branch structure changes, and reviewing code through the team\'s Git workflow.',
    technologies: [
      'Java',
      'Distributed Systems',
      'Concurrency',
      'Git',
      'GitHub',
    ],
    github: 'https://github.com/DahamKu101/Distributed-Payment-System-Group-18',
    architecture: 'DISTRIBUTED ARCHITECTURE // CROSS-NODE VALIDATION // ATOMIC TRANSACTIONS',
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

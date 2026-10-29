// Centralized professional profile — single source of truth for the portfolio.
// Sourced from latest verified resume and current role at JOOLA.

export const profile = {
  name: 'Suruthi S K',
  initials: 'SK',
  location: 'Pudukkottai, India',
  email: 'suruthisk7@gmail.com',
  linkedin: 'https://linkedin.com/in/suruthi-s-k',
  github: 'https://github.com/suruthi-sk',
  leetcode: 'https://leetcode.com/Suruthi_S_K',
  medium: 'https://medium.com/@suruthisk03',

  title: 'QA Engineer',
  company: 'JOOLA',
  companyLocation: 'Bangalore, India',

  summary:
    'Software developer with a strong foundation in back-end development, currently working as a QA Engineer. A quick learner who enjoys solving problems, takes ownership of quality, and is eager to grow into a developer role building reliable, scalable applications.',

  currentFocus: {
    primaryPlatform: 'Salesforce',
    systems: ['Salesforce', 'NetSuite', 'Celigo', 'Shopify'],
    note: 'Primary working platform is Salesforce, with regular NetSuite business system testing, Celigo integration testing, and limited exposure to Shopify.',
  },

  education: {
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'Government College of Engineering, Erode',
    period: 'Nov 2021 – May 2025',
    cgpa: '8.82 / 10',
  },
};

export const experience = [
  {
    id: 1,
    role: 'QA Engineer',
    company: 'JOOLA',
    location: 'Bangalore',
    period: 'May 2026 – Present',
    isCurrent: true,
    summary:
      'Salesforce-focused Quality Assurance and enterprise integration testing across NetSuite and Celigo workflows.',
    description: [
      'Learned Salesforce, NetSuite and Celigo from scratch and was testing live integrations within 3 weeks.',
      'Automated end-to-end flows in Playwright, cutting manual regression time by around 40% per release.',
      'Caught 50+ Salesforce–NetSuite sync defects in Celigo before release, keeping bad data away from users.',
      'Wrote and executed 150+ test cases for integration flows, and validated REST APIs in Postman.',
      'Worked with developers to reproduce and root-cause defects, shortening the fix-and-retest cycle.',
    ],
    platforms: [
      { name: 'Salesforce', tag: 'Primary Platform' },
      { name: 'NetSuite', tag: 'Business Systems' },
      { name: 'Celigo', tag: 'Integrations & Workflows' },
      { name: 'Shopify', tag: 'Limited Exposure' },
    ],
    tools: ['Playwright', 'Postman', 'REST APIs', 'Defect Investigation', 'Integration Testing'],
  },
  {
    id: 2,
    role: 'Incubation Trainee',
    company: 'Zoho School of Graduate Studies',
    location: 'India',
    period: 'July 2025 – March 2026',
    isCurrent: false,
    summary:
      'Engineered backend web applications in Core Java with Servlets, JDBC, and relational database systems.',
    description: [
      'Built back-end web apps in Core Java with Servlets and JDBC, from request handling to data access.',
      'Designed database tables and wrote SQL queries to store, retrieve and update application data.',
      'Strengthened core Java fundamentals, including OOP, collections, exception handling and multithreading.',
    ],
    tools: ['Core Java', 'Servlets', 'JDBC', 'SQL', 'OOP', 'Multithreading'],
  },
  {
    id: 3,
    role: 'Partner Support Intern',
    company: 'Medha Analytics and AI (Narayana Health)',
    location: 'India',
    period: 'Feb 2025 – June 2025',
    isCurrent: false,
    summary:
      'Validated REST API integrations and conducted manual testing with comprehensive bug lifecycle reporting.',
    description: [
      'Tested and validated REST APIs in Postman to make sure integrations were reliable and data flowed correctly.',
      'Performed manual testing and reported bugs with clear reproduction steps, working with QA until fixed.',
    ],
    tools: ['Postman', 'REST APIs', 'Manual Testing', 'Bug Reporting', 'Defect Triage'],
  },
];

export const skillCategories = [
  {
    name: 'Quality Assurance',
    color: '#15803d',
    description: 'Testing methodologies, automation, and defect prevention across connected systems',
    skills: [
      'Manual & Functional Testing',
      'Integration Testing',
      'Regression Testing',
      'API Testing (Postman)',
      'Playwright (Automation)',
      'Bug Reporting & Defect Investigation',
      'Test Case Design & Execution',
      'Root Cause Analysis',
    ],
  },
  {
    name: 'Enterprise Platforms',
    color: '#0284c7',
    description: 'Mission-critical enterprise software and connected business integration flows',
    skills: [
      'Salesforce (Primary Platform)',
      'NetSuite (Business Systems)',
      'Celigo (Integration Flows)',
      'Shopify (Limited Exposure)',
    ],
  },
  {
    name: 'Programming & Languages',
    color: '#4f46e5',
    description: 'Object-oriented programming, data structures, and scripting',
    skills: [
      'Core Java',
      'Python',
      'SQL',
      'HTML/CSS',
      'OOP Concepts',
      'Multithreading',
      'Exception Handling',
    ],
  },
  {
    name: 'Backend & Frameworks',
    color: '#c2410c',
    description: 'Backend services, REST architectures, and data persistence',
    skills: [
      'Spring Boot',
      'FastAPI',
      'Java Servlets',
      'JDBC',
      'REST API Development',
      'Caching (Redis)',
    ],
  },
  {
    name: 'Databases',
    color: '#0f766e',
    description: 'Relational, time-series, and in-memory data storage systems',
    skills: ['MySQL', 'PostgreSQL', 'Cassandra', 'Redis'],
  },
  {
    name: 'Tools & Workflow',
    color: '#7e22ce',
    description: 'Developer tooling, version control, and IDE environments',
    skills: [
      'Postman',
      'Git & GitHub',
      'VS Code',
      'IntelliJ IDEA',
      'Eclipse',
      'Playwright Test Runner',
    ],
  },
];

// Portfolio knowledge base - RAG chunks for Micky (the portfolio AI assistant)
// Updated with verified resume facts, QA role at JOOLA, enterprise platforms, and technical foundation.

export const knowledgeBase = [
  {
    id: 'intro',
    keywords: ['who', 'name', 'introduction', 'about', 'yourself', 'suruthi', 'owner', 'portfolio', 'background'],
    content:
      "Suruthi S K is a QA Engineer at JOOLA with a solid foundation in back-end development. She specializes in testing enterprise business platforms—particularly Salesforce integrations, NetSuite, and Celigo. She is an analytical problem-solver with verified expertise in automated testing (Playwright), API validation (Postman), and Java/Spring Boot development.",
  },
  {
    id: 'current-role',
    keywords: ['role', 'current', 'position', 'job', 'title', 'company', 'joola', 'qa engineer', 'working', 'what does', 'present'],
    content:
      "Suruthi currently works as a QA Engineer at JOOLA in Bangalore (May 2026 – Present). Her primary focus is Quality Assurance on Salesforce-related business systems, testing live integrations across NetSuite and Celigo, automating regression tests in Playwright, and ensuring seamless data synchronization across enterprise workflows.",
  },
  {
    id: 'company',
    keywords: ['company', 'joola', 'workplace', 'employer', 'organization', 'where work'],
    content:
      "Suruthi works at JOOLA (spelled JOOLA) based in Bangalore, India, serving as a QA Engineer handling enterprise business system validation.",
  },
  {
    id: 'enterprise-platforms',
    keywords: ['platforms', 'salesforce', 'netsuite', 'celigo', 'shopify', 'enterprise', 'crm', 'erp', 'integration'],
    content:
      "Suruthi's working platforms include:\n• Salesforce: Her primary working platform for business system testing.\n• NetSuite: Core business system and ERP testing.\n• Celigo: Integration platform for managing and testing connected sync workflows.\n• Shopify: Has limited exposure to Shopify (not a major area of expertise).",
  },
  {
    id: 'qa-achievements',
    keywords: ['qa', 'testing', 'achievements', 'metrics', 'results', 'playwright', 'regression', 'defects', 'bugs', 'automation'],
    content:
      "Key accomplishments in her QA role at JOOLA:\n• Learned Salesforce, NetSuite, and Celigo from scratch and tested live integrations within 3 weeks.\n• Automated end-to-end flows in Playwright, slashing manual regression time by approximately 40% per release.\n• Caught 50+ Salesforce–NetSuite sync defects in Celigo before release, preventing faulty data from reaching end users.\n• Authored and executed 150+ test cases for integration flows and validated REST APIs using Postman.\n• Partnered closely with developers to reproduce and root-cause defects, dramatically shortening the fix-and-retest cycle.",
  },
  {
    id: 'experience-history',
    keywords: ['experience', 'work experience', 'history', 'timeline', 'career', 'jobs', 'roles'],
    content:
      "Suruthi's verified professional trajectory includes:\n1. QA Engineer at JOOLA (May 2026 – Present): Testing Salesforce, NetSuite, and Celigo integrations with Playwright automation.\n2. Incubation Trainee at Zoho School of Graduate Studies (July 2025 – March 2026): Engineered Core Java backend applications with Servlets, JDBC, and SQL.\n3. Partner Support Intern at Medha Analytics and AI / Narayana Health (Feb 2025 – June 2025): Validated REST APIs in Postman and executed structured manual testing.",
  },
  {
    id: 'internship-zoho',
    keywords: ['zoho', 'incubation', 'trainee', 'servlets', 'jdbc', 'sql', 'backend app'],
    content:
      "At Zoho School of Graduate Studies (July 2025 – March 2026), Suruthi was an Incubation Trainee where she built back-end web applications in Core Java using Servlets and JDBC. She designed database tables, authored SQL queries, and solidified core Java principles including OOP, collections, exception handling, and multithreading.",
  },
  {
    id: 'internship-medha',
    keywords: ['medha', 'narayana', 'health', 'partner support', 'intern', 'postman', 'api testing'],
    content:
      "At Medha Analytics and AI (Narayana Health) from Feb 2025 to June 2025, Suruthi served as a Partner Support Intern. She tested and validated REST APIs in Postman to ensure integration reliability and seamless data flow, and conducted rigorous manual testing with clear reproduction steps for defect resolution.",
  },
  {
    id: 'education',
    keywords: ['education', 'college', 'university', 'degree', 'gce', 'erode', 'cgpa', 'btech', 'study', 'qualification'],
    content:
      "Suruthi holds a Bachelor of Technology (B.Tech) in Information Technology from Government College of Engineering, Erode (Nov 2021 – May 2025) with an outstanding CGPA of 8.82 / 10.",
  },
  {
    id: 'skills-qa',
    keywords: ['skills qa', 'qa skills', 'testing skills', 'manual testing', 'functional testing', 'api testing', 'test cases'],
    content:
      "Suruthi's Quality Assurance capabilities include: Manual Testing, Functional Testing, Regression Testing, Integration Testing, API Testing (Postman), Playwright (Automation), Bug Reporting & Defect Investigation, Test Case Design & Execution, and Root Cause Analysis.",
  },
  {
    id: 'skills-programming',
    keywords: ['programming', 'language', 'java', 'python', 'sql', 'html', 'css', 'oop', 'multithreading'],
    content:
      "Suruthi's programming languages and core concepts: Core Java, Python, SQL, HTML/CSS, Object-Oriented Programming (OOP), Multithreading, Exception Handling, and Data Structures & Algorithms fundamentals.",
  },
  {
    id: 'skills-backend',
    keywords: ['backend', 'back-end', 'spring boot', 'fastapi', 'servlets', 'jdbc', 'rest', 'api development', 'caching'],
    content:
      "Suruthi's backend development stack: Spring Boot, FastAPI, Java Servlets, JDBC, REST API Development, and Redis Caching.",
  },
  {
    id: 'skills-databases',
    keywords: ['databases', 'db', 'mysql', 'postgresql', 'cassandra', 'redis', 'storage'],
    content:
      "For data storage, Suruthi has hands-on experience with MySQL, PostgreSQL, Apache Cassandra (time-series storage), and Redis (in-memory caching & configuration).",
  },
  {
    id: 'skills-tools',
    keywords: ['tools', 'git', 'github', 'postman', 'vscode', 'intellij', 'eclipse'],
    content:
      "Suruthi's developer and testing toolset: Postman, Playwright, Git & GitHub, VS Code, IntelliJ IDEA, and Eclipse.",
  },
  {
    id: 'project-log-analysis',
    keywords: ['project log', 'ai log', 'log analysis', 'spring boot', 'ollama', 'redis', 'github graphql', 'project 1'],
    content:
      "Project: AI-Powered Log Analysis (Dec 2025)\n• Architected a Spring Boot REST service to ingest log files, filter by timestamps, and detect recurring errors.\n• Created a regex-based parser that isolates error types, stack traces, and flags error spikes.\n• Integrated GitHub GraphQL API to automatically trace failing lines to the commit and author responsible.\n• Integrated a local LLM (Ollama) with Redis caching to generate automated error summaries and fix recommendations.\nTech: Spring Boot, Ollama, Redis, GitHub GraphQL API, Java, REST APIs.",
  },
  {
    id: 'project-url-monitor',
    keywords: ['project url', 'url monitoring', 'uptime', 'health check', 'cassandra', 'servlets', 'project 2'],
    content:
      "Project: URL Monitoring System (Oct 2025)\n• Built a distributed uptime and performance monitor for web services using Java Servlets.\n• Built a multi-threaded engine to concurrently execute health checks across 100+ URLs in parallel.\n• Leveraged Redis (Lettuce) for real-time config and Cassandra for time-series check history.\n• Created an HTML/CSS dashboard visualizing live status and historical response times.\nTech: Java, Servlets, Cassandra, Redis, Multithreading, HTML/CSS.",
  },
  {
    id: 'projects-summary',
    keywords: ['projects', 'what have you built', 'portfolio projects', 'showcase'],
    content:
      "Suruthi has developed two notable backend projects:\n1. AI-Powered Log Analysis: Spring Boot REST API platform featuring regex log parsing, GitHub blame tracking, and local Ollama LLM error triage.\n2. URL Monitoring System: Multi-threaded Java Servlet service monitoring 100+ URLs concurrently with Cassandra time-series storage and Redis caching.\nBoth projects reinforce her deep understanding of backend architecture, which directly powers her high-caliber QA defect investigations.",
  },
  {
    id: 'resume-download',
    keywords: ['resume', 'cv', 'download resume', 'pdf', 'get resume'],
    content:
      "You can download Suruthi's latest resume directly from the Hero section, the navigation bar, or by clicking the resume download link on the portfolio. The file is saved as Suruthi_SK_Resume.pdf.",
  },
  {
    id: 'contact-info',
    keywords: ['contact', 'email', 'phone', 'reach', 'connect', 'linkedin', 'github', 'touch'],
    content:
      "You can connect with Suruthi via:\n• Email: suruthisk7@gmail.com\n• LinkedIn: linkedin.com/in/suruthi-s-k\n• GitHub: github.com/suruthi-sk\n• LeetCode: leetcode.com/Suruthi_S_K\n• Medium: medium.com/@suruthisk03\n• Phone: +91-6369749790\nLocation: Bangalore / Pudukkottai, India.",
  },
  {
    id: 'engineering-philosophy',
    keywords: ['philosophy', 'approach', 'mindset', 'why qa', 'developer and qa'],
    content:
      "Suruthi combines the precision of a QA Engineer with the structural understanding of a back-end developer. She believes that understanding system internals—such as multithreading, API protocols, database schemas, and integration payloads—is the most effective way to prevent defects, design airtight test cases, and build high-quality software.",
  },
];

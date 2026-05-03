// Portfolio knowledge base - chunks of information for the chatbot RAG system
export const knowledgeBase = [
  {
    id: 'intro',
    keywords: ['who', 'name', 'introduction', 'about', 'yourself', 'suruthi', 'owner', 'portfolio'],
    content:
      "Hi! I'm Micky, the assistant for Suruthi S K's portfolio. Suruthi is a Full Stack Developer — a fresher with hands-on experience through internships and incubation programs. She builds clean, purposeful web applications with a focus on user experience and solid code.",
  },
  {
    id: 'role',
    keywords: ['role', 'position', 'job', 'title', 'developer', 'full stack', 'what does', 'work as'],
    content:
      "Suruthi is a Full Stack Developer. She's currently open to full-time roles and freelance collaborations.",
  },
  {
    id: 'experience',
    keywords: ['experience', 'internship', 'incubation', 'work', 'career', 'fresher', 'background'],
    content:
      "Suruthi is a fresher developer with 2+ internships and 1 incubation program under her belt. Through these, she's worked on real products, collaborated with teams, and shipped code that gets used.",
  },
  {
    id: 'skills-programming',
    keywords: ['programming', 'language', 'java', 'python', 'oop', 'dsa', 'data structures', 'algorithms', 'code'],
    content:
      "Suruthi's programming skills include: Core Java, Python, OOP Concepts, Data Structures & Algorithms, Exception Handling, and Multithreading.",
  },
  {
    id: 'skills-frontend',
    keywords: ['frontend', 'front-end', 'ui', 'html', 'css', 'react', 'interface', 'web'],
    content:
      "For frontend development, Suruthi works with HTML & CSS and React.",
  },
  {
    id: 'skills-backend',
    keywords: ['backend', 'back-end', 'spring', 'api', 'server', 'microservices', 'fastapi', 'rest'],
    content:
      "Suruthi's backend skills include: Spring Boot, Spring MVC, Spring Data JPA, Hibernate, FastAPI, REST APIs, API Design, JSON & HTTP Protocol, and Microservices Basics.",
  },
  {
    id: 'skills-database',
    keywords: ['database', 'db', 'sql', 'mysql', 'postgres', 'cassandra', 'redis', 'storage', 'data'],
    content:
      "For databases, Suruthi works with MySQL, PostgreSQL, Cassandra, and Redis.",
  },
  {
    id: 'skills-tools',
    keywords: ['tools', 'git', 'github', 'postman', 'vscode', 'intellij', 'maven', 'gradle', 'ide'],
    content:
      "Suruthi's toolset includes: Git & GitHub, Postman, VS Code, IntelliJ IDEA, Eclipse IDE, Maven, Gradle, and Debugging.",
  },
  {
    id: 'skills-ai',
    keywords: ['ai', 'ml', 'machine learning', 'llm', 'rag', 'vector', 'prompting', 'artificial intelligence', 'mcp'],
    content:
      "In AI/ML, Suruthi has knowledge of: Prompting, LLM Basics, MCP (Model Context Protocol), RAG (Retrieval Augmented Generation), and Vector Databases basics.",
  },
  {
    id: 'project-log',
    keywords: ['log', 'analysis', 'ai-powered', 'error', 'spring boot', 'ollama', 'project 1', 'first project'],
    content:
      "Project: AI-Powered Log Analysis — Suruthi built a scalable log analysis platform using Spring Boot REST APIs to process uploaded log files, perform time-filtered analysis, and detect recurring application errors. It uses a regex-based parsing engine to extract error types and stack traces, integrates GitHub GraphQL API for automated blame analysis, and leverages a local LLM (Ollama) with Redis caching for error summaries and fix suggestions. Tech: Spring Boot, Ollama, Redis, GitHub GraphQL API. Duration: Dec 2025.",
  },
  {
    id: 'project-url',
    keywords: ['url', 'monitoring', 'uptime', 'health check', 'distributed', 'project 2', 'second project', 'website monitor'],
    content:
      "Project: URL Monitoring System — Suruthi developed a distributed URL monitoring system using Java Servlets to track website uptime and performance. It features a multi-threaded architecture for parallel health checks, Redis (Lettuce) for real-time configuration, and Cassandra for scalable time-series data storage. Tech: Java, Servlets, Cassandra, Redis, Multithreading. Duration: Oct 2025.",
  },
  {
    id: 'projects-general',
    keywords: ['projects', 'built', 'portfolio', 'work', 'showcase', 'what have'],
    content:
      "Suruthi has built 2 major projects: 1) AI-Powered Log Analysis — a scalable platform using Spring Boot and local LLM for analyzing logs and detecting errors. 2) URL Monitoring System — a distributed system using Java Servlets for tracking website uptime. Both demonstrate her backend development expertise.",
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'reach', 'hire', 'connect', 'linkedin', 'mail', 'talk'],
    content:
      "You can reach Suruthi at suruthisk7@gmail.com or connect on LinkedIn at linkedin.com/in/suruthi-s-k. She's currently open to full-time roles and freelance projects.",
  },
  {
    id: 'approach',
    keywords: ['approach', 'philosophy', 'style', 'methodology', 'how', 'develop', 'build'],
    content:
      "Suruthi's approach to development: understand the problem deeply, build cleanly, and always keep the end user in mind. She's comfortable across the stack but has a particular love for building interfaces that feel intuitive.",
  },
  {
    id: 'education',
    keywords: ['education', 'college', 'university', 'degree', 'study', 'qualification', 'school'],
    content:
      "I don't have specific details about Suruthi's education in my knowledge base. Would you like to ask her directly?",
  },
  {
    id: 'availability',
    keywords: ['available', 'hire', 'freelance', 'open', 'looking', 'opportunity', 'collaboration'],
    content:
      "Suruthi is currently open to full-time roles and freelance collaborations. If you have something in mind, feel free to reach out!",
  },
];

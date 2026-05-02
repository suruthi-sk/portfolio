export const projects = [
  {
    id: 1,
    title: 'AI-Powered Log Analysis',
    shortDesc: 'Analyzes logs using AI to detect errors and generate insights.',
    fullDesc:
      'Built a scalable log analysis platform using Spring Boot REST APIs to process uploaded log files, perform time-filtered analysis, and detect recurring application errors. Developed a regex-based parsing engine to extract error types, stack traces, and metadata, grouping them into configurable time windows for spike detection. Integrated GitHub GraphQL API for automated blame analysis and leveraged a local LLM (Ollama) with Redis caching to generate error summaries and fix suggestions.',
    tech: ['Spring Boot', 'Ollama', 'Redis', 'GitHub GraphQL API'],
    role: 'Backend Developer',
    duration: 'Dec 2025',
    liveLink: '#',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'URL Monitoring System',
    shortDesc: 'Distributed system to monitor website uptime and performance.',
    fullDesc:
      'Developed a distributed URL monitoring system using Java Servlets to track website uptime and performance. Designed a multi-threaded architecture to perform parallel health checks efficiently. Integrated Redis (Lettuce) for real-time configuration and metadata management, and used Cassandra for scalable time-series data storage.',
    tech: ['Java', 'Servlets', 'Cassandra', 'Redis', 'Multithreading'],
    role: 'Backend Developer',
    duration: 'Oct 2025',
    liveLink: '#',
    githubLink: '#',
  },
];
export const projects = [
  {
    id: 1,
    title: 'AI-Powered Log Analysis',
    shortDesc: 'Spring Boot REST service with local LLM & Redis caching for automated error triage and blame analysis.',
    fullDesc:
      'Designed and developed a scalable log analysis platform using Spring Boot REST APIs to process uploaded log files, perform time-filtered analysis, and detect recurring application errors. Implemented a custom regex-based parser that extracts error types, stack traces, and metadata, flagging error spikes over configurable time windows. Integrated the GitHub GraphQL API to automatically trace failing lines back to the responsible commit and author. Leveraged a local LLM (Ollama) with Redis caching to generate automated error summaries and actionable fix suggestions.',
    tech: ['Spring Boot', 'Ollama (LLM)', 'Redis', 'GitHub GraphQL API', 'Java', 'REST APIs'],
    role: 'Backend Developer',
    duration: 'Dec 2025',
    liveLink: '#',
    githubLink: 'https://github.com/suruthi-sk/AI_Log_Analysis',
    images: ['/projects/log-analysis-1.png', '/projects/log-analysis-2.png'],
    qaRelevance: 'Demonstrates deep backend error tracing, log ingestion, and root-cause analysis skills that directly enhance defect investigation in integration environments.',
  },
  {
    id: 2,
    title: 'URL Monitoring System',
    shortDesc: 'Distributed, multi-threaded uptime and performance monitor with Cassandra time-series storage and Redis.',
    fullDesc:
      'Built a distributed uptime and performance monitor for websites using Java Servlets. Engineered a multi-threaded architecture to perform concurrent health checks across 100+ URLs efficiently without bottlenecks. Integrated Redis (Lettuce) for real-time configuration and metadata management, and designed a high-throughput Cassandra schema optimized by URL and timestamp for fast time-series queries on check history. Developed a responsive HTML/CSS dashboard displaying live uptime status and historical response times.',
    tech: ['Java', 'Java Servlets', 'Cassandra', 'Redis', 'Multithreading', 'HTML/CSS'],
    role: 'Backend Developer',
    duration: 'Oct 2025',
    liveLink: '#',
    githubLink: 'https://github.com/suruthi-sk/url_monitoring_system',
    images: ['/projects/url-monitor-1.png', '/projects/url-monitor-2.png'],
    qaRelevance: 'Highlights practical proficiency in concurrent execution, API health checks, and time-series performance validation at scale.',
  },
];
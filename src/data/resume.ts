export const resumeData = {
  name: "David 'Grant' McAllister Jr.",
  email: "grantmca2221@gmail.com",
  phone: "(205) 799-5017",
  linkedin: "https://www.linkedin.com/in/grant-mcallister/",
  education: [
    {
      degree: "Master of Science in Management Information Systems",
      school: "The University of Alabama"
    },
    {
      degree: "Bachelor of Science in Computer Engineering",
      school: "The University of Alabama",
      minors: "Mathematics, Computer Science"
    }
  ],
  experience: [
    {
      title: "Senior Software Engineer",
      company: "EAB Global Inc.",
      location: "Birmingham, AL",
      date: "July 2025 – Present",
      bullets: [
        "Architected real-time document summarization system with FastAPI WebSocket backend deployed on AWS Fargate with auto-scaling, featuring Lit web component frontend and multi-format document support, enabling advisors to receive streamed AI-generated summaries",
        "Designed and implemented config-driven AI agent framework using Model Context Protocol (MCP), enabling dynamic creation of specialized AI agents with customizable prompts and tools without code changes"
      ]
    },
    {
      title: "Software Engineer",
      company: "EAB Global Inc.",
      location: "Birmingham, AL",
      date: "July 2023 – July 2025",
      bullets: [
        "Re-architected legacy SFTP data pipeline to support multi-tenant authentication using public/private key signing and JWT, implementing solution with AWS Lambda, SQS, Transfer Family, and DynamoDB for secure data imports",
        "Designed and implemented custom student attributes system with lookup table architecture for optimized query performance, enabling administrators to configure, import, and report on custom data fields with significantly improved flexibility",
        "Engineered registration and event management platform with RESTful APIs, real-time RSVP tracking, and customizable inquiry forms using Rails and Lit web components, supporting over 500 schools and 70 million users",
        "Developed LLM-based safety detection system to identify when students ask emergency or crisis-related questions that AI chatbots are not qualified to handle, automatically alerting business partners to intervene",
        "Led migration of RAG-based conversational AI system from LangChain to LangGraph architecture, refactoring conversation flow and state management to improve maintainability and enable more complex agentic workflows",
        "Implemented automated flaky test detection and Slack notification system in GitLab CI/CD pipelines to improve test suite reliability and accelerate merge request approvals"
      ]
    },
    {
      title: "Associate Software Engineer",
      company: "EAB Global Inc.",
      location: "Birmingham, AL",
      date: "June 2022 – July 2023",
      bullets: [
        "Developed appointment feedback system including REST API endpoints, customizable questionnaire templates, data validation logic, and automated email/SMS notifications, enabling advisors to collect structured student feedback across 500+ universities",
        "Designed and implemented customizable case management email notification system with outcome-specific messaging over the life cycle of the case, improving coordination among student support staff",
        "Selected for cross-team task force to improve application performance, optimized database queries, implemented eager loading, reduced redundant database calls, and resolved data integrity issues in core quick search functionality",
        "Mentored newer associate engineers on application architecture and development best practices while establishing team processes for ticket triage, bug prioritization, and demo workflows"
      ]
    },
    {
      title: "Research Assistant | Institute of Data Analytics",
      company: "The University of Alabama",
      location: "Tuscaloosa, AL",
      date: "January 2021 – May 2021",
      bullets: [
        "Employed k-means clustering in scikit-learn and natural language processing to determine author attribution of posts potentially linked to sex trafficking"
      ]
    },
    {
      title: "Engineering Co-op | Quality Analysis",
      company: "Mercedes-Benz US International Inc.",
      location: "Vance, AL",
      date: "August 2018 – December 2018",
      bullets: [
        "Engineered data collection tools for a automotive defect detection system by utilizing Python, OpenCV, and PyQt",
        "Developed an object detection machine learning vision model aimed at detecting defects in automobiles as they go through the assembly line using Tensorflow"
      ]
    }
  ],
  skills: {
    languages: "Ruby, Python, JavaScript/TypeScript, C/C++, SQL, HTML/CSS | PostgreSQL, MySQL, SQLite",
    frameworks: "Ruby on Rails, FastAPI, Django, Lit Web Components, LangChain, LangGraph, Model Context Protocol",
    cloud: "Lambda, Fargate, SQS, AWS Transfer Family, DynamoDB",
    tools: "Docker, Git, GitLab CI/CD, GitHub Actions, Linux, Bash, Vim, WebSocket, JWT"
  }
};

export type RoleProject = {
  title: string
  period?: string
  description: string
  tags: string[]
}

export type Role = {
  company: string
  title: string
  period: string
  projects: RoleProject[]
}

export const experience: Role[] = [
  {
    company: 'Orium',
    title: 'Technical Lead / Senior Developer',
    period: 'May 2017 – Present',
    projects: [
      {
        title: 'FilterEasy',
        period: 'Feb 2023 – Present',
        description:
          'Led a 3-person team delivering a headless e-commerce platform. Responsible for estimates, architecture decisions, and alignment across engineering and business analysis.',
        tags: ['Next.js', 'TypeScript', 'BigCommerce', 'Contentstack', 'Vercel', 'AWS', 'Neon', 'Upstash', 'DynamoDB'],
      },
      {
        title: 'ASSA ABLOY eCommerce',
        period: 'Jul 2022 – Feb 2023',
        description:
          'Designed and developed a headless commerce solution on BigCommerce with a serverless backend using AWS Lambda and Step Functions.',
        tags: ['BigCommerce', 'AWS Lambda', 'Step Functions', 'Next.js', 'Handlebars', 'Chakra UI'],
      },
      {
        title: 'MACHathon 2022 — 1st Place',
        description:
          'Won first place in the MACH Alliance championship with a team of five. Built a real-time commerce platform in under 48 hours.',
        tags: ['Next.js', 'BigCommerce', 'Algolia', 'CockroachDB', 'Pusher', 'Netlify'],
      },
      {
        title: 'UNITEC',
        period: 'Nov 2021 – Jul 2022',
        description:
          'Coordinated between the client technical team and the internal team to deliver a full-stack web platform. Led DB design, REST API development, and deployment on GCP.',
        tags: ['PHP 8', 'Laravel', 'Vue.js 3', 'GCP', 'App Engine', 'Cloud Build', 'Bootstrap'],
      },
      {
        title: 'Mi Telcel Empresas',
        period: 'May 2017 – Nov 2021',
        description:
          'Developed and maintained a multi-company phone line management platform. Built a microservices architecture with pub/sub messaging, a CI/CD pipeline, and led a team of 5 developers.',
        tags: ['Java 8', 'Spring', 'Vue.js 2', 'ActiveMQ', 'Docker', 'TeamCity', 'SonarQube'],
      },
    ],
  },
  {
    company: 'Grupo Proyectos S.A. de C.V.',
    title: 'Senior Developer / Mid Developer',
    period: 'Nov 2013 – May 2017',
    projects: [
      {
        title: 'Gestión de fideicomisos',
        description:
          'Developed and supported a monolithic financial trust management application. Delivered new features based on client requirements and implemented SQL Server redundancy configuration.',
        tags: ['Java 8', 'Servlets', 'jQuery', 'Bootstrap', 'MySQL', 'SQL Server'],
      },
    ],
  },
  {
    company: 'Armonía Familiar',
    title: 'Web Developer',
    period: 'Feb 2017 – Jul 2017',
    projects: [
      {
        title: 'Patient Management System',
        description:
          'Built a web application to manage patient records, clinical history, digital documents, and appointment scheduling for a psychological clinic.',
        tags: ['Spring MVC', 'jQuery', 'Bootstrap', 'MySQL'],
      },
    ],
  },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  featured: boolean
}

export const projects: Project[] = [
  {
    title: 'FilterEasy',
    description:
      'Led a 3-person team building a headless e-commerce platform. Coordinated delivery across Next.js, BigCommerce, Contentstack, Vercel, Neon, Upstash, and AWS. Responsible for estimates, architecture, and cross-team alignment.',
    tags: ['Next.js', 'BigCommerce', 'Contentstack', 'Vercel', 'AWS'],
    featured: true,
  },
  {
    title: 'ASSA ABLOY eCommerce',
    description:
      'Designed and developed a headless commerce solution on BigCommerce with a serverless backend — AWS Lambda, Step Functions, and Next.js for the storefront layer.',
    tags: ['BigCommerce', 'AWS Lambda', 'Step Functions', 'Next.js'],
    featured: true,
  },
  {
    title: 'MACHathon 2022 — 1st Place',
    description:
      'Won first place in the MACH Alliance championship with a team of five. Built a real-time commerce platform using Next.js, BigCommerce, Algolia, CockroachDB, and Pusher on Netlify.',
    tags: ['Next.js', 'BigCommerce', 'Algolia', 'CockroachDB', 'Netlify'],
    featured: true,
  },
]

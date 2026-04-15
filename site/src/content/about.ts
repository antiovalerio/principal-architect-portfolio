export const bio = [
  '11 years building production systems across commerce platforms, distributed architecture, and cloud-native infrastructure. Started as a Java backend developer, expanded through full-stack delivery, and grew into technical leadership — coordinating engineering teams and shaping system design across complex, multi-repo projects.',
  'Currently Technical Lead at Orium, working with global teams from Mexico City. Primary focus is headless commerce: serverless APIs, composable storefronts, and the integration layer between platforms like BigCommerce, Contentstack, and AWS.',
  'I approach architecture as a constraint-solving discipline. The goal is not the most elegant system — it is the most appropriate one given the team, the timeline, and the business context.',
]

export type Certification = {
  name: string
  issuer: string
  year: number
}

export const certifications: Certification[] = [
  { name: 'Cloud Digital Leader', issuer: 'Google', year: 2024 },
  { name: 'Contentstack Developer', issuer: 'Contentstack', year: 2023 },
  { name: 'BigDev Certified', issuer: 'BigCommerce', year: 2023 },
  { name: 'AWS Cloud Technical Essentials', issuer: 'Coursera', year: 2021 },
  { name: 'M001: MongoDB Basics', issuer: 'MongoDB University', year: 2021 },
  { name: 'SAFe for Teams v4.6', issuer: 'Scaled Agile', year: 2020 },
  { name: 'Oracle Certified Expert — Java EE 6 Web Services Developer', issuer: 'Oracle', year: 2015 },
  { name: 'Oracle Certified — Java EE 6 Web Component Developer', issuer: 'Oracle', year: 2015 },
  { name: 'Oracle Certified Professional — Java SE 6 Programmer', issuer: 'Oracle', year: 2013 },
]

export const education = {
  degree: "Bachelor's in Computer Engineering",
  institution: 'Universidad Autónoma Metropolitana Azcapotzalco',
}

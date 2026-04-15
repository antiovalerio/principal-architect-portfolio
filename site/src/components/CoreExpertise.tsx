const areas = [
  {
    title: 'Commerce Platform Architecture',
    description:
      'MACH-native commerce systems built on BigCommerce, Contentstack, and headless patterns at production scale.',
  },
  {
    title: 'Distributed Systems',
    description:
      'Microservices, event-driven architecture, API design, and service integration across cloud boundaries.',
  },
  {
    title: 'Cloud-Native Delivery',
    description:
      'Production systems on AWS and GCP — Lambda, App Engine, edge functions, and automated CI/CD pipelines.',
  },
  {
    title: 'Technical Leadership',
    description:
      'Leading engineering teams, architecture reviews, estimates, and cross-functional delivery coordination.',
  },
  {
    title: 'Modern Web Engineering',
    description:
      'Next.js, TypeScript, React — full-stack delivery with performance and developer experience as first-class concerns.',
  },
]

export default function CoreExpertise() {
  return (
    <section className="py-20 border-b border-[var(--border)]">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-12">
          Core Expertise
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
          {areas.map((area) => (
            <div key={area.title}>
              <h3 className="text-sm font-medium text-[var(--text-primary)] mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

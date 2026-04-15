import type { Metadata } from 'next'
import { experience } from '@/content/experience'
import { profile } from '@/content/profile'

export const metadata: Metadata = {
  title: 'Experience — Luis Valerio',
  description: '11 years of work history across commerce platforms, distributed systems, and cloud-native delivery. Technical Lead at Orium.',
  openGraph: {
    title: 'Experience — Luis Valerio',
    description: '11 years of work history across commerce platforms, distributed systems, and cloud-native delivery. Technical Lead at Orium.',
    url: `${profile.url}/experience`,
  },
  alternates: {
    canonical: `${profile.url}/experience`,
  },
}

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-16 border-b border-[var(--border)] pb-16">
        <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-6">
          Experience
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-[var(--text-primary)]">
          Work history
        </h1>
      </div>

      <div className="flex flex-col divide-y divide-[var(--border)]">
        {experience.map((role) => (
          <div key={role.company} className="py-14 first:pt-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-10">
              <h2 className="text-xl font-medium text-[var(--text-primary)]">
                {role.company}
              </h2>
              <div className="flex flex-col sm:items-end gap-1">
                <span className="text-sm text-[var(--text-secondary)]">{role.title}</span>
                <span className="text-xs text-[var(--text-muted)]">{role.period}</span>
              </div>
            </div>

            <div className="flex flex-col divide-y divide-[var(--border)]">
              {role.projects.map((project) => (
                <div key={project.title} className="py-6 first:pt-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                    <h3 className="text-base font-medium text-[var(--text-primary)]">
                      {project.title}
                    </h3>
                    {project.period && (
                      <span className="text-xs text-[var(--text-muted)]">{project.period}</span>
                    )}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-[var(--text-muted)] bg-[var(--bg-surface)] border border-[var(--border)] px-2 py-0.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

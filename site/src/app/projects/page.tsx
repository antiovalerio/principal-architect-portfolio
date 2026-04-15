import type { Metadata } from 'next'
import { projects } from '@/content/projects'
import { profile } from '@/content/profile'

export const metadata: Metadata = {
  title: 'Work — Luis Valerio',
  description: 'Selected projects by Luis Valerio — headless commerce platforms, distributed systems, and cloud-native delivery at scale.',
  openGraph: {
    title: 'Work — Luis Valerio',
    description: 'Selected projects by Luis Valerio — headless commerce platforms, distributed systems, and cloud-native delivery at scale.',
    url: `${profile.url}/projects`,
  },
  alternates: {
    canonical: `${profile.url}/projects`,
  },
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-16 border-b border-[var(--border)] pb-16">
        <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-6">
          Projects
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-[var(--text-primary)]">
          Selected work
        </h1>
      </div>

      <div className="flex flex-col divide-y divide-[var(--border)]">
        {projects.map((project) => (
          <div key={project.title} className="py-10 first:pt-0 last:pb-0">
            <h2 className="text-base font-medium text-[var(--text-primary)] mb-3">
              {project.title}
            </h2>
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
  )
}

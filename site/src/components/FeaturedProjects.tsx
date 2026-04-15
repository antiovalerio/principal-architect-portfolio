import Link from 'next/link'
import { projects } from '@/content/projects'

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-baseline justify-between mb-12">
          <p className="text-xs uppercase tracking-widest text-[var(--text-muted)]">
            Selected Work
          </p>
          <Link
            href="/projects"
            className="text-xs text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors"
          >
            All projects
          </Link>
        </div>
        <div className="flex flex-col divide-y divide-[var(--border)]">
          {featured.map((project) => (
            <div key={project.title} className="py-8 first:pt-0 last:pb-0">
              <h3 className="text-base font-medium text-[var(--text-primary)] mb-2">
                {project.title}
              </h3>
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
    </section>
  )
}

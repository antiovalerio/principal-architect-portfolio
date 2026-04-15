import Link from 'next/link'
import { profile } from '@/content/profile'

export default function HeroSection() {
  return (
    <section className="py-28 border-b border-[var(--border)]">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-8">
          Principal Architect
        </p>
        <h1 className="text-5xl sm:text-6xl font-medium tracking-tight text-[var(--text-primary)] mb-8 leading-[1.1]">
          Luis Valerio
        </h1>
        <p className="text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed mb-12">
          {profile.summary}
        </p>
        <div className="flex items-center gap-8">
          <Link
            href="/projects"
            className="text-sm text-[var(--text-primary)] border-b border-[var(--text-primary)] pb-0.5 hover:text-[var(--text-secondary)] hover:border-[var(--text-secondary)] transition-colors"
          >
            View work
          </Link>
          <a
            href="/LuisValerio2025.pdf"
            download
            className="text-sm text-[var(--text-muted)] border-b border-[var(--border)] pb-0.5 hover:text-[var(--text-secondary)] hover:border-[var(--text-secondary)] transition-colors"
          >
            Download resume
          </a>
        </div>
      </div>
    </section>
  )
}

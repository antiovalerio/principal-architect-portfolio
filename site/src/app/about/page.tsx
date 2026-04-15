import type { Metadata } from 'next'
import { bio, certifications, education } from '@/content/about'
import { profile } from '@/content/profile'

export const metadata: Metadata = {
  title: 'About — Luis Valerio',
  description: 'Principal Architect with 11 years building production systems across commerce platforms, distributed architecture, and cloud-native delivery.',
  openGraph: {
    title: 'About — Luis Valerio',
    description: 'Principal Architect with 11 years building production systems across commerce platforms, distributed architecture, and cloud-native delivery.',
    url: `${profile.url}/about`,
  },
  alternates: {
    canonical: `${profile.url}/about`,
  },
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-16 border-b border-[var(--border)] pb-16">
        <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-6">
          About
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-[var(--text-primary)]">
          Luis Valerio
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-6">
            {bio.map((paragraph, i) => (
              <p key={i} className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-6">
              Resume
            </p>
            <a
              href="/LuisValerio2025.pdf"
              download
              className="text-sm text-[var(--text-primary)] border-b border-[var(--text-primary)] pb-0.5 hover:text-[var(--text-secondary)] hover:border-[var(--text-secondary)] transition-colors"
            >
              Download resume
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-6">
              Education
            </p>
            <p className="text-sm text-[var(--text-primary)] leading-relaxed mb-1">
              {education.degree}
            </p>
            <p className="text-xs text-[var(--text-muted)]">{education.institution}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-6">
              Certifications
            </p>
            <div className="flex flex-col gap-4">
              {certifications.map((cert) => (
                <div key={cert.name}>
                  <p className="text-sm text-[var(--text-primary)] leading-snug">
                    {cert.name}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-0.5">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

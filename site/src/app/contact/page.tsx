import type { Metadata } from 'next'
import { profile } from '@/content/profile'

export const metadata: Metadata = {
  title: 'Contact — Luis Valerio',
  description: 'Get in touch with Luis Valerio, Principal Architect based in Mexico City.',
  openGraph: {
    title: 'Contact — Luis Valerio',
    description: 'Get in touch with Luis Valerio, Principal Architect based in Mexico City.',
    url: `${profile.url}/contact`,
  },
  alternates: {
    canonical: `${profile.url}/contact`,
  },
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-24">
      <div className="mb-16 border-b border-[var(--border)] pb-16">
        <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-6">
          Contact
        </p>
        <h1 className="text-4xl font-medium tracking-tight text-[var(--text-primary)]">
          Get in touch
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2">
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-lg">
            I am open to conversations about principal-level architecture roles, technical
            leadership opportunities, and complex platform challenges. Reach out directly
            by email or connect on LinkedIn.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors"
            >
              {profile.email}
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4">
              LinkedIn
            </p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors"
            >
              linkedin.com/in/antiovalerio
            </a>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-[var(--text-muted)] mb-4">
              Location
            </p>
            <p className="text-sm text-[var(--text-secondary)]">{profile.location}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

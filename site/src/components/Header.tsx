import Link from 'next/link'
import { navigation } from '@/content/navigation'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium tracking-wide text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors"
        >
          Luis Valerio
        </Link>
        <nav className="flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

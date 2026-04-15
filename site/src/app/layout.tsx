import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Luis Valerio — Principal Architect',
  description:
    'Portfolio of Luis Antio Valerio Gayosso. Principal-level system design, cloud-native engineering, and commerce platform architecture.',
  metadataBase: new URL('https://antval.dev'),
  openGraph: {
    siteName: 'Luis Valerio — Principal Architect',
    title: 'Luis Valerio — Principal Architect',
    description:
      'Portfolio of Luis Antio Valerio Gayosso. Principal-level system design, cloud-native engineering, and commerce platform architecture.',
    url: 'https://antval.dev',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luis Valerio — Principal Architect',
    description:
      'Portfolio of Luis Antio Valerio Gayosso. Principal-level system design, cloud-native engineering, and commerce platform architecture.',
  },
  alternates: {
    canonical: 'https://antval.dev',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--text-primary)]">
        <Header />
        <main className="flex-1 pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

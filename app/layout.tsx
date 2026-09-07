import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'ZFile — Secure workspace for your files',
  description: 'Upload, edit, share, and protect your files with ZFile.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0b0e',
  userScalable: false,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`dark bg-[#0a0b0e] ${inter.variable}`} suppressHydrationWarning><body className="antialiased font-sans" suppressHydrationWarning>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}

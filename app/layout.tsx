import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tenten GEO | Global Expansion Optimization',
  description: 'Expand your business globally with AI-powered GEO solutions. Strategic content creation, technical SEO, and multi-market optimization.',
  keywords: 'GEO, global expansion, international SEO, multi-market, AI-powered content',
  openGraph: {
    title: 'Tenten GEO | Global Expansion Optimization',
    description: 'Expand your business globally with AI-powered GEO solutions',
    url: 'https://geo.tenten.co',
    siteName: 'Tenten GEO',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tenten GEO | Global Expansion Optimization',
    description: 'Expand your business globally with AI-powered GEO solutions',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 
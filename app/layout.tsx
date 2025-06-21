import './globals.css'
import { Inter, Noto_Sans_TC } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const noto = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-noto',
})

export const metadata: Metadata = {
  title: 'Tenten GEO – Generative Engine Optimization (AI SEO) Services',
  description:
    'Boost organic visibility at scale with Tenten\'s Generative Engine Optimization. AI-driven keyword research, technical SEO & high-quality content that ranks.',
  openGraph: {
    title: 'Tenten GEO – AI SEO that ranks',
    description:
      'Boost organic visibility at scale with Tenten\'s Generative Engine Optimization.',
    url: 'https://tenten.co/geo',
    siteName: 'Tenten GEO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tenten GEO – AI SEO that ranks',
    description: 'Boost organic visibility at scale with Tenten\'s Generative Engine Optimization.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${noto.variable} antialiased`}
    >
      <body className="font-sans bg-gray-50 text-gray-800">{children}</body>
    </html>
  )
} 
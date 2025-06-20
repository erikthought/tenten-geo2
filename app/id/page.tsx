'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, BarChart3 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { getI18nData } from '@/mock-i18n'

export default function IndonesianPage() {
  const t = getI18nData('id')

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="https://cdn.prod.website-files.com/664ac0da22e63b78c9005ce5/664ac2634d948a1fe260aaec_tenten_logo.png"
              alt="Tenten"
              width={128}
              height={32}
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.services}</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.pricing}</Link>
            <Link href="https://tenten.co/about" className="text-gray-600 hover:text-blue-600 transition-colors">Tentang</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button asChild>
              <Link href="https://tenten.co/contact">{t.nav.getStarted}</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {t.hero.headline}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.hero.subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="https://tenten.co/contact">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="https://go.tenten.co/meet">
                {t.hero.secondaryCta}
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">85%</div>
              <div className="text-gray-600">Peningkatan Lalu Lintas Rata-rata</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">3.2x</div>
              <div className="text-gray-600">Peningkatan Generasi Lead</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">127%</div>
              <div className="text-gray-600">Pertumbuhan Pendapatan</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="relative h-full">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Standard GEO Package</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $2,390<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline" size="lg" asChild>
                  <Link href="https://tenten.co/contact">
                    Mulai
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="relative h-full border-blue-500 border-2">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">Premium GEO Package</CardTitle>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  $5,290<span className="text-lg font-normal text-gray-600">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="lg" asChild>
                  <Link href="https://tenten.co/contact">
                    Mulai
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <Image
                src="https://cdn.prod.website-files.com/664ac0da22e63b78c9005ce5/664ac2634d948a1fe260aaec_tenten_logo.png"
                alt="Tenten"
                width={128}
                height={32}
                className="h-8 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 mb-6">
                AI-powered global expansion optimization.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Hubungkan</h3>
              <ul className="space-y-2">
                <li><Link href="https://instagram.com/tenten.co" className="text-gray-400 hover:text-white transition-colors">Instagram</Link></li>
                <li><Link href="https://www.youtube.com/@tenten_ai" className="text-gray-400 hover:text-white transition-colors">YouTube</Link></li>
                <li><Link href="https://www.linkedin.com/company/tentenco" className="text-gray-400 hover:text-white transition-colors">LinkedIn</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Perusahaan</h3>
              <ul className="space-y-2">
                <li><Link href="https://tenten.co/about" className="text-gray-400 hover:text-white transition-colors">Tentang</Link></li>
                <li><Link href="https://tenten.co/learning/" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="https://tenten.co/portfolio" className="text-gray-400 hover:text-white transition-colors">Studi Kasus</Link></li>
                <li><Link href="https://tenten.co/contact" className="text-gray-400 hover:text-white transition-colors">Kontak</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2">
                <li><Link href="https://t.me/tentencx" className="text-gray-400 hover:text-white transition-colors">Telegram</Link></li>
                <li><Link href="tel:+886266041039" className="text-gray-400 hover:text-white transition-colors">+886 2 66041039</Link></li>
                <li><Link href="https://go.tenten.co/map" className="text-gray-400 hover:text-white transition-colors">Kantor Pusat - Taipei</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 Tenten Co. Hak cipta dilindungi.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
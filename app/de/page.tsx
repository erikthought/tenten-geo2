'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import Image from 'next/image'
import { getI18nData } from '@/mock-i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function GermanPage() {
  const t = getI18nData('de')

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src="https://cdn.prod.website-files.com/664ac0da22e63b78c9005ce5/664ac2634d948a1fe260aaec_tenten_logo.png"
              alt="Tenten Logo"
              width={128}
              height={32}
              className="h-8 w-auto object-contain"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.services}</a>
            <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.pricing}</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              {t.nav.getStarted}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {t.hero.headline}
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://tenten.co/contact" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                {t.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://go.tenten.co/meet" target="_blank" rel="noopener noreferrer" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-200 text-center">
                {t.hero.secondaryCta}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-600">Durchschnittlicher Traffic-Anstieg</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">3.2x</div>
              <div className="text-gray-600">Lead-Generierung Boost</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">127%</div>
              <div className="text-gray-600">Umsatzwachstum</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="mb-4">
                <Image
                  src="https://cdn.prod.website-files.com/664ac0da22e63b78c9005ce5/664ac2634d948a1fe260aaec_tenten_logo.png"
                  alt="Tenten Logo"
                  width={128}
                  height={32}
                  className="h-8 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-gray-400">
                Die Zukunft der Suchoptimierung mit KI-first Strategien anführen.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Soziale Medien</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://instagram.com/tenten.co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://www.youtube.com/@tenten_ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Youtube</a></li>
                <li><a href="https://www.threads.net/@tenten.co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Threads</a></li>
                <li><a href="https://www.linkedin.com/company/tentenco" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Linkedin</a></li>
                <li><a href="https://x.com/tentencretaive" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a></li>
                <li><a href="https://www.tiktok.com/@tenten.ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Tiktok</a></li>
                <li><a href="https://linktr.ee/tenten.co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Linktree</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://tenten.co/about" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Über uns</a></li>
                <li><a href="https://tenten.co/learning/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="https://tenten.co/portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Fallstudien</a></li>
                <li><a href="https://tenten.co/contact" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://t.me/tentencx" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a></li>
                <li>+886 2 66041039</li>
                <li><a href="https://go.tenten.co/map" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Hauptsitz - Taipei</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tenten GEO. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </main>
  )
} 
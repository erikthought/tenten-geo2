'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { getI18nData } from '@/mock-i18n'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default function SpanishPage() {
  const t = getI18nData('es')

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/images/tenten_logo.png" alt="Tenten Logo" width={128} height={32} className="h-8 w-auto object-contain" />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-slate-600 hover:text-primary-600 transition-colors">{t.nav.services}</a>
            <a href="#pricing" className="text-slate-600 hover:text-primary-600 transition-colors">{t.nav.pricing}</a>
            <a href="#contact" className="text-slate-600 hover:text-primary-600 transition-colors">{t.nav.contact}</a>
          </nav>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              {t.nav.getStarted}
            </button>
          </div>
        </div>
      </header>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-fluid-4xl font-bold text-slate-900 mb-6 text-balance">{t.hero.headline}</h1>
            <p className="text-fluid-lg text-slate-600 mb-8 max-w-2xl mx-auto">{t.hero.subheadline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://tenten.co/contact" target="_blank" rel="noopener noreferrer" className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
                {t.hero.cta}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="https://go.tenten.co/meet" target="_blank" rel="noopener noreferrer" className="border border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-slate-50 transition-all duration-200 text-center">
                {t.hero.secondaryCta}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Image src="/images/tenten_logo.png" alt="Tenten Logo" width={128} height={32} className="h-8 w-auto object-contain mx-auto mb-4" />
            <p className="text-slate-400 mb-8">Liderando el futuro de la optimización de búsqueda con estrategias centradas en IA.</p>
            <div className="border-t border-slate-800 pt-8">
              <p className="text-slate-400">&copy; 2024 Tenten GEO. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
} 
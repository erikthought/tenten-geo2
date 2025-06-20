'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Globe,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { getI18nData } from '@/mock-i18n'
import React from 'react'

interface Props {
  lang: string
}

export default function FullLandingPage({ lang }: Props) {
  const t = (getI18nData(lang) ?? getI18nData('en')) as any

  // --- NEW TRANSLATION LOOKUPS ---
  const labels = {
    trafficIncrease: t.labels?.trafficIncrease ?? 'Average Traffic Increase',
    leadBoost: t.labels?.leadBoost ?? 'Lead Generation Boost',
    revenueGrowth: t.labels?.revenueGrowth ?? 'Revenue Growth',
  }

  const sectionText = {
    chooseTitle: t.sections?.chooseTitle ?? 'Why Choose Tenten GEO?',
    chooseSubtitle:
      t.sections?.chooseSubtitle ??
      'Our AI-driven approach delivers measurable results in global markets',
    servicesTitle: t.sections?.servicesTitle ?? 'Our GEO Services',
    servicesSubtitle:
      t.sections?.servicesSubtitle ??
      'Comprehensive solutions to dominate AI-powered search engines',
    pricingTitle: t.sections?.pricingTitle ?? 'Choose Your Growth Plan',
    pricingSubtitle:
      t.sections?.pricingSubtitle ??
      'Flexible packages designed to scale with your global expansion goals',
    testimonialsTitle: t.sections?.testimonialsTitle ?? 'Client Success Stories',
    testimonialsSubtitle:
      t.sections?.testimonialsSubtitle ??
      'See how companies like yours achieved remarkable growth with our GEO solutions',
  }

  const benefits =
    t.benefits ?? [
      {
        title: 'AI-First Strategy',
        icon: Target,
        description:
          'Leverage cutting-edge AI technology to spot market opportunities and optimize content for global audiences.',
      },
      {
        title: 'Future-Proof Growth',
        icon: TrendingUp,
        description:
          'Build scalable systems that adapt to ever-changing market conditions and search algorithms.',
      },
      {
        title: 'Authority Building',
        icon: Shield,
        description:
          'Establish your brand as the leading solution across multiple markets through strategic content positioning.',
      },
      {
        title: 'Competitive Advantage',
        icon: Zap,
        description:
          'Stay ahead of competitors with data-driven insights and rapid market-penetration strategies.',
      },
    ]

  const features =
    t.features ?? [
      {
        title: 'Comprehensive GEO Audit',
        icon: Target,
        description:
          'Deep analysis of your current digital presence in target markets with actionable recommendations.',
      },
      {
        title: 'Content Strategy Development',
        icon: Globe,
        description:
          'AI-driven content planning tailored to local market search behaviours and preferences.',
      },
      {
        title: 'Technical Implementation',
        icon: BarChart3,
        description:
          'Complete technical SEO optimisation including hreflang, site structure and performance improvements.',
      },
      {
        title: 'Performance Monitoring',
        icon: TrendingUp,
        description:
          'Ongoing tracking and optimisation with detailed reporting and strategic adjustments.',
      },
    ]

  const testimonials = [
    {
      quote: `"Tenten's GEO strategy boosted our qualified leads by 312% across 8 markets. Their AI-driven approach is groundbreaking."`,
      author: 'Sarah Chen',
      role: 'VP Marketing',
      company: 'HealthTech Solutions',
      metric: '312% increase in leads',
    },
    {
      quote:
        '"Within 6 months we achieved #1 rankings for 15 high-value keywords in 5 countries. ROI exceeded expectations by 180%."',
      author: 'Marcus Rodriguez',
      role: 'Head of Growth',
      company: 'FinanceFlow',
      metric: '180% increase in ROI',
    },
  ]

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
            <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.nav?.services ?? 'Services'}
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.nav?.pricing ?? 'Pricing'}
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.nav?.contact ?? 'Case Studies'}
            </Link>
            <Link href="https://tenten.co/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button asChild>
              <Link href="https://tenten.co/contact">{t.nav?.getStarted ?? 'Get Started'}</Link>
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
              <Link href="https://go.tenten.co/meet">{t.hero.secondaryCta}</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Stat icon={TrendingUp} value="85%" label={labels.trafficIncrease} />
            <Stat icon={Users} value="3.2x" label={labels.leadBoost} />
            <Stat icon={BarChart3} value="127%" label={labels.revenueGrowth} />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader title={sectionText.chooseTitle} subtitle={sectionText.chooseSubtitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, idx) => (
              <BenefitCard key={idx} {...b} delay={idx * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title={sectionText.servicesTitle} subtitle={sectionText.servicesSubtitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f, idx) => (
              <FeatureCard key={idx} {...f} delay={idx * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader title={sectionText.pricingTitle} subtitle={sectionText.pricingSubtitle} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingCard
              title="Standard GEO Package"
              price="$2,390"
              period="/month"
              features={[
                '8 high-quality articles per month',
                'Technical SEO optimisation',
                'Multi-market keyword research',
                'Monthly performance reports',
                'Email support',
              ]}
            />
            <PricingCard
              title="Premium GEO Package"
              price="$5,290"
              period="/month"
              featured
              features={[
                '30 high-quality articles per month',
                'Advanced technical implementation',
                'Priority market analysis',
                'Weekly strategy calls',
                '24/7 dedicated support',
                'Custom integrations',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader title={sectionText.testimonialsTitle} subtitle={sectionText.testimonialsSubtitle} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, idx) => (
              <TestimonialCard key={idx} {...t} delay={idx * 0.2} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Scale Globally?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join hundreds of businesses that transformed their global presence with Tenten GEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link href="https://tenten.co/contact">
                  Get Your GEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <Link href="https://go.tenten.co/meet">Schedule Consultation</Link>
              </Button>
            </div>
          </motion.div>
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
                AI-powered global expansion optimisation for ambitious companies.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://instagram.com/tenten.co" className="text-gray-400 hover:text-white transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/@tenten_ai" className="text-gray-400 hover:text-white transition-colors">
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/company/tentenco" className="text-gray-400 hover:text-white transition-colors">
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://tenten.co/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="https://tenten.co/learning/" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="https://tenten.co/portfolio" className="text-gray-400 hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="https://tenten.co/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="https://t.me/tentencx" className="text-gray-400 hover:text-white transition-colors">
                    Telegram
                  </Link>
                </li>
                <li>
                  <Link href="tel:+886266041039" className="text-gray-400 hover:text-white transition-colors">
                    +886 2 66041039
                  </Link>
                </li>
                <li>
                  <Link href="https://go.tenten.co/map" className="text-gray-400 hover:text-white transition-colors">
                    Headquarters - Taipei
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 Tenten Co. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

// Helper components

function Stat({ icon: Icon, value, label }: { icon: any; value: string; label: string }) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
      <div className="text-4xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-gray-600">{label}</div>
    </motion.div>
  )
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
  )
}

function BenefitCard({ title, description, icon: Icon, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function FeatureCard({ title, description, icon: Icon, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: delay % 0.4 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardHeader>
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function PricingCard({ title, price, period, features, featured = false }: any) {
  return (
    <Card className={`relative h-full ${featured ? 'border-blue-500 border-2' : ''}`}>
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">Most Popular</span>
        </div>
      )}
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-2xl mb-2">{title}</CardTitle>
        <div className="text-4xl font-bold text-gray-900 mb-2">
          {price}
          <span className="text-lg font-normal text-gray-600">{period}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((f: string, idx: number) => (
            <li key={idx} className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-gray-700">{f}</span>
            </li>
          ))}
        </ul>

        <div className="pt-6">
          <Button className="w-full" variant={featured ? 'default' : 'outline'} size="lg" asChild>
            <Link href="https://tenten.co/contact">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function TestimonialCard({ quote, author, role, company, metric, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardHeader>
          <div className="flex items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">{quote}</p>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-gray-900">{author}</div>
              <div className="text-sm text-gray-600">{role}</div>
              <div className="text-sm text-gray-600">{company}</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{metric}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
} 
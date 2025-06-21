'use client'

import { motion } from 'framer-motion'
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  Globe,
  Heart,
  Mail,
  MessageSquare,
  Shield,
  Star,
  Target,
  TrendingUp,
  User,
  Zap,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { getI18nData, LanguagePack, Benefit, Feature } from '@/lib/mock-i18n'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface Props {
  lang: string
}

type IconType = React.ComponentType<{ className?: string }>

interface BenefitWithIcon extends Benefit {
  icon: IconType
}

interface FeatureWithIcon extends Feature {
  icon: IconType
}

export default function FullLandingPage({ lang }: Props) {
  const t: LanguagePack = getI18nData(lang)

  const benefitIcons: IconType[] = [Target, Globe, Zap]
  const featureIcons: IconType[] = [TrendingUp, BarChart3, Star, CheckCircle]

  const benefits: BenefitWithIcon[] = t.benefits.items.map((b, i) => ({
    ...b,
    icon: benefitIcons[i] || Heart,
  }))

  const features: FeatureWithIcon[] = t.features.items.map((f, i) => ({
    ...f,
    icon: featureIcons[i] || Heart,
  }))

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="sticky top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="#" className="flex items-center space-x-2">
            <Image
              src="https://cdn.prod.website-files.com/664ac0da22e63b78c9005ce5/664ac2634d948a1fe260aaec_tenten_logo.png"
              alt="Tenten GEO Logo"
              width={120}
              height={30}
              className="h-auto"
            />
            <span className="text-2xl font-bold text-gray-900">Tenten GEO</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-lg">
            <Link href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.nav.benefits}
            </Link>
            <Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.nav.features}
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.nav.pricing}
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t.nav.contact}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button asChild className="hidden sm:inline-flex">
              <Link href="#contact">{t.hero.cta}</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
                {t.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {t.hero.subtitle}
              </p>
              <Button size="lg" asChild>
                <Link href="#contact">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader title={t.benefits.title} />
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, i) => (
                <BenefitCard key={i} {...benefit} />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader title={t.features.title} />
            <div className="grid md:grid-cols-2 gap-8">
              {features.map((feature, i) => (
                <FeatureCard key={i} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container mx-auto px-4">
            <SectionHeader title={t.pricing.title} />
            <div className="max-w-md mx-auto">
              <PricingCard {...t.pricing.enterprise} />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <SectionHeader title={t.contact.title} subtitle={t.contact.subtitle} />
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input type="text" placeholder={t.contact.form.name} className="pl-10" />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input type="email" placeholder={t.contact.form.email} className="pl-10" />
                    </div>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                      <Textarea placeholder={t.contact.form.message} className="pl-10 min-h-[120px]" />
                    </div>
                    <Button type="submit" className="w-full" size="lg">
                      {t.contact.form.submit}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>{t.footer.copy}</p>
        </div>
      </footer>
    </div>
  )
}

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  )
}

function BenefitCard({ title, description, icon: Icon }: BenefitWithIcon) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="text-center h-full hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="mx-auto bg-blue-100 rounded-full p-3 w-max mb-4">
            <Icon className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function FeatureCard({ title, description, icon: Icon }: FeatureWithIcon) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-start">
          <div className="bg-blue-100 rounded-full p-3 mr-4">
            <Icon className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
        </CardHeader>
      </Card>
    </motion.div>
  )
}

function PricingCard({ title, price, features, cta }: { title: string; price: string; features: string[]; cta: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="border-blue-600 border-2 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <p className="text-4xl font-bold mt-2">{price}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul className="space-y-2">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="w-full" size="lg" asChild>
            <Link href="#contact">{cta}</Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
} 
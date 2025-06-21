'use client'

import { motion } from 'framer-motion'
import {
  Sparkles,
  Signal,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Mail,
  MessageSquare,
  User,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const benefits = [
  {
    icon: Signal,
    title: 'Real-time AI Keyword Intelligence',
    desc: 'Identify profitable, low-competition queries in minutes, not weeks.',
  },
  {
    icon: TrendingUp,
    title: 'Technical Excellence',
    desc: 'We resolve crawlability, Core Web Vitals & schema for peak performance.',
  },
  {
    icon: Sparkles,
    title: 'Human-grade AI Content',
    desc: '8–30 long-form articles monthly, edited by experts for EEAT compliance.',
  },
] as const

const tiers = [
  {
    name: 'Standard GEO Package',
    price: '$2,390',
    period: '/month',
    perks: [
      'GEO Audit',
      'Technical SEO',
      'GEO Analysis Report',
      'Keyword Matrix',
      'Long form (1500~3000 words) of GEO friendly article x 8 post a month',
      'Monthly report',
    ],
    featured: false,
  },
  {
    name: 'Premium GEO Package',
    price: '$5,290',
    period: '/month',
    perks: [
      'GEO Audit',
      'Technical SEO',
      'GEO Analysis Report',
      'Keyword Matrix',
      'Long form (1500~3000 words) of GEO friendly article x 30 post a month',
      'Dedicated Communication Channel',
      'within 12hr support ticket reply',
      'Bi-Weekly report',
    ],
    featured: true,
  },
] as const

export default function GeoLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
              Benefits
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild className="hidden sm:inline-flex">
              <Link href="#contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* --------------- HERO (Attention) --------------- */}
      <section className="relative isolate overflow-hidden bg-white pt-24 pb-32">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/10 to-transparent" />
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
          >
            Generative Engine Optimization (AI SEO) that Wins SERPs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Outrank competitors faster with Tenten's data-driven, AI-powered SEO framework. More traffic, more revenue—zero guesswork.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="#pricing">
                Get My Growth Plan <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* --------------- PROBLEM/INTEREST --------------- */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Traditional SEO is Broken. AI Search Changes Everything.
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            ChatGPT, Google's AI Overviews, and Perplexity are reshaping how people find information. 
            Your content needs to be optimized for AI engines, not just traditional search.
          </p>
        </div>
      </section>

      {/* --------------- BENEFITS (Interest) --------------- */}
      <section className="py-20 bg-white" id="benefits">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl md:text-4xl font-bold text-gray-900">
            Why Tenten GEO Dominates AI Search
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((b, index) => (
              <motion.div
                key={b.title}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-col items-center text-center">
                    <div className="mb-4 rounded-full bg-blue-100 p-3">
                      <b.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{b.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600">{b.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------- PRICING (Desire) --------------- */}
      <section className="py-20 bg-gray-50" id="pricing">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl md:text-4xl font-bold text-gray-900">
            Transparent, All-Inclusive Pricing
          </h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {tiers.map((t, index) => (
              <motion.div
                key={t.name}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  className={`relative h-full border-2 ${
                    t.featured ? 'border-blue-600 shadow-lg' : 'border-gray-200'
                  }`}
                >
                  {t.featured && (
                    <span className="absolute right-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                      Most Popular
                    </span>
                  )}
                  <CardHeader>
                    <CardTitle className="text-center text-2xl">{t.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6 text-center text-4xl font-extrabold">
                      {t.price}
                      <span className="ml-1 text-base font-medium text-gray-500">
                        {t.period}
                      </span>
                    </p>
                    <ul className="space-y-3 mb-8">
                      {t.perks.map((p) => (
                        <li key={p} className="flex items-start">
                          <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm">{p}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                      <Link href="#contact">Start Now</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --------------- CTA (Action) --------------- */}
      <section
        id="contact"
        className="relative isolate overflow-hidden bg-blue-600 py-20 text-white"
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600 to-blue-700" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-6 text-3xl md:text-4xl font-bold">
              Ready to Dominate Your Niche?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get a free GEO audit and see how we can boost your organic visibility.
            </p>
          </div>
          
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input type="text" placeholder="Your Name" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input type="email" placeholder="Your Email" className="pl-10" />
                  </div>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
                    <Textarea placeholder="Tell us about your SEO goals..." className="pl-10 min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" size="lg">
                    Book My Free Audit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 py-8 text-center text-sm text-gray-400">
        <div className="container mx-auto px-4">
          <p>© 2024 Tenten GEO. All rights reserved.</p>
          <p className="mt-2">
            <Link href="https://tenten.co" className="hover:text-white transition-colors">
              tenten.co
            </Link>
            {' | '}
            <Link href="mailto:geo@tenten.co" className="hover:text-white transition-colors">
              geo@tenten.co
            </Link>
          </p>
        </div>
      </footer>
    </div>
  )
} 
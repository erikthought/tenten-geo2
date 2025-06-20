'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, CheckCircle, Globe, Target, TrendingUp, Users, BarChart3, Shield, Zap, Star, Quote, ChevronRight, MessageSquare, Phone, MapPin, Instagram, Youtube, Twitter, Linkedin, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import LanguageSwitcher from '@/components/LanguageSwitcher'

// Mock data for the landing page
const mockData = {
  hero: {
    title: "Scale Your Business Globally with AI-Powered GEO",
    subtitle: "Transform your digital presence across multiple markets with strategic content optimization and technical excellence.",
    primaryCTA: "Get Your GEO Audit",
    secondaryCTA: "Schedule Consultation"
  },
  stats: [
    { number: "85%", label: "Average Traffic Increase", icon: TrendingUp },
    { number: "3.2x", label: "Lead Generation Boost", icon: Users },
    { number: "127%", label: "Revenue Growth", icon: BarChart3 }
  ],
  benefits: [
    {
      title: "AI-First Strategy",
      description: "Leverage cutting-edge AI technology to identify market opportunities and optimize content for global audiences.",
      icon: Target
    },
    {
      title: "Future-Proof Growth",
      description: "Build scalable systems that adapt to changing market conditions and search algorithms.",
      icon: TrendingUp
    },
    {
      title: "Authority Building",
      description: "Establish your brand as the go-to solution in multiple markets through strategic content positioning.",
      icon: Shield
    },
    {
      title: "Competitive Advantage",
      description: "Stay ahead of competitors with data-driven insights and rapid market penetration strategies.",
      icon: Zap
    }
  ],
  features: [
    {
      title: "Comprehensive GEO Audit",
      description: "Deep analysis of your current digital presence across target markets with actionable recommendations.",
      icon: Target
    },
    {
      title: "Content Strategy Development",
      description: "AI-powered content planning tailored to local market preferences and search behaviors.",
      icon: Globe
    },
    {
      title: "Technical Implementation",
      description: "Full technical SEO optimization including hreflang, site structure, and performance enhancements.",
      icon: BarChart3
    },
    {
      title: "Performance Monitoring",
      description: "Continuous tracking and optimization with detailed reporting and strategic adjustments.",
      icon: TrendingUp
    }
  ],
  pricing: [
    {
      title: "Standard GEO Package",
      price: "$2,390",
      period: "per month",
      description: "Perfect for businesses starting their global expansion journey",
      features: [
        "8 high-quality articles per month",
        "Technical SEO optimization",
        "Multi-market keyword research",
        "Monthly performance reports",
        "Email support"
      ],
      popular: false
    },
    {
      title: "Premium GEO Package",
      price: "$5,290",
      period: "per month",
      description: "Comprehensive solution for aggressive global market penetration",
      features: [
        "30 high-quality articles per month",
        "Advanced technical implementation",
        "Priority market analysis",
        "Weekly strategy calls",
        "24/7 dedicated support",
        "Custom integrations"
      ],
      popular: true
    }
  ],
  testimonials: [
    {
      name: "Sarah Chen",
      company: "HealthTech Solutions",
      role: "VP of Marketing",
      content: "Tenten's GEO strategy increased our qualified leads by 312% across 8 markets. The AI-powered content approach is game-changing.",
      rating: 5,
      results: "312% lead increase"
    },
    {
      name: "Marcus Rodriguez",
      company: "FinanceFlow",
      role: "Head of Growth",
      content: "Within 6 months, we achieved #1 rankings in 15 high-value keywords across 5 countries. ROI exceeded expectations by 180%.",
      rating: 5,
      results: "180% ROI increase"
    }
  ]
}

export default function HomePage() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])

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
            <Link href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Case Studies</Link>
            <Link href="https://tenten.co/about" className="text-gray-600 hover:text-blue-600 transition-colors">About</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button asChild>
              <Link href="https://tenten.co/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <motion.div 
          className="container mx-auto px-4 text-center relative z-10"
          style={{ opacity, scale }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {mockData.hero.title}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {mockData.hero.subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="https://tenten.co/contact">
                {mockData.hero.primaryCTA}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
              <Link href="https://go.tenten.co/meet">
                {mockData.hero.secondaryCTA}
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockData.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Tenten GEO?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered approach delivers measurable results across global markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Growth Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible packages designed to scale with your global expansion goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mockData.pricing.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className={`relative h-full ${plan.popular ? 'border-blue-500 border-2' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2">{plan.title}</CardTitle>
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {plan.price}
                      <span className="text-lg font-normal text-gray-600">/{plan.period}</span>
                    </div>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-6">
                      <Button 
                        className="w-full" 
                        variant={plan.popular ? "default" : "outline"}
                        size="lg"
                        asChild
                      >
                        <Link href="https://tenten.co/contact">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how businesses like yours achieved remarkable growth with our GEO solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {mockData.testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-blue-500 mb-4" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-gray-600">{testimonial.company}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{testimonial.results}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
              Join hundreds of businesses that have transformed their global presence with Tenten GEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link href="https://tenten.co/contact">
                  Get Your GEO Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="https://go.tenten.co/meet">
                  Schedule Consultation
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-1">
              <Image
                src="https://cdn.prod.website-files.com/664ac0da22e63b78c9005ce5/664ac2634d948a1fe260aaec_tenten_logo.png"
                alt="Tenten"
                width={128}
                height={32}
                className="h-8 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 mb-6">
                AI-powered global expansion optimization for ambitious businesses.
              </p>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="https://instagram.com/tenten.co" className="text-gray-400 hover:text-white transition-colors flex items-center"><Instagram className="h-4 w-4 mr-2" />Instagram</Link></li>
                <li><Link href="https://www.youtube.com/@tenten_ai" className="text-gray-400 hover:text-white transition-colors flex items-center"><Youtube className="h-4 w-4 mr-2" />YouTube</Link></li>
                <li><Link href="https://www.threads.net/@tenten.co" className="text-gray-400 hover:text-white transition-colors flex items-center"><MessageSquare className="h-4 w-4 mr-2" />Threads</Link></li>
                <li><Link href="https://www.linkedin.com/company/tentenco" className="text-gray-400 hover:text-white transition-colors flex items-center"><Linkedin className="h-4 w-4 mr-2" />LinkedIn</Link></li>
                <li><Link href="https://x.com/tentencretaive" className="text-gray-400 hover:text-white transition-colors flex items-center"><Twitter className="h-4 w-4 mr-2" />X</Link></li>
                <li><Link href="https://www.tiktok.com/@tenten.ai" className="text-gray-400 hover:text-white transition-colors flex items-center"><ExternalLink className="h-4 w-4 mr-2" />TikTok</Link></li>
                <li><Link href="https://linktr.ee/tenten.co" className="text-gray-400 hover:text-white transition-colors flex items-center"><ExternalLink className="h-4 w-4 mr-2" />Linktree</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="https://tenten.co/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="https://tenten.co/learning/" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="https://tenten.co/portfolio" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="https://tenten.co/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li><Link href="https://t.me/tentencx" className="text-gray-400 hover:text-white transition-colors flex items-center"><MessageSquare className="h-4 w-4 mr-2" />Telegram</Link></li>
                <li><Link href="tel:+886266041039" className="text-gray-400 hover:text-white transition-colors flex items-center"><Phone className="h-4 w-4 mr-2" />+886 2 66041039</Link></li>
                <li><Link href="https://go.tenten.co/map" className="text-gray-400 hover:text-white transition-colors flex items-center"><MapPin className="h-4 w-4 mr-2" />Headquarters - Taipei</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Tenten Co. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
} 
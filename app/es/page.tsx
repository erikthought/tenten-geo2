'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, BarChart3, Target, Globe, Shield, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { getI18nData } from '@/mock-i18n'

export default function SpanishPage() {
  const t = getI18nData('es')

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
            <Link href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Casos de Éxito</Link>
            <Link href="https://tenten.co/about" className="text-gray-600 hover:text-blue-600 transition-colors">Acerca de</Link>
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
              <div className="text-gray-600">Aumento Promedio de Tráfico</div>
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
              <div className="text-gray-600">Impulso en Generación de Leads</div>
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
              <div className="text-gray-600">Crecimiento de Ingresos</div>
            </motion.div>
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
              ¿Por Qué Elegir Tenten GEO?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nuestro enfoque impulsado por IA ofrece resultados medibles en mercados globales
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Estrategia IA-First</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Aproveche la tecnología IA de vanguardia para identificar oportunidades de mercado y optimizar contenido para audiencias globales.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Crecimiento a Prueba de Futuro</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Construya sistemas escalables que se adapten a las condiciones cambiantes del mercado y algoritmos de búsqueda.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Construcción de Autoridad</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Establezca su marca como la solución líder en múltiples mercados a través del posicionamiento estratégico de contenido.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Ventaja Competitiva</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Manténgase por delante de los competidores con insights basados en datos y estrategias de penetración rápida en el mercado.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Nuestros Servicios GEO
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluciones integrales para dominar los motores de búsqueda impulsados por IA
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Auditoría GEO Integral</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Análisis profundo de su presencia digital actual en los mercados objetivo con recomendaciones accionables.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Desarrollo de Estrategia de Contenido</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Planificación de contenido impulsada por IA adaptada a las preferencias y comportamientos de búsqueda del mercado local.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Implementación Técnica</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Optimización completa de SEO técnico incluyendo hreflang, estructura del sitio y mejoras de rendimiento.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Monitoreo de Rendimiento</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Seguimiento y optimización continuos con informes detallados y ajustes estratégicos.
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Elija Su Plan de Crecimiento
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Paquetes flexibles diseñados para escalar con sus objetivos de expansión global
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="relative h-full">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">Paquete GEO Estándar</CardTitle>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    $2,390
                    <span className="text-lg font-normal text-gray-600">/mes</span>
                  </div>
                  <CardDescription className="text-base">Perfecto para empresas que inician su viaje de expansión global</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">8 artículos de alta calidad por mes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Optimización SEO técnica</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Investigación de palabras clave multi-mercado</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Informes mensuales de rendimiento</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Soporte por email</span>
                    </li>
                  </ul>
                  
                  <div className="pt-6">
                    <Button 
                      className="w-full" 
                      variant="outline"
                      size="lg"
                      asChild
                    >
                      <Link href="https://tenten.co/contact">
                        Comenzar
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Premium Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="relative h-full border-blue-500 border-2">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Más Popular
                  </span>
                </div>
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">Paquete GEO Premium</CardTitle>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    $5,290
                    <span className="text-lg font-normal text-gray-600">/mes</span>
                  </div>
                  <CardDescription className="text-base">Solución integral para penetración agresiva en el mercado global</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">30 artículos de alta calidad por mes</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Implementación técnica avanzada</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Análisis de mercado prioritario</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Llamadas semanales de estrategia</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Soporte dedicado 24/7</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Integraciones personalizadas</span>
                    </li>
                  </ul>
                  
                  <div className="pt-6">
                    <Button 
                      className="w-full" 
                      size="lg"
                      asChild
                    >
                      <Link href="https://tenten.co/contact">
                        Comenzar
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Historias de Éxito de Clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vea cómo empresas como la suya lograron un crecimiento notable con nuestras soluciones GEO
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
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
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    "La estrategia GEO de Tenten aumentó nuestros leads calificados en un 312% en 8 mercados. El enfoque impulsado por IA es revolucionario."
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">Sarah Chen</div>
                      <div className="text-sm text-gray-600">VP de Marketing</div>
                      <div className="text-sm text-gray-600">HealthTech Solutions</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">312% aumento en leads</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    "En 6 meses, logramos clasificaciones #1 en 15 palabras clave de alto valor en 5 países. El ROI superó las expectativas en un 180%."
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">Marcus Rodriguez</div>
                      <div className="text-sm text-gray-600">Jefe de Crecimiento</div>
                      <div className="text-sm text-gray-600">FinanceFlow</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">180% aumento en ROI</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
              ¿Listo para Escalar Globalmente?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Únase a cientos de empresas que han transformado su presencia global con Tenten GEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6" asChild>
                <Link href="https://tenten.co/contact">
                  Obtenga Su Auditoría GEO
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="https://go.tenten.co/meet">
                  Agendar Consulta
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
                Optimización de expansión global impulsada por IA para empresas ambiciosas.
              </p>
            </div>

            {/* Connect */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Conectar</h3>
              <ul className="space-y-2">
                <li><Link href="https://instagram.com/tenten.co" className="text-gray-400 hover:text-white transition-colors">Instagram</Link></li>
                <li><Link href="https://www.youtube.com/@tenten_ai" className="text-gray-400 hover:text-white transition-colors">YouTube</Link></li>
                <li><Link href="https://www.threads.net/@tenten.co" className="text-gray-400 hover:text-white transition-colors">Threads</Link></li>
                <li><Link href="https://www.linkedin.com/company/tentenco" className="text-gray-400 hover:text-white transition-colors">LinkedIn</Link></li>
                <li><Link href="https://x.com/tentencretaive" className="text-gray-400 hover:text-white transition-colors">X</Link></li>
                <li><Link href="https://www.tiktok.com/@tenten.ai" className="text-gray-400 hover:text-white transition-colors">TikTok</Link></li>
                <li><Link href="https://linktr.ee/tenten.co" className="text-gray-400 hover:text-white transition-colors">Linktree</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><Link href="https://tenten.co/about" className="text-gray-400 hover:text-white transition-colors">Acerca de</Link></li>
                <li><Link href="https://tenten.co/learning/" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="https://tenten.co/portfolio" className="text-gray-400 hover:text-white transition-colors">Casos de Estudio</Link></li>
                <li><Link href="https://tenten.co/contact" className="text-gray-400 hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li><Link href="https://t.me/tentencx" className="text-gray-400 hover:text-white transition-colors">Telegram</Link></li>
                <li><Link href="tel:+886266041039" className="text-gray-400 hover:text-white transition-colors">+886 2 66041039</Link></li>
                <li><Link href="https://go.tenten.co/map" className="text-gray-400 hover:text-white transition-colors">Sede Central - Taipei</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Tenten Co. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
} 
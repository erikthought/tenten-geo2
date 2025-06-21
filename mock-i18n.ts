import {
  BarChart,
  CheckCircle,
  Globe,
  Star,
  Zap,
} from 'lucide-react'
import React from 'react'

// Base type for icon components
type IconType = React.ComponentType<{ className?: string }>

// Translation structure for a single benefit item
interface Benefit {
  title: string
  description: string
}

// Translation structure for a single feature item
interface Feature {
  title: string
  description: string
}

// Translation structure for a single pricing plan
interface PricingPlan {
  title: string
  price: string
  period: string
  cta: string
  features: string[]
  popular?: boolean
}

// Translation structure for a single testimonial
interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  metric: string
}

// --- The main i18n data structure for a locale ---
export interface LanguagePack {
  hero: {
    headline: string
    subheadline: string
    cta: string
    secondaryCta: string
  }
  nav: {
    services: string
    pricing: string
    contact: string
    getStarted: string
  }
  labels: {
    trafficIncrease: string
    leadBoost: string
    revenueGrowth: string
  }
  sections: {
    chooseTitle: string
    chooseSubtitle: string
    servicesTitle: string
    servicesSubtitle: string
    pricingTitle: string
    pricingSubtitle: string
    testimonialsTitle: string
    testimonialsSubtitle: string
  }
  benefits: Benefit[]
  features: Feature[]
  pricing: {
    standard: PricingPlan
    premium: PricingPlan
  }
  testimonials: Testimonial[]
  cta: {
    title: string
    subtitle: string
    primaryButton: string
    secondaryButton: string
  }
  footer: {
    description: string
    rights: string
    connect: string
    company: string
    contact: string
  }
}

// --- Icons mapped to benefits and features ---
export const benefitIcons: IconType[] = [Zap, Globe, BarChart, CheckCircle]
export const featureIcons: IconType[] = [
  CheckCircle,
  CheckCircle,
  CheckCircle,
  CheckCircle,
]

// Internationalization data for all languages
export const i18nData: { [key: string]: LanguagePack } = {
  en: {
    // English
    hero: {
      headline: 'Dominate AI Search Results with Advanced GEO Strategy',
      subheadline:
        'While your competitors focus on traditional SEO, position your brand at the forefront of AI search engines like ChatGPT, Claude, and Perplexity.',
      cta: 'Get Your GEO Audit',
      secondaryCta: 'Schedule Consultation',
    },
    nav: {
      services: 'Services',
      pricing: 'Pricing',
      contact: 'Contact',
      getStarted: 'Get Started',
    },
    labels: {
      trafficIncrease: 'Average Traffic Increase',
      leadBoost: 'Lead Generation Boost',
      revenueGrowth: 'Revenue Growth',
    },
    sections: {
      chooseTitle: 'Why Choose Tenten GEO?',
      chooseSubtitle:
        'Our AI-driven approach delivers measurable results in global markets',
      servicesTitle: 'Our GEO Services',
      servicesSubtitle:
        'Comprehensive solutions to dominate AI-powered search engines',
      pricingTitle: 'Choose Your Growth Plan',
      pricingSubtitle:
        'Flexible packages designed to scale with your global expansion goals',
      testimonialsTitle: 'Client Success Stories',
      testimonialsSubtitle:
        'See how companies like yours achieved remarkable growth with our GEO solutions',
    },
    benefits: [
      {
        title: 'AI-First Strategy',
        description:
          'Leverage cutting-edge AI technology to spot market opportunities and optimize content for global audiences.',
      },
      {
        title: 'Future-Proof Growth',
        description:
          'Build scalable systems that adapt to ever-changing market conditions and search algorithms.',
      },
      {
        title: 'Authority Building',
        description:
          'Establish your brand as the leading solution across multiple markets through strategic content positioning.',
      },
      {
        title: 'Competitive Advantage',
        description:
          'Stay ahead of competitors with data-driven insights and rapid market-penetration strategies.',
      },
    ],
    features: [
      {
        title: 'Comprehensive GEO Audit',
        description:
          'Deep analysis of your current digital presence in target markets with actionable recommendations.',
      },
      {
        title: 'Content Strategy Development',
        description:
          'AI-driven content planning tailored to local market search behaviours and preferences.',
      },
      {
        title: 'Technical Implementation',
        description:
          'Complete technical SEO optimisation including hreflang, site structure and performance improvements.',
      },
      {
        title: 'Performance Monitoring',
        description:
          'Ongoing tracking and optimisation with detailed reporting and strategic adjustments.',
      },
    ],
    pricing: {
      standard: {
        title: 'Standard GEO Package',
        price: '$2,390',
        period: '/month',
        cta: 'Get Started',
        features: [
          '8 high-quality articles per month',
          'Technical SEO optimisation',
          'Multi-market keyword research',
          'Monthly performance reports',
          'Email support',
        ],
      },
      premium: {
        title: 'Premium GEO Package',
        price: '$5,290',
        period: '/month',
        cta: 'Get Started',
        popular: true,
        features: [
          '30 high-quality articles per month',
          'Advanced technical implementation',
          'Priority market analysis',
          'Weekly strategy calls',
          '24/7 dedicated support',
          'Custom integrations',
        ],
      },
    },
    testimonials: [
      {
        quote: `"Tenten's GEO strategy boosted our qualified leads by 312% across 8 markets. Their AI-driven approach is groundbreaking."`,
        author: 'Sarah Chen',
        role: 'VP Marketing',
        company: 'HealthTech Solutions',
        metric: '312% increase in leads',
      },
      {
        quote: `"Within 6 months we achieved #1 rankings for 15 high-value keywords in 5 countries. ROI exceeded expectations by 180%."`,
        author: 'Marcus Rodriguez',
        role: 'Head of Growth',
        company: 'FinanceFlow',
        metric: '180% increase in ROI',
      },
    ],
    cta: {
      title: 'Ready to Scale Globally?',
      subtitle:
        'Join hundreds of businesses that have transformed their global presence with Tenten GEO.',
      primaryButton: 'Get Your GEO Audit',
      secondaryButton: 'Schedule Consultation',
    },
    footer: {
      description:
        'AI-powered global expansion optimization for ambitious businesses.',
      rights: '© 2024 Tenten Co. All rights reserved.',
      connect: 'Connect',
      company: 'Company',
      contact: 'Contact',
    },
  },
  es: {
    // Spanish
    hero: {
      headline:
        'Domina los Resultados de Búsqueda de IA con una Estrategia GEO Avanzada',
      subheadline:
        'Mientras tu competencia se enfoca en el SEO tradicional, posiciona tu marca al frente de los motores de búsqueda de IA como ChatGPT, Claude y Perplexity.',
      cta: 'Obtén tu Auditoría GEO',
      secondaryCta: 'Programar Consulta',
    },
    nav: {
      services: 'Servicios',
      pricing: 'Precios',
      contact: 'Contacto',
      getStarted: 'Comenzar',
    },
    labels: {
      trafficIncrease: 'Aumento Promedio de Tráfico',
      leadBoost: 'Impulso en Generación de Leads',
      revenueGrowth: 'Crecimiento de Ingresos',
    },
    sections: {
      chooseTitle: '¿Por qué elegir Tenten GEO?',
      chooseSubtitle:
        'Nuestro enfoque impulsado por IA ofrece resultados medibles en mercados globales',
      servicesTitle: 'Nuestros Servicios GEO',
      servicesSubtitle:
        'Soluciones integrales para dominar los motores de búsqueda impulsados por IA',
      pricingTitle: 'Elige tu Plan de Crecimiento',
      pricingSubtitle:
        'Paquetes flexibles diseñados para escalar con tus metas de expansión global',
      testimonialsTitle: 'Historias de Éxito de Clientes',
      testimonialsSubtitle:
        'Mira cómo empresas como la tuya lograron un crecimiento notable con nuestras soluciones GEO',
    },
    benefits: [
      {
        title: 'Estrategia "AI-First"',
        description:
          'Aprovecha la tecnología de IA de vanguardia para detectar oportunidades de mercado y optimizar el contenido para audiencias globales.',
      },
      {
        title: 'Crecimiento a Prueba de Futuro',
        description:
          'Construye sistemas escalables que se adaptan a las condiciones del mercado y algoritmos de búsqueda en constante cambio.',
      },
      {
        title: 'Construcción de Autoridad',
        description:
          'Establece tu marca como la solución líder en múltiples mercados a través del posicionamiento estratégico de contenido.',
      },
      {
        title: 'Ventaja Competitiva',
        description:
          'Mantente por delante de la competencia con información basada en datos y estrategias rápidas de penetración en el mercado.',
      },
    ],
    features: [
      {
        title: 'Auditoría GEO Completa',
        description:
          'Análisis profundo de tu presencia digital actual en mercados objetivo con recomendaciones accionables.',
      },
      {
        title: 'Desarrollo de Estrategia de Contenido',
        description:
          'Planificación de contenido impulsada por IA y adaptada a los comportamientos y preferencias de búsqueda del mercado local.',
      },
      {
        title: 'Implementación Técnica',
        description:
          'Optimización técnica completa de SEO, incluyendo hreflang, estructura del sitio y mejoras de rendimiento.',
      },
      {
        title: 'Monitoreo de Rendimiento',
        description:
          'Seguimiento y optimización continuos con informes detallados y ajustes estratégicos.',
      },
    ],
    pricing: {
      standard: {
        title: 'Paquete GEO Estándar',
        price: '€2.190',
        period: '/mes',
        cta: 'Comenzar',
        features: [
          '8 artículos de alta calidad al mes',
          'Optimización técnica de SEO',
          'Investigación de palabras clave para múltiples mercados',
          'Informes mensuales de rendimiento',
          'Soporte por correo electrónico',
        ],
      },
      premium: {
        title: 'Paquete GEO Premium',
        price: '€4.890',
        period: '/mes',
        cta: 'Comenzar',
        popular: true,
        features: [
          '30 artículos de alta calidad al mes',
          'Implementación técnica avanzada',
          'Análisis de mercado prioritario',
          'Llamadas estratégicas semanales',
          'Soporte dedicado 24/7',
          'Integraciones personalizadas',
        ],
      },
    },
    testimonials: [
      {
        quote: `"La estrategia GEO de Tenten aumentó nuestros leads calificados en un 312% en 8 mercados. Su enfoque impulsado por IA es revolucionario."`,
        author: 'Sofía Castillo',
        role: 'VP de Marketing',
        company: 'SaludTech Soluciones',
        metric: '312% de aumento en leads',
      },
      {
        quote: `"En 6 meses logramos rankings #1 para 15 palabras clave de alto valor en 5 países. El ROI superó las expectativas en un 180%."`,
        author: 'Mateo Rojas',
        role: 'Jefe de Crecimiento',
        company: 'FinanzasFlow',
        metric: '180% de aumento en ROI',
      },
    ],
    cta: {
      title: '¿Listo para Escalar Globalmente?',
      subtitle:
        'Únete a cientos de empresas que han transformado su presencia global con Tenten GEO.',
      primaryButton: 'Obtén tu Auditoría GEO',
      secondaryButton: 'Programar Consulta',
    },
    footer: {
      description:
        'Optimización de la expansión global impulsada por IA para empresas ambiciosas.',
      rights: '© 2024 Tenten Co. Todos los derechos reservados.',
      connect: 'Conectar',
      company: 'Empresa',
      contact: 'Contacto',
    },
  },
  ko: {
    // Korean
    hero: {
      headline: '고급 GEO 전략으로 AI 검색 결과 장악',
      subheadline:
        '경쟁사가 전통적인 SEO에 집중하는 동안, ChatGPT, Claude, Perplexity와 같은 AI 검색 엔진의 최전선에 브랜드를 포지셔닝하세요.',
      cta: 'GEO 감사 받기',
      secondaryCta: '상담 예약',
    },
    nav: {
      services: '서비스',
      pricing: '가격',
      contact: '문의',
      getStarted: '시작하기',
    },
    labels: {
      trafficIncrease: '평균 트래픽 증가',
      leadBoost: '리드 생성 증대',
      revenueGrowth: '수익 성장',
    },
    sections: {
      chooseTitle: '왜 Tenten GEO를 선택해야 할까요?',
      chooseSubtitle:
        '우리의 AI 기반 접근 방식은 글로벌 시장에서 측정 가능한 결과를 제공합니다',
      servicesTitle: 'Tenten GEO 서비스',
      servicesSubtitle: 'AI 기반 검색 엔진을 지배하기 위한 포괄적인 솔루션',
      pricingTitle: '성장 계획을 선택하세요',
      pricingSubtitle:
        '글로벌 확장 목표에 맞춰 확장할 수 있도록 설계된 유연한 패키지',
      testimonialsTitle: '고객 성공 사례',
      testimonialsSubtitle:
        '귀사와 같은 기업들이 저희 GEO 솔루션으로 어떻게 놀라운 성장을 이루었는지 확인해보세요',
    },
    benefits: [
      {
        title: 'AI 우선 전략',
        description:
          '최첨단 AI 기술을 활용하여 시장 기회를 포착하고 글로벌 고객을 위한 콘텐츠를 최적화합니다.',
      },
      {
        title: '미래 보장 성장',
        description:
          '끊임없이 변화하는 시장 상황과 검색 알고리즘에 적응하는 확장 가능한 시스템을 구축합니다.',
      },
      {
        title: '권위 구축',
        description:
          '전략적인 콘텐츠 포지셔닝을 통해 여러 시장에서 브랜드를 선도적인 솔루션으로 자리매김합니다.',
      },
      {
        title: '경쟁 우위',
        description:
          '데이터 기반 통찰력과 신속한 시장 침투 전략으로 경쟁사보다 앞서 나가세요.',
      },
    ],
    features: [
      {
        title: '포괄적인 GEO 감사',
        description:
          '실행 가능한 권장 사항과 함께 대상 시장에서 현재 디지털 존재감에 대한 심층 분석.',
      },
      {
        title: '콘텐츠 전략 개발',
        description:
          '현지 시장 검색 행동 및 선호도에 맞춘 AI 기반 콘텐츠 계획.',
      },
      {
        title: '기술적 구현',
        description:
          'hreflang, 사이트 구조 및 성능 개선을 포함한 완벽한 기술 SEO 최적화.',
      },
      {
        title: '성과 모니터링',
        description: '상세한 보고 및 전략적 조정을 통한 지속적인 추적 및 최적화.',
      },
    ],
    pricing: {
      standard: {
        title: '스탠다드 GEO 패키지',
        price: '₩2,990,000',
        period: '/월',
        cta: '시작하기',
        features: [
          '월 8개 고품질 기사',
          '기술 SEO 최적화',
          '다중 시장 키워드 연구',
          '월간 성과 보고서',
          '이메일 지원',
        ],
      },
      premium: {
        title: '프리미엄 GEO 패키지',
        price: '₩6,590,000',
        period: '/월',
        cta: '시작하기',
        popular: true,
        features: [
          '월 30개 고품질 기사',
          '고급 기술 구현',
          '우선 시장 분석',
          '주간 전략 회의',
          '24/7 전담 지원',
          '맞춤형 통합',
        ],
      },
    },
    testimonials: [
      {
        quote: `"Tenten의 GEO 전략은 8개 시장에서 우리의 유효 리드를 312% 증가시켰습니다. 그들의 AI 기반 접근 방식은 획기적입니다."`,
        author: '김민준',
        role: '마케팅 부사장',
        company: '헬스텍 솔루션즈',
        metric: '리드 312% 증가',
      },
      {
        quote: `"6개월 만에 5개국에서 15개의 고가치 키워드에 대해 1위 순위를 달성했습니다. ROI는 예상을 180% 초과했습니다."`,
        author: '이서연',
        role: '성장 책임자',
        company: '파이낸스플로우',
        metric: 'ROI 180% 증가',
      },
    ],
    cta: {
      title: '글로벌 확장을 준비하셨나요?',
      subtitle:
        'Tenten GEO로 글로벌 입지를 변화시킨 수백 개의 비즈니스에 합류하세요.',
      primaryButton: 'GEO 감사 받기',
      secondaryButton: '상담 예약',
    },
    footer: {
      description: '야심찬 비즈니스를 위한 AI 기반 글로벌 확장 최적화.',
      rights: '© 2024 Tenten Co. 모든 권리 보유.',
      connect: '연결',
      company: '회사',
      contact: '문의',
    },
  },
  ja: {
    // Japanese
    hero: {
      headline: '高度なGEO戦略でAI検索結果を制圧',
      subheadline:
        '競合他社が従来のSEOに注力する中、ChatGPT、Claude、PerplexityなどのAI検索エンジンの最前線にブランドを位置づけます。',
      cta: 'GEO監査を受ける',
      secondaryCta: 'コンサルテーションを予約',
    },
    nav: {
      services: 'サービス',
      pricing: '価格',
      contact: 'お問い合わせ',
      getStarted: '始める',
    },
    labels: {
      trafficIncrease: '平均トラフィック増加',
      leadBoost: 'リード獲得ブースト',
      revenueGrowth: '収益成長',
    },
    sections: {
      chooseTitle: 'なぜTenten GEOを選ぶのか？',
      chooseSubtitle:
        '私たちのAI主導のアプローチは、グローバル市場で測定可能な結果をもたらします',
      servicesTitle: '当社のGEOサービス',
      servicesSubtitle: 'AI搭載検索エンジンを支配するための包括的なソリューション',
      pricingTitle: '成長プランを選択',
      pricingSubtitle:
        'グローバル展開の目標に合わせて拡張できるように設計された柔軟なパッケージ',
      testimonialsTitle: 'お客様の成功事例',
      testimonialsSubtitle:
        'あなたのような企業が当社のGEOソリューションで驚くべき成長を遂げた方法をご覧ください',
    },
    benefits: [
      {
        title: 'AIファースト戦略',
        description:
          '最先端のAI技術を活用して市場機会を発見し、グローバルな視聴者向けにコンテンツを最適化します。',
      },
      {
        title: '未来志向の成長',
        description:
          '絶えず変化する市場状況と検索アルゴリズムに適応するスケーラブルなシステムを構築します。',
      },
      {
        title: '権威の構築',
        description:
          '戦略的なコンテンツポジショニングを通じて、複数の市場でブランドを主要なソリューションとして確立します。',
      },
      {
        title: '競争上の優位性',
        description:
          'データ駆動型の洞察と迅速な市場浸透戦略で競合他社の一歩先を行きます。',
      },
    ],
    features: [
      {
        title: '包括的なGEO監査',
        description:
          'ターゲット市場における現在のデジタルプレゼンスの詳細な分析と、実行可能な推奨事項。',
      },
      {
        title: 'コンテンツ戦略開発',
        description:
          '地域の市場検索行動と好みに合わせたAI主導のコンテンツ計画。',
      },
      {
        title: '技術的実装',
        description:
          'hreflang、サイト構造、パフォーマンス改善を含む完全なテクニカルSEO最適化。',
      },
      {
        title: 'パフォーマンスモニタリング',
        description: '詳細なレポートと戦略的調整による継続的な追跡と最適化。',
      },
    ],
    pricing: {
      standard: {
        title: '標準GEOパッケージ',
        price: '¥349,000',
        period: '/月',
        cta: '始める',
        features: [
          '月8本の高品質記事',
          'テクニカルSEO最適化',
          'マルチマーケットキーワード調査',
          '月次パフォーマンスレポート',
          'メールサポート',
        ],
      },
      premium: {
        title: 'プレミアムGEOパッケージ',
        price: '¥769,000',
        period: '/月',
        cta: '始める',
        popular: true,
        features: [
          '月30本の高品質記事',
          '高度な技術的実装',
          '優先市場分析',
          '週次戦略コール',
          '24時間年中無休の専任サポート',
          'カスタム統合',
        ],
      },
    },
    testimonials: [
      {
        quote: `「TentenのGEO戦略は、8つの市場で当社の有資格リードを312%増加させました。彼らのAI主導のアプローチは画期的です。」`,
        author: '田中 実',
        role: 'マーケティング担当副社長',
        company: 'ヘルステックソリューションズ',
        metric: 'リード312%増',
      },
      {
        quote: `「6ヶ月以内に、5カ国で15の価値の高いキーワードで1位を獲得しました。ROIは期待を180%上回りました。」`,
        author: '佐藤 愛子',
        role: '成長責任者',
        company: 'ファイナンスフロー',
        metric: 'ROI 180%増',
      },
    ],
    cta: {
      title: 'グローバルに拡大する準備はできていますか？',
      subtitle:
        'Tenten GEOでグローバルなプレゼンスを変革した何百ものビジネスに参加してください。',
      primaryButton: 'GEO監査を受ける',
      secondaryButton: 'コンサルテーションを予約',
    },
    footer: {
      description: '野心的なビジネスのためのAIを活用したグローバル展開の最適化。',
      rights: '© 2024 Tenten Co. 無断複写・転載を禁じます。',
      connect: '接続',
      company: '会社',
      contact: 'お問い合わせ',
    },
  },
  'zh-cn': {
    // Simplified Chinese
    hero: {
      headline: '通过先进的 GEO 策略主导 AI 搜索结果',
      subheadline:
        '当您的竞争对手专注于传统 SEO 时，将您的品牌定位于 ChatGPT、Claude 和 Perplexity 等 AI 搜索引擎的最前沿。',
      cta: '获取您的 GEO 审计',
      secondaryCta: '安排咨询',
    },
    nav: {
      services: '服务',
      pricing: '定价',
      contact: '联系我们',
      getStarted: '开始',
    },
    labels: {
      trafficIncrease: '平均流量增长',
      leadBoost: '潜在客户增长',
      revenueGrowth: '收入增长',
    },
    sections: {
      chooseTitle: '为什么选择 Tenten GEO？',
      chooseSubtitle: '我们由人工智能驱动的方法在全球市场提供可衡量的结果',
      servicesTitle: '我们的 GEO 服务',
      servicesSubtitle: '全面解决方案，主导人工智能驱动的搜索引擎',
      pricingTitle: '选择您的增长计划',
      pricingSubtitle: '灵活的套餐，旨在配合您的全球扩张目标进行扩展',
      testimonialsTitle: '客户成功案例',
      testimonialsSubtitle: '看看像您这样的公司如何通过我们的 GEO 解决方案实现卓越增长',
    },
    benefits: [
      {
        title: 'AI优先策略',
        description:
          '利用尖端的人工智能技术发现市场机会，并为全球受众优化内容。',
      },
      {
        title: '面向未来的增长',
        description:
          '构建可扩展的系统，以适应不断变化的市场条件和搜索算法。',
      },
      {
        title: '建立权威',
        description: '通过战略性内容定位，在多个市场中将您的品牌打造为领先的解决方案。',
      },
      {
        title: '竞争优势',
        description: '凭借数据驱动的洞察力和快速的市场渗透策略，保持领先于竞争对手。',
      },
    ],
    features: [
      {
        title: '全面的 GEO 审计',
        description: '深入分析您在目标市场的当前数字足迹，并提供可行的建议。',
      },
      {
        title: '内容策略制定',
        description: '根据本地市场的搜索行为和偏好，量身定制由人工智能驱动的内容规划。',
      },
      {
        title: '技术实施',
        description: '包括 hreflang、网站结构和性能改进在内的完整技术 SEO 优化。',
      },
      {
        title: '绩效监控',
        description: '通过详细的报告和战略调整进行持续跟踪和优化。',
      },
    ],
    pricing: {
      standard: {
        title: '标准 GEO 套餐',
        price: '¥16,990',
        period: '/月',
        cta: '开始',
        features: [
          '每月8篇高质量文章',
          '技术 SEO 优化',
          '多市场关键词研究',
          '月度绩效报告',
          '电子邮件支持',
        ],
      },
      premium: {
        title: '高级 GEO 套餐',
        price: '¥36,990',
        period: '/月',
        cta: '开始',
        popular: true,
        features: [
          '每月30篇高质量文章',
          '先进技术实施',
          '优先市场分析',
          '每周策略会议',
          '24/7 专属支持',
          '定制集成',
        ],
      },
    },
    testimonials: [
      {
        quote: "“Tenten 的 GEO 策略使我们在 8 个市场的合格潜在客户增加了 312%。他们由人工智能驱动的方法是开创性的。"",
        author: '陈伟',
        role: '营销副总裁',
        company: '健康科技解决方案',
        metric: '潜在客户增加312%',
      },
      {
        quote: "“在 6 个月内，我们在 5 个国家/地区为 15 个高价值关键词实现了排名第一。投资回报率超出了预期 180%。"",
        author: '李芳',
        role: '增长主管',
        company: '金融流',
        metric: '投资回报率增加180%',
      },
    ],
    cta: {
      title: '准备好全球扩张了吗？',
      subtitle:
        '加入数百家通过 Tenten GEO 改变其全球业务的企业。',
      primaryButton: '获取您的 GEO 审计',
      secondaryButton: '安排咨询',
    },
    footer: {
      description: '为雄心勃勃的企业提供由人工智能驱动的全球扩张优化。',
      rights: '© 2024 Tenten Co. 保留所有权利。',
      connect: '连接',
      company: '公司',
      contact: '联系我们',
    },
  },
  'zh-tw': {
    // Traditional Chinese
    hero: {
      headline: '透過先進的 GEO 策略主導 AI 搜尋結果',
      subheadline:
        '當您的競爭對手專注於傳統 SEO 時，將您的品牌定位於 ChatGPT、Claude 和 Perplexity 等 AI 搜尋引擎的最前沿。',
      cta: '獲取您的 GEO 審計',
      secondaryCta: '安排諮詢',
    },
    nav: {
      services: '服務',
      pricing: '定價',
      contact: '聯絡我們',
      getStarted: '開始',
    },
    labels: {
      trafficIncrease: '平均流量增長',
      leadBoost: '潛在客戶增長',
      revenueGrowth: '收入增長',
    },
    sections: {
      chooseTitle: '為什麼選擇 Tenten GEO？',
      chooseSubtitle: '我們由人工智能驅動的方法在全球市場提供可衡量的結果',
      servicesTitle: '我們的 GEO 服務',
      servicesSubtitle: '全面解決方案，主導人工智能驅動的搜尋引擎',
      pricingTitle: '選擇您的增長計劃',
      pricingSubtitle: '靈活的套餐，旨在配合您的全球擴張目標進行擴展',
      testimonialsTitle: '客戶成功案例',
      testimonialsSubtitle: '看看像您這樣的公司如何透過我們的 GEO 解決方案實現卓越增長',
    },
    benefits: [
      {
        title: 'AI優先策略',
        description:
          '利用尖端的人工智能技術發現市場機會，並為全球受眾優化內容。',
      },
      {
        title: '面向未來的增長',
        description:
          '構建可擴展的系統，以適應不斷變化的市場條件和搜尋演算法。',
      },
      {
        title: '建立權威',
        description: '透過戰略性內容定位，在多個市場中將您的品牌打造為領先的解決方案。',
      },
      {
        title: '競爭優勢',
        description: '憑藉數據驅動的洞察力和快速的市場滲透策略，保持領先於競爭對手。',
      },
    ],
    features: [
      {
        title: '全面的 GEO 審計',
        description: '深入分析您在目標市場的當前數位足跡，並提供可行的建議。',
      },
      {
        title: '內容策略制定',
        description: '根據本地市場的搜尋行為和偏好，量身定制由人工智能驅動的內容規劃。',
      },
      {
        title: '技術實施',
        description: '包括 hreflang、網站結構和性能改進在內的完整技術 SEO 優化。',
      },
      {
        title: '績效監控',
        description: '透過詳細的報告和戰略調整進行持續跟踪和優化。',
      },
    ],
    pricing: {
      standard: {
        title: '標準 GEO 套餐',
        price: 'NT$72,000',
        period: '/月',
        cta: '開始',
        features: [
          '每月8篇高品質文章',
          '技術 SEO 優化',
          '多市場關鍵詞研究',
          '月度績效報告',
          '電子郵件支持',
        ],
      },
      premium: {
        title: '高級 GEO 套餐',
        price: 'NT$158,000',
        period: '/月',
        cta: '開始',
        popular: true,
        features: [
          '每月30篇高品質文章',
          '先進技術實施',
          '優先市場分析',
          '每週策略會議',
          '24/7 專屬支持',
          '客製化整合',
        ],
      },
    },
    testimonials: [
      {
        quote: `「Tenten 的 GEO 策略使我們在 8 個市場的合格潛在客戶增加了 312%。他們由人工智能驅動的方法是開創性的。」`,
        author: '林志明',
        role: '市場副總裁',
        company: '健康科技解決方案',
        metric: '潛在客戶增加312%',
      },
      {
        quote: `「在 6 個月內，我們在 5 個國家/地區為 15 個高價值關鍵詞實現了排名第一。投資回報率超出了預期 180%。」`,
        author: '黃美玲',
        role: '增長主管',
        company: '金融流',
        metric: '投資回報率增加180%',
      },
    ],
    cta: {
      title: '準備好全球擴張了嗎？',
      subtitle: '加入數百家透過 Tenten GEO 改變其全球業務的企業。',
      primaryButton: '獲取您的 GEO 審計',
      secondaryButton: '安排諮詢',
    },
    footer: {
      description: '為雄心勃勃的企業提供由人工智能驅動的全球擴張優化。',
      rights: '© 2024 Tenten Co. 保留所有權利。',
      connect: '連接',
      company: '公司',
      contact: '聯絡我們',
    },
  },
  de: {
    // German
    hero: {
      headline:
        'Dominieren Sie die KI-Suchergebnisse mit einer fortschrittlichen GEO-Strategie',
      subheadline:
        'Während sich Ihre Konkurrenten auf traditionelle SEO konzentrieren, positionieren Sie Ihre Marke an der Spitze der KI-Suchmaschinen wie ChatGPT, Claude und Perplexity.',
      cta: 'Holen Sie sich Ihr GEO-Audit',
      secondaryCta: 'Beratung vereinbaren',
    },
    nav: {
      services: 'Dienstleistungen',
      pricing: 'Preise',
      contact: 'Kontakt',
      getStarted: 'Loslegen',
    },
    labels: {
      trafficIncrease: 'Durchschnittliche Traffic-Steigerung',
      leadBoost: 'Lead-Generierungs-Boost',
      revenueGrowth: 'Umsatzwachstum',
    },
    sections: {
      chooseTitle: 'Warum Tenten GEO wählen?',
      chooseSubtitle:
        'Unser KI-gesteuerter Ansatz liefert messbare Ergebnisse auf globalen Märkten',
      servicesTitle: 'Unsere GEO-Dienstleistungen',
      servicesSubtitle:
        'Umfassende Lösungen zur Dominanz in KI-gestützten Suchmaschinen',
      pricingTitle: 'Wählen Sie Ihren Wachstumsplan',
      pricingSubtitle:
        'Flexible Pakete, die auf Ihre globalen Expansionsziele zugeschnitten sind',
      testimonialsTitle: 'Erfolgsgeschichten von Kunden',
      testimonialsSubtitle:
        'Sehen Sie, wie Unternehmen wie Ihres mit unseren GEO-Lösungen ein bemerkenswertes Wachstum erzielt haben',
    },
    benefits: [
      {
        title: 'KI-First-Strategie',
        description:
          'Nutzen Sie modernste KI-Technologie, um Marktchancen zu erkennen und Inhalte für ein globales Publikum zu optimieren.',
      },
      {
        title: 'Zukunftssicheres Wachstum',
        description:
          'Bauen Sie skalierbare Systeme auf, die sich an ständig ändernde Marktbedingungen und Suchalgorithmen anpassen.',
      },
      {
        title: 'Autoritätsaufbau',
        description:
          'Etablieren Sie Ihre Marke als führende Lösung in mehreren Märkten durch strategische Content-Positionierung.',
      },
      {
        title: 'Wettbewerbsvorteil',
        description:
          'Bleiben Sie der Konkurrenz mit datengesteuerten Erkenntnissen und schnellen Marktdurchdringungsstrategien einen Schritt voraus.',
      },
    ],
    features: [
      {
        title: 'Umfassendes GEO-Audit',
        description:
          'Tiefgehende Analyse Ihrer aktuellen digitalen Präsenz in den Zielmärkten mit umsetzbaren Empfehlungen.',
      },
      {
        title: 'Entwicklung von Content-Strategien',
        description:
          'KI-gesteuerte Inhaltsplanung, die auf das Suchverhalten und die Vorlieben des lokalen Marktes zugeschnitten ist.',
      },
      {
        title: 'Technische Umsetzung',
        description:
          'Vollständige technische SEO-Optimierung einschließlich Hreflang, Seitenstruktur und Leistungsverbesserungen.',
      },
      {
        title: 'Leistungsüberwachung',
        description:
          'Laufende Überwachung und Optimierung mit detaillierten Berichten und strategischen Anpassungen.',
      },
    ],
    pricing: {
      standard: {
        title: 'Standard GEO-Paket',
        price: '€2.190',
        period: '/Monat',
        cta: 'Loslegen',
        features: [
          '8 hochwertige Artikel pro Monat',
          'Technische SEO-Optimierung',
          'Keyword-Recherche für mehrere Märkte',
          'Monatliche Leistungsberichte',
          'E-Mail-Support',
        ],
      },
      premium: {
        title: 'Premium GEO-Paket',
        price: '€4.890',
        period: '/Monat',
        cta: 'Loslegen',
        popular: true,
        features: [
          '30 hochwertige Artikel pro Monat',
          'Fortgeschrittene technische Umsetzung',
          'Priorisierte Marktanalyse',
          'Wöchentliche Strategiegespräche',
          '24/7 dedizierter Support',
          'Benutzerdefinierte Integrationen',
        ],
      },
    },
    testimonials: [
      {
        quote: `"Die GEO-Strategie von Tenten steigerte unsere qualifizierten Leads um 312% in 8 Märkten. Ihr KI-gesteuerter Ansatz ist bahnbrechend."`,
        author: 'Klaus Schmidt',
        role: 'VP Marketing',
        company: 'HealthTech Lösungen',
        metric: '312% mehr Leads',
      },
      {
        quote: `"Innerhalb von 6 Monaten erreichten wir Platz 1 für 15 hochwertige Keywords in 5 Ländern. Der ROI übertraf die Erwartungen um 180%."`,
        author: 'Anna Meier',
        role: 'Leiterin Wachstum',
        company: 'FinanceFlow',
        metric: '180% ROI-Steigerung',
      },
    ],
    cta: {
      title: 'Bereit für die globale Skalierung?',
      subtitle:
        'Schließen Sie sich Hunderten von Unternehmen an, die ihre globale Präsenz mit Tenten GEO transformiert haben.',
      primaryButton: 'Holen Sie sich Ihr GEO-Audit',
      secondaryButton: 'Beratung vereinbaren',
    },
    footer: {
      description:
        'KI-gestützte Optimierung der globalen Expansion für ehrgeizige Unternehmen.',
      rights: '© 2024 Tenten Co. Alle Rechte vorbehalten.',
      connect: 'Verbinden',
      company: 'Unternehmen',
      contact: 'Kontakt',
    },
  },
  fr: {
    // French
    hero: {
      headline:
        "Dominez les résultats de recherche de l'IA avec une stratégie GEO avancée",
      subheadline:
        'Pendant que vos concurrents se concentrent sur le SEO traditionnel, positionnez votre marque à la pointe des moteurs de recherche IA comme ChatGPT, Claude et Perplexity.',
      cta: 'Obtenez votre audit GEO',
      secondaryCta: 'Planifier une consultation',
    },
    nav: {
      services: 'Services',
      pricing: 'Tarifs',
      contact: 'Contact',
      getStarted: 'Commencer',
    },
    labels: {
      trafficIncrease: 'Augmentation moyenne du trafic',
      leadBoost: 'Booster la génération de leads',
      revenueGrowth: 'Croissance du chiffre d'affaires',
    },
    sections: {
      chooseTitle: 'Pourquoi choisir Tenten GEO ?',
      chooseSubtitle:
        'Notre approche basée sur l'IA fournit des résultats mesurables sur les marchés mondiaux',
      servicesTitle: 'Nos services GEO',
      servicesSubtitle:
        'Des solutions complètes pour dominer les moteurs de recherche alimentés par l'IA',
      pricingTitle: 'Choisissez votre plan de croissance',
      pricingSubtitle:
        'Des forfaits flexibles conçus pour évoluer avec vos objectifs d'expansion mondiale',
      testimonialsTitle: 'Témoignages de clients',
      testimonialsSubtitle:
        'Découvrez comment des entreprises comme la vôtre ont réalisé une croissance remarquable grâce à nos solutions GEO',
    },
    benefits: [
      {
        title: 'Stratégie "AI-First"',
        description:
          "Tirez parti de la technologie d'IA de pointe pour repérer les opportunités de marché et optimiser le contenu pour un public mondial.",
      },
      {
        title: 'Croissance à l'épreuve du futur',
        description:
          'Créez des systèmes évolutifs qui s'adaptent aux conditions du marché et aux algorithmes de recherche en constante évolution.',
      },
      {
        title: 'Développement de l'autorité',
        description:
          'Établissez votre marque comme la solution de premier plan sur plusieurs marchés grâce à un positionnement de contenu stratégique.',
      },
      {
        title: 'Avantage concurrentiel',
        description:
          'Restez en tête de la concurrence grâce à des informations basées sur les données et des stratégies de pénétration rapide du marché.',
      },
    ],
    features: [
      {
        title: 'Audit GEO complet',
        description:
          'Analyse approfondie de votre présence numérique actuelle sur les marchés cibles avec des recommandations exploitables.',
      },
      {
        title: 'Développement de la stratégie de contenu',
        description:
          'Planification de contenu basée sur l'IA et adaptée aux comportements et préférences de recherche du marché local.',
      },
      {
        title: 'Mise en œuvre technique',
        description:
          'Optimisation technique complète du référencement, y compris hreflang, la structure du site et les améliorations de performance.',
      },
      {
        title: 'Suivi des performances',
        description:
          'Suivi et optimisation continus avec des rapports détaillés et des ajustements stratégiques.',
      },
    ],
    pricing: {
      standard: {
        title: 'Forfait GEO Standard',
        price: '€2.190',
        period: '/mois',
        cta: 'Commencer',
        features: [
          '8 articles de haute qualité par mois',
          'Optimisation technique du SEO',
          'Recherche de mots-clés multi-marchés',
          'Rapports de performance mensuels',
          'Support par email',
        ],
      },
      premium: {
        title: 'Forfait GEO Premium',
        price: '€4.890',
        period: '/mois',
        cta: 'Commencer',
        popular: true,
        features: [
          '30 articles de haute qualité par mois',
          'Mise en œuvre technique avancée',
          'Analyse de marché prioritaire',
          'Appels stratégiques hebdomadaires',
          'Support dédié 24/7',
          'Intégrations personnalisées',
        ],
      },
    },
    testimonials: [
      {
        quote: `"La stratégie GEO de Tenten a augmenté nos leads qualifiés de 312 % sur 8 marchés. Leur approche basée sur l'IA est révolutionnaire."`,
        author: 'Sophie Dubois',
        role: 'VP Marketing',
        company: 'Solutions HealthTech',
        metric: 'Augmentation de 312 % des leads',
      },
      {
        quote: `"En 6 mois, nous avons atteint le premier rang pour 15 mots-clés de grande valeur dans 5 pays. Le ROI a dépassé les attentes de 180 %."`,
        author: 'Lucas Martin',
        role: 'Responsable de la croissance',
        company: 'FinanceFlow',
        metric: 'Augmentation de 180 % du ROI',
      },
    ],
    cta: {
      title: 'Prêt pour l'expansion mondiale ?',
      subtitle:
        'Rejoignez des centaines d'entreprises qui ont transformé leur présence mondiale avec Tenten GEO.',
      primaryButton: 'Obtenir votre audit GEO',
      secondaryButton: 'Planifier une consultation',
    },
    footer: {
      description:
        'Optimisation de l'expansion mondiale basée sur l'IA pour les entreprises ambitieuses.',
      rights: '© 2024 Tenten Co. Tous droits réservés.',
      connect: 'Connexion',
      company: 'Entreprise',
      contact: 'Contact',
    },
  },
  pt: {
    // Portuguese
    hero: {
      headline:
        'Domine os resultados de pesquisa de IA com uma estratégia GEO avançada',
      subheadline:
        'Enquanto seus concorrentes se concentram no SEO tradicional, posicione sua marca na vanguarda dos mecanismos de pesquisa de IA como ChatGPT, Claude e Perplexity.',
      cta: 'Obtenha sua auditoria GEO',
      secondaryCta: 'Agendar consulta',
    },
    nav: {
      services: 'Serviços',
      pricing: 'Preços',
      contact: 'Contato',
      getStarted: 'Começar',
    },
    labels: {
      trafficIncrease: 'Aumento médio de tráfego',
      leadBoost: 'Aumento na geração de leads',
      revenueGrowth: 'Crescimento da receita',
    },
    sections: {
      chooseTitle: 'Por que escolher a Tenten GEO?',
      chooseSubtitle:
        'Nossa abordagem orientada por IA oferece resultados mensuráveis em mercados globais',
      servicesTitle: 'Nossos serviços GEO',
      servicesSubtitle:
        'Soluções abrangentes para dominar os mecanismos de pesquisa com tecnologia de IA',
      pricingTitle: 'Escolha seu plano de crescimento',
      pricingSubtitle:
        'Pacotes flexíveis projetados para escalar com suas metas de expansão global',
      testimonialsTitle: 'Histórias de sucesso de clientes',
      testimonialsSubtitle:
        'Veja como empresas como a sua alcançaram um crescimento notável com nossas soluções GEO',
    },
    benefits: [
      {
        title: 'Estratégia AI-First',
        description:
          'Aproveite a tecnologia de IA de ponta para identificar oportunidades de mercado e otimizar o conteúdo para públicos globais.',
      },
      {
        title: 'Crescimento à prova de futuro',
        description:
          'Construa sistemas escaláveis que se adaptam às constantes mudanças nas condições de mercado e algoritmos de busca.',
      },
      {
        title: 'Construção de autoridade',
        description:
          'Estabeleça sua marca como a solução líder em múltiplos mercados através do posicionamento estratégico de conteúdo.',
      },
      {
        title: 'Vantagem competitiva',
        description:
          'Fique à frente dos concorrentes com insights baseados em dados e estratégias rápidas de penetração de mercado.',
      },
    ],
    features: [
      {
        title: 'Auditoria GEO completa',
        description:
          'Análise aprofundada de sua presença digital atual nos mercados-alvo com recomendações práticas.',
      },
      {
        title: 'Desenvolvimento de estratégia de conteúdo',
        description:
          'Planejamento de conteúdo orientado por IA, adaptado aos comportamentos e preferências de pesquisa do mercado local.',
      },
      {
        title: 'Implementação técnica',
        description:
          'Otimização técnica completa de SEO, incluindo hreflang, estrutura do site e melhorias de desempenho.',
      },
      {
        title: 'Monitoramento de desempenho',
        description:
          'Acompanhamento e otimização contínuos com relatórios detalhados e ajustes estratégicos.',
      },
    ],
    pricing: {
      standard: {
        title: 'Pacote GEO Padrão',
        price: 'R$11.990',
        period: '/mês',
        cta: 'Começar',
        features: [
          '8 artigos de alta qualidade por mês',
          'Otimização técnica de SEO',
          'Pesquisa de palavras-chave para múltiplos mercados',
          'Relatórios mensais de desempenho',
          'Suporte por e-mail',
        ],
      },
      premium: {
        title: 'Pacote GEO Premium',
        price: 'R$26.490',
        period: '/mês',
        cta: 'Começar',
        popular: true,
        features: [
          '30 artigos de alta qualidade por mês',
          'Implementação técnica avançada',
          'Análise de mercado prioritária',
          'Chamadas estratégicas semanais',
          'Suporte dedicado 24/7',
          'Integrações personalizadas',
        ],
      },
    },
    testimonials: [
      {
        quote: `"A estratégia GEO da Tenten aumentou nossos leads qualificados em 312% em 8 mercados. Sua abordagem baseada em IA é revolucionária."`,
        author: 'Ana Silva',
        role: 'VP de Marketing',
        company: 'Soluções HealthTech',
        metric: 'Aumento de 312% nos leads',
      },
      {
        quote: `"Em 6 meses, alcançamos o primeiro lugar para 15 palavras-chave de alto valor em 5 países. O ROI superou as expectativas em 180%."`,
        author: 'Pedro Costa',
        role: 'Chefe de Crescimento',
        company: 'FinanceFlow',
        metric: 'Aumento de 180% no ROI',
      },
    ],
    cta: {
      title: 'Pronto para escalar globalmente?',
      subtitle:
        'Junte-se a centenas de empresas que transformaram sua presença global com a Tenten GEO.',
      primaryButton: 'Obtenha sua auditoria GEO',
      secondaryButton: 'Agendar consulta',
    },
    footer: {
      description:
        'Otimização da expansão global impulsionada por IA para empresas ambiciosas.',
      rights: '© 2024 Tenten Co. Todos os direitos reservados.',
      connect: 'Conectar',
      company: 'Empresa',
      contact: 'Contato',
    },
  },
  id: {
    // Indonesian
    hero: {
      headline:
        'Dominasi Hasil Pencarian AI dengan Strategi GEO Tingkat Lanjut',
      subheadline:
        'Saat pesaing Anda fokus pada SEO tradisional, posisikan merek Anda di garis depan mesin pencari AI seperti ChatGPT, Claude, dan Perplexity.',
      cta: 'Dapatkan Audit GEO Anda',
      secondaryCta: 'Jadwalkan Konsultasi',
    },
    nav: {
      services: 'Layanan',
      pricing: 'Harga',
      contact: 'Kontak',
      getStarted: 'Mulai',
    },
    labels: {
      trafficIncrease: 'Peningkatan Lalu Lintas Rata-rata',
      leadBoost: 'Peningkatan Perolehan Prospek',
      revenueGrowth: 'Pertumbuhan Pendapatan',
    },
    sections: {
      chooseTitle: 'Mengapa Memilih Tenten GEO?',
      chooseSubtitle:
        'Pendekatan berbasis AI kami memberikan hasil yang terukur di pasar global',
      servicesTitle: 'Layanan GEO Kami',
      servicesSubtitle:
        'Solusi komprehensif untuk mendominasi mesin pencari bertenaga AI',
      pricingTitle: 'Pilih Paket Pertumbuhan Anda',
      pricingSubtitle:
        'Paket fleksibel yang dirancang untuk diskalakan dengan tujuan ekspansi global Anda',
      testimonialsTitle: 'Kisah Sukses Klien',
      testimonialsSubtitle:
        'Lihat bagaimana perusahaan seperti Anda mencapai pertumbuhan luar biasa dengan solusi GEO kami',
    },
    benefits: [
      {
        title: 'Strategi AI-First',
        description:
          'Manfaatkan teknologi AI canggih untuk menemukan peluang pasar dan mengoptimalkan konten untuk audiens global.',
      },
      {
        title: 'Pertumbuhan yang Tahan Masa Depan',
        description:
          'Bangun sistem yang dapat diskalakan yang beradaptasi dengan kondisi pasar dan algoritma pencarian yang selalu berubah.',
      },
      {
        title: 'Membangun Otoritas',
        description:
          'Tetapkan merek Anda sebagai solusi terkemuka di berbagai pasar melalui penempatan konten strategis.',
      },
      {
        title: 'Keunggulan Kompetitif',
        description:
          'Tetap di depan pesaing dengan wawasan berbasis data dan strategi penetrasi pasar yang cepat.',
      },
    ],
    features: [
      {
        title: 'Audit GEO Komprehensif',
        description:
          'Analisis mendalam tentang kehadiran digital Anda saat ini di pasar target dengan rekomendasi yang dapat ditindaklanjuti.',
      },
      {
        title: 'Pengembangan Strategi Konten',
        description:
          'Perencanaan konten berbasis AI yang disesuaikan dengan perilaku dan preferensi pencarian pasar lokal.',
      },
      {
        title: 'Implementasi Teknis',
        description:
          'Optimasi SEO teknis lengkap termasuk hreflang, struktur situs, dan peningkatan kinerja.',
      },
      {
        title: 'Pemantauan Kinerja',
        description:
          'Pelacakan dan optimisasi berkelanjutan dengan pelaporan terperinci dan penyesuaian strategis.',
      },
    ],
    pricing: {
      standard: {
        title: 'Paket GEO Standar',
        price: 'Rp35.000.000',
        period: '/bulan',
        cta: 'Mulai',
        features: [
          '8 artikel berkualitas tinggi per bulan',
          'Optimasi SEO teknis',
          'Riset kata kunci multi-pasar',
          'Laporan kinerja bulanan',
          'Dukungan email',
        ],
      },
      premium: {
        title: 'Paket GEO Premium',
        price: 'Rp77.000.000',
        period: '/bulan',
        cta: 'Mulai',
        popular: true,
        features: [
          '30 artikel berkualitas tinggi per bulan',
          'Implementasi teknis tingkat lanjut',
          'Analisis pasar prioritas',
          'Panggilan strategi mingguan',
          'Dukungan khusus 24/7',
          'Integrasi khusus',
        ],
      },
    },
    testimonials: [
      {
        quote: `"Strategi GEO Tenten meningkatkan prospek berkualitas kami sebesar 312% di 8 pasar. Pendekatan berbasis AI mereka sangat inovatif."`,
        author: 'Budi Hartono',
        role: 'VP Pemasaran',
        company: 'Solusi HealthTech',
        metric: 'peningkatan prospek 312%',
      },
      {
        quote: `"Dalam 6 bulan kami mencapai peringkat #1 untuk 15 kata kunci bernilai tinggi di 5 negara. ROI melebihi ekspektasi sebesar 180%."`,
        author: 'Citra Lestari',
        role: 'Kepala Pertumbuhan',
        company: 'FinanceFlow',
        metric: 'peningkatan ROI 180%',
      },
    ],
    cta: {
      title: 'Siap untuk Berekspansi Secara Global?',
      subtitle:
        'Bergabunglah dengan ratusan bisnis yang telah mengubah kehadiran global mereka dengan Tenten GEO.',
      primaryButton: 'Dapatkan Audit GEO Anda',
      secondaryButton: 'Jadwalkan Konsultasi',
    },
    footer: {
      description:
        'Optimalisasi ekspansi global bertenaga AI untuk bisnis yang ambisius.',
      rights: '© 2024 Tenten Co. Semua hak dilindungi undang-undang.',
      connect: 'Hubungkan',
      company: 'Perusahaan',
      contact: 'Kontak',
    },
  },
  ru: {
    // Russian
    hero: {
      headline:
        'Доминируйте в результатах поиска ИИ с помощью передовой стратегии GEO',
      subheadline:
        'Пока ваши конкуренты сосредоточены на традиционном SEO, позиционируйте свой бренд на переднем крае поисковых систем ИИ, таких как ChatGPT, Claude и Perplexity.',
      cta: 'Получить аудит GEO',
      secondaryCta: 'Запланировать консультацию',
    },
    nav: {
      services: 'Услуги',
      pricing: 'Цены',
      contact: 'Контакты',
      getStarted: 'Начать',
    },
    labels: {
      trafficIncrease: 'Среднее увеличение трафика',
      leadBoost: 'Рост генерации лидов',
      revenueGrowth: 'Рост доходов',
    },
    sections: {
      chooseTitle: 'Почему стоит выбрать Tenten GEO?',
      chooseSubtitle:
        'Наш подход, основанный на ИИ, обеспечивает измеримые результаты на мировых рынках',
      servicesTitle: 'Наши услуги GEO',
      servicesSubtitle:
        'Комплексные решения для доминирования в поисковых системах на базе ИИ',
      pricingTitle: 'Выберите свой план роста',
      pricingSubtitle:
        'Гибкие пакеты, разработанные для масштабирования в соответствии с вашими целями глобальной экспансии',
      testimonialsTitle: 'Истории успеха клиентов',
      testimonialsSubtitle:
        'Посмотрите, как компании, подобные вашей, добились значительного роста с помощью наших решений GEO',
    },
    benefits: [
      {
        title: 'Стратегия "AI-First"',
        description:
          'Используйте передовые технологии ИИ для выявления рыночных возможностей и оптимизации контента для мировой аудитории.',
      },
      {
        title: 'Рост, ориентированный на будущее',
        description:
          'Создавайте масштабируемые системы, которые адаптируются к постоянно меняющимся рыночным условиям и поисковым алгоритмам.',
      },
      {
        title: 'Создание авторитета',
        description:
          'Сделайте свой бренд ведущим решением на нескольких рынках с помощью стратегического позиционирования контента.',
      },
      {
        title: 'Конкурентное преимущество',
        description:
          'Опережайте конкурентов благодаря аналитике на основе данных и быстрым стратегиям проникновения на рынок.',
      },
    ],
    features: [
      {
        title: 'Комплексный аудит GEO',
        description:
          'Тщательный анализ вашего текущего цифрового присутствия на целевых рынках с практическими рекомендациями.',
      },
      {
        title: 'Разработка контент-стратегии',
        description:
          'Планирование контента на основе ИИ, адаптированное к поведению и предпочтениям поиска на местном рынке.',
      },
      {
        title: 'Техническая реализация',
        description:
          'Полная техническая SEO-оптимизация, включая hreflang, структуру сайта и повышение производительности.',
      },
      {
        title: 'Мониторинг производительности',
        description:
          'Постоянное отслеживание и оптимизация с подробными отчетами и стратегическими корректировками.',
      },
    ],
    pricing: {
      standard: {
        title: 'Стандартный пакет GEO',
        price: '₽199,000',
        period: '/месяц',
        cta: 'Начать',
        features: [
          '8 высококачественных статей в месяц',
          'Техническая SEO-оптимизация',
          'Исследование ключевых слов для нескольких рынков',
          'Ежемесячные отчеты о производительности',
          'Поддержка по электронной почте',
        ],
      },
      premium: {
        title: 'Премиум-пакет GEO',
        price: '₽439,000',
        period: '/месяц',
        cta: 'Начать',
        popular: true,
        features: [
          '30 высококачественных статей в месяц',
          'Расширенная техническая реализация',
          'Приоритетная рыночная аналитика',
          'Еженедельные стратегические звонки',
          'Круглосуточная выделенная поддержка',
          'Пользовательские интеграции',
        ],
      },
    },
    testimonials: [
      {
        quote: `"Стратегия GEO от Tenten увеличила количество наших квалифицированных лидов на 312% на 8 рынках. Их подход, основанный на ИИ, является революционным."`,
        author: 'Иван Петров',
        role: 'Вице-президент по маркетингу',
        company: 'HealthTech Solutions',
        metric: 'увеличение лидов на 312%',
      },
      {
        quote: `"В течение 6 месяцев мы достигли топ-1 позиций по 15 высокоценным ключевым словам в 5 странах. Рентабельность инвестиций превысила ожидания на 180%."`,
        author: 'Анна Смирнова',
        role: 'Руководитель отдела роста',
        company: 'FinanceFlow',
        metric: 'увеличение рентабельности инвестиций на 180%',
      },
    ],
    cta: {
      title: 'Готовы к глобальному масштабированию?',
      subtitle:
        'Присоединяйтесь к сотням компаний, которые изменили свое глобальное присутствие с помощью Tenten GEO.',
      primaryButton: 'Получить аудит GEO',
      secondaryButton: 'Запланировать консультацию',
    },
    footer: {
      description:
        'Оптимизация глобального расширения на базе ИИ для амбициозных компаний.',
      rights: '© 2024 Tenten Co. Все права защищены.',
      connect: 'Связаться',
      company: 'Компания',
      contact: 'Контакты',
    },
  },
  ar: {
    // Arabic
    hero: {
      headline: 'سيطر على نتائج بحث الذكاء الاصطناعي باستراتيجية GEO متقدمة',
      subheadline:
        'بينما يركز منافسوك على تحسين محركات البحث التقليدي، ضع علامتك التجارية في طليعة محركات بحث الذكاء الاصطناعي مثل ChatGPT, Claude و Perplexity.',
      cta: 'احصل على تدقيق GEO الخاص بك',
      secondaryCta: 'جدولة استشارة',
    },
    nav: {
      services: 'الخدمات',
      pricing: 'الأسعار',
      contact: 'اتصل بنا',
      getStarted: 'ابدأ',
    },
    labels: {
      trafficIncrease: 'متوسط زيادة الزيارات',
      leadBoost: 'زيادة في جذب العملاء المحتملين',
      revenueGrowth: 'نمو الإيرادات',
    },
    sections: {
      chooseTitle: 'لماذا تختار Tenten GEO؟',
      chooseSubtitle:
        'نهجنا القائم على الذكاء الاصطناعي يحقق نتائج قابلة للقياس في الأسواق العالمية',
      servicesTitle: 'نهجنا القائم على الذكاء الاصطناعي يحقق نتائج قابلة للقياس في الأسواق العالمية',
      servicesSubtitle: 'AI搭載検索エンジンを支配するための包括的なソリューション',
      pricingTitle: 'اختر خطة النمو الخاصة بك',
      pricingSubtitle:
        'Paquetes flexibles diseñados para escalar con tus metas de expansão global',
      testimonialsTitle: 'قصص نجاح العملاء',
      testimonialsSubtitle:
        'Mira cómo empresas como la tuya lograron un crecimiento notable con nuestras soluciones GEO',
    },
    benefits: [
      {
        title: 'استراتيجية "AI-First"',
        description:
          'استفد من تقنية الذكاء الاصطناعي المتطورة لاكتشاف فرص السوق وتحسين المحتوى للجماهير العالمية.',
      },
      {
        title: 'نمو مقاوم للمستقبل',
        description:
          'بناء أنظمة قابلة للتطوير تتكيف مع ظروف السوق المتغيرة باستمرار وخوارزميات البحث.',
      },
      {
        title: 'بناء السلطة',
        description:
          'أسس علامتك التجارية كالخيار الرائد في أسواق متعددة من خلال تحديد المواقع الاستراتيجية للمحتوى.',
      },
      {
        title: 'ميزة تنافسية',
        description:
          'ابق في صدارة المنافسين برؤى تعتمد على البيانات واستراتيجيات سريعة لاختراق السوق.',
      },
    ],
    features: [
      {
        title: 'تدقيق GEO شامل',
        description:
          'تحليل عميق لوجودك الرقمي الحالي في الأسواق المستهدفة مع توصيات قابلة للتنفيذ.',
      },
      {
        title: 'تطوير استراتيجية المحتوى',
        description:
          'تخطيط محتوى يعتمد على الذكاء الاصطناعي مصمم خصيصًا لسلوكيات البحث وتفضيلات السوق المحلية.',
      },
      {
        title: 'التنفيذ الفني',
        description:
          'تحسين فني كامل لمحركات البحث بما في ذلك hreflang وهيكل الموقع وتحسينات الأداء.',
      },
      {
        title: 'مراقبة الأداء',
        description:
          'تتبع وتحسين مستمران مع تقارير مفصلة وتعديلات استراتيجية.',
      },
    ],
    pricing: {
      standard: {
        title: 'باقة GEO القياسية',
        price: '٨٬٩٩٠ ر.س',
        period: '/شهر',
        cta: 'ابدأ',
        features: [
          '٨ مقالات عالية الجودة شهريًا',
          'تحسين فني لمحركات البحث',
          'بحث عن الكلمات الرئيسية لأسواق متعددة',
          'تقارير أداء شهرية',
          'دعم عبر البريد الإلكتروني',
        ],
      },
      premium: {
        title: 'باقة GEO المميزة',
        price: '١٩٬٩٩٠ ر.س',
        period: '/شهر',
        cta: 'ابدأ',
        popular: true,
        features: [
          '٣٠ مقالة عالية الجودة شهريًا',
          'تنفيذ فني متقدم',
          'تحليل سوق ذو أولوية',
          'مكالمات استراتيجية أسبوعية',
          'دعم مخصص على مدار الساعة',
          'تكاملات مخصصة',
        ],
      },
    },
    testimonials: [
      {
        quote: `"استراتيجية GEO من Tenten زادت من عملائنا المحتملين المؤهلين بنسبة 312% عبر 8 أسواق. نهجهم القائم على الذكاء الاصطناعي مبتكر."`,
        author: 'فاطمة الأحمد',
        role: 'نائب الرئيس للتسويق',
        company: 'حلول هيلث تك',
        metric: 'زيادة بنسبة 312% في العملاء المحتملين',
      },
      {
        quote: `"في غضون 6 أشهر، حققنا المرتبة الأولى لـ 15 كلمة رئيسية عالية القيمة في 5 دول. تجاوز عائد الاستثمار التوقعات بنسبة 180%."`,
        author: 'علي خان',
        role: 'رئيس قسم النمو',
        company: 'فاينانس فلو',
        metric: 'زيادة بنسبة 180% في عائد الاستثمار',
      },
    ],
    cta: {
      title: 'هل أنت مستعد للتوسع عالميًا؟',
      subtitle:
        'انضم إلى مئات الشركات التي غيرت وجودها العالمي مع Tenten GEO.',
      primaryButton: 'احصل على تدقيق GEO الخاص بك',
      secondaryButton: 'جدولة استشارة',
    },
    footer: {
      description:
        'تحسين التوسع العالمي المدعوم بالذكاء الاصطناعي للشركات الطموحة.',
      rights: '© 2024 شركة Tenten. جميع الحقوق محفوظة.',
      connect: 'تواصل معنا',
      company: 'الشركة',
      contact: 'اتصل',
    },
  },
}

export function getI18nData(locale: string): LanguagePack {
  return i18nData[locale] || i18nData.en
} 
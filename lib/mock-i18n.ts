export interface Benefit {
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface LanguagePack {
  nav: {
    home: string;
    benefits: string;
    features: string;
    pricing: string;
    contact: string;
    language: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  benefits: {
    title: string;
    items: Benefit[];
  };
  features: {
    title: string;
    items: Feature[];
  };
  pricing: {
    title: string;
    enterprise: {
      title: string;
      price: string;
      unit: string;
      features: string[];
      cta: string;
    };
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
  footer: {
    copy: string;
  };
}

export const i18nData: { [key: string]: LanguagePack } = {
  en: {
    nav: {
      home: "Home",
      benefits: "Benefits",
      features: "Features",
      pricing: "Pricing",
      contact: "Contact",
      language: "Language",
    },
    hero: {
      title: "Tenten GEO: Unearth Precision, Unleash Potential",
      subtitle:
        "Your global-local intelligence partner for unparalleled accuracy in geospatial data. We deliver insights that drive growth and innovation.",
      cta: "Request a Demo",
    },
    benefits: {
      title: "Why Choose Tenten GEO?",
      items: [
        {
          title: "Hyper-Local Accuracy",
          description:
            "Leverage our advanced satellite imagery and AI-driven analytics for granular insights at a local level, anywhere in the world.",
        },
        {
          title: "Global Coverage",
          description:
            "Access a seamless, consistent, and up-to-date geospatial database that spans the entire globe, ensuring you never miss a detail.",
        },
        {
          title: "Actionable Intelligence",
          description:
            "Transform raw data into strategic assets with our intuitive platform, designed for real-world application and decision-making.",
        },
      ],
    },
    features: {
      title: "Core Features",
      items: [
        {
          title: "Real-Time Monitoring",
          description:
            "Keep a pulse on your areas of interest with dynamic updates and alerts, ensuring you're always informed.",
        },
        {
          title: "Predictive Analytics",
          description:
            "Anticipate market trends, environmental changes, and competitive movements with our forward-looking data models.",
        },
        {
          title: "Customizable Dashboards",
          description:
            "Tailor your view of the world. Create and share dashboards that focus on the metrics and locations that matter most to you.",
        },
        {
          title: "Seamless API Integration",
          description:
            "Integrate Tenten GEO's data streams directly into your existing workflows and applications with our robust and developer-friendly API.",
        },
      ],
    },
    pricing: {
      title: "Transparent Pricing",
      enterprise: {
        title: "Enterprise Solutions",
        price: "Custom",
        unit: "",
        features: [
          "Volume-based data access",
          "Dedicated account management",
          "Premium support & SLA",
          "Full API access",
          "On-premise deployment options",
        ],
        cta: "Contact Sales",
      },
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "Have questions or ready to get started? Our team is here to help.",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        submit: "Send Message",
      },
    },
    footer: {
      copy: "© 2024 Tenten GEO. All rights reserved.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      benefits: "Beneficios",
      features: "Características",
      pricing: "Precios",
      contact: "Contacto",
      language: "Idioma",
    },
    hero: {
      title: "Tenten GEO: Descubre Precisión, Libera Potencial",
      subtitle:
        "Tu socio de inteligencia global-local para una precisión inigualable en datos geoespaciales. Ofrecemos conocimientos que impulsan el crecimiento y la innovación.",
      cta: "Solicita una Demostración",
    },
    benefits: {
      title: "¿Por Qué Elegir Tenten GEO?",
      items: [
        {
          title: "Precisión Hiperlocal",
          description:
            "Aprovecha nuestras imágenes satelitales avanzadas y análisis impulsados por IA para obtener conocimientos granulares a nivel local, en cualquier parte del mundo.",
        },
        {
          title: "Cobertura Global",
          description:
            "Accede a una base de datos geoespacial sin interrupciones, consistente y actualizada que abarca todo el globo, asegurando que nunca te pierdas un detalle.",
        },
        {
          title: "Inteligencia Accionable",
          description:
            "Transforma datos brutos en activos estratégicos con nuestra plataforma intuitiva, diseñada para la aplicación y toma de decisiones en el mundo real.",
        },
      ],
    },
    features: {
      title: "Características Principales",
      items: [
        {
          title: "Monitoreo en Tiempo Real",
          description:
            "Mantén el pulso de tus áreas de interés con actualizaciones y alertas dinámicas, asegurando que siempre estés informado.",
        },
        {
          title: "Análisis Predictivo",
          description:
            "Anticipa tendencias de mercado, cambios ambientales y movimientos competitivos con nuestros modelos de datos prospectivos.",
        },
        {
          title: "Paneles Personalizables",
          description:
            "Adapta tu visión del mundo. Crea y comparte paneles que se centren en las métricas y ubicaciones que más te importan.",
        },
        {
          title: "Integración de API sin Fisuras",
          description:
            "Integra los flujos de datos de Tenten GEO directamente en tus flujos de trabajo y aplicaciones existentes con nuestra API robusta y amigable para desarrolladores.",
        },
      ],
    },
    pricing: {
      title: "Precios Transparentes",
      enterprise: {
        title: "Soluciones Empresariales",
        price: "Personalizado",
        unit: "",
        features: [
          "Acceso a datos basado en volumen",
          "Gestión de cuenta dedicada",
          "Soporte premium y SLA",
          "Acceso completo a la API",
          "Opciones de implementación en las instalaciones",
        ],
        cta: "Contactar a Ventas",
      },
    },
    contact: {
      title: "Ponte en Contacto",
      subtitle:
        "¿Tienes preguntas o estás listo para comenzar? Nuestro equipo está aquí para ayudarte.",
      form: {
        name: "Tu Nombre",
        email: "Tu Correo Electrónico",
        message: "Tu Mensaje",
        submit: "Enviar Mensaje",
      },
    },
    footer: {
      copy: "© 2024 Tenten GEO. Todos los derechos reservados.",
    },
  },
  'zh-cn': {
    nav: {
      home: "首页",
      benefits: "优势",
      features: "功能",
      pricing: "定价",
      contact: "联系我们",
      language: "语言",
    },
    hero: {
      title: "Tenten GEO: 精准勘探，释放潜力",
      subtitle:
        "您的全球-本地情报合作伙伴，提供无与伦比的地理空间数据精度。我们提供的洞察力推动增长与创新。",
      cta: "请求演示",
    },
    benefits: {
      title: "为什么选择 Tenten GEO？",
      items: [
        {
          title: "超本地化精度",
          description:
            "利用我们先进的卫星图像和人工智能驱动的分析，在全球任何地方获得地方级的精细洞察。",
        },
        {
          title: "全球覆盖",
          description:
            "访问覆盖全球的无缝、一致且最新的地理空间数据库，确保您不错过任何细节。",
        },
        {
          title: "可操作的情报",
          description:
            "通过我们为实际应用和决策设计的直观平台，将原始数据转化为战略资产。",
        },
      ],
    },
    features: {
      title: "核心功能",
      items: [
        {
          title: "实时监控",
          description:
            "通过动态更新和警报，随时掌握您感兴趣区域的脉搏，确保您始终知情。",
        },
        {
          title: "预测分析",
          description:
            "利用我们的前瞻性数据模型，预测市场趋势、环境变化和竞争动态。",
        },
        {
          title: "可定制仪表板",
          description:
            "定制您的世界观。创建并分享专注于对您最重要的指标和位置的仪表板。",
        },
        {
          title: "无缝 API 集成",
          description:
            "使用我们强大且对开发人员友好的 API，将 Tenten GEO 的数据流直接集成到您现有的工作流程和应用程序中。",
        },
      ],
    },
    pricing: {
      title: "透明定价",
      enterprise: {
        title: "企业解决方案",
        price: "定制",
        unit: "",
        features: [
          "基于数据量的访问",
          "专属客户管理",
          "高级支持与服务等级协议",
          "完整的 API 访问权限",
          "本地部署选项",
        ],
        cta: "联系销售",
      },
    },
    contact: {
      title: "联系我们",
      subtitle: "有任何问题或准备好开始了吗？我们的团队随时为您提供帮助。",
      form: {
        name: "您的姓名",
        email: "您的电子邮件",
        message: "您的留言",
        submit: "发送留言",
      },
    },
    footer: {
      copy: "© 2024 Tenten GEO. 版权所有。",
    },
  },
  'zh-tw': {
    nav: {
      home: "首頁",
      benefits: "優勢",
      features: "功能",
      pricing: "定價",
      contact: "聯絡我們",
      language: "語言",
    },
    hero: {
      title: "Tenten GEO: 精準勘探，釋放潛力",
      subtitle:
        "您的全球-本地情報合作夥伴，提供無與倫比的地理空間數據精度。我們提供的洞察力推動增長與創新。",
      cta: "請求演示",
    },
    benefits: {
      title: "為什麼選擇 Tenten GEO？",
      items: [
        {
          title: "超本地化精度",
          description:
            "利用我們先進的衛星圖像和人工智能驅動的分析，在全球任何地方獲得地方級的精細洞察。",
        },
        {
          title: "全球覆蓋",
          description:
            "訪問覆蓋全球的無縫、一致且最新的地理空間數據庫，確保您不錯過任何細節。",
        },
        {
          title: "可操作的情報",
          description:
            "通過我們為實際應用和決策設計的直觀平台，將原始數據轉化為戰略資產。",
        },
      ],
    },
    features: {
      title: "核心功能",
      items: [
        {
          title: "實時監控",
          description:
            "通過動態更新和警報，隨時掌握您感興趣區域的脈搏，確保您始終知情。",
        },
        {
          title: "預測分析",
          description:
            "利用我們的前瞻性數據模型，預測市場趨勢、環境變化和競爭動態。",
        },
        {
          title: "可定制儀表板",
          description:
            "定制您的世界觀。創建並分享專注於對您最重要的指標和位置的儀表板。",
        },
        {
          title: "無縫 API 整合",
          description:
            "使用我們強大且對開發人員友好的 API，將 Tenten GEO 的數據流直接整合到您現有的工作流程和應用程式中。",
        },
      ],
    },
    pricing: {
      title: "透明定價",
      enterprise: {
        title: "企業解決方案",
        price: "客製化",
        unit: "",
        features: [
          "基於數據量的訪問",
          "專屬客戶管理",
          "高級支持與服務等級協議",
          "完整的 API 訪問權限",
          "本地部署選項",
        ],
        cta: "聯繫銷售",
      },
    },
    contact: {
      title: "聯絡我們",
      subtitle: "有任何問題或準備好開始了嗎？我們的團隊隨時為您提供幫助。",
      form: {
        name: "您的姓名",
        email: "您的電子郵件",
        message: "您的留言",
        submit: "發送留言",
      },
    },
    footer: {
      copy: "© 2024 Tenten GEO. 版權所有。",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      benefits: "利点",
      features: "特徴",
      pricing: "価格",
      contact: "お問い合わせ",
      language: "言語",
    },
    hero: {
      title: "Tenten GEO: 精密を発掘し、可能性を解き放つ",
      subtitle:
        "地理空間データにおける比類なき精度を誇る、グローバル・ローカルなインテリジェンスパートナー。成長と革新を促進する洞察を提供します。",
      cta: "デモをリクエスト",
    },
    benefits: {
      title: "Tenten GEOを選ぶ理由",
      items: [
        {
          title: "ハイパーローカルな精度",
          description:
            "高度な衛星画像とAI駆動の分析を活用し、世界中のどこでもローカルレベルで詳細な洞察を得られます。",
        },
        {
          title: "グローバルカバレッジ",
          description:
            "全世界を網羅する、シームレスで一貫性のある最新の地理空間データベースにアクセスし、細部まで見逃しません。",
        },
        {
          title: "実用的なインテリジェンス",
          description:
            "実世界での応用と意思決定のために設計された直感的なプラットフォームで、生データを戦略的資産に変えます。",
        },
      ],
    },
    features: {
      title: "主な特徴",
      items: [
        {
          title: "リアルタイムモニタリング",
          description:
            "動的な更新とアラートで関心領域の動向を常に把握し、常に情報に基づいた判断ができます。",
        },
        {
          title: "予測分析",
          description:
            "未来志向のデータモデルで、市場のトレンド、環境の変化、競合の動きを予測します。",
        },
        {
          title: "カスタマイズ可能なダッシュボード",
          description:
            "あなたの世界観を調整します。あなたにとって最も重要な指標と場所に焦点を当てたダッシュボードを作成・共有します。",
        },
        {
          title: "シームレスなAPI統合",
          description:
            "堅牢で開発者に優しいAPIを使用して、Tenten GEOのデータストリームを既存のワークフローやアプリケーションに直接統合します。",
        },
      ],
    },
    pricing: {
      title: "透明な価格設定",
      enterprise: {
        title: "エンタープライズソリューション",
        price: "カスタム",
        unit: "",
        features: [
          "ボリュームベースのデータアクセス",
          "専任のアカウント管理",
          "プレミアムサポートとSLA",
          "完全なAPIアクセス",
          "オンプレミス展開オプション",
        ],
        cta: "営業へのお問い合わせ",
      },
    },
    contact: {
      title: "お問い合わせ",
      subtitle:
        "ご質問がある場合や、すぐに始めたい場合は、私たちのチームがお手伝いします。",
      form: {
        name: "お名前",
        email: "メールアドレス",
        message: "メッセージ",
        submit: "メッセージを送信",
      },
    },
    footer: {
      copy: "© 2024 Tenten GEO. 無断複写・転載を禁じます。",
    },
  },
  ko: {
    nav: {
      home: "홈",
      benefits: "혜택",
      features: "기능",
      pricing: "가격",
      contact: "문의하기",
      language: "언어",
    },
    hero: {
      title: "Tenten GEO: 정밀함을 발견하고, 잠재력을 발휘하세요",
      subtitle:
        "지리 공간 데이터의 독보적인 정확성을 위한 글로벌-로컬 인텔리전스 파트너입니다. 성장과 혁신을 주도하는 통찰력을 제공합니다.",
      cta: "데모 요청",
    },
    benefits: {
      title: "왜 Tenten GEO를 선택해야 할까요?",
      items: [
        {
          title: "초지역적 정확성",
          description:
            "첨단 위성 이미지와 AI 기반 분석을 활용하여 전 세계 어디에서나 지역 수준의 세분화된 통찰력을 얻으세요.",
        },
        {
          title: "글로벌 커버리지",
          description:
            "전 세계를 아우르는 끊김 없고 일관되며 최신 상태의 지리 공간 데이터베이스에 접속하여 세부 사항 하나도 놓치지 마세요.",
        },
        {
          title: "실용적인 인텔리전스",
          description:
            "실제 적용 및 의사 결정을 위해 설계된 직관적인 플랫폼으로 원시 데이터를 전략적 자산으로 전환하세요.",
        },
      ],
    },
    features: {
      title: "핵심 기능",
      items: [
        {
          title: "실시간 모니터링",
          description:
            "동적 업데이트 및 알림을 통해 관심 지역의 상황을 지속적으로 파악하여 항상 정보를 얻을 수 있습니다.",
        },
        {
          title: "예측 분석",
          description:
            "미래 지향적인 데이터 모델로 시장 동향, 환경 변화, 경쟁사의 움직임을 예측하세요.",
        },
        {
          title: "사용자 정의 대시보드",
          description:
            "세상을 보는 당신만의 시각을 만드세요. 가장 중요한 지표와 위치에 초점을 맞춘 대시보드를 만들고 공유하세요.",
        },
        {
          title: "원활한 API 통합",
          description:
            "견고하고 개발자 친화적인 API를 사용하여 Tenten GEO의 데이터 스트림을 기존 워크플로 및 애플리케이션에 직접 통합하세요.",
        },
      ],
    },
    pricing: {
      title: "투명한 가격",
      enterprise: {
        title: "엔터프라이즈 솔루션",
        price: "맞춤",
        unit: "",
        features: [
          "볼륨 기반 데이터 액세스",
          "전담 계정 관리",
          "프리미엄 지원 및 SLA",
          "전체 API 액세스",
          "온프레미스 배포 옵션",
        ],
        cta: "영업팀에 문의",
      },
    },
    contact: {
      title: "문의하기",
      subtitle:
        "질문이 있거나 시작할 준비가 되셨나요? 저희 팀이 도와드리겠습니다.",
      form: {
        name: "이름",
        email: "이메일",
        message: "메시지",
        submit: "메시지 보내기",
      },
    },
    footer: {
      copy: "© 2024 Tenten GEO. 모든 권리 보유.",
    },
  },
  fr: {
    nav: {
        home: "Accueil",
        benefits: "Avantages",
        features: "Fonctionnalités",
        pricing: "Tarifs",
        contact: "Contact",
        language: "Langue",
    },
    hero: {
        title: "Tenten GEO : Découvrez la précision, libérez le potentiel",
        subtitle: "Votre partenaire d'intelligence géo-spatiale globale et locale pour une précision inégalée. Nous fournissons des informations qui stimulent la croissance et l'innovation.",
        cta: "Demander une démo",
    },
    benefits: {
        title: "Pourquoi choisir Tenten GEO ?",
        items: [
            {
                title: "Précision hyper-locale",
                description: "Tirez parti de notre imagerie satellite avancée et de nos analyses basées sur l'IA pour des informations granulaires au niveau local, partout dans le monde.",
            },
            {
                title: "Couverture mondiale",
                description: "Accédez à une base de données géospatiales transparente, cohérente et à jour qui couvre le monde entier, pour ne jamais manquer un détail.",
            },
            {
                title: "Intelligence exploitable",
                description: "Transformez les données brutes en actifs stratégiques avec notre plateforme intuitive, conçue pour des applications et des prises de décision concrètes.",
            },
        ],
    },
    features: {
        title: "Fonctionnalités de base",
        items: [
            {
                title: "Surveillance en temps réel",
                description: "Gardez un œil sur vos zones d'intérêt avec des mises à jour et des alertes dynamiques, pour être toujours informé.",
            },
            {
                title: "Analyses prédictives",
                description: "Anticipez les tendances du marché, les changements environnementaux et les mouvements de la concurrence avec nos modèles de données prospectifs.",
            },
            {
                title: "Tableaux de bord personnalisables",
                description: "Personnalisez votre vision du monde. Créez et partagez des tableaux de bord axés sur les métriques et les lieux qui comptent le plus pour vous.",
            },
            {
                title: "Intégration API transparente",
                description: "Intégrez les flux de données de Tenten GEO directement dans vos flux de travail et applications existants avec notre API robuste et conviviale pour les développeurs.",
            },
        ],
    },
    pricing: {
        title: "Tarification transparente",
        enterprise: {
            title: "Solutions d'entreprise",
            price: "Personnalisé",
            unit: "",
            features: [
                "Accès aux données basé sur le volume",
                "Gestion de compte dédiée",
                "Support premium et SLA",
                "Accès complet à l'API",
                "Options de déploiement sur site",
            ],
            cta: "Contacter les ventes",
        },
    },
    contact: {
        title: "Nous contacter",
        subtitle: "Vous avez des questions ou êtes prêt à commencer ? Notre équipe est là pour vous aider.",
        form: {
            name: "Votre nom",
            email: "Votre e-mail",
            message: "Votre message",
            submit: "Envoyer le message",
        },
    },
    footer: {
        copy: "© 2024 Tenten GEO. Tous droits réservés.",
    },
  },
  de: {
    nav: {
        home: "Startseite",
        benefits: "Vorteile",
        features: "Funktionen",
        pricing: "Preise",
        contact: "Kontakt",
        language: "Sprache",
    },
    hero: {
        title: "Tenten GEO: Präzision entdecken, Potenzial freisetzen",
        subtitle: "Ihr global-lokaler Intelligenzpartner für unübertroffene Genauigkeit bei Geodaten. Wir liefern Erkenntnisse, die Wachstum und Innovation fördern.",
        cta: "Demo anfordern",
    },
    benefits: {
        title: "Warum Tenten GEO wählen?",
        items: [
            {
                title: "Hyperlokale Genauigkeit",
                description: "Nutzen Sie unsere fortschrittlichen Satellitenbilder und KI-gesteuerten Analysen für granulare Einblicke auf lokaler Ebene, überall auf der Welt.",
            },
            {
                title: "Globale Abdeckung",
                description: "Greifen Sie auf eine nahtlose, konsistente und aktuelle Geodatenbank zu, die den gesamten Globus umspannt, damit Ihnen kein Detail entgeht.",
            },
            {
                title: "Umsetzbare Intelligenz",
                description: "Verwandeln Sie Rohdaten mit unserer intuitiven Plattform, die für reale Anwendungen und Entscheidungen entwickelt wurde, in strategische Vermögenswerte.",
            },
        ],
    },
    features: {
        title: "Kernfunktionen",
        items: [
            {
                title: "Echtzeit-Überwachung",
                description: "Behalten Sie mit dynamischen Updates und Warnungen den Überblick über Ihre Interessengebiete, damit Sie immer informiert sind.",
            },
            {
                title: "Prädiktive Analytik",
                description: "Antizipieren Sie Markttrends, Umweltveränderungen und Wettbewerbsbewegungen mit unseren vorausschauenden Datenmodellen.",
            },
            {
                title: "Anpassbare Dashboards",
                description: "Passen Sie Ihre Sicht auf die Welt an. Erstellen und teilen Sie Dashboards, die sich auf die für Sie wichtigsten Metriken und Standorte konzentrieren.",
            },
            {
                title: "Nahtlose API-Integration",
                description: "Integrieren Sie die Datenströme von Tenten GEO mit unserer robusten und entwicklerfreundlichen API direkt in Ihre bestehenden Arbeitsabläufe und Anwendungen.",
            },
        ],
    },
    pricing: {
        title: "Transparente Preisgestaltung",
        enterprise: {
            title: "Unternehmenslösungen",
            price: "Benutzerdefiniert",
            unit: "",
            features: [
                "Volumenbasierter Datenzugriff",
                "Dediziertes Account Management",
                "Premium-Support & SLA",
                "Vollständiger API-Zugriff",
                "On-Premise-Bereitstellungsoptionen",
            ],
            cta: "Vertrieb kontaktieren",
        },
    },
    contact: {
        title: "Kontakt aufnehmen",
        subtitle: "Haben Sie Fragen oder sind Sie bereit, loszulegen? Unser Team ist hier, um zu helfen.",
        form: {
            name: "Ihr Name",
            email: "Ihre E-Mail",
            message: "Ihre Nachricht",
            submit: "Nachricht senden",
        },
    },
    footer: {
        copy: "© 2024 Tenten GEO. Alle Rechte vorbehalten.",
    },
  },
  ru: {
    nav: {
        home: "Главная",
        benefits: "Преимущества",
        features: "Особенности",
        pricing: "Цены",
        contact: "Контакты",
        language: "Язык",
    },
    hero: {
        title: "Tenten GEO: Откройте точность, раскройте потенциал",
        subtitle: "Ваш глобально-локальный партнер по интеллектуальным геопространственным данным для непревзойденной точности. Мы предоставляем инсайты, которые способствуют росту и инновациям.",
        cta: "Запросить демо",
    },
    benefits: {
        title: "Почему выбирают Tenten GEO?",
        items: [
            {
                title: "Гиперлокальная точность",
                description: "Используйте наши передовые спутниковые снимки и аналитику на основе ИИ для получения гранулярных данных на местном уровне в любой точке мира.",
            },
            {
                title: "Глобальное покрытие",
                description: "Получите доступ к бесшовной, последовательной и актуальной геопространственной базе данных, охватывающей весь земной шар, чтобы не упустить ни одной детали.",
            },
            {
                title: "Действенная аналитика",
                description: "Превратите необработанные данные в стратегические активы с помощью нашей интуитивно понятной платформы, разработанной для реального применения и принятия решений.",
            },
        ],
    },
    features: {
        title: "Ключевые особенности",
        items: [
            {
                title: "Мониторинг в реальном времени",
                description: "Следите за интересующими вас областями с помощью динамических обновлений и оповещений, чтобы всегда быть в курсе событий.",
            },
            {
                title: "Предиктивная аналитика",
                description: "Предвосхищайте рыночные тенденции, изменения в окружающей среде и действия конкурентов с помощью наших прогнозных моделей данных.",
            },
            {
                title: "Настраиваемые панели мониторинга",
                description: "Настройте свой взгляд на мир. Создавайте и делитесь панелями мониторинга, которые сосредоточены на наиболее важных для вас показателях и местоположениях.",
            },
            {
                title: "Бесшовная интеграция API",
                description: "Интегрируйте потоки данных Tenten GEO непосредственно в ваши существующие рабочие процессы и приложения с помощью нашего надежного и удобного для разработчиков API.",
            },
        ],
    },
    pricing: {
        title: "Прозрачное ценообразование",
        enterprise: {
            title: "Корпоративные решения",
            price: "Индивидуально",
            unit: "",
            features: [
                "Доступ к данным в зависимости от объема",
                "Выделенный менеджер по работе с клиентами",
                "Премиальная поддержка и SLA",
                "Полный доступ к API",
                "Варианты развертывания на месте",
            ],
            cta: "Связаться с отделом продаж",
        },
    },
    contact: {
        title: "Свяжитесь с нами",
        subtitle: "Есть вопросы или вы готовы начать? Наша команда здесь, чтобы помочь.",
        form: {
            name: "Ваше имя",
            email: "Ваш email",
            message: "Ваше сообщение",
            submit: "Отправить сообщение",
        },
    },
    footer: {
        copy: "© 2024 Tenten GEO. Все права защищены.",
    },
  },
  pt: {
    nav: {
        home: "Início",
        benefits: "Benefícios",
        features: "Recursos",
        pricing: "Preços",
        contact: "Contato",
        language: "Idioma",
    },
    hero: {
        title: "Tenten GEO: Descubra a Precisão, Liberte o Potencial",
        subtitle: "Seu parceiro de inteligência global-local para precisão incomparável em dados geoespaciais. Fornecemos insights que impulsionam o crescimento e a inovação.",
        cta: "Solicitar uma Demonstração",
    },
    benefits: {
        title: "Por que escolher a Tenten GEO?",
        items: [
            {
                title: "Precisão Hiperlocal",
                description: "Aproveite nossas imagens de satélite avançadas e análises orientadas por IA para obter insights granulares em nível local, em qualquer lugar do mundo.",
            },
            {
                title: "Cobertura Global",
                description: "Acesse um banco de dados geoespacial contínuo, consistente e atualizado que abrange todo o globo, garantindo que você nunca perca um detalhe.",
            },
            {
                title: "Inteligência Acionável",
                description: "Transforme dados brutos em ativos estratégicos com nossa plataforma intuitiva, projetada para aplicação e tomada de decisão no mundo real.",
            },
        ],
    },
    features: {
        title: "Recursos Principais",
        items: [
            {
                title: "Monitoramento em Tempo Real",
                description: "Mantenha-se atualizado sobre suas áreas de interesse com atualizações e alertas dinâmicos, garantindo que você esteja sempre informado.",
            },
            {
                title: "Análise Preditiva",
                description: "Antecipe tendências de mercado, mudanças ambientais e movimentos competitivos com nossos modelos de dados prospectivos.",
            },
            {
                title: "Dashboards Personalizáveis",
                description: "Adapte sua visão do mundo. Crie e compartilhe dashboards que se concentram nas métricas e locais mais importantes para você.",
            },
            {
                title: "Integração de API Contínua",
                description: "Integre os fluxos de dados da Tenten GEO diretamente em seus fluxos de trabalho e aplicativos existentes com nossa API robusta e amigável para desenvolvedores.",
            },
        ],
    },
    pricing: {
        title: "Preços Transparentes",
        enterprise: {
            title: "Soluções Empresariais",
            price: "Personalizado",
            unit: "",
            features: [
                "Acesso a dados baseado em volume",
                "Gerenciamento de conta dedicado",
                "Suporte premium e SLA",
                "Acesso total à API",
                "Opções de implantação no local",
            ],
            cta: "Contatar Vendas",
        },
    },
    contact: {
        title: "Entre em Contato",
        subtitle: "Tem perguntas ou está pronto para começar? Nossa equipe está aqui para ajudar.",
        form: {
            name: "Seu Nome",
            email: "Seu Email",
            message: "Sua Mensagem",
            submit: "Enviar Mensagem",
        },
    },
    footer: {
        copy: "© 2024 Tenten GEO. Todos os direitos reservados.",
    },
  },
  id: {
    nav: {
        home: "Beranda",
        benefits: "Manfaat",
        features: "Fitur",
        pricing: "Harga",
        contact: "Kontak",
        language: "Bahasa",
    },
    hero: {
        title: "Tenten GEO: Gali Presisi, Lepaskan Potensi",
        subtitle: "Mitra intelijen global-lokal Anda untuk akurasi tak tertandingi dalam data geospasial. Kami memberikan wawasan yang mendorong pertumbuhan dan inovasi.",
        cta: "Minta Demo",
    },
    benefits: {
        title: "Mengapa Memilih Tenten GEO?",
        items: [
            {
                title: "Akurasi Hiper-Lokal",
                description: "Manfaatkan citra satelit canggih dan analitik berbasis AI kami untuk wawasan granular di tingkat lokal, di mana pun di dunia.",
            },
            {
                title: "Cakupan Global",
                description: "Akses basis data geospasial yang mulus, konsisten, dan terkini yang mencakup seluruh dunia, memastikan Anda tidak pernah melewatkan detail.",
            },
            {
                title: "Intelijen yang Dapat Ditindaklanjuti",
                description: "Ubah data mentah menjadi aset strategis dengan platform intuitif kami, yang dirancang untuk aplikasi dan pengambilan keputusan di dunia nyata.",
            },
        ],
    },
    features: {
        title: "Fitur Inti",
        items: [
            {
                title: "Pemantauan Waktu Nyata",
                description: "Tetap pantau area minat Anda dengan pembaruan dan peringatan dinamis, memastikan Anda selalu terinformasi.",
            },
            {
                title: "Analitik Prediktif",
                description: "Antisipasi tren pasar, perubahan lingkungan, dan pergerakan kompetitif dengan model data berwawasan ke depan kami.",
            },
            {
                title: "Dasbor yang Dapat Disesuaikan",
                description: "Sesuaikan pandangan Anda tentang dunia. Buat dan bagikan dasbor yang berfokus pada metrik dan lokasi yang paling penting bagi Anda.",
            },
            {
                title: "Integrasi API yang Mulus",
                description: "Integrasikan aliran data Tenten GEO langsung ke alur kerja dan aplikasi Anda yang ada dengan API kami yang kuat dan ramah pengembang.",
            },
        ],
    },
    pricing: {
        title: "Harga Transparan",
        enterprise: {
            title: "Solusi Perusahaan",
            price: "Kustom",
            unit: "",
            features: [
                "Akses data berbasis volume",
                "Manajemen akun khusus",
                "Dukungan premium & SLA",
                "Akses API penuh",
                "Opsi penerapan di lokasi",
            ],
            cta: "Hubungi Penjualan",
        },
    },
    contact: {
        title: "Hubungi Kami",
        subtitle: "Ada pertanyaan atau siap untuk memulai? Tim kami siap membantu.",
        form: {
            name: "Nama Anda",
            email: "Email Anda",
            message: "Pesan Anda",
            submit: "Kirim Pesan",
        },
    },
    footer: {
        copy: "© 2024 Tenten GEO. Hak cipta dilindungi undang-undang.",
    },
  },
  ar: {
    nav: {
        home: "الرئيسية",
        benefits: "الفوائد",
        features: "الميزات",
        pricing: "الأسعار",
        contact: "اتصل بنا",
        language: "اللغة",
    },
    hero: {
        title: "Tenten GEO: اكتشف الدقة، أطلق العنان للإمكانات",
        subtitle: "شريكك في المعلومات الجغرافية المكانية العالمية والمحلية لدقة لا مثيل لها. نقدم رؤى تدفع النمو والابتكار.",
        cta: "اطلب عرضًا تجريبيًا",
    },
    benefits: {
        title: "لماذا تختار Tenten GEO؟",
        items: [
            {
                title: "دقة محلية فائقة",
                description: "استفد من صور الأقمار الصناعية المتقدمة والتحليلات المدفوعة بالذكاء الاصطناعي للحصول على رؤى تفصيلية على المستوى المحلي في أي مكان في العالم.",
            },
            {
                title: "تغطية عالمية",
                description: "احصل على قاعدة بيانات جغرافية مكانية سلسة ومتسقة ومحدثة تغطي العالم بأسره، مما يضمن عدم تفويتك لأي تفصيل.",
            },
            {
                title: "معلومات استخباراتية قابلة للتنفيذ",
                description: "حوّل البيانات الأولية إلى أصول استراتيجية من خلال منصتنا البديهية المصممة للتطبيق في العالم الحقيقي واتخاذ القرارات.",
            },
        ],
    },
    features: {
        title: "الميزات الأساسية",
        items: [
            {
                title: "مراقبة في الوقت الفعلي",
                description: "ابق على اطلاع دائم بمناطق اهتمامك من خلال التحديثات والتنبيهات الديناميكية، مما يضمن أنك دائمًا على علم.",
            },
            {
                title: "تحليلات تنبؤية",
                description: "توقع اتجاهات السوق والتغيرات البيئية وتحركات المنافسين من خلال نماذج البيانات التطلعية الخاصة بنا.",
            },
            {
                title: "لوحات معلومات قابلة للتخصيص",
                description: "خصص رؤيتك للعالم. أنشئ وشارك لوحات معلومات تركز على المقاييس والمواقع الأكثر أهمية بالنسبة لك.",
            },
            {
                title: "تكامل سلس لواجهة برمجة التطبيقات",
                description: "ادمج تدفقات بيانات Tenten GEO مباشرة في تدفقات عملك وتطبيقاتك الحالية من خلال واجهة برمجة التطبيقات القوية وسهلة الاستخدام للمطورين.",
            },
        ],
    },
    pricing: {
        title: "تسعير شفاف",
        enterprise: {
            title: "حلول للمؤسسات",
            price: "مخصص",
            unit: "",
            features: [
                "وصول إلى البيانات على أساس الحجم",
                "إدارة حساب مخصصة",
                "دعم متميز واتفاقية مستوى الخدمة",
                "وصول كامل لواجهة برمجة التطبيقات",
                "خيارات النشر المحلي",
            ],
            cta: "اتصل بالمبيعات",
        },
    },
    contact: {
        title: "تواصل معنا",
        subtitle: "هل لديك أسئلة أو مستعد للبدء؟ فريقنا هنا للمساعدة.",
        form: {
            name: "اسمك",
            email: "بريدك الإلكتروني",
            message: "رسالتك",
            submit: "إرسال رسالة",
        },
    },
    footer: {
        copy: "© 2024 Tenten GEO. جميع الحقوق محفوظة.",
    },
  },
};

export const getI18nData = (lang: string): LanguagePack => {
  return i18nData[lang] || i18nData.en;
};
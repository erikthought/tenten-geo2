# Tenten GEO Landing Page

A modern, production-ready landing page for Tenten's Generative Engine Optimization (AI SEO) services. Built with Next.js 14, TypeScript, and Tailwind CSS following AIDA structure and best UX practices.

## Features

* 🎯 **AIDA Structure**: Attention → Interest → Desire → Action flow
* 🤖 **AI SEO Focus**: Generative Engine Optimization services
* 🎨 **Modern Design**: Clean, minimal with elegant shadows and generous whitespace
* 🚀 **Performance**: Built with Next.js 14 and optimized for speed
* 📱 **Responsive**: Mobile-first design that works on all devices
* ♿ **Accessible**: WCAG 2.2 AA compliant with proper contrast and ARIA labels
* 🎭 **Smooth Animations**: Framer Motion for page and component transitions
* 💙 **Brand Consistent**: Uses Tenten brand colors and typography

## Tech Stack

* **Framework**: Next.js 14 with App Router
* **Language**: TypeScript (strict mode)
* **Styling**: Tailwind CSS v3 with utility classes
* **Components**: Shadcn/ui for consistent UI primitives
* **Animations**: Framer Motion for smooth transitions
* **Icons**: Lucide React
* **Fonts**: Inter & Noto Sans TC via Google Fonts

## Getting Started

### Prerequisites

* Node.js 18+ 
* npm, yarn, or pnpm

### Installation & Development

```bash
# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev

# Build for production
npm run build && npm start
# or
pnpm build && pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts & SEO
│   ├── page.tsx           # Home page loading GeoLandingPage
│   └── globals.css        # Global styles
├── components/
│   ├── GeoLandingPage.tsx # Main landing page component
│   └── ui/                # Reusable UI components (shadcn/ui)
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── textarea.tsx
└── lib/
    └── utils.ts           # Utility functions
```

## Services & Pricing

### Standard GEO Package - $2,390/month
- GEO Audit
- Technical SEO
- GEO Analysis Report  
- Keyword Matrix
- 8 long-form articles (1500-3000 words)
- Monthly reports

### Premium GEO Package - $5,290/month
- Everything in Standard
- 30 long-form articles
- Dedicated communication channel
- 12-hour support SLA
- Bi-weekly reports

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import repository on [Vercel](https://vercel.com)
3. Deploy automatically

The landing page is optimized for Vercel deployment with proper Next.js configuration.

### Environment Variables

No environment variables required for basic deployment.

## Design System

* **Colors**: Primary blue (#2563eb), neutral grays (#F8F9FA → #212529)
* **Typography**: Inter (primary), Noto Sans TC (fallback), fluid responsive scale
* **Layout**: Max 1440px width, 12-column grid, 4|8|16|24px spacing
* **Motion**: 200ms ease-in-out transitions
* **Accessibility**: 4.5:1+ contrast ratio, logical tab order, ARIA labels

## License

This project is proprietary software owned by Tenten Co.

## Contact

* **Website**: [tenten.co](https://tenten.co)
* **Email**: [geo@tenten.co](mailto:geo@tenten.co)
* **Live Demo**: [landing-tenten-geo.vercel.app](https://landing-tenten-geo.vercel.app) 
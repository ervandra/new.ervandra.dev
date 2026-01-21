import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import ClientAnalytics from '@/components/ClientAnalytics';
import { Providers } from '@/components/providers';
import { GoogleTagManager, GoogleTagManagerNoscript } from '@/components/GoogleTagManager';
import { MetaPixel } from '@/components/MetaPixel';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Optimize font loading
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ervandra.dev'),
  title: {
    default: 'Ervandra Halim — Strategic Systems Architect & Tech Partner',
    template: '%s · Ervandra Halim',
  },
  description:
    'I build systems that make your business run without you. Strategic tech partner for corporates, startups, and business owners who want to scale operations without chaos.',
  keywords: [
    'strategic systems architect',
    'tech partner',
    'tech consultant',
    'CPTO',
    'fractional CTO',
    'AI enablement',
    'custom development',
    'web application',
    'software architecture',
    'business automation',
    'KaryaKilat',
    'Ervandra Halim',
  ],
  authors: [{ name: 'Ervandra Halim', url: 'https://www.ervandra.dev' }],
  creator: 'Ervandra Halim',
  publisher: 'Ervandra Halim',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.ervandra.dev',
  },
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: 'Ervandra Halim — Strategic Systems Architect & Tech Partner',
    description:
      'I build systems that make your business run without you. Strategic tech partner for corporates, startups, and business owners who want to scale operations without chaos.',
    url: 'https://www.ervandra.dev',
    siteName: 'Ervandra Halim',
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: 'Ervandra Halim - Strategic Systems Architect & Tech Partner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ervandra Halim — Strategic Systems Architect & Tech Partner',
    description:
      'I build systems that make your business run without you. Strategic tech partner for corporates, startups, and business owners who want to scale operations without chaos.',
    images: ['/og.svg'],
    creator: '@ervandra',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ervandra Halim',
    jobTitle: 'Strategic Systems Architect, CPTO',
    url: 'https://www.ervandra.dev',
    description: 'Strategic tech architecture for agents, entrepreneurs, and business owners who want to scale without chaos.',
    knowsAbout: [
      'Software Architecture',
      'AI Enablement',
      'Web Development',
      'Business Automation',
      'Technical Leadership',
    ],
    sameAs: [],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Ervandra Halim',
    url: 'https://www.ervandra.dev',
    description: 'Strategic Systems Architect - I build systems that make your business run without you.',
    author: {
      '@type': 'Person',
      name: 'Ervandra Halim',
    },
  };

  const professionalServiceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Ervandra Halim - Strategic Systems Architect',
    url: 'https://www.ervandra.dev',
    description: 'Strategic tech architecture, AI enablement, and custom development services.',
    priceRange: '$$',
    areaServed: 'Worldwide',
    serviceType: [
      'Strategic Systems Design',
      'AI Enablement',
      'Custom Development',
      'Fractional CPTO',
    ],
  };

  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Google Tag Manager */}
        <Suspense fallback={null}>
          <GoogleTagManager />
        </Suspense>
      </head>
      <body>
        {/* GTM noscript fallback */}
        <GoogleTagManagerNoscript />
        
        <Providers>
          <div className="min-h-dvh flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
        
        {/* Analytics */}
        <Suspense fallback={null}>
          <ClientAnalytics />
        </Suspense>
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        <Analytics />
        
        {/* Structured Data */}
        <Script id="jsonld-person" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <Script id="jsonld-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <Script id="jsonld-service" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }} />
      </body>
    </html>
  );
}
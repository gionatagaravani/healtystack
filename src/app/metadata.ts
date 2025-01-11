import { Metadata } from 'next'

const siteUrl = process.env.SITE_URL || 'https://healtystack.com'

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  verification: {
    google: '31HJMvtPjYHguU7FBmRhXjGvm6atlTIuC-ImaIZeSzI',
  },
  title: {
    default: 'HealtyStack',
    template: '%s | HealtyStack',
  },
  description: 'Discover proven strategies and insights to boost your productivity and achieve your goals.',
  keywords: [
    'productivity',
    'time management',
    'deep work',
    'personal development',
    'goal setting',
    'efficiency',
    'work-life balance',
  ],
  authors: [{ name: 'Christina Anderson' }],
  creator: 'Christina Anderson',
  publisher: 'HealtyStack',
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'HealtyStack',
    title: 'HealtyStack',
    description: 'Discover proven strategies and insights to boost your productivity and achieve your goals.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'HealtyStack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HealtyStack',
    description: 'Discover proven strategies and insights to boost your productivity and achieve your goals.',
    images: ['/og-image.png'],
  },
}

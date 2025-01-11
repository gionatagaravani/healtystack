import { Lora, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { defaultMetadata } from './metadata'
import JsonLd from '@/components/JsonLd'

const lora = Lora({ 
  subsets: ['latin'],
  variable: '--font-lora',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${lora.variable} ${playfair.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className={`${lora.className} min-h-screen bg-recipe-light/20`}>
        <Header />
        <main className="container mx-auto px-4 py-8 max-w-6xl min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  adjustFontFallback: false
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff'
}

export const metadata: Metadata = {
  title: 'Polga Tarım - Kaliteli Tarım Ürünleri',
  description: 'Polga Tarım, kaliteli tarım ürünleri ve profesyonel çözümler sunan güvenilir bir markadır.',
  manifest: '/manifest.json',
  icons: {
    icon: '/PT_logo_rmv.png',
    apple: '/PT_logo_rmv.png',
    shortcut: '/PT_logo_rmv.png'
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Polga Tarım'
  },
  formatDetection: {
    telephone: false
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/PT_logo_rmv.png" as="image" type="image/png" />
        <link rel="preload" href="/polga_banner.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/about_banner.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/p1.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/p2.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/p3.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/p4.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/p5.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/p6.jpg" as="image" type="image/jpeg" />
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
} 
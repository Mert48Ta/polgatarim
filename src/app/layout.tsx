import type { Metadata, Viewport } from 'next'
import { Inter, Noto_Sans_Arabic } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  display: 'swap',
  preload: true,
  adjustFontFallback: false,
  variable: '--font-inter',
})

const notoArabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  display: 'swap',
  preload: true,
  variable: '--font-arabic',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: 'Polga Tarım - Kaliteli Tarım Ürünleri',
  description:
    'Polga Tarım, kaliteli tarım ürünleri ve profesyonel çözümler sunan güvenilir bir markadır.',
  manifest: '/manifest.json',
  icons: {
    icon: '/PT_logo_rmv.png',
    apple: '/PT_logo_rmv.png',
    shortcut: '/PT_logo_rmv.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Polga Tarım',
  },
  formatDetection: {
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
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
      <body className={`${inter.variable} ${notoArabic.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}

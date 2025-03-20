import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Polga Tarım',
  description: 'Modern peyzaj çözümleri ve tarım ürünleri',
  keywords: 'peyzaj, bahçe tasarımı, villa bahçesi, site peyzajı, park tasarımı',
  authors: [{ name: 'Polga Tarım' }],
  openGraph: {
    title: 'Polga Tarım - Peyzaj ve Bahçe Tasarımı',
    description: 'Profesyonel peyzaj mimarlığı ve bahçe tasarımı hizmetleri.',
    images: [
      {
        url: '/PT_logo_rmv.png',
        width: 1200,
        height: 630,
        alt: 'Polga Tarım',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Polga Tarım - Peyzaj ve Bahçe Tasarımı',
    description: 'Profesyonel peyzaj mimarlığı ve bahçe tasarımı hizmetleri.',
    images: ['/PT_logo_rmv.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
  manifest: '/manifest.json',
  icons: {
    icon: '/PT_logo_rmv.png',
    apple: '/PT_logo_rmv.png',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Polga Tarım',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'application-name': 'Polga Tarım',
  },
  alternates: {
    canonical: 'https://polgatarim.com.tr',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 
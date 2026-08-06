'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { defaultLocale } from '@/i18n/locales'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace(`/${defaultLocale}/`)
  }, [router])

  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500">Polga Tarım...</p>
    </main>
  )
}

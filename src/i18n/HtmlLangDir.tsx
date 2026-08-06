'use client'

import { useEffect } from 'react'
import type { Locale } from './locales'
import { isRtlLocale } from './locales'

export default function HtmlLangDir({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = isRtlLocale(locale) ? 'rtl' : 'ltr'
  }, [locale])

  return null
}

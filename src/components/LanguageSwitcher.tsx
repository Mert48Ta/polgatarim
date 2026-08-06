'use client'

import { usePathname, useRouter } from 'next/navigation'
import {
  localeLabels,
  localeNames,
  locales,
  type Locale,
} from '@/i18n/locales'
import { useDictionary } from '@/i18n/DictionaryProvider'

const STORAGE_KEY = 'polga-locale'

export default function LanguageSwitcher({
  scrolled = false,
}: {
  scrolled?: boolean
}) {
  const { locale, dictionary } = useDictionary()
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return

    try {
      localStorage.setItem(STORAGE_KEY, nextLocale)
    } catch {
      // ignore storage errors
    }

    const segments = pathname.split('/').filter(Boolean)
    if (segments.length === 0) {
      router.push(`/${nextLocale}/`)
      return
    }

    segments[0] = nextLocale
    router.push(`/${segments.join('/')}/`)
  }

  return (
    <div className="relative">
      <label className="sr-only">{dictionary.langSwitcher.label}</label>
      <select
        value={locale}
        onChange={(e) => switchLocale(e.target.value as Locale)}
        aria-label={dictionary.langSwitcher.label}
        className={`appearance-none rounded-md border px-2 py-1 text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--primary)] ${
          scrolled
            ? 'bg-white border-gray-200 text-gray-800'
            : 'bg-white/90 border-white/40 text-gray-800'
        }`}
      >
        {locales.map((code) => (
          <option key={code} value={code}>
            {localeLabels[code]} — {localeNames[code]}
          </option>
        ))}
      </select>
    </div>
  )
}

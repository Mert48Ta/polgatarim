export const locales = ['tr', 'en', 'de', 'ru', 'ar'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'tr'

export const localeLabels: Record<Locale, string> = {
  tr: 'TR',
  en: 'EN',
  de: 'DE',
  ru: 'RU',
  ar: 'AR',
}

export const localeNames: Record<Locale, string> = {
  tr: 'Türkçe',
  en: 'English',
  de: 'Deutsch',
  ru: 'Русский',
  ar: 'العربية',
}

export const rtlLocales: Locale[] = ['ar']

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}

export function isRtlLocale(locale: Locale): boolean {
  return rtlLocales.includes(locale)
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Footer from '@/components/Footer'
import { DictionaryProvider } from '@/i18n/DictionaryProvider'
import { getDictionary } from '@/i18n/getDictionary'
import HtmlLangDir from '@/i18n/HtmlLangDir'
import { isValidLocale, locales, type Locale } from '@/i18n/locales'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export function generateMetadata({
  params,
}: {
  params: { locale: string }
}): Metadata {
  if (!isValidLocale(params.locale)) {
    return {}
  }

  const dictionary = getDictionary(params.locale)

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
  }
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  if (!isValidLocale(params.locale)) {
    notFound()
  }

  const locale = params.locale as Locale
  const dictionary = getDictionary(locale)

  return (
    <DictionaryProvider locale={locale} dictionary={dictionary}>
      <HtmlLangDir locale={locale} />
      {children}
      <Footer />
    </DictionaryProvider>
  )
}

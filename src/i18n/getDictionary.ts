import type { Locale } from './locales'
import type { Dictionary } from './types'
import tr from './dictionaries/tr.json'
import en from './dictionaries/en.json'
import de from './dictionaries/de.json'
import ru from './dictionaries/ru.json'
import ar from './dictionaries/ar.json'

const dictionaries: Record<Locale, Dictionary> = {
  tr,
  en,
  de,
  ru,
  ar,
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.tr
}

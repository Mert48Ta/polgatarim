'use client'

import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { useDictionary } from '@/i18n/DictionaryProvider'

export default function Footer() {
  const { locale, dictionary } = useDictionary()
  const t = dictionary.footer
  const nav = dictionary.nav
  const homePath = `/${locale}/`

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t.aboutTitle}</h3>
            <p className="text-gray-400">{t.aboutText}</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={homePath}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/hakkimizda/`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={`${homePath}#hizmetler`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {nav.services}
                </Link>
              </li>
              <li>
                <Link
                  href={`${homePath}#projeler`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {nav.projects}
                </Link>
              </li>
              <li>
                <Link
                  href={`${homePath}#iletisim`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t.contactTitle}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{t.address}</li>
              <li>{t.phone}</li>
              <li>{t.email}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t.socialTitle}</h3>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://wa.me/905444030215"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

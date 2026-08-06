'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'
import { usePathname, useRouter } from 'next/navigation'
import LanguageSwitcher from './LanguageSwitcher'
import { useDictionary } from '@/i18n/DictionaryProvider'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { locale, dictionary } = useDictionary()
  const t = dictionary.nav

  const homePath = `/${locale}/`
  const menuItems = [
    { title: t.home, href: homePath },
    { title: t.services, href: `${homePath}#hizmetler` },
    { title: t.projects, href: `${homePath}#projeler` },
    { title: t.about, href: `/${locale}/hakkimizda/` },
    { title: t.contact, href: `${homePath}#iletisim` },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome =
    pathname === `/${locale}` ||
    pathname === `/${locale}/` ||
    pathname === homePath

  const handleClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    const hashIndex = href.indexOf('#')

    if (hashIndex !== -1) {
      const path = href.substring(0, hashIndex) || homePath
      const elementId = href.substring(hashIndex + 1)

      if (!isHome) {
        router.push(path)
        setTimeout(() => {
          document.getElementById(elementId)?.scrollIntoView({
            behavior: 'smooth',
          })
        }, 150)
      } else {
        document.getElementById(elementId)?.scrollIntoView({
          behavior: 'smooth',
        })
      }
    } else {
      router.push(href)
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <Link href={homePath} className="relative w-48 h-16">
            <Image
              src="/PT_logo_rmv.png"
              alt={t.logoAlt}
              fill
              className="object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={(e) => handleClick(item.href, e)}
                className="text-gray-800 hover:text-[var(--primary)] transition-colors"
              >
                {item.title}
              </a>
            ))}
            <LanguageSwitcher scrolled={isScrolled} />
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher scrolled={isScrolled || isOpen} />
            <button
              className="text-2xl"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? (
                <FiX className={isScrolled ? 'text-gray-800' : 'text-white'} />
              ) : (
                <FiMenu
                  className={isScrolled ? 'text-gray-800' : 'text-white'}
                />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={(e) => handleClick(item.href, e)}
                  className="block py-2 text-gray-800 hover:text-[var(--primary)] transition-colors"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

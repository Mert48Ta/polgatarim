'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

const menuItems = [
  { title: 'Ana Sayfa', href: '/' },
  { title: 'Hizmetler', href: '/#hizmetler' },
  { title: 'Projeler', href: '/#projeler' },
  { title: 'Hakkımızda', href: '/hakkimizda' },
  { title: 'İletişim', href: '/#iletisim' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault()
    if (href.startsWith('/#')) {
      // Eğer ana sayfada değilsek, önce ana sayfaya gidelim
      if (window.location.pathname !== '/') {
        router.push('/')
        // Ana sayfaya yönlendikten sonra scroll yapalım
        setTimeout(() => {
          const elementId = href.substring(2)
          const element = document.getElementById(elementId)
          element?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        // Ana sayfadaysak direkt scroll yapalım
        const elementId = href.substring(2)
        const element = document.getElementById(elementId)
        element?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Normal sayfa yönlendirmesi
      router.push(href)
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="relative w-48 h-16">
            <Image
              src="/PT_logo_rmv.png"
              alt="Polga Tarım Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
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
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FiX className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <FiMenu className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
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
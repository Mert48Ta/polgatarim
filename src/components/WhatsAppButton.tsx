'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { useDictionary } from '@/i18n/DictionaryProvider'

export default function WhatsAppButton() {
  const { dictionary } = useDictionary()
  const phoneNumber = '905444030215'
  const message = dictionary.whatsapp.message

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-8 end-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-50 hover:bg-[#128C7E] transition-colors"
      aria-label={dictionary.whatsapp.ariaLabel}
    >
      <FaWhatsapp className="text-3xl" />
    </motion.button>
  )
}

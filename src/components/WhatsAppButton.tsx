'use client'

import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const phoneNumber = '905444030215' // WhatsApp numaranız
  const message = 'Merhaba, bilgi almak istiyorum.' // Varsayılan mesaj

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
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg z-50 hover:bg-[#128C7E] transition-colors"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <FaWhatsapp className="text-3xl" />
    </motion.button>
  )
} 
'use client'

import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useDictionary } from '@/i18n/DictionaryProvider'

const contactMeta = {
  socialMedia: {
    facebook: 'https://facebook.com/polgatarim',
    instagram:
      'https://www.instagram.com/polga_tarm_peyzaj?igsh=MXRobW5namI1aWFqbg==',
    whatsapp: 'https://wa.me/905444030215',
  },
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.0341350963!2d27.599923!3d37.182565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14be5fc047dc0c03%3A0x58a596b72b0459c8!2sPolga%20Tar%C4%B1m%20Peyzaj!5e0!3m2!1str!2str!4v1710425160893!5m2!1str!2str',
}

export default function Contact() {
  const { dictionary } = useDictionary()
  const t = dictionary.contact

  return (
    <section id="iletisim" className="py-20 bg-gray-50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          {t.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          {t.subtitle}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">{t.formTitle}</h3>
            <form
              action="https://formspree.io/f/xayrdyrw"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  {t.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  {t.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  {t.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                {t.submit}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <FiMapPin className="text-2xl text-[var(--primary)] mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">{t.addressLabel}</h4>
                <p className="text-gray-600">{t.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiPhone className="text-2xl text-[var(--primary)] mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">{t.phoneLabel}</h4>
                <p className="text-gray-600">{t.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiMail className="text-2xl text-[var(--primary)] mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">{t.emailLabel}</h4>
                <p className="text-gray-600">{t.emailValue}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FiClock className="text-2xl text-[var(--primary)] mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">{t.hoursLabel}</h4>
                <p className="text-gray-600">{t.workingHours}</p>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href={contactMeta.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-[var(--primary)] transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href={contactMeta.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-[var(--primary)] transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href={contactMeta.socialMedia.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-[var(--primary)] transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>

            <div className="mt-8 h-64 rounded-lg overflow-hidden bg-gray-200">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <iframe
                  src={contactMeta.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

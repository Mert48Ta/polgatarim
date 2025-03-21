'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import WhatsAppButton from '../../components/WhatsAppButton'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full">
        <Image
          src="/about_banner.jpg"
          alt="Hakkımızda"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white text-center"
          >
            Hakkımızda
          </motion.h1>
        </div>
      </section>

      {/* Hikayemiz Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
              <p className="text-gray-600 mb-4">
                2010 yılında kurulan Polga Tasarım, peyzaj mimarlığı ve bahçe tasarımı alanında
                uzmanlaşmış bir firmadır. Müşterilerimize en kaliteli hizmeti sunmak için
                sürekli kendimizi geliştiriyor ve yenilikçi çözümler üretiyoruz.
              </p>
              <p className="text-gray-600">
                Deneyimli ekibimiz ve modern yaklaşımımızla, her projeye özgün bir dokunuş
                katıyor ve müşterilerimizin hayallerini gerçeğe dönüştürüyoruz.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/PT_logo_rmv.png"
                alt="Hikayemiz"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Misyon & Vizyon Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Misyonumuz</h3>
              <p className="text-gray-600">
                Doğayla uyumlu, sürdürülebilir ve estetik peyzaj tasarımları oluşturarak,
                yaşam alanlarını daha güzel ve kullanışlı hale getirmek.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizyonumuz</h3>
              <p className="text-gray-600">
                Türkiye'nin önde gelen peyzaj mimarlığı firmalarından biri olarak,
                sektörde standartları belirleyen ve yenilikçi çözümler sunan bir marka olmak.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 text-center mb-12"
          >
            Değerlerimiz
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Kalite',
                description: 'Her projede en yüksek kalite standartlarını hedefliyoruz.'
              },
              {
                title: 'Sürdürülebilirlik',
                description: 'Çevre dostu ve sürdürülebilir çözümler üretiyoruz.'
              },
              {
                title: 'Müşteri Memnuniyeti',
                description: 'Müşterilerimizin beklentilerini aşmak için çalışıyoruz.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton />
    </main>
  )
} 
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaHouse, FaCity, FaTree } from 'react-icons/fa6'

// NOT: Aşağıdaki kategoriler örnek verilerdir. İstediğiniz gibi düzenleyebilirsiniz.
const categories = [
  'Tümü',
  'Villa Bahçeleri',
  'Site Peyzajı',
  'Park ve Rekreasyon',
]

// NOT: Aşağıdaki projeler örnek verilerdir. İstediğiniz gibi düzenleyebilirsiniz.
const projects = [
  {
    title: 'Modern Villa Bahçesi',
    category: 'Villa Bahçeleri',
    image: '/images/p1.jpg',
    // Detaylar: 'Lokasyon: İstanbul, Alan: 500m², Süre: 2 ay'
  },
  {
    title: 'Yeşil Site Projesi',
    category: 'Site Peyzajı',
    image: '/images/p2.jpg',
    // Detaylar: 'Lokasyon: Ankara, Alan: 2000m², Süre: 6 ay'
  },
  {
    title: 'Şehir Parkı Düzenlemesi',
    category: 'Park ve Rekreasyon',
    image: '/images/p3.jpg',
    // Detaylar: 'Lokasyon: Bursa, Alan: 5000m², Süre: 8 ay'
  },
  {
    title: 'Lüks Konut Bahçesi',
    category: 'Villa Bahçeleri',
    image: '/images/p4.jpg',
    // Detaylar: 'Lokasyon: Bodrum, Alan: 800m², Süre: 3 ay'
  },
  {
    title: 'Rezidans Peyzaj Projesi',
    category: 'Site Peyzajı',
    image: '/images/p5.jpg',
    // Detaylar: 'Lokasyon: İstanbul, Alan: 1500m², Süre: 4 ay'
  },
  {
    title: 'Özel Villa Bahçesi',
    category: 'Villa Bahçeleri',
    image: '/images/p6.jpg',
    // Detaylar: 'Lokasyon: Antalya, Alan: 1200m², Süre: 5 ay'
  },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')

  const filteredProjects = projects.filter(
    project => selectedCategory === 'Tümü' || project.category === selectedCategory
  )

  return (
    <section id="projeler" className="py-20">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Projelerimiz
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          Tamamladığımız bazı projelerimizi inceleyebilirsiniz
        </motion.p>

        {/* Kategori Filtreleri */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-[var(--primary)] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Proje Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-col justify-center items-center h-full text-white p-4">
                    <h3 className="text-xl font-semibold text-center mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-center text-gray-200">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
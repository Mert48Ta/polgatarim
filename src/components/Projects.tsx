'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useDictionary } from '@/i18n/DictionaryProvider'

const projectImages = [
  '/images/p1.jpg',
  '/images/p2.jpg',
  '/images/p3.jpg',
  '/images/p4.jpg',
  '/images/p5.jpg',
  '/images/p6.jpg',
]

export default function Projects() {
  const { dictionary } = useDictionary()
  const t = dictionary.projects
  const allKey = 'all'
  const [selectedCategory, setSelectedCategory] = useState(allKey)

  const categories = [
    { key: allKey, label: t.categories.all },
    { key: 'villaGardens', label: t.categories.villaGardens },
  ]

  const projects = t.items.map((item, index) => ({
    ...item,
    image: projectImages[index],
  }))

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === allKey || project.categoryKey === selectedCategory
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

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category.key
                  ? 'bg-[var(--primary)] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`}
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
                      {t.categories.villaGardens}
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

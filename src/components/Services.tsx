'use client'

import { motion } from 'framer-motion'
import { FaTree, FaWater, FaPencilRuler, FaSeedling, FaCog, FaLeaf, FaFlask } from 'react-icons/fa'

// NOT: Aşağıdaki veriler örnek verilerdir. İstediğiniz gibi düzenleyebilirsiniz.
const services = [
  {
    icon: FaPencilRuler,
    title: 'Peyzaj Tasarımı',
    description: 'Modern ve fonksiyonel bahçe tasarımları',
    // Detay ekleyebilirsiniz: 'Özel villa bahçeleri, Site peyzajı, Park ve rekreasyon alanları'
  },
  {
    icon: FaWater,
    title: 'Sulama Sistemleri', 
    description: 'Otomatik sulama sistemi kurulumu ve bakımı',
    // Detay ekleyebilirsiniz: 'Damla sulama, Yağmurlama sistemi, Akıllı sulama kontrolü'
  },
  {
    icon: FaPencilRuler,
    title: 'Proje Planlama',
    description: '3D görselleştirme ile detaylı proje planlaması',
    // Detay ekleyebilirsiniz: 'CAD çizimleri, 3D modelleme, Maliyet analizi'
  },
  {
    icon: FaLeaf,
    title: 'Bitki Satışı',
    description: 'Geniş bitki çeşitleri ve toptan satış',
    // Detay ekleyebilirsiniz: 'Mevsimlik çiçekler, Ağaçlar, Çalılar, Süs bitkileri'
  },
  {
    icon: FaCog,
    title: 'Bakım Hizmetleri',
    description: 'Düzenli bahçe bakımı ve peyzaj yenileme',
    // Detay ekleyebilirsiniz: 'Çim biçme, Budama, Gübreleme, Hastalık kontrolü'
  },
  {
    icon: FaFlask,
    title: 'Gübre',
    description: 'Organik ve kimyasal gübre çeşitleri',
    // Detay ekleyebilirsiniz: 'NPK gübreler, Organik gübreler, Yaprak gübreleri'
  },
  {
    icon: FaSeedling,
    title: 'Tohum',
    description: 'Kaliteli ve sertifikalı tohum çeşitleri',
    // Detay ekleyebilirsiniz: 'Sebze tohumları, Çim tohumları, Çiçek tohumları'
  },
  {
    icon: FaCog,
    title: 'Makine',
    description: 'Modern tarım ve bahçe makineleri',
    // Detay ekleyebilirsiniz: 'İlaçlama makineleri, Çim biçme makineleri, Toprak işleme'
  },
  {
    icon: FaTree,
    title: 'Bitki',
    description: 'Geniş bitki ve fide çeşitleri',
    // Detay ekleyebilirsiniz: 'Meyve fidanları, Süs bitkileri, Mevsimlik çiçekler'
  }
]

// NOT: Aşağıdaki istatistikler örnek verilerdir. İstediğiniz gibi düzenleyebilirsiniz.
const stats = [
  {
    number: '250+',
    label: 'Tamamlanan Proje',
    // Gerçek sayıyı girebilirsiniz
  },
  {
    number: '15+',
    label: 'Uzman Ekip',
    // Gerçek ekip sayısını girebilirsiniz
  },
  {
    number: '10+',
    label: 'Yıllık Deneyim',
    // Gerçek deneyim sürenizi girebilirsiniz
  },
  {
    number: '98%',
    label: 'Müşteri Memnuniyeti',
    // İsterseniz bu istatistiği değiştirebilirsiniz
  },
]

export default function Services() {
  return (
    <section id="hizmetler" className="py-20 bg-gray-50">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Hizmetlerimiz
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-subtitle"
        >
          Profesyonel ekibimizle modern peyzaj çözümleri sunuyoruz
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="text-4xl text-[var(--primary)] mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[var(--primary)] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 
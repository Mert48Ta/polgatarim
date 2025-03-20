import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import WhatsAppButton from '@/components/WhatsAppButton'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Contact />
      <WhatsAppButton />
      <Image
        src="/images/polga_banner.jpg"
        alt="Polga Tarım Banner"
        fill
        className="object-cover"
        priority
      />
    </main>
  )
} 
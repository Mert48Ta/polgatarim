# Polga Tarım Web Sitesi - Detaylı Teknik Dokümantasyon

## İçindekiler

1. [Proje Yapısı ve Temel Kodlar](#1-proje-yapısı-ve-temel-kodlar)
2. [Bileşen Detayları](#2-bileşen-detayları)
3. [Stil Sistemi](#3-stil-sistemi)
4. [SEO ve Meta Etiketler](#4-seo-ve-meta-etiketler)
5. [Performans Optimizasyonları](#5-performans-optimizasyonları)
6. [Animasyon Sistemi](#6-animasyon-sistemi)
7. [Güvenlik ve Optimizasyon](#7-güvenlik-ve-optimizasyon)

## 1. Proje Yapısı ve Temel Kodlar

### Next.js Yapılandırması (next.config.js)

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Statik site oluşturma
  images: {
    unoptimized: true, // Netlify için resim optimizasyonu
    domains: ["images.unsplash.com"], // İzin verilen resim domainleri
  },
  trailingSlash: true, // URL sonlarına / ekleme
};
```

### TypeScript Yapılandırması (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "es5", // JavaScript versiyonu
    "lib": ["dom", "esnext"], // Kullanılacak kütüphaneler
    "baseUrl": ".", // Mutlak import yolları için
    "paths": {
      "@/*": ["src/*"] // Kısa yol importları
    }
  }
}
```

### Netlify Yapılandırması (netlify.toml)

```toml
[build]
  command = "npm run build"    // Build komutu
  publish = "out"             // Yayınlanacak klasör

[[redirects]]
  from = "/*"                 // Tüm URL'ler için
  to = "/index.html"         // Ana sayfaya yönlendirme
  status = 200              // HTTP başarı kodu
```

## 2. Bileşen Detayları

### Navbar Bileşeni (src/components/Navbar.tsx)

```typescript
"use client"; // Client-side rendering için

interface MenuItem {
  title: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { title: "Ana Sayfa", href: "/" },
  { title: "Hizmetler", href: "/#hizmetler" },
  { title: "Projeler", href: "/#projeler" },
  { title: "Hakkımızda", href: "/hakkimizda" },
  { title: "İletişim", href: "/#iletisim" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobil menü durumu
  const [isScrolled, setIsScrolled] = useState(false); // Scroll durumu

  // Scroll olayını dinleme
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sayfa içi kaydırma
  const handleClick = (href: string) => {
    if (href.startsWith("/#")) {
      const elementId = href.substring(2);
      const element = document.getElementById(elementId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };
}
```

### Hero Bileşeni (src/components/Hero.tsx)

```typescript
"use client";

export default function Hero() {
  return (
    <div className="relative h-screen">
      {/* Arka plan resmi */}
      <Image
        src="/polga_banner.jpg"
        alt="Polga Tarım Banner"
        fill
        className="object-cover"
        priority // Hızlı yükleme için öncelik
      />

      {/* Animasyonlu içerik */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }} // Başlangıç durumu
        animate={{ opacity: 1, y: 0 }} // Animasyon
        transition={{ duration: 0.8 }} // Süre
      >
        Modern Peyzaj Çözümleri
      </motion.h1>
    </div>
  );
}
```

### Projects Bileşeni (src/components/Projects.tsx)

```typescript
interface Project {
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Modern Villa Bahçesi",
    category: "Villa Bahçeleri",
    image: "/images/p1.jpg",
  },
  // ... diğer projeler
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  // Proje filtreleme
  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "Tümü" || project.category === selectedCategory
  );

  return (
    <section id="projeler">
      {/* Kategori filtreleri */}
      <div className="flex gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`${
              selectedCategory === category ? "bg-primary" : "bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Proje grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            layout // Grid animasyonu için
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Proje kartı */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

### WhatsApp Butonu (src/components/WhatsAppButton.tsx)

```typescript
"use client";

export default function WhatsAppButton() {
  const phoneNumber = "905444030215";
  const message = encodeURIComponent("Merhaba, bilgi almak istiyorum.");

  return (
    <motion.button
      initial={{ scale: 0 }} // Başlangıçta görünmez
      animate={{ scale: 1 }} // Görünür hale gelme
      whileHover={{ scale: 1.1 }} // Hover efekti
      whileTap={{ scale: 0.9 }} // Tıklama efekti
      onClick={() => {
        window.open(`https://wa.me/${phoneNumber}?text=${message}`);
      }}
      className="fixed bottom-8 right-8 bg-[#25D366]" // WhatsApp yeşili
    >
      <FaWhatsapp className="text-3xl" />
    </motion.button>
  );
}
```

## 3. Stil Sistemi

### Tailwind CSS Kullanımı

```css
/* Özel renkler */
:root {
  --primary: #4caf50; /* Ana renk */
  --secondary: #2e7d32; /* İkincil renk */
}

/* Özel sınıflar */
.btn-primary {
  @apply bg-[var(--primary)] 
         text-white 
         px-6 
         py-2 
         rounded-full 
         hover:bg-[var(--secondary)] 
         transition-colors;
}

/* Responsive tasarım */
.grid-layout {
  @apply grid 
         grid-cols-1        /* Mobil: tek sütun */
         md:grid-cols-2    /* Tablet: 2 sütun */
         lg:grid-cols-3    /* Masaüstü: 3 sütun */
         gap-8;
}
```

## 4. SEO ve Meta Etiketler

### Layout Yapılandırması (src/app/layout.tsx)

```typescript
export const metadata: Metadata = {
  title: "Polga Tarım",
  description: "Modern peyzaj çözümleri ve tarım ürünleri",
  openGraph: {
    title: "Polga Tarım",
    description: "Modern peyzaj çözümleri",
    images: [
      {
        url: "/PT_logo_rmv.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: {
    icon: "/PT_logo_rmv.png", // Favicon
    apple: "/PT_logo_rmv.png", // Apple touch icon
  },
};
```

## 5. Performans Optimizasyonları

### Resim Optimizasyonu

```typescript
// Next.js Image komponenti kullanımı
<Image
  src="/project1.jpg"
  alt="Proje 1"
  width={800}
  height={600}
  loading="lazy" // Lazy loading
  quality={75} // Resim kalitesi
  placeholder="blur" // Yükleme efekti
/>
```

### Code Splitting

```typescript
// Dinamik import
const DynamicComponent = dynamic(() => import("./HeavyComponent"), {
  loading: () => <Loading />, // Yükleme komponenti
  ssr: false, // Client-side rendering
});
```

## 6. Animasyon Sistemi

### Framer Motion Kullanımı

```typescript
// Sayfa geçiş animasyonu
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}

<motion.div
  variants={pageVariants}
  initial="initial"
  animate="animate"
  exit="exit"
  transition={{ duration: 0.5 }}
>
  {/* Sayfa içeriği */}
</motion.div>
```

## 7. Güvenlik ve Optimizasyon

### Content Security Policy

```typescript
// next.config.js
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: `
      default-src 'self';
      img-src 'self' data: https:;
      script-src 'self' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
    `,
  },
];
```

## Önemli Notlar

1. **Geliştirme Ortamı**

   - Node.js 18+
   - npm 10+
   - VS Code editörü önerilir

2. **Deployment**

   - Netlify üzerinde host ediliyor
   - Otomatik build ve deployment
   - SSL sertifikası aktif

3. **Bakım**

   - Düzenli npm güncellemeleri
   - Performans monitörleme
   - SEO takibi

4. **İletişim**
   - Teknik destek: [E-posta adresi]
   - Proje yöneticisi: [İsim]
   - GitHub repository: [URL]

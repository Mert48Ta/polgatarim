/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'], // Eğer harici görseller kullanacaksanız buraya domain ekleyin
  },
  trailingSlash: true,
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
  },
  webpack: (config, { dev, isServer }) => {
    // Preload için webpack yapılandırması
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups = {
        ...config.optimization.splitChunks.cacheGroups,
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          priority: 20,
        },
      }
    }
    return config
  },
}

module.exports = nextConfig 
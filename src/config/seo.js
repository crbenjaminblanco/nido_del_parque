export const DEFAULT_SEO_CONFIG = {
  title: 'Nido del Parque - Tu Escape Perfecto en la Naturaleza',
  titleTemplate: '%s | Nido del Parque',
  description: 'Descubre Nido del Parque, un refugio único rodeado de naturaleza en Zarcero, Costa Rica. Experimenta la tranquilidad y el confort en nuestras cabañas exclusivas cerca del parque.',
  keywords: 'nido del parque, cabañas, Zarcero, Costa Rica, parque nacional, naturaleza, hospedaje, descanso, turismo, alojamiento, vacaciones Costa Rica, cabañas Zarcero, turismo Zarcero, alojamiento Costa Rica, montaña, clima fresco',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://nidodelparque.com',
    siteName: 'Nido del Parque',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nido del Parque - Vista panorámica en Zarcero, Costa Rica'
      }
    ]
  },
  twitter: {
    handle: '@nidodelparque',
    site: '@nidodelparque',
    cardType: 'summary_large_image'
  }
}

export const generateMetaTags = (config = {}) => {
  const finalConfig = { ...DEFAULT_SEO_CONFIG, ...config }
  
  return {
    title: finalConfig.title,
    meta: [
      { name: 'description', content: finalConfig.description },
      { name: 'keywords', content: finalConfig.keywords },
      
      // Open Graph
      { property: 'og:type', content: finalConfig.openGraph.type },
      { property: 'og:title', content: finalConfig.title },
      { property: 'og:description', content: finalConfig.description },
      { property: 'og:url', content: finalConfig.openGraph.url },
      { property: 'og:site_name', content: finalConfig.openGraph.siteName },
      { property: 'og:locale', content: finalConfig.openGraph.locale },
      { property: 'og:image', content: finalConfig.openGraph.images[0].url },
      { property: 'og:image:width', content: finalConfig.openGraph.images[0].width },
      { property: 'og:image:height', content: finalConfig.openGraph.images[0].height },
      { property: 'og:image:alt', content: finalConfig.openGraph.images[0].alt },
      
      // Twitter
      { name: 'twitter:card', content: finalConfig.twitter.cardType },
      { name: 'twitter:site', content: finalConfig.twitter.site },
      { name: 'twitter:creator', content: finalConfig.twitter.handle },
      { name: 'twitter:title', content: finalConfig.title },
      { name: 'twitter:description', content: finalConfig.description },
      { name: 'twitter:image', content: finalConfig.openGraph.images[0].url },
      { name: 'twitter:image:alt', content: finalConfig.openGraph.images[0].alt },
      
      // Additional SEO
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' }
    ],
    link: [
      { rel: 'canonical', href: finalConfig.openGraph.url }
    ]
  }
} 
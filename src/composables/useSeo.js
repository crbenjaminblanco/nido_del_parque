import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { generateMetaTags, DEFAULT_SEO_CONFIG } from '@/config/seo'

export function useSeo(config = {}) {
  const route = useRoute()
  const currentMetaTags = ref([])
  
  // Function to update document title and meta tags
  const updateMetaTags = (newConfig = {}) => {
    const metaConfig = generateMetaTags(newConfig)
    
    // Update title
    document.title = metaConfig.title
    
    // Remove existing meta tags
    currentMetaTags.value.forEach(tag => tag.remove())
    currentMetaTags.value = []
    
    // Add new meta tags
    metaConfig.meta.forEach(meta => {
      const tag = document.createElement('meta')
      Object.entries(meta).forEach(([key, value]) => {
        tag.setAttribute(key, value)
      })
      document.head.appendChild(tag)
      currentMetaTags.value.push(tag)
    })
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (!canonicalLink) {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalLink)
    }
    canonicalLink.setAttribute('href', metaConfig.link[0].href)
  }
  
  // Watch for route changes to update meta tags
  watch(
    () => route.path,
    () => {
      const routeConfig = {
        ...DEFAULT_SEO_CONFIG,
        ...config,
        openGraph: {
          ...DEFAULT_SEO_CONFIG.openGraph,
          url: `${DEFAULT_SEO_CONFIG.openGraph.url}${route.path}`
        }
      }
      updateMetaTags(routeConfig)
    },
    { immediate: true }
  )
  
  return {
    updateMetaTags
  }
} 
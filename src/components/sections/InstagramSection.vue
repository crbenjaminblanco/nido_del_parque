<template>
  <div class="instagram" ref="instagramContainer">
    <div v-if="!instagramLoaded" class="instagram__placeholder">
      {{ $t('social.instagram.loadingText') }}
    </div>
    <blockquote 
      class="instagram__embed instagram-media" 
      :data-instgrm-permalink="instagramUrl"
      data-instgrm-version="14"
      :lang="currentLanguage"
      :title="$t('social.instagram.embedTitle')"
    >
    </blockquote>
  </div>
</template>

<script>
import { CONTACT_INFO } from '@/config/contact'

export default {
  name: 'InstagramSection',
  
  data() {
    return {
      instagramLoaded: false
    }
  },

  computed: {
    currentLanguage() {
      return this.$i18n.locale
    },
    instagramUrl() {
      return CONTACT_INFO.INSTAGRAM_URL
    }
  },

  mounted() {
    this.loadInstagramEmbed()
  },

  methods: {
    loadInstagramEmbed() {
      // Remove any existing Instagram embed script
      const existingScript = document.getElementById('instagram-embed-script')
      if (existingScript) {
        existingScript.remove()
      }

      // Create and add new script
      const script = document.createElement('script')
      script.id = 'instagram-embed-script'
      script.async = true
      script.defer = true
      script.src = 'https://www.instagram.com/embed.js'
      
      script.onload = () => {
        if (window.instgrm) {
          window.instgrm.Embeds.process()
          this.instagramLoaded = true
        }
      }

      document.body.appendChild(script)
    }
  }
}
</script>

<style scoped>
.instagram {
  position: relative;
  width: 100%;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 25rem;
  max-width: 37.5rem;
  margin: 0 auto;
}

.instagram__placeholder {
  background-color: var(--bg-primary);
  padding: var(--spacing-xl);
  text-align: center;
  color: var(--text-muted);
  border-radius: var(--border-radius-md);
  width: 100%;
}

.instagram__embed {
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
}

:deep(.instagram-media) {
  background: var(--bg-primary);
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  margin: var(--spacing-xs);
  padding: 0;
  width: 100% !important;
  max-width: 100% !important;
}

.instagram__title {
  font-family: var(--font-primary);
  font-size: var(--text-2xl);
  font-weight: var(--font-weight-semibold);
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
  letter-spacing: var(--letter-spacing-wide);
}

.instagram__subtitle {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  color: var(--text-muted);
  margin-bottom: var(--spacing-lg);
  line-height: var(--line-height-relaxed);
}

@media (max-width: 48rem) {
  .instagram {
    padding: var(--spacing-md);
    max-width: 100%;
  }
}
</style> 
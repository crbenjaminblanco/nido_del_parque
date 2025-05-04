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
import { CONTACT_INFO } from '../config/contact'

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
  min-height: 400px;
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
  margin: 0 auto !important;
  width: 100% !important;
  max-width: 540px !important;
}

:deep(.instagram-media) {
  background: #FFF !important;
  border: 0 !important;
  border-radius: 3px !important;
  box-shadow: 0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15) !important;
  margin: 1px !important;
  padding: 0 !important;
  width: 99.375% !important;
}
</style> 
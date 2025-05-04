<template>
  <section id="hero-section" class="hero-section">
    <div class="overlay"></div>
    
    <!-- Main Content -->
    <div class="main-content">
      <div class="text-center text-white">
        <div class="hero-content">
          <h1 class="display-1 font-primary-color">{{ title }}</h1>
          <p class="lead mb-3 font-primary-color">{{ welcomeMessage }}</p>
          <contact-button 
            :phone-number="whatsappNumber"
            :label="contactButtonLabel"
          />
        </div>
      </div>
    </div>
    
    <!-- Scroll Section -->
    <div class="scroll-section">
      <scroll-indicator 
        :text="scrollText"
        @click="scrollToNextSection"
      />
    </div>
  </section>
</template>

<script>
import ContactButton from './ui/ContactButton.vue'
import ScrollIndicator from './ui/ScrollIndicator.vue'
import { CONTACT_INFO } from '../config/contact'

export default {
  name: 'HeroSection',

  components: {
    ContactButton,
    ScrollIndicator
  },

  computed: {
    title() {
      return this.$t('hero.title')
    },
    welcomeMessage() {
      return this.$t('hero.welcome')
    },
    contactButtonLabel() {
      return this.$t('hero.contact')
    },
    scrollText() {
      return this.$t('hero.scroll')
    },
    whatsappNumber() {
      return CONTACT_INFO.WHATSAPP
    },
    whatsappUrl() {
      return `https://wa.me/${this.whatsappNumber}`
    }
  },

  data() {
    return {}
  },

  methods: {
    scrollToNextSection() {
      const nextSection = this.$el.nextElementSibling
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }
}
</script>

<style scoped>
.hero-section {
  height: 100vh;
  width: 100%;
  position: relative;
  background-image: url("@/assets/background2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.main-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.hero-content {
  max-width: 800px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.font-primary-color {
  color: #ffffff !important;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

h1.display-1 {
  font-size: 4.5rem;
  margin-bottom: 0.5rem;
}

.lead {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
}

.scroll-section {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-bottom: 5.5rem;
  display: flex;
  justify-content: center;
  width: 100%;
}

@media (max-width: 768px) {
  h1.display-1 {
    font-size: 3.5rem;
    margin-bottom: 0.4rem;
  }

  .lead {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }
}

@media (max-width: 480px) {
  h1.display-1 {
    font-size: 2.5rem;
    margin-bottom: 0.3rem;
  }

  .lead {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
}
</style>

<template>
  <section id="welcome" class="welcome">
    <div class="welcome__overlay"></div>
    
    <!-- Main Content -->
    <div class="welcome__main">
      <div class="welcome__container">
        <div class="welcome__content">
          <h1 class="welcome__title">{{ title }}</h1>
          <p class="welcome__message">{{ welcomeMessage }}</p>
          <contact-button 
            :phone-number="whatsappNumber"
            :label="contactButtonLabel"
          />
        </div>
      </div>
    </div>
    
    <!-- Scroll Section -->
    <div class="welcome__scroll">
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
  name: 'WelcomeSection',

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
.welcome {
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-image: url("@/assets/background2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  padding-top: 80px; /* Account for navbar */
}

.welcome__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.welcome__main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  min-height: calc(100vh - 80px); /* Account for navbar */
}

.welcome__container {
  text-align: center;
  color: white;
}

.welcome__content {
  max-width: 800px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.welcome__title {
  font-size: 4.5rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.welcome__message {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
}

.welcome__scroll {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-bottom: 5.5rem;
  display: flex;
  justify-content: center;
  width: 100%;
}

@media (max-width: 768px) {
  .welcome__title {
    font-size: 3.5rem;
    margin-bottom: 0.4rem;
  }

  .welcome__message {
    font-size: 1.1rem;
    margin-bottom: 0.6rem;
  }
}

@media (max-width: 480px) {
  .welcome__title {
    font-size: 2.5rem;
    margin-bottom: 0.3rem;
  }

  .welcome__message {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
}
</style>

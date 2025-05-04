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
  padding-top: 5rem; /* 80px -> 5rem */
}

.welcome__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg-overlay);
}

.welcome__main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  min-height: calc(100vh - 5rem); /* 80px -> 5rem */
}

.welcome__container {
  text-align: center;
  color: var(--text-light);
}

.welcome__content {
  max-width: 50rem; /* 800px -> 50rem */
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
}

.welcome__title {
  font-family: var(--font-secondary);
  font-size: var(--text-4xl);
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--spacing-xs);
  color: var(--text-light);
  text-shadow: var(--shadow-md);
  letter-spacing: var(--letter-spacing-wide);
}

.welcome__message {
  font-family: var(--font-primary);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--spacing-sm);
  color: var(--text-light);
  text-shadow: var(--shadow-sm);
  line-height: var(--line-height-relaxed);
}

.welcome__scroll {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-bottom: calc(var(--spacing-xl) * 2.75);
  display: flex;
  justify-content: center;
  width: 100%;
}

@media (max-width: 48rem) { /* 768px -> 48rem */
  .welcome__content {
    padding: var(--spacing-lg);
  }

  .welcome__title {
    font-size: var(--text-3xl);
  }

  .welcome__message {
    font-size: var(--text-lg);
  }
}

@media (max-width: 30rem) { /* 480px -> 30rem */
  .welcome__content {
    padding: var(--spacing-md);
  }

  .welcome__title {
    font-size: var(--text-2xl);
  }

  .welcome__message {
    font-size: var(--text-base);
  }
}
</style>


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
import ContactButton from '@/components/ui/buttons/ContactButton.vue'
import ScrollIndicator from '@/components/ui/indicators/ScrollIndicator.vue'
import { CONTACT_INFO } from '@/config/contact'

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
      const gallerySection = document.getElementById('gallery')
      if (gallerySection) {
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0
        const elementPosition = gallerySection.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>

<style scoped>
.welcome {
  height: 100vh;
  width: 100%;
  position: relative;
  background-image: url("@/assets/images/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
}

.welcome__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
  z-index: 1;
}

.welcome__main {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.welcome__container {
  text-align: center;
  color: var(--text-light);
  animation: fadeInUp 1.2s ease-out;
  width: 100%;
}

.welcome__content {
  max-width: 50rem;
  margin: 0 auto;
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
}

.welcome__title {
  font-family: var(--font-primary);
  font-size: calc(var(--text-4xl) * 1.5);
  font-weight: var(--font-weight-semibold);
  color: var(--text-light);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: var(--letter-spacing-normal);
  line-height: 1.1;
  position: relative;
  margin-bottom: 0;
  animation: titleReveal 1.5s ease-out forwards;
}

.welcome__message {
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-normal);
  color: var(--text-light);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  line-height: var(--line-height-relaxed);
  max-width: 40rem;
  margin: 0 auto;
  margin-bottom: var(--spacing-xs);
  opacity: 0;
  animation: fadeIn 1s ease-out 0.5s forwards;
}

.welcome__scroll {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-bottom: 5.5rem;
  display: flex;
  justify-content: center;
  width: 100%;
  opacity: 0;
  animation: fadeIn 1s ease-out 1s forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes titleReveal {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 48rem) {
  .welcome__content {
    padding: var(--spacing-lg);
  }

  .welcome__title {
    font-size: calc(var(--text-3xl) * 1.3);
  }

  .welcome__message {
    font-size: var(--text-base);
    max-width: 100%;
  }
}

@media (max-width: 30rem) {
  .welcome__content {
    padding: var(--spacing-md);
  }

  .welcome__title {
    font-size: calc(var(--text-2xl) * 1.3);
  }

  .welcome__message {
    font-size: var(--text-sm);
  }
}
</style>


<template>
  <a 
    :href="whatsappUrl" 
    target="_blank" 
    class="contact-btn"
  >
    <i class="contact-btn__icon fab fa-whatsapp"></i>
    <span class="contact-btn__text">{{ label }}</span>
  </a>
</template>

<script>
export default {
  name: 'ContactButton',

  props: {
    phoneNumber: {
      type: String,
      required: true,
      validator: value => /^\+\d+$/.test(value)
    },
    label: {
      type: String,
      default: 'Contacto'
    }
  },

  computed: {
    whatsappUrl() {
      return `https://wa.me/${this.phoneNumber}`
    }
  }
}
</script>

<style scoped>
.contact-btn {
  display: inline-flex;
  align-items: center;
  background: var(--text-light);
  color: var(--brand-primary);
  padding: var(--spacing-md) calc(var(--spacing-xl) * 1.25);
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  border-radius: var(--border-radius-lg);
  transition: all var(--transition-speed) var(--transition-timing);
  border: 2px solid var(--text-light);
  margin-top: var(--spacing-xs);
  box-shadow: var(--shadow-md);
  position: relative;
  overflow: hidden;
}

.contact-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-secondary);
  opacity: 0;
  transition: opacity var(--transition-speed) var(--transition-timing);
}

.contact-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--bg-secondary);
  background: var(--bg-secondary);
  color: var(--text-primary);
}

.contact-btn:hover::before {
  opacity: 0;
}

.contact-btn__icon {
  font-size: var(--text-xl);
  margin-right: var(--spacing-sm);
  transition: all var(--transition-speed) var(--transition-timing);
  position: relative;
  z-index: 1;
  color: var(--brand-primary);
}

.contact-btn:hover .contact-btn__icon {
  transform: scale(1.1) rotate(5deg);
  color: var(--text-primary);
}

.contact-btn__text {
  line-height: var(--line-height-tight);
  letter-spacing: var(--letter-spacing-wide);
  position: relative;
  z-index: 1;
  color: var(--brand-primary);
}

@media (max-width: 768px) {
  .contact-btn {
    padding: var(--spacing-sm) var(--spacing-xl);
    font-size: var(--text-base);
  }
  
  .contact-btn__icon {
    font-size: var(--text-lg);
    margin-right: var(--spacing-xs);
  }
}

@media (max-width: 480px) {
  .contact-btn {
    padding: var(--spacing-xs) var(--spacing-lg);
    font-size: var(--text-sm);
  }
  
  .contact-btn__icon {
    font-size: var(--text-base);
    margin-right: var(--spacing-xs);
  }
}
</style> 
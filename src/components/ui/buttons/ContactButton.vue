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
  background-color: var(--bg-overlay);
  color: var(--text-light);
  padding: var(--spacing-md) calc(var(--spacing-xl) * 1.25);
  font-family: var(--font-primary);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  border-radius: var(--border-radius-lg);
  backdrop-filter: blur(5px);
  transition: all var(--transition-speed) var(--transition-timing);
  border: 1px solid var(--text-light);
  margin-top: var(--spacing-xs);
}

.contact-btn:hover {
  background-color: var(--text-light);
  color: var(--text-primary);
  border-color: var(--text-light);
}

.contact-btn__icon {
  font-size: var(--text-xl);
  margin-right: var(--spacing-sm);
}

.contact-btn__text {
  line-height: var(--line-height-tight);
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
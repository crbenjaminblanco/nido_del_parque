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
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 30px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 0.5rem;
}

.contact-btn:hover {
  background-color: rgba(255, 255, 255, 0.25);
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

.contact-btn__icon {
  font-size: 1.3rem;
  margin-right: 0.75rem;
}

.contact-btn__text {
  line-height: 1;
}

@media (max-width: 768px) {
  .contact-btn {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
  
  .contact-btn__icon {
    font-size: 1.2rem;
    margin-right: 0.6rem;
  }
}

@media (max-width: 480px) {
  .contact-btn {
    padding: 0.75rem 1.75rem;
    font-size: 0.95rem;
  }
  
  .contact-btn__icon {
    font-size: 1.1rem;
    margin-right: 0.5rem;
  }
}
</style> 
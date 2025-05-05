<template>
  <div class="dropdown">
    <button 
      class="btn btn-link lang-selector"
      :class="{ 
        'lang-selector--light': !scrolled,
        'lang-selector--dark': scrolled,
        'dropdown-toggle': !isOpen,
        'dropdown-toggle--active': isOpen
      }"
      type="button" 
      @click="toggleDropdown"
    >
      <div class="d-flex align-items-center">
        <img 
          :src="require(`@/assets/icons/${currentLanguage}.png`)"
          :alt="currentLanguage === 'es' ? 'Español' : 'English'"
          class="lang-selector__icon"
        />
      </div>
    </button>
    <ul 
      class="dropdown-menu dropdown-menu-end" 
      :class="{ 'show': isOpen }"
    >
      <li>
        <button 
          class="dropdown-item lang-selector__item" 
          :class="{ 'lang-selector__item--active': currentLanguage === 'es' }"
          @click="changeLanguage('es')"
        >
          <img 
            src="@/assets/icons/es.png"
            alt="Español"
            class="lang-selector__icon me-2"
          />
          <span>Español</span>
        </button>
      </li>
      <li>
        <button 
          class="dropdown-item lang-selector__item" 
          :class="{ 'lang-selector__item--active': currentLanguage === 'en' }"
          @click="changeLanguage('en')"
        >
          <img 
            src="@/assets/icons/en.png"
            alt="English"
            class="lang-selector__icon me-2"
          />
          <span>English</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelector',
  
  props: {
    scrolled: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isOpen: false
    }
  },

  computed: {
    currentLanguage() {
      return this.$i18n.locale
    }
  },

  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },

    changeLanguage(lang) {
      // Emitir evento para cerrar el menú móvil
      this.$emit('close-mobile-menu');
      
      // Cerrar el dropdown
      this.isOpen = false;

      // Actualizar el idioma si es diferente
      if (this.$i18n.locale !== lang) {
        this.$i18n.locale = lang;
        const currentSection = this.$route.params.section || 'welcome';
        
        this.$router.push({
          path: `/${lang}/${currentSection}`,
          query: { instant: 'true' }
        }).catch(err => {
          if (err.name !== 'NavigationDuplicated') {
            console.error('Navigation error:', err);
          }
        });
      }
    },

    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    }
  },

  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },

  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }
}
</script>

<style scoped>
.lang-selector {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  display: flex;
  align-items: center;
  padding: var(--spacing-xs);
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  z-index: 1000;
  text-decoration: none;
}

.lang-selector:focus {
  box-shadow: none;
  outline: none;
}

.lang-selector:hover {
  text-decoration: none;
}

.lang-selector--light {
  color: var(--text-light);
}

.lang-selector--dark {
  color: var(--brand-primary);
}

.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
  transition: transform 0.2s ease;
}

.dropdown-toggle--active::after {
  transform: rotate(180deg);
}

.lang-selector__icon {
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
}

.lang-selector__item {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  display: flex;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--brand-primary);
  width: 100%;
  justify-content: flex-start;
}

.lang-selector__item:hover {
  color: var(--brand-secondary);
  background-color: var(--bg-hover);
}

.lang-selector__item--active {
  background-color: var(--bg-hover);
  color: var(--brand-primary);
  font-weight: var(--font-weight-bold);
}

.dropdown-menu {
  background: var(--bg-primary);
  border: 1px solid rgba(128, 128, 128, 0.1);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-xs);
  min-width: 120px;
  z-index: 1001;
  margin-top: 0.5rem;
  display: none;
  position: absolute;
  right: 0;
}

.dropdown-menu.show {
  display: block;
}

@media (max-width: 61.9375rem) {
  .lang-selector {
    width: 100%;
    justify-content: flex-start;
    padding: var(--spacing-sm) var(--spacing-md);
  }

  .lang-selector--light {
    color: var(--text-light);
  }

  .lang-selector--dark {
    color: var(--brand-primary);
  }

  .lang-selector:hover {
    background-color: var(--bg-hover);
  }

  .lang-selector__item {
    padding: var(--spacing-sm) var(--spacing-md);
  }

  .lang-selector__item:hover {
    background-color: var(--bg-hover);
  }

  .lang-selector__item--active {
    background-color: var(--bg-hover);
  }

  .dropdown-menu {
    position: static;
    margin-top: 0;
    border-radius: 0;
    box-shadow: none;
  }
}
</style> 
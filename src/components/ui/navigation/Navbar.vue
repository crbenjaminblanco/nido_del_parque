<template>
  <nav :class="navbarClasses">
    <div class="container">
      <!-- Logo -->
      <a 
        class="navbar-brand"
        :href="`#welcome`"
        @click.prevent="handleNavClick('welcome')"
      >
        <img
          src="@/assets/icons/logo.png"
          alt="Logo"
          width="60"
          height="30"
          class="brand__logo"
          :class="{ 
            'brand__logo--light': !scrolled,
            'brand__logo--dark': scrolled 
          }"
        />
        <span 
          class="brand__title"
          :class="{
            'brand__title--light': !scrolled,
            'brand__title--dark': scrolled
          }"
        >{{ $t('navbar.title') }}</span>
      </a>

      <!-- Toggler -->
      <button
        class="navbar-toggler"
        type="button"
        :class="{ 
          'navbar-toggler--light': !scrolled,
          'navbar-toggler--dark': scrolled 
        }"
        @click="toggleMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links -->
      <div 
        class="collapse navbar-collapse" 
        :class="{ show: isExpanded }"
      >
        <ul class="navbar-nav">
          <li 
            v-for="(item, index) in navigationItems" 
            :key="index"
            class="nav-item"
          >
            <a 
              :href="`#${item.sectionId}`"
              class="nav__link"
              :class="{ 
                'nav__link--light': !scrolled,
                'nav__link--dark': scrolled,
                'nav__link--active': activeSection === item.sectionId
              }"
              @click.prevent="handleNavClick(item.sectionId)"
              :aria-current="activeSection === item.sectionId ? 'page' : null"
            >
              {{ item.text }}
            </a>
          </li>
          <!-- Language Selector -->
          <li class="nav-item">
            <LanguageSelector 
              :scrolled="scrolled" 
              @close-mobile-menu="isExpanded = false"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import LanguageSelector from './LanguageSelector.vue'

export default {
  name: 'MainNavbar',
  
  components: {
    LanguageSelector
  },
  
  data() {
    return {
      scrolled: false,
      isExpanded: false,
      activeSection: 'welcome'
    }
  },

  computed: {
    navigationItems() {
      return [
        { 
          text: this.$t('navbar.home'), 
          sectionId: 'welcome'
        },
        { 
          text: this.$t('navbar.gallery'), 
          sectionId: 'gallery'
        },
        { 
          text: this.$t('navbar.book'), 
          sectionId: 'contact'
        },
        { 
          text: this.$t('navbar.recommendations'), 
          sectionId: 'recommendations'
        },
        { 
          text: this.$t('navbar.wifi'), 
          sectionId: 'wifi'
        }
      ]
    },
    currentLanguage() {
      return this.$i18n.locale
    },
    navbarClasses() {
      return [
        'navbar',
        'navbar-expand-lg',
        'navbar-light',
        'fixed-top',
        { scrolled: this.scrolled }
      ]
    },
    brandClasses() {
      return {
        'font-primary-color': !this.scrolled,
        'font-dark-color': this.scrolled
      }
    },
    logoClasses() {
      return {
        'icon-white-fade': !this.scrolled,
        'icon-dark': this.scrolled
      }
    },
    togglerClasses() {
      return {
        'icon-white-fade': !this.scrolled,
        'icon-dark': this.scrolled
      }
    }
  },

  watch: {
    '$route': {
      immediate: true,
      handler(to) {
        const section = to.params.section || 'welcome';
        this.activeSection = section;
      }
    }
  },

  methods: {
    toggleMenu() {
      this.isExpanded = !this.isExpanded;
      
      // Only set scrolled to true when opening menu
      if (this.isExpanded && !this.scrolled) {
        this.scrolled = true;
      }
      // Reset scrolled state when closing menu if we're at the top
      else if (!this.isExpanded && window.scrollY <= 50) {
        this.scrolled = false;
      }
    },

    handleNavClick(sectionId) {
      // Close menu first
      this.isExpanded = false;
      
      // Update route with current language and section
      const currentLang = this.$i18n.locale;
      
      // Scroll to section first
      const targetSection = document.getElementById(sectionId);
      if (targetSection) {
        const navbarHeight = this.$el.offsetHeight;
        const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'instant'
        });
      }

      // Then update route
      this.$router.push({
        path: `/${currentLang}/${sectionId}`,
        query: { instant: 'true' }
      }).finally(() => {
        // Set the new active section after navigation
        this.$nextTick(() => {
          this.activeSection = sectionId;
        });
      });
    },

    handleScroll() {
      this.scrolled = window.scrollY > 50;
      this.updateActiveSection();
    },

    updateActiveSection() {
      const sections = this.navigationItems.map(item => document.getElementById(item.sectionId));
      const navbarHeight = this.$el.offsetHeight;
      
      // Find the section that's most in view
      let mostVisible = null;
      let maxVisibleHeight = 0;

      sections.forEach((section, index) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, navbarHeight);

        if (visibleHeight > maxVisibleHeight) {
          maxVisibleHeight = visibleHeight;
          mostVisible = this.navigationItems[index].sectionId;
        }
      });

      if (mostVisible) {
        this.activeSection = mostVisible;
      }
    },

    closeMenu() {
      this.isExpanded = false;
      // Reset scrolled state if we're at the top
      if (window.scrollY <= 50) {
        this.scrolled = false;
      }
      // Ensure it stays closed
      this.$nextTick(() => {
        this.isExpanded = false;
      });
    },

    changeLanguage(lang) {
      // Close mobile menu if open
      if (this.isExpanded) {
        this.isExpanded = false;
        document.querySelector('#navbarNav')?.classList.remove('show');
      }

      // Only update route if language changed
      if (this.$i18n.locale !== lang) {
        this.$i18n.locale = lang;
        const currentSection = this.activeSection || this.$route.params.section || 'welcome';
        
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

    getLinkClasses(isActive) {
      return {
        'font-primary-color': !this.scrolled,
        'font-dark-color': this.scrolled,
        'active': isActive
      }
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    
    // Initialize navigation
    this.$nextTick(() => {
      const currentSection = this.$route.params.section || 'welcome';
      this.activeSection = currentSection;
      
      // Only scroll to section if not changing language
      if (currentSection !== 'welcome' && !this.$route.query.noScroll) {
        const targetSection = document.getElementById(currentSection);
        if (targetSection) {
          const navbarHeight = this.$el.offsetHeight;
          const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'instant'
          });
        }
      }
      
      this.handleScroll();
    });
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
/* NAVBAR DEFAULT: TRANSPARENT OVER CONTENT */
.navbar {
  background-color: transparent;
  transition: all var(--transition-speed) var(--transition-timing);
  padding: var(--spacing-sm) 0;
}

.navbar.scrolled {
  background-color: var(--bg-primary);
  box-shadow: var(--shadow-sm);
}

.navbar .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Toggler Button */
.navbar-toggler {
  border: none;
  padding: var(--spacing-xs);
  transition: color var(--transition-speed) var(--transition-timing);
  margin-left: auto;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.navbar-toggler-icon {
  background-image: none;
  position: relative;
  width: 24px;
  height: 24px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-toggler-icon::before {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background-color: currentColor;
  box-shadow: 0 -8px 0 currentColor, 0 8px 0 currentColor;
  transition: all 0.3s ease;
}

.navbar-toggler--light {
  color: var(--text-light);
}

.navbar-toggler--light:hover {
  color: var(--text-light-hover);
}

.navbar-toggler--dark {
  color: var(--brand-primary);
}

.navbar-toggler--dark:hover {
  color: var(--brand-secondary);
}

/* Brand and Logo */
.navbar-brand {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-semibold);
  font-size: var(--text-xl);
  letter-spacing: var(--letter-spacing-wide);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  transition: all var(--transition-speed) var(--transition-timing);
  margin-right: var(--spacing-xl);
  text-decoration: none;
}

.brand__title {
  transition: color var(--transition-speed) var(--transition-timing);
}

.brand__title--light {
  color: var(--text-light);
}

.brand__title--dark {
  color: var(--brand-primary);
}

.navbar-brand:hover .brand__title--light {
  opacity: 0.8;
}

.navbar-brand:hover .brand__title--dark {
  opacity: 0.8;
}

.brand__logo--light {
  filter: brightness(0) invert(1);
  opacity: 0.95;
}

.brand__logo--dark {
  filter: none;
  opacity: 1;
}

/* Navigation Links */
.navbar-collapse {
  flex-grow: 0;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin: 0;
  padding: 0;
}

.nav-item {
  list-style: none;
}

.nav__link {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal);
  transition: all var(--transition-speed) var(--transition-timing);
  padding: var(--spacing-xs) var(--spacing-sm);
  position: relative;
  text-decoration: none;
  white-space: nowrap;
}

/* Override default active state */
.nav__link.active {
  color: inherit;
  font-weight: inherit;
}

.nav__link--light {
  color: var(--text-light);
}

.nav__link--light:hover {
  color: var(--text-light);
  opacity: 0.8;
}

.nav__link--dark {
  color: var(--brand-primary);
}

.nav__link--dark:hover {
  color: var(--brand-primary);
  opacity: 0.8;
}

.nav__link--active {
  border-bottom: 2px solid currentColor;
}

/* Language Selector */
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

/* Mobile Styles */
@media (max-width: 61.9375rem) {
  .navbar-collapse {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg-primary);
    margin-top: 0;
    padding: var(--spacing-md);
    border-radius: 0;
    box-shadow: var(--shadow-md);
    display: none;
  }

  .navbar-collapse.show {
    display: block;
  }

  .navbar-nav {
    flex-direction: column;
    align-items: stretch;
    gap: var(--spacing-xs);
  }

  .nav-item {
    width: 100%;
  }

  .nav__link {
    display: block;
    padding: var(--spacing-sm) var(--spacing-md);
    text-align: left;
  }

  .nav__link--light {
    color: var(--text-light);
  }

  .nav__link--dark {
    color: var(--brand-primary);
  }

  .nav__link:hover {
    background-color: var(--bg-hover);
  }

  .nav__link--active {
    background-color: var(--bg-hover);
    border-bottom: none;
    border-left: 3px solid currentColor;
  }
}

@media (min-width: 62rem) {
  .navbar-nav {
    gap: var(--spacing-lg);
  }

  .nav__link {
    padding: var(--spacing-xs) var(--spacing-xxs);
  }
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
}
</style>


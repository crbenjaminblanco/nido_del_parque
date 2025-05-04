<template>
  <nav :class="navbarClasses">
    <div class="container">
      <!-- Logo -->
      <a 
        class="navbar-brand"
        :class="{ 
          'brand--light': !scrolled,
          'brand--dark': scrolled
        }"
        :href="`#welcome`"
        @click.prevent="handleNavClick('welcome')"
      >
        <img
          src="@/assets/logo.png"
          alt="Logo"
          width="60"
          height="30"
          class="brand__logo"
          :class="{ 
            'brand__logo--light': !scrolled,
            'brand__logo--dark': scrolled 
          }"
        />
        {{ $t('navbar.title') }}
      </a>

      <!-- Toggler -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-label="Toggle navigation"
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
        id="navbarNav"
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
              class="nav-link nav__link"
              :class="{ 
                'nav__link--light': !scrolled,
                'nav__link--dark': scrolled,
                'nav__link--active': activeSection === item.sectionId && !isClickNavigation,
                'nav__link--active-click': activeSection === item.sectionId && isClickNavigation
              }"
              @click.prevent="handleNavClick(item.sectionId)"
            >
              {{ item.text }}
            </a>
          </li>
          <!-- Language Selector -->
          <li class="nav-item">
            <div class="dropdown">
              <button 
                class="btn btn-link dropdown-toggle lang-selector"
                :class="{ 
                  'lang-selector--light': !scrolled,
                  'lang-selector--dark': scrolled 
                }"
                type="button" 
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div class="d-flex align-items-center">
                  <img 
                    :src="require(`@/assets/icons/${currentLanguage}.png`)"
                    :alt="currentLanguage === 'es' ? 'Español' : 'English'"
                    class="lang-selector__icon"
                  />
                </div>
              </button>
              <ul class="dropdown-menu">
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
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNavbar',
  
  data() {
    return {
      scrolled: false,
      isExpanded: false,
      activeSection: 'welcome',
      isClickNavigation: false
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
          text: this.$t('navbar.wifi'), 
          sectionId: 'wifi'
        },
        { 
          text: this.$t('navbar.recommendations'), 
          sectionId: 'recommendations'
        },
        { 
          text: this.$t('navbar.contact'), 
          sectionId: 'contact'
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
    // Watch for route changes to update active section
    '$route': {
      immediate: true,
      handler(to) {
        const section = to.params.section || 'welcome';
        this.activeSection = section;
      }
    }
  },

  methods: {
    handleNavClick(sectionId) {
      // Close menu first
      this.closeMenu();
      
      // Update active section immediately
      this.activeSection = sectionId;
      this.isClickNavigation = true;
      
      // Update route with current language and section
      const currentLang = this.$i18n.locale;
      this.$router.push({
        path: `/${currentLang}/${sectionId}`,
        query: { instant: 'true' }
      }).finally(() => {
        // Ensure menu stays closed after navigation
        this.$nextTick(() => {
          this.isExpanded = false;
          // Reset click navigation flag after a short delay
          setTimeout(() => {
            this.isClickNavigation = false;
          }, 100);
        });
      });
    },

    handleScroll() {
      this.scrolled = window.scrollY > 50;
      if (!this.isClickNavigation) {
        this.updateActiveSection();
      }
    },

    updateActiveSection() {
      if (this.isClickNavigation) return;

      const sections = this.navigationItems.map(item => document.getElementById(item.sectionId));
      const navbarHeight = this.$el.offsetHeight;
      const scrollPosition = window.scrollY + navbarHeight + 50;

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            const sectionId = this.navigationItems[i].sectionId;
            if (this.activeSection !== sectionId) {
              this.activeSection = sectionId;
              // Update route without forcing scroll
              const currentLang = this.$i18n.locale;
              this.$router.push({
                path: `/${currentLang}/${sectionId}`
              }).catch(() => {});
            }
            break;
          }
        }
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

    changeLanguage(lang) {
      // Close menu first
      this.closeMenu();
      
      this.$i18n.locale = lang;
      const currentSection = this.$route.params.section || 'welcome';
      
      this.$router.push({
        path: `/${lang}/${currentSection}`,
        query: { instant: 'true' }
      }).finally(() => {
        // Ensure menu stays closed after language change
        this.$nextTick(() => {
          this.isExpanded = false;
        });
      });
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
      
      // Scroll to section if accessed directly via URL
      if (currentSection !== 'welcome') {
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
  transition: all 0.3s ease;
  padding: 1rem 0;
}

.navbar.scrolled {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Toggler Button */
.navbar-toggler {
  border: none;
  padding: 0;
  transition: all 0.3s ease;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.navbar-toggler-icon {
  background-image: none;
  position: relative;
  transition: all 0.3s ease;
}

.navbar-toggler-icon::before {
  content: '';
  position: absolute;
  width: 30px;
  height: 2px;
  background-color: currentColor;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 -8px 0 currentColor, 0 8px 0 currentColor;
  transition: all 0.3s ease;
}

.navbar-toggler--light {
  color: rgba(255, 255, 255, 0.95) !important;
}

.navbar-toggler--light:hover {
  color: white !important;
}

.navbar-toggler--dark {
  color: rgba(0, 0, 0, 0.8) !important;
}

.navbar-toggler--dark:hover {
  color: black !important;
}

/* Brand and Logo */
.brand--light {
  color: rgba(255, 255, 255, 0.95) !important;
}

.brand--light:hover {
  color: white !important;
}

.brand--dark {
  color: rgba(0, 0, 0, 0.8) !important;
}

.brand--dark:hover {
  color: black !important;
}

.brand__logo {
  transition: filter 0.3s ease;
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
.navbar-nav {
  width: 100%;
}

.nav__link {
  transition: all 0.3s ease;
}

.nav__link--light {
  color: rgba(255, 255, 255, 0.95) !important;
}

.nav__link--light:hover {
  color: white !important;
}

.nav__link--dark {
  color: rgba(0, 0, 0, 0.8) !important;
}

.nav__link--dark:hover {
  color: black !important;
}

.nav__link--active,
.nav__link--active-click {
  font-weight: 600;
  position: relative;
}

.nav__link--active::after,
.nav__link--active-click::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.nav__link--active-click::after {
  opacity: 0.8;
}

/* Language Selector */
.lang-selector {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: none;
  width: 100%;
  justify-content: flex-start;
}

.lang-selector--light {
  color: rgba(255, 255, 255, 0.95) !important;
}

.lang-selector--dark {
  color: rgba(0, 0, 0, 0.8) !important;
}

.lang-selector__icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.lang-selector__item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  color: rgba(0, 0, 0, 0.8) !important;
  width: 100%;
  justify-content: flex-start;
}

.lang-selector__item:hover {
  color: black !important;
  background-color: rgba(0, 0, 0, 0.05);
}

.lang-selector__item--active {
  background-color: rgba(0, 0, 0, 0.05);
  color: black !important;
  font-weight: 700;
}

/* Mobile Styles */
@media (max-width: 991px) {
  .navbar-collapse {
    background: white;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .navbar-nav {
    align-items: flex-start !important;
  }

  .nav-item {
    width: 100%;
  }

  .nav__link--active::after,
  .nav__link--active-click::after {
    display: none;
  }
  
  .nav__link--active,
  .nav__link--active-click {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .nav__link {
    color: rgba(0, 0, 0, 0.8) !important;
    padding: 0.75rem 1rem !important;
    text-align: left;
    width: 100%;
  }

  .nav__link:hover {
    color: black !important;
    background-color: rgba(0, 0, 0, 0.05);
  }

  .lang-selector {
    padding: 0.75rem 1rem;
    margin: 0;
    color: rgba(0, 0, 0, 0.8) !important;
  }

  .lang-selector__icon {
    width: 20px;
    height: 20px;
  }

  .dropdown-menu {
    width: 100%;
    padding: 0;
    margin: 0;
    border: none;
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.02);
  }
}

@media (min-width: 992px) {
  .navbar-nav {
    align-items: center;
    justify-content: flex-end;
  }

  .nav-item:not(:last-child) {
    margin-right: 1rem;
  }
}
</style>


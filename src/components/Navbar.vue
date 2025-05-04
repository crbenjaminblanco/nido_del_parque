<template>
  <nav :class="navbarClasses">
    <div class="container">
      <!-- Logo -->
      <a 
        class="navbar-brand"
        :class="brandClasses"
        href="#welcome"
        @click="handleNavClick('welcome')"
      >
        <img
          src="@/assets/logo.png"
          alt="Logo"
          width="60"
          height="30"
          class="logo"
          :class="logoClasses"
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
        :class="togglerClasses"
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
        <ul class="navbar-nav ms-auto align-items-center">
          <li 
            v-for="(item, index) in navigationItems" 
            :key="index"
            class="nav-item"
          >
            <a 
              :href="`#${item.sectionId}`"
              class="nav-link"
              :class="{ 
                'font-primary-color': !scrolled,
                'font-dark-color': scrolled,
                'active': activeSection === item.sectionId && !isClickNavigation,
                'active-click': activeSection === item.sectionId && isClickNavigation
              }"
              @click.prevent="handleNavClick(item.sectionId)"
            >
              {{ item.text }}
            </a>
          </li>
          <!-- Language Selector -->
          <li class="nav-item ms-lg-3">
            <div class="dropdown">
              <button 
                class="btn btn-link dropdown-toggle language-selector"
                :class="getLinkClasses()"
                type="button" 
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div class="d-flex align-items-center">
                  <img 
                    :src="require(`@/assets/icons/${currentLanguage}.png`)"
                    :alt="currentLanguage === 'es' ? 'Español' : 'English'"
                    class="language-icon"
                  />
                </div>
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <button 
                    class="dropdown-item d-flex align-items-center" 
                    :class="{ active: currentLanguage === 'es' }"
                    @click="changeLanguage('es')"
                  >
                    <img 
                      src="@/assets/icons/es.png"
                      alt="Español"
                      class="language-icon me-2"
                    />
                    <span>Español</span>
                  </button>
                </li>
                <li>
                  <button 
                    class="dropdown-item d-flex align-items-center" 
                    :class="{ active: currentLanguage === 'en' }"
                    @click="changeLanguage('en')"
                  >
                    <img 
                      src="@/assets/icons/en.png"
                      alt="English"
                      class="language-icon me-2"
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
import * as bootstrap from 'bootstrap'

export default {
  name: 'MainNavbar',
  
  data() {
    return {
      scrolled: false,
      isExpanded: false,
      collapse: null,
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

  methods: {
    handleNavClick(sectionId) {
      this.activeSection = sectionId;
      this.isClickNavigation = true;
      
      // Scroll instantly to section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'instant', block: 'start' });
        // Update route with current language and section
        const currentLang = this.$i18n.locale;
        this.$router.push(`/${currentLang}/${sectionId}`);
      }
      
      // Reset after a short delay
      setTimeout(() => {
        this.isClickNavigation = false;
      }, 1000);
      
      this.closeMenu();
    },

    handleScroll() {
      this.scrolled = window.scrollY > 50;
      if (!this.isClickNavigation) {
        this.updateActiveSection();
      }
    },

    updateActiveSection() {
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
              // Update route with current language and section
              const currentLang = this.$i18n.locale;
              this.$router.push(`/${currentLang}/${sectionId}`);
            }
            break;
          }
        }
      }
    },

    closeMenu() {
      if (this.isExpanded) {
        this.isExpanded = false;
        if (this.collapse) {
          this.collapse.hide();
        }
      }
    },

    toggleMenu() {
      if (!this.collapse) {
        const collapseElement = document.getElementById('navbarNav')
        if (collapseElement) {
          this.collapse = new bootstrap.Collapse(collapseElement, {
            toggle: false
          })
        }
      }
      
      this.isExpanded = !this.isExpanded
      if (this.collapse) {
        if (this.isExpanded) {
          this.collapse.show()
          if (!this.scrolled) {
            this.scrolled = true
          }
        } else {
          this.collapse.hide()
        }
      }
    },

    changeLanguage(lang) {
      this.$i18n.locale = lang;
      // Update the route to maintain the current section
      const currentSection = this.activeSection || 'welcome';
      this.$router.push(`/${lang}/${currentSection}`);
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
    
    // Initialize Bootstrap collapse
    const collapseElement = document.getElementById('navbarNav');
    if (collapseElement) {
      this.collapse = new bootstrap.Collapse(collapseElement, {
        toggle: false
      });
    }

    // Handle initial navigation from URL hash
    this.$nextTick(() => {
      const hash = window.location.hash.replace('#', '');
      if (hash && this.navigationItems.some(item => item.sectionId === hash)) {
        this.handleNavClick(hash);
      }
      this.handleScroll();
    });
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    if (this.collapse) {
      this.collapse.dispose();
    }
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

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.logo {
  transition: filter 0.3s ease;
}

/* Text Colors */
.font-primary-color {
  color: rgba(255, 255, 255, 0.95) !important;
}

.font-primary-color:hover {
  color: white !important;
}

.font-dark-color {
  color: rgba(0, 0, 0, 0.8) !important;
}

.font-dark-color:hover {
  color: black !important;
}

/* Icon Colors */
.icon-white-fade {
  filter: brightness(0) invert(1);
  opacity: 0.95;
}

.icon-dark {
  filter: none;
  opacity: 1;
}

/* Active state styles */
.nav-link {
  transition: all 0.3s ease;
}

.nav-link.active {
  font-weight: 600;
  position: relative;
}

.nav-link.active::after {
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

.nav-link.active-click {
  font-weight: 700;
  position: relative;
}

.nav-link.active-click::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: currentColor;
  opacity: 0.8;
}

/* Mobile styles update */
@media (max-width: 991px) {
  .nav-link.active::after,
  .nav-link.active-click::after {
    display: none;
  }
  
  .nav-link.active {
    background-color: rgba(0, 0, 0, 0.03);
  }

  .nav-link.active-click {
    background-color: rgba(0, 0, 0, 0.05);
  }

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

  .nav-link {
    color: rgba(0, 0, 0, 0.8) !important;
    padding: 0.75rem 1rem !important;
    text-align: left;
    width: 100%;
  }

  .nav-link:hover {
    color: black !important;
    background-color: rgba(0, 0, 0, 0.05);
  }

  /* Language selector mobile styles */
  .language-selector {
    justify-content: flex-start;
    width: 100%;
    padding: 0.75rem 1rem;
    margin: 0;
    color: rgba(0, 0, 0, 0.8) !important;
  }

  .language-selector.btn {
    text-align: left;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .dropdown {
    width: 100%;
  }

  .dropdown-menu {
    width: 100%;
    margin: 0;
    padding: 0;
    border: none;
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.02);
  }

  .dropdown-item {
    width: 100%;
    padding: 0.75rem 1rem;
  }

  .navbar-collapse .dropdown-item {
    color: rgba(0, 0, 0, 0.8) !important;
  }

  .navbar-collapse .dropdown-item:hover,
  .navbar-collapse .dropdown-item.active {
    color: black !important;
  }

  .language-icon {
    width: 20px;
    height: 20px;
    margin-left: 0;
  }
}

/* Language Selector Styles */
.language-selector {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: none;
}

.language-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
}

.dropdown-item {
  padding: 0.75rem 1rem;
  width: 150px;
  color: rgba(0, 0, 0, 0.8) !important;
}

.dropdown-item:hover {
  color: black !important;
  background-color: rgba(0, 0, 0, 0.05);
}

.dropdown-item.active {
  background-color: rgba(0, 0, 0, 0.05);
  color: black !important;
  font-weight: 700;
}

@media (max-width: 991px) {
  .language-selector {
    justify-content: flex-start;
    width: 100%;
    padding: 0.75rem 1rem;
    margin: 0;
    color: rgba(0, 0, 0, 0.8) !important;
  }

  .language-selector.btn {
    text-align: left;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .dropdown {
    width: 100%;
  }

  .dropdown-menu {
    width: 100%;
    margin: 0;
    padding: 0;
    border: none;
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.02);
  }

  .dropdown-item {
    width: 100%;
    padding: 0.75rem 1rem;
  }

  .navbar-collapse .dropdown-item {
    color: rgba(0, 0, 0, 0.8) !important;
  }

  .navbar-collapse .dropdown-item:hover,
  .navbar-collapse .dropdown-item.active {
    color: black !important;
  }
}

/* Add styles for mobile dropdown items */
@media (max-width: 991px) {
  .language-selector {
    justify-content: flex-start;
    width: 100%;
    padding: 0.75rem 1rem;
    margin: 0;
    color: rgba(0, 0, 0, 0.8) !important;
  }

  .navbar-collapse .dropdown-item:hover,
  .navbar-collapse .dropdown-item.active {
    color: black !important;
  }
}
</style>


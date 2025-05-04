<template>
  <nav :class="navbarClasses">
    <div class="container">
      <!-- Logo -->
      <a 
        class="navbar-brand"
        :class="brandClasses"
        href="#welcome-section"
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
              :href="'#' + item.sectionId"
              class="nav-link"
              :class="getLinkClasses(item.isActive)"
              @click="closeMenu"
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
      activeSection: 'welcome-section'
    }
  },

  computed: {
    navigationItems() {
      return [
        { 
          text: this.$t('navbar.home'), 
          sectionId: 'welcome-section',
          isActive: this.activeSection === 'welcome-section'
        },
        { 
          text: this.$t('navbar.gallery'), 
          sectionId: 'photo-gallery',
          isActive: this.activeSection === 'photo-gallery'
        },
        { 
          text: this.$t('navbar.wifi'), 
          sectionId: 'wifi-section',
          isActive: this.activeSection === 'wifi-section'
        },
        { 
          text: this.$t('navbar.recommendations'), 
          sectionId: 'recommendations',
          isActive: this.activeSection === 'recommendations'
        },
        { 
          text: this.$t('navbar.contact'), 
          sectionId: 'social-section',
          isActive: this.activeSection === 'social-section'
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

    closeMenu() {
      if (this.isExpanded) {
        this.isExpanded = false
        if (this.collapse) {
          this.collapse.hide()
        }
      }
    },

    handleScroll() {
      this.scrolled = window.scrollY > 50;
      this.updateActiveSection();
    },

    updateActiveSection() {
      const sections = this.navigationItems.map(item => document.getElementById(item.sectionId));
      const navbarHeight = this.$el.offsetHeight;
      const scrollPosition = window.scrollY + navbarHeight + 50; // Add offset for better detection

      // Find the current section
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            this.activeSection = this.navigationItems[i].sectionId;
            break;
          }
        }
      }

      // Check if we're at the top of the page
      if (window.scrollY < 100) {
        this.activeSection = 'welcome-section';
      }
    },

    changeLanguage(lang) {
      this.$i18n.locale = lang
      if (this.isExpanded) {
        this.closeMenu()
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
    window.addEventListener('scroll', this.handleScroll)
    
    // Initialize Bootstrap collapse
    const collapseElement = document.getElementById('navbarNav')
    if (collapseElement) {
      this.collapse = new bootstrap.Collapse(collapseElement, {
        toggle: false
      })
    }
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    if (this.collapse) {
      this.collapse.dispose()
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

/* Mobile Menu Styles */
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
    padding-left: 1rem;
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
  font-weight: 500;
}

@media (max-width: 991px) {
  .language-selector {
    justify-content: center;
    width: auto;
    padding: 0.5rem;
  }
  
  .language-icon {
    width: 20px;
    height: 20px;
  }

  .dropdown-menu {
    width: 100%;
    background-color: white;
  }

  .dropdown-item {
    width: 100%;
  }

  .navbar-collapse .dropdown-item {
    color: rgba(0, 0, 0, 0.8) !important;
  }

  .navbar-collapse .dropdown-item:hover,
  .navbar-collapse .dropdown-item.active {
    color: black !important;
  }
}

/* Active state */
.nav-link.active {
  font-weight: 600;
}
</style>

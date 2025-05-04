<template>
  <nav :class="navbarClasses">
    <div class="container">
      <!-- Logo -->
      <a 
        class="navbar-brand"
        :class="brandClasses"
        :href="`#${languagePrefix}/home`"
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
        :aria-expanded="isExpanded"
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
      >
        <ul class="navbar-nav ms-auto align-items-center">
          <li 
            v-for="(item, index) in navigationItems" 
            :key="index"
            class="nav-item"
          >
            <a 
              :href="item.href"
              class="nav-link"
              :class="getLinkClasses(item.isActive)"
              @click="handleLinkClick"
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
                <!-- Solo el icono en el botón principal -->
                <img 
                  :src="require(`@/assets/icons/${currentLanguage}.png`)"
                  :alt="currentLanguage === 'es' ? 'Español' : 'English'"
                  class="language-icon"
                />
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
import { Collapse, Dropdown } from 'bootstrap'

export default {
  name: 'MainNavbar',
  
  data() {
    return {
      scrolled: false,
      isExpanded: false,
      collapse: null,
      navigationItems: [
        { text: this.$t('navbar.home'), href: '#/es/home', isActive: true },
        { text: this.$t('navbar.gallery'), href: '#/es/gallery' },
        { text: this.$t('navbar.wifi'), href: '#/es/wifi' },
        { text: this.$t('navbar.recommendations'), href: '#/es/recommendations' },
        { text: this.$t('navbar.contact'), href: '#/es/contact' }
      ]
    }
  },

  computed: {
    currentLanguage() {
      return this.$i18n.locale
    },
    navbarClasses() {
      return [
        'navbar',
        'navbar-expand-lg',
        'navbar-light',
        'pt-4',
        'pb-4',
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
    },

    languagePrefix() {
      return `/${this.currentLanguage}`
    }
  },

  methods: {
    changeLanguage(lang) {
      // Get the current route path from the hash
      const currentHash = window.location.hash
      const currentPath = currentHash.replace('#', '') || '/es/home'
      
      // Update locale
      this.$i18n.locale = lang
      
      // Update navigation items text
      this.navigationItems = this.navigationItems.map(item => ({
        ...item,
        text: this.$t(item.href === '#/es/home' ? 'navbar.home' :
              item.href === '#/es/gallery' ? 'navbar.gallery' :
              item.href === '#/es/wifi' ? 'navbar.wifi' :
              item.href === '#/es/recommendations' ? 'navbar.recommendations' :
              'navbar.contact'),
        href: item.href.replace(/(#\/)(es|en)\//, `$1${lang}/`)
      }))

      // Update the URL with new language
      const newPath = currentPath.replace(/(\/)(es|en)(\/)/, `$1${lang}$3`)
      window.location.hash = newPath

      // Close the burger menu if it's open
      if (this.collapse && this.isExpanded) {
        this.collapse.hide()
        this.isExpanded = false
      }
    },

    scrollToSection(sectionId) {
      const targetSection = document.querySelector(sectionId)
      if (targetSection) {
        targetSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    },

    handleInitialRoute() {
      const path = window.location.pathname
      // Extract language from path if present
      const matches = path.match(/^\/(es|en)(\/.*)$/)
      if (matches) {
        const [, lang, actualPath] = matches
        // Set language if it differs from current
        if (lang !== this.currentLanguage) {
          this.$i18n.locale = lang
        }
        
        const routeMap = {
          '/wifi': '#wifi-section',
          '/gallery': '#photo-gallery',
          '/recommendations': '#recommendations',
          '/contact': '#social-section'
        }

        const sectionId = routeMap[actualPath]
        if (sectionId) {
          setTimeout(() => this.scrollToSection(sectionId), 100)
        }
      }
    },

    updateUrlWithSection(newPath) {
      const pathWithLang = `${this.languagePrefix}${newPath}`
      window.history.pushState({}, '', pathWithLang)
    },

    handleScroll() {
      this.scrolled = window.scrollY > 50
    },

    toggleMenu() {
      if (!this.collapse) {
        const collapseElement = document.getElementById('navbarNav')
        if (collapseElement) {
          this.collapse = new Collapse(collapseElement, {
            toggle: false
          })
        }
      }

      if (this.collapse) {
        if (this.isExpanded) {
          this.collapse.hide()
        } else {
          this.collapse.show()
        }
        this.isExpanded = !this.isExpanded

        if (this.isExpanded && !this.scrolled) {
          this.scrolled = true
        }
      }
    },

    handleLinkClick(event) {
      event.preventDefault()
      const href = event.target.getAttribute('href')
      
      // Check if it's the home link
      if (href === '/') {
        window.location.href = `${this.languagePrefix}/home`
        return
      }

      // Update URL based on section
      const routeMap = {
        '#wifi-section': '/wifi',
        '#photo-gallery': '/gallery',
        '#recommendations': '/recommendations',
        '#social-section': '/contact'
      }

      if (routeMap[href]) {
        this.updateUrlWithSection(routeMap[href])
      }

      this.scrollToSection(href)

      if (window.innerWidth <= 991 && this.collapse) {
        this.collapse.hide()
        this.isExpanded = false
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
    // Initialize Bootstrap components
    const collapseElement = document.getElementById('navbarNav')
    if (collapseElement) {
      this.collapse = new Collapse(collapseElement, {
        toggle: false
      })
    }
    // Initialize all dropdowns
    document.querySelectorAll('.dropdown-toggle').forEach(dropdownToggle => {
      new Dropdown(dropdownToggle)
    })
    this.handleInitialRoute()
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    // Limpiar la instancia de collapse
    if (this.collapse) {
      this.collapse.dispose()
    }
  }
}
</script>

<style scoped>
/* NAVBAR DEFAULT: TRANSPARENT OVER CONTENT */
.navbar {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  z-index: 10;
  transition: all 0.3s ease;
}

/* AFTER SCROLL: FIXED + WHITE */
.navbar.scrolled {
  position: fixed;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* TEXT COLORS */
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

/* LOGO COLOR EFFECTS */
.icon-white-fade {
  filter: brightness(0) invert(1);
  opacity: 0.95;
  transition: opacity 0.3s ease, filter 0.3s ease;
}

.icon-dark {
  filter: none;
  opacity: 1;
}

/* NAV-LINK OVERRIDE */
.nav-link.active {
  font-weight: bold;
}

/* LOGO STYLE */
.logo {
  transition: filter 0.3s ease, opacity 0.3s ease;
}

/* MOBILE MENU STYLES */
@media (max-width: 991px) {
  .navbar-collapse {
    background-color: white;
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

  .navbar-collapse .nav-link {
    color: rgba(0, 0, 0, 0.8) !important;
    padding: 0.75rem 1rem;
    text-align: left;
  }

  .navbar-collapse .nav-link:hover {
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
</style>

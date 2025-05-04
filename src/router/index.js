import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import i18n from '../i18n/i18n'

// Function to get user's preferred language
const getUserLanguage = () => {
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase()
  return browserLang.startsWith('es') ? 'es' : 'en'
}

const routes = [
  {
    path: '/',
    redirect: () => {
      const lang = getUserLanguage()
      return `/${lang}/welcome`
    }
  },
  {
    path: '/:lang/:section?',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      const validLanguages = ['es', 'en']
      const validSections = ['welcome', 'gallery', 'wifi', 'recommendations', 'contact']
      const lang = to.params.lang
      const section = to.params.section || 'welcome'
      const isDirectAccess = !from.name || window.performance.navigation.type === 1

      // If invalid language, redirect to default
      if (!validLanguages.includes(lang)) {
        const defaultLang = getUserLanguage()
        next(`/${defaultLang}/welcome`)
        return
      }

      // Set i18n locale
      i18n.global.locale = lang

      // If invalid section, redirect to welcome
      if (!validSections.includes(section)) {
        next(`/${lang}/welcome`)
        return
      }

      // Redirect to welcome on direct access or page refresh
      if (isDirectAccess && section !== 'welcome') {
        next(`/${lang}/welcome`)
        return
      }

      next()
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If it's a manual navigation (back/forward), use saved position
    if (savedPosition) {
      return savedPosition;
    }

    // Scroll when it's a direct URL access or instant scroll is requested
    if (!from.name || to.query.instant === 'true') {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.getElementById(to.params.section || 'welcome');
          const navbar = document.querySelector('.navbar');
          if (element && navbar) {
            const navbarHeight = navbar.offsetHeight;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            resolve({
              top: offsetPosition,
              behavior: 'instant'
            });
          }
        }, 100);
      });
    }
    
    // For scroll-based navigation, don't scroll
    return false;
  }
})

export default router 
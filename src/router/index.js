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

      if (!validLanguages.includes(lang)) {
        const defaultLang = getUserLanguage()
        next(`/${defaultLang}/welcome`)
        return
      }

      if (!validSections.includes(section)) {
        next(`/${lang}/welcome`)
        return
      }

      // Sync i18n locale with route language parameter
      i18n.global.locale = lang

      // Add scroll=true when page is refreshed or accessed directly
      if (!from.name) {
        next({
          path: to.path,
          query: { scroll: 'true' }
        })
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

    // Only scroll if the navigation is triggered programmatically (not by scroll)
    if (to.params.section && to.query.scroll === 'true') {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.getElementById(to.params.section);
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
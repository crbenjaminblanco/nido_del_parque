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

      // If it's a language change, don't scroll
      if (to.query.instant === 'true') {
        next()
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
    if (to.query.instant === 'true') {
      return false
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

export default router 
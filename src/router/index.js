import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Function to get user's preferred language
const getUserLanguage = () => {
  // Get browser language (e.g., 'es-ES', 'en-US')
  const browserLang = navigator.language.toLowerCase()
  
  // Check if it starts with 'es'
  if (browserLang.startsWith('es')) {
    return 'es'
  }
  
  // Default to 'en' for all other languages
  return 'en'
}

const routes = [
  {
    path: '/',
    redirect: to => {
      const userLang = getUserLanguage()
      return `/${userLang}/home${to.hash || '#welcome'}`
    }
  },
  {
    path: '/:lang',
    redirect: to => {
      return `/${to.params.lang}/home${to.hash || '#welcome'}`
    }
  },
  {
    path: '/:lang/home',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      const validLanguages = ['es', 'en']
      if (!validLanguages.includes(to.params.lang)) {
        const userLang = getUserLanguage()
        next(`/${userLang}/home${to.hash || '#welcome'}`)
        return
      }
      next()
    }
  },
  {
    path: '/:lang/:pathMatch(.*)*',
    redirect: to => {
      const validLanguages = ['es', 'en']
      const lang = validLanguages.includes(to.params.lang) ? to.params.lang : getUserLanguage()
      return `/${lang}/home${to.hash || '#welcome'}`
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.querySelector(to.hash);
          const navbar = document.querySelector('.navbar');
          if (element && navbar) {
            const navbarHeight = navbar.offsetHeight;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            resolve({
              top: offsetPosition,
              behavior: 'instant'
            });
          } else {
            resolve({ el: to.hash, behavior: 'instant' });
          }
        }, 100);
      });
    }
    return savedPosition || { top: 0 };
  }
})

// Navigation guards
router.beforeEach((to, from, next) => {
  const validLanguages = ['es', 'en']
  const lang = to.params.lang

  if (!validLanguages.includes(lang)) {
    const userLang = getUserLanguage()
    next(`/${userLang}/home${to.hash || '#welcome'}`)
    return
  }

  next()
})

// Handle navigation errors
router.onError((error) => {
  console.error('Router error:', error)
  const userLang = getUserLanguage()
  router.push(`/${userLang}/home${router.currentRoute.value.hash || '#welcome'}`)
})

export default router 
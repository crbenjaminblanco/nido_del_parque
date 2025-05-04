import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Function to get user's preferred language
const getUserLanguage = () => {
  // Get browser language (e.g., 'es-ES', 'en-US')
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase()
  
  // Check if it starts with 'es'
  return browserLang.startsWith('es') ? 'es' : 'en'
}

const routes = [
  {
    path: '/',
    redirect: () => {
      const userLang = getUserLanguage()
      return `/${userLang}/home${location.hash || '#welcome'}`
    }
  },
  {
    path: '/:lang',
    redirect: to => {
      const lang = to.params.lang
      // Si el idioma es válido, lo usamos, si no, usamos el del navegador
      const validLanguages = ['es', 'en']
      const targetLang = validLanguages.includes(lang) ? lang : getUserLanguage()
      return `/${targetLang}/home${to.hash || '#welcome'}`
    }
  },
  {
    path: '/:lang/home',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      const lang = to.params.lang
      const validLanguages = ['es', 'en']
      if (!validLanguages.includes(lang)) {
        // Si el idioma no es válido, intentamos usar el idioma actual o el del navegador
        const currentLang = from.params.lang
        const targetLang = validLanguages.includes(currentLang) ? currentLang : getUserLanguage()
        next(`/${targetLang}/home${to.hash || '#welcome'}`)
        return
      }
      next()
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: to => {
      // Intentamos extraer el idioma de la URL actual
      const urlLang = window.location.pathname.split('/')[1]
      const validLanguages = ['es', 'en']
      const targetLang = validLanguages.includes(urlLang) ? urlLang : getUserLanguage()
      return `/${targetLang}/home${to.hash || '#welcome'}`
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

  // Solo validamos el idioma si estamos en una ruta que debería tenerlo
  if (to.path !== '/' && lang && !validLanguages.includes(lang)) {
    // Intentamos mantener el idioma actual si existe
    const currentLang = from.params.lang
    const targetLang = validLanguages.includes(currentLang) ? currentLang : getUserLanguage()
    next(`/${targetLang}/home${to.hash || '#welcome'}`)
    return
  }
  next()
})

// Handle navigation errors
router.onError((error, to) => {
  console.error('Router error:', error)
  // Intentamos mantener el idioma actual
  const currentPath = window.location.pathname
  const currentLang = currentPath.split('/')[1]
  const validLanguages = ['es', 'en']
  const targetLang = validLanguages.includes(currentLang) ? currentLang : getUserLanguage()
  router.push(`/${targetLang}/home${to?.hash || '#welcome'}`)
})

export default router 
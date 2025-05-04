import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// Function to get user's preferred language
const getUserLanguage = () => {
  const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase()
  return browserLang.startsWith('es') ? 'es' : 'en'
}

const routes = [
  {
    path: '/',
    redirect: () => {
      return `/${getUserLanguage()}/home`
    }
  },
  {
    path: '/:lang/home',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      const validLanguages = ['es', 'en']
      if (!validLanguages.includes(to.params.lang)) {
        next(`/${getUserLanguage()}/home`)
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

// Handle GitHub Pages 404 redirect
const currentUrl = window.location.href;
if (currentUrl.includes('/en/') || currentUrl.includes('/es/')) {
  const segments = currentUrl.split('/');
  const langIndex = segments.findIndex(s => s === 'en' || s === 'es');
  if (langIndex !== -1) {
    const lang = segments[langIndex];
    router.push(`/${lang}/home${window.location.hash || ''}`);
  }
}

export default router 
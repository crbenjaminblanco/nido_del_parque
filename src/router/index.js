import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    redirect: '/es/home'
  },
  {
    path: '/es',
    redirect: '/es/home'
  },
  {
    path: '/en',
    redirect: '/en/home'
  },
  {
    path: '/:lang/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:lang/wifi',
    name: 'wifi',
    component: HomeView
  },
  {
    path: '/:lang/gallery',
    name: 'gallery',
    component: HomeView
  },
  {
    path: '/:lang/recommendations',
    name: 'recommendations',
    component: HomeView
  },
  {
    path: '/:lang/contact',
    name: 'contact',
    component: HomeView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/es/home'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// Navigation guards
router.beforeEach(async (to, from, next) => {
  try {
    const validLanguages = ['es', 'en']
    const lang = to.params.lang

    // Si ya estamos en una ruta válida, no redirigir
    if (to.matched.length > 0 && to.matched[0].path !== '/:pathMatch(.*)') {
      next()
      return
    }

    if (lang && !validLanguages.includes(lang)) {
      next('/es/home')
      return
    }

    next()
  } catch (error) {
    console.error('Navigation error:', error)
    next('/es/home')
  }
})

// Handle navigation errors
router.onError((error) => {
  console.error('Router error:', error)
  router.push('/es/home')
})

export default router 
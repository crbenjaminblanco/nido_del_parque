import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    redirect: '/es/home'
  },
  {
    path: '/:lang',
    redirect: to => `/${to.params.lang}/home`
  },
  {
    path: '/:lang/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/es/home'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Navigation guards
router.beforeEach((to, from, next) => {
  const validLanguages = ['es', 'en']
  const lang = to.params.lang

  if (!validLanguages.includes(lang)) {
    next('/es/home')
    return
  }

  next()
})

// Handle navigation errors
router.onError((error) => {
  console.error('Router error:', error)
  router.push('/es/home')
})

export default router 
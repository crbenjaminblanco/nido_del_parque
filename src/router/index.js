import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const routes = [
  {
    path: '/',
    redirect: '/es/home'
  },
  {
    path: '/:lang/home',
    name: 'Home',
    component: App
  },
  {
    path: '/:lang/wifi',
    name: 'Wifi',
    component: App
  },
  {
    path: '/:lang/gallery',
    name: 'Gallery',
    component: App
  },
  {
    path: '/:lang/recommendations',
    name: 'Recommendations',
    component: App
  },
  {
    path: '/:lang/contact',
    name: 'Contact',
    component: App
  },
  // Catch all route for invalid paths
  {
    path: '/:pathMatch(.*)*',
    redirect: '/es/home'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router 
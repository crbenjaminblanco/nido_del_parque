import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Custom CSS Variables
import '@/assets/styles/variables.css'

// i18n
import i18n from './i18n/i18n'

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')

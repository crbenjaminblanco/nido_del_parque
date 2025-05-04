import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Bootstrap
import * as bootstrap from 'bootstrap'
window.bootstrap = bootstrap
import 'bootstrap/dist/css/bootstrap.css'

// Custom CSS Variables
import '@/assets/styles/variables.css'

// i18n
import i18n from './i18n/i18n'

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')

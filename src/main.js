import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Custom CSS Variables
import '@/assets/styles/variables.css'

// Bootstrap JS
import * as bootstrap from 'bootstrap'
window.bootstrap = bootstrap

// i18n
import i18n from './i18n/i18n'

createApp(App).use(i18n).mount('#app')

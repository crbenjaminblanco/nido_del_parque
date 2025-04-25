import { createApp } from 'vue'
import App from './App.vue'

// Bootrstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// i18n
import i18n from './i18n/i18n'

createApp(App).use(i18n).mount('#app')

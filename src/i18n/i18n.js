// src/i18n.js
import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    title: 'Nido del parque',
    goodbye: 'Goodbye',
  }
}

const i18n = createI18n({
  locale: 'en', // default locale
  fallbackLocale: 'en',
  messages,
})

export default i18n
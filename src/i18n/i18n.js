// src/i18n/i18n.js
import { createI18n } from 'vue-i18n'
import en from './locales/en'
import es from './locales/es'

// Get browser language
const getBrowserLocale = () => {
  const navigatorLocale = navigator.languages !== undefined 
    ? navigator.languages[0] 
    : navigator.language

  if (!navigatorLocale) {
    return 'en'
  }

  // Get first two chars of locale ('es-MX' becomes 'es')
  const trimmedLocale = navigatorLocale.trim().split(/-|_/)[0]

  // Check if we support this language
  return ['es', 'en'].includes(trimmedLocale) ? trimmedLocale : 'en'
}

const messages = {
  en,
  es
}

const i18n = createI18n({
  locale: getBrowserLocale(), // use browser's language
  fallbackLocale: 'en',
  messages,
})

export default i18n
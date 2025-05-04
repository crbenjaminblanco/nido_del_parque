// src/i18n/i18n.js
import { createI18n } from 'vue-i18n'
import en from './locales/en'
import es from './locales/es'

// Get browser language and return supported locale code
const getBrowserLocale = () => {
  const navigatorLocale = navigator.languages !== undefined 
    ? navigator.languages[0] 
    : navigator.language

  if (!navigatorLocale) {
    return 'en'
  }

  // Extract language code from locale string (e.g., 'es-MX' -> 'es')
  const trimmedLocale = navigatorLocale.trim().split(/-|_/)[0]

  // Return supported language or fallback to English
  return ['es', 'en'].includes(trimmedLocale) ? trimmedLocale : 'en'
}

const messages = {
  en,
  es
}

const i18n = createI18n({
  locale: getBrowserLocale(),
  fallbackLocale: 'en',
  messages,
})

export default i18n
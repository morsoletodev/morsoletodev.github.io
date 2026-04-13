import { createI18n } from 'vue-i18n'
import ptBR from './locales/pt-BR.json'
import en from './locales/en.json'

const getBrowserLocale = () => {
  const lang = navigator.language || navigator.userLanguage

  return lang ? (lang == 'pt-BR' ? 'pt-BR' : 'en') : 'en'
}

const messages = {
  en: en,
  'pt-BR': ptBR,
}

const i18n = createI18n({
  legacy: false,
  locale: getBrowserLocale(),
  fallbackLocale: 'en',
  escapeParameter: true,
  messages,
})

export default i18n

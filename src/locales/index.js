import I18n from 'i18n-js'
import numeral from 'numeral'
import en from './en_us'
import pt from './pt_br'

numeral.register('locale', 'pt_BR', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  currency: {
    symbol: 'R$ '
  }
})

const normalizeTranslate = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  en: 'en_US',
  pt_US: 'pt_BR'
}

I18n.translations = {
  en_US: en,
  pt_BR: pt
}

I18n.defaultLocale = 'pt_BR'

const getLanguageByDevice = () => {
  return 'pt_BR'
}

const setLanguageToI18n = () => {
  const language = getLanguageByDevice()
  const translateNormalize = normalizeTranslate[language]
  const supportedLanguage = Object.prototype.hasOwnProperty.call(I18n.translations, translateNormalize)

  if (supportedLanguage) {
    setLocale(translateNormalize)
  } else {
    setLocale(I18n.defaultLocale)
  }
}

export const translate = (key, params = {}) => I18n.t(key, params)
export const setLocale = locale => {
  I18n.locale = locale
  numeral.locale(locale)
}

setLanguageToI18n()

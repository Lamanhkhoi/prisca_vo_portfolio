import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

export const LANGUAGES = ['en', 'vi']

// Every src/i18n/locales/<lang>/<namespace>.json file is loaded automatically.
const files = import.meta.glob('./locales/*/*.json', { eager: true })
const resources = {}
for (const [path, mod] of Object.entries(files)) {
  const [, lng, ns] = path.match(/locales\/(\w+)\/(\w+)\.json$/)
  resources[lng] ??= {}
  resources[lng][ns] = mod.default
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: LANGUAGES,
    defaultNS: 'common',
    ns: Object.keys(resources.en),
    interpolation: { escapeValue: false },
    // English is the default; a visitor's choice is remembered in localStorage.
    detection: { order: ['localStorage'], lookupLocalStorage: 'lang', caches: ['localStorage'] },
    saveMissing: import.meta.env.DEV,
    missingKeyHandler: (lngs, ns, key) => {
      console.warn(`[i18n] Missing key "${ns}:${key}" (${lngs.join(', ')})`)
    },
  })

const syncHtmlLang = (lng) => {
  document.documentElement.lang = lng
}
syncHtmlLang(i18n.resolvedLanguage || 'en')
i18n.on('languageChanged', syncHtmlLang)

export default i18n

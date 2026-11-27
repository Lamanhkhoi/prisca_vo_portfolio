import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

/**
 * Translation helpers for one namespace (one JSON file per page).
 * list(key) always returns an array, so a typo in a locale file shows a warning instead of crashing the page.
 */
export function useContent(ns) {
  const { t, i18n } = useTranslation(ns)

  const list = (key) => {
    const value = t(key, { returnObjects: true })
    if (Array.isArray(value)) return value
    if (import.meta.env.DEV) console.warn(`[i18n] "${ns}:${key}" should be a list`)
    return []
  }

  return { t, list, lang: i18n.resolvedLanguage }
}

export function useDocumentTitle(title) {
  useEffect(() => {
    if (title) document.title = title
  }, [title])
}

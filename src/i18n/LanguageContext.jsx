import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import en from './en.js'
import es from './es.js'

const dictionaries = { en, es }
const STORAGE_KEY = 'abresq-lang'

function detectInitialLanguage() {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored && dictionaries[stored]) return stored
  const browserLang = window.navigator.language?.slice(0, 2)
  return dictionaries[browserLang] ? browserLang : 'en'
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang: () => setLang((prev) => (prev === 'en' ? 'es' : 'en')),
      t: dictionaries[lang],
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

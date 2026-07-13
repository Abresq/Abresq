import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      className="lang-toggle"
      onClick={toggleLang}
      aria-label="Toggle language"
      type="button"
    >
      <span className={lang === 'en' ? 'active' : ''}>EN</span>
      <span className="lang-divider">/</span>
      <span className={lang === 'es' ? 'active' : ''}>ES</span>
    </button>
  )
}

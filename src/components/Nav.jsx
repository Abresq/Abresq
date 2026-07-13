import { useLanguage } from '../i18n/LanguageContext.jsx'
import LanguageToggle from './LanguageToggle.jsx'

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Nav() {
  const { t } = useLanguage()

  return (
    <header className="nav">
      <div className="nav-inner">
        <a
          className="nav-brand"
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            scrollToId('top')
          }}
        >
          AE
        </a>
        <nav className="nav-links">
          <button type="button" onClick={() => scrollToId('about')}>
            {t.nav.about}
          </button>
          <button type="button" onClick={() => scrollToId('projects')}>
            {t.nav.projects}
          </button>
          <button type="button" onClick={() => scrollToId('contact')}>
            {t.nav.contact}
          </button>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  )
}

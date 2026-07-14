import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import LanguageToggle from './LanguageToggle.jsx'

const SECTION_IDS = ['top', 'about', 'experience', 'projects', 'contact']

function scrollToId(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Nav() {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState('top')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const targets = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean)
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ]

  const goTo = (id) => {
    scrollToId(id)
    setMenuOpen(false)
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <a
          className="nav-brand"
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            goTo('top')
          }}
        >
          AE
        </a>

        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activeSection === item.id ? 'is-active' : ''}
              onClick={() => goTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="nav-right">
          <LanguageToggle />
          <button
            type="button"
            className="nav-hamburger"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {menuOpen ? (
          <div className="nav-mobile-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={activeSection === item.id ? 'is-active' : ''}
                onClick={() => goTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  )
}

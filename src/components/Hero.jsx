import { useLanguage } from '../i18n/LanguageContext.jsx'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">Ulm, Germany</p>
        <h1 className="hero-name">{t.hero.name}</h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>
        <p className="hero-tagline">{t.hero.tagline}</p>
        <a
          className="hero-cta"
          href="#projects"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          {t.hero.cta}
          <span aria-hidden="true" className="hero-cta-arrow">
            →
          </span>
        </a>
      </div>
    </section>
  )
}

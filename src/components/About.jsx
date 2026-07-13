import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const { t } = useLanguage()
  const [ref, visible] = useReveal()

  return (
    <section id="about" className="about">
      <div ref={ref} className={`reveal about-inner${visible ? ' is-visible' : ''}`}>
        <h2 className="section-heading">{t.about.heading}</h2>
        <div className="about-body">
          {t.about.body.map((paragraph) => (
            <p key={paragraph.slice(0, 20)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

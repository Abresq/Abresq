import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useReveal } from '../hooks/useReveal.js'

export default function ExperienceRow({ role, index }) {
  const { lang } = useLanguage()
  const [ref, visible] = useReveal()
  const style = { transitionDelay: `${Math.min(index, 5) * 60}ms` }

  return (
    <div ref={ref} className={`experience-row reveal${visible ? ' is-visible' : ''}`} style={style}>
      <span className="experience-date">{role.dateLabel}</span>
      <div>
        <div className="experience-top">
          <span className="experience-org">{role.org}</span>
          <span className="experience-role">{role.role}</span>
        </div>
        <ul className="experience-bullets">
          {role.bullets[lang].map((bullet) => (
            <li key={bullet.slice(0, 24)}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

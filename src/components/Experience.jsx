import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useReveal } from '../hooks/useReveal.js'
import { experience, skills, achievements } from '../data/experience.js'
import ExperienceRow from './ExperienceRow.jsx'

export default function Experience() {
  const { lang, t } = useLanguage()
  const [ref, visible] = useReveal()

  return (
    <section id="experience" className="experience">
      <div className="experience-inner">
        <h2 className="section-heading">{t.experience.heading}</h2>
        <p className="section-subheading">{t.experience.subheading}</p>

        <div className="experience-list">
          {experience.map((role, index) => (
            <ExperienceRow key={role.id} role={role} index={index} />
          ))}
        </div>

        <div ref={ref} className={`reveal${visible ? ' is-visible' : ''}`}>
          <h3 className="experience-label-heading">{t.experience.skillsLabel}</h3>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <h3 className="experience-label-heading experience-achievements-heading">{t.experience.achievementsHeading}</h3>
          <div className="achievements-list">
            {achievements[lang].map((item) => (
              <p key={item.slice(0, 24)}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { useLanguage } from '../i18n/LanguageContext.jsx'
import { useReveal } from '../hooks/useReveal.js'

export default function ProjectCard({ project, index }) {
  const { lang, t } = useLanguage()
  const [ref, visible] = useReveal()
  const isLive = project.status === 'live'
  const style = { transitionDelay: `${Math.min(index, 5) * 60}ms` }

  const Inner = (
    <>
      <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
      <div className="project-main">
        <div className="project-item-top">
          <span className="project-name">{project.name}</span>
          {isLive ? (
            <span className="project-visit">
              {t.projects.visit}
              <span aria-hidden="true" className="arrow">
                →
              </span>
            </span>
          ) : (
            <span className="project-status-soon">{t.projects.comingSoon}</span>
          )}
        </div>
        <p className="project-desc">{project.description[lang]}</p>
        {project.tags?.length ? <p className="project-meta">{project.tags.join(' · ')}</p> : null}
      </div>
    </>
  )

  if (isLive && project.url) {
    return (
      <a
        ref={ref}
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={`project-item reveal${visible ? ' is-visible' : ''}`}
        style={style}
      >
        {Inner}
      </a>
    )
  }

  return (
    <div ref={ref} className={`project-item is-disabled reveal${visible ? ' is-visible' : ''}`} style={style}>
      {Inner}
    </div>
  )
}

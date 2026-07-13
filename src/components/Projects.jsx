import { useLanguage } from '../i18n/LanguageContext.jsx'
import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <h2 className="section-heading">{t.projects.heading}</h2>
        <p className="section-subheading">{t.projects.subheading}</p>
        <div className="projects-list">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

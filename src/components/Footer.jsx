import { useLanguage } from '../i18n/LanguageContext.jsx'
import { contact } from '../data/contact.js'

export default function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="footer">
      <div className="footer-inner">
        <h2 className="section-heading">{t.footer.heading}</h2>
        <div className="footer-contact">
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="footer-btn">
            {t.footer.linkedin}
            <span aria-hidden="true" className="footer-btn-arrow">
              →
            </span>
          </a>
          <p className="footer-email-row">
            <span className="footer-email-label">{t.footer.emailLabel}</span>
            <a href={`mailto:${contact.email}`} className="footer-email">
              {contact.email}
            </a>
          </p>
        </div>
        <p className="footer-bottom">
          © {year} Abraham Esquivel. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}

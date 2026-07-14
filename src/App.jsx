import { LanguageProvider } from './i18n/LanguageContext.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import CursorSpotlight from './components/CursorSpotlight.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <LanguageProvider>
      <ScrollProgress />
      <CursorSpotlight />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </LanguageProvider>
  )
}

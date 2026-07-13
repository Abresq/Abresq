# abresq.com

Personal landing page and project hub for **Abraham Esquivel** — Mechatronics Engineer turned MSc Finance student.

Abraham moved from Mexico to Ulm, Germany, to pursue an MSc in Finance after several years in engineering and consulting. This site is his central hub: a short professional introduction plus a growing list of links to the things he builds and ships, starting with [Wordy](https://wordy.abresq.com), a vocabulary learning app.

## Stack

- **React + Vite** (Vite 6.x — intentionally pinned below Vite 7/8 to avoid their experimental rolldown bundler, which has known ARM64 Docker install issues)
- No UI framework, no external fonts, no analytics/tracking scripts
- Plain CSS with custom properties for the design system (light theme, serif/sans type pairing)

## Features

- Bilingual (English / Spanish) via a lightweight i18n context, defaulting to the browser's language
- Flexible project list: add a new project by appending one object to `src/data/projects.js`, no layout changes needed
- Scroll-reveal and hover micro-interactions, respecting `prefers-reduced-motion`
- Fully responsive, mobile-first layout

## Project structure

```
src/
  components/   Nav, Hero, About, Projects, ProjectCard, Footer, LanguageToggle
  data/         projects.js (project list), contact.js (LinkedIn/email)
  i18n/         en.js, es.js (copy), LanguageContext.jsx (provider/hook)
  hooks/        useReveal.js (scroll-triggered fade-in)
  styles/       index.css (design system + layout)
```

### Adding a new project

Edit `src/data/projects.js` and append an object:

```js
{
  id: 'my-project',
  name: 'My Project',
  description: { en: '...', es: '...' },
  url: 'https://my-project.abresq.com',
  tags: ['React', 'Some Tag'],
  status: 'live', // or anything else to show "coming soon"
}
```

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Deployment

Deployed via [Coolify](https://coolify.io) on a self-hosted Oracle Cloud ARM64 (Ampere) VPS as a static site. Publish directory is `dist`.

## Contact

- LinkedIn: [linkedin.com/in/abraham-esquivel-901091182](https://www.linkedin.com/in/abraham-esquivel-901091182/)
- Email: diegoesq05@gmail.com

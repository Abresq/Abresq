// Add a new project by adding an object to this array; no layout code changes needed.
// `description` and `tags` support { en, es } for bilingual copy; everything else is plain.
export const projects = [
  {
    id: 'wordy',
    name: 'Wordy',
    description: {
      en: 'Turns everyday phrases into personalized flashcards. Learn through spaced repetition and track your progress with clear statistics.',
      es: 'Traduce frases de tu día a día y las convierte en flashcards personalizadas. Aprende con repetición espaciada y da seguimiento a tu progreso con estadísticas claras.',
    },
    url: 'https://wordy.abresq.com',
    tags: ['React', 'Spaced Repetition'],
    status: 'live',
  },
]

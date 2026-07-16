// Add a new project by adding an object to this array; no layout code changes needed.
// `description` and `tags` support { en, es } for bilingual copy; everything else is plain.
export const projects = [
  {
    id: 'vexra',
    name: 'Vexra',
    description: {
      en: 'Turns financial news into fast, decision-ready signals: sentiment, technical indicators, and live price context in a single scrollable feed.',
      es: 'Convierte noticias financieras en señales accionables al instante: sentimiento, indicadores técnicos y precio en vivo en un solo feed.',
    },
    url: 'https://vexra.abresq.com',
    tags: ['React Native', 'Market Overview'],
    status: 'live',
  },
  {
    id: 'mrfs',
    name: 'MRFS',
    description: {
      en: 'An interactive dashboard for backtesting a Bollinger Bands, RSI, and divergence FX strategy, comparing in-sample and out-of-sample performance, Monte Carlo runs, and walk-forward tests across EUR/USD, GBP/USD, and AUD/USD.',
      es: 'Un dashboard interactivo para backtesting de una estrategia de FX con Bandas de Bollinger, RSI y divergencia, que compara desempeño in-sample y out-of-sample, corridas de Monte Carlo y pruebas walk-forward en EUR/USD, GBP/USD y AUD/USD.',
    },
    url: 'https://mrfs.abresq.com',
    tags: ['React', 'Backtesting'],
    status: 'live',
  },
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

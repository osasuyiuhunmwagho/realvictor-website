import { useFadeUp } from '../hooks/useFadeUp'
import './Sports.css'

const SPORTS = [
  { name: 'Basketball', emoji: '🏀', accent: '#E86833' },
  { name: 'Soccer', emoji: '⚽', accent: '#38A169' },
  { name: 'Football', emoji: '🏈', accent: '#8B5E3C' },
  { name: 'Tennis', emoji: '🎾', accent: '#C6D94E' },
  { name: 'Volleyball', emoji: '🏐', accent: '#E2B93B' },
  { name: 'Baseball', emoji: '⚾', accent: '#C53030' },
  { name: 'Running', emoji: '🏃', accent: '#3182CE' },
  { name: 'More Sports', emoji: '🏆', accent: 'var(--gold)' },
]

export default function Sports() {
  const ref = useFadeUp()

  return (
    <section className="sports" id="sports" ref={ref}>
      {/* White section for contrast break */}
      <div className="sports__inner">
        <div className="container">
          <div className="sports__header fade-up">
            <span className="section-label" style={{ color: 'var(--gold-rich)' }}>
              Sports
            </span>
            <h2 className="section-title" style={{ color: 'var(--black)' }}>
              One Platform. Every Sport.
            </h2>
            <p className="section-subtitle" style={{ color: 'var(--gray)' }}>
              Whether you play on courts, fields, or tracks — RealVictors is
              built for your game.
            </p>
          </div>

          <div className="sports__grid">
            {SPORTS.map((sport, i) => (
              <div
                className="sports__card fade-up"
                key={sport.name}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className="sports__card-icon"
                  style={{ background: `${sport.accent}15` }}
                >
                  <span>{sport.emoji}</span>
                </div>
                <span className="sports__card-name">{sport.name}</span>
                {/* Subtle accent bar */}
                <div
                  className="sports__card-bar"
                  style={{ background: sport.accent }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

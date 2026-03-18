import { useFadeUp } from '../hooks/useFadeUp'
import './Showcase.css'

/**
 * Product Showcase — displays overlapping phone mockups
 * showcasing different app screens (stats, teams, match cards).
 */
export default function Showcase() {
  const ref = useFadeUp()

  return (
    <section className="showcase noise-bg" ref={ref}>
      <div className="container">
        <div className="showcase__header fade-up">
          <span className="section-label">The App</span>
          <h2 className="section-title">
            Built for the <span style={{ color: 'var(--gold)' }}>Game</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
            A premium sports experience in your pocket — profiles, stats, games,
            and teams, all designed for athletes.
          </p>
        </div>

        <div className="showcase__phones fade-up">
          {/* Phone 1 — Stats / Profile */}
          <div className="showcase__phone showcase__phone--left">
            <div className="s-screen">
              <div className="s-screen__top">
                <div className="s-label">PLAYER STATS</div>
                <div className="s-big-stat">
                  <span className="s-big-num">24.7</span>
                  <span className="s-big-unit">PPG</span>
                </div>
                <div className="s-bar-row">
                  <div className="s-bar"><div className="s-bar__fill" style={{ width: '82%' }} /></div>
                  <div className="s-bar"><div className="s-bar__fill s-bar__fill--alt" style={{ width: '67%' }} /></div>
                  <div className="s-bar"><div className="s-bar__fill" style={{ width: '91%' }} /></div>
                </div>
              </div>
              <div className="s-screen__badges">
                <span className="s-badge">🏅 Top 5%</span>
                <span className="s-badge s-badge--gold">MVP x3</span>
              </div>
            </div>
          </div>

          {/* Phone 2 — Main / Feed (center, elevated) */}
          <div className="showcase__phone showcase__phone--center">
            <div className="s-screen">
              <div className="s-screen__header">
                <span className="s-screen__logo">RV</span>
                <span className="s-screen__nav-dots">•••</span>
              </div>
              <div className="s-feed-card">
                <div className="s-feed-top">
                  <div className="s-feed-avatar" />
                  <div>
                    <div className="s-feed-name">Sarah K.</div>
                    <div className="s-feed-meta">Soccer • 2h ago</div>
                  </div>
                </div>
                <div className="s-feed-body">Just dominated the 7v7 league final ⚽🔥</div>
                <div className="s-feed-stats">
                  <span>❤️ 48</span>
                  <span>💬 12</span>
                </div>
              </div>
              <div className="s-feed-card s-feed-card--match">
                <div className="s-match-badge">LIVE MATCH</div>
                <div className="s-match-score">
                  <span>Wolves</span>
                  <span className="s-match-vs">3 — 2</span>
                  <span>Hawks</span>
                </div>
                <div className="s-match-time">Q4 • 2:31</div>
              </div>
            </div>
          </div>

          {/* Phone 3 — Team / Games */}
          <div className="showcase__phone showcase__phone--right">
            <div className="s-screen">
              <div className="s-label">UPCOMING GAMES</div>
              <div className="s-game-item">
                <div className="s-game-sport">🏀</div>
                <div>
                  <div className="s-game-title">5v5 Pickup</div>
                  <div className="s-game-when">Today, 7 PM • 2 spots</div>
                </div>
              </div>
              <div className="s-game-item">
                <div className="s-game-sport">⚽</div>
                <div>
                  <div className="s-game-title">Indoor Soccer League</div>
                  <div className="s-game-when">Tomorrow, 8 PM</div>
                </div>
              </div>
              <div className="s-game-item">
                <div className="s-game-sport">🎾</div>
                <div>
                  <div className="s-game-title">Singles Tournament</div>
                  <div className="s-game-when">Sat, 10 AM • Open</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

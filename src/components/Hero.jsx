import { ArrowRight, ChevronDown } from 'lucide-react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero noise-bg">
      {/* Ambient background elements */}
      <div className="hero__bg">
        <div className="hero__spotlight" />
        <div className="hero__grid-lines" />
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Coming Soon — Early Access 2026
          </div>

          <h1 className="hero__headline">
            Find the Game.<br />
            <span className="hero__headline-gold">Join the Squad.</span>
          </h1>

          <p className="hero__sub">
            RealVictors is the sports social platform where athletes discover
            local games, join teams, track stats, and build their name in the
            community.
          </p>

          <div className="hero__actions">
            <a href="#waitlist" className="btn-primary">
              Join the Waitlist <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="btn-secondary">
              See How It Works <ChevronDown size={18} />
            </a>
          </div>
        </div>

        {/* App Mockup */}
        <div className="hero__mockup">
          <div className="hero__phone">
            <div className="hero__phone-screen">
              {/* Simulated app UI */}
              <div className="mock-header">
                <span className="mock-avatar" />
                <div>
                  <div className="mock-name">Marcus J.</div>
                  <div className="mock-tag">@marcusj • Basketball</div>
                </div>
                <div className="mock-rating">4.8 ★</div>
              </div>

              <div className="mock-stats-row">
                <div className="mock-stat">
                  <span className="mock-stat-num">127</span>
                  <span className="mock-stat-label">Games</span>
                </div>
                <div className="mock-stat">
                  <span className="mock-stat-num">34</span>
                  <span className="mock-stat-label">Wins</span>
                </div>
                <div className="mock-stat">
                  <span className="mock-stat-num">89%</span>
                  <span className="mock-stat-label">Rate</span>
                </div>
              </div>

              <div className="mock-card">
                <div className="mock-card-badge">NEXT GAME</div>
                <div className="mock-card-title">5v5 Pickup — Downtown Courts</div>
                <div className="mock-card-meta">Today, 6:30 PM • 3 spots left</div>
              </div>

              <div className="mock-card mock-card--alt">
                <div className="mock-card-badge mock-card-badge--team">TEAM</div>
                <div className="mock-card-title">Eastside Ballers</div>
                <div className="mock-card-meta">12 Members • 8-2 Record</div>
              </div>
            </div>
          </div>

          {/* Floating accent card */}
          <div className="hero__float-card">
            <span className="hero__float-icon">🏆</span>
            <div>
              <div className="hero__float-title">MVP This Week</div>
              <div className="hero__float-val">+23 pts avg</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

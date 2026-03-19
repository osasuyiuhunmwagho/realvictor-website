import { ArrowRight, ChevronDown } from 'lucide-react'
import homepageImg from '../assets/RV-homepage.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero noise-bg">
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
              Join Community <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="btn-secondary">
              See How It Works <ChevronDown size={18} />
            </a>
          </div>
        </div>

        {/* Real app screenshot in a phone frame */}
        <div className="hero__mockup">
          <div className="hero__phone">
            <img
              src={homepageImg}
              alt="RealVictors app — discover pickup games near you"
              className="hero__phone-img"
            />
          </div>

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

import { useFadeUp } from '../hooks/useFadeUp'
import rv2Img from '../assets/RV-2.png'
import rv3Img from '../assets/RV-3.png'
import rvMapImg from '../assets/RV-map.png'
import './Showcase.css'

/**
 * Product Showcase — overlapping phone mockups
 * using real app screenshots for game detail, lineup, and map views.
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
          {/* Left — Team lineup / exhibition */}
          <div className="showcase__phone showcase__phone--left">
            <img src={rv3Img} alt="Exhibition game lineup" className="showcase__phone-img" />
          </div>

          {/* Center — Game detail (elevated) */}
          <div className="showcase__phone showcase__phone--center">
            <img src={rv2Img} alt="Game detail — join a pickup run" className="showcase__phone-img" />
          </div>

          {/* Right — Map discovery */}
          <div className="showcase__phone showcase__phone--right">
            <img src={rvMapImg} alt="Map view — find games near you" className="showcase__phone-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

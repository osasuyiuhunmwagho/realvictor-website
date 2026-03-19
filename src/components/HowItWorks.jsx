import { Eye, MapPin, Zap } from 'lucide-react'
import { useFadeUp } from '../hooks/useFadeUp'
import './HowItWorks.css'

const STEPS = [
  {
    num: '01',
    icon: Eye,
    title: 'Open',
    desc: 'See upcoming games near you. Browse what's happening today, tomorrow, and this week.',
  },
  {
    num: '02',
    icon: MapPin,
    title: 'Find',
    desc: 'Explore games on a live Ottawa map. Filter by skill level, distance, and sport.',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Play',
    desc: 'Show up. Compete. Build your reliability and become a trusted player in the community.',
  },
]

export default function HowItWorks() {
  const ref = useFadeUp()

  return (
    <section className="hiw noise-bg" id="how-it-works" ref={ref}>
      <div className="container">
        <div className="hiw__header fade-up">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Open. Find. Play.</h2>
        </div>

        <div className="hiw__steps">
          {STEPS.map((step, i) => (
            <div
              className="hiw__step fade-up"
              key={step.num}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="hiw__step-num">{step.num}</div>
              <div className="hiw__step-icon">
                <step.icon size={28} strokeWidth={2} />
              </div>
              <h3 className="hiw__step-title">{step.title}</h3>
              <p className="hiw__step-desc">{step.desc}</p>
              {/* Connector line (not on last) */}
              {i < STEPS.length - 1 && <div className="hiw__connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

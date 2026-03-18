import { UserPlus, Search, TrendingUp } from 'lucide-react'
import { useFadeUp } from '../hooks/useFadeUp'
import './HowItWorks.css'

const STEPS = [
  {
    num: '01',
    icon: UserPlus,
    title: 'Create Your Athlete Profile',
    desc: 'Sign up, pick your sports, and build a profile that showcases your game.',
  },
  {
    num: '02',
    icon: Search,
    title: 'Discover Games & Teams',
    desc: 'Browse local matchups, open runs, and teams looking for players like you.',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Compete, Connect & Grow',
    desc: 'Play games, track your stats, climb the rankings, and grow your network.',
  },
]

export default function HowItWorks() {
  const ref = useFadeUp()

  return (
    <section className="hiw noise-bg" id="how-it-works" ref={ref}>
      <div className="container">
        <div className="hiw__header fade-up">
          <span className="section-label">How It Works</span>
          <h2 className="section-title">Three Steps to Game Day</h2>
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

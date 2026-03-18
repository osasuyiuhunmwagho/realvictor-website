import {
  MapPin,
  User,
  Users,
  BarChart3,
  MessageCircle,
  Trophy,
} from 'lucide-react'
import { useFadeUp } from '../hooks/useFadeUp'
import './Features.css'

const FEATURES = [
  {
    icon: MapPin,
    title: 'Discover Local Games',
    desc: 'Find pickup games, tournaments, and matches happening near you — any sport, any skill level.',
  },
  {
    icon: User,
    title: 'Build Your Player Profile',
    desc: 'Showcase your skills, stats, and game history. Let your record speak for itself.',
  },
  {
    icon: Users,
    title: 'Join Teams & Leagues',
    desc: 'Create or join teams, organize league play, and build a winning roster.',
  },
  {
    icon: BarChart3,
    title: 'Track Performance',
    desc: 'Log stats, monitor progress, and see how you stack up against the competition.',
  },
  {
    icon: MessageCircle,
    title: 'Connect With Athletes',
    desc: 'Chat with players, coordinate games, and grow your local sports network.',
  },
  {
    icon: Trophy,
    title: 'Compete & Climb Rankings',
    desc: 'Earn badges, climb leaderboards, and prove you belong at the top.',
  },
]

export default function Features() {
  const ref = useFadeUp()

  return (
    <section className="features noise-bg" id="features" ref={ref}>
      <div className="container">
        <div className="features__header fade-up">
          <span className="section-label">Features</span>
          <h2 className="section-title">Everything an Athlete Needs</h2>
          <p className="section-subtitle">
            One platform to find games, build your crew, and track your rise.
          </p>
        </div>

        <div className="features__grid">
          {FEATURES.map((f, i) => (
            <div
              className="features__card fade-up"
              key={f.title}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="features__icon-wrap">
                <f.icon size={24} strokeWidth={2} />
              </div>
              <h3 className="features__card-title">{f.title}</h3>
              <p className="features__card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

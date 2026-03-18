import { useFadeUp } from '../hooks/useFadeUp'
import './StatsStrip.css'

const STATS = [
  { value: '10K+', label: 'Athletes Joined' },
  { value: '2,500+', label: 'Games Hosted' },
  { value: '800+', label: 'Teams Formed' },
  { value: '50+', label: 'Cities Active' },
]

export default function StatsStrip() {
  const ref = useFadeUp()

  return (
    <section className="stats-strip" ref={ref}>
      <div className="stats-strip__inner container">
        {STATS.map((stat) => (
          <div className="stats-strip__item fade-up" key={stat.label}>
            <span className="stats-strip__value">{stat.value}</span>
            <span className="stats-strip__label">{stat.label}</span>
          </div>
        ))}
      </div>
      {/* Gold accent line at bottom */}
      <div className="stats-strip__accent" />
    </section>
  )
}

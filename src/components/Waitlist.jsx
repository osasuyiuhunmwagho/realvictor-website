import { ArrowRight } from 'lucide-react'
import { useFadeUp } from '../hooks/useFadeUp'
import './Waitlist.css'

export default function Waitlist() {
  const ref = useFadeUp()
  const googleFormUrl = 'https://forms.gle/ZrYCvZAPLqZnifPH7'

  return (
    <section className="waitlist noise-bg" id="waitlist" ref={ref}>
      {/* Decorative spotlight */}
      <div className="waitlist__glow" />

      <div className="container">
        <div className="waitlist__card fade-up">
          <span className="section-label">Early Access</span>
          <h2 className="waitlist__title">Be First on the Field.</h2>
          <p className="waitlist__sub">
            Join the RealVictors community to get early access, launch updates,
            and priority invites.
          </p>

          <a
            href={googleFormUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-primary waitlist__btn"
          >
            Join Community <ArrowRight size={18} />
          </a>

          <p className="waitlist__trust">No spam. Early access only.</p>
        </div>
      </div>
    </section>
  )
}

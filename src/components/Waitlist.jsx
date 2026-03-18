import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { useFadeUp } from '../hooks/useFadeUp'
import './Waitlist.css'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const ref = useFadeUp()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    // TODO: wire up to real backend / email service
    setSubmitted(true)
  }

  return (
    <section className="waitlist noise-bg" id="waitlist" ref={ref}>
      {/* Decorative spotlight */}
      <div className="waitlist__glow" />

      <div className="container">
        <div className="waitlist__card fade-up">
          <span className="section-label">Early Access</span>
          <h2 className="waitlist__title">Be First on the Field.</h2>
          <p className="waitlist__sub">
            Join the RealVictors waitlist to get early access, launch updates,
            and priority invites.
          </p>

          {!submitted ? (
            <form className="waitlist__form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="waitlist__input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary waitlist__btn">
                Join Waitlist <ArrowRight size={18} />
              </button>
            </form>
          ) : (
            <div className="waitlist__success">
              <Check size={24} />
              <span>You're in. We'll be in touch soon.</span>
            </div>
          )}

          <p className="waitlist__trust">No spam. Early access only.</p>
        </div>
      </div>
    </section>
  )
}

import logo from '../assets/RV-logo.png'
import './Footer.css'

const LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Sports', href: '#sports' },
  { label: 'Waitlist', href: '#waitlist' },
]

const SOCIALS = [
  { label: 'Twitter', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'TikTok', href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__accent" />
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            <img src={logo} alt="RealVictors" className="footer__logo-img" />
          </a>
          <p className="footer__tagline">
            Your sports community, all in one place.
          </p>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Navigate</h4>
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Social</h4>
          <ul>
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href}>{s.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>&copy; {new Date().getFullYear()} RealVictors. All rights reserved.</span>
        <span className="footer__bottom-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </span>
      </div>
    </footer>
  )
}

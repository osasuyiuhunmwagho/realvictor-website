import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Showcase from './components/Showcase'
import Waitlist from './components/Waitlist'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Showcase />
        <Waitlist />
      </main>
      <Footer />
    </>
  )
}

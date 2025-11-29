import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import bgImage from './assets/bg-image.png'
import devLogo from './assets/google-developers.svg'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  if (loading) {
    return (
      <div className="loader-container">
        <img src="/loader.gif" alt="Loading..." className="loader-gif" />
      </div>
    )
  }

  return (
    <div className="app">
      <Navbar />
      <div className="site-container">
        <MainContent />
      </div>

      <footer className="site-footer" aria-label="Site contacts and copyright">
        <div className="footer-inner">
          <div className="footer-left">
            <div className="brand">
              <img src={devLogo} alt="Google Developer logo" className="footer-logo" />
              <div className="brand-text">
                <div className="footer-line">Google Developer Student Clubs</div>
                <div className="footer-line muted">Army Institute of Technology, Pune</div>
              </div>
            </div>
            <div className="footer-desc">Tech-driven student community focused on learning, building, and solving real-world challenges.</div>
            <div className="socials">
              <a href="#" aria-label="Instagram" className="social-icon">IG</a>
              <a href="#" aria-label="LinkedIn" className="social-icon">IN</a>
            </div>
          </div>

          <div className="footer-center">
            <h4 className="footer-title">Explore</h4>
            <ul className="footer-links">
              <li>Home</li>
              <li>About</li>
              <li>Events</li>
              <li>Team</li>
            </ul>
          </div>

          <div className="footer-right">
            <h4 className="footer-title">Get in Touch</h4>
            <div className="contact-item">Army Institute of Technology, Pune<br/>Maharashtra - 411015</div>
            <div className="contact-item">Mobile: 9649959730</div>
            <div className="contact-item">Email: gdsc@aitpune.edu.in</div>
          </div>
        </div>
      </footer>

      <div className="footer-skyline">
        <img src={bgImage} alt="city skyline" />
      </div>
    </div>
  )
}

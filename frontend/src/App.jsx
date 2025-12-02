import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import MainContent from './components/MainContent'

import Footer from './components/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])

  if (loading) {
    return (
      <div className="loader-container">
        <img src="/loader.gif" alt="Loading" className="loader-gif" />
      </div>
    )
  }

  return (
    <div className="app">
      <NavBar />
      <div className="site-container">
        <MainContent />
      </div>
      <Footer />
    </div>
  )
}

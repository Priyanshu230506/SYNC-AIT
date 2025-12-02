import React from 'react'

export default function SideBar({ open, onClose }) {
  return (
    <aside className={`sidebar${open ? ' open' : ''}`}>
      <button className="sidebar-close" aria-label="Close" onClick={onClose}>✕</button>
      <div className="sidebar-overlay" onClick={onClose}></div>
      <nav className="sidebar-nav">
        <ul>
          <li><a href="#home" onClick={onClose}>Home</a></li>
          <li><a href="#about" onClick={onClose}>About Us</a></li>
          <li><a href="#clubs" onClick={onClose}>Clubs</a></li>
          <li><a href="#secretary" onClick={onClose}>Secretary</a></li>
          <li><a href="#calendar" onClick={onClose}>Calender</a></li>
          <li><a href="#contact" onClick={onClose}>Contact Us</a></li>
        </ul>
      </nav>
    </aside>
  )
}

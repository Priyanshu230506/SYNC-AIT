import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideBar({ open, onClose }) {
  return (
    <aside className={`sidebar${open ? ' open' : ''}`}>
      <button className="sidebar-close" aria-label="Close" onClick={onClose}>✕</button>
      <div className="sidebar-overlay" onClick={onClose}></div>
      <nav className="sidebar-nav">
        <ul>
          <li><NavLink to={'/'} end onClick={onClose}>Home</NavLink></li>
          <li><a href="#about" onClick={onClose}>About Us</a></li>
          <li><NavLink to={'/clubs'} end onClick={onClose}>Clubs</NavLink></li>
          <li><a href="#secretary" onClick={onClose}>Secretary</a></li>
          <li><a href="#calendar" onClick={onClose}>Calender</a></li>
          <li><a href="#contact" onClick={onClose}>Contact Us</a></li>
        </ul>
      </nav>
    </aside>
  )
}

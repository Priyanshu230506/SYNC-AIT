import React from 'react'
import logo from '../assets/google-developers.svg'

export default function Navbar(){
  return (
    <header className="navbar" role="banner">
      <div className="nav-left">
        <img src={logo} alt="AIT Pune" className="logo" />
      </div>

      <nav className="nav-center" role="navigation" aria-label="Top navigation">
        <ul className="top-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#calendar">Calender</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

    
    </header>
  )
}

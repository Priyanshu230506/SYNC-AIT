import React from 'react'
import { googleDevelopers } from '../assets/club_logos'

export default function Navbar(){
  return (
    <header className="navbar" role="banner">
      <div className="nav-left">
        <img src={googleDevelopers} alt="AIT Pune" className="logo" />
      </div>
      
      <nav className="nav-center" role="navigation" aria-label="Top navigation">
        <ul className="top-nav">
          <li><a href="#" className='text-amber-400'>Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#clubs">Clubs</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#calendar">Calender</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

    
    </header>
  )
}

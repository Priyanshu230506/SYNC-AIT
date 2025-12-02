import React from 'react'
import './site.css'
import Home from '../sections/Home'
import Clubs from '../sections/Clubs'

export default function MainContent(){
  return (
    <main className="main">
      <Home />
      <Clubs />
    </main>
  )
}

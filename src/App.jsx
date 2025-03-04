// import { useState, useEffect, useRef } from 'react'
import './stylesheets/App.scss'
import Navbar from './components/Navbar/Navbar.jsx'

// import Contact from './components/Sections/Contact.jsx'
import Presentation from './components/Sections/Presentation.jsx'
import Skills from './components/Sections/Skills.jsx'
import Experiences from './components/Sections/Experiences.jsx'
import Hero from './components/Sections/Hero.jsx'


function App() {

  return (
    <main>
      <Navbar/>
      <Hero />
      <Presentation />
      <Skills/>
      <Experiences />
      {/* <Contact /> */}
    </main>
  )
}

export default App

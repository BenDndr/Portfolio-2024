import './stylesheets/App.scss'
import Navbar from './components/Navbar/Navbar.jsx'

import Presentation from './components/Sections/presentation/Presentation.jsx'
import Skills from './components/Sections/skills/Skills.jsx'
import Experiences from './components/Sections/experiences/Experiences.jsx'
import Hero2 from './components/Sections/hero2/Hero2.jsx'
import Contact from './components/Sections/contact/Contact.jsx'


function App() {

  return (
    <main>
      <Navbar/>
      <Hero2 />
      <Presentation />
      <Skills/>
      <Experiences />
      <Contact />
    </main>
  )
}

export default App

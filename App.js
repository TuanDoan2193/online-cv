import './commonStyles/App.scss'
import Header from './components/Header/Header'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import React, { useRef } from 'react'

const App = () => {
  const headerRef = useRef()
  const aboutRef = useRef()
  const skillsRef = useRef()
  const projectsRef = useRef()

  return (
    <div>
      <Header allRefs={{ headerRef, aboutRef, skillsRef, projectsRef }} />
      <div className='main-content-wrapper'>
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <Footer />
      </div>
    </div>
  )
}

export default App

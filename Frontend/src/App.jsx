import React from 'react'
import Homepage from './pages/Homepage'
import About from './pages/About'
import NavBar from './components/NavBar'
import Services from './pages/Services'

const App = () => {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <Homepage />
      <About />
      <Services />
    </div>
  )
}

export default App

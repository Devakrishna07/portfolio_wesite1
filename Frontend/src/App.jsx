import React from 'react'
import Homepage from './pages/Homepage'
import About from './pages/About'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className="scroll-smooth">
      <NavBar />
      <Homepage />
      <About />
    </div>
  )
}

export default App

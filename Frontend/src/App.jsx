import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Mainpage from './pages/Mainpage'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const App = () => {
  return (
   <BrowserRouter>
   <div className='w-full min-h-screen flex overflow-hidden no-scrollbar'>
    <Routes>
      <Route path='/' element={<Mainpage />} />
      <Route path='/home' element={<Homepage />} />
      <Route path='/about' element={<About />} />
      <Route path='/project' element={<Projects />} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App

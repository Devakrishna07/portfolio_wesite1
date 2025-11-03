import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'

const App = () => {
  return (
   <BrowserRouter>
   <div>
    <Routes>
      <Route path='/' element={<Homepage />} />
    </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App

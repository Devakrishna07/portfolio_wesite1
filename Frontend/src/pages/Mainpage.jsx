import React from 'react'
import Homepage from './Homepage'
import About from './About'

function Mainpage() {
  return (
    <div className='w-screen min-h-screen flex flex-col overflow-hidden no-scrollbar'>
        <Homepage />
        <About />
    </div>
  )
}

export default Mainpage

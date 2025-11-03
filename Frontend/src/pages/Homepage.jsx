import React from 'react'
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation'

function Homepage() {
  return (
   <BackgroundGradientAnimation>
    <div className="absolute z-50 inset-0 flex flex-col md:flex-col lg:flex-row items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
      {/* left section */}
       <div className='flex flex-col items-center justify-start z-50 w-[70%] '>
        <h1 className='text-white/45 font-typographica font-italic'>Deva Prasad NR</h1>
       </div>

      {/* Right section */}
       <div className='flex flex-col items-center justify-center z-50 w-[30%]'>
        <h1>hello im dev</h1>
       </div>
      </div>
   </BackgroundGradientAnimation>
  )
}

export default Homepage

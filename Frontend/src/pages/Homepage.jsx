import React from 'react'
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation'
import pic from '../assets/images/profpiccpy.png'

function Homepage() {
  return (
   <BackgroundGradientAnimation>
    <div className="absolute z-50 inset-0 flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center text-white font-bold px-4 pointer-events-none text-center md:text-4xl lg:text-7xl">
      {/* left section */}
       <div className='flex flex-col items-center justify-start z-50 w-full lg:w-[60%] pt-5 lg:pt-0 '>
        <h1 className='text-white/45 font-typographica font-italic text-5xl lg:text-8xl'>Deva Prasad NR </h1>
        <h1 className='text-white/45 font-moglandemo text-3xl'>B.Tech Undergraduate</h1>
       </div>

      {/* Right section */}
       <div className='flex flex-col items-center lg:items-start justify-center z-50 w-full lg:w-[30%]  '>
       <div className='w-[50%] lg:w-[90%] bg-white/20 border-4 border-purple-400 rounded-xl shadow-lg overflow-hidden'>
         <img src={pic} alt="Deva prasad Nr" className= 'object-fit ' />
       </div>
       </div>
      </div>
   </BackgroundGradientAnimation>
  )
}

export default Homepage

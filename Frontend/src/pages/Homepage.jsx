import React from 'react'
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation'
import pic from '../assets/images/profpiccpy.png'
import { ContainerTextFlip } from '../components/ui/container-text-flip'

function Homepage() {
  return (
   <BackgroundGradientAnimation>
    <div className="absolute z-50 inset-0 flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center text-white font-bold px-4 pointer-events-none text-center md:text-4xl lg:text-7xl">
      {/* left section */}
       <div className='flex flex-col items-center justify-start lg:justify-center z-50 w-full lg:w-[60%] h-[30vh] lg:h-full pt-5 lg:pt-0 '>
        <h1 className='text-white/45 font-typographica font-italic text-5xl md:text-7xl lg:text-8xl'>Deva Prasad NR </h1>
        <h1 className='text-white/45 font-moglandemo text-3xl md:text-4xl lg:text-4xl'>B.Tech Undergraduate</h1>
        <h2 className='text-xl text-white/45 pt-3 font-moglandemo'>I create experiences that connect<ContainerTextFlip words={["design", "technology", "creativity"]} /><br/><span className='hidden lg:block'> Passionate about crafting interfaces that feel alive.<br/>Always exploring new ways to blend art with innovation</span>.</h2>
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

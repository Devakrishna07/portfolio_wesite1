import React from 'react'
import pic from "../assets/images/profpiccpy.png"
import { AboutTabs } from './AboutTabs'
import { SkillsTab } from './SkillsTab'

function About() {
  return (
    <div className='w-screen min-h-screen bg-gray-800 flex flex-col md:flex-col lg:flex-row items-center justify-center px-4 md:px-8 py-8 gap-8'>
        {/* left section */}
        <div className='w-full md:w-[70%] lg:w-[30%] flex flex-col items-center justify-start lg:h-[90vh]'>
            <h1 className='text-4xl md:text-5xl font-moglandemo pb-4 md:pb-6 text-white/30 text-center md:text-left'>About Me</h1>
            <img 
              src={pic} 
              className='w-[70%] sm:w-[60%] md:w-[50%] lg:w-[60%] border-2 border-gray-900 rounded-xl shadow-xl shadow-purple-400/40 object-cover'  
              alt="Profile"
            />
        </div>

        {/* right section */}
        <div className='w-full md:w-[90%] lg:w-[50%] flex flex-col items-center justify-start my-6'>
            <AboutTabs />
            <SkillsTab />
        </div>
    </div>
  )
}

export default About

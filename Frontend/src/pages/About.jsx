import React from 'react'
import pic from "../assets/images/profpiccpy.png"
import { AboutTabs } from './AboutTabs'
import { SkillsTab } from './SkillsTab'

function About() {
  return (
    <div className='w-screen min-h-screen bg-gray-800 flex items-center justify-center'>
        {/* left section */}
        <div className='w-[30%] h-[90vh] flex flex-col items-center justify-start'>
            <h1 className='text-5xl font-moglandemo pb-6 text-white/30'>About Me</h1>
            <img src={pic} className='w-[60%] border-2 border-gray-900 rounded-xl shadow-xl shadow-purple-400/40'  />
        </div>

        {/*right section */}
        <div className='w-[50%] h-[90vh] flex flex-col items-center justify-start'>
            <AboutTabs />
            <SkillsTab />
        </div>
    </div>
  )
}

export default About

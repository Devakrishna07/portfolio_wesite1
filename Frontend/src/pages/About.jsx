import React from 'react'
import pic from "../assets/images/profpiccpy.png"
import { AboutTabs } from './AboutTabs'
import { SkillsTab } from './SkillsTab'
import { ReactTyped } from 'react-typed'

function About() {

  return (
    <div className='w-screen min-h-screen bg-gray-800 flex flex-col md:flex-col lg:flex-row items-center justify-start md:justify-center px-4 md:px-8 py-8 gap-8'>
        {/* left section */}
        <div className='w-full md:w-[70%] lg:w-[30%] flex lg:flex-col items-center justify-start lg:h-[90vh]'>
          {/* left pic section */}
            <div className='w-[50%] lg:w-full flex flex-col items-center justify-start'>
              <h1 className='text-4xl md:text-5xl font-moglandemo pb-4 md:pb-6 text-white/30 md:text-left'>About Me</h1>
            <img 
              src={pic} 
              className='w-[90%] sm:w-[60%] md:w-[50%] lg:w-[50%] border-2 border-gray-900 rounded-xl shadow-xl shadow-purple-400/40 object-cover lg:mb-6'  
              alt="Profile"
            />
            </div>

            {/* left text section */}
            <div className='flex items-start justify-start w-[50%] lg:w-[90%] h-[50%] font-moglandemo font-bold text-white/40 lg:text-xl'>
             <ReactTyped strings={[
   "Hi, I’m Deva Prasad, a final-year B.Tech student at College of Engineering Poonjar.  \
I am passionate about building efficient, scalable, and user-friendly software solutions.",

  "I actively contribute to tech communities and hold leadership roles, including Chairman of IEEE SB CE Poonjar,  \
Student Lead of FOSS Club CEP, and Webmaster of my college.",

  "I have hands-on experience in full-stack Python projects and specialize in ReactJS, TailwindCSS,  \
building clean, responsive, and maintainable web applications.",

  "Driven by curiosity, I continuously explore new technologies and frameworks.  \
I aim to deliver innovative solutions that combine technical expertise with creativity."
      ]}
      typeSpeed={50}
      backSpeed={20}
      loop
       />
            </div>
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

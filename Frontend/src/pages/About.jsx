import React from 'react'
import Image from '../assets/aboutpic.jpg'
import { ReactTyped } from 'react-typed'

function About() {

  const About_data = {
    AbtImage : Image,
    Abouttxt : [
      "Hi! I’m Deva Prasad NR, a passionate and curious Computer Science undergraduate at the College of Engineering Poonjar (2022–2026). I love building things that live on the web, whether it’s a full-stack application, a sleek portfolio, or a community-driven initiative My technical toolkit includes Python, JavaScript, Django, React, Tailwind CSS, and Flutter. I’ve built a range of projects—from an eCommerce platform with AWS integration and image recognition to community websites like Rising Poonjar and IEEE Signal 3.0. I enjoy turning complex problems into simple, beautiful, and intuitive designsI’m actively exploring open source, and I recently started working on dark-themed, modern web projects for tech clubs at my college. When I’m not coding, I’m often involved in public speaking, tinkering with Photoshop/Canva, or learning something new to expand my creative and technical boundaries.Let’s connect and build something impactful together!"
    ]
  }
  

  return (
    <div id='About' className="w-full lg:h-screen bg-[#f5f5f5] dark:bg-[#393E46] flex flex-col lg:flex-row font-montserrat">
       {/*Left section*/}
       <div className="w-full lg:w-[50vw] lg:min-h-screen flex flex-col items-center justify-center">
        <img src={About_data.AbtImage} alt="Profile Image"  
        className="w-[50%] m-8 lg:m-0 rounded-xl shadow-xl" />
       </div>

       {/*right section*/}
       <div className="w-full lg:w-[50vw] flex flex-col items-center justify-center">
          <h1 className="text-black-50 text-3xl ml-2 md:text-5xl mb-8 font-bold self-start">About Me</h1>
          <ReactTyped 
            strings={About_data.Abouttxt}
            typeSpeed={10}
            backSpeed={40}
            className='m-4 '
            />
       </div>
    </div>
  )
}

export default About

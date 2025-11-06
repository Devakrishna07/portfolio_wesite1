import React from 'react'
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation'
import pic from '../assets/images/profpiccpy.png'
import { ContainerTextFlip } from '../components/ui/container-text-flip'
import { FloatingDock } from '../components/ui/floating-dock'
import resumePdf from "../assets/images/resume.pdf"
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconFileText,
} from "@tabler/icons-react";
import resumepdf from '../assets/images/resume.pdf'
import { href } from 'react-router-dom'

function Homepage() {

  // ✅ Updated links array
  const links = [
    {
    title: "Resume",
    icon: <IconFileText className="h-full w-full " />,
    href: "https://drive.google.com/file/d/1TGlZyhGa2pJI4II7cAp3R5MwUpsre_Nl/view?usp=drive_link"
  },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full " />
      ),
      href: "https://github.com/devakrishna07",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full " />
      ),
      href: "https://linkedin.com/in/devaprasadnr",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full" />
      ),
      href: "https://instagram.com/deva_krishna_nr",
    },
  ];

  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-center text-white font-bold px-4 pointer-events-none text-center md:text-4xl lg:text-7xl">

        {/* Left section */}
        <div className='flex flex-col items-center justify-start lg:justify-center z-50 w-full lg:w-[60%] h-[30vh] lg:h-full pt-5 lg:pt-0 '>
          <h1 className='text-white/45 font-typographica font-italic text-5xl md:text-7xl lg:text-8xl'>Deva Prasad NR </h1>
          <h1 className='text-white/45 font-moglandemo text-3xl md:text-4xl lg:text-4xl'>B.Tech Undergraduate</h1>
          <h2 className='text-xl text-white/45 pt-3 font-moglandemo'>
            I create experiences that connect
            <ContainerTextFlip words={["design", "technology", "creativity"]} />
            <br />
            <span className='hidden lg:block'> Passionate about crafting interfaces that feel alive.<br />Always exploring new ways to blend art with innovation</span>.
          </h2>

          {/*  Floating Icons */}
          <div className="flex items-center justify-center w-full pointer-events-auto">
            <FloatingDock
              mobileClassName="translate-y-10"
              items={links}
              className="bg-white/20"
            />
          </div>
        </div>

        {/* Right section */}
        <div className='flex flex-col items-center lg:items-start justify-center z-50 w-full lg:w-[30%]'>
          <div className='w-[50%] lg:w-[90%] bg-white/20 border-4 border-purple-400 rounded-xl shadow-lg overflow-hidden'>
            <img src={pic} alt="Deva prasad Nr" className='object-fit' />
          </div>
        </div>

      </div>
    </BackgroundGradientAnimation>
  )
}

export default Homepage

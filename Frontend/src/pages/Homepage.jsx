import React from 'react'
import { ReactTyped } from 'react-typed'
import pic from '../assets/profilepic.png'

function Homepage() {

    const data = {
        welcome_text : "Hi i'm",
        Name : "Deva prasad NR",
        roles : [
            'Flutter Developer', 'Python FullStack Developer', 'Tech Aspirant'
        ],
        profileImg : pic,
    }

  return (
    <div id="Home" className="w-screen min-h-screen bg-[#254D70] dark:bg-black flex flex-col-reverse md:flex-row items-center justify-center font-montserrat px-4 sm:px-6 md:px-12 py-8 gap-y-10 md:gap-y-0">

        {/*left section*/}
        <div className="md:w-[50dvw] w-full md:min-h-screen flex flex-col items-center md:items-start justify-center mb-6 sm:mb-8 md:mb-0 text-center md:text-left space-y-4">
            <h3 className="text-xl md:text-2xl mt-4 text-white dark:text-[#948979] ">{data.welcome_text}</h3>
            <h1 className="text-4xl md:text-6xl text-white font-bold dark:text-[#948979] ">{data.Name}</h1>
            <ReactTyped
                strings={data.roles}
                typeSpeed={100}
                backSpeed={50}
                loop
                backDelay={5000}
                className="text-xl font-semibold text-white dark:text-[#948979] "
            />
        </div>

        {/*right section*/}
        <div className="w-full md:w-[50dvw] md:h-screen flex items-center justify-center">
            <div className="w-[70vw] sm:w-[60vw] md:w-[25dvw] md:h-[25dvw] bg-blue-500 dark:bg-[#393E46] rounded-full overflow-hidden shadow-lg">
                <img src={data.profileImg} alt="profile image" 
                className="w-full h-full object-cover"/>
            </div>
        </div>
    </div>
  )
}

export default Homepage

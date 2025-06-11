import React from 'react'
import { ReactTyped } from 'react-typed'
import NavBar from '../components/NavBar'
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
    <div style={{backgroundColor:'#254D70'}} className="w-screen min-h-screen bg-gray-500 flex flex-col-reverse md:flex-row items-center justify-center font-montserrat">
        <NavBar />
        {/*left section*/}
        <div className=" md:w-[50vw] w-full md:min-h-screen flex flex-col items-center justify-center mb-10 m-4 md:m-0">
            <h3 className=" text-xl md:text-2xl mt-4 text-white">{data.welcome_text}</h3>
            <h1 className="text-4xl md:text-6xl text-white font-bold ">{data.Name}</h1>
            <ReactTyped strings={
                data.roles
            } 
            typeSpeed={30}
            backSpeed={30}
            loop
            className="text-xl m-4 font-semibold"/>

        </div>

        {/*right section*/}
        <div className="w-full md:w-[50vw] md:h-screen w-full flex items-center justify-center">
            <div className="w-[70vw] md:w-[25vw] md:h-[25vw] bg-blue-500 rounded-full overflow-y-hidden md:m-0">
                <img src={data.profileImg} alt="profile image" 
                className="w-full h-full object-fill"/>
            </div>
        </div>

    </div>
  )
}

export default Homepage

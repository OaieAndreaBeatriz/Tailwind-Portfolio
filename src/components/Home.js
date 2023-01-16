import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#5c715e]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#ffb4ac]'>Hello, my name is
        </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-gray-300'>Andrea Oaie
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#7c9581]'>I'm a Frontend Developer.
        </h2>
        <p className='text-[#b6cdbd] py-4 max-w-[800px]'>I'm looking for a position as an intern or front-end developer. My main focus over the last several months was in the JavaScript, React, HTML and CSS areas but I also have knowledge of Git, Github, Firebase and Tailwind. If you have an open opportunity at your company or you know someone who does, hit me up!
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#ffb4ac] hover:border-[#ffb4ac]'>View Work 
           <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3'/>
           </span>
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Home

import React from 'react'

import JavaScript from '../assets/JavaScript.png'
import ReactImg from '../assets/React.png'
import CSS from '../assets/CSS.png'
import HTML from '../assets/HTML.png'
import Tailwind from '../assets/Tailwind.png'
import Github from '../assets/Github.png'


function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-[#5c715e] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#ffb4ac]  '>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-3 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'src={JavaScript} alt='JavaScript icon'></img>
            <p>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'src={ReactImg} alt='ReactImg icon'></img>
            <p>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'src={HTML} alt='HTML icon'></img>
            <p>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-5'>
            <img className='w-20 mx-auto'src={Tailwind} alt='Tailwind icon'></img>
            <p>TAILWIND</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'src={CSS} alt='CSS icon'></img>
            <p>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto'src={Github} alt='Github icon'></img>
            <p>GITHUB</p>
          </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default Skills

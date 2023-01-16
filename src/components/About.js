import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#5c715e] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#ffb4ac]'>About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hello! I'm Andrea, nice to meet you. Please take a look around.</p>
          </div>
          <div>
              <p>I use my passion and skills to design and    implement features for web platforms."Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About

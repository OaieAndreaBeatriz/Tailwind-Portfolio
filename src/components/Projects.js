import React from 'react';

import catBreedsApp from '../assets/Projects/CatBreeds.jpeg';
import moovieApp from '../assets/Projects/MoovieApp.jpeg';
import mealsApp from '../assets/Projects/Meals.jpeg';
import gymApp from '../assets/Projects/GymApp.jpeg';

function Projects() {
  return (
    <div
      name='projects'
      className='w-full md:h-screen text-gray-300 bg-[#5c715e]'
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-2'>
          <p className='text-4xl font-bold inline-b-4 border-b-4 text-gray-300 inline border-[#ffb4ac]'>
            Projects
          </p>
          <p className='py-6'>Check out some of my projects</p>
        </div>
        <div className='grid md:grid-cols-2 gap-4 '>
          <div
            style={{ backgroundImage: `url(${catBreedsApp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/*Hover Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Cat-Breeds App🐱
              </span>
              <div className='pt-8 text-center'>
                <a href='https://cat-breeds.pages.dev/'>
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/OaieAndreaBeatriz/Cat-Breeds'>
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${gymApp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/*Hover Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Gym App🏋🏻‍♀️
              </span>
              <div className='pt-8 text-center'>
                <a href='https://gym-app-ell.pages.dev/'>
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/OaieAndreaBeatriz/Gym-App'>
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${moovieApp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/*Hover Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Moovies App🎬
              </span>
              <div className='pt-8 text-center'>
                <a href='https://moovies-app.pages.dev/'>
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/OaieAndreaBeatriz/Moovies-App'>
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${mealsApp})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            {/*Hover Effects*/}
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Meals App🌮
              </span>
              <div className='pt-8 text-center'>
                <a href='https://order-meals.pages.dev/'>
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>
                    Demo
                  </button>
                </a>
                <a href='https://github.com/OaieAndreaBeatriz/Order-Meals'>
                  <button className='text-center rounded-lg px-4 py-3 m-3 bg-white text-gray-700 font-bold text-lg'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

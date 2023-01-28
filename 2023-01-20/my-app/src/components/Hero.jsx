import React from 'react'
import Typed from 'react-typed';
import Indoor from './Indoor.jsx';
import Outdoor from './Outdoor.jsx';
import Profile from './Profile.jsx';
import Strip from './Strip.jsx';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';



const Hero = () => {

  const navigate = useNavigate();
  return (
    <div className='max-w-[1240px]  mx-auto' id='hero' >
        <div className='h-screen relative '>
            {/* OVERLAY */}
            <div className='rounded-xl absolute w-full text-gray-200 h-screen bg-black/80 flex flex-col justify-center items-center'>
    <div className='max-w-[800px] w-full h-screen mx-auto flex flex-col justify-center items-center'>
                    <p className='text-[#5dda4d] font-bold '>GREEN IMAGE TECH</p>
              <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-2 uppercase'>Web Catalogue</h1>
              <div className='flex py-2'>
                  <p className='md:text-3xl sm:text-2xl text-xl font-bold mr-4'>Find the lighting application for </p>
                  <Typed strings={['COMMERCIAL', 'RESIDENTIAL', 'INDUSTRIAL']} typeSpeed={80} smartBackspace={80} loop className='text-3xl font-bold text-[#5dda4d]'/>
              </div>
              <p className='md:text-1xl text-sm uppercase font-bold text-gray-400 mt-4'>
Click the button below to browse our new product catalogue.              </p>


            </div>
            <div>
            <button onClick={() => navigate(1)} className='bg-[#5dda4d] text-Black flex w-[160px] items-center justify-center py-2 rounded-xl mb-8'>
      <span className='px-4 font-bold text-black text-md '>BROWSE</span>
      </button>
      </div>
      

            </div>


{/* BURGER IMAGE */}
            <img className="rounded-xl w-full h-screen object-cover"src="https://images.unsplash.com/photo-1635201848404-7a858102f3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt='hamburger'/>
        </div>

    </div>

  )
}

export default Hero
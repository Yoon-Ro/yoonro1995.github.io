import React from 'react'
import GP20877 from './indoor/puck/GP20877.jsx';
import GP20878 from './indoor/puck/GP20878.jsx';
import GP20879 from './indoor/puck/GP20879.jsx';
import GP370 from './indoor/puck/GP370.jsx';
import {Link, withRouter, useNavigate } from 'react-router-dom';



export const Index = () => {

  const navigate = useNavigate();

  return (

    <div className='h-screen relative max-w-screen  mx-auto bg-black/40 rounded-xl' id='indoormain'>
            {/* OVERLAY */}

    <div className='w-fill h-screen mx-auto flex flex-col justify-center items-center px-16'>

        <div className='justify-center mx-auto'>

        <div className='grid md:grid-cols-4 grid-rows-6 gap-4 h-[80vh]'>

        <div className='col-span-1 row-span-1 bg-[#5dda4d] rounded-full text-black flex justify-center items-center'>
        <h1 className='text-6xl font-bold uppercase italic'>Index</h1>
     
        </div>

  
 
        <div className='col-span-1 row-span-6 bg-[#5dda4d]/40 p-8 rounded-3xl text-white'>
        <h1 className='text-4xl mb-2 font-bold uppercase'>Indoor Lighting</h1>

        <ul className='text-sm mt-2 list-inside overflow-scroll'>
          <li className='border-b py-2 border-white/50'>Puck Lights</li>
          <li className='border-b py-2 border-white/50'>Downlights</li>
          <li className='border-b py-2 border-white/50'>Decorative Lights</li>
          <li className='border-b py-2 border-white/50'>High/Low Bay Fixtures</li>
          <li className='border-b py-2 border-white/50'>Panel Lights</li>
          <li className='border-b py-2 border-white/50'>Luminaires</li>
          <li className='border-b py-2 border-white/50'>Grow Lights</li>
          <li className='border-b py-2 border-white/50'>Scones</li>
          <li className='border-b py-2 border-white/50'>Dock Lighting</li>
          <li className='border-b py-2 border-white/50'>T-Bar</li>
          <li className='border-b py-2 border-white/50'>Track Lights</li>
  
        </ul>
        </div>

        <div className='col-span-1 row-span-6 bg-[#5dda4d]/40 p-8 rounded-3xl text-white'>
        <h1 className='text-4xl mb-4 font-bold uppercase'>Puck Light</h1>
        <p className='text-sm'>
        Puck lights are a versatile lighting solution. They can create scallops, spots, or pools of lighting instead of distributed illumination across the lighting surface. High performance and easy on the eye, puck lights are a popular choice for under-cabinet lighting and kitchen applications.
        </p>
        <ul className='text-md mt-4'>
          <li className='border-b py-2 border-white/50'>GP-370</li>
          <li className='border-b py-2 border-white/50'>GP-20877</li>
          <li className='border-b py-2 border-white/50'>GP-20878</li>
          <li className='py-2'>GP-20879</li>
  
        </ul>
        </div>

        <div className='col-span-1 row-span-6 bg-[#5dda4d]/40 p-8 rounded-3xl text-white'>
        <h1 className='text-4xl mb-4 font-bold uppercase'>Puck Light</h1>
        <p className='text-sm'>
        Puck lights are a versatile lighting solution. They can create scallops, spots, or pools of lighting instead of distributed illumination across the lighting surface. High performance and easy on the eye, puck lights are a popular choice for under-cabinet lighting and kitchen applications.
        </p>
        <ul className='text-md mt-4'>
          <li className='border-b py-2 border-white/50'>GP-370</li>
          <li className='border-b py-2 border-white/50'>GP-20877</li>
          <li className='border-b py-2 border-white/50'>GP-20878</li>
          <li className='py-2'>GP-20879</li>
  
        </ul>
        </div>

{/* INDOOR */}
        <div className='col-span-1 row-span-5 bg-[#5dda4d]/40 p-8 rounded-3xl text-white'>
        <h1 className='text-4xl mb-2 font-bold uppercase'>Outdoor Lighting</h1>

        <ul className='text-sm mt-2 list-inside overflow-scroll'>
          <li className='border-b py-2 border-white/50'>Puck Lights</li>
          <li className='border-b py-2 border-white/50'>Downlights</li>
          <li className='border-b py-2 border-white/50'>Decorative Lights</li>
          <li className='border-b py-2 border-white/50'>High/Low Bay Fixtures</li>
          <li className='border-b py-2 border-white/50'>Panel Lights</li>

          <li className='border-b py-2 border-white/50'>T-Bar</li>
          <li className='border-b py-2 border-white/50'>Track Lights</li>
          <li className='py-2'>GP-20879</li>
  
        </ul>
        </div>
        </div>
        </div>



{/* BUTTON */}
        <div className='flex flex-row gap-4 absolute bottom-0 mx-auto'>
            <button onClick={() => navigate(-1)} className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl md:mb-4 mb-2' >
      <span className='px-4 font-bold text-[#5dda4d]/60  text-md '>BACK</span>
      </button>
      <button className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl md:mb-4 mb-2' >
      <span className='px-4 font-bold text-[#5dda4d]/60  text-md '><Link to="../indoormain">NEXT</Link></span>
      </button>

      </div>

        </div>
        </div>
  
  )
}
export default Index
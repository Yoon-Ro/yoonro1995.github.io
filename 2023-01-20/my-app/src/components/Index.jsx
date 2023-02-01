import React from 'react'
import GP20877 from './indoor/puck/GP20877.jsx';
import GP20878 from './indoor/puck/GP20878.jsx';
import GP20879 from './indoor/puck/GP20879.jsx';
import GP370 from './indoor/puck/GP370.jsx';
import {Link, withRouter, useNavigate } from 'react-router-dom';
import {CgScrollV} from 'react-icons/cg';



export const Index = () => {

  const navigate = useNavigate();

  return (

    <div className='h-screen relative max-w-screen   mx-auto bg-black/0 rounded-xl' id='indoormain'>
            {/* OVERLAY */}

    <div className='h-screen mx-auto flex md:flex-col justify-center items-center '>

        <div className='justify-center mx-auto w-[1024px]'>

        <div className='grid md:grid-cols-3 grid-rows-6 gap-4 h-[80vh]'>

        <div className='col-span-1 row-span-6 bg-[#5dda4d]/40 p-8 rounded-3xl text-white'>
        <h1 className='text-4xl mb-4 font-bold uppercase'>Indoor </h1>

        <ul className='text-md mt-4 overflow-y-scroll scrollbar-hide h-[80%] rounded-xl p-2'>
          <li className='border-b py-2 border-white/50'>Puck Lights</li>
          <li className='border-b py-2 border-white/50'>Downlights</li>
          <li className='border-b py-2 border-white/50'>Decorative Lights</li>
          <li className='border-b py-2 border-white/50'>High/Low Bay Fixtures</li>
          <li className='border-b py-2 border-white/50'>Panel Lights</li>
          <li className='border-b py-2 border-white/50'>T-Bar</li>
          <li className='border-b py-2 border-white/50'>Track Lights</li>
          <li className='border-b py-2 border-white/50'>Puck Lights</li>
          <li className='border-b py-2 border-white/50'>Downlights</li>
          <li className='border-b py-2 border-white/50'>Decorative Lights</li>
          <li className='border-b py-2 border-white/50'>High/Low Bay Fixtures</li>
          <li className='border-b py-2 border-white/50'>Panel Lights</li>
          <li className='border-b py-2 border-white/50'>T-Bar</li>
          <li className='py-2 border-white/50'>Track Lights</li>

  
        </ul>
        </div>
  
 
        <div className='col-span-1 row-span-6 bg-teal-400/40 p-8 rounded-3xl text-white'>
        <h1 className='text-4xl mb-2 font-bold uppercase'>Ourdoor </h1>

        <ul className='text-md mt-4 overflow-y-scroll scrollbar-hide h-[70%] bg-black/0 rounded-xl p-2'>
          <li className='border-b py-2 border-white/50'>Bollard</li>
          <li className='border-b py-2 border-white/50'>Inground Lights</li>
          <li className='border-b py-2 border-white/50'>Step Lights</li>
          <li className='border-b py-2 border-white/50'>Wall Washers</li>
          <li className='border-b py-2 border-white/50'>Flood Lights</li>
          <li className='border-b py-2 border-white/50'>Wall Packs</li>
          <li className='border-b py-2 border-white/50'>Pole Lights</li>
          <li className=' py-2 border-white/50'>Wall Lights</li>

  
        </ul>
        
        </div>


{/* STRIP LIGHT */}

        <div className='col-span-1 row-span-6 bg-red-300/40 p-8 rounded-3xl text-white'>
        <h1 className='text-4xl mb-4 font-bold uppercase'>Strip Light</h1>

        <ul className='text-md mt-4'>
          <li className='border-b py-2 border-white/50'>Strip Light</li>
          <li className='border-b py-2 border-white/50'>Rigid Strip Light</li>
          <li className='py-2'>Neon Strip Light</li>
 
  
        </ul>

        <h1 className='text-4xl mb-4 font-bold uppercase mt-4'>Profile</h1>

<ul className='text-md mt-4'>
  <li className='border-b py-2 border-white/50'>Decorative Lighting</li>
  <li className='border-b py-2 border-white/50'>Special Application Lighting</li>
  <li className='py-2'>Main Lighting</li>

</ul>
        </div>

        

        {/* INDOOR */}


        <>
        </>






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
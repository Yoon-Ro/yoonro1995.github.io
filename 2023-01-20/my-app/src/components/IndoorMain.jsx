import React from 'react'
import PuckLight from './PuckLight.jsx';
import {Link, withRouter, useNavigate } from 'react-router-dom';


export const Indoor = () => {

  const navigate = useNavigate();

  return (


    <div className='h-screen relative max-w-screen  mx-auto bg-black/40 rounded-xl' id='indoormain'>
            {/* OVERLAY */}

    <div className='h-screen mx-auto flex flex-col justify-center items-center'>

        <div className='justify-center mx-auto max-w-[1024px]'>

        <div className='grid grid-cols-3  gap-4  mx-auto '>

        <div className='col-span-1 bg-[#5dda4d]/40 p-8 rounded-3xl  text-white h-[80vh]'>
        <h1 className='text-4xl mb-8 font-bold uppercase'>Indoor</h1>
        <p className='bg-black/20 px-8 py-4 mx-[-16px] rounded-2xl'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita soluta enim culpa. Eum, omnis iste nulla, cum, ducimus voluptatem unde impedit officiis facilis possimus itaque in ad sit. Deleniti, necessitatibus!        </p>
        <ul className='text-md mt-4 overflow-y-scroll scrollbar-hide md:h-[40%] lg:h-[60%] h-[30%] rounded-xl p-2'>
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

        <div className='col-span-2'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh] gap-4'>
            <img className='row-span-3 object-cover  w-full h-full rounded-3xl'
            src="https://images.unsplash.com/photo-1490938591846-d23d23fef9f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1501&q=80" alt='/'>
              </img>
            <img className='row-span-2  object-cover  w-full h-full rounded-3xl '
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1453&q=80" alt='/'/>
            <img className='row-span-4 object-cover  w-full h-full rounded-3xl '
            src="https://images.unsplash.com/photo-1500004621732-74cd4ad4d53e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt='/'/>
            <img className='row-span-3 object-cover  w-full h-full rounded-3xl '
            src="https://images.unsplash.com/photo-1530299297082-0846efbd2cdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt='/'/>
            
            
        </div>
        </div>

 

    </div>



            </div>
            <div className='flex flex-row gap-4 absolute bottom-0 mx-auto'>
            <button onClick={() => navigate(-1)} className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl md:mb-4 mb-2' >
      <span className='px-4 font-bold text-[#5dda4d]/60  text-md '>BACK</span>
      </button>
      <button className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl md:mb-4 mb-2' >
      <span className='px-4 font-bold text-[#5dda4d]/60  text-md '><Link to="../PuckLight">NEXT</Link></span>
      </button>
      {/* <button className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl mb-8'>
      <span className='px-4 font-bold text-[#5dda4d]/60 text-md '><a href='/index'>NEXT</a></span>
      </button> */}
      </div>

      

            </div>



   
    </div>
  
  )
}

export default Indoor
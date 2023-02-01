import React from 'react'
import GP20877 from './indoor/puck/GP20877.jsx';
import GP20878 from './indoor/puck/GP20878.jsx';
import GP20879 from './indoor/puck/GP20879.jsx';
import GP370 from './indoor/puck/GP370.jsx';
import {Link, withRouter, useNavigate } from 'react-router-dom';



export const PuckLight = () => {

  const navigate = useNavigate();

  return (

    <div className='h-screen relative max-w-screen  mx-auto bg-black/40 rounded-xl' id='indoormain'>
            {/* OVERLAY */}

    <div className='w-fill h-screen mx-auto flex flex-col justify-center items-center max-w-[1024px]'>

        <div className='justify-center mx-auto'>

        <div className='grid md:grid-cols-4 gap-4 h-[80vh]'>

        <div className='col-span-1 bg-[#5dda4d]/40 p-8 rounded-3xl text-white'>
        <h1 className='text-2xl mb-4 font-bold uppercase'>Puck Light</h1>
        <ul className='text-md mt-4'>
          <li className='px-4 py-2 '>GP-370</li>
          <li className='px-4 py-2 '>GP-20877</li>
          <li className='px-4 py-2 bg-[#5dda4d] rounded-full text-black font-bold'>GP-20878</li>
          <li className='px-4 py-2'>GP-20879</li>
  
        </ul>
        </div>
        <div className='col-span-3'>
        <GP20878 />        
        </div>

        </div>
        </div>



{/* BUTTON */}
        <div className='flex flex-row gap-4 absolute bottom-0 mx-auto'>
            <button onClick={() => navigate(-1)} className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl md:mb-4 mb-2' >
      <span className='px-4 font-bold text-[#5dda4d]/60  text-md '>BACK</span>
      </button>
      <button className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl md:mb-4 mb-2' >
      <span className='px-4 font-bold text-[#5dda4d]/60  text-md '><Link to="../PuckLight1">NEXT</Link></span>
      </button>

      </div>

        </div>
        </div>
  
  )
}
export default PuckLight
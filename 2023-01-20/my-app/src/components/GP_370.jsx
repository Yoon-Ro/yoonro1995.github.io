import React from 'react'
import GP20877 from './indoor/puck/GP20877.jsx';
import GP20878 from './indoor/puck/GP20878.jsx';
import GP370 from './indoor/puck/GP370.jsx';
import {Link, withRouter, useNavigate } from 'react-router-dom';



export const GP_370 = () => {

  const navigate = useNavigate();

  return (

    <div className='md:h-screen md:relative max-w-screen  mx-auto bg-black/40 rounded-xl px-4' id='gp_370'>
            {/* OVERLAY */}

    <div className='w-fill md:h-screen mx-auto flex flex-col justify-center items-center max-w-[1920px]'>

        <div className='justify-center mx-auto'>

        <div className='grid md:grid-cols-4 gap-4 md:h-[80vh] h-[100vh] md:py-0 py-4'>

        <div className='col-span-4 md:col-span-1 bg-[#5dda4d]/40 p-8 rounded-3xl text-white'>
        <h1 className='text-4xl mb-4 font-bold uppercase'>Puck Light</h1>
        <ul className='text-md mt-4'>
          <li className='px-4 py-2 bg-[#bfffb6] rounded-xl text-black font-bold'>GP-370</li>
          <li className='px-4 py-2'>GP-20877</li>
          <li className='px-4 py-2'>GP-20878</li>
          <li className='px-4 py-2'>GP-20879</li>
  
        </ul>
        </div>
        <div className='col-span-3 flex flex-col justify-evenly bg-slate-50/10 rounded-xl'>
        <GP370 />   
             
        </div>

        </div>
        </div>



{/* BUTTON */}
        <div className='sm:flex flex-row gap-4 md:absolute md:bottom-0 mx-auto hidden'>
            <button onClick={() => navigate(-1)} className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl md:mb-4 mb-2' >
      <span className='px-4 font-bold text-[#5dda4d]/60  text-md '>BACK</span>
      </button>
      <button className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl md:mb-4 mb-2' >
      <span className='px-4 font-bold text-[#5dda4d]/60  text-md '><Link to="../GP_20877">NEXT</Link></span>
      </button>

      </div>

        </div>
        </div>
  
  )
}
export default GP_370
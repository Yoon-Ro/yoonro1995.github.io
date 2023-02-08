import React from 'react'
import {Link, withRouter, useNavigate } from 'react-router-dom';
import GP20879 from './indoor/puck/GP20879.jsx';



const GP_20879 = () => {
    const navigate = useNavigate();

    return (
  
      <div className='h-screen  relative max-w-screen  mx-auto bg-black/40 rounded-xl md:px-4 px-0'>
              {/* OVERLAY */}
  
      <div className='w-fill h-fill md:h-screen mx-auto flex flex-col justify-center items-center max-w-[1920px]'>
  
          <div className='justify-center mx-auto'>
  
          <div className='md:gap-4 grid  h-[90vh] md:grid-cols-4  md:h-[80vh]'>
  
          <div className='col-span-1 bg-[#5dda4d]/40 p-4 md:p-8 md:rounded-3xl text-white'>
          <h1 className='text-xl md:text-4xl md:mb-4 font-bold uppercase'>Puck Light</h1>

          <ul className='text-md mt-4 md:inline hidden'>
            <li className='px-4 py-2 '>GP-370</li>
            <li className='px-4 py-2 '>GP-20877</li>
            <li className='px-4 py-2 '>GP-20878</li>
            <li className='px-4 py-2 bg-[#bfffb6] rounded-xl text-black font-bold  sticky top-0'>GP-20879</li>
    
          </ul>
          </div>
          <div className='col-span-1 md:col-span-3 flex flex-col justify-between bg-slate-50/10 rounded-xl overflow-y-scroll scrollbar-hide'>
          <GP20879 />        
          </div>
  
          </div>
          </div>
  
  
  
  {/* BUTTON */}
          <div className='flex flex-row gap-4 absolute bottom-0 mx-auto'>
              <button onClick={() => navigate(-1)} className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl md:mb-4 mb-2' >
        <span className='px-4 font-bold text-[#5dda4d]/60  text-md '>BACK</span>
        </button>
        <button className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl md:mb-4 mb-2' >
        <span className='px-4 font-bold text-[#5dda4d]/60  text-md '><Link to="../GP_ASD3">NEXT</Link></span>
        </button>
  
        </div>
  
          </div>
          </div>
    
    )
  }

export default GP_20879
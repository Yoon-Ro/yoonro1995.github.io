import React from 'react'
import {Link, withRouter, useNavigate } from 'react-router-dom';


const Index = () => {    const navigate = useNavigate();


    return (
  
      <div className='h-screen relative max-w-[1240px]  mx-auto bg-[#5dda4d]/40 rounded-xl' id='index'>
              {/* OVERLAY */}
              <div className='rounded-xl absolute w-full text-gray-200 h-screen bg-black/80 flex flex-col justify-center items-center'>
      <div className='w-full h-screen mx-auto flex flex-col justify-center items-center px-16'>
  
                <div className=''><span className='bg-[#5dda4d] rounded-full px-4 py-1 font-black italic text-black'>PRODUCT INDEX</span> 
  <div className='grid md:grid-cols-2  mx-auto pt-8 gap-8 italic'>
  <p className='md:text-1xl text-sm uppercase font-bold text-white/60 col-span-1'>
  We have been        </p>
  
  <p className='md:text-1xl text-sm uppercase font-bold text-white/60 col-span-1'>
  With our own development    </p>
  
  </div>
  
                </div>
  
  
              </div>
              <div className='flex flex-row gap-4'>
              <button onClick={() => navigate(-1)} className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl mb-8' >
        <span className='px-4 font-bold text-[#5dda4d]/60  text-md '>BACK</span>
        </button>
        <button className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl mb-8'>
        <span className='px-4 font-bold text-[#5dda4d]/60 text-md '><a href='/index'>NEXT</a></span>
        </button>
        </div>
  
        
  
              </div>
  
  
  
      </div>
    )
  }
  

export default Index
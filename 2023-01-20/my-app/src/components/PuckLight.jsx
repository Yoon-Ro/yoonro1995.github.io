import React from 'react'
import GP20877 from './indoor/puck/GP20877.jsx';
import GP20878 from './indoor/puck/GP20878.jsx';
import GP20879 from './indoor/puck/GP20879.jsx';
import GP370 from './indoor/puck/GP370.jsx';
import {Link, withRouter, useNavigate } from 'react-router-dom';



export const PuckLight = () => {

  const navigate = useNavigate();

  return (


    <div className='h-screen relative max-w-screen  mx-auto bg-[#5dda4d]/40 rounded-xl' id='indoormain'>
            {/* OVERLAY */}
            <div className='rounded-xl absolute w-full text-gray-200 h-screen bg-black/80 flex flex-col'>
    <div className='w-full h-screen mx-auto flex flex-col justify-center items-center px-16'>

        

        <div className='grid md:grid-cols-3 justify-center items-center'>

        <div className='col-span-1 bg-[#5dda4d]/40 p-8 rounded-3xl m-2'>
        <h1 className='text-4xl mb-8 font-bold uppercase'>Puck Light</h1>
        <p>
        If you're unsure of what a fair price is for a used iPhone, Newton Index can help guide you with our pricing tool. When you're looking to purchase a used iPhone or sell your own, our pricing tool can help you navigate the market and find the best deal.
        </p>
        <ul className='text-lg mt-4'>
          <li className='border-b py-2'> <a href="#pucklight">Puck Light</a></li>
          <li className='border-b py-2'>Downlight</li>
          <li className='border-b py-2'>Decorative Light</li>
          <li className='border-b py-2'>High/Low Bay</li>
      
        </ul>
        </div>

        <div className='col-span-2'>
          <GP20877/>
        </div>

 

    </div>



      
            <div className='flex flex-row gap-4 absolute bottom-0'>
            <button onClick={() => navigate(-1)} className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl md:mb-8 mb-2' >
      <span className='px-4 font-bold text-[#5dda4d]/60  text-md '>BACK</span>
      </button>
      <button  className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl md:mb-8 mb-2' >
      <span className='px-4 font-bold text-[#5dda4d]/60  text-md '><Link to="../PuckLight">NEXT</Link></span>
      </button>
      {/* <button className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl mb-8'>
      <span className='px-4 font-bold text-[#5dda4d]/60 text-md '><a href='/index'>NEXT</a></span>
      </button> */}
      </div>

      

            </div>



    </div>
    </div>
  
  )
}
export default PuckLight
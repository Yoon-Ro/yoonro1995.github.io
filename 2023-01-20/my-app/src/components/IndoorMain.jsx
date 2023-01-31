import React from 'react'
import PuckLight from './PuckLight.jsx';
import {Link, withRouter, useNavigate } from 'react-router-dom';


export const Indoor = () => {

  const navigate = useNavigate();

  return (


    <div className='h-screen relative max-w-screen  mx-auto bg-black/40 rounded-xl' id='indoormain'>
            {/* OVERLAY */}

    <div className='w-fill h-screen mx-auto flex flex-col justify-center items-center px-16'>

        <div className='justify-center mx-auto'>

        <div className='grid md:grid-cols-3  gap-4'>

        <div className='col-span-1 bg-[#5dda4d]/40 p-8 rounded-3xl  text-white h-[80vh]'>
        <h1 className='text-4xl mb-8 font-bold uppercase'>Indoor Lighting</h1>
        <p className='bg-black/20 p-4 mx-[-8px] rounded-2xl'>
        If you're unsure of what a fair price is for a used iPhone, Newton Index can help guide you with our pricing tool. When you're looking to purchase a used iPhone or sell your own, our pricing tool can help you navigate the market and find the best deal.
        </p>
        <div className='grid grid-cols-2'>
        <ul className='text-sm mt-4 col-span-1 px-1'>
          <li className='border-b py-2'>Puck Light</li>
          <li className='border-b py-2'>Downlight</li>
          <li className='border-b py-2'>Decorative Light</li>
          <li className='border-b py-2'>High/Low Bay</li>
          <li className='border-b py-2'>Panel Light</li>
        </ul>

        <ul className='text-sm mt-4 col-span-1 px-1'>
          <li className='border-b py-2'>Luminaire</li>
          <li className='border-b py-2'>Grow Light</li>
          <li className='border-b py-2'>Decorative Light</li>
          <li className='border-b py-2'>High/Low Bay</li>
          <li className='border-b py-2'>Panel Light</li>
        </ul>
        </div>
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
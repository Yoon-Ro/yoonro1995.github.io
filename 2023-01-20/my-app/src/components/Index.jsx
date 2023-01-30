import React from 'react'
import {Link, withRouter, useNavigate } from 'react-router-dom';


const Index = () => {    const navigate = useNavigate();


    return (
  
      <div className='h-screen relative max-w-full  mx-auto bg-[#5dda4d]/40 rounded-xl' id='index'>
              {/* OVERLAY */}
              <div className='rounded-xl absolute w-full text-gray-200 h-screen bg-black/80 flex flex-col justify-center items-center'>
             
                
      <div className='w-full h-screen mx-auto flex flex-col justify-center items-center px-16'>
        
      <p className='mb-2  rounded-full px-4 py-1 font-black italic text-[#5dda4d] text-3xl'>INDEX</p>
        
  
                <div className=''>
                
    
    <div className='grid md:grid-cols-4 md:grid-rows-2 gap-8 w-screen h-full px-16'>



{/* INDOOR */}
        <div className='col-span-1 row-span-2  p-8 rounded-xl'>
        <h1 className='text-4xl mb-8 font-bold uppercase'>Indoor</h1>
 
        <ul className='text-lg '>
          <li className='border-b py-2'>Puck Light</li>
          <li className='border-b py-2'>Downlight</li>
          <li className='border-b py-2'>Decorative Light</li>
          <li className='border-b py-2'>High/Low Bay</li>
          <li className='border-b py-2'>Panel Light</li>
          <li className='border-b py-2'>Luminaires</li>
          <li className='border-b py-2'>Grow Light</li>
          <li className='border-b py-2'>Scones</li>
          <li className='border-b py-2'>Dock Light</li>
          <li className='border-b py-2'>T-Bar</li>
          <li className=' py-2'>Track Light</li>
        </ul>
        </div>

{/* OUTDOOR */}
        <div className='col-span-1 row-span-2  p-8 rounded-xl'>
        <h1 className='text-4xl mb-8 font-bold uppercase'>Outdoor</h1>

        <ul className='text-lg w-2/3 '>
          <li className='border-b py-2'>Bollard</li>
          <li className='border-b py-2'>Inground Light</li>
          <li className='border-b py-2'>Step Light</li>
          <li className='border-b py-2'>Wall Washer</li>
          <li className='border-b py-2'>Flood Light</li>
          <li className='border-b py-2'>Wall Pack</li>
          <li className='border-b py-2'>Pole Light</li>
          <li className='py-2'>Wall Light</li>
        </ul>

        </div>

        {/* PROFILE */}
        <div className='row-span-1  p-8 rounded-xl'>
        <h1 className='text-4xl mb-8 font-bold uppercase'>PROFILE</h1>

        <ul className='text-lg w-2/3 '>
          <li className='border-b py-2'>Puck Light</li>
          <li className='border-b py-2'>Downlight</li>
          <li className='border-b py-2'>Decorative Light</li>
        </ul>

        </div>

 
                {/* STRIP */}
                <div className='row-span-1  p-8 rounded-xl'>
        <h1 className='text-4xl mb-8 font-bold uppercase'>STRIP LIGHT</h1>

        <ul className='text-lg w-2/3 '>
  
          <li className='border-b py-2'>Strip Light</li>
          <li className='border-b py-2'>Rigid Strip Light</li>
          <li className='py-2'>Neon Strip Light</li>

        </ul>

        </div>
                {/* STRIP */}
                <div className='row-span-1  p-8 rounded-xl'>
        <h1 className='text-4xl mb-8 font-bold uppercase'>Accessory</h1>

        <ul className='text-lg w-2/3 '>
      
          <li className='border-b py-2'>Sensor</li>
          <li className='border-b py-2'>Driver</li>
          <li className='border-b py-2'>Controller</li>

        </ul>

        </div>

        

        

        


    </div>

  
     </div>
  
  
              </div>

              
              <div className='flex flex-row gap-4'>
              <button onClick={() => navigate(-1)} className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl mb-8' >
        <span className='px-4 font-bold text-[#5dda4d]/60  text-md '>BACK</span>
        </button>
        <button className='border border-[#5dda4d]/60  flex w-[160px] items-center justify-center py-2 rounded-xl mb-8'>
        <span className='px-4 font-bold text-[#5dda4d]/60 text-md '><Link to='../indoormain'>NEXT</Link></span>
        </button>
        </div>
  
        
  
              </div>
  
  
  
      </div>
    )
  }
  

export default Index
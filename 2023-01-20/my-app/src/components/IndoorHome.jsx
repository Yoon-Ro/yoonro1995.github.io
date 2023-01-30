import React from 'react'
import PuckLight from './PuckLight.jsx';
import {Link, withRouter, useNavigate } from 'react-router-dom';


export const Indoor = () => {
  return (
    
    <div id="indoor">
    <div className='max-w-[1240px] group mx-auto  px-16 bg-[#165a1e] text-white  py-16 sm:rounded-xl'>
    <div className='grid md:grid-cols-3 gap-16'>
        <div className=' col-span-1'>
        <h1 className='text-4xl mb-8 font-bold uppercase'>Indoor Lighting</h1>
        <p>
        If you're unsure of what a fair price is for a used iPhone, Newton Index can help guide you with our pricing tool. When you're looking to purchase a used iPhone or sell your own, our pricing tool can help you navigate the market and find the best deal.
        </p>


        </div>
        <ul className='py-2 text-xl w-[80%] col-span-1'>
          <li className='border-b py-2'> <a href="#pucklight">Puck Light</a></li>
          <li className='border-b py-2'>Downlight</li>
          <li className='border-b py-2'>Decorative Light</li>
          <li className='border-b py-2'>High/Low Bay</li>
          <li className='border-b py-2'>Panel Light</li>
          <li className='border-b py-2'>Luminaires</li>
        </ul>



    </div>



</div>

<PuckLight />


</div>
  )
}

export default Indoor
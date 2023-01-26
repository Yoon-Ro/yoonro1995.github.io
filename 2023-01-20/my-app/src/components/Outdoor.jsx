import React from 'react'
import {categories} from '../data/outdoordata.js';

export const Outdoor = () => {
  return (
    <div className='max-w-[1240px] group mx-auto px-4 md:px-16 bg-[#354509] text-white mt-16 pt-16 sm:rounded-xl'>
    <div className='flex grid md:grid-cols-3 gap-16'>
        <div className=' col-span-1'>
        <h1 className='text-4xl mb-8 font-bold uppercase'>Outdoor Lighting</h1>
        <p>
        If you're unsure of what a fair price is for a used iPhone, Newton Index can help guide you with our pricing tool. When you're looking to purchase a used iPhone or sell your own, our pricing tool can help you navigate the market and find the best deal.
        </p>

        </div>
        <div className=' col-span-2'>
        <img className='w-fill rounded-xl'src='https://images.unsplash.com/photo-1638906578064-0c6f9c36c85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1756&q=80' alt='/'/>
        </div>

    </div>

    <div className='max-w-[1240px] py-16 mx-auto'>
        {/* CATEGORIES */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 '>
        {categories.map((item, index) =>
            <div key={index} className='bg-white/10 hover:bg-white/20 hover:scale-105 duration-300 rounded-xl px-2 py-8 flex justify-between items-center'>
                <h2 className='font-bold text-white sm:text-xl '>{item.name}</h2>
                <img className='w-16' src={item.image} alt={item.name}/>
            </div>
        )}
        </div>
    </div>
</div>
  )
}

export default Outdoor
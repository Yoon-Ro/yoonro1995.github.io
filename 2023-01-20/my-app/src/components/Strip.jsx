import React from 'react'
import {categories} from '../data/profiledata.js';

export const Strip = () => {
  return (
    <div className='h-fill max-w-[1240px] group mx-auto px-4 md:px-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mt-16 pt-16 sm:rounded-xl'>
    <div className='grid md:grid-cols-3 gap-8'>
        <div className=' col-span-1'>
        <h1 className='text-4xl mb-8 font-bold uppercase'>Strip Light</h1>
        <p>
        If you're unsure of what a fair price is for a used iPhone, Newton Index can help guide you with our pricing tool. When you're looking to purchase a used iPhone or sell your own, our pricing tool can help you navigate the market and find the best deal.
        </p>

        </div>
        <div className=' col-span-2'>
        <img className='w-fill rounded-xl'src='https://images.unsplash.com/photo-1495232714953-ef7f41577786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1627&q=80' alt='/'/>
        </div>

    </div>

    <div className='max-w-[1240px] py-16 mx-auto'>
        {/* CATEGORIES */}
        <div className='grid grid-cols-2 md:grid-cols-3 gap-8 '>
        {categories.map((item, index) =>
            <div key={index} className='bg-white/30 hover:bg-white/40 hover:scale-105 duration-300 rounded-xl px-4 py-8 flex justify-between items-center'>
                <h2 className='font-bold text-white sm:text-xl '>{item.name}</h2>
                <img className='w-16' src={item.image} alt={item.name}/>
            </div>
        )}
        </div>
    </div>
</div>
  )
}

export default Strip
import React from 'react'
import {categories} from '../data/data.js';

export const Indoor = () => {
  return (
    <div className='max-w-[1240px] group mx-auto  px-16 bg-[#165a1e] text-white mt-16 pt-16 sm:rounded-xl'>
    <div className='grid lg:grid-cols-3 gap-16'>
        <div className=' col-span-1'>
        <h1 className='text-4xl mb-8 font-bold uppercase'>Indoor Lighting</h1>
        <p>
        If you're unsure of what a fair price is for a used iPhone, Newton Index can help guide you with our pricing tool. When you're looking to purchase a used iPhone or sell your own, our pricing tool can help you navigate the market and find the best deal.
        </p>

        </div>
        <div className=' col-span-2'>
        <img className='w-fill rounded-xl'src='https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='/'/>
        </div>

    </div>

    <div className='max-w-[1240px] py-16 mx-auto'>
        {/* CATEGORIES */}
        <div className='grid grid-cols-2 sm:grid-cols-4 md:gap-6 gap-4 '>
        {categories.map((item, index) =>
            <div key={index} className='bg-white/10 hover:bg-white/20 hover:scale-105 duration-300 rounded-xl px-4 py-8 flex justify-between items-center'>
                <h2 className=' text-white md:text-xl text-sm'>{item.name}</h2>
                <img className='w-16 ' src={item.image} alt={item.name}/>
            </div>
        )}
        </div>
    </div>
</div>
  )
}

export default Indoor
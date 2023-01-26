

import React from 'react'
import {categories} from '../data/data.js';

const Category = () => {
  return (
    <div className='max-w-[1240px] py-8 mx-auto'>
        {/* CATEGORIES */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item, index) =>
            <div key={index} className='bg-gray-200/20 hover:bg-[#1b6711] hover:scale-105 duration-300 rounded-xl px-4 py-12 flex justify-between items-center'>
                <h2 className='font-bold text-white sm:text-xl '>{item.name}</h2>
                <img className='w-16' src={item.image} alt={item.name}/>
            </div>
        )}
        </div>
    </div>
  )
}

export default Category
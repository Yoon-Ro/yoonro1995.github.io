
import React from 'react';

const CTA = () => {
  return (
    <div className='w-full py-16 text-white'>
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
            <h1 className='md:text-4xl sm:text-4xl text-xl font-bold py-2'>Lorem, ipsum dolor sit amet</h1>
            <h1 className='md:text-4xl sm:text-4xl text-xl font-bold py-2'>Elit. Provident, voluptatibus!</h1>
            <p>Sign up to our newsletter and stay up to date</p>
        </div>

        <div className='my-4'>
            <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='p-2 flex w-full rounded-md text-black' type='email' placeholder='Enter Email'/>
            <button className='bg-[#5dda4d] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-2'>Notify Me</button>
  
            </div>
            <p>We care about the protectino of your data. Read our <span className='text-[#5dda4d]'> Privacy Policy.</span></p>
        </div>

    </div>
    </div>
  )
}

export default CTA
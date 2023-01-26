import React from 'react'
import Typed from 'react-typed';
import Indoor from './Indoor.jsx';
import Outdoor from './Outdoor.jsx';
import Profile from './Profile.jsx';
import Strip from './Strip.jsx';


const Hero = () => {
  return (
    <div className='max-w-[1240px]  mx-auto' >
        <div className='max-h-[600px] relative '>
            {/* OVERLAY */}
            <div className='rounded-xl absolute w-full h-full text-gray-200 max-h-[600px] bg-black/80 flex flex-col justify-center'>
    <div className='max-w-[800px] w-full h-screen mx-auto flex flex-col justify-center'>
                    <p className='text-[#5dda4d] font-bold p-2'>Product Catalog</p>
              <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-2'>Lorem, ipsum dolor.</h1>
              <div className='flex py-2'>
                  <p className='md:text-3xl sm:text-2xl text-xl font-bold mr-4'>Find the lighting application </p>
                  <Typed strings={['COMMERCIAL', 'RESIDENTIAL', 'INDUSTRIAL']} typeSpeed={80} smartBackspace={80} loop className='text-3xl font-bold text-[#5dda4d]'/>
              </div>
              <p className='md:text-1xl text-sm uppercase font-bold text-gray-400 mt-4'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia vitae temporibus architecto.
              </p>

              <button className='bg-[#5dda4d] text-Black flex w-[160px] items-center py-2 rounded-xl my-8'>
      <span className='px-4 font-bold text-black text-md'>BROWSE</span>
      </button>
            </div>
              

            </div>


{/* BURGER IMAGE */}
            <img className="rounded-xl w-full max-h-[600px] object-cover"src="https://images.unsplash.com/photo-1635201848404-7a858102f3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt='hamburger'/>
        </div>
<Indoor/>
<Outdoor/>
<Profile/>
<Strip/>
    </div>

  )
}

export default Hero
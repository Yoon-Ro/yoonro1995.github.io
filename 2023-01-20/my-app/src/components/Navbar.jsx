import React from 'react'

const Nav = () => {
  return (
    <div className='max-w-[1240px] flex justify-center items-center h-24 mx-auto px-4 text-white '>
        <ul className='flex px-4 py-2 rounded-full shadow-sm bg-black/80 fixed z-10'>
            <li className='bg-[#5dda4d] py-2 px-4 rounded-full mx-2 text-black'><a href='/'>Home</a></li>
            
            <li className='border py-2 px-4 rounded-full mx-2'> <a href='/indoor'>Indoor</a></li>
            <li className='border py-2 px-4 rounded-full mx-2'> <a href='/outdoor'>Outdoor</a></li>

            <li className='border py-2 px-4 rounded-full mx-2'> <a href='/profile'>Profile</a></li>

            <li className='border py-2 px-4 rounded-full mx-2'> <a href='/strip'>Strip</a></li>



            {/* <li className='border py-2 px-4 rounded-full mx-2'>Outdoor</li>
            <li className='border py-2 px-4 rounded-full mx-2'>Profile</li>
            <li className='border py-2 px-4 rounded-full mx-2'>Strip</li>
            <li className='border py-2 px-4 rounded-full mx-2'>Accessory</li> */}
        </ul>

        </div>
  )
}

export default Nav
import React from 'react'

const Advant = () => {
  return (
    <div className='w-full py-8 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 bg-[#b40a3a]/60 px-8 py-16 border-none rounded-xl '>
            <div className='flex flex-col justify-center mr-8 col-span-1'>
                <h1 className='md:text-5xl sm:text-3xl text-2xl font-bold py-2 text-white'>Indoor Lighting</h1>
                <div className='text-white py-2'>
                <p>Lorem ipsum, dolor  adipisicing elit. </p>
                <p>Lsit amet consectetur adipisicing elit. </p>
                </div>
                <button className='bg-[#000000] w-[200px] rounded-xl font-medium my-6 mx-auto md:mx-0 py-3 text-white'>View More</button>
            </div>
            <div className='col-span-2 flex flex-row justify-start items-center gap-4 mx-auto'>
            <img className='w-[300px] h-[300px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="/"/>
            <img className='w-[300px] h-[300px] object-cover rounded-xl' src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="/"/>

            {/* HOVER */}
            <a className="relative w-[300px] h-[300px] group bg-black rounded-xl" href="##">
            {/* 이미지 */}
          <img
            className="absolute inset-0 object-cover w-[300px] h-[300px] rounded-xl group-hover:opacity-80"
            src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt="/"/>
          <div className="relative p-5">
            <div className="mt-40">
              <div
                class="transition-all transform 
                                translate-y-1 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0"
              >
                <div className="p-2">
                  <p className="text-xl font-bold text-white mb-4">
                    Ceiling Light
                  </p>
                  <button
                    className="px-4 py-2 text-lg rounded-full
                                            text-white bg-red-600"
                  >
                    Visit site
                  </button>
                </div>
                
              </div>
            </div>
          </div>
        </a>




            </div>

            
        </div>

        
    </div>
  )
}

export default Advant
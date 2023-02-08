import React from 'react'
import dummy from '../../../data/GIT_product_data_json/indoor-lighting/led-puck-lights/gp-20879.json';


export const GP20879 = () => {
  return (
    <div  className='grid md:grid-cols-3 gap-4 py-4 md:px-4 px-2 rounded-3xl md:h-[80vh] h-[100%]'>
        {dummy.product_info.map((id) => (
            <div key={id}>
            <img className='bg-white rounded-xl col-span-1 ' src='https://www.greenimagetech.com/wp-content/uploads/2019/12/GP-20879-HD.png' alt='/'/>
            {/* <h1   className=' text-white font-bold text-4xl py-2 absolute'>{id.product_title}</h1> */}

            </div>
        ))    }

        
{dummy.specifications.map((id) => (

              <ul key={id} className=' text-white text-xs col-span-1  rounded-xl'>
                <li className='rounded-t-xl md:px-0 px-2 border-b py-2 bg-[#bfffb6] md:bg-white/0 md:text-white text-black font-bold'>{id['Model']}</li>
                <li className='md:px-0 px-2 border-b py-2'>{id['Luminous Flux']}</li>
                <li className='md:px-0 px-2 border-b py-2'>{id['Light Source']}</li>
                <li className='md:px-0 px-2 border-b py-2'>{id['Wattage']}</li>
                <li className='md:px-0 px-2 border-b py-2'>{id['Voltage']}</li>
                <li className='md:px-0 px-2 border-b py-2'>{id['Material']}</li>
                <li className='md:px-0 px-2 border-b py-2'>{id['IP Rated']}</li>
                <li className='md:px-0 px-2 border-b py-2'>{id['Length']}</li>
                <li className='md:px-0 px-2 border-b py-2'>{id['Requires Driver']}</li>
                <li className='md:px-0 px-2 py-2'>{id.Certification}</li>
                </ul>
             


        ))    }






    </div>
  )
}

export default GP20879
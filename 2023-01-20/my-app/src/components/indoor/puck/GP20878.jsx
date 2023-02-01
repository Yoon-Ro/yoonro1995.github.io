import React from 'react'
import dummy from '../../../data/GIT_product_data_json/indoor-lighting/led-puck-lights/gp-20878.json';


export const GP20878 = () => {
  return (
    <div  className='grid grid-cols-3 grid-rows-2 gap-4 py-4 bg-slate-50/10 md:px-4 px-2 rounded-3xl h-[80vh]'>
       
        {dummy.product_info.map((id) => (
            <div key={id}>
            <img className='bg-white rounded-xl col-span-1 row-span-1 w-[100%]' src='https://www.greenimagetech.com/wp-content/uploads/2019/12/GP-20878-HD.png' alt='/'/>
            <h1   className=' text-white font-bold text-4xl py-2'>{id.product_title}</h1>
            <button className='text-white'>Order Form</button>
            </div>
        ))    }

        
{dummy.specifications.map((id) => (

              <ul key={id} className=' text-white text-xs col-span-2 row-span-1 '>
                <li className='border-b py-2'>{id.Model}</li>
                <li className='border-b py-2'>{id.LuminousFlux}</li>
                <li className='border-b py-2'>{id['LED Quantity']}</li>
                <li className='border-b py-2'>{id.Wattage}</li>
                <li className='border-b py-2'>{id.Voltage}</li>
                <li className='border-b py-2'>{id['Material']}</li>
                <li className='border-b py-2'>{id['IPRating']}</li>
                <li className='border-b py-2'>{id.ColourTemperature}</li>
                <li className='py-2'>{id.Certification}</li>
                </ul>
             


        ))   
         }

<div className='col-span-3 row-span-1 rounded-3xl overflow-clip'>
<img  
src="https://images.unsplash.com/photo-1601760561441-16420502c7e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
alt="/" 
className='object w-full rounded-3xl'/>
</div>




    </div>
  )
}

export default GP20878
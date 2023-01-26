import React from 'react'
import dummy from '../../../data/GIT_product_data_json/indoor-lighting/led-puck-lights/gp-20878.json';


export const GP20878 = () => {
  return (
    <div  className='grid md:grid-cols-3 gap-4 py-16 bg-slate-50/10 md:px-16 px-4 rounded-xl my-8'>
        {dummy.product_info.map((id) => (
            <div key={id}>
            <img className='bg-white rounded-xl col-span-1 w-[80%]' src='https://www.greenimagetech.com/wp-content/uploads/2019/12/GP-20878-HD.png' alt='/'/>
            <h1   className=' text-white font-bold text-4xl py-2'>{id.product_title}</h1>

            </div>
        ))    }

        
{dummy.specifications.map((id) => (

              <ul key={id} className=' text-white text-sm col-span-2'>
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
             


        ))    }






    </div>
  )
}

export default GP20878
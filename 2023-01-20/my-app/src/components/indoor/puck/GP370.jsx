import React from 'react'
import dummy from '../../../data/GIT_product_data_json/indoor-lighting/led-puck-lights/gp-370.json';


export const GP370 = () => {
  return (
    // <div  className='grid md:grid-cols-3 gap-4 py-4 bg-slate-50/10 md:px-4 px-2 rounded-3xl h-[80vh]'>
    <div  className='grid md:grid-cols-3 gap-4  md:px-4 px-2 rounded-3xl '>
        {dummy.product_info.map((id) => (
            <div key={id}>
            <img className='bg-white rounded-xl col-span-1 object-fill' src='https://www.greenimagetech.com/wp-content/uploads/2019/12/GP-370-HD.png' alt='/'/>
            {/* <h1   className=' text-white font-bold text-4xl py-2'>{id.product_title}</h1> */}

            </div>
        ))    }

        
{dummy.specifications.map((id) => (

              <ul key={id} className=' text-white text-xs col-span-2 row-span-1'>
                <li className='border-b py-2'>{id.Model}</li>
                <li className='border-b py-2'>{id['Lumen Output']}</li>
                <li className='border-b py-2'>{id['Power Consumption (W)']}</li>
                <li className='border-b py-2'>{id.Efficacy}</li>
                <li className='border-b py-2'>{id['Colour Tempeature (CCT)']}</li>
                <li className='border-b py-2'>{id.CRI}</li>
                <li className='border-b py-2'>{id['Beam Angle']}</li>
                <li className='border-b py-2'>{id['IP Rating']}</li>
                <li className='py-2'>{id.Certification}</li>
                </ul>
             


        ))    }






    </div>
  )
}

export default GP370
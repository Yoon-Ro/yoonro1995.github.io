import React from 'react'
import dummy from '../../../data/GIT_product_data_json/indoor-lighting/led-downlights/gp-asd-series/gp-asd3.json';


export const GPASD3 = () => {
  return (
    // <div  className='grid md:grid-cols-3 gap-4 py-4 bg-slate-50/10 md:px-4 px-2 rounded-3xl h-[80vh]'>
    <div  className='grid md:grid-cols-4 gap-4 py-4 md:px-4 px-2 rounded-3xl md:h-[80vh] h-[100vh]'>
        {dummy.product_info.map((id) => (
            <div key={id}>
            <img className='bg-white rounded-xl col-span-1 ' src='https://www.greenimagetech.com/wp-content/uploads/2019/12/GD-ASD3-HD-4.png' alt='/'/>
            {/* <h1   className=' text-white font-bold text-4xl py-2 absolute'>{id.product_title}</h1> */}

            </div>
        ))    }

        
{dummy.specifications.map((id) => (

              <ul key={id} className=' text-white text-xs col-span-1  rounded-xl'>
                <li className='rounded-t-xl md:px-0 px-2 border-b py-2 bg-[#bfffb6] md:bg-white/0 md:text-white text-black font-bold'>{id['Model']}</li>
                <li className='md:px-0 px-2 border-b py-2'>{id['Lumen Output']}</li>
                <li className='md:px-0 px-2 border-b py-2'>{id['Power Consumption']}</li>
                <li className='md:px-0 px-2 border-b py-2'>{id['Input Voltage']}</li>
                <li className='md:px-0 px-2 border-b py-2'>{id['Colour Temperature']}</li>
                <li className='md:px-0 px-2 border-b py-2'>{id['CRI']}</li>
                <li className='md:px-0 px-2 border-b py-2'>{id['Beam Angle']}</li>
                <li className='md:px-0 px-2 border-b py-2'>{id['IP Rating']}</li>
                <li className='md:px-0 px-2 border-b py-2'>{id['Dimensions']}</li>
                <li className='md:px-0 px-2 py-2'>{id.Certification}</li>
                </ul>
             


        ))    }







    </div>
  )
}

export default GPASD3
import React from 'react'
import {puckcategories} from '../../../data/GIT_product_data_json/indoor-lighting/led-puck-lights/gp-370.js';

const GP370 = () => {
  return (

<div className='' id="gp370">
        {puckcategories.map((item, index) =>
            <div key={index} className='grid md:grid-cols-3 gap-4 py-16 bg-slate-50/10 md:px-16 px-4 rounded-xl my-8 '>
              <div>
                <img className='bg-white rounded-xl col-span-1 w-[80%]' src={item.image} alt={item.name}/>
                <h2 className=' text-white font-bold text-4xl py-2'>{item.name}</h2>

                </div>
                <ul className=' text-white text-sm col-span-2'>
                <li className='border-b py-2'>{item.Model}</li>

                <li className='border-b py-2'>{item.LumenOutput}</li>
                <li className='border-b py-2'>{item.PowerConsumption}</li>
                <li className='border-b py-2'>{item.Efficacy}</li>
                <li className='border-b py-2'>{item.InputVoltage}</li>
                <li className='border-b py-2'>{item.ColourTempeature}</li>
                <li className='border-b py-2'>{item.CRI}</li>
                <li className='border-b py-2'>{item.PFC}</li>
                <li className='border-b py-2'>{item.BeamAngle}</li>
                <li className='border-b py-2'>{item.IPRating}</li>
                <li className='py-2'>{item.Certification}</li>
                </ul>



                </div>

        
        )}
        </div>



 
  )
}

export default GP370
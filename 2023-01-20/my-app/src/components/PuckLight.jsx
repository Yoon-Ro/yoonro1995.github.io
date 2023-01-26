import React from 'react'
import GP20877 from './indoor/puck/GP20877.jsx';
import GP20878 from './indoor/puck/GP20878.jsx';
import GP20879 from './indoor/puck/GP20879.jsx';
import GP370 from './indoor/puck/GP370.jsx';

const PuckLight = () => {
  return (
    <div className='max-w-[1240px] text-white mx-auto py-16  scroll-smooth'  id="pucklight">
    <h1 className='text-4xl font-medium sm:mx-16 mx-4' >Puck Light</h1>
   
    <GP370 />
    <GP20877 />
    <GP20878 />
    <GP20879 />
    
    
    
    </div>
  )
}

export default PuckLight
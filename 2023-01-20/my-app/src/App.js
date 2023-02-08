import React from 'react';
import Hero from './components/Hero.jsx';




import {Routes, Route} from 'react-router-dom';
import About from './components/About.jsx';
import Index from './components/Index.jsx';
import IndoorMain from './components/IndoorMain.jsx';
import GP_20877 from './components/GP_20877.jsx';
import GP_20879 from './components/GP_20879.jsx';
import GP_370 from './components/GP_370.jsx';
import GP_ASD3 from './components/GP_ASD3.jsx';
import GP_ASD5 from './components/GP_ASD5.jsx';
import GP_BSC3 from './components/GP_BSC3.jsx';





function App() {
  return (
    <div className="bg-black h-screen">
<Routes>
  <Route path='/' element={<Hero/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/index' element={<Index/>}/>
  <Route path='/indoormain' element={<IndoorMain/>}/>
  <Route path='/GP_370' element={<GP_370/>}/>

  <Route path='/GP_20877' element={<GP_20877/>}/>


  <Route path='/GP_20879' element={<GP_20879/>}/>
  <Route path='/GP_ASD3' element={<GP_ASD3/>}/>
  <Route path='/GP_ASD5' element={<GP_ASD5/>}/>
  <Route path='/GP_BSC3' element={<GP_BSC3/>}/>


</Routes>



    </div>
  );
}

export default App;

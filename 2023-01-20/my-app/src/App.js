import Navbar from './components/Navbar.jsx';
import React from 'react';
import Hero from './components/Hero.jsx';
import Category from './components/Category.jsx';
import CTA from './components/CTA.jsx';

import Productindex from './components/Productindex.jsx';
import Indoor  from './components/Indoor.jsx';
import IndoorHome  from './components/IndoorHome.jsx';
import Outdoor from './components/Outdoor.jsx';
import OutdoorHome from './components/OutdoorHome.jsx';
import Profile from './components/Profile.jsx';
import Strip from './components/Strip.jsx';

import {Routes, Route} from 'react-router-dom';
import About from './components/About.jsx';
import Index from './components/Index.jsx';
import IndoorMain from './components/IndoorMain.jsx';
import PuckLight from './components/PuckLight.jsx';




function App() {
  return (
    <div className="bg-black">
<Routes>
  <Route path='/' element={<Hero/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/index' element={<Index/>}/>
  <Route path='/indoormain' element={<IndoorMain/>}/>
  <Route path='/pucklight' element={<PuckLight/>}/>

</Routes>



    </div>
  );
}

export default App;

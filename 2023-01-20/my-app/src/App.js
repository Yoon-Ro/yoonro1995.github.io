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


function App() {
  return (
    <div className="bg-black">
        <Navbar/>
<Routes>
  <Route path='/' element={<Hero/>}>
    
  </Route>
  
  <Route path='/indoor' element={<IndoorHome/>}/>
  <Route path='/outdoor' element={<OutdoorHome/>}/>
  <Route path='/profile' element={<Profile/>}/>
  <Route path='/strip' element={<Strip/>}/>



</Routes>

        <CTA/>
        <Productindex/>
    </div>
  );
}

export default App;

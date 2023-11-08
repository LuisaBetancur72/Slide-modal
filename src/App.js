import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Menu from './components/menu/menu';

import Home from './components/Home/home.js';
import Facebook from './components/Face/facebook.js';
import Instagram from './components/Insta/instagram.js';
import Twitter from './components/twitt/twitter';
import Login from './components/login/login';
import Politica from './components/PoliticayPrivacidad/Politica';
function App() {
  return (
    <Router> 
      <div className="App">
        <Menu />
      </div> 
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/facebook" element={<Facebook />} />
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/twitter" element={<Twitter />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/politica" element={<Politica />} />
        </Routes>
    </Router>
  );
}

export default App;

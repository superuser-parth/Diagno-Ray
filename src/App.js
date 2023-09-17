import React from 'react';
import xraypic from "./placeholder.jpg";
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Navbar from './Navbar';
import Disease from './Disease';

function App() {
  return (

      <div className="App">
        <div className="App-header">
          <Navbar />
          <div className="desc">
            <div className="desc-text" style={{ fontSize: '60px' }}>AI for automated diagnosis of Dental Radiographs  </div>
           
            <img src={xraypic} style={{ marginLeft: '30px', marginRight: '80px' }} alt="X-ray" />
           
          </div>
      
          <Link to="/implement" className="button">
            Go to Implement
          </Link>
        </div>

        <Disease />
      </div>

     
  );
}

export default App;

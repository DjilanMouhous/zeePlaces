import React from 'react';
import './App.css';
import { Footer } from './component/footer/Footer';
import { NavDefault } from './component/nav/NavDefault';
import { AllPlaces } from './component/place/AllPlaces';



function Places() {
  return (
   
    <div className="App">
      <NavDefault/>
      <div className="wrapper">
        <AllPlaces/>
        <Footer/>
      </div>
    </div>
  );
}

export default Places;

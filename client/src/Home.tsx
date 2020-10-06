import React from 'react';
import './App.css';
import {HeaderHome} from './component/header/HeaderHome'
import {NavHome} from './component/nav/NavHome'
import {FirstSection} from './component/home/FirstSection'
import {DisplayCat} from './component/home/DisplayCat'
import {Footer} from './component/footer/Footer'
import {ContactForm} from './component/home/ContactForm'
import { PlaceFeatured } from './component/home/PlaceFeatured';


function Home() {
  return (
   
    <div className="App">
      <NavHome/>
      <div className="wrapper">
        <HeaderHome/>
        <FirstSection/>
        <DisplayCat/>
        <PlaceFeatured/>
        <ContactForm/>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;

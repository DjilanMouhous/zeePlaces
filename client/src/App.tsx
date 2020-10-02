import React from 'react';
import './App.css';
import {ListPlace} from './component/place/ListPlace'
import {HeaderHome} from './component/header/HeaderHome'
import {NavHome} from './component/nav/NavHome'
import {FirstSection} from './component/home/FirstSection'
import {DisplayCat} from './component/home/DisplayCat'
import {Footer} from './component/footer/Footer'
import {ContactForm} from './component/home/ContactForm'
function App() {
  return (
   
    <div className="App">
      <NavHome/>
      <div className="wrapper">
        <HeaderHome/>
        <FirstSection/>
        <DisplayCat/>
        <ListPlace/>
        <ContactForm/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;

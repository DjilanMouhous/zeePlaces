import React from 'react';
import './App.css';
import './component/account/Account.css'
import { Profile } from './component/account/Profile';
import { Footer } from './component/footer/Footer';
import { NavDefault } from './component/nav/NavDefault';


function Account() {
  return (
   
    <div className="App bg-lighter">
      <NavDefault/>
      <div className="wrapper">
        <Profile/>
        <Footer/>
      </div>
    </div>
  );
}

export default Account;

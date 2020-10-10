import React from 'react';
import './App.css';
import './component/account/Account.css'
import { Profile } from './component/account/Profile';
import { Footer } from './component/footer/Footer';
import { NavDefault } from './component/nav/NavDefault';
import { NavHome } from './component/nav/NavHome';
import { SidebarAdmin } from './component/nav/SidebarAdmin';


function Admin() {
  return (
   
    <div className="App bg-lighter">
      <SidebarAdmin/>
      <div className="main-content">
        <NavHome/>
      </div>
    </div>
  );
}

export default Admin;

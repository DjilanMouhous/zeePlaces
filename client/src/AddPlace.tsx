import React from 'react';
import './App.css';
import './component/account/Account.css'
import { NavHome } from './component/nav/NavHome';
import { SidebarAdmin } from './component/nav/SidebarAdmin';
import { AddPlaceForm } from './component/place/AddPlaceForm';


function AddPlace() {
  return (
   
    <div className="App bg-lighter">
      <SidebarAdmin/>
      <div className="main-content">
        <NavHome/>
        <div className="wrapper">
        <AddPlaceForm/>
        </div>
      </div>
    </div>
  );
}

export default AddPlace;

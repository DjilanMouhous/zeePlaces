import React from 'react';

function SidebarAdmin (){
  return(
<nav className="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
    <div className="scroll-wrapper scrollbar-inner" style={{position: "relative"}}><div className="scrollbar-inner scroll-content" style={{height: "923px", marginBottom: "0px", marginRight: "0px", maxHeight: "none"}}>
      <div className="sidenav-header  align-items-center">
        <a className="navbar-brand" href="javascript:void(0)">
          <img src="../assets/img/brand/blue.png" className="navbar-brand-img" alt="..."/>
        </a>
      </div>
      <div className="navbar-inner">
        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/admin">
                <i className="fas fa-tachometer-alt text-primary"></i>
                <span className="nav-link-text">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="icons.html">
                <i className="fas fa-map-marker-alt text-orange"></i>
                <span className="nav-link-text">Adresses</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="map.html">
                <i className="fas fa-plus text-primary"></i>
                <span className="nav-link-text">Ajouter une adresse</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="profile.html">
                <i className="fas fa-folder-open text-yellow"></i>
                <span className="nav-link-text">Catégories</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="tables.html">
                <i className="fas fa-users text-default"></i>
                <span className="nav-link-text">Utilisateurs</span>
              </a>
            </li>
           
            <li className="nav-item">
              <a className="nav-link active active-pro" href="/">
                <i className="fas fa-globe text-dark"></i>
                <span className="nav-link-text">Visiter le site</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div><div className="scroll-element scroll-x"><div className="scroll-element_outer"><div className="scroll-element_size"></div><div className="scroll-element_track"></div><div className="scroll-bar" style={{width: "0px"}}></div></div></div><div className="scroll-element scroll-y"><div className="scroll-element_outer"><div className="scroll-element_size"></div><div className="scroll-element_track"></div><div className="scroll-bar" style={{height: "0px"}}></div></div></div></div>
  </nav>
    );
}
export {SidebarAdmin}
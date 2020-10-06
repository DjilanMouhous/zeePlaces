import React from 'react';

function NavHome (){
  return(
    <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light z1 headroom">
    <div className="container">
      <a className="navbar-brand mr-lg-5" href="/">
        <h2 className="text-white">zeePlaces</h2>
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-collapse collapse justify-content-end" id="navbar_global">
        <div className="navbar-collapse-header">
          <div className="row">
            <div className="col-6 collapse-brand">
              <a  className="text-white" href="/"> 
              <h2 className="text-white" >zeePlaces</h2>
              </a>
            </div>
            <div className="col-6 collapse-close">
              <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <ul className="navbar-nav navbar-nav-hover align-items-lg-center">
          <li className="nav-item dropdown">
            <a href="/places/" className="nav-link" data-toggle="dropdown" role="button">
              <i className="ni ni-ui-04 d-lg-none"></i>
              <span className="nav-link-inner--text">Adresses</span>
            </a>
            <div className="dropdown-menu dropdown-menu-xl">
              <div className="dropdown-menu-inner">
                <a href="/places/restaurant/" className="media d-flex align-items-center">
                  <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                    <i className="fas fa-utensils"></i>
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="heading text-primary mb-md-1">Restaurants</h6>
                    <p className="description d-none d-md-inline-block mb-0">Une séléction de restaurants de tous genre pour raviver vos papilles</p>
                  </div>
                </a>
                <a href="/places/parc/" className="media d-flex align-items-center">
                  <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                    <i className="fas fa-tree"></i>
                  </div>
                  <div className="media-body ml-3">
                    <h6 className="heading text-primary mb-md-1">Parcs / Ballades</h6>
                    <p className="description d-none d-md-inline-block mb-0">Dégourdissez vos jambes dans les meilleurs parcs et rues de Paris.</p>
                  </div>
                </a>
                <a href="/places/experience/" className="media d-flex align-items-center">
                  <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                    <i className="fas fa-vial"></i>
                  </div>
                  <div className="media-body ml-3">
                    <h5 className="heading text-warning mb-md-1">Expériences</h5>
                    <p className="description d-none d-md-inline-block mb-0">Trouvez une expérience originale qui vous fera découvrir Paris sous un nouvel angle.</p>
                  </div>
                </a>
              </div>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link" data-toggle="dropdown" role="button">
              <i className="ni ni-collection d-lg-none"></i>
              <span className="nav-link-inner--text">Examples</span>
            </a>
            <div className="dropdown-menu">
              <a href="./examples/landing.html" className="dropdown-item">Landing</a>
              <a href="./examples/profile.html" className="dropdown-item">Profile</a>
              <a href="./examples/login.html" className="dropdown-item">Login</a>
              <a href="./examples/register.html" className="dropdown-item">Register</a>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav align-items-lg-center ">
          
          <li className="nav-item d-none d-lg-block ml-lg-4">
            <a href="/account/" className="btn btn-neutral btn-icon">
              <span className="btn-inner--icon">
                <i className="fa fa-user"></i>
              </span>
              <span className="nav-link-inner--text">&nbsp;Mon compte</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    );
}
export {NavHome}
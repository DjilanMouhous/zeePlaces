import React from 'react';

function HeaderHome (){
  return(
        <div className="section section-hero section-shaped">
        <div className="shape shape-style-1 shape-primary">
            <span className="span-150"></span>
            <span className="span-50"></span>
            <span className="span-50"></span>
            <span className="span-75"></span>
            <span className="span-100"></span>
            <span className="span-75"></span>
            <span className="span-50"></span>
            <span className="span-100"></span>
            <span className="span-50"></span>
            <span className="span-100"></span>
        </div>
        <div className="page-header">
            <div className="container shape-container d-flex align-items-center py-lg" style={{padding: "150px 0"}}>
            <div className="col px-0">
                <div className="row align-items-center justify-content-center">
                <div className="col-lg-6 text-center">
                    <h1 className="text-white">zeePlaces</h1>
                    <p className="lead text-white">Nos adresses préférées pour découvrir Paris</p>
                    <div className="btn-wrapper mt-5">
                    <a href="/places/" className="btn btn-lg btn-white btn-icon mb-3 mb-sm-0">
                        <span className="btn-inner--icon"><i className="fa fa-globe-europe"></i></span>
                        <span className="btn-inner--text">Découvrez les adresses</span>
                    </a>
                    </div>
                    <div className="mt-5">
                    <small className="font-weight-bold mb-0 mr-2 text-white">Réalisé par</small>
                    <small className="font-weight-bold mb-0 mr-2 text-white">Abd & Djilan</small>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="separator separator-bottom separator-skew zindex-100" >
            <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" style={{left: '0'}} version="1.1" xmlns="http://www.w3.org/2000/svg">
            <polygon className="fill-white" points="2560 0 2560 100 0 100"></polygon>
            </svg>
        </div>
        </div>
    );
}
export {HeaderHome}
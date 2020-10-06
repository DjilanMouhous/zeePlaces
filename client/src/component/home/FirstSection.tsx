import React from 'react';

function FirstSection (){
  return(
    <div className="container">
    <div className="col-md-8 mx-auto text-center pt-5">
      <span className="badge badge-primary badge-pill mb-3">zeePlaces</span>
      <h3 className="display-3">Découvrez ou redécouvrez Paris !</h3>
      <p className="lead">zeePlaces réference des dizaines d'adresses originales et inratables à Paris et dans sa périphérie</p>
    </div>        
    <div className="row pt-5 pb-5 w-75 m-auto">
        <div className="col-md-4">
          <div className="info">
            <div className="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
              <i className="fas fa-utensils"></i>
            </div>
            <h6 className="info-title text-uppercase text-primary">Restaurants</h6>
            <p className="description opacity-8">Une séléction de restaurants de tous genre pour raviver vos papilles</p>
            <a href="javascript:;" className="text-primary">Découvrez les adresses
              <i className="ni ni-bold-right text-primary"></i>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="info">
            <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle">
              <i className="fas fa-tree"></i>
            </div>
            <h6 className="info-title text-uppercase text-success">Parcs / Ballades</h6>
            <p className="description opacity-8">Dégourdissez vos jambes et prenez l'air dans les meilleurs parcs et rues de Paris.</p>
            <a href="javascript:;" className="text-primary">Découvrez les adresses
              <i className="ni ni-bold-right text-primary"></i>
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="info">
            <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle">
              <i className="fas fa-vial"></i>
            </div>
            <h6 className="info-title text-uppercase text-warning">Expériences</h6>
            <p className="description opacity-8">Trouvez une expérience originale qui vous fera découvrir Paris sous un nouvel angle.</p>
            <a href="javascript:;" className="text-primary">Découvrez les adresses
              <i className="ni ni-bold-right text-primary"></i>
            </a>
          </div>
        </div>
      </div>
      </div>
    );
}
export {FirstSection}
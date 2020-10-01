import React from 'react';

function Place (props){
  return(
    <div class="col-md-4">
    <div class="card">
      <img class="card-img-top" src="https://images.prismic.io/figaroimmo%2F99439d29-f927-483b-9667-d280eaf7d061_shutterstock_1420728554-compressor.jpg?auto=compress,format&rect=0,0,1000,667&w=720&h=480" alt="Card image cap"/>
      <div class="card-body">
      <h5 class="card-title">{props.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href={props.index + 1} class="btn btn-primary">Go somewhere</a>
    </div>
    </div>
  </div>);
}
export {Place}
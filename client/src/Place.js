import React from 'react';

function Place (props){
  return(
  <div className="place">
    <h3>Place {props.index + 1}</h3>
    <h2>{props.name}</h2>
  </div>);
}
export {Place}
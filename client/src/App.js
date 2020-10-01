import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import  {Place} from './Place.js';

function App() {
  const [places, setPlaces] = useState(null);
  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:8800/places'
    );
    
    setPlaces(response.data);
    console.log(response.data)
    fetchData()
  };
  return (
    <div className="App">
      <h1>Liste des adresses</h1>
      <button className="fetch-button" onClick={fetchData}>
          Charger
        </button>
      {/* Display data from API */}
      <div className="books">
 
        
        {places &&
          
          places.places.map((place, index) => {
            return(
            <Place name={place.name} index={index}></Place>
            );
          })}
      </div>
    </div>
  );
}

export default App;

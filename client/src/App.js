import React, { useState } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  const [places, setPlaces] = useState(null);
  const fetchData = async () => {
    const response = await axios.get(
      'http://localhost:8800/'
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
            //const cleanedDate = new Date(book.released).toDateString();
            //const authors = book.authors.join(', ');

            return (
              <div className="book" key={index}>
                <h3>Place {index + 1}</h3>
                <h2>{place.name}</h2>

              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;

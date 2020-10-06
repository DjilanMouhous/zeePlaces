import React, { useState }  from 'react';
import  {Place} from './Place';
import axios from 'axios';

function ListPlace(props: { limit: number; }){
    const [places, setPlaces] : any = useState(null);
    const fetchData = async () => {
      const response = await axios.get(
        'http://localhost:8800/place/listPlaces'
      );
      
      setPlaces(response.data);
    };
    fetchData()
    return(
        <div className="container">
            <div className="row justify-content-evenly">
            {places &&
            
            places.places.map((place: { name: any; }, index: any) => {
              if (props.limit == 0) {
                return(
                  <Place name={place.name} index={index}></Place>
                );
              } else if (index <= props.limit) {
                return(
                  <Place name={place.name} index={index}></Place>
                );
              }
                
            })}
            </div>
        </div>
    );
}
export {ListPlace}
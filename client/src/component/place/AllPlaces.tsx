import React from 'react';
import { ListPlace } from './ListPlace';

function AllPlaces(){

    return(
        <div className="row w-100 pl-5 mt--5 list-places pr-5">
                   <div className="col-md-12 justify-content-start">
                        <h3 className="text-light-gray text-center">
                            Toutes les adresses
                        </h3>
                   </div>
                   <div className="row">
                       <ListPlace limit={0} />
                   </div>
                   
               </div>
    );
}
export {AllPlaces}
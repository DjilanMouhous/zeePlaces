import React from 'react';
import {ListPlace} from '../place/ListPlace'


function PlaceFeatured (){
  return(
    <div className=" w-75 m-auto">
    <div className="container-fluid pt-5">
          <div className="row mb-md-5">
            <div className="col-md-8 mx-auto">
              <h3 className="display-3 text-center">Les adresses à la une</h3>
            </div>
          </div>
        <ListPlace limit={2} />
    </div>
    </div>
    );
}
export {PlaceFeatured}
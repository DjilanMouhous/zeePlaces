import React from 'react';
import {ListPlace} from '../place/ListPlace'


function PlaceFeatured (){
  return(
    <div className=" w-75 m-auto">
    <div className="container-fluid pt-5">
          <div className="row mb-md-5">
            <div className="col-md-8 mx-auto">
              <h3 className="display-3 text-center">Les adresses à la une</h3>
              <p className="lead text-center">I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.</p>
            </div>
          </div>
        <ListPlace limit={2} />
    </div>
    </div>
    );
}
export {PlaceFeatured}
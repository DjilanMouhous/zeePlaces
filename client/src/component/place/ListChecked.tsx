import React, { useState }  from 'react';
import { ListPlace } from './ListPlace';

function ListChecked(props: { limit: number; }){

    return(
        <div className="row w-100 pl-5 pr-5 list-places">
                   <div className="col-md-12 justify-content-start">
                        <h3 className="text-light-gray text-left">
                            Vos adresses validées
                        </h3>
                   </div>
                   <div className="row">
                       <ListPlace limit={props.limit} />
                   </div>
                   
               </div>
    );
}
export {ListChecked}
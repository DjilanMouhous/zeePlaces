import React from 'react';
import { ListChecked } from '../place/ListChecked';
import { ListFavori } from '../place/ListFavori';


function Profile(){
    return(
        <div className="container p-0 mt--9 w-100 pb-9 mw-100 ">
            <div className="row bg-red m-0 banner w-100 mw-100 "></div>
            <div className="row w-75 profile-card pb-5 mt--5 justify-content-center bg-white rounded shadow">
                <div className="col-md-4">
                <div className="card-profile-stats d-flex justify-content-center">
                  <div>
                    <span className="heading">7</span>
                    <span className="description">Adresses validées</span>
                  </div>
                  <div>
                    <span className="heading">18</span>
                    <span className="description">Adresses likés</span>
                  </div>
                  <div>
                    <span className="heading">4</span>
                    <span className="description">Recommandations d'adresses</span>
                  </div>
                </div>
                </div>
               <div className="mt--6 avatar-profile"></div>
               <div className="col-md-4">
               <div className="card-profile-actions py-4 mt-lg-0">
                  <a href="#" className="btn btn-sm btn-info mr-4">
                  <i className="fa fa-cogs"></i>
                  &nbsp;
                      Mon compte</a>
                  <a href="#" className="btn btn-sm btn-default float-right">
                  <i className="fa fa-comments"></i>
                  &nbsp;
                      Message</a>
                </div>
               </div>
               <div className="col-md-12">
               <h2 className="text-center text-capitalize text-dark"><span className="name">Djilan Mouhous</span>, <span className="age">20</span></h2>
               <h5 className="text-center text-capitalize text-light-gray"><span className="city">Paris</span>, <span className="pays">France</span></h5>
               <p className="text-center pr-9 pl-9 mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero exercitationem nobis neque optio fugiat accusantium iure quaerat, commodi tempore eaque deserunt, sit eos officia! Voluptate minus quia nihil dolores dolore.</p>
               <hr className="line-primary"/>
               </div>
               <ListFavori limit={4}/>
               <ListChecked limit={4}/>
           </div>
        </div>
    );
}
export {Profile}
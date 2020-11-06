import React from 'react';

function AddPlaceForm (){
  return(
    
    <div className="container pt-9">
        <div className="row">
            <div className="col-md-4">
                <img className="profile_picture" src="https://blacksaildivision.com/wp-content/uploads/2015/03/centos-users-and-groups-624x390.jpg" alt=""/>
                <div>
                    <span>
                      <input  className="btn btn-raised btn-round btn-primary btn-file btn-sm mx-auto mt-3"  type="file" name="..."/></span>
                    <br/>
                  </div>
            </div>
            <div className="col-md-8">
                <h2>Publier une activité</h2>
                <div className="row">
                    <div className="col-md-3 align-self-center">
                        <label className="labels" htmlFor="#name">Nom</label>
                    </div>
                    <div className="col-md-9 align-self-center">
                        <div className="form-group">
                          <input id="name" name="name" className="form-control" type="text" placeholder="Nom de l'activité" required/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 align-self-center">
                        <label className="labels" htmlFor="#category">Catégorie</label>
                    </div>
                    <div className="col-md-9 align-self-center">
                        <div className="form-group">
                          <select id="category" name="category" className="form-control" placeholder="Catégorie de l'activité" required>
                              <option value="restaurants">Restaurants</option>
                              <option value="restaurants">Restaurants</option>
                              <option value="restaurants">Restaurants</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-3 align-self-center">
                        <label className="labels" htmlFor="#desc">Description</label>
                    </div>
                    <div className="col-md-9">
                        <textarea className="form-control form-control-alternative" id="desc" name="desc" rows={3} placeholder="Entrez la description"></textarea>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-3 align-self-center">
                        <label className="labels" htmlFor="#budget">Budget</label>
                    </div>
                    <div className="col-md-9 align-self-center">
                        <div className="form-group">
                          <select id="budget" name="budget" className="form-control" placeholder="Budget de l'activité" required>
                                <option value="restaurants">Gratuit</option>
                                <option value="restaurants">Economique</option>
                                <option value="restaurants">Moderé</option>
                                <option value="restaurants">Cher</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
            <input  className="btn btn-raised btn-round btn-primary btn-file btn-sm mx-auto mt-3"  type="submit" name="submit"/>

            </div>
        </div>
    </div>
    );
}
export {AddPlaceForm}
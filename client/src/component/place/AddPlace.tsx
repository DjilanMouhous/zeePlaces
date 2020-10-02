import React from 'react';

function AddPlace (){
  return(
    
    <div className="container">
        <div className="row">
            <h1>Hi</h1>
            <div className="col-md-4">
                <img src="https://demos.creative-tim.com/argon-design-system/assets/img/brand/white.png" alt=""/>
                <div>
                    <span className="btn btn-raised btn-round btn-primary btn-file btn-sm mx-auto mt-3">
                      <span className="fileinput-new">Add Photo</span>
                      <span className="fileinput-exists">Change</span>
                      <input type="file" name="..."/></span>
                    <br/>
                    <a href="#pablo" className="btn btn-danger btn-round fileinput-exists btn-simple btn-sm" data-dismiss="fileinput"><i className="tim-icons icon-simple-remove"></i> Remove</a>
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
            </div>
        </div>
    </div>
    );
}
export {AddPlace}
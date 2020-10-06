import React from 'react';


function ContactForm(){
    return(
        <div className="contactus-1 bg-default pt-5" style={{backgroundImage: "url('https://demos.creative-tim.com/argon-design-system-pro/assets/img/ill/1.svg')"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 d-flex justify-content-center flex-column">
              <h2 className="title text-white">Contactez nous !</h2>
              <h4 className="description text-white">Vous souhaitez nous signaler un bug ? Une réclamation ? Ou tout simplement votre satisfaction ?</h4>
              <div className="info info-horizontal">
                <div className="icon icon-shape icon-shape-primary shadow rounded-circle text-white">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="description">
                  <h4 className="info-title text-white">Contactez nous par téléphone</h4>
                  <p className="description ml-3 text-white">Djilan, 06 58 84 55 23<br/>
                    Abd, 01 23 45 67 89<br/>
                  </p>
                </div>
              </div>
              
            </div>
            <div className="col-lg-5 col-md-7 ml-auto mr-auto">
              <div className="card card-contact card-raised">
                <form role="form" id="contact-form" method="post">
                  <div className="card-header text-center">
                    <h4 className="card-title">Contactez nous</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Prénom</label>
                          <div className="input-group mb-4">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="ni ni-circle-08"></i></span>
                            </div>
                            <input className="form-control" placeholder="Prénom..." aria-label="Prénom..." type="text"/>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 pl-2">
                        <div className="form-group">
                          <label>Nom</label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="ni ni-collection"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Nom..." aria-label="Nom..."/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Adresse mail</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Adresse mail..."/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Votre message</label>
                      <textarea name="message" className="form-control" id="message" rows={6}></textarea>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="custom-control custom-checkbox mt-2">
                          <input className="custom-control-input" id="customCheck" type="checkbox"/>
                          <label className="custom-control-label" htmlFor="customCheck">
                            <span>Je ne suis pas un robot</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <button type="submit" className="btn btn-primary pull-right">Envoyer le message</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export {ContactForm}
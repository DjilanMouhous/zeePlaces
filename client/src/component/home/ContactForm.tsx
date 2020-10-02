import React from 'react';


function ContactForm(){
    return(
        <div className="contactus-1 bg-default pt-5" style={{backgroundImage: "url('https://demos.creative-tim.com/argon-design-system-pro/assets/img/ill/1.svg')"}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 d-flex justify-content-center flex-column">
              <h2 className="title text-white">Get in Touch</h2>
              <h4 className="description text-white">You need more information? Check what other persons are saying about our product. They are very happy with their purchase.</h4>
              <div className="info info-horizontal">
                <div className="icon icon-shape icon-shape-primary shadow rounded-circle text-white">
                  <i className="ni ni-square-pin"></i>
                </div>
                <div className="description">
                  <h4 className="info-title text-white">Find us at the office</h4>
                  <p className="description ml-3 text-white"> Bld Mihail Kogalniceanu, nr. 8,<br/>
                    7652 Bucharest,<br/>
                    Romania
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-shape icon-shape-primary shadow rounded-circle text-white">
                  <i className="ni ni-mobile-button"></i>
                </div>
                <div className="description">
                  <h4 className="info-title text-white">Give us a ring</h4>
                  <p className="description ml-3 text-white"> Michael Jordan<br/>
                    +40 762 321 762<br/>
                    Mon - Fri, 8:00-22:00
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-7 ml-auto mr-auto">
              <div className="card card-contact card-raised">
                <form role="form" id="contact-form" method="post">
                  <div className="card-header text-center">
                    <h4 className="card-title">Contact Us</h4>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First name</label>
                          <div className="input-group mb-4">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="ni ni-circle-08"></i></span>
                            </div>
                            <input className="form-control" placeholder="First Name..." aria-label="First Name..." type="text"/>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 pl-2">
                        <div className="form-group">
                          <label>Last name</label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <span className="input-group-text"><i className="ni ni-collection"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Last Name..." aria-label="Last Name..."/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Email address</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Email Here..."/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Your message</label>
                      <textarea name="message" className="form-control" id="message" rows={6}></textarea>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="custom-control custom-checkbox mt-2">
                          <input className="custom-control-input" id="customCheck" type="checkbox"/>
                          <label className="custom-control-label" htmlFor="customCheck">
                            <span>I'm not a robot</span>
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <button type="submit" className="btn btn-primary pull-right">Send Message</button>
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
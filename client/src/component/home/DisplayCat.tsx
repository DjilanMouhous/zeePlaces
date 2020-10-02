import React from 'react';

function DisplayCat (){
  return(
      <div className="blogs-2 w-75 m-auto">
    <div className="container-fluid pt-5">
          <div className="row mb-md-5">
            <div className="col-md-8 mx-auto">
              <h3 className="display-3 text-center">Rechercher par catégorie</h3>
              <p className="lead text-center">I always felt like I could do anything. That’s the main thing people are controlled by! Thoughts- their perception of themselves! They're slowed down by their perception of themselves. If you're taught you can’t do anything, you won’t do anything. I was taught I could do everything.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="card card-blog card-background" data-animation="zooming">
                <div className="full-background" style={{backgroundImage: "url('https://cdn.paris.fr/paris/2020/04/15/huge-1b2b1c3c63800256289aa9c1b0ebe360.jpg')"}}></div>
                <a href="javascript:;">
                  <div className="card-body">
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">AI at the Edge</h6>
                      <h5 className="card-title text-white">Research Byte</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card-blog card-background" data-animation="zooming">
              <div className="full-background" style={{backgroundImage: "url('https://cdn.paris.fr/paris/2020/04/15/huge-1b2b1c3c63800256289aa9c1b0ebe360.jpg')"}}></div>
                <a href="javascript:;">
                  <div className="card-body">
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">Spectrum</h6>
                      <h5 className="card-title text-white">Data Virtualization</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card-blog card-background" data-animation="zooming">
              <div className="full-background" style={{backgroundImage: "url('https://cdn.paris.fr/paris/2020/04/15/huge-1b2b1c3c63800256289aa9c1b0ebe360.jpg')"}}></div>
                <a href="javascript:;">
                  <div className="card-body">
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">Touch on a trend</h6>
                      <h5 className="card-title text-white">New Challenges</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card-blog card-background" data-animation="zooming">
              <div className="full-background" style={{backgroundImage: "url('https://cdn.paris.fr/paris/2020/04/15/huge-1b2b1c3c63800256289aa9c1b0ebe360.jpg')"}}></div>
                <a href="javascript:;">
                  <div className="card-body">
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">Self-Driving Cars</h6>
                      <h5 className="card-title text-white">Driverless Future</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
}
export {DisplayCat}
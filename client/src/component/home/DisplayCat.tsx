import React from 'react';

function DisplayCat (){
  return(
      <div className="blogs-2 w-75 m-auto">
    <div className="container-fluid pt-5">
          <div className="row mb-md-5">
            <div className="col-md-8 mx-auto">
              <h3 className="display-3 text-center">Catégories populaires</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="card card-blog card-background" data-animation="zooming">
                <div className="full-background" style={{backgroundImage: "url('https://baolicannes.com/wp-content/uploads/2016/02/plat-asiatiques-baoli-restaurant-club-cannes-photo-002.jpg')"}}></div>
                <a href="javascript:;">
                  <div className="card-body">
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">Restaurants</h6>
                      <h5 className="card-title text-white">Plats asiatiques</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card-blog card-background" data-animation="zooming">
              <div className="full-background" style={{backgroundImage: "url('https://img.20mn.fr/ip2n1m4pT8uhBOGKVR1eRA/830x532_deux-paons-illustration.jpg')"}}></div>
                <a href="javascript:;">
                  <div className="card-body">
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">Parcs / Ballades</h6>
                      <h5 className="card-title text-white">Parcs animaliers</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card-blog card-background" data-animation="zooming">
              <div className="full-background" style={{backgroundImage: "url('https://lh3.googleusercontent.com/proxy/lgTjTE5zzyip3s6B6_5Gr6CCiqzb3DkMHibHg2l1jT1DQ3G0BO7p8xL_Np2akQ9f7pCSHGWAcQxpgL429y2Xg6a95026S2XAuDLV4FvJYV2iskOsbuag8rAugbLcYU8ePW_gFJJYMQaIFQ')"}}></div>
                <a href="javascript:;">
                  <div className="card-body">
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">Expériences</h6>
                      <h5 className="card-title text-white">Musées</h5>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card-blog card-background" data-animation="zooming">
              <div className="full-background" style={{backgroundImage: "url('https://www.cool-blog.org/wp-content/uploads/2019/07/plats-italiens-classiques.jpeg')"}}></div>
                <a href="javascript:;">
                  <div className="card-body">
                    <div className="content-bottom">
                      <h6 className="card-category text-white opacity-8">Restaurants</h6>
                      <h5 className="card-title text-white">Plats italien</h5>
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
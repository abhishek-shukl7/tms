/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import user01 from '../../assets/images/user/01.jpg';
import user02 from '../../assets/images/user/02.jpg';
import user03 from '../../assets/images/user/03.jpg';
import user04 from '../../assets/images/user/04.jpg';
import user05 from '../../assets/images/user/05.jpg';
import user06 from '../../assets/images/user/06.jpg';
import user07 from '../../assets/images/user/07.jpg';
import user08 from '../../assets/images/user/08.jpg';


const Test: React.FC = () => {

  return ( <>
  
      <div className="sp-slides">
          <div className="sp-slide">
              <img className="sp-image" src="path/to/image1.jpg" />
          </div>

          <div className="sp-slide">
              <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div className="sp-slide">
              <h3 className="sp-layer">Lorem ipsum dolor sit amet</h3>
              <p className="sp-layer">consectetur adipisicing elit</p>
          </div>
      </div>
 <div className="card-transparent mb-0">
          <div className="card-header d-flex align-items-center justify-content-between p-0 pb-3">
              <div className="header-title">
                  <h4 className="card-title">Current Projects</h4>
              </div>
              <div className="card-header-toolbar d-flex align-items-center">
                  <div id="top-project-slick-arrow" className="slick-aerrow-block">
                  </div>
              </div>
          </div>
          <div className="card-body p-0">
              <ul className="list-unstyled row top-projects mb-0">
                  <li className="col-lg-4">
                      <div className="card">
                          <div className="card-body">
                              <h5 className="mb-3">Hotel Management App UI Kit</h5>
                              <p className="mb-3"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                              <div className="iq-progress-bar bg-secondary-light mb-4">
                                  <span className="bg-secondary iq-progress progress-1" data-percent="65" style={{ transition: "width 2s ease 0s", width: "65%" }}></span>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                  <div className="iq-media-group">
                                      <a href="#" className="iq-media">
                                          <img src={user01} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                      <a href="#" className="iq-media">
                                          <img src={user02} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                      <a href="#" className="iq-media">
                                          <img src={user03} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                      <a href="#" className="iq-media">
                                          <img src={user04} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                  </div>
                                  <div>
                                      <a href="#" className="btn bg-secondary-light">Design</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </li>
                  <li className="col-lg-4">
                      <div className="card">
                          <div className="card-body">
                              <h5 className="mb-3">General Improvement in pages</h5>
                              <p className="mb-3"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                              <div className="iq-progress-bar bg-info-light mb-4">
                                  <span className="bg-info iq-progress progress-1" data-percent="65" style={{ transition: "width 2s ease 0s", width: " 65%" }}></span>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                  <div className="iq-media-group">
                                      <a href="#" className="iq-media">
                                          <img src={user05} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                      <a href="#" className="iq-media">
                                          <img src={user06} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                      <a href="#" className="iq-media">
                                          <img src={user07} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                      <a href="#" className="iq-media">
                                          <img src={user08} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                  </div>
                                  <div>
                                      <a href="#" className="btn bg-info-light">Testing</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </li>
                  <li className="col-lg-4">
                      <div className="card">
                          <div className="card-body">
                              <h5 className="mb-3">Product list view changes</h5>
                              <p className="mb-3"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                              <div className="iq-progress-bar bg-success-light mb-4">
                                  <span className="bg-success iq-progress progress-1" data-percent="65" style={{ transition: "width 2s ease 0s", width: "65%" }}></span>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                  <div className="iq-media-group">
                                      <a href="#" className="iq-media">
                                          <img src={user03} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                      <a href="#" className="iq-media">
                                          <img src={user04} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                      <a href="#" className="iq-media">
                                          <img src={user05} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                      <a href="#" className="iq-media">
                                          <img src={user06} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                  </div>
                                  <div>
                                      <a href="#" className="btn bg-success-light">SEO</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </li>
                  <li className="col-lg-4">
                      <div className="card">
                          <div className="card-body">
                              <h5 className="mb-3">Add Multiple theme options</h5>
                              <p className="mb-3"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                              <div className="iq-progress-bar bg-warning-light mb-4">
                                  <span className="bg-warning iq-progress progress-1" data-percent="65" style={{ transition: "width 2s ease 0s", width: "65%" }}></span>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                  <div className="iq-media-group">
                                      <a href="#" className="iq-media">
                                          <img src={user01} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                      <a href="#" className="iq-media">
                                          <img src={user02} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                      <a href="#" className="iq-media">
                                          <img src={user03} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                      <a href="#" className="iq-media">
                                          <img src={user04} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                  </div>
                                  <div>
                                      <a href="#" className="btn bg-warning-light">Development</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </li>
                  <li className="col-lg-4">
                      <div className="card">
                          <div className="card-body">
                              <h5 className="mb-3">Admin Panel Customization</h5>
                              <p className="mb-3"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                              <div className="iq-progress-bar bg-primary-light mb-4">
                                  <span className="bg-primary iq-progress progress-1" data-percent="65"></span>
                              </div>
                              <div className="d-flex align-items-center justify-content-between">
                                  <div className="iq-media-group">
                                      <a href="#" className="iq-media">
                                          <img src={user01} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                      <a href="#" className="iq-media">
                                          <img src={user02} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                      <a href="#" className="iq-media">
                                          <img src={user03} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                      <a href="#" className="iq-media">
                                          <img src={user04} className="img-fluid avatar-40 rounded-circle" alt="" />
                                      </a>
                                  </div>
                                  <div>
                                      <a href="#" className="btn bg-primary-light">Content</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
      </div></>
    
  );
};

export default Test;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import user01 from '../../../assets/images/user/01.jpg';
import user02 from '../../../assets/images/user/02.jpg';
import user03 from '../../../assets/images/user/03.jpg';
import user04 from '../../../assets/images/user/04.jpg';
import user05 from '../../../assets/images/user/05.jpg';
import user06 from '../../../assets/images/user/06.jpg';
import user07 from '../../../assets/images/user/07.jpg';
import user08 from '../../../assets/images/user/08.jpg';

interface ContentGroupProps {
    activeIndex: number;
}
  

const Grid: React.FC<ContentGroupProps> = ({ activeIndex }) => {
    
return (
    <div id="grid" className={activeIndex === 0 ? 'item-content animate__animated animate__fadeIn active' : 'item-content animate__animated animate__fadeIn'} data-toggle-extra="tab-content">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card-transparent mb-0 desk-info">
                                <div className="card-body p-0">                           
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card">
                                                <div className="card-body">                           
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h5>Open Projects  ( 05 )</h5>
                                                        <div className="dropdown">
                                                            <span className="dropdown-toggle py-2" id="dropdownMenuButton04" data-toggle="dropdown">
                                                            <i className="ri-more-fill"></i>
                                                            </span>
                                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton04">
                                                                <a className="dropdown-item" href="#"><i className="ri-file-copy-2-line mr-2"></i>Duplicate</a>
                                                                <a className="dropdown-item" href="#"><i className="ri-edit-2-line mr-2"></i>Rename</a>
                                                                <a className="dropdown-item" href="#"><i className="ri-delete-bin-5-line mr-2"></i>Delete</a> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="card">
                                                <div className="card-body"> 
                                                    <h5 className="mb-3">Hotel Management App UI Kit</h5>
                                                    <p className="mb-3"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                                    <div className="iq-progress-bar bg-secondary-light mb-4">
                                                        <span className="bg-secondary iq-progress progress-1" data-percent="65" style={{transition: "width 2s ease 0s", width: "65%"}}></span>
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
                                            <div className="card">
                                                <div className="card-body"> 
                                                    <h5 className="mb-3">General Improvement in Landing pages</h5>
                                                    <p className="mb-3"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                                    <div className="iq-progress-bar bg-info-light mb-4">
                                                        <span className="bg-info iq-progress progress-1" data-percent="65" style={{transition: "width 2s ease 0s", width: "65%"}}></span>
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
                                            <div className="card">
                                                <div className="card-body"> 
                                                    <h5 className="mb-3">Product list view changes</h5>
                                                    <p className="mb-3"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                                    <div className="iq-progress-bar bg-success-light mb-4">
                                                        <span className="bg-success iq-progress progress-1" data-percent="65" style={{transition: "width 2s ease 0s", width: "65%"}}></span>
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
                                            <div className="card">
                                                <div className="card-body"> 
                                                    <h5 className="mb-3">Add Multiple theme options</h5>
                                                    <p className="mb-3"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                                    <div className="iq-progress-bar bg-warning-light mb-4">
                                                        <span className="bg-warning iq-progress progress-1" data-percent="65" style={{transition: "width 2s ease 0s", width: "65%"}}></span>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-transparent mb-0 desk-info">
                                <div className="card-body p-0">                           
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card">
                                                <div className="card-body">                           
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h5>In Progress ( 03 )</h5>
                                                        <div className="dropdown">
                                                            <span className="dropdown-toggle py-2" id="dropdownMenuButton05" data-toggle="dropdown">
                                                            <i className="ri-more-fill"></i>
                                                            </span>
                                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton05">
                                                                <a className="dropdown-item" href="#"><i className="ri-file-copy-2-line mr-2"></i>Duplicate</a>
                                                                <a className="dropdown-item" href="#"><i className="ri-edit-2-line mr-2"></i>Rename</a>
                                                                <a className="dropdown-item" href="#"><i className="ri-delete-bin-5-line mr-2"></i>Delete</a> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="card">
                                                <div className="card-body"> 
                                                    <h5 className="mb-3">Product list view changes</h5>
                                                    <p className="mb-3"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                                    <div className="iq-progress-bar bg-success-light mb-4">
                                                        <span className="bg-success iq-progress progress-1" data-percent="65" style={{transition: "width 2s ease 0s", width: "65%"}}></span>
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
                                            <div className="card">
                                                <div className="card-body"> 
                                                    <h5 className="mb-3">Admin Panel Customization</h5>
                                                    <p className="mb-3"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                                    <div className="iq-progress-bar bg-primary-light mb-4">
                                                        <span className="bg-primary iq-progress progress-1" data-percent="65" style={{transition: "width 2s ease 0s", width: "65%"}}></span>
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
                                            <div className="card">
                                                <div className="card-body"> 
                                                    <h5 className="mb-3">Sidebar in dashboard plans</h5>
                                                    <p className="mb-3"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                                    <div className="iq-progress-bar bg-secondary-light mb-4">
                                                        <span className="bg-secondary iq-progress progress-1" data-percent="65" style={{transition: "width 2s ease 0s", width: "65%"}}></span>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card-transparent mb-0 desk-info">
                                <div className="card-body p-0">                           
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card">
                                                <div className="card-body">                           
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <h5>Compeleted ( 05 )</h5>
                                                        <div className="dropdown">
                                                            <span className="dropdown-toggle py-2" id="dropdownMenuButton06" data-toggle="dropdown">
                                                            <i className="ri-more-fill"></i>
                                                            </span>
                                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton06">
                                                                <a className="dropdown-item" href="#"><i className="ri-file-copy-2-line mr-2"></i>Duplicate</a>
                                                                <a className="dropdown-item" href="#"><i className="ri-edit-2-line mr-2"></i>Rename</a>
                                                                <a className="dropdown-item" href="#"><i className="ri-delete-bin-5-line mr-2"></i>Delete</a> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="card">
                                                <div className="card-body"> 
                                                    <h5 className="mb-3">Login screen updated in mobile </h5>
                                                    <p className="mb-3"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="iq-media-group">
                                                            <a href="#" className="iq-media">
                                                                <img src={user01} className="img-fluid avatar-40 rounded-circle" alt="" />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a href="#" className="btn bg-secondary-light">Design</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-body"> 
                                                    <h5 className="mb-3">Helpdesk in dashboard plans</h5>
                                                    <p className="mb-3"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="iq-media-group">
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
                                            <div className="card">
                                                <div className="card-body"> 
                                                    <h5 className="mb-3">Marketplace Admin Dashboard</h5>
                                                    <p className="mb-3"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
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
                                            <div className="card">
                                                <div className="card-body"> 
                                                    <h5 className="mb-3">Multipurpose theme and design</h5>
                                                    <p className="mb-3"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="iq-media-group">
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
                                            <div className="card">
                                                <div className="card-body"> 
                                                    <h5 className="mb-3">Minimal Design of IOT project</h5>
                                                    <p className="mb-3"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="iq-media-group">
                                                            <a href="#" className="iq-media">
                                                                <img src={user01} className="img-fluid avatar-40 rounded-circle" alt="" />
                                                            </a>
                                                            <a href="#" className="iq-media">
                                                                <img src={user02} className="img-fluid avatar-40 rounded-circle" alt="" />
                                                            </a>
                                                        </div>
                                                        <div>
                                                            <a href="#" className="btn bg-warning-light">Development</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  );
};

export default Grid;
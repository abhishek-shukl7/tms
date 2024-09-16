/* eslint-disable jsx-a11y/img-redundant-alt */
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
import user09 from '../../../assets/images/user/09.jpg';

interface ContentGroupProps {
    activeIndex: number;
}

const Grid: React.FC<ContentGroupProps> = ({ activeIndex }) => {
    
return ( 
    <div id="grid" className={activeIndex === 0 ? 'item-content animate__animated animate__fadeIn active' : 'item-content animate__animated animate__fadeIn'} data-toggle-extra="tab-content">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="card-transparent card-block card-stretch card-height">
                        <div className="card-body text-center p-0">                            
                            <div className="item">
                                <div className="odr-img">
                                    <img src={user01} className="img-fluid rounded-circle avatar-90 m-auto" alt="image" />
                                </div>                        
                                <div className="odr-content rounded">                                          
                                    <h4 className="mb-2">Ruben Franci</h4>
                                    <p className="mb-3">rubenfranci@gmail.com</p>
                                    <ul className="list-unstyled mb-3">
                                        <li className="bg-secondary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-mail-open-line m-0"></i></li>
                                        <li className="bg-primary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-chat-3-line m-0"></i></li>
                                        <li className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></li>
                                    </ul>                                    
                                    <div className="pt-3 border-top">
                                        <a href="#" className="btn btn-primary">Message</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card-transparent card-block card-stretch card-height">
                        <div className="card-body text-center p-0">                            
                            <div className="item">
                                <div className="odr-img">
                                    <img src={user02} className="img-fluid rounded-circle avatar-90 m-auto" alt="image" />
                                </div>                        
                                <div className="odr-content rounded">                                          
                                    <h4 className="mb-2">Kaylynn Press</h4>
                                    <p className="mb-3">kaylynnpress@gmail.com</p>
                                    <ul className="list-unstyled mb-3">
                                        <li className="bg-secondary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-mail-open-line m-0"></i></li>
                                        <li className="bg-primary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-chat-3-line m-0"></i></li>
                                        <li className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></li>
                                    </ul>                                    
                                    <div className="pt-3 border-top">
                                        <a href="#" className="btn btn-primary">Message</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card-transparent card-block card-stretch card-height">
                        <div className="card-body text-center p-0">                            
                            <div className="item">
                                <div className="odr-img">
                                    <img src={user03} className="img-fluid rounded-circle avatar-90 m-auto" alt="image" />
                                </div>                        
                                <div className="odr-content rounded">                                          
                                    <h4 className="mb-2">Corey Press</h4>
                                    <p className="mb-3">coreypress@gmail.com</p>
                                    <ul className="list-unstyled mb-3">
                                        <li className="bg-secondary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-mail-open-line m-0"></i></li>
                                        <li className="bg-primary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-chat-3-line m-0"></i></li>
                                        <li className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></li>
                                    </ul>                                    
                                    <div className="pt-3 border-top">
                                        <a href="#" className="btn btn-primary">Message</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card-transparent card-block card-stretch card-height">
                        <div className="card-body text-center p-0">                            
                            <div className="item">
                                <div className="odr-img">
                                    <img src={user04} className="img-fluid rounded-circle avatar-90 m-auto" alt="image" />
                                </div>                        
                                <div className="odr-content rounded">                                          
                                    <h4 className="mb-2">Zain Carder</h4>
                                    <p className="mb-3">zaincarder@gmail.com</p>
                                    <ul className="list-unstyled mb-3">
                                        <li className="bg-secondary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-mail-open-line m-0"></i></li>
                                        <li className="bg-primary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-chat-3-line m-0"></i></li>
                                        <li className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></li>
                                    </ul>                                    
                                    <div className="pt-3 border-top">
                                        <a href="#" className="btn btn-primary">Message</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card-transparent card-block card-stretch card-height">
                        <div className="card-body text-center p-0">                            
                            <div className="item">
                                <div className="odr-img">
                                    <img src={user05} className="img-fluid rounded-circle avatar-90 m-auto" alt="image" />
                                </div>                        
                                <div className="odr-content rounded">                                          
                                    <h4 className="mb-2">Erin Donin</h4>
                                    <p className="mb-3">erindonin@gmail.com</p>
                                    <ul className="list-unstyled mb-3">
                                        <li className="bg-secondary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-mail-open-line m-0"></i></li>
                                        <li className="bg-primary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-chat-3-line m-0"></i></li>
                                        <li className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></li>
                                    </ul>                                    
                                    <div className="pt-3 border-top">
                                        <a href="#" className="btn btn-primary">Message</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card-transparent card-block card-stretch card-height">
                        <div className="card-body text-center p-0">                            
                            <div className="item">
                                <div className="odr-img">
                                    <img src={user06} className="img-fluid rounded-circle avatar-90 m-auto" alt="image" />
                                </div>                        
                                <div className="odr-content rounded">                                          
                                    <h4 className="mb-2">Mira Herwitz</h4>
                                    <p className="mb-3">miraherwitz@gmail.com</p>
                                    <ul className="list-unstyled mb-3">
                                        <li className="bg-secondary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-mail-open-line m-0"></i></li>
                                        <li className="bg-primary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-chat-3-line m-0"></i></li>
                                        <li className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></li>
                                    </ul>                                    
                                    <div className="pt-3 border-top">
                                        <a href="#" className="btn btn-primary">Message</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card-transparent card-block card-stretch card-height">
                        <div className="card-body text-center p-0">                            
                            <div className="item">
                                <div className="odr-img">
                                    <img src={user07} className="img-fluid rounded-circle avatar-90 m-auto" alt="image" />
                                </div>                        
                                <div className="odr-content rounded">                                          
                                    <h4 className="mb-2">Kaiya George</h4>
                                    <p className="mb-3">kaiyageorge@gmail.com</p>
                                    <ul className="list-unstyled mb-3">
                                        <li className="bg-secondary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-mail-open-line m-0"></i></li>
                                        <li className="bg-primary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-chat-3-line m-0"></i></li>
                                        <li className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></li>
                                    </ul>                                    
                                    <div className="pt-3 border-top">
                                        <a href="#" className="btn btn-primary">Message</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card-transparent card-block card-stretch card-height">
                        <div className="card-body text-center p-0">                            
                            <div className="item">
                                <div className="odr-img">
                                    <img src={user08} className="img-fluid rounded-circle avatar-90 m-auto" alt="image" />
                                </div>                        
                                <div className="odr-content rounded">                                          
                                    <h4 className="mb-2">Lincoln George</h4>
                                    <p className="mb-3">lincolngeorge@gmail.com</p>
                                    <ul className="list-unstyled mb-3">
                                        <li className="bg-secondary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-mail-open-line m-0"></i></li>
                                        <li className="bg-primary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-chat-3-line m-0"></i></li>
                                        <li className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></li>
                                    </ul>                                    
                                    <div className="pt-3 border-top">
                                        <a href="#" className="btn btn-primary">Message</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="card-transparent card-block card-stretch card-height">
                        <div className="card-body text-center p-0">                            
                            <div className="item">
                                <div className="odr-img">
                                    <img src={user09} className="img-fluid rounded-circle avatar-90 m-auto" alt="image" />
                                </div>                        
                                <div className="odr-content rounded">                                          
                                    <h4 className="mb-2">Paityn Siphron</h4>
                                    <p className="mb-3">paitynsiphron@gmail.com</p>
                                    <ul className="list-unstyled mb-3">
                                        <li className="bg-secondary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-mail-open-line m-0"></i></li>
                                        <li className="bg-primary-light rounded-circle iq-card-icon-small mr-4"><i className="ri-chat-3-line m-0"></i></li>
                                        <li className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></li>
                                    </ul>                                    
                                    <div className="pt-3 border-top">
                                        <a href="#" className="btn btn-primary">Message</a>
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
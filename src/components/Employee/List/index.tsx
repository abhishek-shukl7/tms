/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
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

const List: React.FC<ContentGroupProps> = ({ activeIndex }) => {
    
return ( 
    <div id="list" className={activeIndex === 1 ? 'item-content animate__animated animate__fadeIn active' : 'item-content animate__animated animate__fadeIn'} data-toggle-extra="tab-content">
            <div className="table-responsive rounded bg-white mb-4">
                <table className="table mb-0 table-borderless tbl-server-info">
                    <tbody>
                        <tr>
                            <td>
                                <div className="media align-items-center">
                                    <img src={user01} className="img-fluid rounded-circle avatar-40" alt="image" />
                                    <h5 className="ml-3">Paityn Siphron</h5>
                                </div>
                            </td>
                            <td>paitynsiphron@gmail.com</td>
                            <td>
                                <div className="media align-items-center">
                                    <div className="bg-secondary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-mail-open-line m-0"></i></div>
                                    <div className="bg-primary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-chat-3-line m-0"></i></div>
                                    <div className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></div>
                                </div>
                            </td>
                            <td>
                                <a href="#" className="btn btn-primary">Message</a>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <a href="#" className="text-body"><i className="las la-pen mr-3"></i></a>
                                    <a href="#" className="text-body"><i className="las la-trash-alt mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="media align-items-center">
                                    <img src={user02} className="img-fluid rounded-circle avatar-40" alt="image" />
                                    <h5 className="ml-3">Kaylynn Press</h5>
                                </div>
                            </td>
                            <td>kaylynnpress@gmail.com</td>
                            <td>
                                <div className="media align-items-center">
                                    <div className="bg-secondary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-mail-open-line m-0"></i></div>
                                    <div className="bg-primary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-chat-3-line m-0"></i></div>
                                    <div className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></div>
                                </div>
                            </td>
                            <td>
                                <a href="#" className="btn btn-primary">Message</a>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <a href="#" className="text-body"><i className="las la-pen mr-3"></i></a>
                                    <a href="#" className="text-body"><i className="las la-trash-alt mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="media align-items-center">
                                    <img src={user03} className="img-fluid rounded-circle avatar-40" alt="image" />
                                    <h5 className="ml-3">Corey Press</h5>
                                </div>
                            </td>
                            <td>coreypress@gmail.com</td>
                            <td>
                                <div className="media align-items-center">
                                    <div className="bg-secondary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-mail-open-line m-0"></i></div>
                                    <div className="bg-primary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-chat-3-line m-0"></i></div>
                                    <div className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></div>
                                </div>
                            </td>
                            <td>
                                <a href="#" className="btn btn-primary">Message</a>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <a href="#" className="text-body"><i className="las la-pen mr-3"></i></a>
                                    <a href="#" className="text-body"><i className="las la-trash-alt mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="media align-items-center">
                                    <img src={user04} className="img-fluid rounded-circle avatar-40" alt="image" />
                                    <h5 className="ml-3">Zain Carder</h5>
                                </div>
                            </td>
                            <td>zaincarder@gmail.com</td>
                            <td>
                                <div className="media align-items-center">
                                    <div className="bg-secondary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-mail-open-line m-0"></i></div>
                                    <div className="bg-primary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-chat-3-line m-0"></i></div>
                                    <div className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></div>
                                </div>
                            </td>
                            <td>
                                <a href="#" className="btn btn-primary">Message</a>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <a href="#" className="text-body"><i className="las la-pen mr-3"></i></a>
                                    <a href="#" className="text-body"><i className="las la-trash-alt mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="media align-items-center">
                                    <img src={user05} className="img-fluid rounded-circle avatar-40" alt="image" />
                                    <h5 className="ml-3">Erin Donin</h5>
                                </div>
                            </td>
                            <td>erindonin@gmail.com</td>
                            <td>
                                <div className="media align-items-center">
                                    <div className="bg-secondary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-mail-open-line m-0"></i></div>
                                    <div className="bg-primary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-chat-3-line m-0"></i></div>
                                    <div className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></div>
                                </div>
                            </td>
                            <td>
                                <a href="#" className="btn btn-primary">Message</a>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <a href="#" className="text-body"><i className="las la-pen mr-3"></i></a>
                                    <a href="#" className="text-body"><i className="las la-trash-alt mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="media align-items-center">
                                    <img src={user06} className="img-fluid rounded-circle avatar-40" alt="image" />
                                    <h5 className="ml-3">Mira Herwitz</h5>
                                </div>
                            </td>
                            <td>miraherwitz@gmail.com</td>
                            <td>
                                <div className="media align-items-center">
                                    <div className="bg-secondary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-mail-open-line m-0"></i></div>
                                    <div className="bg-primary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-chat-3-line m-0"></i></div>
                                    <div className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></div>
                                </div>
                            </td>
                            <td>
                                <a href="#" className="btn btn-primary">Message</a>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <a href="#" className="text-body"><i className="las la-pen mr-3"></i></a>
                                    <a href="#" className="text-body"><i className="las la-trash-alt mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="media align-items-center">
                                    <img src={user07} className="img-fluid rounded-circle avatar-40" alt="image" />
                                    <h5 className="ml-3">Kaiya George</h5>
                                </div>
                            </td>
                            <td>kaiyageorge@gmail.com</td>
                            <td>
                                <div className="media align-items-center">
                                    <div className="bg-secondary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-mail-open-line m-0"></i></div>
                                    <div className="bg-primary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-chat-3-line m-0"></i></div>
                                    <div className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></div>
                                </div>
                            </td>
                            <td>
                                <a href="#" className="btn btn-primary">Message</a>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <a href="#" className="text-body"><i className="las la-pen mr-3"></i></a>
                                    <a href="#" className="text-body"><i className="las la-trash-alt mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="media align-items-center">
                                    <img src={user08} className="img-fluid rounded-circle avatar-40" alt="image" />
                                    <h5 className="ml-3">Lincoln George</h5>
                                </div>
                            </td>
                            <td>lincolngeorge@gmail.com</td>
                            <td>
                                <div className="media align-items-center">
                                    <div className="bg-secondary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-mail-open-line m-0"></i></div>
                                    <div className="bg-primary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-chat-3-line m-0"></i></div>
                                    <div className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></div>
                                </div>
                            </td>
                            <td>
                                <a href="#" className="btn btn-primary">Message</a>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <a href="#" className="text-body"><i className="las la-pen mr-3"></i></a>
                                    <a href="#" className="text-body"><i className="las la-trash-alt mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="media align-items-center">
                                    <img src={user09} className="img-fluid rounded-circle avatar-40" alt="image" />
                                    <h5 className="ml-3">Paityn Siphron</h5>
                                </div>
                            </td>
                            <td>paitynsiphron@gmail.com</td>
                            <td>
                                <div className="media align-items-center">
                                    <div className="bg-secondary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-mail-open-line m-0"></i></div>
                                    <div className="bg-primary-light rounded-circle iq-card-icon-small mr-3"><i className="ri-chat-3-line m-0"></i></div>
                                    <div className="bg-success-light rounded-circle iq-card-icon-small"><i className="ri-phone-line m-0"></i></div>
                                </div>
                            </td>
                            <td>
                                <a href="#" className="btn btn-primary">Message</a>
                            </td>
                            <td>
                                <div className="d-flex align-items-center">
                                    <a href="#" className="text-body"><i className="las la-pen mr-3"></i></a>
                                    <a href="#" className="text-body"><i className="las la-trash-alt mr-0"></i></a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
  );
};

export default List;
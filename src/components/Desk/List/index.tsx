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
  

const List: React.FC<ContentGroupProps> = ({activeIndex}) => {
    
return (
    <div id="list" className={activeIndex === 1 ? 'item-content animate__animated animate__fadeIn active' : 'item-content animate__animated animate__fadeIn'} data-toggle-extra="tab-content">
                    <div className="table-responsive rounded bg-white mb-4">
                        <table className="table mb-0 table-borderless tbl-server-info tble-min-width">
                            <tbody>
                                <tr>
                                    <td>Hotel Management App UI Kit</td>
                                    <td className="w-25">
                                        <div className="iq-progress-bar bg-secondary-light">
                                            <span className="bg-secondary iq-progress progress-1" data-percent="65"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                    </td>
                                    <td>
                                        <div className="iq-media-group">
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user01} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user02} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user03} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user04} alt="" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                    <a href="#" className="btn bg-secondary-light">Design</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>General Improvement</td>
                                    <td className="w-25">
                                        <div className="iq-progress-bar bg-info-light">
                                            <span className="bg-info iq-progress progress-1" data-percent="65"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                    </td>
                                    <td>
                                        <div className="iq-media-group">
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user05} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user06} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user07} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user08} alt="" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                    <a href="#" className="btn bg-info-light">Testing</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Product list view changes</td>
                                    <td className="w-25">
                                        <div className="iq-progress-bar bg-success-light">
                                            <span className="bg-success iq-progress progress-1" data-percent="65"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                    </td>
                                    <td>
                                        <div className="iq-media-group">
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user03} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user04} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user05} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user06} alt="" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                    <a href="#" className="btn bg-success-light">SEO</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Add Multiple theme options</td>
                                    <td className="w-25">
                                        <div className="iq-progress-bar bg-primary-light">
                                            <span className="bg-primary iq-progress progress-1" data-percent="65"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                    </td>
                                    <td>
                                        <div className="iq-media-group">
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user01} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user02} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user03} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user04} alt="" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                    <a href="#" className="btn bg-primary-light">Content</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Product list view changes</td>
                                    <td className="w-25">
                                        <div className="iq-progress-bar bg-success-light">
                                            <span className="bg-success iq-progress progress-1" data-percent="65"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                    </td>
                                    <td>
                                        <div className="iq-media-group">
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user01} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user02} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user03} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user04} alt="" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                    <a href="#" className="btn bg-success-light">SEO</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Admin Panel Customization</td>
                                    <td className="w-25">
                                        <div className="iq-progress-bar bg-primary-light">
                                            <span className="bg-primary iq-progress progress-1" data-percent="65"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                    </td>
                                    <td>
                                        <div className="iq-media-group">
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user01} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user02} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user03} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user04} alt="" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                    <a href="#" className="btn bg-primary-light">Content</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sidebar in dashboard plans</td>
                                    <td className="w-25">
                                        <div className="iq-progress-bar bg-secondary-light">
                                            <span className="bg-secondary iq-progress progress-1" data-percent="65"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                    </td>
                                    <td>
                                        <div className="iq-media-group">
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user01} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user02} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user03} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user04} alt="" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                    <a href="#" className="btn bg-secondary-light">Design</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Login screen updated in mobile</td>
                                    <td className="w-25">
                                        <div className="iq-progress-bar bg-secondary-light">
                                            <span className="bg-secondary iq-progress progress-1" data-percent="65"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                    </td>
                                    <td>
                                        <a href="#" className="iq-media">
                                            <img className="img-fluid avatar-40 rounded-circle" src={user01} alt="" />
                                        </a>
                                    </td>
                                    <td>
                                    <a href="#" className="btn bg-secondary-light">Design</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Helpdesk in dashboard plans</td>
                                    <td className="w-25">
                                        <div className="iq-progress-bar bg-info-light">
                                            <span className="bg-info iq-progress progress-1" data-percent="65"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                    </td>
                                    <td>
                                        <div className="iq-media-group">
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user07} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user08} alt="" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                    <a href="#" className="btn bg-info-light">Testing</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Marketplace Admin Dashboard</td>
                                    <td className="w-25">
                                        <div className="iq-progress-bar bg-secondary-light">
                                            <span className="bg-secondary iq-progress progress-1" data-percent="65"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                    </td>
                                    <td>
                                        <div className="iq-media-group">
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user07} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user08} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user03} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user04} alt="" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                    <a href="#" className="btn bg-secondary-light">Design</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Multipurpose theme and design</td>
                                    <td className="w-25">
                                        <div className="iq-progress-bar bg-primary-light">
                                            <span className="bg-primary iq-progress progress-1" data-percent="65"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                    </td>
                                    <td>
                                        <div className="iq-media-group">
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user02} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user03} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user04} alt="" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                    <a href="#" className="btn bg-primary-light">Content</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Minimal Design of IOT project</td>
                                    <td className="w-25">
                                        <div className="iq-progress-bar bg-warning-light">
                                            <span className="bg-warning iq-progress progress-1" data-percent="65"></span>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="mb-0"><i className="las la-calendar-check mr-2"></i>02 / 02 / 2021</p>
                                    </td>
                                    <td>
                                        <div className="iq-media-group">
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user01} alt="" />
                                            </a>
                                            <a href="#" className="iq-media">
                                                <img className="img-fluid avatar-40 rounded-circle" src={user02} alt="" />
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                    <a href="#" className="btn bg-warning-light">Development</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
  );
};

export default List;
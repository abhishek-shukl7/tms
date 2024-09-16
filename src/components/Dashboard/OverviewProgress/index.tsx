/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

import user01 from '../../../assets/images/user/01.jpg';
import user02 from '../../../assets/images/user/02.jpg';
import user03 from '../../../assets/images/user/03.jpg';
import user04 from '../../../assets/images/user/04.jpg';
import user05 from '../../../assets/images/user/05.jpg';
import user06 from '../../../assets/images/user/06.jpg';
import user07 from '../../../assets/images/user/07.jpg';
import user08 from '../../../assets/images/user/08.jpg';
import user09 from '../../../assets/images/user/09.jpg';

const OverviewProgress: React.FC = () => {
    
return (
<div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <div className="header-title">
                                            <h4 className="card-title">Overview Progress</h4>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-inline p-0 mb-0">
                                            <li className="mb-1">
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0">UX / UI Design</p>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="iq-progress-bar bg-secondary-light">
                                                                {/* <span className="bg-secondary iq-progress progress-1" data-percent="65"></span> */}
                                                                <ProgressBar className="bg-secondary iq-progress progress-1" completed={65} maxCompleted={100}  bgColor="#F35421" borderRadius="50px" customLabel="" height="6px" baseBgColor="#fccfc1" isLabelVisible={false} />                                    
                                                            </div>
                                                            <span className="ml-3">65%</span>
                                                        </div>                                                                
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="iq-media-group text-sm-right">
                                                            <a href="#" className="iq-media">
                                                                <img className="img-fluid avatar-40 rounded-circle" src={user05} alt=""/>
                                                            </a>
                                                            <a href="#" className="iq-media">
                                                                <img className="img-fluid avatar-40 rounded-circle" src={user06} alt=""/>
                                                            </a>
                                                            <a href="#" className="iq-media">
                                                                <img className="img-fluid avatar-40 rounded-circle" src={user07} alt=""/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-1">
                                                <div className="d-flex align-items-center justify-content-between row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0">Development</p>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="iq-progress-bar bg-primary-light">
                                                                {/* <span className="bg-primary iq-progress progress-1" data-percent="59"></span> */}
                                                                <ProgressBar className="bg-primary iq-progress progress-1" completed={59} maxCompleted={100}  bgColor="#5773FF" baseBgColor="#d0d8ff" borderRadius="50px" customLabel="" height="6px" isLabelVisible={false} />                                    
                                                            </div>
                                                            <span className="ml-3">59%</span>
                                                        </div>                                                                
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="iq-media-group text-sm-right">
                                                            <a href="#" className="iq-media">
                                                                <img className="img-fluid avatar-40 rounded-circle" src={user08} alt=""/>
                                                            </a>
                                                            <a href="#" className="iq-media">
                                                                <img className="img-fluid avatar-40 rounded-circle" src={user09} alt=""/>
                                                            </a>
                                                            <a href="#" className="iq-media">
                                                                <img className="img-fluid avatar-40 rounded-circle" src={user04} alt=""/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-center justify-content-between row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0">Testing</p>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="iq-progress-bar bg-warning-light">
                                                                {/* <span className="bg-warning iq-progress progress-1" data-percent="78"></span> */}
                                                                <ProgressBar className="bg-warning iq-progress progress-1" completed={78} maxCompleted={100}  bgColor="#FFCF52" baseBgColor="#fff2cf" borderRadius="50px" customLabel="" height="6px" isLabelVisible={false} />                                    
                                                            </div>
                                                            <span className="ml-3">78%</span>
                                                        </div>                                                                
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="iq-media-group text-sm-right">
                                                            <a href="#" className="iq-media">
                                                                <img className="img-fluid avatar-40 rounded-circle" src={user01} alt=""/>
                                                            </a>
                                                            <a href="#" className="iq-media">
                                                                <img className="img-fluid avatar-40 rounded-circle" src={user02} alt=""/>
                                                            </a>
                                                            <a href="#" className="iq-media">
                                                                <img className="img-fluid avatar-40 rounded-circle" src={user03} alt=""/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
  );
};

export default OverviewProgress;
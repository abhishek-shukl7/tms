
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import user01 from '../../../assets/images/user/01.jpg';
import user02 from '../../../assets/images/user/02.jpg';
import user03 from '../../../assets/images/user/03.jpg';
import user04 from '../../../assets/images/user/04.jpg';
import user05 from '../../../assets/images/user/05.jpg';
import user06 from '../../../assets/images/user/06.jpg';
import user07 from '../../../assets/images/user/07.jpg';
import user08 from '../../../assets/images/user/08.jpg';

// import CircleProgress from '../../Common/CircleProgress';

const ProjectProgress: React.FC = () => {
    
    
return (
    <div className="row">
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-sm-8">
                                                        <div className="row align-items-center">
                                                            <div className="col-md-3">
                                                                <div id="circle-progress-21" className="circle-progress-01 circle-progress circle-progress-primary">
                                                                    <CircularProgressbar value={25} text={`${25}%`} 
                                                                    styles={buildStyles({ 
                                                                        pathColor: `rgba(87, 115, 255,1)`,
                                                                        textColor: 'rgba(87, 115, 255,1)',
                                                                        trailColor: '#d0d8ff',
                                                                      })}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div className="mt-3 mt-md-0">
                                                                    <h5 className="mb-1">Cloud Service Theme</h5>
                                                                    <p className="mb-0">Exclusively for cloud-based/ Startup theme.</p>
                                                                </div>                                                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4 text-sm-right mt-3 mt-sm-0">
                                                        <div className="iq-media-group">
                                                            <a href="#" className="iq-media">
                                                                <img className="img-fluid avatar-40 rounded-circle" src={user05} alt=""/>
                                                            </a>
                                                            <a href="#" className="iq-media">
                                                                <img className="img-fluid avatar-40 rounded-circle" src={user06} alt=""/>
                                                            </a>
                                                        </div>
                                                        <a className="btn btn-white text-primary link-shadow mt-2">High</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-sm-8">
                                                        <div className="row align-items-center">
                                                            <div className="col-md-3">
                                                                <div id="circle-progress-22" className="circle-progress-01 circle-progress circle-progress-secondary">
                                                                    <CircularProgressbar value={30} text={`${30}%`} 
                                                                    styles={buildStyles({ 
                                                                        pathColor: `#F35421`,
                                                                        textColor: '#F35421',
                                                                        trailColor: '#fbc4b2',
                                                                      })}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div className="mt-3 mt-md-0">
                                                                    <h5 className="mb-1">Automotive WordPress</h5>
                                                                    <p className="mb-0">Dealership-based business WordPress theme.</p>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4 text-sm-right mt-3 mt-sm-0">
                                                        <div className="iq-media-group">
                                                            <a href="#" className="iq-media">
                                                                <img className="img-fluid avatar-40 rounded-circle" src={user07} alt=""/>
                                                            </a>
                                                            <a href="#" className="iq-media">
                                                                <img className="img-fluid avatar-40 rounded-circle" src={user02} alt=""/>
                                                            </a>
                                                            <a href="#" className="iq-media">
                                                                <img className="img-fluid avatar-40 rounded-circle" src={user04} alt=""/>
                                                            </a>                                                
                                                            <a href="#" className="iq-media">
                                                                <img className="img-fluid avatar-40 rounded-circle" src={user08} alt=""/>
                                                            </a>
                                                        </div>
                                                        <a className="btn btn-white text-secondary link-shadow mt-2">Medium</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-sm-8">
                                                        <div className="row align-items-center">
                                                            <div className="col-md-3">
                                                                <div id="circle-progress-23" className="circle-progress-01 circle-progress circle-progress-warning">
                                                                    <CircularProgressbar value={25} text={`${25}%`} 
                                                                    styles={buildStyles({ 
                                                                        pathColor: `rgba(87, 115, 255,1)`,
                                                                        textColor: 'rgba(87, 115, 255,1)',
                                                                        trailColor: '#d0d8ff',
                                                                      })}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div className="mt-3 mt-md-0">
                                                                    <h5 className="mb-1">Online Education</h5>
                                                                    <p className="mb-0">Remote students and teachers dashboard.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4 text-sm-right mt-3 mt-sm-0">
                                                        <div className="iq-media-group">
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
                                                        <a className="btn btn-white text-warning link-shadow mt-2">Low</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="card mb-0">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-sm-8">
                                                        <div className="row align-items-center">
                                                            <div className="col-md-3">
                                                                <div id="circle-progress-24" className="circle-progress-01 circle-progress circle-progress-success">
                                                                    <CircularProgressbar value={40} text={`${40}%`} 
                                                                    styles={buildStyles({ 
                                                                        pathColor: `#F35421`,
                                                                        textColor: '#F35421',
                                                                        trailColor: '#fbc4b2',
                                                                      })}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-9">
                                                                <div className="mt-3 mt-md-0">
                                                                    <h5 className="mb-1">Blog/Magazine Theme</h5>
                                                                    <p className="mb-0">Launch visually appealing Blog theme.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4 text-sm-right mt-3 mt-sm-0">
                                                        <div className="iq-media-group">
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
                                                        <a className="btn btn-white text-success  link-shadow mt-2">High</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
  );
};

export default ProjectProgress;
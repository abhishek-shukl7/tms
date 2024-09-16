/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useEffect, useState } from 'react';
// import axios from 'axios'; 
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import user05 from '../../../assets/images/user/05.jpg';
import user06 from '../../../assets/images/user/06.jpg';

interface ContentGroupProps {
    activeIndex: number;
    projects : object;
    selectedItem : string ;
  }
  

const List: React.FC<ContentGroupProps> = ({activeIndex ,projects, selectedItem}) => {
      
    const getCompletionColor = (completion) => {
        if (completion < 50) {
            return '#F35421'; 
        } else if (completion < 75) {
            return '#50C6B4'; 
        } else {
            return 'rgba(87, 115, 255, 1)'; 
        }
    };

    const getTrailColor = (completion) => {
        if (completion < 50) {
            return '#fbc4b2'; 
        } else if (completion < 75) {
            return '#c3ece5'; 
        } else {
            return '#d0d8ff'; 
        }
    };
    
return (
    <div id="list" className={activeIndex === 1 ? 'item-content animate__animated animate__fadeIn active' : 'item-content animate__animated animate__fadeIn'} data-toggle-extra="tab-content">
        
        <div className="row">
            { projects.map((project) => (
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <div className="d-flex align-items-center">
                                                        <CircularProgressbar value={project.completion} text={`${project.completion}%`} 
                                                                            styles={buildStyles({ 
                                                                                pathColor: getCompletionColor(project.completion),
                                                                                textColor: getCompletionColor(project.completion),
                                                                                trailColor: getTrailColor(project.completion),
                                                                            })}
                                                        />                                                    
                                                    <div className="ml-3">
                                                        <h5 className="mb-1">{project.name}</h5>
                                                        {/* { const truncatedText = project.description.length > 50 ? project.description.slice(0, 50) + '...' : project.description; } */}
                                                        <p className="mb-0">{project.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-4 text-sm-right mt-3 mt-sm-0">
                                                <div className="iq-media-group">
                                                    <a href="#" className="iq-media">
                                                        <img className="img-fluid avatar-40 rounded-circle" src={user05} alt="" />
                                                    </a>
                                                    <a href="#" className="iq-media">
                                                        <img className="img-fluid avatar-40 rounded-circle" src={user06} alt="" />
                                                    </a>
                                                </div>
                                                <a className="btn btn-white text-primary link-shadow">{project.status}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           
                ))}
            </div>

        </div>
  );
};

export default List;
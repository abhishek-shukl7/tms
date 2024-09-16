/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{ useEffect, useState } from 'react';

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

interface ContentGroupProps {
    activeIndex: number;
    projects : object;
    selectedItem : string ;
}
  

const Grid: React.FC<ContentGroupProps> = ({ activeIndex ,projects, selectedItem }) => {
    
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
    <div id="grid" className={activeIndex === 0 ? 'item-content animate__animated animate__fadeIn active' : 'item-content animate__animated animate__fadeIn'} data-toggle-extra="tab-content">    
        <div className="row">
            { projects.map((project) => (
                <div className="col-lg-4 col-md-6">
                    <div className="card card-block card-stretch card-height">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <div id="circle-progress-21" className="circle-progress-01 circle-progress circle-progress-primary">
                                   <CircularProgressbar value={project.completion} text={`${project.completion}%`} 
                                                                    styles={buildStyles({ 
                                                                        pathColor: getCompletionColor(project.completion),
                                                                        textColor: getCompletionColor(project.completion),
                                                                        trailColor: getTrailColor(project.completion),
                                                                      })}
                                    />
                                </div>
                                <i className="ri-star-fill m-0 text-warning"></i>
                            </div>
                            <h5 className="mb-1">{project.name}</h5>
                            <p className="mb-3">{project.description}</p>
                            <div className="d-flex align-items-center justify-content-between pt-3 border-top">
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
            ))}
        </div>    
    </div>
  );
};

export default Grid;
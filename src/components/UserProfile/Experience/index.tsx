/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
interface ContentGroupProps {
   activeIndex: number;
}
const Experience: React.FC<ContentGroupProps> = ({ activeIndex }) => {
    
return (
    <div id="profile4" className={activeIndex === 3 ? 'tab-pane fade active show' : 'tab-pane fade'}>
                                 <div className="profile-line m-0 d-flex align-items-center justify-content-between position-relative">
                                    <ul className="list-inline p-0 m-0 w-100">
                                       <li>
                                          <div className="row align-items-top">
                                             <div className="col-md-3">
                                                <h6 className="mb-2">2020 - present</h6>
                                             </div>
                                             <div className="col-md-9">
                                                <div className="media profile-media align-items-top">
                                                   <div className="profile-dots border-primary mt-1"></div>
                                                   <div className="ml-4">
                                                      <h6 className=" mb-1">Software Engineer at Mathica Labs</h6>
                                                      <p className="mb-0 font-size-14">Total : 02 + years of experience</p>
                                                   </div>
                                                </div>   
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="row align-items-top">
                                             <div className="col-md-3">
                                                <h6 className="mb-2">2018 - 2019</h6>
                                             </div>
                                             <div className="col-md-9">
                                                <div className="media profile-media align-items-top">
                                                   <div className="profile-dots border-primary mt-1"></div>
                                                   <div className="ml-4">
                                                      <h6 className=" mb-1">Junior Software Engineer at Zimcore Solutions</h6>
                                                      <p className="mb-0 font-size-14">Total : 1.5 + years of experience</p>
                                                   </div>
                                                </div> 
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="row align-items-top">
                                             <div className="col-md-3">
                                             <h6 className="mb-2">2017 - 2018</h6>
                                             </div>
                                             <div className="col-md-9">
                                                <div className="media profile-media align-items-top">
                                                   <div className="profile-dots border-primary mt-1"></div>
                                                   <div className="ml-4">
                                                      <h6 className=" mb-1">Junior Software Engineer at Skycare Ptv. Ltd</h6>
                                                      <p className="mb-0 font-size-14">Total : 0.5 + years of experience</p>
                                                   </div>
                                                </div> 
                                             </div>
                                          </div>
                                       </li>
                                       <li>
                                          <div className="row align-items-top">
                                             <div className="col-3">
                                                <h6 className="mb-2">06 Months</h6>
                                             </div>
                                             <div className="col-9">
                                                <div className="media profile-media pb-0 align-items-top">
                                                   <div className="profile-dots border-primary mt-1"></div>
                                                   <div className="ml-4">
                                                      <h6 className=" mb-1">Junior Software Engineer at Infosys Solutions</h6>
                                                      <p className="mb-0 font-size-14">Total : Freshers</p>
                                                   </div>
                                                </div>                                    
                                             </div>
                                          </div>
                                       </li>
                                    </ul>
                                 </div>
                              </div>
  );
};

export default Experience;
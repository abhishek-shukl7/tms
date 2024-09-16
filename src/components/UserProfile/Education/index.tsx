/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
interface ContentGroupProps {
   activeIndex: number;
}
const Education: React.FC<ContentGroupProps> = ({ activeIndex }) => {
    
return (
    <div id="profile3" className={activeIndex === 2 ? 'tab-pane fade active show' : 'tab-pane fade'}>
    <div className="profile-line m-0 d-flex align-items-center justify-content-between position-relative">
       <ul className="list-inline p-0 m-0 w-100">
          <li>
             <div className="row align-items-top">
                <div className="col-md-3">
                   <h6 className="mb-2">October, 2018</h6>
                </div>
                <div className="col-md-9">
                   <div className="media profile-media align-items-top">
                      <div className="profile-dots border-primary mt-1"></div>
                      <div className="ml-4">
                         <h6 className=" mb-1">PhD of Science in computer Science</h6>
                         <p className="mb-0 font-size-14">South Kellergrove University</p>
                      </div>
                   </div>   
                </div>
             </div>
          </li>
          <li>
             <div className="row align-items-top">
                <div className="col-md-3">
                   <h6 className="mb-2">June, 2017</h6>
                </div>
                <div className="col-md-9">
                   <div className="media profile-media align-items-top">
                      <div className="profile-dots border-primary mt-1"></div>
                      <div className="ml-4">
                         <h6 className=" mb-1">Master of Science in Computer Science</h6>
                         <p className="mb-0 font-size-14">Milchuer College</p>
                      </div>
                   </div> 
                </div>
             </div>
          </li>
          <li>
             <div className="row align-items-top">
                <div className="col-md-3">
                <h6 className="mb-2">August, 2014</h6>
                </div>
                <div className="col-md-9">
                   <div className="media profile-media align-items-top">
                      <div className="profile-dots border-primary mt-1"></div>
                      <div className="ml-4">
                         <h6 className=" mb-1">Bachelor of Science in Computer Science</h6>
                         <p className="mb-0 font-size-14">Beechtown Universityy</p>
                      </div>
                   </div> 
                </div>
             </div>
          </li>
          <li>
             <div className="row align-items-top">
                <div className="col-md-3">
                   <h6 className="mb-2">June, 2010</h6>
                </div>
                <div className="col-md-9">
                   <div className="media profile-media pb-0 align-items-top">
                      <div className="profile-dots border-primary mt-1"></div>
                      <div className="ml-4">
                         <h6 className=" mb-1">Senior High School</h6>
                         <p className="mb-0 font-size-14">South Kellergrove High</p>
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

export default Education;
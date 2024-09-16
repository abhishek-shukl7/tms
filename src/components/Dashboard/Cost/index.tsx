import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const Cost: React.FC = () => {
    
return (
<div className="col-md-6 col-lg-3">
                        <div className="card card-block card-stretch card-height">
                            <div className="card-body">
                                <div className="top-block d-flex align-items-center justify-content-between">
                                    <h5>Cost</h5>
                                    <span className="badge badge-success">Today</span>
                                </div>
                                <h3>$<span className="counter">33000</span></h3>
                                <div className="d-flex align-items-center justify-content-between mt-1">
                                    <p className="mb-0">Total Revenue</p>
                                    <span className="text-success">85%</span>
                                </div>
                                <div className="iq-progress-bar bg-success-light mt-2">
                                    {/* <span className="bg-success iq-progress progress-1" data-percent="85"> */}
                                        <ProgressBar className="bg-success iq-progress progress-1" completed={80} maxCompleted={100}  bgColor="#50C6B4" borderRadius="50px" customLabel="" height="6px" baseBgColor="#ceefea" isLabelVisible={false} />                                    
                                    {/* </span> */}
                                </div>
                            </div>
                        </div>
                    </div>
  );
};

export default Cost;
import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const Profit: React.FC = () => {
    
return (
<div className="col-md-6 col-lg-3">
                        <div className="card card-block card-stretch card-height">
                            <div className="card-body">
                                <div className="top-block d-flex align-items-center justify-content-between">
                                    <h5>Profit</h5>
                                    <span className="badge badge-info">Weekly</span>
                                </div>
                                <h3>$<span className="counter">2500</span></h3>
                                <div className="d-flex align-items-center justify-content-between mt-1">
                                    <p className="mb-0">Total Revenue</p>
                                    <span className="text-info">55%</span>
                                </div>
                                <div className="iq-progress-bar bg-info-light mt-2">
                                    {/* <span className="bg-info iq-progress progress-1" data-percent="55"></span> */}
                                    <ProgressBar className="bg-info iq-progress progress-1" completed={55} maxCompleted={100}  bgColor="#51BBFE" borderRadius="50px" customLabel="" height="6px" baseBgColor="#ceecff" isLabelVisible={false} />                                    
                                </div>
                            </div>
                        </div>
                    </div>
  );
};

export default Profit;
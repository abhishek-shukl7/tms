import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const Sales: React.FC = () => {
    
return (
<div className="col-md-6 col-lg-3">
                        <div className="card card-block card-stretch card-height">
                            <div className="card-body">
                                <div className="top-block d-flex align-items-center justify-content-between">
                                    <h5>Sales</h5>
                                    <span className="badge badge-warning">Anual</span>
                                </div>
                                <h3>$<span className="counter">25100</span></h3>
                                <div className="d-flex align-items-center justify-content-between mt-1">
                                    <p className="mb-0">Total Revenue</p>
                                    <span className="text-warning">35%</span>
                                </div>
                                <div className="iq-progress-bar bg-warning-light mt-2">
                                    {/* <span className="bg-warning iq-progress progress-1" data-percent="35"></span> */}
                                    <ProgressBar className="bg-warning iq-progress progress-1" completed={35} maxCompleted={100}  bgColor="#cf9700" borderRadius="50px" customLabel="" height="6px" baseBgColor="#fff2cf" isLabelVisible={false} />                                    
                                </div>
                            </div>
                        </div>
                    </div>
  );
};

export default Sales;
import React from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

const Investment: React.FC = () => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card card-block card-stretch card-height">
        <div className="card-body">
          <div className="top-block d-flex align-items-center justify-content-between">
            <h5>Investment</h5>
            <span className="badge badge-primary">Monthly</span>
          </div>
          <h3>
            $<span className="counter">35000</span>
          </h3>
          <div className="d-flex align-items-center justify-content-between mt-1">
            <p className="mb-0">Total Revenue</p>
            <span className="text-primary">65%</span>
          </div>
          <div className="iq-progress-bar bg-primary-light mt-2">
            {/* <span className="bg-primary iq-progress progress-1" data-percent="65"> */}
            <ProgressBar
              className="bg-primary iq-progress progress-1"
              completed={65}
              maxCompleted={100}
              bgColor="#5773FF"
              borderRadius="50px"
              customLabel=""
              height="6px"
              baseBgColor="#d0d8ff"
              isLabelVisible={false}
            />
            {/* </span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investment;

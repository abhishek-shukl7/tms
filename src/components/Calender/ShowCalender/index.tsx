/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const ShowCalender: React.FC = () => {
    
return ( 
    <><div className="card-header d-flex justify-content-between">
        <div className="d-flex align-items-center">
            <h5 className="mr-3">20 Nov, Friday</h5>
            <div className="mt-1">
                <a href="#" id="cal-prev" className="text-dark mr-2 font-size-18"><i className="las la-chevron-circle-left m-0"></i></a>
                <a href="#" id="cal-next" className="text-dark font-size-18"><i className="las la-chevron-circle-right m-0"></i></a>
            </div>
        </div>
        <div className="d-flex align-items-center">
            <select name="cal_type" className="selectpicker calender-select" id="cal-type">
                <option value="day">Day</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
            </select>
            <a href="#" className="btn btn-primary btn-new"><i className="ri-add-line"></i>New</a>
        </div>
    </div>
    <div className="card-body">
            <div id="calendar" style={{ height: "640px" }}></div>
    </div></>
  );
};

export default ShowCalender;
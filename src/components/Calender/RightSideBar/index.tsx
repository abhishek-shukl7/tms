/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const RighSideBar: React.FC = () => {
    
return ( 
    <div className="card-body">
                            <div className="card border-bottom">
                                <div className="card-body text-center inln-date flet-datepickr">
                                    <input type="text" id="inline-date" className="date-input basicFlatpickr d-none" readOnly={true} />
                                </div>
                            </div>
                            <div className="card card-list">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <svg className="svg-icon text-secondary mr-3" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                        <div className="pl-3 border-left">
                                            <h5>Direct Development</h5>
                                            <p className="mb-0">Unveling the design system</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-list">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <svg className="svg-icon text-primary mr-3" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                            <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                                        </svg>
                                        <div className="pl-3 border-left">
                                            <h5>action point assigned</h5>
                                            <p className="mb-0">Unveling the design system</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-list mb-0">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <svg className="svg-icon text-warning mr-3" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>
                                        </svg>
                                        <div className="pl-3 border-left">
                                            <h5>Private Notes</h5>
                                            <p className="mb-0">Unveling the design system</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
  );
};

export default RighSideBar;
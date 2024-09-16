/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
interface ContentGroupProps {
    activeIndex: number;
  }
const EmailSMS: React.FC<ContentGroupProps> = ({ activeIndex }) => {
    return (
    <div className={activeIndex === 2 ? 'tab-pane fade active show' : 'tab-pane fade'} id="emailandsms" role="tabpanel">
                                <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Email and SMS</h4>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group row align-items-center">
                                            <label className="col-md-3" htmlFor="emailnotification">Email Notification:</label>
                                            <div className="col-md-9 custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="emailnotification" checked={true} />
                                            <label className="custom-control-label" htmlFor="emailnotification"></label>
                                            </div>
                                        </div>
                                        <div className="form-group row align-items-center">
                                            <label className="col-md-3" htmlFor="smsnotification">SMS Notification:</label>
                                            <div className="col-md-9 custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input" id="smsnotification" checked={true} />
                                            <label className="custom-control-label" htmlFor="smsnotification"></label>
                                            </div>
                                        </div>
                                        <div className="form-group row align-items-center">
                                            <label className="col-md-3" htmlFor="npass">When To Email</label>
                                            <div className="col-md-9">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="email01" />
                                                <label className="custom-control-label" htmlFor="email01">You have new notifications.</label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="email02" />
                                                <label className="custom-control-label" htmlFor="email02">You're sent a direct message</label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="email03" checked={true} />
                                                <label className="custom-control-label" htmlFor="email03">Someone adds you as a connection</label>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="form-group row align-items-center">
                                            <label className="col-md-3" htmlFor="npass">When To Escalate Emails</label>
                                            <div className="col-md-9">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="email04" />
                                                <label className="custom-control-label" htmlFor="email04"> Upon new order.</label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="email05" />
                                                <label className="custom-control-label" htmlFor="email05"> New membership approval</label>
                                            </div>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="email06" checked={true} />
                                                <label className="custom-control-label" htmlFor="email06"> Member registration</label>
                                            </div>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                        <button type="reset" className="btn iq-bg-danger">Cancel</button>
                                    </form>
                                </div>
                                </div>
                            </div>

    
  );
};

export default EmailSMS;
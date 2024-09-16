/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

interface ContentGroupProps {
    activeIndex: number;
  }
  

const ChangePassword: React.FC<ContentGroupProps> = ({ activeIndex }) => {
    
return (
    <div className={activeIndex === 1 ? 'tab-pane fade active show' : 'tab-pane fade'} id="chang-pwd" role="tabpanel">
                                <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Change Password</h4>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="cpass">Current Password:</label>
                                            <a href="javascripe:void();" className="float-right">Forgot Password</a>
                                            <input type="Password" className="form-control" id="cpass" value="" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="npass">New Password:</label>
                                            <input type="Password" className="form-control" id="npass" value="" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="vpass">Verify Password:</label>
                                            <input type="Password" className="form-control" id="vpass" value="" />
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2">Submit</button>
                                        <button type="reset" className="btn iq-bg-danger">Cancel</button>
                                    </form>
                                </div>
                                </div>
                            </div>
  );
};

export default ChangePassword;
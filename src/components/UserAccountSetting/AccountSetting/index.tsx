/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const AccountSetting: React.FC = () => {
    
return (
    <div className="acc-edit">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="uname">User Name:</label>
                                        <input type="text" className="form-control" id="uname" value="Barry@01"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Id:</label>
                                        <input type="email" className="form-control" id="email" value="Barryjohn@gmail.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="altemail">Alternate Email:</label>
                                        <input type="email" className="form-control" id="altemail" value="designtheme@gmail.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label className="d-block">Language Known:</label>
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" className="custom-control-input" id="english" checked={true}/>
                                            <label className="custom-control-label" htmlFor="english">English</label>
                                        </div>
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" className="custom-control-input" id="french" checked={true}/>
                                            <label className="custom-control-label" htmlFor="french">French</label>
                                        </div>
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" className="custom-control-input" id="hindi"/>
                                            <label className="custom-control-label" htmlFor="hindi">Hindi</label>
                                        </div>
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" className="custom-control-input" id="spanish" checked={true}/>
                                            <label className="custom-control-label" htmlFor="spanish">Spanish</label>
                                        </div>
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" className="custom-control-input" id="arabic"/>
                                            <label className="custom-control-label" htmlFor="arabic">Arabic</label>
                                        </div>
                                        <div className="custom-control custom-checkbox custom-control-inline">
                                            <input type="checkbox" className="custom-control-input" id="italian"/>
                                            <label className="custom-control-label" htmlFor="italian">Italian</label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    <button type="reset" className="btn iq-bg-danger">Cancel</button>
                                </form>
                            </div>
  );
};

export default AccountSetting;
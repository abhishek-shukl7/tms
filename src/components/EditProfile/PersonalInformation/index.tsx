/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import user11 from '../../../assets/images/user/11.jpg';
interface ContentGroupProps {
    activeIndex: number;
  }
  
const PersonalInformation: React.FC<ContentGroupProps> = ({ activeIndex }) => {

return (
    <div className={activeIndex === 0 ? 'tab-pane fade active show' : 'tab-pane fade'} id="personal-information" role="tabpanel">
                                <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Personal Information</h4>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group row align-items-center">
                                            <div className="col-md-12">
                                            <div className="profile-img-edit">
                                                <div className="crm-profile-img-edit">
                                                    <img className="crm-profile-pic rounded-circle avatar-100" src={user11} alt="profile-pic" />
                                                    <div className="crm-p-image bg-primary">
                                                        <i className="las la-pen upload-button"></i>
                                                        <input className="file-upload" type="file" accept="image/*" />
                                                    </div>
                                                </div>                                          
                                            </div>
                                            </div>
                                        </div>
                                        <div className=" row align-items-center">
                                            <div className="form-group col-sm-6">
                                            <label htmlFor="fname">First Name:</label>
                                            <input type="text" className="form-control" id="fname" value="Barry" />
                                            </div>
                                            <div className="form-group col-sm-6">
                                            <label htmlFor="lname">Last Name:</label>
                                            <input type="text" className="form-control" id="lname" value="Tech" />
                                            </div>
                                            <div className="form-group col-sm-6">
                                            <label htmlFor="uname">User Name:</label>
                                            <input type="text" className="form-control" id="uname" value="Barry@01" />
                                            </div>
                                            <div className="form-group col-sm-6">
                                            <label htmlFor="cname">City:</label>
                                            <input type="text" className="form-control" id="cname" value="Atlanta" />
                                            </div>
                                            <div className="form-group col-sm-6">
                                            <label className="d-block">Gender:</label>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" id="customRadio6" name="customRadio1" className="custom-control-input" checked={true} />
                                                <label className="custom-control-label" htmlFor="customRadio6"> Male </label>
                                            </div>
                                            <div className="custom-control custom-radio custom-control-inline">
                                                <input type="radio" id="customRadio7" name="customRadio1" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="customRadio7"> Female </label>
                                            </div>
                                            </div>
                                            <div className="form-group col-sm-6">
                                            <label htmlFor="dob">Date Of Birth:</label>
                                            <input  className="form-control" id="dob" value="1984-01-24" />
                                            </div>
                                            <div className="form-group col-sm-6">
                                            <label>Marital Status:</label>
                                            <select className="form-control" id="exampleFormControlSelect1">
                                                <option selected={true}>Single</option>
                                                <option>Married</option>
                                                <option>Widowed</option>
                                                <option>Divorced</option>
                                                <option>Separated </option>
                                            </select>
                                            </div>
                                            <div className="form-group col-sm-6">
                                            <label>Age:</label>
                                            <select className="form-control" id="exampleFormControlSelect2">
                                                <option>12-18</option>
                                                <option>19-32</option>
                                                <option selected={true}>33-45</option>
                                                <option>46-62</option>
                                                <option>63 </option>
                                            </select>
                                            </div>
                                            <div className="form-group col-sm-6">
                                            <label>Country:</label>
                                            <select className="form-control" id="exampleFormControlSelect3">
                                                <option>Caneda</option>
                                                <option>Noida</option>
                                                <option selected={true}>USA</option>
                                                <option>India</option>
                                                <option>Africa</option>
                                            </select>
                                            </div>
                                            <div className="form-group col-sm-6">
                                            <label>State:</label>
                                            <select className="form-control" id="exampleFormControlSelect4">
                                                <option>California</option>
                                                <option>Florida</option>
                                                <option selected={true}>Georgia</option>
                                                <option>Connecticut</option>
                                                <option>Louisiana</option>
                                            </select>
                                            </div>
                                            <div className="form-group col-sm-12">
                                            <label>Address:</label>
                                            <textarea className="form-control" name="address" rows={5} style={{lineHeight: "22px"}}>
                                            37 Cardinal Lane
                                            Petersburg, VA 23803
                                            United States of America
                                            Zip Code: 85001
                                            </textarea>
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

export default PersonalInformation;
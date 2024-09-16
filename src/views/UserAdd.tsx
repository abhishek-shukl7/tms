import React from 'react';
import user11 from '../assets/images/user/11.jpg';

const UserAdd: React.FC = () => {
return (
    <div>
        <div className="wrapper">   
        <div className="content-page">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-3 col-lg-4">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                            <h4 className="card-title">Add New User</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                            <div className="form-group">
                                <div className="crm-profile-img-edit position-relative">
                                    <img className="crm-profile-pic rounded avatar-100" src={user11} alt="profile-pic" />
                                    <div className="crm-p-image bg-primary">
                                        <i className="las la-pen upload-button"></i>
                                        <input className="file-upload" type="file" accept="image/*" />
                                    </div>
                                </div>
                            <div className="img-extension mt-3">
                                <div className="d-inline-block align-items-center">
                                        <span>Only</span>
                                    <a href="javascript:void();">.jpg</a>
                                    <a href="javascript:void();">.png</a>
                                    <a href="javascript:void();">.jpeg</a>
                                    <span>allowed</span>
                                </div>
                            </div>
                            </div>
                            <div className="form-group">
                                <label>User Role:</label>
                                <select name="type" className="selectpicker form-control" data-style="py-0">
                                    <option>Select</option>
                                    <option>Web Designer</option>
                                    <option>Web Developer</option>
                                    <option>Tester</option>
                                    <option>Php Developer</option>
                                    <option>Ios Developer </option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="furl">Facebook Url:</label>
                                <input type="text" className="form-control" id="furl" placeholder="Facebook Url"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="turl">Twitter Url:</label>
                                <input type="text" className="form-control" id="turl" placeholder="Twitter Url"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="instaurl">Instagram Url:</label>
                                <input type="text" className="form-control" id="instaurl" placeholder="Instagram Url"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="lurl">Linkedin Url:</label>
                                <input type="text" className="form-control" id="lurl" placeholder="Linkedin Url"/>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-8">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between">
                            <div className="header-title">
                            <h4 className="card-title">New User Information</h4>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="new-user-info">
                            <form>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="fname">First Name:</label>
                                        <input type="text" className="form-control" id="fname" placeholder="First Name"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="lname">Last Name:</label>
                                        <input type="text" className="form-control" id="lname" placeholder="Last Name"/>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="add1">Street Address 1:</label>
                                        <input type="text" className="form-control" id="add1" placeholder="Street Address 1" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="add2">Street Address 2:</label>
                                        <input type="text" className="form-control" id="add2" placeholder="Street Address 2" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="cname">Company Name:</label>
                                        <input type="text" className="form-control" id="cname" placeholder="Company Name" />
                                    </div>
                                    <div className="form-group col-sm-12">
                                        <label>Country:</label>
                                        <select name="type" className="selectpicker form-control" data-style="py-0">
                                        <option>Select Country</option>
                                        <option>Caneda</option>
                                        <option>Noida</option>
                                        <option >USA</option>
                                        <option>India</option>
                                        <option>Africa</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="mobno">Mobile Number:</label>
                                        <input type="text" className="form-control" id="mobno" placeholder="Mobile Number" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="altconno">Alternate Contact:</label>
                                        <input type="text" className="form-control" id="altconno" placeholder="Alternate Contact" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" className="form-control" id="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="pno">Pin Code:</label>
                                        <input type="text" className="form-control" id="pno" placeholder="Pin Code" />
                                    </div>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="city">Town/City:</label>
                                        <input type="text" className="form-control" id="city" placeholder="Town/City" />
                                    </div>
                                </div>
                                <hr></hr>
                                <h5 className="mb-3">Security</h5>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="uname">User Name:</label>
                                        <input type="text" className="form-control" id="uname" placeholder="User Name" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="pass">Password:</label>
                                        <input type="password" className="form-control" id="pass" placeholder="Password" />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="rpass">Repeat Password:</label>
                                        <input type="password" className="form-control" id="rpass" placeholder="Repeat Password " />
                                    </div>
                                </div>
                                <div className="checkbox">
                                    <label><input className="mr-2" type="checkbox"/>Enable Two-Factor-Authentication</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Add New User</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        <div className="modal fade" role="dialog" aria-modal="true" id="new-project-modal">
            <div className="modal-dialog  modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header d-block text-center pb-3 border-bttom">
                        <h3 className="modal-title" id="exampleModalCenterTitle01">New Project</h3>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText01" className="h5">Project Name*</label>
                                    <input type="text" className="form-control" id="exampleInputText01" placeholder="Project Name"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText2" className="h5">Categories *</label>
                                    <select name="type" className="selectpicker form-control" data-style="py-0">
                                        <option>Category</option>
                                        <option>Android</option>
                                        <option>IOS</option>
                                        <option>Ui/Ux Design</option>
                                        <option>Development</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText004" className="h5">Due Dates*</label>
                                    <input type="date" className="form-control" id="exampleInputText004" value="" />
                                </div>                        
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText07" className="h5">Assign Members*</label>
                                    <input type="text" className="form-control" id="exampleInputText07" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="d-flex flex-wrap align-items-ceter justify-content-center mt-2">
                                    <div className="btn btn-primary mr-3" data-dismiss="modal">Save</div>
                                    <div className="btn btn-primary" data-dismiss="modal">Cancel</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        <div className="modal fade bd-example-modal-lg" role="dialog" aria-modal="true" id="new-task-modal">
            <div className="modal-dialog  modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header d-block text-center pb-3 border-bttom">
                        <h3 className="modal-title" id="exampleModalCenterTitle">New Task</h3>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText02" className="h5">Task Name</label>
                                    <input type="text" className="form-control" id="exampleInputText02" placeholder="Enter task Name" />
                                    <a href="#" className="task-edit text-body"><i className="ri-edit-box-line"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText2" className="h5">Assigned to</label>
                                    <select name="type" className="selectpicker form-control" data-style="py-0">
                                        <option>Memebers</option>
                                        <option>Kianna Septimus</option>
                                        <option>Jaxson Herwitz</option>
                                        <option>Ryan Schleifer</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText05" className="h5">Due Dates*</label>
                                    <input type="date" className="form-control" id="exampleInputText05" value="" />
                                </div>                        
                            </div>
                            <div className="col-lg-4">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText2" className="h5">Category</label>
                                    <select name="type" className="selectpicker form-control" data-style="py-0">
                                        <option>Design</option>
                                        <option>Android</option>
                                        <option>IOS</option>
                                        <option>Ui/Ux Design</option>
                                        <option>Development</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText040" className="h5">Description</label>
                                    <textarea className="form-control" id="exampleInputText040" rows={2}></textarea>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText005" className="h5">Checklist</label>
                                    <input type="text" className="form-control" id="exampleInputText005" placeholder="Add List" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group mb-0">
                                    <label htmlFor="exampleInputText01" className="h5">Attachments</label>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile003" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile003">Upload media</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="d-flex flex-wrap align-items-ceter justify-content-center mt-4">
                                    <div className="btn btn-primary mr-3" data-dismiss="modal">Save</div>
                                    <div className="btn btn-primary" data-dismiss="modal">Cancel</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        <div className="modal fade bd-example-modal-lg" role="dialog" aria-modal="true" id="new-user-modal">
            <div className="modal-dialog  modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header d-block text-center pb-3 border-bttom">
                        <h3 className="modal-title" id="exampleModalCenterTitle02">New User</h3>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group mb-3 custom-file-small">
                                    <label htmlFor="exampleInputText01" className="h5">Upload Profile Picture</label>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile02" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile02">Choose file</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText2" className="h5">Full Name</label>
                                    <input type="text" className="form-control" id="exampleInputText2" placeholder="Enter your full name" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText04" className="h5">Phone Number</label>
                                    <input type="text" className="form-control" id="exampleInputText04" placeholder="Enter phone number" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText006" className="h5">Email</label>
                                    <input type="text" className="form-control" id="exampleInputText006" placeholder="Enter your Email" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText2" className="h5">Type</label>
                                    <select name="type" className="selectpicker form-control" data-style="py-0">
                                        <option>Type</option>
                                        <option>Trainee</option>
                                        <option>Employee</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText2" className="h5">Role</label>
                                    <select name="type" className="selectpicker form-control" data-style="py-0">
                                        <option>Role</option>
                                        <option>Designer</option>
                                        <option>Developer</option>
                                        <option>Manager</option>
                                        <option>BDE</option>
                                        <option>SEO</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="d-flex flex-wrap align-items-ceter justify-content-center mt-2">
                                    <div className="btn btn-primary mr-3" data-dismiss="modal">Save</div>
                                    <div className="btn btn-primary" data-dismiss="modal">Cancel</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        <div className="modal fade bd-example-modal-lg" role="dialog" aria-modal="true" id="new-create-modal">
            <div className="modal-dialog  modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header d-block text-center pb-3 border-bttom">
                        <h3 className="modal-title" id="exampleModalCenterTitle03">New Task</h3>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText03" className="h5">Task Name</label>
                                    <input type="text" className="form-control" id="exampleInputText03" placeholder="Enter task Name" />
                                    <a href="#" className="task-edit text-body"><i className="ri-edit-box-line"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText2" className="h5">Assigned to</label>
                                    <select name="type" className="selectpicker form-control" data-style="py-0">
                                        <option>Memebers</option>
                                        <option>Kianna Septimus</option>
                                        <option>Jaxson Herwitz</option>
                                        <option>Ryan Schleifer</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText2" className="h5">Project Name</label>
                                    <select name="type" className="selectpicker form-control" data-style="py-0">
                                        <option>Enter your project Name</option>
                                        <option>Ui/Ux Design</option>
                                        <option>Dashboard Templates</option>
                                        <option>Wordpress Themes</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText40" className="h5">Description</label>
                                    <textarea className="form-control" id="exampleInputText40" rows={2} placeholder="Textarea"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group mb-3">
                                    <label htmlFor="exampleInputText8" className="h5">Checklist</label>
                                    <input type="text" className="form-control" id="exampleInputText8" placeholder="Add List" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group mb-0">
                                    <label htmlFor="exampleInputText01" className="h5">Attachments</label>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile01" />
                                        <label className="custom-file-label" htmlFor="inputGroupFile01">Upload media</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="d-flex flex-wrap align-items-ceter justify-content-center mt-4">
                                    <div className="btn btn-primary mr-3" data-dismiss="modal">Save</div>
                                    <div className="btn btn-primary" data-dismiss="modal">Cancel</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default UserAdd;
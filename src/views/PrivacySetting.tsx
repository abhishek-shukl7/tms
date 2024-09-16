
const PrivacySetting: React.FC = () => {
    return (
        <div>
            <div className="wrapper">
            <div className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Privacy Setting</h4>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="acc-privacy">
                                        <div className="data-privacy">
                                            <h4 className="mb-2">Account Privacy</h4>
                                            <div className="custom-control custom-checkbox custom-control-inline">
                                                <input type="checkbox" className="custom-control-input" id="acc-private" />
                                                <label className="custom-control-label privacy-status mb-2" htmlFor="acc-private">Private
                                                    Account</label>
                                            </div>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                                has been the industry's standard dummy text ever since the 1500s, when an unknown
                                                printer took a galley of type and scrambled it to make a type specimen book</p>
                                        </div>
                                        <hr></hr>
                                        <div className="data-privacy">
                                            <h4 className="mb-2">Activity Status</h4>
                                            <div className="custom-control custom-checkbox custom-control-inline">
                                                <input type="checkbox" className="custom-control-input" id="activety" checked={true} />
                                                <label className="custom-control-label privacy-status mb-2" htmlFor="activety">Show Activity
                                                    Status</label>
                                            </div>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of
                                                a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                                more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                                here', making it look like readable English.</p>
                                        </div>
                                        <hr></hr>
                                        <div className="data-privacy">
                                            <h4 className="mb-2"> Story Sharing </h4>
                                            <div className="custom-control custom-checkbox custom-control-inline">
                                                <input type="checkbox" className="custom-control-input" id="story" checked={true} />
                                                <label className="custom-control-label privacy-status mb-2" htmlFor="story">Allow
                                                    Sharing</label>
                                            </div>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of
                                                a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                                more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                                here', making it look like readable English.</p>
                                        </div>
                                        <hr></hr>
                                        <div className="data-privacy">
                                            <h4 className="mb-2"> Photo Of You </h4>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="automatically" name="customRadio0" className="custom-control-input"
                                                    checked={true} />
                                                <label className="custom-control-label" htmlFor="automatically"> Add Automatically</label>
                                            </div>
                                            <div className="custom-control custom-radio mb-2">
                                                <input type="radio" id="manualy" name="customRadio0" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="manualy"> Add Manualy</label>
                                            </div>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of
                                                a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                                more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                                here', making it look like readable English.</p>
                                        </div>
                                        <hr></hr>
                                        <div className="data-privacy">
                                            <h4 className="mb-2"> Your Profile </h4>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="public" name="customRadio1" className="custom-control-input"
                                                    checked={true} />
                                                <label className="custom-control-label" htmlFor="public"> Public </label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="friend" name="customRadio1" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="friend"> Friend </label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="spfriend" name="customRadio1" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="spfriend"> Specific Friend </label>
                                            </div>
                                            <div className="custom-control custom-radio mb-2">
                                                <input type="radio" id="onlyme" name="customRadio1" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="onlyme"> Only Me </label>
                                            </div>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of
                                                a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                                more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                                here', making it look like readable English.</p>
                                        </div>
                                        <hr></hr>
                                        <div className="data-privacy">
                                            <h4 className="mb-2"> Login Notification </h4>
                                            <div className="custom-control custom-radio">
                                                <input type="radio" id="enable" name="customRadio2" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="enable"> Enable </label>
                                            </div>
                                            <div className="custom-control custom-radio mb-2">
                                                <input type="radio" id="disable" name="customRadio2" className="custom-control-input"
                                                    checked={true} />
                                                <label className="custom-control-label" htmlFor="disable"> Disable </label>
                                            </div>
                                            <p>It is a long established fact that a reader will be distracted by the readable content of
                                                a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                                more-or-less normal distribution of letters, as opposed to using 'Content here, content
                                                here', making it look like readable English.</p>
                                        </div>
                                        <hr></hr>
                                        <div className="data-privacy">
                                            <h4 className="mb-2">Privacy Help</h4>
                                            <a href="#"><i className="ri-customer-service-2-line mr-2"></i>Support</a>
                                        </div>
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
                                        <input type="text" className="form-control" id="exampleInputText01" placeholder="Project Name" />
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

export default PrivacySetting;
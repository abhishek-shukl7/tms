
import React from 'react';
import user01 from '../assets/images/user/01.jpg';
import user02 from '../assets/images/user/02.jpg';
import user03 from '../assets/images/user/03.jpg';
import user04 from '../assets/images/user/04.jpg';
import user05 from '../assets/images/user/05.jpg';
import user06 from '../assets/images/user/06.jpg';
import user07 from '../assets/images/user/07.jpg';
import user08 from '../assets/images/user/08.jpg';
import user09 from '../assets/images/user/09.jpg';
const UsersList: React.FC = () => {
    return (
    <div>
        <div className="wrapper">    
        <div className="content-page">
            <div className="container-fluid">
            <div className="row">
            <div className="col-sm-12">
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                <div className="header-title">
                    <h4 className="card-title">User List</h4>
                </div>
                </div>
                <div className="card-body">
                <div className="table-responsive">
                    <div className="row justify-content-between">
                        <div className="col-sm-6 col-md-6">
                            <div id="user_list_datatable_info" className="dataTables_filter">
                            <form className="mr-3 position-relative">
                                <div className="form-group mb-0">
                                    <input type="search" className="form-control" id="exampleInputSearch" placeholder="Search"
                                        aria-controls="user-list-table" />
                                </div>
                            </form>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6">
                            <div className="user-list-files d-flex">
                            <a className="bg-primary" href="javascript:void();">
                                Print
                            </a>
                            <a className="bg-primary" href="javascript:void();">
                                Excel
                            </a>
                            <a className="bg-primary" href="javascript:void();">
                                Pdf
                            </a>
                            </div>
                        </div>
                    </div>
                    <table id="user-list-table" className="table table-striped dataTable mt-4" role="grid"
                        aria-describedby="user-list-page-info">
                        <thead>
                            <tr className="ligth">
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Country</th>
                            <th>Status</th>
                            <th>Company</th>
                            <th>Join Date</th>
                            <th style={{ minWidth:"100px"}}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="text-center"><img className="rounded img-fluid avatar-40"
                                    src={user01} alt="profile" /></td>
                            <td>Anna Sthesia</td>
                            <td>(760) 756 7568</td>
                            <td>annasthesia@gmail.com</td>
                            <td>USA</td>
                            <td><span className="badge bg-primary">Active</span></td>
                            <td>Acme Corporation</td>
                            <td>2019/12/01</td>
                            <td>
                                <div className="flex align-items-center list-user-action">
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Add" href="#"><i className="ri-user-add-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td className="text-center"><img className="rounded img-fluid avatar-40"
                                    src={user02} alt="profile"/></td>
                            <td>Brock Lee</td>
                            <td>+62 5689 458 658</td>
                            <td>brocklee@gmail.com</td>
                            <td>Indonesia</td>
                            <td><span className="badge bg-primary">Active</span></td>
                            <td>Soylent Corp</td>
                            <td>2019/12/01</td>
                            <td>
                                <div className="flex align-items-center list-user-action">
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Add" href="#"><i className="ri-user-add-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td className="text-center"><img className="rounded img-fluid avatar-40"
                                    src={user03} alt="profile"/></td>
                            <td>Dan Druff</td>
                            <td>+55 6523 456 856</td>
                            <td>dandruff@gmail.com</td>
                            <td>Brazil</td>
                            <td><span className="badge bg-warning-light">Pending</span></td>
                            <td>Umbrella Corporation</td>
                            <td>2019/12/01</td>
                            <td>
                                <div className="flex align-items-center list-user-action">
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Add" href="#"><i className="ri-user-add-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td className="text-center"><img className="rounded img-fluid avatar-40"
                                    src={user04} alt="profile"/></td>
                            <td>Hans Olo</td>
                            <td>+91 2586 253 125</td>
                            <td>hansolo@gmail.com</td>
                            <td>India</td>
                            <td><span className="badge bg-danger-light">Inactive</span></td>
                            <td>Vehement Capital</td>
                            <td>2019/12/01</td>
                            <td>
                                <div className="flex align-items-center list-user-action">
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Add" href="#"><i className="ri-user-add-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td className="text-center"><img className="rounded img-fluid avatar-40"
                                    src={user05} alt="profile"/></td>
                            <td>Lynn Guini</td>
                            <td>+27 2563 456 589</td>
                            <td>lynnguini@gmail.com</td>
                            <td>Africa</td>
                            <td><span className="badge bg-primary">Active</span></td>
                            <td>Massive Dynamic</td>
                            <td>2019/12/01</td>
                            <td>
                                <div className="flex align-items-center list-user-action">
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Add" href="#"><i className="ri-user-add-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td className="text-center"><img className="rounded img-fluid avatar-40"
                                    src={user06} alt="profile"/></td>
                            <td>Eric Shun</td>
                            <td>+55 25685 256 589</td>
                            <td>ericshun@gmail.com</td>
                            <td>Brazil</td>
                            <td><span className="badge bg-warning-light">Pending</span></td>
                            <td>Globex Corporation</td>
                            <td>2019/12/01</td>
                            <td>
                                <div className="flex align-items-center list-user-action">
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Add" href="#"><i className="ri-user-add-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td className="text-center"><img className="rounded img-fluid avatar-40"
                                    src={user07} alt="profile"/></td>
                            <td>aaronottix</td>
                            <td>(760) 765 2658</td>
                            <td>budwiser@ymail.com</td>
                            <td>USA</td>
                            <td><span className="badge bg-info-light">Hold</span></td>
                            <td>Acme Corporation</td>
                            <td>2019/12/01</td>
                            <td>
                                <div className="flex align-items-center list-user-action">
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Add" href="#"><i className="ri-user-add-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td className="text-center"><img className="rounded img-fluid avatar-40"
                                    src={user08} alt="profile"/></td>
                            <td>Marge Arita</td>
                            <td>+27 5625 456 589</td>
                            <td>margearita@gmail.com</td>
                            <td>Africa</td>
                            <td><span className="badge bg-success-light">Complite</span></td>
                            <td>Vehement Capital</td>
                            <td>2019/12/01</td>
                            <td>
                                <div className="flex align-items-center list-user-action">
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Add" href="#"><i className="ri-user-add-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                            </tr>
                            <tr>
                            <td className="text-center"><img className="rounded img-fluid avatar-40"
                                    src={user09} alt="profile"/></td>
                            <td>Bill Dabear</td>
                            <td>+55 2563 456 589</td>
                            <td>billdabear@gmail.com</td>
                            <td>Brazil</td>
                            <td><span className="badge bg-primary">active</span></td>
                            <td>Massive Dynamic</td>
                            <td>2019/12/01</td>
                            <td>
                                <div className="flex align-items-center list-user-action">
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Add" href="#"><i className="ri-user-add-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Edit" href="#"><i className="ri-pencil-line mr-0"></i></a>
                                    <a className="btn btn-sm bg-primary" data-toggle="tooltip" data-placement="top" title=""
                                        data-original-title="Delete" href="#"><i className="ri-delete-bin-line mr-0"></i></a>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                <div className="row justify-content-between mt-3">
                    <div id="user-list-page-info" className="col-md-6">
                        <span>Showing 1 to 5 of 5 entries</span>
                    </div>
                    <div className="col-md-6">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-end mb-0">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" aria-disabled="true" tabIndex={-1}>Previous</a>
                            </li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                            </ul>
                        </nav>
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
    </div>

    );
};

export default UsersList;
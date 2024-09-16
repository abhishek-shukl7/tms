/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const NewCreateModal: React.FC = () => {
    
return (
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
                                    <input type="text" className="form-control" id="exampleInputText03" placeholder="Enter task Name"/>
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
                                    <input type="text" className="form-control" id="exampleInputText8" placeholder="Add List"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group mb-0">
                                    <label htmlFor="exampleInputText01" className="h5">Attachments</label>
                                    <div className="custom-file">
                                        <input type="file" className="custom-file-input" id="inputGroupFile01"/>
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
  );
};

export default NewCreateModal;
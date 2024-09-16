/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Header from '../components/Tasks/Header';

import NewProjectModal from '../components/Common/NewProjectModal/index.tsx';
import NewTaskModal from '../components/Common/NewTaskModal';
import NewUserModal from '../components/Common/NewUserModal';
import NewCreateModal from '../components/Common/NewCreateModal';

import TaskDetails from '../components/Tasks/TaskDetails/index.tsx';

const Tasks: React.FC = () => {
    return (
    <div>
        <div className="wrapper">     
        <div className="content-page">
            <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <Header />
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <TaskDetails />    
                                </div>
                                
                                <div className="col-lg-12">
                                    <div className="card card-widget task-card">
                                        <div className="card-body">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="custom-control custom-task custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck2" />
                                                        <label className="custom-control-label" htmlFor="customCheck2"></label>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-2">Create unique style of inner pages</h5>
                                                        <div className="media align-items-center">
                                                            <div className="btn bg-body mr-3"><i className="ri-align-justify mr-2"></i>5/10</div>
                                                            <div className="btn bg-body"><i className="ri-survey-line mr-2"></i>3</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media align-items-center mt-md-0 mt-3">
                                                    <a href="#" className="btn bg-success-light mr-3">Design</a>
                                                    <a className="btn bg-success-light" data-toggle="collapse" href="#collapseEdit2" role="button" aria-expanded="false" aria-controls="collapseEdit2"><i className="ri-edit-box-line m-0"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                                                                                       
                                    <div className="collapse" id="collapseEdit2">                                            
                                        <div className="card card-list task-card">
                                            <div className="card-header d-flex align-items-center justify-content-between px-0 mx-3">
                                                <div className="header-title">
                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck006" />
                                                        <label className="custom-control-label h5" htmlFor="customCheck006">Mark as done</label>
                                                    </div>
                                                </div>
                                                <div><a href="#" className="btn bg-secondary-light">Design</a></div>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group mb-3 position-relative">
                                                    <input type="text" className="form-control bg-white" placeholder="Design landing page of webkit" />
                                                    <a href="#" className="task-edit task-simple-edit text-body"><i className="ri-edit-box-line"></i></a>
                                                </div>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group mb-0">
                                                                    <label htmlFor="exampleInputText2" className="h5">Memebers</label>
                                                                    <select name="type" className="selectpicker form-control" data-style="py-0">
                                                                        <option>Memebers</option>
                                                                        <option>Kianna Septimus</option>
                                                                        <option>Jaxson Herwitz</option>
                                                                        <option>Ryan Schleifer</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group mb-0">
                                                                    <label htmlFor="exampleInputText4" className="h5">Due Dates*</label>
                                                                    <input type="date" className="form-control" id="exampleInputText4" value="" />
                                                                </div>                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-lg-6">                                                        
                                                                <h5 className="mb-2">Description</h5>
                                                                <p className="mb-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                                            </div>
                                                            <div className="col-lg-6">                                      
                                                                <h5 className="mb-2">Checklist</h5>
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck4" />
                                                                            <label className="custom-control-label mb-1" htmlFor="customCheck4">Design mobile version</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck07" />
                                                                            <label className="custom-control-label mb-1" htmlFor="customCheck07">Use images of unsplash.com</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck6"/>
                                                                            <label className="custom-control-label" htmlFor="customCheck6">Vector images of small size.</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck7" />
                                                                            <label className="custom-control-label mb-1" htmlFor="customCheck7">Design mobile version of landing page</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck8" />
                                                                            <label className="custom-control-label mb-1" htmlFor="customCheck8">Use images of unsplash.com</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck9" />
                                                                            <label className="custom-control-label" htmlFor="customCheck9">Vector images of small size..</label>
                                                                        </div>
                                                                    </div>
                                                                </div>                       
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-0">
                                                    <label htmlFor="exampleInputText01" className="h5">Attachments</label>
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="inputGroupFile002" />
                                                        <label className="custom-file-label" htmlFor="inputGroupFile002">Upload media</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className="col-lg-12">
                                    <div className="card card-widget task-card">
                                        <div className="card-body">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="custom-control custom-task custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck10" />
                                                        <label className="custom-control-label" htmlFor="customCheck10"></label>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-2">Activate from WordPress Dashboard</h5>
                                                        <div className="media align-items-center">
                                                            <div className="btn bg-body mr-3"><i className="ri-align-justify mr-2"></i>5/10</div>
                                                            <div className="btn bg-body"><i className="ri-survey-line mr-2"></i>3</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media align-items-center mt-md-0 mt-3">
                                                    <a href="#" className="btn bg-primary-light mr-3">Design</a>
                                                    <a className="btn bg-primary-light" data-toggle="collapse" href="#collapseEdit3" role="button" aria-expanded="false" aria-controls="collapseEdit3"><i className="ri-edit-box-line m-0"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                                                                                       
                                    <div className="collapse" id="collapseEdit3">                                            
                                        <div className="card card-list task-card">
                                            <div className="card-header d-flex align-items-center justify-content-between px-0 mx-3">
                                                <div className="header-title">
                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck11" />
                                                        <label className="custom-control-label h5" htmlFor="customCheck11">Mark as done</label>
                                                    </div>
                                                </div>
                                                <div><a href="#" className="btn bg-secondary-light">Design</a></div>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group mb-3 position-relative">
                                                    <input type="text" className="form-control bg-white" placeholder="Design landing page of webkit" />
                                                    <a href="#" className="task-edit task-simple-edit text-body"><i className="ri-edit-box-line"></i></a>
                                                </div>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group mb-0">
                                                                    <label htmlFor="exampleInputText2" className="h5">Memebers</label>
                                                                    <select name="type" className="selectpicker form-control" data-style="py-0">
                                                                        <option>Memebers</option>
                                                                        <option>Kianna Septimus</option>
                                                                        <option>Jaxson Herwitz</option>
                                                                        <option>Ryan Schleifer</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group mb-0">
                                                                    <label htmlFor="exampleInputText5" className="h5">Due Dates*</label>
                                                                    <input type="date" className="form-control" id="exampleInputText5" value="" />
                                                                </div>                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-lg-6">                                                        
                                                                <h5 className="mb-2">Description</h5>
                                                                <p className="mb-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                                            </div>
                                                            <div className="col-lg-6">                                      
                                                                <h5 className="mb-2">Checklist</h5>
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck12" />
                                                                            <label className="custom-control-label mb-1" htmlFor="customCheck12">Design mobile version</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck13" />
                                                                            <label className="custom-control-label mb-1" htmlFor="customCheck13">Use images of unsplash.com</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck14" />
                                                                            <label className="custom-control-label" htmlFor="customCheck14">Vector images of small size.</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck15" />
                                                                            <label className="custom-control-label mb-1" htmlFor="customCheck15">Design mobile version of landing page</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck16" />
                                                                            <label className="custom-control-label mb-1" htmlFor="customCheck16">Use images of unsplash.com</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck17" />
                                                                            <label className="custom-control-label" htmlFor="customCheck17">Vector images of small size..</label>
                                                                        </div>
                                                                    </div>
                                                                </div>                       
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-0">
                                                    <label htmlFor="exampleInputText01" className="h5">Attachments</label>
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="inputGroupFile03" />
                                                        <label className="custom-file-label" htmlFor="inputGroupFile03">Upload media</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className="col-lg-12">
                                    <div className="card card-widget task-card">
                                        <div className="card-body">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="custom-control custom-task custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck18" />
                                                        <label className="custom-control-label" htmlFor="customCheck18"></label>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-2">Add code to output Post Title & Text</h5>
                                                        <div className="media align-items-center">
                                                            <div className="btn bg-body mr-3"><i className="ri-align-justify mr-2"></i>5/10</div>
                                                            <div className="btn bg-body"><i className="ri-survey-line mr-2"></i>3</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media align-items-center mt-md-0 mt-3">
                                                    <a href="#" className="btn bg-info-light mr-3">Design</a>
                                                    <a className="btn bg-info-light" data-toggle="collapse" href="#collapseEdit4" role="button" aria-expanded="false" aria-controls="collapseEdit4"><i className="ri-edit-box-line m-0"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                                                                                       
                                    <div className="collapse" id="collapseEdit4">                                            
                                        <div className="card card-list task-card">
                                            <div className="card-header d-flex align-items-center justify-content-between px-0 mx-3">
                                                <div className="header-title">
                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck19" />
                                                        <label className="custom-control-label h5" htmlFor="customCheck19">Mark as done</label>
                                                    </div>
                                                </div>
                                                <div><a href="#" className="btn bg-secondary-light">Design</a></div>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group mb-3 position-relative">
                                                    <input type="text" className="form-control bg-white" placeholder="Design landing page of webkit" />
                                                    <a href="#" className="task-edit task-simple-edit text-body"><i className="ri-edit-box-line"></i></a>
                                                </div>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group mb-0">
                                                                    <label htmlFor="exampleInputText2" className="h5">Memebers</label>
                                                                    <select name="type" className="selectpicker form-control" data-style="py-0">
                                                                        <option>Memebers</option>
                                                                        <option>Kianna Septimus</option>
                                                                        <option>Jaxson Herwitz</option>
                                                                        <option>Ryan Schleifer</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group mb-0">
                                                                    <label htmlFor="exampleInputText6" className="h5">Due Dates*</label>
                                                                    <input type="date" className="form-control" id="exampleInputText6" value="" />
                                                                </div>                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-lg-6">                                                        
                                                                <h5 className="mb-2">Description</h5>
                                                                <p className="mb-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                                            </div>
                                                            <div className="col-lg-6">                                      
                                                                <h5 className="mb-2">Checklist</h5>
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck20" />
                                                                            <label className="custom-control-label mb-1" htmlFor="customCheck20">Design mobile version</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck21" />
                                                                            <label className="custom-control-label mb-1" htmlFor="customCheck21">Use images of unsplash.com</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck22" />
                                                                            <label className="custom-control-label" htmlFor="customCheck22">Vector images of small size.</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck23" />
                                                                            <label className="custom-control-label mb-1" htmlFor="customCheck23">Design mobile version of landing page</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck24" />
                                                                            <label className="custom-control-label mb-1" htmlFor="customCheck24">Use images of unsplash.com</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck25" />
                                                                            <label className="custom-control-label" htmlFor="customCheck25">Vector images of small size..</label>
                                                                        </div>
                                                                    </div>
                                                                </div>                       
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-0">
                                                    <label htmlFor="exampleInputText01" className="h5">Attachments</label>
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="inputGroupFile04" />
                                                        <label className="custom-file-label" htmlFor="inputGroupFile04">Upload media</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                                <div className="col-lg-12">
                                    <div className="card card-widget task-card mb-0">
                                        <div className="card-body">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="custom-control custom-task custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck26" />
                                                        <label className="custom-control-label" htmlFor="customCheck26"></label>
                                                    </div>
                                                    <div>
                                                        <h5 className="mb-2">Add Header and Footer To Template</h5>
                                                        <div className="media align-items-center">
                                                            <div className="btn bg-body mr-3"><i className="ri-align-justify mr-2"></i>5/10</div>
                                                            <div className="btn bg-body"><i className="ri-survey-line mr-2"></i>3</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="media align-items-center mt-md-0 mt-3">
                                                    <a href="#" className="btn bg-secondary-light mr-3">Design</a>
                                                    <a className="btn bg-secondary-light" data-toggle="collapse" href="#collapseEdit5" role="button" aria-expanded="false" aria-controls="collapseEdit5"><i className="ri-edit-box-line m-0"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>                                                                                                                                       
                                    <div className="collapse" id="collapseEdit5">                                            
                                        <div className="card card-list task-card">
                                            <div className="card-header d-flex align-items-center justify-content-between px-0 mx-3">
                                                <div className="header-title">
                                                    <div className="custom-control custom-checkbox custom-control-inline">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck27" />
                                                        <label className="custom-control-label h5" htmlFor="customCheck27">Mark as done</label>
                                                    </div>
                                                </div>
                                                <div><a href="#" className="btn bg-secondary-light">Design</a></div>
                                            </div>
                                            <div className="card-body">
                                                <div className="form-group mb-3 position-relative">
                                                    <input type="text" className="form-control bg-white" placeholder="Design landing page of webkit" />
                                                    <a href="#" className="task-edit task-simple-edit text-body"><i className="ri-edit-box-line"></i></a>
                                                </div>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="form-group mb-0">
                                                                    <label htmlFor="exampleInputText2" className="h5">Memebers</label>
                                                                    <select name="type" className="selectpicker form-control" data-style="py-0">
                                                                        <option>Memebers</option>
                                                                        <option>Kianna Septimus</option>
                                                                        <option>Jaxson Herwitz</option>
                                                                        <option>Ryan Schleifer</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="form-group mb-0">
                                                                    <label htmlFor="exampleInputText7" className="h5">Due Dates*</label>
                                                                    <input type="date" className="form-control" id="exampleInputText7" value="" />
                                                                </div>                        
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card mb-3">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-lg-6">                                                        
                                                                <h5 className="mb-2">Description</h5>
                                                                <p className="mb-0">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                                            </div>
                                                            <div className="col-lg-6">                                      
                                                                <h5 className="mb-2">Checklist</h5>
                                                                <div className="row">
                                                                    <div className="col-lg-6">
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck28" />
                                                                            <label className="custom-control-label mb-1" htmlFor="customCheck28">Design mobile version</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck29" />
                                                                            <label className="custom-control-label mb-1" htmlFor="customCheck29">Use images of unsplash.com</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck30" />
                                                                            <label className="custom-control-label" htmlFor="customCheck30">Vector images of small size.</label>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-lg-6">
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck31" />
                                                                            <label className="custom-control-label mb-1" htmlFor="customCheck31">Design mobile version of landing page</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck32" />
                                                                            <label className="custom-control-label mb-1" htmlFor="customCheck32">Use images of unsplash.com</label>
                                                                        </div>
                                                                        <div className="custom-control custom-checkbox custom-control-inline mr-0">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck33" />
                                                                            <label className="custom-control-label" htmlFor="customCheck33">Vector images of small size..</label>
                                                                        </div>
                                                                    </div>
                                                                </div>                       
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-0">
                                                    <label htmlFor="exampleInputText01" className="h5">Attachments</label>
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input" id="inputGroupFile05" />
                                                        <label className="custom-file-label" htmlFor="inputGroupFile05">Upload media</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        <NewProjectModal />
        <NewTaskModal />  
        <NewUserModal />   
        <NewCreateModal />
    </div>
    );
};

export default Tasks;
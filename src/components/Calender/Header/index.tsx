/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';


const Header: React.FC = () => {
    
return ( 
    <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between breadcrumb-content">
                                <h5>Calender</h5>
                                <div>
                                    <a href="#" className="btn btn-primary" data-target="#new-create-modal" data-toggle="modal">Create New</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  );
};

export default Header;
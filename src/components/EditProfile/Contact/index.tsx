/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
interface ContentGroupProps {
    activeIndex: number;
  }
  
const Contact: React.FC<ContentGroupProps> = ({ activeIndex }) => {
    return (
        <div className={activeIndex === 3 ? 'tab-pane fade active show' : 'tab-pane fade'} id="manage-contact" role="tabpanel">
        <div className="card">
        <div className="card-header d-flex justify-content-between">
            <div className="iq-header-title">
                <h4 className="card-title">Manage Contact</h4>
            </div>
        </div>
        <div className="card-body">
            <form>
                <div className="form-group">
                    <label htmlFor="cno">Contact Number:</label>
                    <input type="text" className="form-control" id="cno" value="001 2536 123 458" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" className="form-control" id="email" value="Barryjone@demo.com" />
                </div>
                <div className="form-group">
                    <label htmlFor="url">Url:</label>
                    <input type="text" className="form-control" id="url" value="https://getbootstrap.com" />
                </div>
                <button type="submit" className="btn btn-primary mr-2">Submit</button>
                <button type="reset" className="btn iq-bg-danger">Cancel</button>
            </form>
        </div>
        </div>
    </div>
    
  );
};

export default Contact;
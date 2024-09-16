/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
interface ModalProps {
    active: boolean;
    onClose: () => void;
  }

const NewProjectModal: React.FC<ModalProps> = ({ active,onClose }) => {
  return (
    <div
      className={`${active ? 'modal fade show' : 'modal fade'}`} onClick={onClose}
      role="dialog"
      aria-modal="true"
      id="new-project-modal"
    >
      <div className="modal-dialog  modal-dialog-centered" role="document" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          <div className="modal-header d-block text-center pb-3 border-bttom">
            <h3 className="modal-title" id="exampleModalCenterTitle01">
              New Project
            </h3>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <label htmlFor="exampleInputText01" className="h5">
                    Project Name*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputText01"
                    placeholder="Project Name"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group mb-3">
                  <label htmlFor="exampleInputText2" className="h5">
                    Categories *
                  </label>
                  <select
                    name="type"
                    className="selectpicker form-control"
                    data-style="py-0"
                  >
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
                  <label htmlFor="exampleInputText004" className="h5">
                    Due Dates*
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputText004"
                    value=""
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mb-3">
                  <label htmlFor="exampleInputText07" className="h5">
                    Assign Members*
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputText07"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="d-flex flex-wrap align-items-ceter justify-content-center mt-2">
                  <div className="btn btn-primary mr-3" data-dismiss="modal">
                    Save
                  </div>
                  <div className="btn btn-primary" data-dismiss="modal" onClick={onClose}>
                    Cancel
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

export default NewProjectModal;

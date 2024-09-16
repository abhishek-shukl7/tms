/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

interface ButtonGroupProps {
  activeIndex: number;
  onButtonClick: (index: number) => void;
}

const EditNav: React.FC<ButtonGroupProps> = (
  { activeIndex, onButtonClick },
  { onClick },
) => {
  return (
    <ul className="iq-edit-profile d-flex nav nav-pills">
      <li className="col-md-3 p-0">
        <a
          className={activeIndex === 0 ? 'nav-link active' : 'nav-link'}
          onClick={() => onButtonClick(0)}
          data-toggle="pill"
        >
          Personal Information
        </a>
      </li>
      <li className="col-md-3 p-0">
        <a className={activeIndex === 1 ? 'nav-link active' : 'nav-link'}
          onClick={() => onButtonClick(1)} 
          data-toggle="pill" 
          href="#chang-pwd">
          Change Password
        </a>
      </li>
      <li className="col-md-3 p-0">
        <a className={activeIndex === 2 ? 'nav-link active' : 'nav-link'}
          onClick={() => onButtonClick(2)}
           data-toggle="pill" >
          Email and SMS
        </a>
      </li>
      <li className="col-md-3 p-0">
        <a className={activeIndex === 3 ? 'nav-link active' : 'nav-link'}
          onClick={() => onButtonClick(3)}
           data-toggle="pill">
          Manage Contact
        </a>
      </li>
    </ul>
  );
};

export default EditNav;

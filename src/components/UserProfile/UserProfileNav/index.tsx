/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

interface ButtonGroupProps {
   activeIndex: number;
   onButtonClick: (index: number) => void;
 }

const UserProfileNav: React.FC<ButtonGroupProps> = (
   { activeIndex, onButtonClick },
   { onClick },) => {
  return (
    <ul
      className="d-flex nav nav-pills mb-3 text-center profile-tab"
      id="profile-pills-tab"
      role="tablist"
    >
      <li className="nav-item">
        <a
         className={activeIndex === 0 ? 'nav-link active' : 'nav-link'}
         onClick={() => onButtonClick(0)}
          data-toggle="pill"
          href="#profile1"
          role="tab"
          aria-selected="false"
        >
          My Skills
        </a>
      </li>
      <li className="nav-item">
        <a
          className={activeIndex === 1 ? 'nav-link active' : 'nav-link'}
          onClick={() => onButtonClick(1)}
          data-toggle="pill"
          href="#profile2"
          role="tab"
          aria-selected="false"
        >
          Personal Information
        </a>
      </li>
      <li className="nav-item">
        <a
          className={activeIndex === 2 ? 'nav-link active' : 'nav-link'}
          onClick={() => onButtonClick(2)}
          data-toggle="pill"
          href="#profile3"
          role="tab"
          aria-selected="false"
        >
          Education
        </a>
      </li>
      <li className="nav-item">
        <a
          className={activeIndex === 3 ? 'nav-link active' : 'nav-link'}
          onClick={() => onButtonClick(3)}
          data-toggle="pill"
          href="#profile4"
          role="tab"
          aria-selected="false"
        >
          Experience
        </a>
      </li>
      <li className="nav-item">
        <a
          id="view-btn"
          className={activeIndex === 4 ? 'nav-link active' : 'nav-link'}
          onClick={() => onButtonClick(4)}
          data-toggle="pill"
          href="#profile5"
          role="tab"
          aria-selected="true"
        >
          About
        </a>
      </li>
    </ul>
  );
};

export default UserProfileNav;

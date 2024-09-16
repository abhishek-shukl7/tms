/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import NewTask from './NewTask';
import NewTaskModal from '../../Common/NewTaskModal';

import {
    toggleClass,
    handleClickOutside,
  } from '../../Header/ToggleShowClass.ts';

const Header: React.FC = () => {
    const [show, setShow] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const toggleButtonRef = useRef<HTMLAnchorElement>(null);
  
    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) =>
        handleClickOutside(
          event,
          [toggleButtonRef, dropdownRef, menuRef],
          setShow,
          [dropdownRef, menuRef],
          'show',
        );
  
      document.addEventListener('mousedown', handleOutsideClick);
  
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);
  
    const handleToggleClick = () => {
      setShow((prevShow) => !prevShow);
      if (dropdownRef.current) toggleClass(dropdownRef.current, 'show');
      if (menuRef.current) toggleClass(menuRef.current, 'show');
    };

    const [modalActive, setModalActive] = useState(false);

  const handleOpenModal = () => {
    setModalActive(true);
  };

  const handleCloseModal = () => {
    setModalActive(false);
  };

  return (
    <div className="d-flex flex-wrap align-items-center justify-content-between breadcrumb-content">
      <h5>Your Task</h5>
      <div className="d-flex flex-wrap align-items-center">
        <div className="dropdown dropdown-project mr-3" ref={dropdownRef}>
          <div
            className="dropdown-toggle"
            id="dropdownMenuButton03"
            data-toggle="dropdown"
            onClick={handleToggleClick}
            ref={toggleButtonRef}
          >
            <div className="btn bg-body">
              <span className="h6">Project :</span> webkit Project
              <i className="ri-arrow-down-s-line ml-2 mr-0"></i>
            </div>
          </div>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="dropdownMenuButton03"
            ref={menuRef}
          >
            <a className="dropdown-item" href="#">
              <i className="ri-mic-line mr-2"></i>In Progress
            </a>
            <a className="dropdown-item" href="#">
              <i className="ri-attachment-line mr-2"></i>Priority
            </a>
            <a className="dropdown-item" href="#">
              <i className="ri-file-copy-line mr-2"></i>Category
            </a>
          </div>
        </div>
        <NewTask onClick={handleOpenModal} />
        <NewTaskModal active={modalActive} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default Header;

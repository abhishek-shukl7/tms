/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import NewProject from './NewProject';
import NewProjectModal from '../../Common/NewProjectModal';

import {
  toggleClass,
  handleClickOutside,
} from '../../Header/ToggleShowClass.ts';

interface ButtonGroupProps {
  activeIndex: number;
  onButtonClick: (index: number) => void;
}

const Header: React.FC<ButtonGroupProps> = (
  { activeIndex, onButtonClick },
  { onClick },
) => {
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
      <h5>Desk</h5>
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        <div className="dropdown status-dropdown mr-3" ref={dropdownRef}>
          <div
            className="dropdown-toggle"
            id="dropdownMenuButton03"
            data-toggle="dropdown"
            onClick={handleToggleClick}
            ref={toggleButtonRef}
          >
            <div className="btn bg-body">
              <span className="h6">Status :</span> In Progress
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
        <div className="list-grid-toggle d-flex align-items-center mr-3">
          <div
            data-toggle-extra="tab"
            data-target-extra="#grid"
            className={activeIndex === 0 ? 'active' : ''}
            onClick={() => onButtonClick(0)}
          >
            <div className="grid-icon mr-3">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
            </div>
          </div>
          <div data-toggle-extra="tab" data-target-extra="#list" 
            className={activeIndex === 1 ? 'active' : ''}
            onClick={() => onButtonClick(1)}>
            <div className="grid-icon">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="21" y1="10" x2="3" y2="10"></line>
                <line x1="21" y1="6" x2="3" y2="6"></line>
                <line x1="21" y1="14" x2="3" y2="14"></line>
                <line x1="21" y1="18" x2="3" y2="18"></line>
              </svg>
            </div>
          </div>
        </div>
        <NewProject onClick={handleOpenModal} />
        <NewProjectModal active={modalActive} onClose={handleCloseModal} />
      </div>
    </div>
  );
};

export default Header;

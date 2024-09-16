/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { preventEventPropagation,toggleClass, handleClickOutside } from '../ToggleShowClass.ts'
import user1 from '../../../assets/images/user/1.jpg';


const UserProfileDropDown: React.FC = () => {

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
              'show'
            );
      
          document.addEventListener('mousedown', handleOutsideClick);
      
          return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
          };
    }, []);
  
    const handleToggleClick = () => {
      setShow(prevShow => !prevShow);
      if (dropdownRef.current) toggleClass(dropdownRef.current, 'show');
      if (menuRef.current) toggleClass(menuRef.current, 'show');
    };

return (    
    <li className="nav-item nav-icon dropdown caption-content" ref={dropdownRef}>
        <a href="#" className="search-toggle dropdown-toggle  d-flex align-items-center" id="dropdownMenuButton4"
                                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={handleToggleClick} ref={toggleButtonRef}>
            <img src={user1} className="img-fluid rounded-circle" alt="user"/>
            <div className="caption ml-3">
                <h6 className="mb-0 line-height">Savannah Nguyen<i className="las la-angle-down ml-2"></i></h6>
            </div>
        </a>                            
        <ul className="dropdown-menu dropdown-menu-right border-none" aria-labelledby="dropdownMenuButton" ref={menuRef} onClick={preventEventPropagation}>
                                      <li className="dropdown-item d-flex svg-icon">
                                          <svg className="svg-icon mr-0 text-primary" id="h-01-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                          </svg>
                                          <a href="/user-profile">My Profile</a>
                                      </li>
                                      <li className="dropdown-item d-flex svg-icon">
                                          <svg className="svg-icon mr-0 text-primary" id="h-02-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                          </svg>
                                          <a href="/user-profile-edit">Edit Profile</a>
                                      </li>
                                      <li className="dropdown-item d-flex svg-icon">
                                          <svg className="svg-icon mr-0 text-primary" id="h-03-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                          </svg>
                                          <a href="/user-account-setting">Account Settings</a>
                                      </li>
                                      <li className="dropdown-item d-flex svg-icon">
                                          <svg className="svg-icon mr-0 text-primary" id="h-04-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                          </svg>
                                          <a href="/user-privacy-setting">Privacy Settings</a>
                                      </li>
                                      <li className="dropdown-item  d-flex svg-icon border-top">
                                          <svg className="svg-icon mr-0 text-primary" id="h-05-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                          </svg>
                                          <a href="/auth-sign-in">Logout</a>
                                      </li>
        </ul>
    </li>
);
};

export default UserProfileDropDown;

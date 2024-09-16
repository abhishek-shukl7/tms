/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { toggleClass, handleClickOutside,preventEventPropagation } from '../ToggleShowClass.ts'
import user01 from '../../../assets/images/user/01.jpg';
import user02 from '../../../assets/images/user/02.jpg';
import user03 from '../../../assets/images/user/03.jpg';

const UserNotificationDropDown: React.FC = () => {
    const [show, setShow] = useState(false);
    const dropdownRefs = useRef<HTMLDivElement>(null);
    const menuRefs = useRef<HTMLDivElement>(null);
    const toggleButtonRefs = useRef<HTMLButtonElement>(null);
  
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) =>
            handleClickOutside(
              event,
              [toggleButtonRefs, dropdownRefs, menuRefs],
              setShow,
              [dropdownRefs, menuRefs],
              'show'
            );
      
          document.addEventListener('mousedown', handleOutsideClick);
      
          return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
          };
    }, []);
  
    const handleToggleClicks = () => {
      setShow(prevShow => !prevShow);
      if (dropdownRefs.current) toggleClass(dropdownRefs.current, 'show');
      if (menuRefs.current) toggleClass(menuRefs.current, 'show');
    };

return (    
    <li className="nav-item nav-icon nav-item-icon dropdown" ref={dropdownRefs}>
        <a href="#" className="search-toggle dropdown-toggle" id="dropdownMenuButton"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={handleToggleClicks} ref={toggleButtonRefs}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" className="feather feather-bell">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            <span className="bg-primary "></span>
        </a>
        <div className="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton" ref={menuRefs} onClick={preventEventPropagation}>
            <div className="card shadow-none m-0">
                <div className="card-body p-0 ">
                    <div className="cust-title p-3">
                        <div className="d-flex align-items-center justify-content-between">
                            <h5 className="mb-0">Notifications</h5>
                            <a className="badge badge-primary badge-card" href="#">3</a>
                        </div>
                    </div>
                    <div className="px-3 pt-0 pb-0 sub-card">
                        <a href="#" className="iq-sub-card">
                            <div className="media align-items-center cust-card py-3 border-bottom">
                                <div className="">
                                    <img className="avatar-50 rounded-small"
                                        src={user01} alt="01"/>
                                </div>
                                <div className="media-body ml-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h6 className="mb-0">Emma Watson</h6>
                                        <small className="text-dark"><b>12 : 47 pm</b></small>
                                    </div>
                                    <small className="mb-0">Lorem ipsum dolor sit amet</small>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                            <div className="media align-items-center cust-card py-3 border-bottom">
                                <div className="">
                                    <img className="avatar-50 rounded-small"
                                        src={user02} alt="02"/>
                                </div>
                                <div className="media-body ml-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h6 className="mb-0">Ashlynn Franci</h6>
                                        <small className="text-dark"><b>11 : 30 pm</b></small>
                                    </div>
                                    <small className="mb-0">Lorem ipsum dolor sit amet</small>
                                </div>
                            </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                            <div className="media align-items-center cust-card py-3">
                                <div className="">
                                    <img className="avatar-50 rounded-small"
                                        src={user03} alt="03"/>
                                </div>
                                <div className="media-body ml-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h6 className="mb-0">Kianna Carder</h6>
                                        <small className="text-dark"><b>11 : 21 pm</b></small>
                                    </div>
                                    <small className="mb-0">Lorem ipsum dolor sit amet</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <a className="right-ic btn btn-primary btn-block position-relative p-2" href="#"
                        role="button">
                        View All
                    </a>
                </div>
            </div>
        </div>
    </li>
);
};

export default UserNotificationDropDown;

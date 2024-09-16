/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import UserNotificationDropDown from '../components/Header/UserNotificationDropDown';
import UserMsgDropDown from '../components/Header/UserMsgDropDown';
import UserProfileDropDown from '../components/Header/UserProfileDropDown';

const Header: React.FC = () => {

    const [scrolltopdata, setscrolltopdata] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY < 15) {
                setscrolltopdata('');
            } else {
                setscrolltopdata('fixed');
            }
        });
    }, [])

  return (
    <div className={`iq-top-navbar ${scrolltopdata}`}>
          <div className="iq-navbar-custom">
              <nav className="navbar navbar-expand-lg navbar-light p-0">
                  <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                      <i className="ri-menu-line wrapper-menu"></i>
                      <a href="/" className="header-logo">
                          <h4 className="logo-title text-uppercase">Webkit</h4>
      
                      </a>
                  </div>
                  <div className="navbar-breadcrumb">
                      <h5>Dashboard</h5>
                  </div>
                  <div className="d-flex align-items-center">
                      <button className="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                          aria-label="Toggle navigation">
                          <i className="ri-menu-3-line"></i>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav ml-auto navbar-list align-items-center">
                              <li>
                                  <div className="iq-search-bar device-search">
                                      <form action="#" className="searchbox">
                                          <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                                          <input type="text" className="text search-input" placeholder="Search here..."/>
                                      </form>
                                  </div>
                              </li>
                              <li className="nav-item nav-icon search-content">
                                  <a href="#" className="search-toggle rounded" id="dropdownSearch" data-toggle="dropdown"
                                      aria-haspopup="true" aria-expanded="false">
                                      <i className="ri-search-line"></i>
                                  </a>
                                  <div className="iq-search-bar iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownSearch">
                                      <form action="#" className="searchbox p-2">
                                          <div className="form-group mb-0 position-relative">
                                              <input type="text" className="text search-input font-size-12"
                                                  placeholder="type here to search..."/>
                                              <a href="#" className="search-link"><i className="las la-search"></i></a>
                                          </div>
                                      </form>
                                  </div>
                              </li>
                              <UserMsgDropDown />
                            <UserNotificationDropDown />
                            <UserProfileDropDown />
                          </ul>
                      </div>
                  </div>
              </nav>
          </div>
      </div>    
    
  );
};

export default Header;

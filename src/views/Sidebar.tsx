import React from 'react';
import logo from '../assets/images/logo.svg';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();

  // Function to determine if the link should be active
  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <div className="iq-sidebar  sidebar-default ">
          <div className="iq-sidebar-logo d-flex align-items-center">
              <a href="../backend/index.html" className="header-logo">
                  <img src={logo} alt="logo"/>
                  <h3 className="logo-title light-logo">Webkit</h3>
              </a>
              <div className="iq-menu-bt-sidebar ml-0">
                  <i className="las la-bars wrapper-menu"></i>
              </div>
          </div>
          <div className="data-scrollbar" data-scroll="1">
              <nav className="iq-sidebar-menu">
                  <ul id="iq-sidebar-toggle" className="iq-menu">
                      <li className={isActive('/') ? 'active' : ''}>
                          <a href="/" className="svg-icon">                        
                              <svg className="svg-icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                              </svg>
                              <span className="ml-4">Dashboards</span>
                          </a>
                      </li>
                      <li className={isActive('/projects') ? 'active' : ''}>
                          <a href="/projects" className="svg-icon">                        
                              <svg className="svg-icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                                  <rect x="6" y="14" width="12" height="8"></rect>
                              </svg>
                              <span className="ml-4">Projects</span>
                          </a>
                      </li>
                      <li className={isActive('/tasks') ? 'active' : ''}>
                          <a href="/tasks" className="svg-icon">                        
                              <svg className="svg-icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                              </svg>
                              <span className="ml-4">Task</span>
                          </a>
                      </li>
                      <li className={isActive('/employee') ? 'active' : ''}>
                          <a href="/employee" className="svg-icon">                        
                              <svg className="svg-icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                              </svg>
                              <span className="ml-4">Employees</span>
                          </a>
                      </li>
                      <li className={isActive('/desk') ? 'active' : ''}>
                          <a href="/desk" className="svg-icon">                        
                              <svg className="svg-icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
                              </svg>
                              <span className="ml-4">Desk</span>
                          </a>
                      </li>
                      <li className={isActive('/calender') ? 'active' : ''}>
                          <a href="/calender" className="svg-icon">                        
                              <svg className="svg-icon" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                              </svg>
                              <span className="ml-4">Calender</span>
                          </a>
                      </li>
                  </ul>
              </nav>
              <div id="sidebar-bottom" className="position-relative sidebar-bottom">
                  <div className="card border-none mb-0 shadow-none">
                      <div className="card-body p-0">
                          <div className="sidebarbottom-content">
                              <h5 className="mb-3">Task Performed</h5>
                              <div id="circle-progress-6" className="sidebar-circle circle-progress circle-progress-primary mb-4">
                                <CircularProgressbar value={55} text={`${55}%`} 
                                    styles={buildStyles({ 
                                    pathColor: `rgba(87, 115, 255,1)`,
                                    textColor: 'rgba(87, 115, 255,1)',
                                    trailColor: '#d0d8ff',
                                    })}
                                />
                              </div>
                              <div className="custom-control custom-radio mb-1">
                                  <input type="radio" id="customRadio6" name="customRadio-1" className="custom-control-input" checked={true}/>
                                  <label className="custom-control-label" htmlFor="customRadio6">Performed task</label>
                              </div>
                              <div className="custom-control custom-radio">
                                  <input type="radio" id="customRadio7" name="customRadio-1" className="custom-control-input"/>
                                  <label className="custom-control-label" htmlFor="customRadio7">Incomplete Task</label>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="pt-5 pb-2"></div>
          </div>
      </div>  
  );
};

export default Sidebar;
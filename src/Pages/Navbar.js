import React from 'react'
import './sass/Navbar.scss'
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Navbar({ handleIconClick }) {

    return (
        <div className='nav-content'>
            <nav className='navbar navbar-expand-lg navbar-light'>
                <div className='collapse navbar-collapse' id="navbarSupportedContent">
                    {/* <FontAwesomeIcon icon={faBars} className='menu-bar' /> */}
                    <i className='menu-icon' onClick={handleIconClick}></i>


                    <form className="form-inline" style={{marginLeft:'15px'}}>
                        {/* <i className="fas fa-search input-icon"></i> */}
                        <i className='search-icon'></i>
                        <input className="form-control" style={{ boxShadow: 'none' }} />
                    </form>
                </div>
                <ul className="nav justify-content-end">
                    <li className="nav-item parent-active">
                        <a className="nav-link">
                        {/* <FontAwesomeIcon icon={faBell} /> */}
                        <i className='bell'></i>
                        <div className='active-notice'></div>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            {/* <FontAwesomeIcon icon={faCog} /> */}
                            <i className='setting'></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link admin-profile">
                            <div className='profile-circle'>
                                <FontAwesomeIcon icon={faUserCircle} className='profile' />
                                {/* <i className='profile'></i> */}
                            </div>
                            <div className='profile-name'>
                                <span>Admin</span>
                                <p>Admin Name</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
            <hr />
        </div>

    )
}

export default Navbar
import React from 'react'
import './sass/Sidebar.scss'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen }) {
    const sidebarClass = isOpen ? 'main-content' : 'sidebar-open';
    return (
        <div className={`container ${sidebarClass}`}>
            <div className='side-page'>
                <div className='logo'>
                    <i className='logo-icon'></i>
                    <h4>Logo Star</h4>
                </div>
                <div className='content'>
                    <ul>
                        <li className='active'>
                            <div className='icons'><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></div>
                        </li>
                        <Link to='/content' style={{color: '#212529', textDecoration:'none'}}><li><div className='icons'><i className="fa-solid fa-chart-line"></i><span>Marketing Dashboard</span></div></li></Link>
                    </ul>
                    <span className='li-heading'>EDUCATION</span>
                    <ul>
                        <li><div className='icons'><i className="fa-solid fa-graduation-cap"></i><span>Courses</span> </div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li><div className='icons'><i className="fa-solid fa-cubes"></i><span>Courses Bundles</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li><div className='icons'><i class="fa-solid fa-calendar"></i><span>Upcoming Courses</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li><div className='icons'><i class="fa-solid fa-file-pen"></i><span>Quizzes</span></div>
                        </li>
                        <li><div className='icons'><i class="fa-solid fa-sun"></i><span>Certificates</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li><div className='icons'><i class="fa-solid fa-pen"></i><span>Assignments</span></div>
                        </li>
                        <li><div className='icons'><i class="fa-solid fa-message"></i><span>Course Forum</span></div>
                        </li>
                        <li><div className='icons'><i class="fa-solid fa-file-excel"></i><span>Courses Notices</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li><div className='icons'><i class="fa-solid fa-user-plus"></i><span>Enrollment</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li><div className='icons'><i class="fa-solid fa-credit-card"></i><span>Waitlist</span></div>
                        </li>
                        <li><div className='icons'><i class="fa-solid fa-star"></i><span>Categories</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li><div className='icons'><i class="fa-solid fa-filter"></i><span>Filters</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                    </ul>
                    <span className='li-heading'>MEETINGS</span>
                    <ul>
                        <li><div className='icons'><i class="fa-solid fa-address-card"></i><span>Consultants</span></div>
                        </li>
                        <li><div className='icons'><i className="fas fa-tachometer-alt"></i><span>Meetings</span></div>
                        </li>
                    </ul>
                    <span className='li-heading user'>USERS</span>
                    <ul>
                        <li><div className='icons'><i class="fa-solid fa-address-card"></i><span>Users</span></div>
                        </li>
                        <li><div className='icons'><i class="fa-solid fa-credit-card"></i><span>Access Management</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
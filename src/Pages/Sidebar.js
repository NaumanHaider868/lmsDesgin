import React from 'react'
import './sass/Sidebar.scss'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar({ isOpen }) {
    const sidebarClass = isOpen ? 'sidebar-open' : 'main-content';
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
                            <div className='main-icon'>
                                <div className='icons'><i className="fas fa-tachometer-alt"></i><p>Dashboard</p></div>
                            </div>
                        </li>
                        <li>
                            <div className='main-icon'>
                                <div className='icons'>
                                    <i className="fa-solid fa-chart-line"></i><p>Marketing Dashboard</p></div>
                            </div>
                        </li>
                    </ul>
                    <span className='li-heading'>EDUCATION</span>
                    <ul>
                        <li>
                            <div className='main-icon'>
                                <div className='icons'><i className="fa-solid fa-graduation-cap"></i><p>Courses</p> </div> <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </li>
                        <li>
                            <div className='main-icon'>
                                <div className='icons'><i className="fa-solid fa-cubes"></i><p>Courses Bundles</p></div> <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </li>
                        <li>
                            <div className='main-icon'>
                                <div className='icons'><i class="fa-solid fa-calendar"></i><p>Upcoming Courses</p></div> <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </li>
                        <li>
                            <div className='main-icon'>
                                <div className='icons'><i class="fa-solid fa-file-pen"></i><p>Quizzes</p></div>
                            </div>

                        </li>
                        <li>
                            <div className='main-icon'>
                                <div className='icons'><i class="fa-solid fa-sun"></i><p>Certificates</p></div> <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </li>
                        <li>
                            <div className='main-icon'>
                                <div className='icons'><i class="fa-solid fa-pen"></i><p>Assignments</p></div>
                            </div>
                        </li>
                        <li>
                            <div className='main-icon'>
                                <div className='icons'><i class="fa-solid fa-message"></i><p>Course Forum</p></div>
                            </div>
                        </li>
                        <li>
                            <div className='main-icon'>
                                <div className='icons'><i class="fa-solid fa-file-excel"></i><p>Courses Notices</p></div> <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </li>
                        <li>
                            <div className='main-icon'>
                                <div className='icons'><i class="fa-solid fa-user-plus"></i><p>Enrollment</p></div> <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </li>
                        <li>
                            <div className='main-icon'>
                                <div className='icons'><i class="fa-solid fa-credit-card"></i><p>Waitlist</p></div>
                            </div>

                        </li>
                        <li>
                            <div className='main-icon'>
                                <div className='icons'><i class="fa-solid fa-star"></i><p>Categories</p></div> <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </li>
                        <li>
                            <div className='main-icon'>
                                <div className='icons'><i class="fa-solid fa-filter"></i><p>Filters</p></div> <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </li>
                    </ul>
                    <span className='li-heading'>MEETINGS</span>
                    <ul>
                        <li>
                            <div className='main-icon'>
                                <div className='icons'><i class="fa-solid fa-address-card"></i><p>Consultants</p></div>
                            </div>
                        </li>
                        <li>
                            <div className='main-icon'>
                                <div className='icons'><i className="fas fa-tachometer-alt"></i><p>Meetings</p></div>
                            </div>
                        </li>
                    </ul>
                    <span className='li-heading user'>USERS</span>
                    <ul>
                        <li>
                            <div className='main-icon'>
                                <div className='icons'><i class="fa-solid fa-address-card"></i><p>Users</p></div>
                            </div>
                        </li>
                        <li>
                            <div className='main-icon'>
                                <div className='icons'><i class="fa-solid fa-credit-card"></i><p>Access Management</p></div> <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
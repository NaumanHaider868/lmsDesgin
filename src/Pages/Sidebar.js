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
                        <li className='active' data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Dashboard' : ""}>
                            <div className='icons'><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></div>
                        </li>
                        <Link to='/content' style={{ color: '#212529', textDecoration: 'none' }}><li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Marketing Dashboard' : ""}><div className='icons'><i className="fa-solid fa-chart-line"></i><span>Marketing Dashboard</span></div></li></Link>
                    </ul>
                    <span className='li-heading'>EDUCATION</span>
                    <ul>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Courses' : ""}><div className='icons'><i className="fa-solid fa-graduation-cap"></i><span>Courses</span> </div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Courses Bundles' : ""}><div className='icons'><i className="fa-solid fa-cubes"></i><span>Courses Bundles</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Upcoming Courses' : ""}><div className='icons'><i class="fa-solid fa-calendar"></i><span>Upcoming Courses</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Quizzes' : ""}><div className='icons'><i class="fa-solid fa-file-pen"></i><span>Quizzes</span></div>
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Certificates' : ""}><div className='icons'><i class="fa-solid fa-sun"></i><span>Certificates</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Assignments' : ""}><div className='icons'><i class="fa-solid fa-pen"></i><span>Assignments</span></div>
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Course Forum' : ""}><div className='icons'><i class="fa-solid fa-message"></i><span>Course Forum</span></div>
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Courses Notices' : ""}><div className='icons'><i class="fa-solid fa-file-excel"></i><span>Courses Notices</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Enrollment' : ""}><div className='icons'><i class="fa-solid fa-user-plus"></i><span>Enrollment</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Waitlist' : ""}><div className='icons'><i class="fa-solid fa-credit-card"></i><span>Waitlist</span></div>
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Categories' : ""}><div className='icons'><i class="fa-solid fa-star"></i><span>Categories</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Filters' : ""}><div className='icons'><i class="fa-solid fa-filter"></i><span>Filters</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                    </ul>
                    <span className='li-heading'>MEETINGS</span>
                    <ul>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Consultants' : ""}><div className='icons'><i class="fa-solid fa-address-card"></i><span>Consultants</span></div>
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Meetings' : ""}><div className='icons'><i className="fas fa-tachometer-alt"></i><span>Meetings</span></div>
                        </li>
                    </ul>
                    <span className='li-heading user'>USERS</span>
                    <ul>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Users' : ""}><div className='icons'><i class="fa-solid fa-address-card"></i><span>Users</span></div>
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Access Management' : ""}><div className='icons'><i class="fas fa-user-lock"></i><span>Access Management</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Delete Account Requests' : ""}><div className='icons'><i class="fas fa-user-times"></i><span>Delete Account Requests</span></div>
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'User Roles' : ""}><div className='icons'><i class="fas fa-user"></i><span>User Roles</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Groups' : ""}><div className='icons'><i class="fas fa-user-friends"></i><span>Groups</span></div><FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Badges' : ""}><div className='icons'><i class="fas fa-trophy"></i><span>Badges</span></div> <FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Instructor Requests' : ""}><div className='icons'><i class="fas fa-file-invoice"></i><span>Instructor Requests</span></div><FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                    </ul>
                    <span className='li-heading user'>FORUM</span>
                    <ul>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Dashboard' : ""}><div className='icons'><i class="fas fa-comment-alt"></i><span>Forums</span></div><FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Dashboard' : ""}><div className='icons'><i class="fas fa-comment"></i><span>Featured Topics</span></div><FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Dashboard' : ""}><div className='icons'><i class="fas fa-thumbs-up"></i><span>Recommended Topics</span></div><FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                    </ul>
                    <span className='li-heading crm'>CRM</span>
                    <ul>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Dashboard' : ""}><div className='icons'><i class="fas fa-headphones"></i><span>Support</span></div><FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Dashboard' : ""}><div className='icons'><i class="fas fa-envelope"></i><span>Course Support</span></div>
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Dashboard' : ""}><div className='icons'><i class="fas fa-comment"></i><span>Comments</span></div><FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li><div className='icons'><i class="fas fa-exclamation-circle"></i><span>Reports</span></div><FontAwesomeIcon icon={faAngleDown} className='icon-down' />
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Dashboard' : ""}><div className='icons'><i class="fas fa-phone-alt"></i><span>Contact Messages</span></div>
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Dashboard' : ""}><div className='icons'><i class="fas fa-desktop"></i><span>Noticeboard</span></div>
                        </li>
                        <li data-placement="top" title={sidebarClass === 'sidebar-open' ? 'Dashboard' : ""}><div className='icons'><i class="fas fa-bell"></i><span>Notifications</span></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
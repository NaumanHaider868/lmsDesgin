import React from 'react'
import './sass/Sidebar.scss'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Sidebar() {
    return (
        <div className='container main-content'>
            <div className='side-page'>
                <div className='logo'>
                    <i className='logo-icon'></i>
                    <h4>Logo Star</h4>
                </div>
                <div className='content'>
                    <ul>
                        <li className='active'>Dashboard</li>
                        <li>Marketing Dashboard</li>
                    </ul>
                    <span className='li-heading'>EDUCATION</span>
                    <ul>
                        <li>Courses <FontAwesomeIcon icon={faAngleDown} />
                        </li>
                        <li>Courses Bundles <FontAwesomeIcon icon={faAngleDown} />
                        </li>
                        <li>Upcoming Courses <FontAwesomeIcon icon={faAngleDown} />
                        </li>
                        <li>Quizzes
                        </li>
                        <li>Certificates <FontAwesomeIcon icon={faAngleDown} />
                        </li>
                        <li>Assignments
                        </li>
                        <li>Course Forum
                        </li>
                        <li>Courses Notices <FontAwesomeIcon icon={faAngleDown} />
                        </li>
                        <li>Enrollment <FontAwesomeIcon icon={faAngleDown} />
                        </li>
                        <li>Waitlist
                        </li>
                        <li>Categories <FontAwesomeIcon icon={faAngleDown} />
                        </li>
                        <li>Filters <FontAwesomeIcon icon={faAngleDown} />
                        </li>
                    </ul>
                    <span className='li-heading'>MEETINGS</span>
                    <ul>
                        <li>Consultants
                        </li>
                        <li>Meetings
                        </li>
                    </ul>
                    <span className='li-heading'>USERS</span>
                    <ul>
                        <li>Users
                        </li>
                        <li>Access Management <FontAwesomeIcon icon={faAngleDown} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
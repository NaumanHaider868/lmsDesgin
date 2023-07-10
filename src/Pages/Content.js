import React from 'react'
import '././sass/content.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faSortAmountDown } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { useState } from 'react';


function Content() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleIconClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div>
            <Sidebar isOpen={isSidebarOpen} />
            <Navbar handleIconClick={handleIconClick} />
            <div className='my-content'>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6 headings-courses">
                                <h4 className='pl'>Courses</h4>
                            </div>
                            <div className="col-sm-6 headings-courses">
                                <div className="breadcrumb side-heading-content float-sm-right">
                                    <div className='breadcrumb-icons'>
                                        <FontAwesomeIcon icon={faBars} className='heading-icon1' />
                                        <FontAwesomeIcon icon={faSortAmountDown} className='heading-icon1' />
                                    </div>
                                    <button className='btn courses-btn'><FontAwesomeIcon icon={faPlusCircle} /> New Courses</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                <div className='page-main-content'>
                    <div className="row main-content-row">
                        <div className="col-md-3 course-card">
                            <div className="card course-card-content">
                                <div className="card-body">
                                    <div className='card-title course-card-title'>
                                        <h5>Course Alfa</h5>
                                        <FontAwesomeIcon icon={faEllipsisH} className='icon-title' />
                                    </div>
                                    <p className="card-text">Most of you are familiar with this Course, in this course...</p>
                                    <div className='mid-card'>
                                        <FontAwesomeIcon icon={faUserCircle} />
                                        <FontAwesomeIcon icon={faUserCircle} className='sec-icon' />
                                        <span className='mid-text'>Enrolled students</span>
                                        <span className='mid-num'>90%</span>
                                    </div>
                                    <div className='card-footer mid-footer'>
                                        <div className='mid-time'>
                                            {/* <FontAwesomeIcon icon={faClock} /> */}
                                            <i className='time'></i>
                                            <span className='text-time'>12:22 Hours</span>
                                        </div>

                                        <div className='mid-date'>
                                            {/* <FontAwesomeIcon icon={faCalendar} /> */}
                                            <i className='calendar'></i>
                                            <span className='text-date'>12/12/2012</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 course-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className='card-title course-card-title'>
                                        <h5>Course Alfa</h5>
                                        <FontAwesomeIcon icon={faEllipsisH} className='icon-title' />
                                    </div>
                                    <p className="card-text">Most of you are familiar with this Course, in this course...</p>
                                    <div className='mid-card'>
                                        <FontAwesomeIcon icon={faUserCircle} />
                                        <FontAwesomeIcon icon={faUserCircle} className='sec-icon' />
                                        <span className='mid-text'>Enrolled students</span>
                                        <span className='mid-num'>90%</span>
                                        {/* <FontAwesomeIcon icon={faUserPlus} className='third-icon' /> */}

                                    </div>
                                    <div className='card-footer mid-footer'>
                                        <div className='mid-time'>
                                            {/* <FontAwesomeIcon icon={faClock} /> */}
                                            <i className='time'></i>
                                            <span className='text-time'>12:22 Hours</span>
                                        </div>
                                        <div className='mid-date'>
                                            {/* <FontAwesomeIcon icon={faCalendar} /> */}
                                            <i className='calendar'></i>
                                            <span className='text-date'>12/12/2012</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 course-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className='card-title course-card-title'>
                                        <h5>Course Alfa</h5>
                                        <FontAwesomeIcon icon={faEllipsisH} className='icon-title' />
                                    </div>
                                    <p className="card-text">Most of you are familiar with this Course, in this course...</p>
                                    <div className='mid-card'>
                                        <FontAwesomeIcon icon={faUserCircle} />
                                        <FontAwesomeIcon icon={faUserCircle} className='sec-icon' />
                                        <span className='mid-text'>Enrolled students</span>
                                        <span className='mid-num'>90%</span>
                                        {/* <FontAwesomeIcon icon={faUserPlus} className='third-icon' /> */}


                                    </div>
                                    <div className='card-footer mid-footer'>
                                        <div className='mid-time'>
                                            {/* <FontAwesomeIcon icon={faClock} /> */}
                                            <i className='time'></i>
                                            <span className='text-time'>12:22 Hours</span>
                                        </div>
                                        <div className='mid-date'>
                                            {/* <FontAwesomeIcon icon={faCalendar} /> */}
                                            <i className='calendar'></i>
                                            <span className='text-date'>12/12/2012</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 course-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className='card-title course-card-title'>
                                        <h5>Course Alfa</h5>
                                        <FontAwesomeIcon icon={faEllipsisH} className='icon-title' />
                                    </div>
                                    <p className="card-text">Most of you are familiar with this Course, in this course...</p>
                                    <div className='mid-card'>
                                        <FontAwesomeIcon icon={faUserCircle} />
                                        <FontAwesomeIcon icon={faUserCircle} className='sec-icon' />
                                        <span className='mid-text'>Enrolled students</span>
                                        <span className='mid-num'>90%</span>
                                        {/* <FontAwesomeIcon icon={faUserPlus} className='third-icon' /> */}


                                    </div>
                                    <div className='card-footer mid-footer'>
                                        <div className='mid-time'>
                                            {/* <FontAwesomeIcon icon={faClock} /> */}
                                            <i className='time'></i>
                                            <span className='text-time'>12:22 Hours</span>
                                        </div>
                                        <div className='mid-date'>
                                            {/* <FontAwesomeIcon icon={faCalendar} /> */}
                                            <i className='calendar'></i>
                                            <span className='text-date'>12/12/2012</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 course-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className='card-title course-card-title'>
                                        <h5>Course Alfa</h5>
                                        <FontAwesomeIcon icon={faEllipsisH} className='icon-title' />
                                    </div>
                                    <p className="card-text">Most of you are familiar with this Course, in this course...</p>
                                    <div className='mid-card'>
                                        <FontAwesomeIcon icon={faUserCircle} />
                                        <FontAwesomeIcon icon={faUserCircle} className='sec-icon' />
                                        <span className='mid-text'>Enrolled students</span>
                                        <span className='mid-num'>90%</span>
                                        {/* <FontAwesomeIcon icon={faUserPlus} className='third-icon' /> */}


                                    </div>
                                    <div className='card-footer mid-footer'>
                                        <div className='mid-time'>
                                            {/* <FontAwesomeIcon icon={faClock} /> */}
                                            <i className='time'></i>
                                            <span className='text-time'>12:22 Hours</span>
                                        </div>
                                        <div className='mid-date'>
                                            {/* <FontAwesomeIcon icon={faCalendar} /> */}
                                            <i className='calendar'></i>
                                            <span className='text-date'>12/12/2012</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 course-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className='card-title course-card-title'>
                                        <h5>Course Alfa</h5>
                                        <FontAwesomeIcon icon={faEllipsisH} className='icon-title' />
                                    </div>
                                    <p className="card-text">Most of you are familiar with this Course, in this course...</p>
                                    <div className='mid-card'>
                                        <FontAwesomeIcon icon={faUserCircle} />
                                        <FontAwesomeIcon icon={faUserCircle} className='sec-icon' />
                                        <span className='mid-text'>Enrolled students</span>
                                        <span className='mid-num'>90%</span>
                                        {/* <FontAwesomeIcon icon={faUserPlus} className='third-icon' /> */}


                                    </div>
                                    <div className='card-footer mid-footer'>
                                        <div className='mid-time'>
                                            {/* <FontAwesomeIcon icon={faClock} /> */}
                                            <i className='time'></i>
                                            <span className='text-time'>12:22 Hours</span>
                                        </div>
                                        <div className='mid-date'>
                                            {/* <FontAwesomeIcon icon={faCalendar} /> */}
                                            <i className='calendar'></i>
                                            <span className='text-date'>12/12/2012</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className='btn btn-lg btn-block courses-btn2'><FontAwesomeIcon icon={faPlusCircle} /> New Courses</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Content
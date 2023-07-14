import React from 'react'
import { Fragment } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useState } from 'react';
import './sass/content.scss'
function CoursesList() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleIconClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <Fragment>
            <Sidebar isOpen={isSidebarOpen} />
            <Navbar handleIconClick={handleIconClick} />
            <div className='course-content'>
                <div className='content-wrapper'>
                    <div className='content-heading'>
                        <div className='row heading-row'>
                            <div className='col-md-6'>
                                <h4>Courses List</h4>
                            </div>
                            <div className='col-md-6'></div>
                        </div>
                    </div>
                    <div className='content-body'>
                        <div className='course-top'>
                            <div className='row course-row'>
                                <div className='col-md-3'>
                                    <div className='course-card'>
                                        {/* <div className='course-card-body'>
                                            <div className='icon'></div>
                                            <div className='data'>
                                                <p>Total Course</p>
                                                <span>12</span>
                                            </div>
                                        </div> */}
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <div className='icon'></div>
                                            </div>
                                            <div className='col-md-8'>
                                                <div className='data'>
                                                    <p>Total Course</p>
                                                    <span>12</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='course-card'>
                                        <div className='course-card-body'>
                                            <div className='icon'></div>
                                            <div className='data'>
                                                <p>Total Course</p>
                                                <span>12</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='course-card'>
                                        <div className='course-card-body'>
                                            <div className='icon'></div>
                                            <div className='data'>
                                                <p>Total Course</p>
                                                <span>12</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='course-card'>
                                        <div className='course-card-body'>
                                            <div className='icon'></div>
                                            <div className='data'>
                                                <p>Total Course</p>
                                                <span>12</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CoursesList
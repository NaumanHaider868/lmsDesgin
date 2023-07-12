import React from 'react'
import '././sass/content.scss'
import { useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

function DashBoard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleIconClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div>
            <Sidebar isOpen={isSidebarOpen} />
            <Navbar handleIconClick={handleIconClick} />
            <div className='dashboard-content'>
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row dashboard-content-row">
                            <div className="col-sm-6">
                                <h4 className='pl heading-dash'>Dashboard</h4>
                            </div>
                            <div className="col-sm-6"></div>
                        </div>
                    </div>
                </section>

                <div className='page-dash-content'>
                    <div className="row page-dash-content-row">
                        <div className='col-md-8'>
                            <div className='row page-dash-col-8-row'>
                                <div className="col-md-6 dash-card">
                                    <div className="card">
                                        <div className="card-body dash-card-body">
                                            <div className='card-title'>
                                                <h5 style={{ width: '172px' }}>Course Type Daily Sales</h5>
                                            </div>
                                            <div className='row dash-card-body-row'>
                                                <div className='col-md-3 col-3 first-item'>
                                                    <div className='item-content' style={{border:'none'}}>
                                                        <span>20</span>
                                                        <p>Live Class</p>
                                                    </div>

                                                </div>
                                                <div className='col-md-3 col-3 sec-item'>
                                                    <div className='item-content'>
                                                        <span>30</span>
                                                        <p>Course</p>
                                                    </div>

                                                </div>
                                                <div className='col-md-3 col-3 third-item'>
                                                    <div className='item-content'>
                                                        <span>30</span>
                                                        <p>Meetings</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='main-item'>
                                                <div className='dash-icon-div color-pink'>
                                                    <i className='main-icon1'></i>
                                                </div>
                                                <div className='main-text'>
                                                    <span>Today Sales</span>
                                                    <p>0</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 dash-card">
                                    <div className="card">
                                        <div className="card-body dash-card-body">
                                            <div className='card-title'>
                                                <h5 style={{ width: '122px' }}>Platform Income</h5>
                                            </div>
                                            <div className='row dash-card-body-row'>
                                                <div className='col-md-3 col-3 first-item'>
                                                    <div className='item-content' style={{border:'none'}}>
                                                        <span>20</span>
                                                        <p>Today</p>
                                                    </div>

                                                </div>
                                                <div className='col-md-3 col-3 sec-item'>
                                                    <div className='item-content'>
                                                        <span>20</span>
                                                        <p>Today</p>
                                                    </div>

                                                </div>
                                                <div className='col-md-3 col-3 third-item'>
                                                    <div className='item-content'>
                                                        <span>0</span>
                                                        <p>Today</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='main-item'>
                                                <div className='dash-icon-div color-orange'>
                                                    <i className='main-icon2'></i>
                                                </div>
                                                <div className='main-text'>
                                                    <span>Today Income</span>
                                                    <p>0</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* </div> */}
                                {/* <div className='row'> */}
                                <div className="col-md-6 dash-card">
                                    <div className="card">
                                        <div className="card-body dash-card-body">
                                            <div className='card-title'>
                                                <h5 style={{ width: '87px' }}>Sales Count</h5>
                                            </div>
                                            <div className='row dash-card-body-row'>
                                                <div className='col-md-3 col-3 first-item'>
                                                    <div className='item-content' style={{border:'none'}}>
                                                    <span>20</span>
                                                    <p>Today</p>
                                                    </div>
                                                    
                                                </div>
                                                <div className='col-md-3 col-3 sec-item'>
                                                    <div className='item-content'>
                                                    <span>30</span>
                                                    <p>Month</p>
                                                    </div>
                                                    
                                                </div>
                                                <div className='col-md-3 col-3 third-item'>
                                                    <div className='item-content'>
                                                    <span>30</span>
                                                    <p>Year</p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                            <div className='main-item'>
                                                <div className='dash-icon-div color-green'>
                                                    <i className='main-icon3'></i>
                                                </div>
                                                <div className='main-text'>
                                                    <span>Today Sales</span>
                                                    <p>0</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 dash-card card-4">
                                    <div className="card">
                                        <div className="card-body dash-card-body">
                                            <div className='card-title'>
                                                <h5 style={{ width: '118px' }}>New Comments</h5>
                                            </div>
                                            <div className='row dash-card-body-row'>
                                                <div className='col-md-3 col-3 first-item'>
                                                    <div className='item-content' style={{border:'none'}}>
                                                        <span>20</span>
                                                        <p>Recent</p>
                                                    </div>

                                                </div>
                                                <div className='col-md-3 col-3 sec-item'>
                                                    <div className='item-content'>
                                                        <span>30</span>
                                                        <p>Today</p>
                                                    </div>

                                                </div>
                                                <div className='col-md-3 col-3 third-item'>
                                                    <div className='item-content'>
                                                        <span>30</span>
                                                        <p>Month</p>
                                                    </div>

                                                </div>
                                                <div className='col-md-3 col-3 forth-item'>
                                                    <div className='item-content'>
                                                        <span>30</span>
                                                        <p>Year</p>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='main-item'>
                                                <div className='dash-icon-div color-light-blue'>
                                                    <i className='main-icon4'></i>
                                                </div>
                                                <div className='main-text'>
                                                    <span>Today Sales</span>
                                                    <p>60</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-4 dash-double-card'>
                            <div className="card double-card">
                                <div className="card-body dash-card-body">
                                    <div className='card-items'>
                                        <div className='main-item'>
                                            <div className='icons color-light-blue'>
                                                <i className='icon1'></i>
                                            </div>
                                            <div className='dash-double-text'>
                                                <span>New Sale</span>
                                                <p>20</p>
                                            </div>
                                        </div>
                                        <div className='main-item'>
                                            <div className='icons color-light-blue'>
                                                <i className='icon2'></i>
                                            </div>
                                            <div className='dash-double-text'>
                                                <span>New Support Ticket</span>
                                                <p>18</p>
                                            </div>

                                        </div>
                                        <div className='main-item' style={{ border: 'none' }}>
                                            <div className='icons color-light-blue'>
                                                <i className='icon3'></i>
                                            </div>
                                            <div className='dash-double-text'>
                                                <span>Pending Review Courses</span>
                                                <p>12</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>


            </div >
        </div>

    )
}

export default DashBoard
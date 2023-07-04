import React from 'react'
import '././sass/content.scss'

function DashBoard() {
    return (
        <div className='dashboard-content'>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                            <h4 className='pl heading-dash'>Dashboard</h4>
                        </div>
                        <div className="col-sm-6"></div>
                    </div>
                </div>
            </section>

            <div className='page-dash-content'>
                <div className="row">
                    <div className='col-md-8'>
                        <div className='row'>
                            <div className="col-md-6 dash-card">
                                <div className="card">
                                    <div className="card-body">
                                        <div className='card-title'>
                                            <h5 style={{ width: '172px' }}>Course Type Daily Sales</h5>
                                        </div>
                                        <div className='card-items'>
                                            <div className='first-item'>
                                                <span>20</span>
                                                <p>Live Class</p>
                                            </div>
                                            <div className='sec-item'>
                                                <span>20</span>
                                                <p>Course</p>
                                            </div>
                                            <div className='third-item'>
                                                <span>20</span>
                                                <p>Meeting</p>
                                            </div>
                                        </div>
                                        <div className='main-item'>
                                            <div className='main-icon-div-1'>
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
                                    <div className="card-body">
                                        <div className='card-title'>
                                            <h5 style={{ width: '122px' }}>Platform Income</h5>
                                        </div>
                                        <div className='card-items'>
                                            <div className='first-item'>
                                                <span>20</span>
                                                <p>Today</p>
                                            </div>
                                            <div className='sec-item'>
                                                <span>20</span>
                                                <p>Month</p>
                                            </div>
                                            <div className='third-item'>
                                                <span>0</span>
                                                <p>Year</p>
                                            </div>
                                        </div>
                                        <div className='main-item'>
                                            <div className='main-icon-div-2'>
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
                            <div className="col-md-6 dash-card">
                                <div className="card">
                                    <div className="card-body">
                                        <div className='card-title'>
                                            <h5 style={{ width: '87px' }}>Sales Count</h5>
                                        </div>
                                        <div className='card-items'>
                                            <div className='first-item'>
                                                <span>20</span>
                                                <p>Today</p>
                                            </div>
                                            <div className='sec-item'>
                                                <span>20</span>
                                                <p>Month</p>
                                            </div>
                                            <div className='third-item'>
                                                <span>20</span>
                                                <p>Year</p>
                                            </div>
                                        </div>
                                        <div className='main-item'>
                                            <div className='main-icon-div-3'>
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
                            <div className="col-md-6 dash-card">
                                <div className="card">
                                    <div className="card-body">
                                        <div className='card-title'>
                                            <h5 style={{ width: '118px' }}>New Comments</h5>
                                        </div>
                                        <div className='card-items'>
                                            <div className='first-item'>
                                                <span>20</span>
                                                <p>Recent</p>
                                            </div>
                                            <div className='sec-item'>
                                                <span>20</span>
                                                <p>Today</p>
                                            </div>
                                            <div className='third-item'>
                                                <span>60</span>
                                                <p>Month</p>
                                            </div>
                                            <div className='third-item'>
                                                <span>60</span>
                                                <p>Year</p>
                                            </div>
                                        </div>
                                        <div className='main-item'>
                                            <div className='main-icon-div-4'>
                                                <i className='main-icon4'></i>
                                            </div>
                                            <div className='main-text'>
                                                <span>Today Sales</span>
                                                <p>0</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 dash-double-card'>
                        <div className="card">
                            <div className="card-body">
                                <div className='card-items'>
                                    <div className='main-item'>
                                        <div className='icons'>
                                            <i className='icon1'></i>
                                        </div>
                                        <div className='first-text'>
                                            <span>New Sale</span>
                                            <p>20</p>
                                        </div>
                                    </div>
                                    <div className='main-item'>
                                        <div className='icons'>
                                            <i className='icon2'></i>
                                        </div>
                                        <div className='sec-text'>
                                            <span>New Support Ticket</span>
                                            <p>18</p>
                                        </div>

                                    </div>
                                    <div className='main-item'>
                                        <div className='icons'>
                                            <i className='icon3'></i>
                                        </div>
                                        <div className='third-text'>
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
    )
}

export default DashBoard
import React, { Fragment } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useState } from 'react';
import './sass/content.scss'

function Form() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleIconClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <Fragment>
            <Sidebar isOpen={isSidebarOpen} />
            <Navbar handleIconClick={handleIconClick} />
            <div className='my-container'>
                <div className='form-content'>
                    <div className='row form-row'>
                        <div className='col-md-8'>
                            <div className='heading'>
                                <h4>Form Control</h4>
                                <p>Form Is Used To Collect & Verify User Input Data. We Use Formik As Our Form Control Library, Most Of Our Form Components Were Compatible With Formik Binding.</p>
                            </div>

                            <div className='content'>
                                <div className='content-heading'>
                                    <h4>Basic</h4>
                                    <p>Sample usage of a simple form with validation.</p>
                                </div>
                                <div className='main-form-content'>
                                    <form>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="Enter email" />
                                        </div>
                                        <div className="form-group">
                                            <label>User Name</label>
                                            <input type="text" className="form-control" placeholder="Name" />
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>
                                        <div className="form-check check">
                                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label">Remenber Me</label>
                                        </div>
                                        <div className='btns'>
                                            <button className="btn btn-default btn-reset">Reset</button>
                                            <button className="btn btn-primary btn-submit">Submit</button>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className='col-md-4'>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Form
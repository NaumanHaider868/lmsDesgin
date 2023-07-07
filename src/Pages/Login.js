import React from 'react'
import './sass/Login.scss'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='container-fluid'>
      <div className='row main-content-login'>

        <div className='col-md-5 '>
          <div className='bg-login'>
            <div className='content-login'>
              <div className='logo-login'>
                {/* <i class="fa fa-star" aria-hidden="true"></i> */}
                {/* <i class="fa-solid fa-star"></i> */}
                {/* <FontAwesomeIcon icon="fa-regular fa-star" /> */}
                {/*<i class="fas fa-star"></i>*/}
                <h4>Logo Star</h4>
              </div>

              <div className='side-content-login'>
                <h4>LMS Learning Management system</h4>
                <p>
                  is an online course marketplace with a pile of features that helps you to run your online education business easily. This product helps instructors and students to get in touch together and share knowledge.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className='col-md-7'>
          <div className='login-content'>
            <div className='login-heading'>
              <h4>Welcome back!</h4>
              <p>Please enter your credential to sign in!</p>
            </div>
            <form>
              <div className='form-row'>
                <div className='form-group col-md-12'>
                  <label>User Name</label>
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div className='form-group col-md-12'>
                  <label>Password</label>
                  <input type="password" class="form-control" placeholder="Password" />
                </div>
                <div class="form-check">
                  <div className='my-div'>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                  </div>
                  <span className='forget-text'>Forget Password?</span>
                </div>
                <Link to='/dashboard' style={{ textDecoration: 'none' }} className="btn btn-block btn-sign">Sign In</Link>

                <div className='login-bottom'>
                  <p>Don't have an account yet? <span>Sign up</span></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
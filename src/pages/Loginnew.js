import React from 'react';
import './Common.css';
import socialImg from '../assets/images/social.PNG';
import socialImgWithTitle from '../assets/images/social-with-title.PNG';
import socialOnlyTitle from '../assets/images/social-only-title.PNG';

const Login = () => {
    return (
        <div className='center-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7 col-sm-12 d-flex flex-column justify-content-center align-items-center'>
                        <img className='socialImgWithTitle' src={socialImgWithTitle} />
                        <img className='socialOnlyTitle' src={socialOnlyTitle} />
                    </div>
                    <div className='col-md-5 col-sm-12'>
                        <div class="card shadow shadow-md">
                            <div class="card-body px-5">
                                <h4 className='text-center my-4 fw-bold'>Log In</h4>
                                <form>
                                    <input className='mb-2 p-2 form-control input-color' type='text' placeholder='Phone number, username or email' />
                                    <input className='p-2 form-control input-color' type='password' placeholder='Password' />
                                    <div className='mt-3 d-grid'>
                                        <button className='custom-btn custom-btn-blue'>Log In</button>
                                    </div>
                                    <div className='my-3'>
                                        <span>
                                            <hr className='text-muted dash-line d-inline-block' />
                                            <span className='text-top'>OR</span>
                                            <hr className='text-muted dash-line d-inline-block' />
                                        </span>
                                    </div>
                                    <div className='mt-3 mb-5 d-grid'>
                                        <button className='custom-btn custom-btn-white'>
                                            <span className='text-muted' style={{fontSize: '13px'}}>Don't have an account?</span>
                                            <span className='ms-1 text-info' style={{fontSize: '14px', fontWeight: '500'}}>Sign Up</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
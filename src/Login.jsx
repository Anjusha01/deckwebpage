import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className=" container-fluid mt-5 shadow-lg w-25 rounded  bg-light">
            
            <form className=' p-4 rounded'>
                <h1 className='text-center fw-light h1 fs-1 text-danger'>LOGIN</h1>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" />
                </div>
                <div className="mb-3 d-flex justify-content-center ">
                    <Link to="/Login/User" className="btn btn-danger form-control rounded-pill">Login</Link>
                </div>
                <div className="mb-3 d-flex justify-content-center ">
                    <Link to="/Register" className="btn btn-danger form-control rounded-pill">Register</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;

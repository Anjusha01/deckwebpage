import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='container-fluid w-50 bg-light mt-5 px-5 py-3 rounded shadow-lg d-flex justify-content-center'>
      <form action="" className='w-75'>
      <h1 className='text-center fw-light h1 fs-1 text-danger'>REGISTER</h1>
        <div className="mb-3">
          <label htmlFor="fname" className='form-label'>First Name</label>
          <input type="text" id='fname' className='form-control' />
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className='form-label'>Last Name</label>
          <input type="text" id='lname' className='form-control'/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className='form-label'>Mail Id</label>
          <input type="email" id='email' className='form-control'/>
        </div>
        <div className="mb-3">
          <label htmlFor="newpass" className='form-label'>New Password</label>
          <input type="password" id='newpass' className='form-control'/>
        </div>
        <div className="mb-3">
          <label htmlFor="confpass" className='form-label'>Confirm Password</label>
          <input type="password" id='confpass' className='form-control'/>
        </div>
        <div className="mb-3 d-flex justify-content-center ">
              <Link to="" className="btn btn-danger rounded-pill form-control">Register</Link>
          </div>
      </form>
    </div>
  )
}

export default Register
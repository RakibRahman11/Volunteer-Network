import React from 'react';
import './Volunteer.css'
import logo from '../../images/logos/Group 1329.png'

const Volunteer = () => {
    return (
        <div className='bg-color py-5'>
            <img src={logo} alt="" width="250" height="100" />
            <div className="google-login bg-white mt-5 py-5 w-50 mx-auto border border-dark">
                <h3 className='fw-bold'>Register as a Volunteer</h3>
                <input placeholder='Full Name' className='text-start btn btn-outline-light border-bottom mb-2 d-block mx-auto' type="text" name="" id="" />
                <input placeholder='Username or Email' className='text-start btn btn-outline-light border-bottom mb-2 d-block mx-auto' type="email" name="" id="" />
                <input className='text-start btn btn-outline-light border-bottom mb-2 d-block mx-auto' type="date" name="" id="" />
                <input placeholder='Description' className='text-start btn btn-outline-light border-bottom mb-2 d-block mx-auto' type="text" name="" id="" />
                <input placeholder='Activities' className='text-start btn btn-outline-light border-bottom mb-2 d-block mx-auto' type="text" name="" id="" />
                <button class="btn btn-primary mt-3" type="button">Registration</button>
            </div>

        </div>
    );
};

export default Volunteer;
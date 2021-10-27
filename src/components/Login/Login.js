import React from 'react';
import './Login.css'
import logo from '../../images/logos/Group 1329.png'
import google from '../../images/logos/search.png'
import useFirebase from '../../hooks/useFirebase';
import firebaseInit from '../../Firebase/firebase.init';

firebaseInit()

const Login = () => {
    const { googleSignIn } = useFirebase()
    return (
        <div className='bg-color py-5'>
            <div className="container">
                <img src={logo} alt="" width="250" height="100" />
                <div className="google-login bg-white mt-5 py-5 w-50 mx-auto">
                    <h3 className='fw-bold'>Login With</h3>
                    <div class="mt-4">
                        <button onClick={googleSignIn} class="btn rounded-pill border border-dark fw-bolder pe-5 py-2" type="button"> <img src={google} className='google me-5' alt="" /> Continue with Google</button>
                    </div>
                    <p className='mt-2'>Don’t have an account? Create an account</p>
                </div>
            </div>
        </div>
    );
};

export default Login;
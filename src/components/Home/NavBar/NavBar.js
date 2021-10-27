import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import logo from '../../../images/logos/Group 1329.png'
import firebaseInit from '../../../Firebase/firebase.init';
import useFirebase from '../../../hooks/useFirebase';
import photo from '../../../images/logos/users-alt 1.png'

firebaseInit()

const NavBar = () => {
    const { user, logout } = useFirebase()
    return (
        <div className='bg-color'>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container w-100 d-flex justify-content-between align-content-between">
                    <div>
                        <Link className="navbar-brand" to="/home">
                            <img src={logo} alt="" width="140" height="60" />
                        </Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="mb-2 navbar-nav me-auto mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Donation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Events</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn-text me-2 nav-link btn btn-outline-primary" to="/">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-outline-dark" to="/">Admin</Link>
                            </li>
                        </ul>

                        {user?.displayName && <img className='rounded-circle me-2' src={user.photoURL} alt="" />}

                        {user.displayName}

                        {/* {isLogin.displayName} */}
                        <form className="d-flex">
                            {
                                user.displayName ?
                                    <button onClick={logout} className='btn '>Logout</button> :
                                    <Link className="navbar-brand" to="/login">
                                        {user.displayName} <img src={photo} alt="" width="30" height="25" />
                                    </Link>
                            }
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    return (
        <div className='navbar'>
            <div className='nav-item'>
                <NavLink to="/dashboard" className='nav-link'>
                    <h2>Me</h2>
                </NavLink>
                <div className='nav-sub-links'>
                    <a>About<div className='white-bg' /></a>
                    <p>•</p>
                    <a>LinkedIn<div className='white-bg' /></a>
                </div>
            </div>
            <div className='nav-item'>
                <NavLink to="/dashboard" className='nav-link'>
                    <h2>You</h2>
                </NavLink>
                <div className='nav-sub-links'>
                    <a>Give a critique<div className='white-bg' /></a>
                    <p>•</p>
                    <a>Reach out<div className='white-bg' /></a>
                </div>
            </div>
            <div className='nav-item'>
                <NavLink to="/dashboard" className='nav-link'>
                    <h2>Site</h2>
                </NavLink>
                <div className='nav-sub-links'>
                    <a>Fun Settings<div className='white-bg' /></a>
                    <p>•</p>
                    <a>Github Repo<div className='white-bg' /></a>
                </div>
            </div>

        </div>
    );
}

export default Navbar;
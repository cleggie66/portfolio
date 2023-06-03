import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    return (
        <div className='navbar'>
            <NavLink to="/dashboard" className='nav-link'>
                <h2>Me</h2>
            </NavLink>
            <NavLink to="/dashboard" className='nav-link'>
                <h2>You</h2>
            </NavLink>
            <NavLink to="/dashboard" className='nav-link'>
                <h2>Site</h2>
            </NavLink>
        </div>
    );
}

export default Navbar;
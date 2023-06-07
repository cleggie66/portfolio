import React from 'react';
import { useDispatch } from "react-redux"
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { resetPage, setPage } from '../../store/viewing';

function Navbar() {
    const dispatch = useDispatch()

    const changePage = (page) => {
        dispatch(setPage(page));

        setTimeout(() => {
            dispatch(resetPage())
        }, 3000);
    };

    return (
        <div className='navbar'>
            <div className='nav-item'>
                <NavLink to="/dashboard" className='nav-link'>
                    <h2>Me</h2>
                </NavLink>
                <div className='nav-sub-links'>
                    <div onClick={() => changePage("about")}>About<div className='white-bg' /></div>
                    <p>•</p>
                    <div onClick={() => changePage("home")}>Projects<div className='white-bg' /></div>
                </div>
            </div>
            <div className='nav-item'>
                <NavLink to="/dashboard" className='nav-link'>
                    <h2>You</h2>
                </NavLink>
                <div className='nav-sub-links'>
                    <div onClick={() => changePage("critique")}>Give a critique<div className='white-bg' /></div>
                    <p>•</p>
                    <div onClick={() => changePage("reachOut")}>Reach out<div className='white-bg' /></div>
                </div>
            </div>
            <div className='nav-item'>
                <NavLink to="/dashboard" className='nav-link'>
                    <h2>Site</h2>
                </NavLink>
                <div className='nav-sub-links'>
                    <div onClick={() => changePage("funSettings")}>Fun Settings<div className='white-bg' /></div>
                    <p>•</p>
                    <a href=>Github Repo<div className='white-bg' /></a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
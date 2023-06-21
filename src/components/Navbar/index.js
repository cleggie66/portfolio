import React from 'react';
import { useDispatch } from "react-redux"
import { resetPage, setPage } from '../../store/viewing';
import './Navbar.css';


function Navbar() {
    const dispatch = useDispatch()

    const changePage = (page) => {
        dispatch(setPage(page));

        setTimeout(() => {
            dispatch(resetPage())
        }, 1000);
    };

    return (
        <div className='navbar'>
            <div className='nav-item'>
                <div className='nav-link'>
                    <h2>About</h2>
                </div>
                <div className='nav-sub-links'>
                    <div
                        onClick={() => changePage("about")}
                        className='nav-sub-link'
                    >
                        Bio<div className='white-bg' />
                    </div>
                    <p>•</p>
                    <a
                        href="https://drive.google.com/file/d/1Q1Iqbwz_Q2xbUBHG_nfkTLyb-bDS0tYe/view?usp=sharing"
                        className='nav-sub-alink'
                        target="_blank" rel="noopener noreferrer"
                        >
                        Resume
                    </a>
                </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                    <h2>Projects</h2>
                </div>
                <div className='nav-sub-links'>
                    <div
                        onClick={() => changePage("home")}
                        className='nav-sub-link'
                    >
                        MyCare<div className='white-bg' />
                    </div>
                    <p>•</p>
                    <div
                        onClick={() => changePage("home")}
                        className='nav-sub-link'
                    >
                        Banter<div className='white-bg' />
                    </div>
                    <p>•</p>
                    <div
                        onClick={() => changePage("home")}
                        className='nav-sub-link'
                    >
                        AirBn2B<div className='white-bg' />
                    </div>
                </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                    <h2>Contact</h2>
                </div>
                <div className='nav-sub-links'>
                    <div
                        onClick={() => changePage("critique")}
                        className='nav-sub-link'
                    >
                        Give a critique<div className='white-bg' />
                    </div>
                    <p>•</p>
                    <div
                        onClick={() => changePage("reachOut")}
                        className='nav-sub-link'
                    >
                        Message me<div className='white-bg' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
import React from 'react';
import { useDispatch } from "react-redux"
import { div } from 'react-router-dom';
import './Navbar.css';
import { resetPage, setPage } from '../../store/viewing';

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
                    <h2>Me</h2>
                </div>
                <div className='nav-sub-links'>
                    <div
                        onClick={() => changePage("about")}
                        className='nav-sub-link'
                    >
                        About<div className='white-bg' />
                    </div>
                    <p>•</p>
                    <div
                        onClick={() => changePage("home")}
                        className='nav-sub-link'
                    >
                        Projects<div className='white-bg' />
                    </div>
                </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                    <h2>You</h2>
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
                        Reach out<div className='white-bg' />
                    </div>
                </div>
            </div>
            <div className='nav-item'>
                <div className='nav-link'>
                    <h2>Site</h2>
                </div>
                <div className='nav-sub-links'>
                    <div
                        onClick={() => changePage("funSettings")}
                        className='nav-sub-link'
                    >
                        Fun Settings<div className='white-bg' />
                    </div>
                    <p>•</p>
                    <a
                        href="https://github.com/cleggie66/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='nav-sub-alink'
                    >
                        Github Repo<div className='white-bg' />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
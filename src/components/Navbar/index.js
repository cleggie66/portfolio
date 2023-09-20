import React from 'react';
import { useDispatch } from "react-redux"
import { resetPage, setPage } from '../../store/viewing';
import { setProject } from '../../store/settings';
import LetterGenerator from '../LetterGenerator';
import './Navbar.css';
import { useState } from 'react';


function Navbar() {
    const dispatch = useDispatch();

    const [header1Hover, setHeader1Hover] = useState(false);
    const [header2Hover, setHeader2Hover] = useState(false);
    const [header3Hover, setHeader3Hover] = useState(false);


    const changePage = (page) => {
        dispatch(setPage(page));

        setTimeout(() => {
            dispatch(resetPage())
        }, 1000);
    };


    return (
        <div className='navbar'>
            <div
                className='nav-item'
                onMouseOver={() => setHeader1Hover(true)}
                onMouseLeave={() => {
                    setTimeout(() => {
                        setHeader1Hover(false)
                    }, 3000);
                }}
            >
                <div className='nav-link'>
                    <div
                        onClick={() => changePage("about")}
                        className='word'
                    >
                        <LetterGenerator letter={"a"} active={header1Hover} />
                        <LetterGenerator letter={"b"} active={header1Hover} />
                        <LetterGenerator letter={"o"} active={header1Hover} />
                        <LetterGenerator letter={"u"} active={header1Hover} />
                        <LetterGenerator letter={"t"} active={header1Hover} />
                    </div>
                </div>
                <div className='nav-sub-links'>
                    <div
                        onClick={() => changePage("about")}
                        className='nav-sub-link'
                    >
                        Bio
                        <div className='white-bg' />
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
            <div
                className='nav-item'
                onMouseOver={() => setHeader2Hover(true)}
                onMouseLeave={() => {
                    setTimeout(() => {
                        setHeader2Hover(false)
                    }, 3000);
                }}
            >
                <div className='nav-link'>
                    <div
                        onClick={() => {
                            dispatch(setProject(""));
                            changePage("home");
                        }}
                        className='word'
                    >
                        <LetterGenerator letter={"p"} active={header2Hover} />
                        <LetterGenerator letter={"r"} active={header2Hover} />
                        <LetterGenerator letter={"o"} active={header2Hover} />
                        <LetterGenerator letter={"j"} active={header2Hover} />
                        <LetterGenerator letter={"e"} active={header2Hover} />
                        <LetterGenerator letter={"c"} active={header2Hover} />
                        <LetterGenerator letter={"t"} active={header2Hover} />
                        <LetterGenerator letter={"s"} active={header2Hover} />
                    </div>
                </div>
                <div className='nav-sub-links'>
                    <div
                        onClick={() => {
                            dispatch(setProject("myCare"));
                            changePage("home");
                        }}
                        className='nav-sub-link'
                    >
                        MyCare
                        <div className='white-bg' />
                    </div>
                    <p>•</p>
                    <div
                        onClick={() => {
                            dispatch(setProject("Banter"));
                            changePage("home");
                        }}
                        className='nav-sub-link'
                    >
                        Banter
                        <div className='white-bg' />
                    </div>
                    <p>•</p>
                    <div
                        onClick={() => {
                            dispatch(setProject("AirBn2B"));
                            changePage("home");
                        }}
                        className='nav-sub-link'
                    >
                        AirBn2B<div className='white-bg' />
                    </div>
                </div>
            </div>
            <div
                className='nav-item'
                onMouseOver={() => setHeader3Hover(true)}
                onMouseLeave={() => {
                    setTimeout(() => {
                        setHeader3Hover(false)
                    }, 3000);
                }}
            >
                <div className='nav-link'>
                    <div
                        onClick={() => changePage("reachOut")}
                        className='word'
                    >
                        <LetterGenerator letter={"c"} active={header3Hover} />
                        <LetterGenerator letter={"o"} active={header3Hover} />
                        <LetterGenerator letter={"n"} active={header3Hover} />
                        <LetterGenerator letter={"t"} active={header3Hover} />
                        <LetterGenerator letter={"a"} active={header3Hover} />
                        <LetterGenerator letter={"c"} active={header3Hover} />
                        <LetterGenerator letter={"t"} active={header3Hover} />
                    </div>
                </div>
                <div className='nav-sub-links'>
                    <div
                        onClick={() => changePage("critique")}
                        className='nav-sub-link'>
                        Give a critique
                        <div className='white-bg' />
                    </div>
                    <p>•</p>
                    <div
                        onClick={() => changePage("reachOut")}
                        className='nav-sub-link'>
                        Message me
                        <div className='white-bg' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
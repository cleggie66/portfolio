
import { setCursor, setProject, setTheme } from "../../store/settings";
import { useDispatch, useSelector } from "react-redux";

import "./Footer.css"
import { useState } from "react";
import { resetPage, setPage } from "../../store/viewing";

function Footer() {
    const dispatch = useDispatch();
    const [visibility, setVisibility] = useState(true);

    const settingsState = useSelector(state => state.settings);
    const theme = settingsState.theme;
    const cursor = settingsState.cursor;

    const changePage = (page) => {
        dispatch(setPage(page));

        setTimeout(() => {
            dispatch(resetPage())
        }, 1000);
    };

    return (
        <>
            <div className={visibility ? "mobile-menu-bg" : "mobile-menu-bg-hidden"}>
                <div
                    className='nav-item'
                >
                    <div className='nav-link'>
                        <h2
                            onClick={() => {
                                setVisibility(false);
                                changePage("about");
                            }}
                        >
                            About
                        </h2>
                    </div>
                </div>
                <div
                    className='nav-item'
                >
                    <div className='nav-link'>
                        <h2
                            onClick={() => {
                                dispatch(setProject(""));
                                setVisibility(false);
                                changePage("home");
                            }}
                        >
                            Projects
                        </h2>
                    </div>
                </div>
                <div
                    className='nav-item'
                >
                    <div className='nav-link'>
                        <h2
                            onClick={() => {
                                setVisibility(false);
                                changePage("reachOut");
                            }}
                        >
                            Contact
                        </h2>
                    </div>
                </div>
            </div>
            <div className="site-settings">
                {theme === "dark" && (
                    <i
                        className="fa-solid fa-sun"
                        onClick={() => dispatch(setTheme("light"))}
                    />
                )}
                {theme === "light" && (
                    <i
                        className="fa-solid fa-moon"
                        onClick={() => dispatch(setTheme("dark"))}
                    />
                )}
            </div>
            <div className="footer-icons">
                <a href="https://github.com/cleggie66" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github" />
                </a>
                <a href="https://www.linkedin.com/in/caleb-cleghorn-31843b189/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin" />
                </a>
                <a href="mailto: caleb@cleghorn.org" target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-envelope" />
                </a>
                <a href="https://drive.google.com/file/d/1Q1Iqbwz_Q2xbUBHG_nfkTLyb-bDS0tYe/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer">
                    <i className="fa-solid fa-file" />
                </a>
            </div>
            <div
                className="mobile-nav-bars"
                onClick={() => setVisibility(!visibility)}>
                <i
                    className="fa-solid fa-bars"
                />

            </div>
        </>
    )
}

export default Footer;
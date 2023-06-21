
import { setCursor, setTheme } from "../../store/settings";
import { useDispatch, useSelector } from "react-redux";

import "./Footer.css"

function Footer() {
    const dispatch = useDispatch()
    const settingsState = useSelector(state => state.settings);
    const theme = settingsState.theme;
    const cursor = settingsState.cursor;
    return (
        <>
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
        </>
    )
}

export default Footer;
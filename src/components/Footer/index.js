import "./Footer.css"

function Footer() {

    return (
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
        </div>
    )
}

export default Footer;
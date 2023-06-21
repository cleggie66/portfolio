import { useState } from "react"
// import { useEffect } from "react"
// import Ping from "ping.js";
import { useDispatch, useSelector } from "react-redux";

import airBn2BPreview from "../../media/project-previews/AirBn2B.mp4";
import banterPreview from "../../media/project-previews/banter.mp4";
import myCarePreview from "../../media/project-previews/myCare.mp4";
import myCareLogoLight from "../../media/project-logos/myCare-logo-light.gif";
import myCareLogoDark from "../../media/project-logos/myCare-logo-dark.gif";
import banterLogoLight from "../../media/project-logos/banter-logo-light.gif";
import banterLogoDark from "../../media/project-logos/banter-logo-dark.gif";
import airbnbLogo from "../../media/project-logos/AirBn2B-logo.png";
import { setProject } from "../../store/settings";
import "./ProjectIndex.css"
import "./ProjectIndexIcons.css"


function ProjectIndex({ visibility }) {
    const dispatch = useDispatch();
    const [project1, setProject1] = useState("project-preview-active");
    const [project2, setProject2] = useState("project-preview-idle");
    const [project3, setProject3] = useState("project-preview-idle");
    const [projectLink, setProjectLink] = useState("https://mycare.onrender.com");
    const settingsState = useSelector(state => state.settings);
    const theme = settingsState.theme;
    const activeProject = settingsState.project;
    const iconTheme = `${theme === "light" ? "dark" : "light"}`;


    // useEffect(() => {
    //     const p = new Ping();

    //     p.ping("https://click-me-kutu.onrender.com")
    //         .then(data => {
    //             console.log("Successful ping: " + data);
    //         })
    //         .catch(data => {
    //             console.error("Ping failed: " + data);
    //         })
    //     p.ping("https://airbn2b.onrender.com/")
    //         .then(data => {
    //             console.log("Successful ping: " + data);
    //         })
    //         .catch(data => {
    //             console.error("Ping failed: " + data);
    //         })
    //     p.ping("https://mycare.onrender.com")
    //         .then(data => {
    //             console.log("Successful ping: " + data);
    //         })
    //         .catch(data => {
    //             console.error("Ping failed: " + data);
    //         })
    //     p.ping("https://bit-of-banter.onrender.com/")
    //         .then(data => {
    //             console.log("Successful ping: " + data);
    //         })
    //         .catch(data => {
    //             console.error("Ping failed: " + data);
    //         })

    // }, [])

    return (
        <div className={visibility}>
            <div className="project-index">
                <div className="projects-list">
                    <h2>Projects</h2>
                    <hr />
                    <a href={projectLink} target="_blank" rel="noopener noreferrer">
                        <div
                            className={activeProject === "myCare" ? "active-project-line" : "project-line"}
                            onMouseEnter={() => {
                                setProject1("project-preview-active");
                                setProject2("project-preview-idle");
                                setProject3("project-preview-idle");
                                setProjectLink("https://mycare.onrender.com");
                                dispatch(setProject(""));
                            }}>
                            <h3 className="project-title">MyCare</h3>
                            <i className="fa-solid fa-chevron-left arrow" />
                            <img src={`https://skillicons.dev/icons?i=python&theme=${iconTheme}`} alt="icon" className="icon1" />
                            <img src={`https://skillicons.dev/icons?i=react&theme=${iconTheme}`} alt="icon" className="icon2" />
                            <img src={`https://skillicons.dev/icons?i=redux&theme=${iconTheme}`} alt="icon" className="icon3" />
                            <img src={`https://skillicons.dev/icons?i=flask&theme=${iconTheme}`} alt="icon" className="icon4" />
                            <img src={`https://skillicons.dev/icons?i=postgres&theme=${iconTheme}`} alt="icon" className="icon5" />
                            <div className={activeProject === "myCare" ? "active-project-description" : "project-description"}>
                                <p>A medical portal for patients to solve their healthcare needs and take action</p>
                                <img src={theme === "light" ? myCareLogoLight : myCareLogoDark} alt="project logo" className='project-preview-logo' />
                            </div>
                        </div>
                    </a>
                    <hr />
                    <a href={projectLink} target="_blank" rel="noopener noreferrer">
                        <div
                            className={activeProject === "Banter" ? "active-project-line" : "project-line"}
                            onMouseEnter={() => {
                                setProject1("project-preview-idle");
                                setProject2("project-preview-active");
                                setProject3("project-preview-idle");
                                setProjectLink("https://bit-of-banter.onrender.com/");
                                dispatch(setProject(""));
                            }}>
                            <h3 className="project-title">Banter</h3>
                            <i className="fa-solid fa-chevron-left arrow" />
                            <img src={`https://skillicons.dev/icons?i=python&theme=${iconTheme}`} alt="icon" className="icon1" />
                            <img src={`https://skillicons.dev/icons?i=babel&theme=${iconTheme}`} alt="icon" className="icon2" />
                            <img src={`https://skillicons.dev/icons?i=react&theme=${iconTheme}`} alt="icon" className="icon3" />
                            <img src={`https://skillicons.dev/icons?i=redux&theme=${iconTheme}`} alt="icon" className="icon4" />
                            <img src={`https://skillicons.dev/icons?i=flask&theme=${iconTheme}`} alt="icon" className="icon5" />
                            <div className={activeProject === "Banter" ? "active-project-description" : "project-description"}>
                                <p>A Slack clone where users can chat through direct messages and channels</p>
                                <img src={theme === "light" ? banterLogoLight : banterLogoDark} alt="project logo" className='project-preview-logo' />
                            </div>
                        </div>
                    </a>
                    <hr />
                    <a href={projectLink} target="_blank" rel="noopener noreferrer">
                        <div
                            className={activeProject === "AirBn2B" ? "active-project-line" : "project-line"}
                            onMouseEnter={() => {
                                setProject1("project-preview-idle");
                                setProject2("project-preview-idle");
                                setProject3("project-preview-active");
                                setProjectLink("https://airbn2b.onrender.com/");
                                dispatch(setProject(""));
                            }}>
                            <h3 className="project-title">AirBn2B</h3>
                            <i className="fa-solid fa-chevron-left arrow" />
                            <img src={`https://skillicons.dev/icons?i=js&theme=${iconTheme}`} alt="icon" className="icon1" />
                            <img src={`https://skillicons.dev/icons?i=express&theme=${iconTheme}`} alt="icon" className="icon2" />
                            <img src={`https://skillicons.dev/icons?i=react&theme=${iconTheme}`} alt="icon" className="icon3" />
                            <img src={`https://skillicons.dev/icons?i=redux&theme=${iconTheme}`} alt="icon" className="icon4" />
                            <img src={`https://skillicons.dev/icons?i=sequelize&theme=${iconTheme}`} alt="icon" className="icon5" />
                            <div className={activeProject === "AirBn2B" ? "active-project-description" : "project-description"}>
                                <p>A web app clone of Airbnb, made for intuitive and simple access to vacation rentals</p>
                                <img src={airbnbLogo} alt="project logo" className='project-preview-logo' />
                            </div>
                        </div>
                    </a>
                </div>
                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                    <div className="project-image-container">
                        <p className="call-to-action">VISIT WEBSITE</p>
                        <div className="white-cover" />
                        <video className={`${project1}`} loop={true} autoPlay="autoplay" muted>
                            <source src={myCarePreview} type="video/mp4" />
                        </video>
                        <video className={`${project2}`} loop={true} autoPlay="autoplay" muted>
                            <source src={banterPreview} type="video/mp4" />
                        </video>
                        <video className={`${project3}`} loop={true} autoPlay="autoplay" muted>
                            <source src={airBn2BPreview} type="video/mp4" />
                        </video>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ProjectIndex
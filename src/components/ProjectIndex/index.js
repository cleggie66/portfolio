import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import airBn2BPreview from "../../media/project-previews/AirBn2B.mp4";
import banterPreview from "../../media/project-previews/banter.mp4";
import myCarePreview from "../../media/project-previews/myCare.mp4";
import { setProject } from "../../store/settings";
import "./ProjectIndex.css"
import "./ProjectIndexIcons.css"


function ProjectIndex({ visibility }) {
    const dispatch = useDispatch();
    const [projectLink, setProjectLink] = useState("https://mycare.onrender.com");
    const settingsState = useSelector(state => state.settings);
    const theme = settingsState.theme;
    const activeProject = settingsState.project;
    const iconTheme = `${theme === "light" ? "dark" : "light"}`;

    return (
        <div className={visibility}>
            <div className="project-index">
                <div
                    onMouseLeave={() => dispatch(setProject(""))}
                    className="projects-list">
                    <h2>Featured</h2>
                    <hr />
                    <div
                        className={activeProject === "myCare" ? "active-project-line" : "project-line"}
                        onMouseEnter={() => {
                            setProjectLink("https://mycare.onrender.com");
                            dispatch(setProject("myCare"));
                        }}
                    >
                        <h3 className="project-title">MyCare</h3>
                        <i className="fa-solid fa-chevron-left arrow" />
                        <img src={`https://skillicons.dev/icons?i=python&theme=${iconTheme}`} alt="icon" className="icon1" />
                        <img src={`https://skillicons.dev/icons?i=react&theme=${iconTheme}`} alt="icon" className="icon2" />
                        <img src={`https://skillicons.dev/icons?i=redux&theme=${iconTheme}`} alt="icon" className="icon3" />
                        <img src={`https://skillicons.dev/icons?i=flask&theme=${iconTheme}`} alt="icon" className="icon4" />
                        <img src={`https://skillicons.dev/icons?i=postgres&theme=${iconTheme}`} alt="icon" className="icon5" />
                        <div className={activeProject === "myCare" ? "active-project-description" : "project-description"}>
                            <p>A medical portal for patients to solve their healthcare needs and take action</p>
                            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="website-button">
                                Visit Website
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div
                        className={activeProject === "Banter" ? "active-project-line" : "project-line"}
                        onMouseEnter={() => {
                            setProjectLink("https://bit-of-banter.onrender.com/");
                            dispatch(setProject("Banter"));
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
                            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="website-button">
                                Visit Website
                            </a>
                        </div>
                    </div>
                    <hr />
                    <div
                        className={activeProject === "AirBn2B" ? "active-project-line" : "project-line"}
                        onMouseEnter={() => {
                            setProjectLink("https://airbn2b.onrender.com/");
                            dispatch(setProject("AirBn2B"));
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
                            <a href={projectLink} target="_blank" rel="noopener noreferrer" className="website-button">
                                Visit Website
                            </a>
                        </div>
                    </div>
                </div>
                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                    <div className="project-image-container">
                        <p className="call-to-action">VISIT WEBSITE</p>
                        <div className="white-cover" />
                        <video className={(activeProject === "myCare" || activeProject === "") ? "project-preview-active" : "project-preview-idle"} loop={true} autoPlay="autoplay" muted>
                            <source src={myCarePreview} type="video/mp4" />
                        </video>
                        <video className={activeProject === "Banter" ? "project-preview-active" : "project-preview-idle"} loop={true} autoPlay="autoplay" muted>
                            <source src={banterPreview} type="video/mp4" />
                        </video>
                        <video className={activeProject === "AirBn2B" ? "project-preview-active" : "project-preview-idle"} loop={true} autoPlay="autoplay" muted>
                            <source src={airBn2BPreview} type="video/mp4" />
                        </video>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ProjectIndex
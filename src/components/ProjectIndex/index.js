import { useEffect, useState } from "react"
import airBn2BPreview from "../../media/project-previews/AirBn2B.mp4";
import banterPreview from "../../media/project-previews/banter.mp4";
import myCarePreview from "../../media/project-previews/myCare.mp4";
import Ping from "ping.js";
import "./ProjectIndex.css"
import "./ProjectIndexIcons.css"


function ProjectIndex({ visibility }) {
    const [project1, setProject1] = useState("project-preview-active");
    const [project2, setProject2] = useState("project-preview-idle");
    const [project3, setProject3] = useState("project-preview-idle");
    const [projectLink, setProjectLink] = useState("https://my-care.onrender.com");

    useEffect(() => {
        const p = new Ping();

        p.ping("https://click-me-kutu.onrender.com")
            .then(data => {
                console.log("Successful ping: " + data);
            })
            .catch(data => {
                console.error("Ping failed: " + data);
            })
        p.ping("https://caleb-airbnb.onrender.com")
            .then(data => {
                console.log("Successful ping: " + data);
            })
            .catch(data => {
                console.error("Ping failed: " + data);
            })
        p.ping("https://my-care.onrender.com")
            .then(data => {
                console.log("Successful ping: " + data);
            })
            .catch(data => {
                console.error("Ping failed: " + data);
            })
        p.ping("https://banter-k9ts.onrender.com")
            .then(data => {
                console.log("Successful ping: " + data);
            })
            .catch(data => {
                console.error("Ping failed: " + data);
            })

    }, [])

    return (
        <div className={visibility}>
            <div className="project-index">
                <div className="projects-list">
                    <h2>Projects</h2>
                    <hr />
                    <a href={projectLink} target="_blank" rel="noopener noreferrer">
                        <div
                            className="project-line"
                            onMouseEnter={() => {
                                setProject1("project-preview-active");
                                setProject2("project-preview-idle");
                                setProject3("project-preview-idle");
                                setProjectLink("https://my-care.onrender.com");
                            }}>
                            <h3 className="project-title">MyCare</h3>
                            <i className="fa-solid fa-chevron-left arrow" />
                            <img src={"https://skillicons.dev/icons?i=python&theme=light"} alt="icon" className="icon1" />
                            <img src={"https://skillicons.dev/icons?i=react&theme=light"} alt="icon" className="icon2" />
                            <img src={"https://skillicons.dev/icons?i=redux&theme=light"} alt="icon" className="icon3" />
                            <img src={"https://skillicons.dev/icons?i=flask&theme=light"} alt="icon" className="icon4" />
                            <img src={"https://skillicons.dev/icons?i=postgres&theme=light"} alt="icon" className="icon5" />
                        </div>
                    </a>
                    <hr />
                    <a href={projectLink} target="_blank" rel="noopener noreferrer">
                        <div
                            className="project-line"
                            onMouseEnter={() => {
                                setProject1("project-preview-idle");
                                setProject2("project-preview-active");
                                setProject3("project-preview-idle");
                                setProjectLink("https://banter-k9ts.onrender.com/");
                            }}>
                            <h3 className="project-title">Banter</h3>
                            <i className="fa-solid fa-chevron-left arrow" />
                            <img src={"https://skillicons.dev/icons?i=python&theme=light"} alt="icon" className="icon1" />
                            <img src={"https://skillicons.dev/icons?i=babel&theme=light"} alt="icon" className="icon2" />
                            <img src={"https://skillicons.dev/icons?i=react&theme=light"} alt="icon" className="icon3" />
                            <img src={"https://skillicons.dev/icons?i=redux&theme=light"} alt="icon" className="icon4" />
                            <img src={"https://skillicons.dev/icons?i=flask&theme=light"} alt="icon" className="icon5" />
                        </div>
                    </a>
                    <hr />
                    <a href={projectLink} target="_blank" rel="noopener noreferrer">
                        <div
                            className="project-line"
                            onMouseEnter={() => {
                                setProject1("project-preview-idle");
                                setProject2("project-preview-idle");
                                setProject3("project-preview-active");
                                setProjectLink("https://caleb-airbnb.onrender.com/");

                            }}>
                            <h3 className="project-title">AirBn2B</h3>
                            <i className="fa-solid fa-chevron-left arrow" />
                            <img src={"https://skillicons.dev/icons?i=js&theme=light"} alt="icon" className="icon1" />
                            <img src={"https://skillicons.dev/icons?i=express&theme=light"} alt="icon" className="icon2" />
                            <img src={"https://skillicons.dev/icons?i=react&theme=light"} alt="icon" className="icon3" />
                            <img src={"https://skillicons.dev/icons?i=redux&theme=light"} alt="icon" className="icon4" />
                            <img src={"https://skillicons.dev/icons?i=sequelize&theme=light"} alt="icon" className="icon5" />
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
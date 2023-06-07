import { useState } from "react"
import { Link } from "react-router-dom"

import express from "../../media/icons/express.png"
import flask from "../../media/icons/flask.png"
import javascript from "../../media/icons/javascript.png"
import node from "../../media/icons/node.png"
import postgresql from "../../media/icons/postgresql.png"
import python from "../../media/icons/python.png"
import react from "../../media/icons/react.png"
import redux from "../../media/icons/redux.png"
import sequelize from "../../media/icons/sequelize.png"
import sqla from "../../media/icons/sqla.png"

import "./ProjectIndex.css"
import "./ProjectIndexIcons.css"


function ProjectIndex({ visibility }) {
    const [project1, setProject1] = useState("project-preview-active");
    const [project2, setProject2] = useState("project-preview-idle");
    const [project3, setProject3] = useState("project-preview-idle");
    const [projectLink, setProjectLink] = useState("https://my-care.onrender.com");

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
                            <img src={python} alt="icon" className="icon1" />
                            <img src={react} alt="icon" className="icon2" />
                            <img src={redux} alt="icon" className="icon3" />
                            <img src={flask} alt="icon" className="icon4" />
                            <img src={sqla} alt="icon" className="icon5" />
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
                            <img src={python} alt="icon" className="icon1" />
                            <img src={react} alt="icon" className="icon2" />
                            <img src={redux} alt="icon" className="icon3" />
                            <img src={flask} alt="icon" className="icon4" />
                            <img src={sqla} alt="icon" className="icon5" />
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
                            <img src={javascript} alt="icon" className="icon1" />
                            <img src={express} alt="icon" className="icon2" />
                            <img src={react} alt="icon" className="icon3" />
                            <img src={redux} alt="icon" className="icon4" />
                            <img src={sequelize} alt="icon" className="icon5" />
                        </div>
                    </a>
                </div>
                <a href={projectLink} target="_blank" rel="noopener noreferrer">
                    <div className="project-image-container">
                        <p className="call-to-action">VISIT WEBSITE</p>
                        <div className="white-cover" />
                        <img src={"https://blog.artsper.com/wp-content/uploads/2022/04/New-Featured-Image-1200-x-675-6.jpg"}
                            alt="project preview"
                            className={`${project1}`}
                        />
                        <img src={"https://artincontext.org/wp-content/uploads/2021/06/Renaissance-Art-848x530.jpg"}
                            alt="project preview"
                            className={`${project2}`}
                        />
                        <img src={"https://renaissancereframed.files.wordpress.com/2021/05/b6e5d-fireintheborgo.jpg"}
                            alt="project preview"
                            className={`${project3}`}
                        />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default ProjectIndex
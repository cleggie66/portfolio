import { useState } from "react"

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


function ProjectIndex() {
    const [project1, setProject1] = useState("project-preview-active");
    const [project2, setProject2] = useState("project-preview-idle");
    const [project3, setProject3] = useState("project-preview-idle");


    return (
        <div className="project-index">
            <div className="projects-list">
                <h2>Projects</h2>
                <hr />
                <div
                    className="project-line"
                    onMouseEnter={() => {
                        setProject1("project-preview-active")
                        setProject2("project-preview-idle")
                        setProject3("project-preview-idle")
                    }}>
                    <h3>MyCare</h3>
                    <img src={python} alt="icon" className="icon1" />
                    <img src={react} alt="icon" className="icon2" />
                    <img src={redux} alt="icon" className="icon3" />
                    <img src={flask} alt="icon" className="icon4" />
                    <img src={sqla} alt="icon" className="icon5" />
                </div>
                <hr />
                <div
                    className="project-line"
                    onMouseEnter={() => {
                        setProject1("project-preview-idle")
                        setProject2("project-preview-active")
                        setProject3("project-preview-idle")
                    }}>
                    <h3>Banter</h3>
                    <img src={python} alt="icon" className="icon1" />
                    <img src={react} alt="icon" className="icon2" />
                    <img src={redux} alt="icon" className="icon3" />
                    <img src={flask} alt="icon" className="icon4" />
                    <img src={sqla} alt="icon" className="icon5" />
                </div>
                <hr />
                <div
                className="project-line"
                    onMouseEnter={() => {
                        setProject1("project-preview-idle")
                        setProject2("project-preview-idle")
                        setProject3("project-preview-active")
                    }}>
                    <h3>AirBn2B</h3>
                    <img src={javascript} alt="icon" className="icon1" />
                    <img src={express} alt="icon" className="icon2" />
                    <img src={react} alt="icon" className="icon3" />
                    <img src={redux} alt="icon" className="icon4" />
                    <img src={sequelize} alt="icon" className="icon5" />
                </div>
            </div>
            <div className="project-image-container">
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
        </div>
    )
}

export default ProjectIndex
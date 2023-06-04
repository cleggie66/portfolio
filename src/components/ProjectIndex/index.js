import { useState } from "react"
import javascript from "../../media/icons/javascript.png"
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
                <div className="project-line">
                    <h3
                        onMouseEnter={() => {
                            setProject1("project-preview-active")
                            setProject2("project-preview-idle")
                            setProject3("project-preview-idle")
                        }}
                    >
                        MyCare
                    </h3>
                    <img src={javascript} alt="icon" className="icon1" />
                    <img src={javascript} alt="icon" className="icon2" />
                    <img src={javascript} alt="icon" className="icon3" />
                    <img src={javascript} alt="icon" className="icon4" />
                    <img src={javascript} alt="icon" className="icon5" />
                </div>
                <hr />
                <h3
                    onMouseEnter={() => {
                        setProject1("project-preview-idle")
                        setProject2("project-preview-active")
                        setProject3("project-preview-idle")
                    }}
                >
                    Banter
                </h3>
                <hr />
                <h3
                    onMouseEnter={() => {
                        setProject1("project-preview-idle")
                        setProject2("project-preview-idle")
                        setProject3("project-preview-active")
                    }}
                >
                    AirBn2B
                </h3>
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
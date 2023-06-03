import { useState } from "react"
import "./ProjectIndex.css"

function ProjectIndex() {
    const [project1, setProject1] = useState("project-preview-active");
    const [project2, setProject2] = useState("project-preview-idle");
    const [project3, setProject3] = useState("project-preview-idle");


    return (
        <div className="project-index">
            <div className="projects-list">
                <h2>Projects</h2>
                <hr />
                <h3
                    className="list-mycare"
                    onMouseEnter={() => setProject1("project-preview-active")}
                    onMouseLeave={() => setProject1("project-preview-idle")}
                >
                    MyCare
                </h3>
                <hr />
                <h3
                    className="list-mycare"
                    onMouseEnter={() => setProject2("project-preview-active")}
                    onMouseLeave={() => setProject2("project-preview-idle")}
                >
                    Banter
                </h3>
                <hr />
                <h3
                    className="list-mycare"
                    onMouseEnter={() => setProject3("project-preview-active")}
                    onMouseLeave={() => setProject3("project-preview-idle")}
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
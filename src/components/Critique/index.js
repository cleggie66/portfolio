import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser/es';
import { useSelector } from "react-redux";
import myCareLogoLight from "../../media/project-logos/myCare-logo-light.gif";
import myCareLogoDark from "../../media/project-logos/myCare-logo-dark.gif";
import banterLogoLight from "../../media/project-logos/banter-logo-light.gif";
import banterLogoDark from "../../media/project-logos/banter-logo-dark.gif";
import airbnbLogo from "../../media/project-logos/AirBn2B-logo.png";
import "./Critique.css"

function Critique({ visibility }) {
    const form = useRef();
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [project, setProject] = useState("");
    const [critique, setCritique] = useState("");
    const [buttonClass, setButtonClass] = useState("critique-button");
    const [buttonText, setButtonText] = useState("Send It");
    const [errors, setErrors] = useState({});
    const settingsState = useSelector(state => state.settings);
    const theme = settingsState.theme;

    useEffect(() => {
        const errorsObj = {}
        if (project.length === 0) errorsObj.project = "Cannot be blank"
        if (critique.length === 0) errorsObj.critique = "Cannot be blank"
        setErrors(errorsObj)

    }, [project, critique])

    const handleButton = () => {
        setButtonClass("critique-button-sent");
        setButtonText("Sent!");

        setTimeout(() => {
            setButtonClass("critique-button");
            setButtonText("Send It")
        }, 3000);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        setHasSubmitted(true);

        if (Object.values(errors).length === 0) {
            emailjs.sendForm('service_3gfds3h', 'template_2r63new', form.current, 'vdYMyjgLbJ0XXfGXs');

            handleButton();
            setProject("");
            setCritique("");
            setErrors({});
            setHasSubmitted(false);
        }
    }

    return (
        <div className={visibility}>
            <div className="critique-page">
                <h2>
                    Send me a Critique!
                </h2>
                <div className="critique-project-logos">
                    <img
                        src={theme === "light" ? myCareLogoLight : myCareLogoDark}
                        alt="project logo"
                        className={`critique-project-logo ${project === "MyCare" && "selected-critique-project"}`}
                        onClick={() => setProject("MyCare")}
                    />
                    <img
                        src={theme === "light" ? banterLogoLight : banterLogoDark}
                        alt="project logo"
                        className={`critique-project-logo ${project === "Banter" && "selected-critique-project"}`}
                        onClick={() => setProject("Banter")}
                    />
                    <img
                        src={airbnbLogo}
                        alt="project logo"
                        className={`critique-project-logo ${project === "AirBn2B" && "selected-critique-project"}`}
                        onClick={() => setProject("AirBn2B")}
                    />
                </div>
                <form className="critique-form" ref={form} onSubmit={sendEmail}>
                    <select
                        name="project"
                        value={project}
                        onChange={(e) => setProject(e.target.value)}
                    >
                        <option disabled value="">Select Project</option>
                        <option>MyCare</option>
                        <option>Banter</option>
                        <option>AirBn2B</option>
                        <option>Portfolio Site</option>
                        <option>Other</option>
                    </select>
                    {hasSubmitted && (<p className="error">{errors.project}</p>)}
                    <textarea
                        name="critique"
                        rows="5"
                        cols="33"
                        placeholder="Your Feedback"
                        value={critique}
                        onChange={(e) => setCritique(e.target.value)}
                    >
                    </textarea>
                    {hasSubmitted && (<p className="error">{errors.critique}</p>)}
                    <button
                        disabled={hasSubmitted && Object.values(errors).length !== 0}
                        className={buttonClass}>
                        {buttonText}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Critique
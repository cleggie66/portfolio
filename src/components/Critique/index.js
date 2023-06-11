import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser/es';
import "./Critique.css"

function Critique({ visibility }) {
    const form = useRef();
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [project, setProject] = useState("");
    const [critique, setCritique] = useState("");
    const [buttonClass, setButtonClass] = useState("critique-button");
    const [buttonText, setButtonText] = useState("Send It");
    const [errors, setErrors] = useState({});

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
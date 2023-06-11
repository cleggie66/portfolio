import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser/es';
import "./ReachOut.css"

function ReachOut({ visibility }) {
    const form = useRef();
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [buttonClass, setButtonClass] = useState("reach-out-button");
    const [buttonText, setButtonText] = useState("Send It");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const errorsObj = {}
        if (name.length === 0) errorsObj.name = "Cannot be blank"
        if (email.length === 0) errorsObj.email = "Cannot be blank"
        if (message.length === 0) errorsObj.message = "Cannot be blank"
        setErrors(errorsObj)

    }, [name, email, message])

    const handleButton = () => {
        setButtonClass("reach-out-button-sent");
        setButtonText("Sent!");

        setTimeout(() => {
            setButtonClass("reach-out-button");
            setButtonText("Send It")
        }, 3000);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        setHasSubmitted(true);

        if (Object.values(errors).length === 0) {
            emailjs.sendForm('service_3gfds3h', 'template_qrgr3te', form.current, 'vdYMyjgLbJ0XXfGXs');

            handleButton();
            setName("");
            setEmail("");
            setMessage("");
            setErrors({});
            setHasSubmitted(false);
        }
    }

    return (
        <div className={visibility}>
            <div className="reach-out-page">
                <h2>Get In Touch</h2>
                <form className="reach-out-form" ref={form} onSubmit={sendEmail}>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {hasSubmitted && (<p className="error">{errors.name}</p>)}
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {hasSubmitted && (<p className="error">{errors.email}</p>)}
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Message"
                        rows="4"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    {hasSubmitted && (<p className="error">{errors.message}</p>)}
                    <button
                        disabled={hasSubmitted && Object.values(errors).length !== 0}
                        className={buttonClass}
                    >
                        {buttonText}
                    </button>
                </form>
                <div className="contact-icons">
                    <div>
                        <h3><i className="fa-solid fa-phone" /> Phone</h3>
                        630-485-8750
                    </div>
                    <div>
                        <h3><i className="fa-solid fa-envelope" /> Email</h3>
                        <a href="mailto: caleb@cleghorn.org" target="_blank" rel="noopener noreferrer" className="reach-out-email">caleb@cleghorn.org</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReachOut;
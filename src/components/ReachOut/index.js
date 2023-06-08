import "./ReachOut.css"

function ReachOut({ visibility }) {
    return (
        <div className={visibility}>
            <div className="reach-out-page">
                <h2>Get In Touch</h2>
                <form className="reach-out-form">
                    <input type="text" name="name" id="name" placeholder="Name" />
                    <input type="email" name="email" id="email" placeholder="Email" />
                    <textarea name="message" id="message" placeholder="Message" rows="4"></textarea>
                    <button>Send it</button>
                </form>
                <div className="contact-icons">
                    <div>
                        <h3><i class="fa-solid fa-phone" /> Phone</h3>
                        630-485-8750
                    </div>
                    <div>
                        <h3><i class="fa-solid fa-envelope" /> Email</h3>
                        <a href="mailto: caleb@cleghorn.org" target="_blank" rel="noopener noreferrer" className="reach-out-email">caleb@cleghorn.org</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReachOut;
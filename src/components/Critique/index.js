import "./Critique.css"

function Critique({ visibility }) {

    return (
        <div className={visibility}>
            <div className="critique-page">
                <h2>
                    Send me a Critique!
                </h2>
                <form className="critique-form">
                    <select>
                        <option disabled selected>Select Project</option>
                        <option>MyCare</option>
                        <option>Banter</option>
                        <option>AirBn2B</option>
                        <option>Portfolio Site</option>
                        <option>Other</option>
                    </select>
                    <textarea id="story" name="story"
                        rows="5" cols="33" placeholder="Your Feedback">
                    </textarea>
                    <button>Send it</button>
                </form>
            </div>
        </div>
    )
}

export default Critique
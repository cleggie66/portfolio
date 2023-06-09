import "./About.css"

function About({ visibility }) {
    return (
        <div className={visibility}>
            <div className='about-page'>
                <div className='about-page-top'>
                    <div className="about-profile-image-container">
                        <img src="https://media.licdn.com/dms/image/D4D03AQEwK3F1BwbR2Q/profile-displayphoto-shrink_800_800/0/1670391241454?e=1691020800&v=beta&t=6pMbmMLu5uaDLBXfr-JQqc-7f8ugrGWIzZ5znmpHWgM" alt="caleb" />
                    </div>
                    <div className="about-page-top-text">
                        <p className='about-page-title'>Hey, I'm Caleb!</p>
                        <p className="about-page-text"> I'm a software engineer that can't get enough of fixing issues. My experience in media and live production helped me grasp the art of problem-solving and brought to life my passion for making things work. As a software engineer, I am able to apply what I have learned and carry on my passion for solving the puzzle.</p>
                    </div>
                </div>
                <ul>
                    <li className='about-page-title'>I love what I do, and a little of what I can do is:</li>
                    <li className="about-page-text">⚡️ Build frontends using <b>Javascript, React, Redux, HTML, CSS</b></li>
                    <li className="about-page-text">⚡️ Develop backends using <b>Python, Javascript, Flask, Express, SQL, PostgreSQL</b></li>
                    <li className="about-page-text">⚡️ Make designs come to life with the <b>Adobe Creative Suite</b></li>
                    <li className="about-page-text">⚡️ Stay cool under pressure</li>
                </ul>
            </div>
        </div>
    )
}

export default About;
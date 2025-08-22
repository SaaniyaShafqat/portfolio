import React from "react";
import '@fortawesome/free-regular-svg-icons'
import '../assets/styles/Bio.scss';

function Bio() {
    return (
    <div className="container" id="Bio">
        <div className="bio-container">
            <h1>About Me</h1>
            <div className="bio">
                <p>I'm a passionate Software Engineer and designer that specialises in Web Development. I have a BSC in Computer Science and am based near Manchester, UK.</p>
                <p>I have a strong interest in all things tech especially Front End Engineering. I'm committed to creating visually stunning and user-friendly websites. I am always looking to take on new projects to enhance my skillset and learning, and to learn new and emerging technologies.</p>
            </div>
        </div>
    </div>
    );
}

export default Bio;
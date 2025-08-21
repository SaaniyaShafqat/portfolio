import React from "react";
import '@fortawesome/free-regular-svg-icons'
import '../assets/styles/Bio.scss';

function Bio() {
    return (
    <div className="container" id="Bio">
        <div className="bio-container">
            <h1>About Me</h1>
            <div className="bio">
                <p>I'm a passionate Web developer and designer that specialises in web development. I have a BSC in Computer Science and based near Manchester, UK.</p>
                <p>I have a strong interest in all things tech especially front end engineering. I'm committed to creating visually stunning and user-friendly websites. I am always looking to take on new projects to enhance my skillset and learning.</p>
            </div>
        </div>
    </div>
    );
}

export default Bio;
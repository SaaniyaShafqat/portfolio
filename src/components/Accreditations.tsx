import React from "react";
import '../assets/styles/Accreditations.scss';
import cert01 from '../assets/images/cert01.jpg';

function Accreditations() {
    return(
    <div className="accreditations-container" id="accreditations">
        <h1>Accreditations</h1>
        <div className="accreditations-grid">
            <div className="accreditation">
                <a href="https://www.udemy.com/certificate/UC-67db6fb8-8444-4412-a58b-f10eb5e90f9a/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com" target="_blank" rel="noreferrer"><img src={cert01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.udemy.com/certificate/UC-67db6fb8-8444-4412-a58b-f10eb5e90f9a/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com" target="_blank" rel="noreferrer"><h2>Udemy Certificate of Completion</h2></a>
                <p>Complete JS Bootcamp | JavaScript Programming in 7 DAYS.</p>
            </div>
        </div>
    </div>
    );
}

export default Accreditations;
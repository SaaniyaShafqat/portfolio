import React from "react";
import '../assets/styles/Projects.scss';
import proj01 from '../assets/images/proj01.jpg';
import proj02 from '../assets/images/proj02.jpg';
import proj03 from '../assets/images/proj03.jpg';
import proj04 from '../assets/images/proj04.png';
import proj05 from '../assets/images/proj05.png';

function Projects() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="/" target="_blank" rel="noreferrer"><img src={proj01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="/" target="_blank" rel="noreferrer"><h2>NEWBY & PADLEY</h2></a>
                <p>Managed content, on-page and Technical SEO. Client provided design and did not want to update.</p>
            </div>
            <div className="project">
                <a href="https://www.alanmilleropticians.co.uk/" target="_blank" rel="noreferrer"><img src={proj02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.alanmilleropticians.co.uk/" target="_blank" rel="noreferrer"><h2>ALAN MILLER</h2></a>
                <p>Site built and managed.</p>
            </div>
            <div className="project">
                <a href="https://www.baterandstoutopticians.co.uk/" target="_blank" rel="noreferrer"><img src={proj03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.baterandstoutopticians.co.uk/" target="_blank" rel="noreferrer"><h2>BATER & STOUT</h2></a>
                <p>Site built and managed.</p>
            </div>
            <div className="project">
                <a href="https://www.davidjmiller.co.uk/" target="_blank" rel="noreferrer"><img src={proj04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.davidjmiller.co.uk/" target="_blank" rel="noreferrer"><h2>DAVID J MILLER</h2></a>
                <p>Site built and managed.</p>
            </div>
            <div className="project">
                <a href="https://www.eventinsurancedirect.co.uk/" target="_blank" rel="noreferrer"><img src={proj05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.eventinsurancedirect.co.uk/" target="_blank" rel="noreferrer"><h2>EVENT INSURANCE DIRECT</h2></a>
                <p>Site built and managed.</p>
            </div>
        </div>
    </div>
    );
}

export default Projects;
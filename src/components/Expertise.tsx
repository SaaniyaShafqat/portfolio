import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChartSimple, faPencil } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [ //TODO: change boilerplate labels
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Tailwind CSS",
    "SEO"
];

const labelsSecond = [
    "Scrum",
    "Kanban",
    "TDD",
    "XP",
    "JIRA",
    "Pair Programming",
];

const labelsThird = [
    "Wireframing",
    "Prototyping",
    "Responsive Design",
    "Figma",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faGlobe} size="3x"/>
                    <h3>Web Development</h3>
                    <p>Throughout my career, I have focused on building responsive and user-friendly web applications.</p>
                    <div className="flex-chips">
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faChartSimple} size="3x"/>
                    <h3>Agile Methodologies</h3>
                    <p>My experience with Agile methodologies has enabled me to work effectively in dynamic environments, ensuring timely delivery of high-quality software.</p>
                    <div className="flex-chips">
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPencil} size="3x"/>
                    <h3>UI/UX Design</h3>
                    <p>My passion for UI/UX design drives me to create intuitive and engaging user experiences.</p>
                    <div className="flex-chips">
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
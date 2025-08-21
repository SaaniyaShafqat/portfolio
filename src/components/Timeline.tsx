import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Web Manager</h2>
            <h3 className="vertical-timeline-element-subtitle">David J Miller</h3>
            <h4 className="vertical-timeline-element-subtitle">Blackburn, UK</h4>
            <p>
              •	Manage and maintain multiple company websites, ensuring optimal performance, security, and functionality.
            </p>
            <p>
              •	Update website design, content, and backend infrastructure using PHP, HTML, and CSS on WordPress CMS.
            </p>
            <p>
              •	Implement SEO strategies (on-page and technical) to enhance visibility and user engagement.
            </p>
            <p>
              •	Build customized websites under tight deadlines with a strong focus on usability and testing.
            </p>
            <p>
              •	Conduct multiple levels of testing (usability, peer review, unit testing) to ensure reliability.
            </p>
            <p>
              •	Continuously improve UX/UI and maintain content accuracy across platforms
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Web Developer (Freelance)</h2>
            <h3 className="vertical-timeline-element-title">Hakim Group</h3>
            <h4 className="vertical-timeline-element-subtitle">Blackburn, UK</h4>
            <p>
              •	Designed and developed responsive websites tailored to client specifications.
            </p>
            <p>
              •	Collaborated with cross-functional teams including designers and project managers.
            </p>
            <p>
              •	Used HTML, CSS, JavaScript, and CRMS such as Webflow, Wix Studio and WordPress to deliver modern web solutions.
            </p>
            <p>
              •	Debugged and resolved technical issues; ensured mobile responsiveness using Lighthouse.
            </p>
            <p>
              •	Conducted client consultations to gather requirements and deliver customized solutions.
            </p>
            <p>
              •	Performed end-to-end testing (usability, unit, peer testing) to maintain high-quality standards.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h2 className="vertical-timeline-element-title">Scrum Master</h2>
            <h3 className="vertical-timeline-element-title">Hack Camp KRM</h3>
            <h4 className="vertical-timeline-element-subtitle">UK</h4>
            <p>
              •	Led a team in building a website for KRM using Agile Scrum methodologies.
            </p>
            <p>
              •	Facilitated sprint planning, retrospectives, and daily stand-ups.
            </p>
            <p>
              •	Managed project progress and implemented client feedback throughout the development cycle.
            </p>
            <p>
              •	Utilised GitHub and Trello for version control and task management.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
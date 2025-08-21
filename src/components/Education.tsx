import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faGraduationCap, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Career.scss'

function Education() {
  return (
    <div id="education">
      <div className="items-container">
        <h1>Education History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2018 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h2 className="vertical-timeline-element-title">BSC (Hons) Computer Science</h2>
            <h3 className="vertical-timeline-element-subtitle">The University of Salford</h3>
            <h4 className="vertical-timeline-element-subtitle">Manchester, UK</h4>
            <p>
              Studied modules such as Mobile App Development, Web Management 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016 - 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBuildingColumns} />}
          >
            <h2 className="vertical-timeline-element-title">A-Levels</h2>
            <h3 className="vertical-timeline-element-title">Blackburn College</h3>
            <h4 className="vertical-timeline-element-subtitle">Blackburn, UK</h4>
            <p>
              ICT, Business, Media, English Literature and Language
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2011 - 2016"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faSchool} />}
          >
            <h2 className="vertical-timeline-element-title">GCSEs</h2>
            <h3 className="vertical-timeline-element-title">Rhydding’s Business and Enterprise School</h3>
            <h4 className="vertical-timeline-element-subtitle">Accrington, UK</h4>
            <p>
              ICT, ECDL, Business, Maths, Science, History, Geography, English Language, English Literature, RE, Urdu
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Education;
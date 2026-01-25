import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import headshot from '../assets/images/headshot.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={headshot} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/SaaniyaShafqat" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/saaniya-s/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Saaniya Shafqat</h1>
          <p>Web Developer</p>
          <p>Hyndburn, UK</p>
          {/* <p>Passionate about creating innovative web solutions that enhance user experience and drive business success.</p> */}

          <div className="mobile_social_icons">
            <a href="https://github.com/SaaniyaShafqat" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/saaniya-s/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
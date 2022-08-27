import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import './About.scss';
import profile from './assets/profile.jpeg';

const About = () => {
  const [letterClass, setletterClass] = useState('text-animate');

  useEffect(() => {
    let time = setTimeout(() => {
      setletterClass('text-animate-hover');
    }, 4000);
    return () => {
      clearInterval(time);
    };
  });

  return (
    <div className="body">
      <div className="container">
        <div className="about">
          <div className="about-content">
            <div>
              <h2 className="text-center">
                <span className={`${letterClass}`}>A</span>
                <span className={`${letterClass} _12`}>b </span>
                <span className={`${letterClass} _13`}> o</span>
                <span className={`${letterClass} _14`}>u</span>
                <span className={`${letterClass} _15`}>t</span>
              </h2>
            </div>
            <div className="about-profile">
              <img src={profile} alt="profile pic" />
              <p>
                I am Yeboah william. I am a front-end developer that focuses on Web Design and
                modern JavaScript, and React as a framework. I have a passion for Design System, Web
                Accessibility and Serverless Technologies. Ready to help team achieve company goals.
              </p>
            </div>
          </div>
          <Link className="contact_button_link about-contact" to="/contact">
            <div className="contact_button">LET&#39;S TALK</div>
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default About;

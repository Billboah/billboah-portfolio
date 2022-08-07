import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import './Service.scss';
import Service1 from './service1.svg';
import Service2 from './service2.svg';
import Service3 from './service3.svg';
import Service4 from './service4.svg';

const Service = () => {
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
        <div className="service">
          <div className="row column">
            <div className="small-12">
              <h2 className="text-center">
                <span className={`${letterClass}`}>S</span>
                <span className={`${letterClass} _12`}>e </span>
                <span className={`${letterClass} _13`}> r</span>
                <span className={`${letterClass} _14`}>v</span>
                <span className={`${letterClass} _15`}>i</span>
                <span className={`${letterClass} _16`}>c</span>
                <span className={`${letterClass} _17`}>e</span>
                <span className={`${letterClass} _18`}>s</span>
              </h2>
            </div>
          </div>
          <div className="row service-app">
            <div className="service-row">
              <div className=" service-image">
                <img src={Service1} alt="" className="service_img" />
              </div>
              <div className="service-list">
                <ul>
                  <li>HTML5 development</li>
                  <li>JavaScript development</li>
                  <li>CSS3 development</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row service-app">
            <div className="service-row">
              <div className=" service-image-reverse">
                <img src={Service2} alt="" className="service_img big" />
              </div>
              <div className="service-list-reverse">
                <ul>
                  <li>AJAX development</li>
                  <li>jQuery development</li>
                  <li>Node.js and React.js development</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row service-app">
            <div className="service-row">
              <div className=" service-image">
                <img src={Service3} alt="" className="service_img" />
              </div>
              <div className="service-list">
                <ul>
                  <li>UI/UX design</li>
                  <li>Responsive and Mobile design</li>
                  <li>Cross-Browser development</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row service-app">
            <div className="service-row">
              <div className=" service-image-reverse">
                <img src={Service4} alt="" className="service_img" />
              </div>
              <div className="service-list-reverse">
                <ul>
                  <li>Testing services</li>
                  <li>Content Management System development</li>
                  <li>Migration services</li>
                  <li>Optimization services</li>
                  <li>Optimization services</li>
                </ul>
              </div>
            </div>
          </div>
          <Link className="contact_button_link " to="/contact">
            <div className="contact_button service-contact">LET&#39;S TALK</div>
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Service;

import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import './Contact.scss';
import emailjs from '@emailjs/browser';
import Loader from 'react-loaders';

const Services = () => {
  const [letterClass, setletterClass] = useState('text-animate');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sfwhn1w', 'template_dgelnpj', form.current, 'm2RDlf6LpjZP6AEKQ').then(
      () => {
        alert('Email sent successfully');
        window.location.reload(false);
      },
      () => {
        alert('Failed to send the message, please try again');
      }
    );
  };

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
        <div className="contact">
          <section id="footer-cta">
            <h1>
              <span className={`${letterClass}`}>C</span>
              <span className={`${letterClass} _12`}>o</span>
              <span className={`${letterClass} _13`}> n</span>
              <span className={`${letterClass} _14`}>t</span>
              <span className={`${letterClass} _15`}>a</span>
              <span className={`${letterClass} _16`}>c</span>
              <span className={`${letterClass} _17`}>t</span>
            </h1>
            <div id="startButtonDiv">
              <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                  <ul>
                    <li>
                      <input type="text" className="half" name="name" placeholder="Name" required />
                      <input type="email" name="email" placeholder="Email" required />
                    </li>
                    <li>
                      <input type="text" name="subject" placeholder="Subject" required />
                    </li>
                    <li>
                      <textarea name="message" placeholder="Message" required />
                    </li>
                    <li className="contact-button">
                      <input type="submit" value="Send" />
                    </li>
                  </ul>
                </form>
              </div>
            </div>
            <div>
              <a href="mailto:willboahacheampong@gmail.con">
                <FaRegEnvelope className="icon" />
              </a>
              <a href="https://www.github.com/billboah">
                <FaGithub className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/billboah" target="_blank" rel="noreferrer">
                <FaLinkedin className="icon" />
              </a>
            </div>
          </section>

          <footer id="footer">
            <div className="row text-center">
              <div className="small-12 medium-6 medium-offset-3 columns">
                <p id="logo">BY</p>
                <p id="copyright">Copyright &copy; 2022 | Billboah</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Services;

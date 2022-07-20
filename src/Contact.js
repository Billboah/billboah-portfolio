import React from 'react';
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import './Contact.scss';

const Services = () => {
  return (
    <div className="container">
      <section id="footer-cta" className="">
        <h2 className="footer-cta-title">Wanna work with me?</h2>
        <div>
          <div>
            <p>I&apos;m currently available for work.</p>
          </div>
          <div id="startButtonDiv">
            <a className="footer_button form-button" href="mailto:willboahacheampong@gmail.com">
              Start Now
            </a>
          </div>
        </div>
        <div>
          <a href="mailto:willboahacheampong@gmail.con">
            <FaRegEnvelope className="icon" />
          </a>
          <a href="https://www.github.com/billboah">
            <FaGithub className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/william-yeboah-968090238/"
            target="_blank"
            rel="noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </div>
      </section>

      <footer id="footer">
        <div className="row text-center">
          <div className="small-12 medium-6 medium-offset-3 columns">
            <p id="logo">BY</p>
            <p id="copyright">Copyright &copy; 2021 | Billboah</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;

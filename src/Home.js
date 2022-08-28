import React, { useEffect, useState } from 'react';
import './Home.scss';
import { FaCss3, FaGitAlt, FaHtml5, FaJs, FaReact, FaRegEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import AnimationLetters from './animations';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import tailwind from './assets/tailwind.png';

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [letterClass, setletterClass] = useState('text-animate');
  const nameArray = ['B', 'I', 'L', 'L', 'B', 'O', 'A', 'H'];
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

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
        <div className="home">
          <div className="description">
            <div className="description_me">
              <h3>
                <span className={`${letterClass}`}>H</span>
                <span className={`${letterClass} _12`}>i, </span>
                <span className={`${letterClass} _13`}> </span>
                <span className={`${letterClass} _14`}> I&rsquo;</span>
                <span className={`${letterClass} _15`}>m</span>
              </h3>
              <h1 className="name">
                <AnimationLetters letterClass={letterClass} strArray={nameArray} idx={15} />
              </h1>
              <h1 className="job">
                <AnimationLetters letterClass={letterClass} strArray={jobArray} idx={22} />
              </h1>
              <p>Frontend developer / JavaScript Expert / React developer.</p>
            </div>
            <div className="firstIcons home-button">
              <Link className="contact_button_link" to="/contact">
                <div className="contact_button">LET&#39;S TALK</div>
              </Link>
              <div>
                <a href="mailto:willboahacheampong@gmail.con">
                  <FaRegEnvelope className="icon email" />
                </a>
                <a href="https://www.github.com/billboah">
                  <FaGithub className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/billboah" target="_blank" rel="noreferrer">
                  <FaLinkedin className="icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="home-tools">
            <div className="icon_animation">
              <div className="spin1">
                <FaCss3 size={100} color="lightblue" />
              </div>
              <div className="spin2">
                <FaHtml5 size={100} color="red" />
              </div>
              <div className="spin3">
                <FaReact size={100} color="lightblue" />
              </div>
              <div className="spin4">
                <FaJs size={100} color="yellow" />
              </div>
              <div className="spin5">
                <FaGitAlt size={100} color="orange" />
              </div>
              <div className="spin6">
                <img src={tailwind} alt="" />
              </div>
            </div>
          </div>

          <div className="lastIcons home-buttons2">
            <Link className="contact_button_link" to="/contact">
              <div className="contact_button">LET&#39;S TALK</div>
            </Link>
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
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Home;

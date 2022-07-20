import React, { useEffect, useState } from 'react';
import './Home.scss';
import profile from './bill2.png';
import work from './reactapp.jpg';
import { FaRegEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import AnimationLetters from './animations';
import ui from './ui.webp';
import ThD from './3D.jfif';

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
    <div className="container">
      <div className="home">
        <div className="description">
          <div className="description_me">
            <h3>
              <span className={`${letterClass}`}>H</span>
              <span className={`${letterClass} _12`}>i, </span>
              <span className={`${letterClass} _13`}> I</span>
              <span className={`${letterClass} _14`}>&lsquo;m</span>
            </h3>
            <h1 className="name">
              <AnimationLetters letterClass={letterClass} strArray={nameArray} idx={15} />
            </h1>
            <h1 className="job">
              <AnimationLetters letterClass={letterClass} strArray={jobArray} idx={22} />
            </h1>
            <p>Frontend developer / JavaScript Expert / React developer.</p>
          </div>
          <div className="firstIcons">
            <a href="mailto:willboahacheampong@gmail.con">
              <FaRegEnvelope className="icon email" />
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
        </div>
        <div className="profile">
          <img src={profile} alt="" />
        </div>

        <div className="work">
          <div className="start">
            <div className="one">
              <div className="work_img">
                <img src={work} alt="" />
              </div>
              <p>React JS Developer</p>
            </div>
          </div>
          <div className="end">
            <div className="two">
              <div className="work_img">
                <img src={ThD} alt="" />
              </div>
              <p>3D Designer</p>
            </div>
          </div>
          <div className="start">
            <div className="two">
              <div className="work_img">
                <img src={ui} alt="" />
              </div>
              <p>UI/UX Designer</p>
            </div>
          </div>
        </div>

        <div className="lastIcons">
          <a href="mailto:willboahacheampong@gmail.con">
            <FaRegEnvelope className="icon email" />
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
      </div>
    </div>
  );
};

export default Home;
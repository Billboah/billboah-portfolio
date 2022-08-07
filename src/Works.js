import React, { useEffect, useState } from 'react';
import './Works.scss';
import amazon from './amazon.jpeg';
import beatbox from './beatbox.png';
import clock from './clock.png';
import myclock from './myclock.png';
import uber from './uber.png';
import weather from './weather.png';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';

const Works = () => {
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
        <div className="work1">
          <h2 className="text-center">
            <span className={`${letterClass}`}>W</span>
            <span className={`${letterClass} _12`}>o </span>
            <span className={`${letterClass} _13`}> r</span>
            <span className={`${letterClass} _14`}>k</span>
            <span className={`${letterClass} _15`}>s</span>
          </h2>

          <div className="grid-container">
            <div className="works">
              <a href="https://uber-next-clone-app.vercel.app" target="_blank" rel="noreferrer">
                <section className="works-section " style={{ backgroundImage: `url(${uber})` }}>
                  <div className="code-link">
                    <a
                      href="https://uber-next-clone-app.vercel.app"
                      target="_blank"
                      rel="noreferrer">
                      Site
                    </a>
                    <a
                      href="https://www.github.com/billboah/uber-next-clone-app"
                      target="_blank"
                      rel="noreferrer">
                      Source Code
                    </a>
                  </div>
                  <article>
                    <div className="text">
                      <h3>UBER CLONE</h3>
                      <p className="works-description">
                        Amazon clone is a site that gives user ability to order ride to their
                        destination.
                      </p>
                    </div>
                  </article>
                </section>
              </a>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SVG</li>
                <li>Next JS</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className="works">
              <a href="https://weather-react-app-dusky.vercel.app" target="_blank" rel="noreferrer">
                <section className="works-section " style={{ backgroundImage: `url(${weather})` }}>
                  <div className="code-link">
                    <a
                      href="https://weather-react-app-dusky.vercel.app"
                      target="_blank"
                      rel="noreferrer">
                      Site
                    </a>
                    <a
                      href="https://www.github.com/billboah/weather-react-app"
                      target="_blank"
                      rel="noreferrer">
                      Source Code
                    </a>
                  </div>
                  <article>
                    <div className="text ">
                      <h3>THE WEATHER</h3>
                      <p className="works-description">
                        The weather is a site that provides user the current weather base on its
                        location or location the user wants and some details of the weather.
                      </p>
                    </div>
                  </article>
                </section>
              </a>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SVG</li>
                <li>React JS</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className="works">
              <a href="http://amazon-clone-rosy-two.vercel.app" target="_blank" rel="noreferrer">
                <section className="works-section " style={{ backgroundImage: `url(${amazon})` }}>
                  <div className="code-link">
                    <a
                      href="https://amazon-clone-rosy-two.vercel.app"
                      target="_blank"
                      rel="noreferrer">
                      Site
                    </a>
                    <a
                      href="https://www.github.com/billboah/amazon-clone"
                      target="_blank"
                      rel="noreferrer">
                      Source Code
                    </a>
                  </div>
                  <article>
                    <div className="text">
                      <h3>AMAZON CLONE</h3>
                      <p className="works-description">
                        Amazon clone is a site that allow user to shop the items he or she prefere
                        with flexibility.
                      </p>
                    </div>
                  </article>
                </section>
              </a>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SVG</li>
                <li>React JS</li>
              </ul>
            </div>

            <div className="works">
              <a href="https://clock-react-theta.vercel.app" target="_blank" rel="noreferrer">
                <section className="works-section " style={{ backgroundImage: `url(${clock})` }}>
                  <div className="code-link">
                    <a href="https://clock-react-theta.vercel.app" target="_blank" rel="noreferrer">
                      Site
                    </a>
                    <a
                      href="https://www.github.com/billboah/clock-react"
                      target="_blank"
                      rel="noreferrer">
                      Source Code
                    </a>
                  </div>
                  <article>
                    <div className="text ">
                      <h3>TIME MACHINE</h3>
                      <p className="works-description">
                        Time machine is a website that provides user the current time base on its
                        location. It has additional features which enhance user experience.
                      </p>
                    </div>
                  </article>
                </section>
              </a>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SVG</li>
                <li>React JS</li>
              </ul>
            </div>

            <div className="works">
              <a href="https://beatbox-app-orpin.vercel.app" target="_blank" rel="noreferrer">
                <section className="works-section " style={{ backgroundImage: `url(${beatbox})` }}>
                  <div className="code-link">
                    <a href="https://beatbox-app-orpin.vercel.app" target="_blank" rel="noreferrer">
                      Site
                    </a>
                    <a
                      href="https://www.github.com/billboah/beatbox-app"
                      target="_blank"
                      rel="noreferrer">
                      Source Code
                    </a>
                  </div>
                  <article>
                    <div className="text">
                      <h3>BEATBOX</h3>
                      <p className="works-description">
                        Beatbox is a site that provides different beat in which a user can combine
                        to provide music beat.
                      </p>
                    </div>
                  </article>
                </section>
              </a>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
              </ul>
            </div>

            <div className="works">
              <a href="https://myclock-app.vercel.app" target="_blank" rel="noreferrer">
                <section className="works-section" style={{ backgroundImage: `url(${myclock})` }}>
                  <div className="code-link">
                    <a href="https://myclock-app.vercel.app" target="_blank" rel="noreferrer">
                      Site
                    </a>
                    <a
                      href="https://www.github.com/billboah/myclock"
                      target="_blank"
                      rel="noreferrer">
                      Source Code
                    </a>
                  </div>
                  <article>
                    <div className="text ">
                      <h3>TIME MACHINE</h3>
                      <p className="works-description">
                        Time machine is a website that provides user the current time base on its
                        location. It has additional features to enhance user experience.
                      </p>
                    </div>
                  </article>
                </section>
              </a>
              <h4>Technologies used include:</h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SVG</li>
                <li>JS</li>
              </ul>
            </div>
            <Link className="contact_button_link" to="/contact">
              <div className="contact_button">LET&#39;S TALK</div>
            </Link>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Works;

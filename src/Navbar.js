import './Navbar.scss';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaCode, FaMoon, FaStar, FaSun, FaTimes } from 'react-icons/fa';
import { ThemeContext } from './Theme';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="nav ">
      <div className="nav_logo">
        <FaCode className="code" />
        <div className="logo_name">bill</div>
        <FaStar className="star" />
      </div>
      <ul className="nav_list">
        <li className="nav_link">
          <div
            role="button"
            className="theme-button"
            onClick={toggleTheme}
            onKeyPress={toggleTheme}
            tabIndex="0">
            <FaSun className="sun" />
            <FaMoon className="moon" />
          </div>
        </li>
        <li className="nav_link">
          <Link className="listA" to="/">
            Home
          </Link>
        </li>
        <li className="nav_link">
          <Link className="listA" to="/works">
            Works
          </Link>
        </li>
        <li className="nav_link">
          <Link className="listA" to="/about">
            About
          </Link>
        </li>
        <li className="nav_link">
          <Link className="listA" to="/contact">
            Contact
          </Link>
        </li>
      </ul>

      <div className="nav_small">
        {toggleMenu === false && (
          <div className="small">
            <div
              role="button"
              className="theme-button2"
              onClick={toggleTheme}
              onKeyPress={toggleTheme}
              tabIndex="0">
              <FaSun className="sun" />
              <FaMoon className="moon" />
            </div>
            <FaBars
              className="nav_sro"
              size={15}
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          </div>
        )}
        {toggleMenu === true && (
          <div className="nav_src">
            <FaTimes
              size={15}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="nav_srcList">
              <li className="nav_srcLink">
                <Link
                  className="listA "
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                  to="/">
                  Home
                </Link>
              </li>
              <li className="nav_srcLink">
                <Link
                  className="listA "
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                  to="/works">
                  Works
                </Link>
              </li>
              <li className="nav_srcLink">
                <Link
                  className="listA "
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                  to="/about">
                  About
                </Link>
              </li>
              <li className="nav_srcLink">
                <Link
                  className="listA "
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                  to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

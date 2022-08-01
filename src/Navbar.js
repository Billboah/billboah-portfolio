import './Navbar.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaCode, FaStar, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="nav">
      <div className="nav_logo">
        <FaCode className="code" />
        <div className="logo_name">bill</div>
        <FaStar className="star" />
      </div>
      <ul className="nav_list">
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
          <Link className="listA" to="/service">
            Service
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
          <FaBars
            className="nav_sro"
            size={20}
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu === true && (
          <div className="nav_src">
            <FaTimes
              size={20}
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
                  to="/service">
                  Service
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

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoDesignernews, IoIosList } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(!show);
  };

  if (show === false) {
    return (
      <button className="nav-toggle" onClick={handleClick}>
        <IoIosList />
      </button>
    );
  }
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <IoLogoDesignernews className="logo" />
          <button className="nav-toggle" onClick={handleClick}>
            <TiArrowBack />
          </button>
        </div>
        <div className="link-container">
          <ul className="links">
            <li>
              <Link to="/" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleClick}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleClick}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <ul className="social-icons">
          <li>
            <a href="https://www.google.com" onClick={handleClick}>
              Fb
            </a>
          </li>
          <li>
            <a href="https://www.google.com" onClick={handleClick}>
              Insta
            </a>
          </li>
          <li>
            <a href="https://www.google.com" onClick={handleClick}>
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

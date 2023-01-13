import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoDesignernews } from "react-icons/io";
import { TiArrowBack } from "react-icons/ti";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow((prevState) => !prevState);
  };

  if (show === false) {
    return (
      <button className="sidebar-toggle" onClick={handleClick}>
        <FaBars />
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
            <a
              href="https://tourmaline-clafoutis-6c358a.netlify.app/"
              onClick={handleClick}
            >
              Fb
            </a>
          </li>
          <li>
            <a
              href="https://darknight-tours.netlify.app/"
              onClick={handleClick}
            >
              Insta
            </a>
          </li>
          <li>
            <a
              href="https://stunning-khapse-5b46bf.netlify.app/"
              onClick={handleClick}
            >
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

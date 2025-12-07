import { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Kids Garden Daycare logo" className="logo" />
      </div>
      <div
        className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar__links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#programs" onClick={() => setMenuOpen(false)}>
            Programs
          </a>
        </li>
        <li>
          <a href="#schedule" onClick={() => setMenuOpen(false)}>
            Schedule
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
      {/* <div className="navbar__cta">
        <a href="#enroll" className="navbar__button" aria-label="enroll button">
          Enroll Now
        </a>
      </div> */}
    </nav>
  );
}

export default Navbar;

import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Kids Garden Daycare logo" className="logo" />
        {/* <h1>Kids Garden Daycare</h1> */}
      </div>
      <ul className="navbar__links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#programs">Programs</a>
        </li>
        <li>
          <a href="#schedule">Schedule</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="navbar__cta">
        <a href="#enroll" className="navbar__button">
          Enroll Now
        </a>
      </div>
    </nav>
  );
}

export default Navbar;

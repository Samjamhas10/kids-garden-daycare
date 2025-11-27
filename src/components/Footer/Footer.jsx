import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer
      className="footer"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-offset="150"
    >
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__title">Contact Us</h3>
          <div className="footer__contact-list">
            <p>
              <FaMapMarkerAlt className="footer__icon" />
              959 W. Minnehaha Ave
              <br />
              St. Paul, MN 55104
            </p>
            <p>
              <FaPhone className="footer__icon footer__icon-flip" />
              (651) 493-4951
            </p>
            <p>
              <FaEnvelope className="footer__icon" />
              kidsgardendaycare959@gmail.com
            </p>
            <p>
              <FaClock className="footer__icon" />
              Mon - Fri: 6:00 AM to 10:00 PM
            </p>
          </div>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__list">
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
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Our Programs</h3>
          <ul className="footer__list">
            <li>Infants (0 - 12 months)</li>
            <li>Toddlers (12 months - 3 years)</li>
            <li>Preschool (3 - 5 years)</li>
            <li>School Age (5 - 13 years)</li>
          </ul>
        </div>
      </div>

      <div>
        <p className="footer__copyright">
          @2025 Kids Garden Daycare LLC. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

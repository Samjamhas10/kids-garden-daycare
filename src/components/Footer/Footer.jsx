import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { DAYCARE_INFO, QUICK_LINKS, PROGRAMS } from "../../../constants";
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
              {DAYCARE_INFO.address}
            </p>
            <p>
              <FaPhone className="footer__icon footer__icon-flip" />
              {DAYCARE_INFO.phone}
            </p>
            <p>
              <FaEnvelope className="footer__icon" />
              {DAYCARE_INFO.email}
            </p>
            <p>
              <FaClock className="footer__icon" />
              {DAYCARE_INFO.hours}
            </p>
          </div>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__list">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer__section">
          <h3 className="footer__title">Our Programs</h3>
          <ul className="footer__list">
            {PROGRAMS.map((program) => (
              <li key={program.name}>
                {program.name} ({program.age})
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <p className="footer__copyright">
          {DAYCARE_INFO.copyright}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
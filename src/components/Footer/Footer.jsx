import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h3 className="footer__title">Contact Us</h3>
          <p>
            959 W. Minnehaha Ave
            <br />
            St. Paul, MN 55104
          </p>
          <p>📞 (651) 493-4951</p>
          <p>📧 kidsgardendaycare959@gmail.com</p>
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
            <li>Pre-K (5 - 7 years)</li>
            <li>School Age (7 - 13 years)</li>
          </ul>
        </div>
      </div>

      <div>
        <p className="footer__copyright">
          @2025 Kids Garden Daycare. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

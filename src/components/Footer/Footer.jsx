import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <section id="info" className="footer__info">
        <p>Address: 959 W. Minnehaha Ave St. Paul, MN 55104</p>
        <p>Phone: (651) 493-4951</p>
        <p>Email: kidsgardendaycare959@gmail.com</p>
      </section>
      <div>
        <p className="footer__links">Quick Links</p>
        <ul>
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
      <div>
        <p className="footer__programs">Our Programs</p>
        <ul>
          <li className="footer__list">Infants (0 - 12 months)</li>
          <li className="footer__list">Toddlers (12 months - 3 years)</li>
          <li className="footer__list">Preschool (3 years - 5 years)</li>
          <li className="footer__list">Pre-K (5 years - 7 years)</li>
          <li className="footer__list">Schoolage (7 years - 13 years)</li>
        </ul>
      </div>
      <p>@2025 Kids Garden Daycare. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;

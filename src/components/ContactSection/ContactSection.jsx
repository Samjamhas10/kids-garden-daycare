import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./ContactSection.css";

function ContactSection() {
  const addressLines = ["959 W. Minnehaha Ave", "St. Paul, MN 55104"];
  const addressQuery = encodeURIComponent(addressLines.join(" "));
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

  return (
    <section
      id="contact"
      className="contact"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-offset="150"
    >
      <div className="contact__container">
        <div className="contact__intro">
          <h2 className="contact__heading">
            Let's Start Your Child's Journey Today!
          </h2>
          <p className="contact__subheading">
            Ready to explore what we have to offer?
          </p>

          <div className="contact__list">
            <div className="contact__card">
              <h3>
                <FaMapMarkerAlt className="contact__icon" />
                Visit Us
              </h3>

              <address>
                <a href={mapsHref} target="_blank" rel="noreferrer">
                  {addressLines[0]}
                  <br />
                  {addressLines[1]}
                </a>
              </address>

              <p>
                <a href={mapsHref} target="_blank" rel="noreferrer">
                  Get directions
                </a>
              </p>
            </div>

            <div className="contact__card">
              <h3>
                <FaPhone className="contact__icon contact__icon-flip" />
                Call Us
              </h3>
              <p>
                <a href="tel:+16514934951">(651) 493-4951</a>
              </p>
              <p>Call us anytime during open hours — we’re happy to help!</p>
            </div>

            <div className="contact__card">
              <h3>
                <FaEnvelope className="contact__icon" />
                Email Us
              </h3>
              <p>
                <a href="mailto:kidsgardendaycare959@gmail.com">
                  kidsgardendaycare959@gmail.com
                </a>
              </p>
              <p>We respond within 1-2 business days</p>
            </div>

            <div className="contact__card">
              <h3>
                <FaClock className="contact__icon" />
                Daycare Hours
              </h3>
              <p>Mon - Fri: 6:00 AM to 10:00 PM</p>
              <p>Tours available — we accept walk-ins and by appointment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

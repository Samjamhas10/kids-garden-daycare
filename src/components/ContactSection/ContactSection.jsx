import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section id="contact" className="contact">
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
                959 W. Minnehaha Ave
                <br />
                St. Paul, MN 55104
              </address>
              <p>Located in the heart of Saint Paul</p>
            </div>

            <div className="contact__card">
              <h3>
                <FaPhone className="contact__icon" />
                Call Us
              </h3>
              <p>(651) 493-4951</p>
              <p>Call us anytime during open hours — we’re happy to help!</p>
            </div>

            <div className="contact__card">
              <h3>
                <FaEnvelope className="contact__icon" />
                Email Us
              </h3>
              <p>kidsgardendaycare959@gmail.com</p>
              <p>We respond within 1-2 business days</p>
            </div>

            <div className="contact__card">
              <h3>
                <FaClock className="contact__icon" />
                Daycare Hours
              </h3>
              <p>Mon - Sun: 7:00AM to 9:30PM</p>
              <p>Tours availble — we accept walk-ins and by appointment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

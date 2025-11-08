import "./ContactSection.css";

function ContactSection() {
  return (
    <section id="contact" className="contact">
      <div className="contact__intro">
        <h2 className="contact__heading">
          Let's start your child's journey today!
        </h2>
        <p className="contact__subheading">
          Ready to explore what we have to offer?
        </p>

        <div className="contact__item">
          <h3>Visit Us</h3>
          <address>
            959 W. Minnehaha Ave
            <br />
            St. Paul, MN 55104
          </address>
        </div>

        <div className="contact__item">
          <h3>Call Us</h3>
          <p>📞 (651) 493-4951</p>
        </div>

        <div className="contact__item">
          <h3>Email Us</h3>
          <p>📧 kidsgardendaycare959@gmail.com</p>
        </div>

        <div className="contact__item">
          <h3>Daycare Hours</h3>
          <p>Mon - Sun: 7:00AM to 9:30PM</p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

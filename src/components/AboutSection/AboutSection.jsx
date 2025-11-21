import "./AboutSection.css";

function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__intro">
          <h2>About Kids Garden Daycare</h2>
          <h3>Learning, Playing, and Growing Together </h3>
          <p>
            We are committed to helping each child achieve their full potential.
            Our safe, nurturing, and engaging environment encourages children to
            explore, learn, and develop the social, emotional, and academic
            skills they need to flourish.
          </p>
        </div>

        <div className="about__story">
          <h3>Our Story</h3>
          <p>
            Founded by early childhood educator Mohamed Gayle, Kids Garden
            Daycare began as a...
          </p>
          <p>
            Our experienced educators and caregivers love what they do and work
            tirelessly to help each child thrive and grow.
          </p>
        </div>

        <div className="about__founder">
          {/* <img
            src={founderImage}
            alt="Mohamed Gayle"
            className="founder__image"
          /> */}
          <div className="founder__avatar">👨🏾‍🏫</div>
          <div className="about__founder-info">
            <h4>Mohamed Gayle</h4>
            <p className="about__founder-role">Director & Founder</p>
            <blockquote>
              "Our mission is to provide every child with the tools and
              environment to flourish."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

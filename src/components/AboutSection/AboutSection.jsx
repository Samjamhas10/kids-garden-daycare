import "./AboutSection.css";

function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about__intro">
        <h2>About Kids Garden Daycare</h2>
        <h3>Learning, Playing, and Growing Together </h3>
        <p>
          We are dedicated to helping every child reach their fullest potential.
          We provide a safe, caring, and stimulating environment where children
          can explore, learn, and develop the skills they need to
          thrive—socially, emotionally, and academically.
        </p>
      </div>

      <div className="about__story">
        <h3>Our Story</h3>
        <p>
          Founded by early childhood educator Mohamed Gayle, Kids Garden Daycare
          began as a...
        </p>
        <p>
          Our experienced team of educators and caregivers are passionate about
          early childhood development and committed to helping each child reach
          their full potential.
        </p>
      </div>

      <div className="about__founder">
        {/* <img
          src={founderImage}
          alt="Mohamed Gayle"
          className="founder__image"
        /> */}
        <div className="about__founder-info">
          <h4>Mohamed Gayle</h4>
          <p className="about__founder-role">Director & Founder</p>
          <blockquote>""</blockquote>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

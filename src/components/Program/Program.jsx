import infantsImg from "../../assets/infants.png";
import toddlersImg from "../../assets/toddlers.png";
import preschoolImg from "../../assets/preschool.png";
import schoolageImg from "../../assets/schoolage.png";
import "./Program.css";

function Program() {
  return (
    <section id="programs" className="programs">
      <div className="programs__container">
        <h2 className="program__heading">Our Programs</h2>
        <h3 className="program__heading-two">
          Age Appropriate Learning Programs
        </h3>
        <p>
          From infants to school-age children, we offer developmentally
          appropriate programs that support each child’s unique growth and
          learning journey.
        </p>
        <div className="program__list">
          <div className="program__card">
            <img src={infantsImg} alt="Infants" />
            <h3>Infants</h3>

            <p>
              Loving and nurturing care focused on growth, comfort, and
              individual routines.
            </p>
            <ul className="program__features">
              <li>Personalized feeding & sleeping schedules</li>
              <li>Sensory exploration</li>
              <li>Tummy time & early motor development</li>
            </ul>
          </div>
          <div className="program__card">
            <img src={toddlersImg} alt="Toddlers" />
            <h3>Toddlers</h3>
            <p>
              Encouraging independence, language and social skills through hands
              on learning.
            </p>
            <ul className="program__features">
              <li>Sensory play activities</li>
              <li>Social interaction & sharing skills</li>
              <li>Potty training support</li>
            </ul>
          </div>
          <div className="program__card">
            <img src={preschoolImg} alt="Preschool" />
            <h3>Preschool</h3>
            <p>
              Play-based learning that builds early academi skills and school
              readiness.{" "}
            </p>
            <ul className="program__features">
              <li>Early literacy and numeracy</li>
              <li>Dramatic & imaginative play</li>
              <li>Fine motor development activities</li>
            </ul>
          </div>
          <div className="program__card">
            <img src={schoolageImg} alt="Schoolage" />
            <h3>School Age</h3>
            <p>Supportive afterschool care with enrichment activities</p>
            <ul className="program__features">
              <li>Homework & reading support </li>
              <li>STEM & creative projects</li>
              <li>Social & teamwork activities</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Program;

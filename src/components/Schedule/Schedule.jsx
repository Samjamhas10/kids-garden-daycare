import { FaClock } from "react-icons/fa";
import "./Schedule.css";

function Schedule() {
  return (
    <section
      id="schedule"
      className="schedule"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-offset="150"
    >
      <div className="schedule__content">
        <h2 className="schedule__title">Structured Days, Happy Children</h2>
        <p className="schedule__subtitle">
          Each day is thoughtfully structured to give children the right mix of
          learning, playtime, rest, and nourshing meals for healthy growth.
        </p>
        <div className="schedule__hours">
          <h3>
            <FaClock className="schedule__icon" />
            Operating Hours
          </h3>
          <p className="schedule__hours-subtitle">
            We're here when you need us most
          </p>
          <div className="schedule__hoursGrid">
            <div>
              <h4>Monday – Friday</h4>
              <p>6:00 AM – 10:00 PM</p>
            </div>
            <div>
              <h4>Saturday</h4>
              <p>8:00 AM – 4:00 PM</p>
              <p className="schedule__note">By request only</p>
            </div>
            <div>
              <h4>Sunday</h4>
              <p>Closed</p>
              <p className="schedule__note">Family Time!</p>
            </div>
          </div>
          <p className="schedule__extended">
            Need care outside of these hours? we offer extended care upon
            request
          </p>
          <button className="schedule__btn">Call for Extended Hours</button>
        </div>
        <div className="schedule__age-tabs">
          <button>Infants</button>
          <button>Toddlers</button>
          <button>Preschool</button>
          <button>School Age</button>
        </div>
      </div>
    </section>
  );
}

export default Schedule;

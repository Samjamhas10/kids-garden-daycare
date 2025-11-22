import homeImage from "../../assets/home-bg.png";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home__content">
        <h1>Welcome To Kids Garden Daycare</h1>
        <h3>Where Learning & Fun Go Hand In Hand</h3>
        <p>
          Nurturing your child's growth, curiosity, and happiness in a safe,
          loving environment. Professional care for ages 0-13 with educational
          programs that inspire lifelong learning.
        </p>
      </div>
      <div className="home__image-container">
        <img src={homeImage} alt="Kids Playing" className="home__image"></img>
      </div>
    </section>
  );
}

export default Home;

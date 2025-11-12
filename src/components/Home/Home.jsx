import homeImage from "../../assets/home-bg.png";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home__content">
        <h1>Welcome To Kids Garden Daycare</h1>
        <h3>Where Learning & Fun Go Hand In Hand</h3>
      </div>
      <div className="home__image">
        <img src={homeImage} alt="Kids Playing"></img>
      </div>
    </section>
  );
}

export default Home;

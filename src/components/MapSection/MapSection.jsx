import mapIcon from "../../assets/map-icon.svg";
import "./MapSection.css";

function MapSection() {
  return (
    <section className="mapSection">
      <div className="mapSection__container">
        <img src={mapIcon} alt="map" />
        <h2>Find Us</h2>
        <p>
          Located in the heart of Saint Paul, we're easy to find and convenient
          to reach.
        </p>
        <iframe
          className="map"
          src="https://www.google.com/maps?q=959+W+Minnehaha+Ave+St+Paul+MN+55104&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default MapSection;

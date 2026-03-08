import { useState } from "react";
import PropTypes from "prop-types";
import mapIcon from "../../assets/map-icon.svg";
import "./MapSection.css";

const MAP_CONFIG = {
  address: "959 W. Minnehaha Ave St. Paul MN 55104",
  title: "Kids Garden Daycare Location",
};

function MapSection() {
  const [mapError, setMapError] = useState(false);

  const handleMapError = () => {
    console.error("Failed to load map");
    setMapError(true);
  };

  const mapUrl = `https://www.google.com/maps?q=${MAP_CONFIG.address}&output=embed`;

  return (
    <section
      className="mapSection"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-offset="150"
    >
      <div className="mapSection__container">
        <img src={mapIcon} alt="Map icon representing location" />
        <h2>Find Us</h2>
        <p>
          Located in the heart of Saint Paul, we're easy to find and convenient
          to reach.
        </p>

        {mapError ? (
          <div className="mapSection__error">
            <p>Unable to load map. Please visit us at:</p>
            <p>{MAP_CONFIG.address}</p>
          </div>
        ) : (
          <iframe
            className="map"
            title={MAP_CONFIG.title}
            src={mapUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onError={handleMapError}
          />
        )}
      </div>
    </section>
  );
}

MapSection.propTypes = {};

export default MapSection;

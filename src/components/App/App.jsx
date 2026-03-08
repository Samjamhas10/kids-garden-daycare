import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import components
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import AboutSection from "../AboutSection/AboutSection";
import Program from "../Program/Program";
import Schedule from "../Schedule/Schedule";
import ContactSection from "../ContactSection/ContactSection";
import ContactForm from "../ContactForm/ContactForm";
import MapSection from "../MapSection/MapSection";
import Footer from "../Footer/Footer";

// Import styles
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
      offset: 80,
    });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <Home />
      <AboutSection />
      <Program />
      <Schedule />
      <ContactSection />
      <ContactForm />
      <MapSection />
      <Footer />
    </div>
  );
}

export default App;

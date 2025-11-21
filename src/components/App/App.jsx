import { useState } from "react";

//import components
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import AboutSection from "../AboutSection/AboutSection";
import Program from "../Program/Program";
import Schedule from "../Schedule/Schedule";
import ContactSection from "../ContactSection/ContactSection";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";

// import styles
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Navbar />
      <Home />
      <AboutSection />
      <Program />
      <Schedule />
      <ContactSection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

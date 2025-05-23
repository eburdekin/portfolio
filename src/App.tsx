import React, { useState, useEffect } from "react";
import Menu from "./components/Nav";
import Hero from "./sections/Hero";
// import Experience from "./sections/Experience";
import ContactIcons from "./components/ContactIcons";
import Work from "./sections/Work";
import Skills from "./sections/Skills";
import Reviews from "./sections/Reviews";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className="page-container">
        <div className="sidebar-left">
          <div className="sidebar-left-icons">
            <ContactIcons />
          </div>
        </div>
        <div className="sidebar-right">
          <div className="sidebar-right-text">
            <a href="mailto:eburdekin@proton.me">eileenburdekin@proton.me</a>
          </div>
        </div>
        <Menu />

        <div className="hero-container">
          <Hero />
        </div>
        <div className="sections-container">
          {/* <Experience /> */}
          <Work />
          <Skills />
          <Reviews />
          <Contact />
          <Footer />
        </div>
        {showBackToTop && (
          <button className="scroll-to-top-button" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} size="xl" color="#97cfbb" />
          </button>
        )}
      </div>
    </div>
  );
}

export default App;

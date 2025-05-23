import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactIcons from "../components/ContactIcons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-headers">
        <h1>Eileen Burdekin</h1>
        <h2>Web Developer</h2>
        <div className="location">
          <FontAwesomeIcon icon={faLocationDot} size="lg" color="#97cfbb" />
          <p>Los Angeles, CA</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

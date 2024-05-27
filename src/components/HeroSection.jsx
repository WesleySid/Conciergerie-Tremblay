import React from "react";
import "./HeroSection.css";
import heroBackground from "../assets/bg-transport.jpg";

const HeroSection = () => {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="hero-content">
        <h1>Chauffeur haut de gamme à Paris</h1>
        <button className="cta-button">Demandez un devis</button>
      </div>
      <div className="contact-info">
        <p>Réservez votre trajet</p>
        <p>(+33) 1 33 33 33 33</p>
      </div>
    </div>
  );
};

export default HeroSection;

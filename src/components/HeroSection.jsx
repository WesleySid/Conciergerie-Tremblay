import React, { useState } from "react";
import "./HeroSection.css";
import heroBackgroundGif from "../assets/herogif.gif";
import ContactModal from "./ContactModal";

const HeroSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${heroBackgroundGif})` }}
    >
      <div className="hero-content">
        <h1>Chauffeur haut de gamme à Paris</h1>
        <button className="cta-button" onClick={openModal}>
          Demandez un devis
        </button>
      </div>
      <div className="contact-info">
        <p>Réservez votre trajet</p>
        <p>(+33) 1 33 33 33 33</p>
      </div>
      <ContactModal isOpen={modalIsOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default HeroSection;

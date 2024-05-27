// ContactModal.js
import React from "react";
import Modal from "react-modal";
import "./ContactModal.css";

const ContactModal = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Contact Form"
      className="Modal"
      overlayClassName="Overlay"
    >
      <h2>Formulaire de contact</h2>
      <form>
        <input type="text" placeholder="Votre nom" />
        <input type="email" placeholder="Votre email" />
        <input type="tel" placeholder="Votre numéro de téléphone" />
        <input type="text" placeholder="Lieu de prise en charge" />
        <input type="text" placeholder="Votre destination" />
        <input type="date" placeholder="Date de prise en charge" />
        <input type="time" placeholder="Heure de prise en charge" />
        <textarea placeholder="Votre message"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </Modal>
  );
};

export default ContactModal;

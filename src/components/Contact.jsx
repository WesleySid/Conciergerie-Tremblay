import React from "react";
import "./Contact.css";
import logo from "../assets/logo.jpg"; // Assurez-vous d'avoir votre logo ici

const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Luxury Transport" />
          <p>Projet Tremblay</p>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>78 AV des Champs Elysées</p>
          <p>75008 Paris</p>
          <p>
            <a href="mailto:contact@contact.fr">contact@contact.fr</a>
          </p>
          <p>+33 1 89 70 89 97</p>
          <p>+33 6 25 18 88 67</p>
        </div>
        <div className="footer-services">
          <h3>Services</h3>
          <ul>
            <li>Transfert Aéroport</li>
            <li>Paris intra-muros</li>
            <li>Mise à disposition</li>
            <li>Évènements</li>
            <li>Longue distance</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2024 Projet Tremblay |{" "}
          <a href="#mentions-legales">Mentions légales</a> -{" "}
          <a href="#privacy-policy">Politique de confidentialité</a> |
          Conception Wesley S.
        </p>
      </div>
    </footer>
  );
};

export default Contact;

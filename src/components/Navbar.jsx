import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"> PROJET EN COURS CONCIERGERIE TREMBLAY</div>
      <ul className="navbar-menu">
        <li>
          <a href="#home">Accueil</a>
        </li>
        <li>
          <a href="#services">Nos Services</a>
        </li>
        <li>
          <a href="#vehicles">Nos Véhicules</a>
        </li>
        <li>
          <a href="#contact">Contact / Devis</a>
        </li>
        <li>
          <a href="#booking">Réserver un Trajet</a>
        </li>
        <li>
          <a href="#languages">Langues</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

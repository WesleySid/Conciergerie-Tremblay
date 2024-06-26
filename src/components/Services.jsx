import React, { useEffect, useRef } from "react";
import "./Services.css";
import serviceImage1 from "../assets/service1.jpg";
import serviceImage2 from "../assets/service2.jpg";
import serviceImage3 from "../assets/service3.jpg";
import serviceImage4 from "../assets/service4.jpg";
import serviceImage5 from "../assets/service5.jpg";
import gammeImage1 from "../assets/gamme1.jpg";
import gammeImage2 from "../assets/gamme2.jpg";
import gammeImage3 from "../assets/gamme3.jpg";
import gammeImage4 from "../assets/gamme4.jpg";
import gammeImage5 from "../assets/gamme5.jpg";
import presentationImage from "../assets/presentation.jpg";

const Services = () => {
  const serviceItemsRef = useRef([]);
  const gammeItemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("animate");
          }, 300); // Retard de 300ms avant l'ajout de la classe animate
        }
      });
    });

    serviceItemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    gammeItemsRef.current.forEach((item) => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      serviceItemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });

      gammeItemsRef.current.forEach((item) => {
        if (item) {
          observer.unobserve(item);
        }
      });
    };
  }, []);

  const services = [
    {
      title: "Paris intra muros",
      description:
        "Offrez-vous un service de transport vers Paris intra-muros de qualité, assurant des déplacements fluides et agréables au cœur de la ville lumière, avec notre société spécialisée.",
      image: serviceImage1,
    },
    {
      title: "Mise à disposition",
      description:
        "Service de mise à disposition de véhicules avec chauffeur, vous offrant flexibilité et confort pour vos déplacements selon vos besoins et horaires.",
      image: serviceImage2,
    },
    {
      title: "Évènement",
      description:
        "Nous proposons des services de transport événementiel sur mesure pour vos occasions spéciales, assurant une logistique impeccable et un confort optimal pour vous et vos invités.",
      image: serviceImage3,
    },
    {
      title: "Longue distance",
      description:
        "Découvrez l’ultime expérience du voyage avec notre service de transport longue distance haut de gamme. Parcourez les routes dans un luxe incomparable, où le confort et le raffinement se marient à la perfection.",
      image: serviceImage5,
    },
    {
      title: "Transfert aéroport",
      description:
        "Nous assurons des transferts vers et depuis les principaux aéroports parisiens, incluant Orly, Roissy-Charles de Gaulle, Le Bourget et Beauvais, garantissant des trajets sûrs et sans tracas pour votre voyage.",
      image: serviceImage4,
    },
  ];

  const gammes = [
    {
      title: "Gamme Classic",
      description: [
        "Jusqu'à 3 passagers",
        "Jusqu'à 3 bagages",
        "Wi-fi",
        "Rafraîchissement",
        "Sièges enfants",
      ],
      image: gammeImage1,
    },
    {
      title: "Gamme Luxury",
      description: [
        "Jusqu'à 2 passagers",
        "Jusqu'à 2 bagages",
        "Wi-fi",
        "Rafraîchissement",
        "Sièges enfants",
      ],
      image: gammeImage4,
    },
    {
      title: "Gamme Van",
      description: [
        "Jusqu'à 7 passagers",
        "Jusqu'à 7 bagages",
        "Wi-fi",
        "Rafraîchissement",
        "Sièges enfants",
      ],
      image: gammeImage5,
    },
  ];

  return (
    <div>
      <div className="presentation">
        <div className="presentation-content">
          <h2>??? transport à Paris</h2>
          <div className="presentation-body">
            <img
              src={presentationImage}
              alt="Luxury Transport"
              className="presentation-image"
            />
            <div className="presentation-text">
              <p>
                ??? Transport est une société spécialisée dans le transport de
                personnes, offrant ses services de transfert aéroport, Paris
                intra-muros, mise à disposition, longue distance et Évènements.
              </p>
              <p>
                Nos services sont proposés aux particuliers et aux
                professionnels, ainsi nous assurons 24h/24 et 7j/7 vos
                transferts vers les aéroports (Roissy CDG, Orly, Le Bourget et
                Beauvais), les gares parisiennes, et toutes autres destinations.
              </p>
            </div>
          </div>
          <div className="presentation-footer">
            <a href="#services" className="presentation-button">
              Nos services
            </a>
          </div>
        </div>
      </div>

      <div className="services-carousel" id="services">
        <div className="services-list">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-item"
              ref={(el) => (serviceItemsRef.current[index] = el)}
            >
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="gammes-section">
        <h2>Nos différentes gammes</h2>
        <p>
          Nous disposons d'une large gamme de véhicules soigneusement
          sélectionnés pour répondre à tous vos besoins en matière de transport.
        </p>
        <p>
          De nos voitures élégantes et confortables pour les déplacements
          personnels à Paris et vers les aéroports, à nos véhicules haut de
          gamme adaptés aux exigences des professionnels et des entreprises,
          nous avons la solution parfaite pour chaque occasion.
        </p>
        <div className="gammes-list">
          {gammes.map((gamme, index) => (
            <div
              key={index}
              className="gamme-item"
              ref={(el) => (gammeItemsRef.current[index] = el)}
            >
              <img src={gamme.image} alt={gamme.title} />
              <h3>{gamme.title}</h3>
              <ul>
                {gamme.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

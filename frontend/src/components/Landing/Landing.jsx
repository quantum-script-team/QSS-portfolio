import { useEffect, useState } from 'react';
import imgInicioAlt from "/img/Inicio/imgInicioAlt.webp";
import "../../styles/landing/landing.css";

const Landing = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/img/Inicio/background.webp";

    img.onload = () => {
      setLoaded(true);
    };
  }, ["/img/Inicio/background.webp"]);

  const backgroundStyle = {
    backgroundImage: loaded ? `url(${"/img/Inicio/background.webp"})` : 'none',
  };

  return (
    <div className="landing" style={backgroundStyle}>
      <div className="landing__description">
        <h1 className="landing__h1">QuantumScript Services</h1>
        <h4 className="landing__description--h4">
          Agencia de desarrollo de aplicaciones web
        </h4>
        <p className="landing__description--p">
          Creamos páginas web impactantes que potencian tu presencia online,
          abriendo oportunidades para tu negocio en el vasto mundo digital.
        </p>
        <a href="#contactus" className="landing__btn--contacto">
          Contáctanos
        </a>
      </div>
      <div className="landing__container">
        <img
          src={imgInicioAlt}
          alt="imgInicio"
          className="landing__container--img"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Landing;

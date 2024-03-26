import { Link } from 'react-router-dom';
import "../../styles/about/about.css" 

const AboutUs = () => {

  return (
    <section className="about__section__container" id="about">
      <h1 className='header'>ACERCA DE QSS</h1> 
      <hr className="underline" />
      <article className="about-container">
        <p>
          Nos encargamos de potenciar el crecimiento empresarial a través de soluciones integrales en tecnología informática, QuantumScript Services se posiciona como un socio estratégico esencial, brindando un sólido sustento para la cadena de valor de sus clientes. Además, nuestro compromiso se centra en impulsar la excelencia y la innovación, guiando a las empresas hacia un futuro digital exitoso con resultados duraderos.
        </p>
        <Link className='about__link' to='/about'>Conoce más acerca de QSS</Link>
      </article>
    </section>
  );
};

export default AboutUs;
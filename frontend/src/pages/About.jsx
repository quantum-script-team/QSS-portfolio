import CardAbout from "../components/About/CardAbout";
import "../styles/about/Aboutstyles.css";
import { Link } from "react-router-dom";
import { companyTeam } from "../data/team.json";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const About = () => {
  return (
    <section className="about__page__container">
      <h1>Nuestro equipo</h1>
      <div id="back__container">
        <Link id="back__button" to="/">
          <MdOutlineArrowBackIosNew size={"1rem"} />
        </Link>
      </div>
      <article id="about__description">
        <p>
          QuantumScript Services, originado como un emprendimiento de tres
          visionarios, ha evolucionado con determinación para convertirse en un
          equipo sólido y dinámico. Inicialmente enfocados en la venta de
          páginas web, nuestro crecimiento ha sido impulsado por la
          incorporación de talentosos desarrolladores y hábiles vendedores.
          Ahora, nos enorgullece presentarnos como un equipo integral que ofrece
          soluciones completas en el mundo digital.
        </p>
        <p>
          En QuantumScript Services, no solo creamos sitios web excepcionales,
          sino que también proporcionamos servicios de hosting confiables para
          garantizar un rendimiento óptimo. Nuestra dedicación no se detiene en
          la entrega del producto, sino que se extiende al mantenimiento
          continuo y al diseño innovador, brindando a nuestros clientes un apoyo
          integral en su presencia en línea.
        </p>
        <p>
          Somos más que un equipo de venta de páginas web; somos arquitectos
          digitales comprometidos con el éxito a largo plazo de nuestros
          clientes. Nuestro objetivo es trascender las expectativas, fusionando
          la creatividad con la tecnología para esculpir una presencia en línea
          que no solo sea visualmente impactante, sino también funcional y
          sostenible. En QuantumScript Services, construimos más que sitios web;
          construimos asociaciones duraderas basadas en la excelencia digital y
          la innovación constante.
        </p>
      </article>
      <article className="card-group">
        {companyTeam.map((member) => (
          <CardAbout
            key={member.id}
            memberNumber={member.id}
            memberData={member}
          />
        ))}
      </article>
    </section>
  );
};

export default About;

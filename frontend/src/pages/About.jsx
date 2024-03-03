import CardAbout from "../components/About/CardAbout"; 
import '../styles/about/Aboutstyles.css';
import { Link } from "react-router-dom";
import {companyTeam} from '../data/team.json'

const About = () => {

  return (
    <section className="about__page__container">
      <h1>Equipo de desarrolladores</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore minus quam aspernatur aut eos dicta
        numquam consequatur soluta, perspiciatis at atque ipsam explicabo veniam harum tempore neque alias
        ipsum eum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus sed animi deserunt
        facilis amet aperiam labore laboriosam magni in tenetur quas cum vero minus autem praesentium quia
        quae, est non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, veritatis.
        Voluptate, veniam dicta. Obcaecati cupiditate dolor quia,vero dignissimos voluptate aut, illum
        odit incidunt cum explicabo, porro minima harum voluptatem!
      </p>
      <br />
      <article className="card-group">
        {companyTeam.map((member, index) => (
          <CardAbout
            key={member.id}
            memberNumber={member.id}
            memberData={member}
            isLastInGroup={index % 2 !== 0 || index === companyTeam.length - 1}
          />
        ))}
      </article>
      <br />
      <Link id="back__button" to='/'>Volver</Link>
    </section>
  );
};

export default About;
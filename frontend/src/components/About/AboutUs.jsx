import { Link } from 'react-router-dom';
import "../../styles/about/about.css" 

const AboutUs = () => {

  return (
    <section className="about__section__container">
      <h1 className='header'>ACERCA DE QSS</h1> 
      <hr className="underline" />
      <article className="about-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore minus quam aspernatur
          aut eos dicta numquam consequatur soluta, perspiciatis at atque ipsam explicabo veniam
          harum tempore neque alias ipsum eum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus sed animi deserunt facilis amet aperiam labore
          laboriosam magni in tenetur quas cum vero minus autem praesentium quia quae, est non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, veritatis. Voluptate, veniam dicta. Obcaecati cupiditate dolor quia,vero dignissimos voluptate aut, illum odit incidunt cum explicabo, porro minima harum voluptatem!
        </p>
        <Link className='about__link' to='/about'>Conocé más acerca de QSS</Link>
      </article>
    </section>
  );
};

export default AboutUs;
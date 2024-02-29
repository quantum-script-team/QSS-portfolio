import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/about/about.css" 
import About from "../components/About/About";

const AboutUs = () => {
  const navigate = useNavigate();

  const handleQssClick = () => {
    navigate('/about');
  }; 

  return (
    <div className="app-container">
      <header className="header">
        <a href="#" onClick={handleQssClick}>
        <h1>ACERCA DE QSS</h1> 
        
        </a>
      </header>
      <main>
      <hr className="underline" />
        <section className="about-container">
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore minus quam aspernatur
            aut eos dicta numquam consequatur soluta, perspiciatis at atque ipsam explicabo veniam
            harum tempore neque alias ipsum eum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus sed animi deserunt facilis amet aperiam labore
             laboriosam magni in tenetur quas cum vero minus autem praesentium quia quae, est non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, veritatis. Voluptate, veniam dicta. Obcaecati cupiditate dolor quia,vero dignissimos voluptate aut, illum odit incidunt cum explicabo, porro minima harum voluptatem!
          </p>
          <button onClick={handleQssClick}>Conoce más acerca de QSS</button>
        </section>
      </main>
      
    </div>
  );
};

export default AboutUs;
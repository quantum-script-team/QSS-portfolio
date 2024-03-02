import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardAbout from "./CardAbout"; 
import '../../styles/about/Aboutstyles.css';

import img1 from '../../../public/img/miembros/1.jpeg';
import img2 from '../../../public/img/miembros/2.jpeg';
import img3 from '../../../public/img/miembros/3.jpeg';
import img4 from '../../../public/img/miembros/4.jpeg';
import img5 from '../../../public/img/miembros/5.jpeg';

const About = () => {
  const navigate = useNavigate();

  const teamMembers = [
    { number: 1, imageUrl: img2, description: 'Descripción del Miembro 1' },
    { number: 2, imageUrl: img1, description: 'Descripción del Miembro 2' },
    { number: 3, imageUrl: img3, description: 'Descripción del Miembro 3' },
    { number: 4, imageUrl: img4, description: 'Descripción del Miembro 4' },
    { number: 5, imageUrl: img5, description: 'Descripción del Miembro 5' },

  ];

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="about-container">
      <h1>EQUIPO DEVS</h1>
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
      <div className="card-group">
        {teamMembers.map((member, index) => (
          <CardAbout
            key={member.number}
            memberNumber={member.number}
            imageUrl={member.imageUrl}
            description={member.description}
            isLastInGroup={index % 2 !== 0 || index === teamMembers.length - 1}
          />
        ))}
      </div>
      <br />
      <button onClick={goBack}>Volver</button>
    </div>
  );
};

export default About;
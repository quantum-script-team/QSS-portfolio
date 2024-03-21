import CardAbout from "../components/About/CardAbout"; 
import '../styles/about/Aboutstyles.css';
import { Link } from "react-router-dom";
import {companyTeam} from '../data/team.json'

const About = () => {

  return (
    <div>
          {/* <p>Bienvenido a </p> */}
          <img src="https://naturally-fresh.web.app/images/wraps/1.jpg" alt="wraps"  width="100" height="250"></img>
    </div>
  );
};

export default About;
import "../../styles/footer/footer.css";
import { FaInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
// import { AiOutlineFacebook } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__copy">
        Copyright &copy; QuantumScript Services 2024
      </p>
      <ul className="footer__social">
        <li>
          <a
            href="https://www.instagram.com/quantumscript.web"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social--icon"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="mailto:contact.quantumscript@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social--icon"
          >
            <MdOutlineMailOutline />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/quantumscript-services/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social--icon"
          >
            <AiOutlineLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

/*

<FaInstagram />
<MdOutlineMailOutline />
<AiOutlineLinkedin />

*/

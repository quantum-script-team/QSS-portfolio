import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import '../../styles/about/aboutCard.css'

const CardAbout = ({ memberData }) => {
  return (
    <div className={`card`}>
      <div className="card-image">
        <img src={`/img/miembros/${memberData.photo}`} alt={memberData.name} />
      </div>
      <div className="card-description">
        <div className="card__data">
          <div className="member__data">
            <h2>{memberData.name}</h2>
            <p>{memberData.role}</p>
          </div>
          <div className="card__links">
            <a href={memberData.linkedIn} target="_blank" rel="noreferrer">
              <AiOutlineLinkedin size={"2em"} style={{color: "#7F5AF0"}} />
            </a>
            <a href={memberData.github} target="_blank" rel="noreferrer">
              <AiOutlineGithub size={"2em"} style={{color: "#7F5AF0"}} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
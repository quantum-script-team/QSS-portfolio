import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import '../../styles/about/aboutCard.css'

const CardAbout = ({isLastInGroup, memberData }) => {

  return (
    <div className={`card ${isLastInGroup ? 'last-in-group' : ''}`}>
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
              <AiOutlineLinkedin className="icon__card--dev" size={"2em"}/>
            </a>
            <a href={memberData.github} target="_blank" rel="noreferrer">
              <AiOutlineGithub className="icon__card--dev" size={"2em"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
import React from 'react';

const CardAbout = ({ memberNumber, imageUrl, description, isLastInGroup }) => {
  return (
    <div className={`card ${isLastInGroup ? 'last-in-group' : ''}`}>
      <div className="card-image">
        <img src={imageUrl} alt={`Miembro ${memberNumber}`} />
      </div>
      <div className="card-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardAbout;
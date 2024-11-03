import React from 'react'


const HogCard = ({ hog }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={hog.image} alt={hog.name} />
      </div>
      <div className="content">
        <h3>{hog.name}</h3>
      </div>
    </div>
  );
};

export default HogCard;


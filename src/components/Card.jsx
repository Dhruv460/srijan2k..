import React from "react";
import "../Card.css"; // Import the CSS file for styling

const Card = ({ frontImage, backImage }) => {
  return (
    <div className="container">
      <div className="card">
        <div
          className="front"
          style={{ backgroundImage: `url(${frontImage})` }}
        >
          <p className="front-heading">Front card</p>
          <p>Follow Me For More</p>
        </div>
        <div className="back" style={{ backgroundImage: `url(${backImage})` }}>
          <p className="back-heading">Back card</p>
          <p>Follow Me For More</p>
        </div>
      </div>
    </div>
  );
};

export default Card;

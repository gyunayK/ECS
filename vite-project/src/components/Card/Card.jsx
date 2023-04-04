import React from "react";
import { CardStyled } from "./Card.Styled";
const Card = () => {
  return (
    <div className="mt-32">
      <CardStyled>
        <div className="card-body">
          <h1 className="card-title"> Rolex Submariner</h1>
          <img
            className="card-img-top"
            src="https://raffijewellers.com/wp-content/themes/raffi/rolex/assets/thumbnails/front_facing/M116500LN-0002.png"
          ></img>
          <p className="card-text">Date</p>

          <button className="btn"> Select</button>
        </div>
      </CardStyled>
    </div>
  );
};

export default Card;

import React from "react";
import "../card/card.style.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      {" "}
      <h1>{props.monster.name}</h1>
    </div>
  );
};

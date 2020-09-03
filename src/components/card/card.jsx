import React from "react";
import "./card.styles.css"

export const Card = (props) => (
  <div className="card-container">
    <img src={`https://robohash.org/${props.yo}?set=set2&size=180x180`} alt="monster-image"/>
    <h1>
      {props.monster}
    </h1>
  </div>
)

import React from "react";
import "./card-list.styles.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set3&size=150x150`}
        alt=""
      />
      <h1>{props.monster.name}</h1>
      <h3>{props.monster.email}</h3>
    </div>
  );
};
export default Card;

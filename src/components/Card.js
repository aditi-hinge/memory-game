import React from "react";

export default function Card(props) {
  return (
    <div className="card" onClick={props.clickHandle}>
      <img src={props.source} alt={props.name} className="card-image" />
      <h2 className="card-name">{props.name}</h2>
    </div>
  );
}

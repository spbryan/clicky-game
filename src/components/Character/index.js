import React from "react";
import "./style.css";

function Character(props) {
  return (
    // <div className="card">
      <div className="img-container" id={props.key}>
        <img alt="skyrim character" src={props.image} />
      </div>
    // </div>
  );
}

export default Character;

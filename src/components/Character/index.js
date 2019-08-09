import React from "react";
import "./style.css";

const Character = props => (
  <div className="card img-container hover">
      <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.shuffleCharacters(props.id)} className='shuffleScore'/>
  </div>
);

export default Character;

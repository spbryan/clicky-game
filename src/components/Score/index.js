import React from "react";
import "./style.css";

const Score = props => (
  <div className="gameScore mt-3 mb-5">
    <h4>Do Not Click on the Same NPC Twice!</h4>
    <h3 className="score">Your Score: {props.total}</h3>
    <h4 className="status">{props.status}</h4>
  </div>
);

export default Score;

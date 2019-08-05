import React from "react";
import "./style.css";

// function Character(props) {
//   console.log("<debug> position " + props.positionCtr);
//   return (
//     // <div class='col-sm-3'>
//       <div className="img-container" id={props.key}>
//         <img alt="skyrim character" src={props.image} />
//       </div>
//     // </div>
//   );
// }

const Character = props => (
  <div className="card img-container hover">
      <img alt={props.name} src={props.image} id={props.id}
        onClick={() => props.shuffleCharacters(props.id)} className='shuffleScore'/>
  </div>
);

export default Character;

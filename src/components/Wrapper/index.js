import React from "react";
import "./style.css";

function Wrapper(props) {
  console.log("boom");
  // return <div className="wrapper">{props.children}</div>;
  return (
    // <div className="wrapper">
      <div className="container">
        {props.children}
      {/* </div> */}
    </div>);
}

export default Wrapper;

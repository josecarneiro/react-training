import React from "react";

export default props => (
  <div>
    {" "}
    Random value between {props.max} and {props.min} =>{" "}
    {Math.floor(Math.random() * (props.max - props.min + 1)) + props.min}
  </div>
);

import React from "react";
import Card from "react-bootstrap/Card";
export default props => (
  <Card>
    <p>
      Random value between {props.min} and {props.max} => {""}
      {Math.floor(Math.random() * (props.max - props.min) + props.min)}
    </p>
  </Card>
);

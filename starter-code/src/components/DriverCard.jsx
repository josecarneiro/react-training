import React from "react";
import numbersAsStars from "./numbersAsStars";

export default function DriverCard(props) {
  var divStyle = {
    width: "30%",
    height: "200px",
    marginBottom: "10px",
    backgroundColor: `blue`,
    color: "white"
  };
  return (
    <div>
      <div style={divStyle}>
        <p>
          <img src={props.img} alt={props.name} width="50px" />
        </p>
        <p>{props.name}</p>
        <p>{numbersAsStars(props.rating)}</p>
        <p>
          {props.car.model} - {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

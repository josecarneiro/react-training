import React from "react";
import Rating from "./Rating";

const DriverCard = props => {
  const divStyle = {
    backgroundColor: "#455EB5",
    borderRadius: "1em",
    height: "8em",
    width: "30em",
    padding: "1em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  };
  const subDivStyle = {
    color: "white",
    padding: "0 1em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start"
  };
  return (
    <div style={divStyle}>
      <img
        alt=""
        src={props.img}
        style={{
          borderRadius: "1000px",
          height: "8em",
          width: "8em",
          objectFit: "cover"
        }}
      />
      <div style={subDivStyle}>
        <span>
          <b>{props.name}</b>
        </span>
        <Rating>{props.rating}</Rating>
        <span>
          <small>
            {props.car.model} &ndash; {props.car.licensePlate}
          </small>
        </span>
      </div>
    </div>
  );
};

export default DriverCard;

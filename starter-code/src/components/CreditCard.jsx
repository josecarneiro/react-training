import React from "react";

export default function CreditCard(props) {
  var divStyle = {
    width: "20%",
    height: "100px",
    marginBottom: "10px",
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`
  };

  return (
    <div>
      <div style={divStyle}>
        <p>{props.number}</p>
        <p>
          Expires: {props.expirationMonth}/{props.expirationYear}
        </p>
        <p>Expires: {props.owner}</p>
      </div>
    </div>
  );
}

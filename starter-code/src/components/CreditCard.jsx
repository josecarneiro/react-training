import React from "react";

export default function CreditCard(props) {
  const divStyle = {
    width: "18em",
    height: "10em",
    padding: "1em",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "1em",
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`
  };
  const styledCC = "•••• •••• •••• " + props.number.slice(12, 16);
  return (
    <div style={divStyle}>
      <div style={{ alignSelf: "flex-end" }}>
        {props.type === "Visa" ? "Visa" : "MasterCard"}
      </div>
      <div style={{ fontSize: "2em" }}>{styledCC}</div>
      <div style={{ alignSelf: "flex-start" }}>
        {props.bank}&nbsp;&nbsp;&nbsp;Exp. {props.expirationMonth}/
        {props.expirationYear}
        <br />
        {props.owner}
      </div>
    </div>
  );
}

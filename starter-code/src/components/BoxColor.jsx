import React from "react";

export default function BoxColor(props) {
  const divStyle = {
    width: "20em",
    height: "4em",
    border: "1px solid black",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
    color: (props.r + props.g + props.b) / 3 > 99 ? "black" : "white"
  };
  let hexR = props.r.toString(16);
  if (hexR.length < 2) {
    hexR = "0" + hexR;
  }
  let hexG = props.g.toString(16);
  if (hexG.length < 2) {
    hexG = "0" + hexG;
  }
  let hexB = props.b.toString(16);
  if (hexB.length < 2) {
    hexB = "0" + hexB;
  }
  return (
    <div style={divStyle}>
      <div>
        rgb({props.r}, {props.g}, {props.b})
      </div>
      <div>
        #{hexR}
        {hexG}
        {hexB}
      </div>
    </div>
  );
}

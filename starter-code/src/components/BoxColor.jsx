import React from "react";

export default function BoxColor(props) {
  var divStyle = {
    width: "100%",
    height: "100px",
    marginBottom: "10px",
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
  };
  return (
    <div>
      <div style={divStyle}></div>
    </div>
  );
}

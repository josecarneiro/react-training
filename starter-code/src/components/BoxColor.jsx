import React from "react";
import Card from "react-bootstrap/Card";

function decimalToHexadecimal(decimalColor) {
  let hexaDecimal = Number(decimalColor).toString(16);
  return hexaDecimal.length === 1 ? "0" + hexaDecimal : hexaDecimal;
}

function rgbColorToHex(r, g, b) {
  return (
    decimalToHexadecimal(r) + decimalToHexadecimal(g) + decimalToHexadecimal(b)
  );
}
export default function(props) {
  let hexaDecimal = rgbColorToHex(`${props.r}`, `${props.g}`, `${props.b}`);
  console.log(hexaDecimal);
  console.log(`${props.r}, ${props.g}`);
  return (
    <Card
      style={{
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`,
        height: "100px"
      }}
    >
      <h4 className="text-center">
        rgb({props.r}, {props.g}, {props.b})
      </h4>
      <h4 className="text-center">#{hexaDecimal}</h4>
    </Card>
  );
}

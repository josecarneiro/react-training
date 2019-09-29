import React from "react";
import Card from "react-bootstrap/Card";

export default function Rating(props) {
  const rating = Math.round(props.children);
  let star = "";
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      star += "★";
    } else {
      star += "☆";
    }
  }
  return (
    <Card
      style={{
        color: "green",
        fontSize: "2em"
      }}
    >
      {star}
    </Card>
  );
}

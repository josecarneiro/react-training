import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function NumbersTable(props) {
  const maxNumber = props.limit;
  console.log(maxNumber);
  let numbers = "";
  for (let i = 0; i <= maxNumber; i++) {
    if (i % 2) {
      numbers += i + " ";
    }
  }

  return (
    <Col>
      <Card style={{ fontSize: "3em" }}>{numbers}</Card>
    </Col>
  );
}

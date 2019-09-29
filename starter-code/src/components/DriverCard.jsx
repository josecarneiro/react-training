import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Rating from "./Rating";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function DriverCard(props) {
  //   const rating = Rating(`${props.rating}`);
  //   console.log("rating", rating);
  const rating = Math.round(props.rating);
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
        backgroundColor: "#3b5998",
        color: "white",
        borderRadius: 20
      }}
    >
      <Row>
        <Col>
          <Image
            src={props.img}
            style={{
              marginTop: "20px",
              marginLeft: "450px"
            }}
            width="20%"
            height="120px"
            roundedCircle
          />
        </Col>
        <Col
          style={{
            marginTop: "30px"
          }}
        >
          <Card.Title>{props.name}</Card.Title>
          <Card.Title>{star}</Card.Title>
          <Card.Text>
            {props.car.model} - {props.car.licensePlate}
          </Card.Text>
          <br />
        </Col>
      </Row>
    </Card>
  );
}

import React, { Component } from "react";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

export default function CreditCard(props) {
  const cardStyle = {
    marginBottom: "10px",
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
    height: "200px"
  };
  const srcImage =
    `${props.type}` === "Visa" ? "/img/visa.png" : "/img/master-card.svg";
  return (
    <Col xs={6} md={4}>
      <Card style={cardStyle} className="cardImg" rounded>
        <img
          src={srcImage}
          style={{ marginTop: "20px", marginLeft: "230px" }}
          width="23%"
          height="30px"
        />
        <Card.Body>
          <Card.Text
            className="text-center"
            style={{ marginTop: "10px", fontSize: "1.5em" }}
          >
            •••• •••• •••• {props.number.substr(12)}
          </Card.Text>
          <Card.Text>
            {props.expirationMonth}/{props.expirationYear.toString().substr(2)}
            <span> {props.bank}</span> <br />
            {props.owner}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

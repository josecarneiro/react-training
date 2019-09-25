import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

export default function CreditCard(props) {
  const cardStyle = {
    marginBottom: "10px",
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
    height: "200px"
    // width: "50%"
  };

  return (
    <Row>
      <Col xs={6} md={4}>
        <Card style={cardStyle} rounded>
          {/* <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              width="1px"
            /> */}
          <Card.Body>
            <Card.Text
              className="text-center"
              style={{ marginTop: "40px", fontSize: "1.5em" }}
            >
              •••• •••• •••• {props.number.substr(12)}
            </Card.Text>
            <Card.Text>
              {props.expirationMonth}/
              {props.expirationYear.toString().substr(2)}
              <span> {props.bank}</span> <br />
              {props.owner}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

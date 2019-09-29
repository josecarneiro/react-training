import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

export default class IdCard extends Component {
  render() {
    return (
      <Card>
        <Row>
          <Image src={this.props.picture} thumbnail />
          <Col>
            <span>
              <strong>First Name: </strong>
              {this.props.firstName}
            </span>
            <br />
            <span>
              <strong>Last Name: </strong>
              {this.props.lastName}
            </span>
            <br />
            <span>
              <strong>Gender: </strong>
              {this.props.gender}
            </span>
            <br />
            <span>
              <strong>Height: </strong>
              {this.props.height}
            </span>
            <br />
            <span>
              <strong>Birth: </strong>
              {this.props.birth}
            </span>
            <br />
          </Col>
        </Row>
      </Card>
    );
  }
}
